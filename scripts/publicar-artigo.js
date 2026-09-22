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
 *
 * IMAGENS DE CAPA: ficam DENTRO do proprio repositorio, na pasta blog/imagens/
 * (o Cloudinary nao e mais usado). A cada execucao o robo:
 *   1) confere todos os artigos e repara as capas que estiverem faltando
 *      (link antigo do Cloudinary, campo vazio ou arquivo que sumiu da pasta):
 *      primeiro tenta salvar a imagem do link antigo, se ainda estiver no ar;
 *      se nao der, gera uma nova (Nano Banana -> Pexels como reserva);
 *   2) publica o artigo da semana, ja com a capa salva em blog/imagens/.
 *
 * Modo so-imagens (node scripts/publicar-artigo.js --so-imagens): executa
 * apenas o passo 1, sem publicar artigo novo.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// O "sharp" so redimensiona/comprime as capas (1200x675, JPEG). E opcional:
// se nao estiver instalado, as imagens sao salvas do jeito que chegaram.
let sharp = null;
try {
  sharp = require('sharp');
} catch (e) {
  /* sem sharp: segue sem otimizar */
}

const ROOT = path.join(__dirname, '..');
const ARTIGOS_PATH = path.join(ROOT, 'blog', 'artigos.js');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
const FILA_PATH = path.join(__dirname, 'fila-artigos.json');

// Onde as capas ficam salvas dentro do repositorio, e como o caminho aparece
// no campo "foto" de blog/artigos.js (relativo a raiz do site).
const IMAGENS_DIR = path.join(ROOT, 'blog', 'imagens');
const IMAGENS_CAMINHO_SITE = 'blog/imagens';

// Tamanho final das capas (16:9, o mesmo formato dos cards do blog).
const CAPA_LARGURA = 1200;
const CAPA_ALTURA = 675;
const CAPA_QUALIDADE_JPEG = 82;

// Limites do reparo de imagens por execucao (evita estourar o limite gratuito
// das APIs de imagem). O que sobrar e reparado na execucao seguinte.
const MAX_REPAROS_POR_EXECUCAO = 8;
const PAUSA_ENTRE_IMAGENS_MS = 4000;

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

// Le o texto de blog/artigos.js e devolve a lista de artigos (window.ARTIGOS).
function analisarCodigo(codigo) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(codigo, sandbox);
  return sandbox.window.ARTIGOS || [];
}

function carregarArtigosExistentes() {
  const codigo = fs.readFileSync(ARTIGOS_PATH, 'utf8');
  return { codigo, artigos: analisarCodigo(codigo) };
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

// ---------------------------------------------------------------------------
//  IMAGENS DE CAPA: tudo fica salvo dentro do repositorio (blog/imagens/)
// ---------------------------------------------------------------------------

// "Revisão da vida toda: o que é" -> "revisao-da-vida-toda-o-que-e"
function slugify(texto) {
  const slug = String(texto)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  // Limita o tamanho do nome do arquivo sem cortar uma palavra no meio.
  const curto = slug.length > 60 ? slug.slice(0, 60).replace(/-[^-]*$/, '') : slug;
  return curto || 'artigo';
}

// Descobre o formato pelos primeiros bytes do arquivo (nao confia em extensao/URL).
function detectarExtensao(buffer) {
  if (!buffer || buffer.length < 12) return null;
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) return 'png';
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return 'jpg';
  if (buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') return 'webp';
  return null;
}

// Garante que o que chegou e mesmo uma imagem (e nao uma pagina de erro em HTML,
// por exemplo). Se nao for, lanca erro e o robo tenta a proxima fonte.
function validarImagem(buffer) {
  if (!detectarExtensao(buffer)) {
    throw new Error('o arquivo recebido nao parece ser uma imagem (png/jpg/webp).');
  }
  return buffer;
}

// Salva a capa em blog/imagens/ (redimensionada para 1200x675 e comprimida em
// JPEG, se o sharp estiver disponivel) e devolve o caminho para o campo "foto".
async function salvarImagemNoRepositorio(buffer, titulo, id) {
  fs.mkdirSync(IMAGENS_DIR, { recursive: true });

  let dados = buffer;
  let ext = detectarExtensao(buffer) || 'png';

  if (sharp) {
    try {
      dados = await sharp(buffer)
        .resize(CAPA_LARGURA, CAPA_ALTURA, { fit: 'cover', position: 'attention' })
        .jpeg({ quality: CAPA_QUALIDADE_JPEG, mozjpeg: true })
        .toBuffer();
      ext = 'jpg';
    } catch (erro) {
      console.warn('Nao consegui otimizar a imagem com o sharp; salvando o original:', erro.message);
      dados = buffer;
    }
  }

  const base = slugify(titulo);
  let nome = `${base}.${ext}`;
  if (fs.existsSync(path.join(IMAGENS_DIR, nome))) nome = `${base}-${id}.${ext}`;

  fs.writeFileSync(path.join(IMAGENS_DIR, nome), dados);
  console.log(`Imagem salva em ${IMAGENS_CAMINHO_SITE}/${nome} (${Math.round(dados.length / 1024)} KB).`);
  return `${IMAGENS_CAMINHO_SITE}/${nome}`;
}

// Baixa uma imagem de um link (usado para resgatar as capas do link antigo
// do Cloudinary, caso ainda estejam no ar).
async function baixarImagemDaUrl(url) {
  const resp = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return validarImagem(Buffer.from(await resp.arrayBuffer()));
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

  return validarImagem(Buffer.from(imagem.inlineData.data, 'base64'));
}

async function buscarImagemNoPexels(categoria, indice = 0) {
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
  const fotos = data.photos || [];
  if (!fotos.length) throw new Error('Pexels nao retornou nenhuma foto para essa busca.');

  // Varia a foto escolhida (pelo id do artigo) para que artigos da mesma
  // categoria nao fiquem todos com a mesma capa.
  const foto = fotos[indice % fotos.length];

  const imgResp = await fetch(foto.src.large2x || foto.src.large);
  if (!imgResp.ok) throw new Error('Nao consegui baixar a foto do Pexels.');
  return validarImagem(Buffer.from(await imgResp.arrayBuffer()));
}

// Tenta gerar a capa com o Nano Banana; se falhar (sem chave, limite atingido,
// prompt recusado etc), cai pro banco de imagens Pexels. Devolve a imagem (Buffer)
// ou null se as duas fontes falharem (quem chamou decide o que fazer).
async function obterImagemDeCapa(titulo, categoria, id) {
  try {
    const imagem = await gerarImagemComNanoBanana(titulo, categoria);
    console.log('Capa gerada com Nano Banana.');
    return imagem;
  } catch (erroNanoBanana) {
    console.warn('Nano Banana falhou, tentando o banco de imagens (Pexels):', erroNanoBanana.message);
  }

  try {
    const imagem = await buscarImagemNoPexels(categoria, id);
    console.log('Capa obtida no Pexels (reserva).');
    return imagem;
  } catch (erroPexels) {
    console.warn('Pexels tambem falhou:', erroPexels.message);
    return null;
  }
}

// ---------------------------------------------------------------------------
//  REPARO DAS IMAGENS FALTANTES
// ---------------------------------------------------------------------------

// A capa "precisa de reparo" quando: o campo esta vazio, aponta para um link
// externo (ex.: Cloudinary antigo) ou aponta para um arquivo que nao existe
// mais na pasta do repositorio.
function fotoPrecisaReparo(foto) {
  if (!foto) return true;
  if (/^https?:\/\//i.test(foto)) return true;
  return !fs.existsSync(path.join(ROOT, foto));
}

function mapaDeFotos(codigo) {
  const mapa = {};
  analisarCodigo(codigo).forEach((a) => {
    mapa[a.id] = a.foto;
  });
  return mapa;
}

// Troca o campo "foto" de UM artigo (pelo id) direto no texto de blog/artigos.js,
// sem mexer em mais nada do arquivo. Depois confere que so essa foto mudou.
function substituirFotoDoArtigo(codigo, id, novaFoto) {
  const regex = new RegExp(`(\\bid:\\s*${id}\\s*,[\\s\\S]*?\\bfoto:\\s*)"[^"]*"`);
  if (!regex.test(codigo)) {
    throw new Error(`Nao encontrei o campo "foto" do artigo #${id} em blog/artigos.js`);
  }
  const novoCodigo = codigo.replace(regex, (_, prefixo) => `${prefixo}${JSON.stringify(novaFoto)}`);

  const antes = mapaDeFotos(codigo);
  const depois = mapaDeFotos(novoCodigo);
  const idsAntes = Object.keys(antes);
  const ok =
    idsAntes.length === Object.keys(depois).length &&
    idsAntes.every((k) => (String(k) === String(id) ? depois[k] === novaFoto : depois[k] === antes[k]));
  if (!ok) {
    throw new Error(`A troca da foto do artigo #${id} alteraria outros artigos; cancelada por seguranca.`);
  }
  return novoCodigo;
}

function pausar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Procura artigos com capa faltando e conserta um por um:
//   1) se a foto era um link antigo, tenta salvar a imagem dele (se ainda estiver no ar);
//   2) se nao der, gera uma imagem nova (Nano Banana -> Pexels);
//   3) salva o arquivo em blog/imagens/ e troca o campo "foto" em blog/artigos.js.
// Se nenhuma fonte funcionar, deixa o artigo como esta e tenta de novo na proxima execucao.
async function repararImagensFaltantes() {
  const { codigo: codigoInicial, artigos } = carregarArtigosExistentes();
  const pendentes = artigos.filter((a) => fotoPrecisaReparo(a.foto));

  if (!pendentes.length) {
    console.log('Todas as capas dos artigos estao salvas no repositorio. Nada a reparar.');
    return 0;
  }

  const lote = pendentes.slice(0, MAX_REPAROS_POR_EXECUCAO);
  console.log(`${pendentes.length} artigo(s) com capa faltando. Reparando ${lote.length} nesta execucao...`);

  let codigo = codigoInicial;
  let reparados = 0;
  let geradas = 0;

  for (const artigo of lote) {
    console.log(`\n[Artigo #${artigo.id}] ${artigo.titulo}`);
    try {
      let imagem = null;

      if (/^https?:\/\//i.test(artigo.foto || '')) {
        try {
          imagem = await baixarImagemDaUrl(artigo.foto);
          console.log('Imagem antiga resgatada do link original.');
        } catch (erro) {
          console.warn(`Link antigo fora do ar (${erro.message}). Vou gerar uma capa nova.`);
        }
      }

      if (!imagem) {
        if (geradas > 0) await pausar(PAUSA_ENTRE_IMAGENS_MS);
        geradas++;
        imagem = await obterImagemDeCapa(artigo.titulo, artigo.categoria, artigo.id);
      }

      if (!imagem) {
        console.warn('Nenhuma fonte de imagem funcionou agora. Tento de novo na proxima execucao.');
        continue;
      }

      const caminho = await salvarImagemNoRepositorio(imagem, artigo.titulo, artigo.id);
      codigo = substituirFotoDoArtigo(codigo, artigo.id, caminho);
      analisarCodigo(codigo); // garante que o arquivo continua valido antes de gravar
      fs.writeFileSync(ARTIGOS_PATH, codigo, 'utf8');
      reparados++;
    } catch (erro) {
      console.warn(`Nao consegui reparar a capa do artigo #${artigo.id}:`, erro.message);
    }
  }

  const restantes = pendentes.length - reparados;
  console.log(`\nReparo concluido: ${reparados} capa(s) reparada(s), ${restantes} ainda pendente(s).`);
  return reparados;
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
  const soImagens = process.env.MODO_EXECUCAO === 'so-imagens' || process.argv.includes('--so-imagens');

  // Passo 1 (sempre): confere as capas de todos os artigos e repara as que
  // estiverem faltando. Se der algum problema aqui, nao trava a publicacao.
  try {
    await repararImagensFaltantes();
  } catch (erro) {
    console.warn('Nao foi possivel conferir/reparar as capas dos artigos:', erro.message);
  }

  if (soImagens) {
    console.log('Modo "so imagens": nenhum artigo novo sera publicado nesta execucao.');
    return;
  }

  // Passo 2: publica o artigo da semana.
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

  // A capa e salva na pasta blog/imagens/ do repositorio. Se nao der pra obter
  // ou salvar agora, o artigo publica sem foto e o passo 1 repara na proxima execucao.
  let fotoCapa = '';
  const imagemCapa = await obterImagemDeCapa(tituloFinal, proximo.categoria, novoId);
  if (imagemCapa) {
    try {
      fotoCapa = await salvarImagemNoRepositorio(imagemCapa, tituloFinal, novoId);
    } catch (erro) {
      console.warn('Nao consegui salvar a capa no repositorio; o artigo vai sem foto por enquanto:', erro.message);
    }
  }

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
