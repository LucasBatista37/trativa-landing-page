import { Routes, Route } from 'react-router-dom';
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
import PrivacidadePage from './pages/legal/PrivacidadePage';
import TermosPage from './pages/legal/TermosPage';
import CancelamentoPage from './pages/legal/CancelamentoPage';
import ReembolsoPage from './pages/legal/ReembolsoPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacidade" element={<PrivacidadePage />} />
      <Route path="/termos" element={<TermosPage />} />
      <Route path="/cancelamento" element={<CancelamentoPage />} />
      <Route path="/reembolso" element={<ReembolsoPage />} />
    </Routes>
  );
}
