import { Link } from 'react-router-dom';
import { SITE_URL } from '../../utils/constants';

import { t, appUrl, locale, basename } from '../../i18n';
const FOOTER_SECTIONS = [
  {
    title: t('Produto'),
    links: [
      { label: t('Conheça o produto'), href: '#produto' },
      { label: t('Como funciona'), href: '#how-it-works' },
      { label: t('Integração WhatsApp'), href: '#whatsapp' },
      { label: t('Celular e computador'), href: '#celular' },
      { label: t('Planos e preços'), href: '#pricing' },
      { label: t('Perguntas frequentes'), href: '#faq' },
      { label: t('Blog'), to: '/blog', href: '/blog' },
      { label: t('App para computador'), to: '/download' },
      { label: t('App Android'), href: 'https://play.google.com/store/apps/details?id=app.trativa' },
    ],
  },
  {
    title: t('Conta'),
    links: [
      { label: t('Criar conta'), href: appUrl(`${SITE_URL}/register`) },
      { label: t('Fazer login'), href: appUrl(`${SITE_URL}/login`) },
    ],
  },
  {
    title: t('Suporte'),
    links: [
      { label: 'suporte@trativa.com.br', href: 'mailto:suporte@trativa.com.br' },
    ],
  },
];

const LEGAL_LINKS = [
  { label: t('Política de Privacidade'), to: '/privacidade' },
  { label: t('Termos de Uso'), to: '/termos' },
  { label: t('Cancelamento'), to: '/cancelamento' },
  { label: t('Reembolso'), to: '/reembolso' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <footer className="bg-ink text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 40 40" className="w-5 h-5" fill="white" aria-hidden="true">
                  <path d="M 8,6 L 32,6 Q 36,6 36,10 L 36,14 L 24,14 L 24,32 Q 24,36 20,36 Q 16,36 16,32 L 16,14 L 4,14 L 4,10 Q 4,6 8,6 Z"/>
                </svg>
              </div>
              <span className="font-display text-white font-bold text-lg tracking-tight">Trativa</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('CRM de leads feito para equipes comerciais brasileiras. Organize seus contatos, acompanhe o funil e feche mais negócios.')}
            </p>
          </div>

          {/* Link sections */}
          {FOOTER_SECTIONS.map(section => (
            <div key={section.title}>
              <h3 className="text-white text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    {link.to && !(locale !== 'pt-BR' && link.to === '/blog') ? (
                      <Link
                        to={link.to}
                        onClick={scrollToTop}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            {t('© 2026 Trativa. Todos os direitos reservados.')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {LEGAL_LINKS.map(link => (
              // Páginas legais existem só em português.
              locale === 'pt-BR' ? (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={scrollToTop}
                  className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a key={link.to} href={link.to} hrefLang="pt-BR" className="text-xs text-gray-400 hover:text-gray-200 transition-colors">
                  {link.label}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
