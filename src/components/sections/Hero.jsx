import { motion } from 'framer-motion';
import { PIPELINE_STAGES, TRIAL_DAYS } from '../../utils/constants';
import { BrowserFrame, PhoneFrame } from '../media/Frames';
import DemoVideo from '../media/DemoVideo';
import Picture from '../media/Picture';
import { VIDEOS } from '../media/media';
import { useOpenDemo } from '../media/DemoContext';
import { PrimaryCTA, DemoButton } from '../ui/Buttons';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const openDemo = useOpenDemo();

  return (
    <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="hero-title">
      <div className="hero-dots pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      {/* faixa clara no rodapé: o palco do produto atravessa para a próxima seção */}
      <div className="absolute inset-x-0 bottom-0 h-[18%] bg-paper sm:h-[22%] lg:h-[26%]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:pt-36">
        <div className="grid gap-8 xl:grid-cols-12 xl:items-end xl:gap-10">
          <motion.h1
            id="hero-title"
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-balance font-display text-[2.55rem] font-bold leading-[1.02] tracking-[-0.025em] sm:text-6xl lg:text-[4.4rem] xl:col-span-7 xl:text-[4.6rem]"
          >
            Seus leads organizados. Suas vendas em movimento.
          </motion.h1>

          <motion.div
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="max-w-2xl xl:col-span-5 xl:pb-2"
          >
            <p className="text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              O Trativa é um CRM para equipes comerciais: cada lead tem etapa, responsável e
              histórico, a conversa de WhatsApp fica na ficha e o funil mostra onde as vendas travam.
              No navegador, no computador e no app Android.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA />
              <DemoButton onClick={openDemo} />
            </div>
            <p className="mt-4 text-sm text-white/50">
              Teste por {TRIAL_DAYS} dias sem cartão de crédito.
            </p>
          </motion.div>
        </div>

        {/* As 9 etapas reais do funil, nas mesmas cores do app */}
        <motion.ol
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="no-scrollbar mt-12 hidden gap-x-5 gap-y-2 overflow-x-auto text-[13px] text-white/60 md:flex md:flex-wrap"
          aria-label="Etapas do funil no Trativa"
        >
          {PIPELINE_STAGES.map((s) => (
            <li key={s.key} className="flex items-center gap-2 whitespace-nowrap">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} aria-hidden="true" />
              {s.label}
            </li>
          ))}
        </motion.ol>

        {/* Palco do produto */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative mt-10 pb-10 md:mt-5 lg:pb-16"
        >
          {/* tablet e desktop: pipeline real em vídeo + app Android em primeiro plano */}
          <div className="relative hidden md:block">
            <div className="mr-[13%] lg:mr-[12%]">
              <BrowserFrame dark url="app.trativa.app/leads">
                <DemoVideo video={VIDEOS.heroKanban} priority />
              </BrowserFrame>
            </div>
            <div className="absolute bottom-[-4%] right-0 w-[22%] max-w-[270px]">
              <PhoneFrame>
                <Picture
                  name="m-lead"
                  mobile
                  priority
                  sizes="270px"
                  alt="Ficha de um lead no app Android do Trativa, com etapa, botão de WhatsApp e dados de contato"
                />
              </PhoneFrame>
            </div>
          </div>

          {/* celular: o app Android em destaque, com o pipeline desktop ao fundo */}
          <div className="relative mx-auto max-w-[400px] md:hidden">
            <div className="absolute left-[-12%] top-[8%] w-[92%] opacity-90" aria-hidden="true">
              <BrowserFrame dark url="app.trativa.app/leads">
                <Picture name="leads-kanban" sizes="360px" alt="" />
              </BrowserFrame>
            </div>
            <div className="relative ml-auto mr-[4%] w-[62%]">
              <PhoneFrame>
                <DemoVideo video={VIDEOS.celular} priority rounded="rounded-[2rem]" />
              </PhoneFrame>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500 md:text-right">
            Gravações e telas reais do Trativa, com dados fictícios de demonstração.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
