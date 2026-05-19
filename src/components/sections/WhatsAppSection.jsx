import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, FileText, Clock, Zap, ArrowRight } from 'lucide-react';
import { SITE_URL } from '../../utils/constants';

const waFeatures = [
  {
    Icon: MessageSquare,
    text: 'Envio e recebimento de mensagens em tempo real, diretamente no CRM',
  },
  {
    Icon: FileText,
    text: 'Templates de mensagem aprovados pela Meta, reutilizáveis com variáveis dinâmicas',
  },
  {
    Icon: Clock,
    text: 'Controle da janela de serviço de 24 horas e rastreamento de conversas por lead',
  },
  {
    Icon: Zap,
    text: 'Criação automática de lead quando um novo contato envia mensagem para o número',
  },
];

const chatMessages = [
  {
    direction: 'in',
    text: 'Oi! Vi o anúncio e tenho interesse. Vocês atendem minha região?',
    time: '10:14',
  },
  {
    direction: 'out',
    text: 'Olá! Obrigado pelo contato 😊 Sim, atendemos toda a região. Pode me contar um pouco mais sobre o que você precisa?',
    time: '10:16',
    status: '✓✓',
  },
  {
    direction: 'in',
    text: 'Preciso de um orçamento para 5 unidades.',
    time: '10:18',
  },
  {
    direction: 'out',
    text: 'Perfeito! Já vou preparar o orçamento.',
    time: '10:19',
    status: '✓✓',
    template: true,
  },
];

function PhoneMockup() {
  return (
    <div
      className="w-60 mx-auto rounded-[2.25rem] overflow-hidden shadow-2xl ring-1 ring-white/20"
      style={{ background: '#0d1c11' }}
    >
      {/* Status bar */}
      <div className="bg-[#075e54] px-4 pt-3 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-green-400/30 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold">JM</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-xs font-semibold truncate">João M. — Lead</div>
            <div className="text-green-300 text-[10px]">online</div>
          </div>
          <div className="text-white/40 text-[10px] flex-shrink-0">via Trativa</div>
        </div>
      </div>

      {/* Chat area */}
      <div className="px-3 py-3 space-y-2.5 min-h-[280px]">
        {chatMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.direction === 'out' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                msg.direction === 'out'
                  ? 'rounded-tr-sm bg-[#005c4b]'
                  : 'rounded-tl-sm bg-[#202d33]'
              }`}
            >
              <p className="text-white text-[11px] leading-relaxed">{msg.text}</p>
              {msg.template && (
                <div className="flex items-center gap-1 mt-1 pt-1 border-t border-white/10">
                  <FileText className="w-2.5 h-2.5 text-white/40" />
                  <span className="text-[9px] text-white/40">Modelo enviado</span>
                </div>
              )}
              <div className={`flex items-center gap-1 mt-1 ${msg.direction === 'out' ? 'justify-end' : 'justify-start'}`}>
                <span className="text-[9px] text-white/30">{msg.time}</span>
                {msg.status && (
                  <span className="text-[9px] text-blue-300">{msg.status}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-2">
        <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5">
          <span className="text-gray-500 text-[10px]">Mensagem...</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0">
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>
  );
}

export default function WhatsAppSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="whatsapp" className="py-20 sm:py-28 bg-wa-gradient relative overflow-hidden">

      {/* Subtle pattern */}
      <div className="absolute inset-0 grid-dots opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-green-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Integração Oficial
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              WhatsApp Business no centro do seu processo de vendas
            </h2>

            <p className="text-base text-green-100/80 leading-relaxed mb-8">
              Conecte seu número ao Trativa via WhatsApp Cloud API da Meta. Envie mensagens, use templates aprovados, receba respostas e gerencie tudo diretamente no CRM — sem precisar trocar de aplicativo.
            </p>

            <ul className="space-y-4 mb-8">
              {waFeatures.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feat.Icon className="w-4 h-4 text-green-300" />
                  </div>
                  <span className="text-sm text-green-100/90 leading-relaxed">{feat.text}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href={`${SITE_URL}/register`}
              className="inline-flex items-center gap-2 bg-white text-emerald-800 font-semibold text-sm px-5 py-3 rounded-xl hover:bg-green-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Conhecer a integração
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
