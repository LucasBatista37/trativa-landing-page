import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { SITE_URL } from '../../utils/constants';

const trustBadges = [
  {
    Icon: Shield,
    label: 'Dados protegidos com SSL',
  },
  {
    Icon: Clock,
    label: 'Trial de 14 dias completo',
  },
  {
    Icon: Users,
    label: 'Convide sua equipe agora',
  },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 sm:py-28 bg-hero-gradient relative overflow-hidden">

      {/* Dot grid texture */}
      <div className="absolute inset-0 grid-dots pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
            Pronto para organizar seus leads?
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Comece seu período de 14 dias hoje. Configure em minutos e tenha um processo comercial organizado funcionando ainda hoje.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={`${SITE_URL}/register`}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-brand-600/30 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Criar conta gratuita
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`${SITE_URL}/login`}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Já tenho conta → Fazer login
            </a>
          </div>

          {/* Google Play badge */}
          <div className="flex justify-center mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=app.trativa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 border border-white/15 text-white px-4 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" fill="none" aria-hidden="true">
                <path d="M2.69 22.86c.43.29.92.29 1.34.05L16.43 15.15L13.34 12L2.69 22.86Z" fill="#34A853"/>
                <path d="M21.46 10.55L18.31 8.75L14.92 12L18.31 15.25L21.46 13.45C22.38 12.95 22.38 11.05 21.46 10.55Z" fill="#FBBC04"/>
                <path d="M2.1 1.85C2.04 2.03 2 2.21 2 2.42V21.58C2 21.79 2.04 21.97 2.1 22.15L13.1 12L2.1 1.85Z" fill="#4285F4"/>
                <path d="M4.03 1.08C3.61 0.84 3.12 0.84 2.69 1.13L13.34 12L16.43 8.85L4.03 1.08Z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col leading-none text-left">
                <span className="text-[10px] text-gray-400">Disponível no</span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {trustBadges.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <span className="text-xs text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
