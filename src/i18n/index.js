// Idiomas da landing: português (trativa.app/), inglês (/en) e espanhol (/es).
//
// O idioma vem do começo do caminho; o roteador usa esse prefixo como basename, então
// todos os links internos continuam iguais. Texto-fonte em português: t('Planos')
// procura em en.json / es.json e, sem tradução, mostra o português.
import en from './en.json';
import es from './es.json';

const PREFIXES = { en: 'en', es: 'es' };

export const LOCALES = [
  { code: 'pt-BR', label: 'Português', short: 'PT', prefix: '' },
  { code: 'en', label: 'English', short: 'EN', prefix: '/en' },
  { code: 'es', label: 'Español', short: 'ES', prefix: '/es' },
];

function detect() {
  if (typeof window === 'undefined') return 'pt-BR';
  const first = window.location.pathname.split('/')[1];
  return PREFIXES[first] ? first : 'pt-BR';
}

export const locale = detect();
export const basename = locale === 'pt-BR' ? '' : `/${locale}`;
export const localeTag = locale === 'en' ? 'en-US' : locale === 'es' ? 'es-419' : 'pt-BR';
export const ogLocale = locale === 'en' ? 'en_US' : locale === 'es' ? 'es_LA' : 'pt_BR';
export const currency = locale === 'pt-BR' ? 'BRL' : 'USD';

const dict = locale === 'en' ? en : locale === 'es' ? es : null;

if (typeof document !== 'undefined') document.documentElement.lang = locale;

export function t(text, vars) {
  let out = text;
  if (dict && typeof text === 'string' && dict[text]) out = dict[text];
  if (vars && typeof out === 'string') {
    out = out.replace(/\{(\w+)\}/g, (all, k) => (vars[k] !== undefined && vars[k] !== null ? String(vars[k]) : all));
  }
  return out;
}

/** Caminho da mesma página em outro idioma (mantém âncora e query). */
export function pathFor(code) {
  const target = LOCALES.find((l) => l.code === code) || LOCALES[0];
  const rest = window.location.pathname.replace(/^\/(en|es)(?=\/|$)/, '') || '/';
  return `${target.prefix}${rest === '/' && target.prefix ? '' : rest}${window.location.search}${window.location.hash}` || '/';
}

/** Link para o app web no idioma da página (o app lê ?lang=). */
export function appUrl(base) {
  if (locale === 'pt-BR') return base;
  return `${base}${base.includes('?') ? '&' : '?'}lang=${locale}`;
}

/** Preço formatado no idioma: R$ 49 · US$ 12. */
export function money(value) {
  return new Intl.NumberFormat(localeTag, { style: 'currency', currency, maximumFractionDigits: 0 }).format(value);
}
