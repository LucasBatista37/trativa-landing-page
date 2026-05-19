import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { PLANS, SITE_URL } from '../../utils/constants';

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-brand-600 uppercase mb-3">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Planos para cada tamanho de equipe
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Comece com 14 dias gratuitos em qualquer plano. Sem cartão de crédito. Cancele quando quiser.
          </p>
        </motion.div>

        {/* Trial banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-600 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm sm:text-base">
                14 dias de teste gratuito — sem cartão de crédito
              </div>
              <div className="text-blue-200 text-xs sm:text-sm mt-0.5">
                Acesso completo a todas as funcionalidades do plano escolhido durante o período de trial.
              </div>
            </div>
          </div>
          <a
            href={`${SITE_URL}/register`}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-brand-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Começar trial
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative bg-white rounded-2xl p-6 flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? 'border-brand-500 shadow-xl shadow-brand-100 ring-1 ring-brand-500/20 -translate-y-1'
                  : 'border-gray-100 hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                  plan.highlight
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-800 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <div className={`text-sm font-bold mb-1 ${plan.highlight ? 'text-brand-600' : 'text-gray-800'}`}>
                  {plan.name}
                </div>
                <div className="text-xs text-gray-400 mb-4">{plan.description}</div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-2xl font-black text-gray-900">R${plan.price}</span>
                  <span className="text-sm text-gray-500 mb-0.5">/mês</span>
                </div>

                {/* Limits pill */}
                <span className="inline-block bg-gray-50 border border-gray-100 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-full">
                  {plan.limits}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlight ? 'bg-brand-100' : 'bg-gray-100'
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${plan.highlight ? 'text-brand-600' : 'text-gray-500'}`} />
                    </div>
                    <span className="text-xs text-gray-600 leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`${SITE_URL}/register`}
                className={`block text-center py-2.5 text-sm font-semibold rounded-xl transition-all ${
                  plan.highlight
                    ? 'bg-brand-600 hover:bg-brand-700 text-white hover:shadow-lg hover:shadow-brand-600/25'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {plan.highlight ? 'Começar com Pro' : `Assinar ${plan.name}`}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-xs text-gray-500 mt-8"
        >
          Todos os planos incluem SSL, backups automáticos, notificações em tempo real e suporte por e-mail.
        </motion.p>

      </div>
    </section>
  );
}
