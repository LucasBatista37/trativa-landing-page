import { useEffect } from 'react';
import { LANDING_URL } from '../utils/constants';

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
  jsonLd,
}) {
  useEffect(() => {
    const url = `${LANDING_URL}${path === '/' ? '/' : path}`;

    document.title = title;
    setCanonical(url);

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', robots);

    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:site_name"]', 'content', 'Trativa');
    setMeta('meta[property="og:locale"]', 'content', 'pt_BR');

    setMeta('meta[name="twitter:card"]', 'content', 'summary');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    setJsonLd(jsonLd);
  }, [description, jsonLd, path, robots, title, type]);

  return null;
}
