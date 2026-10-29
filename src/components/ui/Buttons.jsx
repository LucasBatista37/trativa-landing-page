import { ArrowRight, Play } from 'lucide-react';
import { PLAY_STORE_URL, SITE_URL } from '../../utils/constants';

export function PrimaryCTA({ children = 'Começar grátis', className = '', size = 'md' }) {
  const pad = size === 'lg' ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm sm:text-base';
  return (
    <a
      href={`${SITE_URL}/register`}
      className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand-600 font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)] transition hover:bg-brand-500 active:translate-y-px ${pad} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

export function DemoButton({ onClick, dark = true, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl px-5 py-3 text-sm font-semibold transition sm:text-base ${
        dark
          ? 'text-white ring-1 ring-white/20 hover:bg-white/5 hover:ring-white/40'
          : 'text-gray-900 ring-1 ring-line hover:bg-paper'
      } ${className}`}
    >
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${dark ? 'bg-white text-ink' : 'bg-ink text-white'}`}>
        <Play className="h-3 w-3 translate-x-px fill-current" aria-hidden="true" />
      </span>
      Ver demonstração
    </button>
  );
}

export function PlayStoreBadge({ className = '' }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white ring-1 ring-white/15 transition hover:bg-gray-900 ${className}`}
      aria-label="Baixar o app Trativa no Google Play (abre em nova aba)"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 flex-shrink-0" fill="none" aria-hidden="true">
        <path d="M2.69 22.86c.43.29.92.29 1.34.05L16.43 15.15L13.34 12L2.69 22.86Z" fill="#34A853" />
        <path d="M21.46 10.55L18.31 8.75L14.92 12L18.31 15.25L21.46 13.45C22.38 12.95 22.38 11.05 21.46 10.55Z" fill="#FBBC04" />
        <path d="M2.1 1.85C2.04 2.03 2 2.21 2 2.42V21.58C2 21.79 2.04 21.97 2.1 22.15L13.1 12L2.1 1.85Z" fill="#4285F4" />
        <path d="M4.03 1.08C3.61 0.84 3.12 0.84 2.69 1.13L13.34 12L16.43 8.85L4.03 1.08Z" fill="#EA4335" />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] text-gray-400">Disponível no</span>
        <span className="text-sm font-semibold">Google Play</span>
      </span>
    </a>
  );
}
