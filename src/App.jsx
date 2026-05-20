import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SEO from './components/SEO';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Features from './components/sections/Features';
import WhatsAppSection from './components/sections/WhatsAppSection';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import FinalCTA from './components/sections/FinalCTA';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacidadePage from './pages/legal/PrivacidadePage';
import TermosPage from './pages/legal/TermosPage';
import CancelamentoPage from './pages/legal/CancelamentoPage';
import ReembolsoPage from './pages/legal/ReembolsoPage';
import DownloadPage from './pages/DownloadPage';
import { LANDING_URL } from './utils/constants';

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
  const homeDescription = 'Gerencie leads com pipeline visual, WhatsApp Business integrado, metas de vendas e relatórios completos. Teste grátis por 14 dias, sem cartão de crédito.';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title={homeTitle}
        description={homeDescription}
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Trativa',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: LANDING_URL,
          description: homeDescription,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <WhatsAppSection />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
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
    </>
  );
}
