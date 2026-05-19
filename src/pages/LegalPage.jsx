import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const slugByTitle = {
  'Política de Privacidade': '/privacidade',
  'Termos de Uso': '/termos',
  'Política de Cancelamento': '/cancelamento',
  'Política de Reembolso': '/reembolso',
};

export default function LegalPage({ title, lastUpdated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const path = slugByTitle[title] || '/';
  const seoTitle = `${title} | Trativa`;
  const description = `${title} da Trativa, CRM de leads para equipes comerciais brasileiras.`;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <SEO title={seoTitle} description={description} path={path} robots="noindex, follow" />
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors"
            >
              ← Voltar ao início
            </Link>
          </div>

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-gray-200">
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-sm text-gray-500">
                Última atualização: {lastUpdated} · Versão 1.0
              </p>
            )}
          </div>

          {/* Content */}
          <div className="legal-content">
            {children}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
