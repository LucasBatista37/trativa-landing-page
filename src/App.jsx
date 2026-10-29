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
  const homeTitle = 'Trativa — CRM de Leads para Equipes Comerciais Brasileiras';
  const homeDescription = `CRM de leads com pipeline Kanban de 9 etapas, WhatsApp oficial (Cloud API), metas, funil de vendas e app Android. Teste grátis por ${TRIAL_DAYS} dias, sem cartão de crédito.`;

  return (
    <DemoProvider>
    <div className="min-h-screen bg-white overflow-x-clip">
      <SEO
        title={homeTitle}
        description={homeDescription}
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Trativa',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Android, Windows, macOS, Linux',
            url: LANDING_URL,
            description: homeDescription,
            offers: PLANS.map((p) => ({
              '@type': 'Offer',
              name: p.name,
              price: String(p.price),
              priceCurrency: 'BRL',
              availability: 'https://schema.org/InStock',
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacidade" element={<PrivacidadePage />} />
        <Route path="/termos" element={<TermosPage />} />
        <Route path="/cancelamento" element={<CancelamentoPage />} />
        <Route path="/reembolso" element={<ReembolsoPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/downloads" element={<Navigate to="/download" replace />} />
        <Route path="/dowloads" element={<Navigate to="/download" replace />} />
      </Routes>
      </Suspense>
    </MotionConfig>
  );
}
