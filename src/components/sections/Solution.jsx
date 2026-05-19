import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { PIPELINE_STAGES } from '../../utils/constants';

const benefits = [
  'Pipeline visual com as 9 etapas do funil de vendas — do primeiro contato à conversão',
  'WhatsApp Business com API oficial da Meta: envie e receba mensagens diretamente no CRM',
  'Relatórios em tempo real para tomar decisões com dados reais, não suposições',
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const stagesRef = useRef(null);
  const stagesInView = useInView(stagesRef, { once: true, margin: '-60px' });

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
              A solução
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Um sistema de gestão de leads feito para a realidade brasileira
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Diferente de sistemas genéricos, o Trativa foi construído com o processo comercial brasileiro em mente — com WhatsApp integrado de verdade e um pipeline que reflete como equipes de vendas trabalham no Brasil.
            </p>

            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand-600" />
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — pipeline stages */}
          <motion.div
            ref={stagesRef}
            initial={{ opacity: 0, x: 32 }}
            animate={stagesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
              Pipeline de vendas — 9 etapas
            </p>
            <div className="space-y-2.5">
              {PIPELINE_STAGES.map((stage, i) => (
                <motion.div
                  key={stage.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={stagesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 group"
                >
                  {/* Step number */}
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: stage.color + '20', color: stage.color }}
                  >
                    {i + 1}
                  </div>

                  {/* Label pill */}
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all group-hover:shadow-sm"
                    style={{
                      backgroundColor: stage.color + '15',
                      color: stage.color,
                      borderColor: stage.color + '35',
                    }}
                  >
                    {stage.label}
                  </span>

                  {/* Connector line (not last) */}
                  {i < PIPELINE_STAGES.length - 1 && (
                    <div className="flex-1 h-px bg-gray-100 ml-1" />
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Cada etapa reflete uma ação real do processo comercial — sem confusão sobre onde cada oportunidade está.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
