#!/usr/bin/env node
'use strict';
/**
 * Publica automaticamente o proximo artigo da fila (scripts/fila-artigos.json)
 * no blog do site da Dra. Amanda Reis.
 *
 * Roda toda quarta-feira via GitHub Actions (.github/workflows/publicar-artigo-semanal.yml).
 * Usa a API da Groq (variavel de ambiente GROQ_API_KEY, gratuita) para escrever
 * o conteudo do artigo, com acentuacao correta, no estilo dos artigos ja
 * publicados no site.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const ARTIGOS_PATH = path.join(ROOT, 'blog', 'artigos.js');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
const FILA_PATH = path.join(__dirname, 'fila-artigos.json');

// Cloud name nao e segredo (ja aparece nas URLs publicas das imagens do site),
// so as chaves de API que ficam nos Secrets do repositorio.
const CLOUDINARY_CLOUD_NAME = 'dgqxadsmt';
const CLOUDINARY_FOLDER = 'blog-amanda-reis';

// Quando a fila tiver este numero de temas (ou menos), o robo gera novos
// temas sozinho antes de publicar, para nunca ficar sem assunto.
const FILA_MINIMA = 4;
// Quantos temas novos o robo gera de cada vez que a fila fica curta.
const QTD_TEMAS_A_GERAR = 12;

const CATEGORIAS_VALIDAS = ['Previdenciario', 'Trabalhista', 'Familia', 'Eleitoral'];

const TEMA_VISUAL_POR_CATEGORIA = {
  Previdenciario: 'aposentadoria, previdencia social, pessoa idosa tranquila em casa',
  Trabalhista: 'ambiente de trabalho, escritorio, relacoes trabalhistas',
  Familia: 'familia reunida, lar, cuidado, uniao',
  Eleitoral: 'urnas eletronicas, predio publico brasileiro, democracia',
};

const BUSCA_PEXELS_POR_CATEGORIA = {
  Previdenciario: 'retirement elderly pension',
  Trabalhista: 'workplace office law',
  Familia: 'family home together',
  Eleitoral: 'election vote government building',
};

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
  const prompt = `Você é redator jurídico do escritório da Dra. Amanda Reis, advogada em Brasília-DF.
Escreva um artigo de blog jurídico sobre o tema: "${titulo}" (área: ${categoria}).

Siga ESTRITAMENTE este estilo de escrita (exemplo de um artigo anterior do mesmo blog):
"""
${exemploEstilo}
"""

Regras obrigatórias:
- Responda APENAS com um JSON válido, sem nenhum texto antes ou depois, no formato:
{"titulo": "o titulo do artigo, com acentuacao correta", "resumo": "1 a 2 frases (max 200 caracteres) para o card do blog", "conteudo": "HTML do artigo"}
- O campo "conteudo" deve ser uma única string HTML (sem quebras de linha reais dentro da string), começando com um parágrafo <p> de introdução, com 3 a 5 subtítulos <h3> intercalados com <p>, podendo usar <ul><li> quando fizer sentido.
- Tamanho do "conteudo": entre 1800 e 2800 caracteres de HTML.
- Tom: profissional, claro, acessível a quem não é da área jurídica, sem sensacionalismo.
- Termine sempre mencionando que a Dra. Amanda Reis pode orientar/atuar no caso, como uma chamada sutil para contato.
- Escreva em português correto, COM acentuação, cedilha e til em todas as palavras que precisarem (ex.: "não", "atenção", "é", "força", "está"). Isso vale para os três campos, inclusive o "titulo".
- NÃO invente números de leis, artigos ou percentuais específicos sem certeza; prefira explicações gerais e recomende sempre a análise de uma advogada para o caso concreto.`;

  const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-120b',
      temperature: 0.7,
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!resp.ok) {
    throw new Error(`Erro na API da Groq: ${resp.status} ${await resp.text()}`);
  }

  const data = await resp.json();
  const texto = ((data.choices || [])[0]?.message?.content || '').trim();

  const jsonLimpo = texto.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();

  try {
    return JSON.parse(jsonLimpo);
  } catch (e) {
    throw new Error('Não foi possível interpretar o JSON retornado pela IA:\n' + texto);
  }
}

// Pede pra IA sugerir uma lista de novos temas de artigos, evitando repetir
// assuntos ja publicados ou ja na fila. Usada quando a fila esta acabando,
// para o robo "se alimentar" sozinho sem precisar editar fila-artigos.json.
async function gerarNovosTemas(titulosExistentes, quantidade) {
  const listaExistentes = titulosExistentes.map((t) => `- ${t}`).join('\n');

  const prompt = `Você é o editor de pauta do blog jurídico da Dra. Amanda Reis, advogada em Brasília-DF,
que atua nas áreas: Previdenciário, Trabalhista, Família e Eleitoral.

Sugira ${quantidade} NOVOS temas de artigos para o blog, distribuídos de forma equilibrada entre essas
4 áreas (aproximadamente ${Math.ceil(quantidade / 4)} temas por área).

Temas que JÁ FORAM usados no blog e NÃO podem se repetir nem ser muito parecidos:
"""
${listaExistentes || '(nenhum ainda)'}
"""

Regras obrigatórias:
- Responda APENAS com um JSON válido, sem nenhum texto antes ou depois, no formato:
{"temas": [{"categoria": "Previdenciario", "titulo": "titulo do artigo"}, ...]}
- O campo "categoria" deve ser EXATAMENTE uma destas strings: "Previdenciario", "Trabalhista", "Familia" ou "Eleitoral" (sem acento, exatamente assim).
- Os temas devem ser úteis e relevantes para o dia a dia de quem busca um advogado nessas áreas, com títulos específicos (não genéricos).
- Não repita nenhum tema da lista de já usados, nem variações muito próximas dele.
- Escreva os títulos em português correto, COM acentuação, cedilha e til (ex.: "não", "é", "situação").`;

  const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-120b',
      temperature: 0.8,
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!resp.ok) {
    throw new Error(`Erro na API da Groq (gerar novos temas): ${resp.status} ${await resp.text()}`);
  }

  const data = await resp.json();
  const texto = ((data.choices || [])[0]?.message?.content || '').trim();
  const jsonLimpo = texto.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();

  let parsed;
  try {
    parsed = JSON.parse(jsonLimpo);
  } catch (e) {
    throw new Error('Não foi possível interpretar o JSON de novos temas retornado pela IA:\n' + texto);
  }

  const temas = Array.isArray(parsed.temas) ? parsed.temas : [];

  // Filtra qualquer tema mal-formado ou com categoria invalida, por seguranca.
  return temas
    .filter((t) => t && typeof t.titulo === 'string' && CATEGORIAS_VALIDAS.includes(t.categoria))
    .map((t) => ({ categoria: t.categoria, titulo: t.titulo.trim() }));
}

// Garante que a fila nunca fique curta: se tiver poucos temas sobrando,
// pede novos temas pra IA e devolve a fila ja reabastecida.
async function reabastecerFilaSeNecessario(fila, artigosExistentes) {
  if (fila.length > FILA_MINIMA) return fila;

  console.log(`Fila com ${fila.length} tema(s) restante(s) (minimo: ${FILA_MINIMA}). Gerando novos temas...`);

  const titulosExistentes = [
    ...artigosExistentes.map((a) => a.titulo),
    ...fila.map((f) => f.titulo),
  ];

  try {
    const novosTemas = await gerarNovosTemas(titulosExistentes, QTD_TEMAS_A_GERAR);
    if (!novosTemas.length) {
      console.warn('A IA nao retornou novos temas validos. A fila segue como esta.');
      return fila;
    }
    console.log(`${novosTemas.length} novo(s) tema(s) gerado(s) e adicionado(s) a fila.`);
    return [...fila, ...novosTemas];
  } catch (erro) {
    // Se der erro ao gerar novos temas, o robo nao trava: so publica o que
    // ainda tiver na fila (se houver) e tenta reabastecer de novo na proxima semana.
    console.warn('Nao foi possivel gerar novos temas automaticamente:', erro.message);
    return fila;
  }
}

function assinarCloudinary(params, apiSecret) {
  const base = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join('&');
  return crypto.createHash('sha1').update(base + apiSecret).digest('hex');
}

async function subirImagemParaCloudinary(base64Data, mimeType) {
  if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error('CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET nao configuradas.');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const assinatura = assinarCloudinary({ folder: CLOUDINARY_FOLDER, timestamp }, process.env.CLOUDINARY_API_SECRET);

  const body = new URLSearchParams({
    file: `data:${mimeType};base64,${base64Data}`,
    api_key: process.env.CLOUDINARY_API_KEY,
    timestamp: String(timestamp),
    folder: CLOUDINARY_FOLDER,
    signature: assinatura,
  });

  const resp = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body,
  });

  if (!resp.ok) {
    throw new Error(`Erro ao subir imagem no Cloudinary: ${resp.status} ${await resp.text()}`);
  }

  const data = await resp.json();
  return data.secure_url;
}

async function gerarImagemComNanoBanana(titulo, categoria) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY nao configurada.');
  }

  const tema = TEMA_VISUAL_POR_CATEGORIA[categoria] || 'escritorio de advocacia, justica';
  const prompt = `Crie uma imagem de capa para um artigo de blog juridico intitulado "${titulo}".
Estilo: fotografia profissional editorial, cores neutras e sobrias (bege, marrom, cinza),
sem nenhum texto ou letra na imagem, sem rostos reconheciveis de pessoas famosas, formato paisagem.
Tema visual: ${tema}.`;

  const resp = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    }
  );

  if (!resp.ok) {
    throw new Error(`Erro na API do Nano Banana (Gemini): ${resp.status} ${await resp.text()}`);
  }

  const data = await resp.json();
  const partes = data?.candidates?.[0]?.content?.parts || [];
  const imagem = partes.find((p) => p.inlineData && p.inlineData.data);
  if (!imagem) throw new Error('Nano Banana nao retornou nenhuma imagem (pode ter recusado o prompt).');

  return subirImagemParaCloudinary(imagem.inlineData.data, imagem.inlineData.mimeType || 'image/png');
}

async function buscarImagemNoPexels(categoria) {
  if (!process.env.PEXELS_API_KEY) {
    throw new Error('PEXELS_API_KEY nao configurada.');
  }

  const query = BUSCA_PEXELS_POR_CATEGORIA[categoria] || 'law office justice';
  const resp = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
    { headers: { Authorization: process.env.PEXELS_API_KEY } }
  );

  if (!resp.ok) {
    throw new Error(`Erro na API do Pexels: ${resp.status} ${await resp.text()}`);
  }

  const data = await resp.json();
  const foto = (data.photos || [])[0];
  if (!foto) throw new Error('Pexels nao retornou nenhuma foto para essa busca.');

  const imgResp = await fetch(foto.src.large2x || foto.src.large);
  if (!imgResp.ok) throw new Error('Nao consegui baixar a foto do Pexels.');
  const buffer = Buffer.from(await imgResp.arrayBuffer());

  return subirImagemParaCloudinary(buffer.toString('base64'), 'image/jpeg');
}

// Tenta gerar a capa com o Nano Banana; se falhar (sem chave, limite atingido,
// prompt recusado etc), cai pro banco de imagens Pexels. Se os dois falharem,
// o artigo publica mesmo assim, so sem foto de capa.
async function obterImagemDeCapa(titulo, categoria) {
  try {
    const url = await gerarImagemComNanoBanana(titulo, categoria);
    console.log('Capa gerada com Nano Banana.');
    return url;
  } catch (erroNanoBanana) {
    console.warn('Nano Banana falhou, tentando o banco de imagens (Pexels):', erroNanoBanana.message);
  }

  try {
    const url = await buscarImagemNoPexels(categoria);
    console.log('Capa obtida no Pexels (reserva).');
    return url;
  } catch (erroPexels) {
    console.warn('Pexels tambem falhou, o artigo vai publicar sem foto de capa:', erroPexels.message);
    return '';
  }
}

function inserirArtigo(codigoAtual, novoArtigo) {
  const linhas = [
    '',
    '  {',
    `    id: ${novoArtigo.id},`,
    `    titulo: ${JSON.stringify(novoArtigo.titulo)},`,
    `    categoria: ${JSON.stringify(novoArtigo.categoria)},`,
    `    data: ${JSON.stringify(novoArtigo.data)},`,
    `    resumo: ${JSON.stringify(novoArtigo.resumo)},`,
    `    foto: ${JSON.stringify(novoArtigo.foto || '')},`,
    `    conteudo: ${JSON.stringify(novoArtigo.conteudo)}`,
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
  if (!process.env.GROQ_API_KEY) {
    throw new Error('Variavel de ambiente GROQ_API_KEY nao configurada (adicione como Secret do repositorio).');
  }

  let fila = JSON.parse(fs.readFileSync(FILA_PATH, 'utf8'));
  const { codigo, artigos } = carregarArtigosExistentes();

  // Antes de tudo, garante que a fila tenha temas suficientes. Se estiver
  // curta (ou vazia), o robo pede novos temas pra IA e completa sozinho.
  fila = await reabastecerFilaSeNecessario(fila, artigos);

  if (!fila.length) {
    console.log('Fila de artigos vazia e nao foi possivel gerar novos temas automaticamente. Nada a publicar esta semana.');
    fs.writeFileSync(FILA_PATH, JSON.stringify(fila, null, 2) + '\n', 'utf8');
    return;
  }

  const proximo = fila.shift();
  const novoId = artigos.length ? Math.max(...artigos.map((a) => a.id)) + 1 : 1;
  const exemploEstilo = (artigos[0] && artigos[0].conteudo ? artigos[0].conteudo : '').slice(0, 900);

  const gerado = await gerarConteudoComIA(proximo.titulo, proximo.categoria, exemploEstilo);
  const { br: dataBr, iso: dataIso } = dataHojeBrasilia();
  const tituloFinal = gerado.titulo || proximo.titulo;

  const fotoCapa = await obterImagemDeCapa(tituloFinal, proximo.categoria);

  const novoArtigo = {
    id: novoId,
    titulo: tituloFinal,
    categoria: proximo.categoria,
    data: dataBr,
    resumo: gerado.resumo || '',
    foto: fotoCapa,
    conteudo: gerado.conteudo || '',
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
