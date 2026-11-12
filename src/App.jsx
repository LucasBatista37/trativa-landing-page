import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SEO from './components/SEO';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Comparison from './components/sections/Comparison';
import ProductTour from './components/sections/ProductTour';
import Journey from './components/sections/Journey';
import WhatsAppSection from './components/sections/WhatsAppSection';
import Platforms from './components/sections/Platforms';
import MoreFeatures from './components/sections/MoreFeatures';
import Pricing from './components/sections/Pricing';
import FAQ, { FAQ_ITEMS } from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import { DemoProvider } from './components/media/DemoContext';
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const PrivacidadePage = lazy(() => import('./pages/legal/PrivacidadePage'));
const TermosPage = lazy(() => import('./pages/legal/TermosPage'));
const CancelamentoPage = lazy(() => import('./pages/legal/CancelamentoPage'));
const ReembolsoPage = lazy(() => import('./pages/legal/ReembolsoPage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
import { MotionConfig } from 'framer-motion';
import { LANDING_URL, PLANS, TRIAL_DAYS } from './utils/constants';

import { t, currency, locale } from './i18n';
// Blog e páginas legais existem só em português: em /en e /es vão para a versão PT.
function SoEmPortugues({ path, children }) {
  useEffect(() => {
    if (locale !== 'pt-BR') window.location.replace(path);
  }, [path]);
  return locale === 'pt-BR' ? children : null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const homeTitle = t('Trativa — CRM de Leads para Equipes Comerciais Brasileiras');
  const homeDescription = t('CRM de leads com pipeline Kanban de 9 etapas, WhatsApp oficial (Cloud API), metas, funil de vendas e app Android. Teste grátis por {TRIAL_DAYS} dias, sem cartão de crédito.', { TRIAL_DAYS });

  return (
    <DemoProvider>
    <div className="min-h-screen bg-white overflow-x-clip">
      <SEO
        title={homeTitle}
        description={homeDescription}
        path="/"
        alternates
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Trativa',
            applicationCategory: 'BusinessApplication',
            operatingSystem: t('Web, Android, Windows, macOS, Linux'),
            url: LANDING_URL,
            description: homeDescription,
            offers: PLANS.map((p) => ({
              '@type': t('Offer'),
              name: p.name,
              price: String(currency === 'USD' ? p.priceUsd : p.price),
              priceCurrency: currency,
              availability: 'https://schema.org/InStock',
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': t('FAQPage'),
            mainEntity: FAQ_ITEMS.map((f) => ({
              '@type': t('Question'),
              name: f.q,
              acceptedAnswer: { '@type': t('Answer'), text: f.a },
            })),
          },
        ]}
      />
      <Header />
      <main>
        <Hero />
        <Comparison />
        <ProductTour />
        <Journey />
        <WhatsAppSection />
        <Platforms />
        <MoreFeatures />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
    </DemoProvider>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<SoEmPortugues path="/blog"><BlogPage /></SoEmPortugues>} />
        <Route path="/blog/:slug" element={<SoEmPortugues path={window.location.pathname.replace(/^\/(en|es)/, '')}><BlogPostPage /></SoEmPortugues>} />
        <Route path="/privacidade" element={<SoEmPortugues path="/privacidade"><PrivacidadePage /></SoEmPortugues>} />
        <Route path="/termos" element={<SoEmPortugues path="/termos"><TermosPage /></SoEmPortugues>} />
        <Route path="/cancelamento" element={<SoEmPortugues path="/cancelamento"><CancelamentoPage /></SoEmPortugues>} />
        <Route path="/reembolso" element={<SoEmPortugues path="/reembolso"><ReembolsoPage /></SoEmPortugues>} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/downloads" element={<Navigate to="/download" replace />} />
        <Route path="/dowloads" element={<Navigate to="/download" replace />} />
      </Routes>
      </Suspense>
    </MotionConfig>
  );
}
