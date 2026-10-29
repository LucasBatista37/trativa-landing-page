import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserFrame } from '../media/Frames';
import Picture from '../media/Picture';
import DemoVideo from '../media/DemoVideo';
import { VIDEOS } from '../media/media';

/*
 * Do primeiro contato à venda: 5 etapas em sequência.
 * Cada etapa usa a cor da etapa equivalente do funil no app.
 */
const STEPS = [
  {
    color: '#3b82f6',
    title: 'O lead entra',
    text: 'Cadastre na mão, importe uma planilha CSV com revisão antes de gravar, envie pela API ou deixe o WhatsApp oficial criar o lead quando alguém escreve para o seu número. Duplicados por telefone, e-mail e Instagram são detectados.',
    url: 'app.trativa.app/leads',
    media: { type: 'video', video: VIDEOS.importacao },
  },
  {
    color: '#8b5cf6',
    title: 'Ganha lugar no pipeline',
    text: 'Cada lead cai em uma das 9 etapas, com responsável e projeto. A equipe vê o mesmo quadro, e cada colaborador trabalha nos leads dele e nos que ainda estão sem responsável.',
    url: 'app.trativa.app/leads',
    media: { type: 'img', name: 'leads-kanban', alt: 'Pipeline Kanban do Trativa com leads nas colunas Novo, Em atendimento, Contatado e Interessado' },
  },
  {
    color: '#10b981',
    title: 'É acompanhado de perto',
    text: 'Na ficha ficam o contato, a conversa de WhatsApp, as observações e o histórico de tudo o que aconteceu, com quem fez e quando.',
    url: 'app.trativa.app/leads/mercado-bom-preco',
    media: { type: 'img', name: 'lead-historico', alt: 'Histórico de ações de um lead no Trativa, com mudanças de status, atribuição de responsável e mensagem de WhatsApp' },
  },
  {
    color: '#6366f1',
    title: 'Avança no funil',
    text: 'Arraste o card para a próxima etapa. A mudança fica registrada no histórico e conta para as metas do vendedor.',
    url: 'app.trativa.app/leads',
    media: { type: 'video', video: VIDEOS.heroKanban },
  },
  {
    color: '#059669',
    title: 'Vira resultado que dá para medir',
    text: 'O gestor acompanha o funil geral, por vendedor e por origem, e vê em que passagem os leads mais se perdem.',
    url: 'app.trativa.app/funil',
    media: { type: 'video', video: VIDEOS.funil },
  },
];

function StepMedia({ step }) {
  return (
    <BrowserFrame url={step.url}>
      {step.media.type === 'img' ? (
        <Picture name={step.media.name} alt={step.media.alt} sizes="(min-width: 1024px) 680px, 100vw" />
      ) : (
        <DemoVideo video={step.media.video} />
      )}
    </BrowserFrame>
  );
}

export default function Journey() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="scroll-mt-16 bg-paper py-20 sm:py-28" aria-labelledby="jornada-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 id="jornada-titulo" className="text-balance font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-[2.75rem] sm:leading-[1.08]">
            Do primeiro contato à venda
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
            O caminho de um lead dentro do Trativa, em cinco passos.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-12">
          <ol className="relative lg:col-span-5">
            {/* trilho do funil */}
            <span className="absolute bottom-6 left-[15px] top-6 hidden w-px bg-line lg:block" aria-hidden="true" />
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                ref={(el) => { refs.current[i] = el; }}
                data-index={i}
                className="relative pb-14 last:pb-0 lg:flex lg:min-h-[54vh] lg:items-center lg:pb-0"
                aria-current={active === i ? 'step' : undefined}
              >
                <div className="flex gap-5">
                  <span
                    className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ring-paper transition-transform duration-300"
                    style={{ backgroundColor: s.color, transform: active === i ? 'scale(1.12)' : 'scale(1)' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl ${active === i ? 'text-gray-900' : 'text-gray-900 lg:text-gray-500'}`}>
                      <span className="sr-only">Passo {i + 1}: </span>{s.title}
                    </h3>
                    <p className={`mt-2 max-w-md text-pretty leading-relaxed transition-colors duration-300 ${active === i ? 'text-gray-600' : 'text-gray-600 lg:text-gray-500'}`}>{s.text}</p>
                  </div>
                </div>
                {/* celular e tablet: mídia logo abaixo do passo */}
                <div className="mt-6 lg:hidden">
                  <StepMedia step={s} />
                </div>
              </li>
            ))}
          </ol>

          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-[calc(50vh-210px)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <StepMedia step={STEPS[active]} />
                </motion.div>
              </AnimatePresence>
              <div className="mt-5 flex gap-1.5" aria-hidden="true">
                {STEPS.map((s, i) => (
                  <span
                    key={s.title}
                    className="h-1 flex-1 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: i <= active ? s.color : '#E3E8F0' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
