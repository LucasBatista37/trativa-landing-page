import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertCircle, Eye, Layers, TrendingDown } from 'lucide-react';

const problems = [
  {
    Icon: AlertCircle,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
    title: 'Leads que somem',
    description:
      'Novos contatos chegam pelo WhatsApp, Instagram ou Google Maps e ficam sem follow-up. Quando você lembra, a janela de oportunidade já passou.',
  },
  {
    Icon: Eye,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    title: 'Sem visibilidade do processo',
    description:
      'Sem um pipeline claro, ninguém sabe em que etapa cada lead está. O gestor precisa perguntar ao vendedor o que está acontecendo.',
  },
  {
    Icon: Layers,
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
    title: 'Contatos espalhados',
    description:
      'Leads no WhatsApp, planilhas, cadernos e e-mails. Quando precisar de um contato ou de um histórico de atendimento, ele simplesmente não está acessível.',
  },
  {
    Icon: TrendingDown,
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-50',
    title: 'Sem dados para decidir',
    description:
      'Qual origem traz mais clientes? Qual vendedor converte mais? Sem métricas reais, decisões importantes viram chute.',
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-brand-600 uppercase mb-3">
            O problema
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Oportunidades que escapam todos os dias
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Empresas que não têm um processo comercial organizado perdem leads bons — não por falta de esforço, mas por falta de visibilidade.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${problem.iconBg} group-hover:scale-105 transition-transform`}>
                <problem.Icon className={`w-5 h-5 ${problem.iconColor}`} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
