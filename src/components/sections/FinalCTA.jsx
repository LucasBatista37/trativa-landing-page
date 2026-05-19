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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
