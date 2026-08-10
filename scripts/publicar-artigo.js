#!/usr/bin/env node
'use strict';
/**
 * Publica automaticamente o proximo artigo da fila (scripts/fila-artigos.json)
 * no blog do site da Dra. Amanda Reis.
 *
 * Roda toda quarta-feira via GitHub Actions (.github/workflows/publicar-artigo-semanal.yml).
 * Usa a API da Anthropic (variavel de ambiente ANTHROPIC_API_KEY) para escrever
 * o conteudo do artigo, no estilo dos artigos ja publicados no site.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const ARTIGOS_PATH = path.join(ROOT, 'blog', 'artigos.js');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
const FILA_PATH = path.join(__dirname, 'fila-artigos.json');

function removerAcentos(str) {
  return String(str)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function dataHojeBrasilia() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  return { br: `${dd}/${mm}/${yyyy}`, iso: `${yyyy}-${mm}-${dd}` };
}

function carregarArtigosExistentes() {
  const codigo = fs.readFileSync(ARTIGOS_PATH, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(codigo, sandbox);
  return { codigo, artigos: sandbox.window.ARTIGOS || [] };
}

async function gerarConteudoComIA(titulo, categoria, exemploEstilo) {
  const prompt = `Voce e redator juridico do escritorio da Dra. Amanda Reis, advogada em Brasilia-DF.
Escreva um artigo de blog juridico sobre o tema: "${titulo}" (area: ${categoria}).

Siga ESTRITAMENTE este estilo de escrita (exemplo de um artigo anterior do mesmo blog):
"""
${exemploEstilo}
"""

Regras obrigatorias:
- Responda APENAS com um JSON valido, sem nenhum texto antes ou depois, no formato:
{"resumo": "1 a 2 frases (max 200 caracteres) para o card do blog", "conteudo": "HTML do artigo"}
- O campo "conteudo" deve ser uma unica string HTML (sem quebras de linha reais dentro da string), comecando com um paragrafo <p> de introducao, com 3 a 5 subtitulos <h3> intercalados com <p>, podendo usar <ul><li> quando fizer sentido.
- Tamanho do "conteudo": entre 1800 e 2800 caracteres de HTML.
- Tom: profissional, claro, acessivel a quem nao e da area juridica, sem sensacionalismo.
- Termine sempre mencionando que a Dra. Amanda Reis pode orientar/atuar no caso, como uma chamada sutil para contato.
- NAO use acentos, cedilha ou til em nenhuma palavra (escreva "nao" em vez de "nao" com til, "atencao" em vez de "atencao" com til, etc), pois o conteudo do site nao usa acentuacao.
- NAO invente numeros de leis, artigos ou percentuais especificos sem certeza; prefira explicacoes gerais e recomende sempre a analise de uma advogada para o caso concreto.`;

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-5',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!resp.ok) {
    throw new Error(`Erro na API da Anthropic: ${resp.status} ${await resp.text()}`);
  }

  const data = await resp.json();
  const texto = (data.content || [])
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n')
    .trim();

  const jsonLimpo = texto.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();

  try {
    return JSON.parse(jsonLimpo);
  } catch (e) {
    throw new Error('Nao foi possivel interpretar o JSON retornado pela IA:\n' + texto);
  }
}

function inserirArtigo(codigoAtual, novoArtigo) {
  const linhas = [
    '',
    '  {',
    `    id: ${novoArtigo.id},`,
    `    titulo: "${novoArtigo.titulo.replace(/"/g, '\\"')}",`,
    `    categoria: "${novoArtigo.categoria}",`,
    `    data: "${novoArtigo.data}",`,
    `    resumo: "${novoArtigo.resumo.replace(/"/g, '\\"')}",`,
    `    foto: "",`,
    `    conteudo: "${novoArtigo.conteudo.replace(/"/g, '\\"')}"`,
    '  },',
    '',
  ].join('\n');

  const marcador = '];';
  const idx = codigoAtual.lastIndexOf(marcador);
  if (idx === -1) throw new Error('Nao encontrei o fechamento "];" em blog/artigos.js');
  return codigoAtual.slice(0, idx) + linhas + codigoAtual.slice(idx);
}

function atualizarSitemap(novoId, dataIso) {
  let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');

  sitemap = sitemap.replace(
    /(<loc>https:\/\/draamandareis\.com\.br\/blog\/index\.html<\/loc>\s*<lastmod>)[^<]+(<\/lastmod>)/,
    `$1${dataIso}$2`
  );

  const novaEntrada =
    `  <url>\n` +
    `    <loc>https://draamandareis.com.br/blog/artigo.html?id=${novoId}</loc>\n` +
    `    <lastmod>${dataIso}</lastmod>\n` +
    `    <changefreq>yearly</changefreq>\n` +
    `    <priority>0.6</priority>\n` +
    `  </url>\n\n` +
    `</urlset>`;

  sitemap = sitemap.replace(/<\/urlset>\s*$/, novaEntrada);
  fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('Variavel de ambiente ANTHROPIC_API_KEY nao configurada (adicione como Secret do repositorio).');
  }

  const fila = JSON.parse(fs.readFileSync(FILA_PATH, 'utf8'));
  if (!fila.length) {
    console.log('Fila de artigos vazia. Nada a publicar esta semana. Adicione novos temas em scripts/fila-artigos.json.');
    return;
  }

  const proximo = fila.shift();
  const { codigo, artigos } = carregarArtigosExistentes();
  const novoId = artigos.length ? Math.max(...artigos.map((a) => a.id)) + 1 : 1;
  const exemploEstilo = (artigos[0] && artigos[0].conteudo ? artigos[0].conteudo : '').slice(0, 900);

  const gerado = await gerarConteudoComIA(proximo.titulo, proximo.categoria, exemploEstilo);
  const { br: dataBr, iso: dataIso } = dataHojeBrasilia();

  const novoArtigo = {
    id: novoId,
    titulo: removerAcentos(proximo.titulo),
    categoria: proximo.categoria,
    data: dataBr,
    resumo: removerAcentos(gerado.resumo || ''),
    conteudo: removerAcentos(gerado.conteudo || ''),
  };

  const novoCodigo = inserirArtigo(codigo, novoArtigo);
  fs.writeFileSync(ARTIGOS_PATH, novoCodigo, 'utf8');
  atualizarSitemap(novoId, dataIso);
  fs.writeFileSync(FILA_PATH, JSON.stringify(fila, null, 2) + '\n', 'utf8');

  console.log(`Artigo #${novoId} publicado: "${novoArtigo.titulo}" (${novoArtigo.categoria}) em ${dataBr}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
