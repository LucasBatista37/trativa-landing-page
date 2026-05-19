import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SITE_URL } from '../../utils/constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const mockupVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const kanbanCols = [
  { label: 'Novo',       color: '#3b82f6', count: 8,  cards: ['Empresa Alfa', 'João M.'] },
  { label: 'Interessado',color: '#10b981', count: 5,  cards: ['Loja Digital', 'Studio X'] },
  { label: 'Convertido', color: '#059669', count: 3,  cards: ['Tech Soluções'] },
];

function DashboardMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-[#0d1117]">

      {/* Browser bar */}
      <div className="bg-[#161b22] px-4 py-3 flex items-center gap-3 border-b border-white/5">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 bg-[#0d1117] rounded-md px-3 py-1.5 text-xs text-gray-500 flex items-center gap-2 min-w-0">
          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          <span className="truncate">app.trativa.com.br/leads</span>
        </div>
      </div>

      {/* App body */}
      <div className="flex" style={{ height: '320px' }}>

        {/* Sidebar */}
        <div className="w-40 bg-[#0a0e17] border-r border-white/5 flex flex-col p-3 flex-shrink-0">
          <div className="flex items-center gap-2 px-2 py-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 40 40" className="w-3.5 h-3.5" fill="white" aria-hidden="true">
                <path d="M 8,6 L 32,6 Q 36,6 36,10 L 36,14 L 24,14 L 24,32 Q 24,36 20,36 Q 16,36 16,32 L 16,14 L 4,14 L 4,10 Q 4,6 8,6 Z"/>
              </svg>
            </div>
            <span className="text-white text-xs font-semibold">Trativa</span>
          </div>
          {[
            { label: 'Dashboard', active: false, dot: '#6b7280' },
            { label: 'Leads',     active: true,  dot: '#ffffff' },
            { label: 'Funil',     active: false, dot: '#6b7280' },
            { label: 'Metas',     active: false, dot: '#6b7280' },
            { label: 'WhatsApp',  active: false, dot: '#6b7280' },
            { label: 'Equipe',    active: false, dot: '#6b7280' },
          ].map(nav => (
            <div
              key={nav.label}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-0.5 text-[10px] font-medium transition-colors ${
                nav.active ? 'bg-blue-600 text-white' : 'text-gray-500'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: nav.dot }} />
              {nav.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col">

          {/* Header row */}
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            <div>
              <div className="text-xs font-semibold text-white">Leads</div>
              <div className="text-[10px] text-gray-500 mt-0.5">24 leads cadastrados</div>
            </div>
            <div className="bg-blue-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg flex-shrink-0">
              + Cadastrar
            </div>
          </div>

          {/* View toggle */}
          <div className="flex gap-1 bg-[#161b22] p-1 rounded-lg mb-3 w-fit flex-shrink-0">
            <div className="px-3 py-1 bg-white/10 rounded-md text-white text-[10px] font-medium">Kanban</div>
            <div className="px-3 py-1 text-gray-500 text-[10px] font-medium">Tabela</div>
            <div className="px-3 py-1 text-gray-500 text-[10px] font-medium">Cards</div>
          </div>

          {/* Kanban */}
          <div className="flex gap-2 flex-1 overflow-hidden">
            {kanbanCols.map(col => (
              <div key={col.label} className="flex-shrink-0 w-[110px] flex flex-col">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: col.color }} />
                  <span className="text-[10px] text-gray-400 font-medium truncate">{col.label}</span>
                  <span className="text-[10px] text-gray-600 ml-auto flex-shrink-0">{col.count}</span>
                </div>
                <div className="space-y-1.5">
                  {col.cards.map(name => (
                    <div
                      key={name}
                      className="bg-[#161b22] rounded-lg px-2.5 py-2 border border-white/5 cursor-pointer hover:border-white/10 transition-colors"
                    >
                      <div className="text-[10px] text-white font-medium truncate">{name}</div>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                        <span className="text-[9px] text-gray-600 truncate">WhatsApp</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Remaining column ghost */}
            <div className="flex-shrink-0 w-[110px]">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-gray-700 flex-shrink-0" />
                <span className="text-[10px] text-gray-600 font-medium">+ 6 etapas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollToHowItWorks = () => {
    const el = document.querySelector('#how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-hero-gradient min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Dot grid texture */}
      <div className="absolute inset-0 grid-dots pointer-events-none" />

      {/* Radial glow behind mockup */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" />
                CRM para equipes comerciais brasileiras
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white mb-6">
              Organize seus leads.{' '}
              <span className="text-gradient block">Feche mais negócios.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={item} className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
              Trativa centraliza seus contatos, atendimentos e oportunidades comerciais em um só lugar — com pipeline visual, WhatsApp integrado e relatórios em tempo real.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={`${SITE_URL}/register`}
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Começar gratuitamente
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-6 py-3.5 rounded-xl transition-all text-sm sm:text-base"
              >
                Ver como funciona
                <ChevronDown className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.p variants={item} className="text-xs text-gray-600">
              14 dias de teste gratuito · Sem necessidade de cartão de crédito
            </motion.p>

          </motion.div>

          {/* Right — mockup */}
          <motion.div
            variants={mockupVariant}
            initial="hidden"
            animate="show"
            className="relative"
            style={{ perspective: '1200px' }}
          >
            <DashboardMockup />

            {/* Floating badge 1 */}
            <motion.div
              className="absolute -left-4 top-8 glass rounded-xl px-3 py-2 shadow-xl hidden lg:flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              <span className="text-white text-xs font-medium whitespace-nowrap">Lead convertido</span>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              className="absolute -right-2 bottom-10 glass rounded-xl px-3 py-2 shadow-xl hidden lg:flex items-center gap-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-white text-xs font-medium whitespace-nowrap">WhatsApp conectado</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
