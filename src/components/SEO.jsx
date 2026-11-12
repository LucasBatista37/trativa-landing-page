import { useEffect } from 'react';
import { LANDING_URL } from '../utils/constants';
import { t, basename, ogLocale, LOCALES } from '../i18n';

const setMeta = (selector, attr, value) => {
  if (!value) return;
  const tag = document.head.querySelector(selector);
  if (tag) tag.setAttribute(attr, value);
};

const setCanonical = (url) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

// <link rel="alternate" hreflang> para as versões pt/en/es da mesma página.
const setAlternates = (path, on) => {
  document.head.querySelectorAll('link[data-hreflang]').forEach((l) => l.remove());
  if (!on) return;
  const rest = path === '/' ? '/' : path;
  const entries = [...LOCALES.map((l) => [l.code === 'pt-BR' ? 'pt-BR' : l.code, `${LANDING_URL}${l.prefix}${rest === '/' && l.prefix ? '' : rest}`]), ['x-default', `${LANDING_URL}${rest}`]];
  for (const [lang, href] of entries) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', lang);
    link.setAttribute('href', href);
    link.setAttribute('data-hreflang', '1');
    document.head.appendChild(link);
  }
};

const setJsonLd = (jsonLd) => {
  const id = 'route-json-ld';
  const previous = document.getElementById(id);
  if (previous) previous.remove();

  if (!jsonLd) return;

  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
};

export default function SEO({
  title,
  description,
  path = '/',
  type = 'website',
  robots = 'index, follow',
  image = `${LANDING_URL}/og-trativa-simple-system.png`,
  jsonLd,
  alternates = false,
}) {
  useEffect(() => {
    const url = `${LANDING_URL}${basename}${path === '/' ? (basename ? '' : '/') : path}`;
    setAlternates(path, alternates);

    document.title = title;
    setCanonical(url);

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', robots);

    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:image:width"]', 'content', '1200');
    setMeta('meta[property="og:image:height"]', 'content', '630');
    setMeta('meta[property="og:image:type"]', 'content', 'image/png');
    setMeta('meta[property="og:image:alt"]', 'content', t('Trativa — CRM para organizar leads, WhatsApp oficial e relatórios em tempo real'));
    setMeta('meta[property="og:site_name"]', 'content', 'Trativa');
    setMeta('meta[property="og:locale"]', 'content', ogLocale);

    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);
    setMeta('meta[name="twitter:image:alt"]', 'content', t('Trativa — CRM para organizar leads, WhatsApp oficial e relatórios em tempo real'));

    setJsonLd(jsonLd);
  }, [alternates, description, image, jsonLd, path, robots, title, type]);

  return null;
}
