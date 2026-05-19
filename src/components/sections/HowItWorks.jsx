import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserPlus, Layout, MessageSquare, BarChart2 } from 'lucide-react';

const steps = [
  {
    Icon: UserPlus,
    number: '01',
    title: 'Cadastre ou importe seus leads',
    description:
      'Adicione leads manualmente, importe uma planilha CSV ou deixe o WhatsApp criar automaticamente quando alguém entrar em contato com seu número.',
  },
  {
    Icon: Layout,
    number: '02',
    title: 'Organize pelo pipeline visual',
    description:
      'Arraste cada lead pelo funil de 9 etapas. Use a visualização Kanban, tabela ou cards — conforme o momento do seu processo comercial.',
  },
  {
    Icon: MessageSquare,
    number: '03',
    title: 'Entre em contato pelo WhatsApp',
    description:
      'Envie mensagens diretamente do CRM via WhatsApp oficial. Use templates aprovados ou escreva na hora. Receba respostas no mesmo lugar.',
  },
  {
    Icon: BarChart2,
    number: '04',
    title: 'Acompanhe resultados e metas',
    description:
      'Veja relatórios de conversão, identifique gargalos no funil, monitore metas por vendedor e tome decisões com dados reais.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-brand-600 uppercase mb-3">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Do primeiro contato à conversão em 4 passos
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Configure o Trativa em minutos e tenha um processo comercial organizado funcionando no mesmo dia.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Connector line — desktop only */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-brand-100 hidden lg:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Step number circle — sits on top of connector */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                <step.Icon className="w-5 h-5 text-brand-600" />
              </div>

              <div className="text-xs font-bold text-brand-500 mb-1">{step.number}</div>
              <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
