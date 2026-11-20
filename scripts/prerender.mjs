// Pré-renderização de SEO (roda depois do `vite build`).
//
// A landing é uma SPA: sem isto, todas as rotas recebiam o mesmo index.html, com o
// canonical fixo em https://trativa.app/ e nenhum texto no HTML. O Google lia cada
// post do blog como "cópia da home" e não indexava.
//
// Para cada rota pública este script grava um HTML próprio em dist/ com:
//   - <title>, description, canonical, og:url e robots daquela página;
//   - hreflang pt-BR/en/es nas páginas traduzidas;
//   - o conteúdo principal em HTML puro dentro de #root (o React substitui ao carregar).
// Com "cleanUrls" no vercel.json, /blog/slug é servido por dist/blog/slug.html.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://trativa.app';

// blogPosts.js importa constants/i18n: empacota com esbuild para rodar no Node.
const tmp = join(ROOT, 'node_modules', '.cache', 'prerender-blog.mjs');
mkdirSync(dirname(tmp), { recursive: true });
await build({
  entryPoints: [join(ROOT, 'src/utils/blogPosts.js')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmp,
  loader: { '.json': 'json' },
  logLevel: 'silent',
});
const { BLOG_POSTS } = await import(`${tmp}?t=${Date.now()}`);

const dict = {
  en: JSON.parse(readFileSync(join(ROOT, 'src/i18n/en.json'), 'utf8')),
  es: JSON.parse(readFileSync(join(ROOT, 'src/i18n/es.json'), 'utf8')),
};
const tr = (lang, text, vars = {}) => {
  const out = (lang !== 'pt-BR' && dict[lang]?.[text]) || text;
  return out.replace(/\{(\w+)\}/g, (all, k) => (vars[k] !== undefined ? String(vars[k]) : all));
};

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const TEMPLATE = readFileSync(join(DIST, 'index.html'), 'utf8');

function setTag(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender: não achei ${label} no index.html`);
  return html.replace(regex, replacement);
}

function render({ path, lang = 'pt-BR', title, description, robots = 'index, follow', alternates, body }) {
  const url = `${SITE}${path === '/' ? '/' : path}`;
  const htmlLang = lang;
  const ogLocale = lang === 'en' ? 'en_US' : lang === 'es' ? 'es_LA' : 'pt_BR';
  let html = TEMPLATE;
  html = setTag(html, /<html lang="[^"]*">/, `<html lang="${htmlLang}">`, '<html lang>');
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`, '<title>');
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(description)}" />`, 'description');
  html = setTag(html, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`, 'robots');
  html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, 'canonical');
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  html = setTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(title)}" />`, 'og:title');
  html = setTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(description)}" />`, 'og:description');
  html = setTag(html, /<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${ogLocale}" />`, 'og:locale');
  html = setTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(title)}" />`, 'twitter:title');
  html = setTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(description)}" />`, 'twitter:description');
  if (alternates) {
    const rest = alternates; // caminho sem prefixo de idioma
    const links = [
      ['pt-BR', `${SITE}${rest}`],
      ['en', `${SITE}/en${rest === '/' ? '' : rest}`],
      ['es', `${SITE}/es${rest === '/' ? '' : rest}`],
      ['x-default', `${SITE}${rest}`],
    ]
      .map(([l, h]) => `<link rel="alternate" hreflang="${l}" href="${h}" data-hreflang="1" />`)
      .join('\n    ');
    html = html.replace('</head>', `    ${links}\n  </head>`);
  }
  if (body) html = setTag(html, /<div id="root"><\/div>/, `<div id="root">${body}</div>`, '#root');

  const file = path === '/' ? join(DIST, 'index.html') : join(DIST, `${path.replace(/^\//, '')}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  return path;
}

const WRAP = (inner) => `<main class="min-h-screen bg-white pt-24 pb-20"><div class="max-w-3xl mx-auto px-4 sm:px-6">${inner}</div></main>`;

const postLinks = BLOG_POSTS.map(
  (p) => `<li><a href="/blog/${p.slug}">${esc(p.title)}</a><p>${esc(p.excerpt)}</p></li>`,
).join('');

const pages = [];

// Home e download nos três idiomas.
for (const lang of ['pt-BR', 'en', 'es']) {
  const prefix = lang === 'pt-BR' ? '' : `/${lang}`;
  const homeTitle = tr(lang, 'Trativa — CRM de Leads para Equipes Comerciais Brasileiras');
  const homeDesc = tr(
    lang,
    'CRM de leads com pipeline Kanban de 9 etapas, WhatsApp oficial (Cloud API), metas, funil de vendas e app Android. Teste grátis por {TRIAL_DAYS} dias, sem cartão de crédito.',
    { TRIAL_DAYS: 30 },
  );
  pages.push(
    render({
      path: prefix || '/',
      lang,
      title: homeTitle,
      description: homeDesc,
      alternates: '/',
      body: '',
    }),
  );
  const dlTitle = tr(lang, 'Baixar Trativa Desktop — Windows, macOS e Linux');
  const dlDesc = tr(
    lang,
    'Instale o Trativa Desktop no seu computador e gerencie leads com mais agilidade. Disponível para Windows, macOS e Linux, com atualizações automáticas.',
  );
  pages.push(
    render({
      path: `${prefix}/download`,
      lang,
      title: dlTitle,
      description: dlDesc,
      alternates: '/download',
      body: '',
    }),
  );
}

// Blog (só em português).
const blogTitle = 'Blog Trativa | Gestão de leads, vendas e atendimento';
const blogDesc =
  'Guias práticos para equipes comerciais organizarem leads, funil de vendas, WhatsApp, metas e relatórios com mais clareza.';
pages.push(
  render({
    path: '/blog',
    title: blogTitle,
    description: blogDesc,
    body: WRAP(`<h1>Blog Trativa</h1><p>${esc(blogDesc)}</p><ul>${postLinks}</ul>`),
  }),
);

for (const post of BLOG_POSTS) {
  const sections = (post.sections || [])
    .map(
      (s) =>
        `<section><h2>${esc(s.heading)}</h2>${(s.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join('')}` +
        (s.items ? `<ul>${s.items.map((i) => `<li>${esc(typeof i === 'string' ? i : i.text || i.title || '')}</li>`).join('')}</ul>` : '') +
        `</section>`,
    )
    .join('');
  pages.push(
    render({
      path: `/blog/${post.slug}`,
      title: `${post.title} | Blog Trativa`,
      description: post.description,
      body:
        WRAP(`<article><p><a href="/blog">Blog</a> · ${esc(post.category)} · ${esc(post.readTime)}</p>` +
          `<h1>${esc(post.title)}</h1><p>${esc(post.excerpt)}</p>${sections}</article>`),
    }),
  );
}

// Páginas legais: continuam fora do índice (noindex), mas com título próprio.
const LEGAL = {
  '/privacidade': 'Política de Privacidade',
  '/termos': 'Termos de Uso',
  '/cancelamento': 'Política de Cancelamento',
  '/reembolso': 'Política de Reembolso',
};
for (const [path, name] of Object.entries(LEGAL)) {
  pages.push(
    render({
      path,
      title: `${name} | Trativa`,
      description: `${name} da Trativa, CRM de leads para equipes comerciais brasileiras.`,
      robots: 'noindex, follow',
      body: '',
    }),
  );
}

console.log(`prerender: ${pages.length} páginas → ${pages.join(', ')}`);
