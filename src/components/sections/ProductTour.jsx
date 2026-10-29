import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { BrowserFrame } from '../media/Frames';
import Picture from '../media/Picture';
import DemoVideo from '../media/DemoVideo';
import { VIDEOS } from '../media/media';

/*
 * Visita guiada. Cada aba usa uma captura ou gravação real.
 * Os marcadores numerados apontam para o ponto da tela descrito no item de mesmo número
 * (coordenadas em % da captura 2880×1728).
 */
const TABS = [
  {
    id: 'visao-geral',
    tab: 'Visão geral',
    title: 'O painel abre com o retrato do funil',
    text: 'Antes de abrir qualquer lead, você já sabe quantos estão em cada etapa, de onde vieram e com quem estão.',
    url: 'app.trativa.app/dashboard',
    media: { type: 'img', name: 'dashboard', alt: 'Dashboard do Trativa com totais por etapa, mensagens de WhatsApp e distribuição por status, origem e responsável' },
    points: [
      { text: 'Totais por etapa: novos, em atendimento, interessados, reuniões, propostas, convertidos e perdidos', x: 33, y: 19 },
      { text: 'Mensagens de WhatsApp enviadas e recebidas pela integração oficial', x: 34, y: 47 },
      { text: 'Leads por origem e por responsável, para ver o que traz cliente e quem está sobrecarregado', x: 72, y: 76 },
    ],
  },
  {
    id: 'pipeline',
    tab: 'Pipeline',
    title: 'Arraste o lead e a etapa muda para todo mundo',
    text: 'O Kanban mostra as 9 etapas do funil. Mover um card atualiza a etapa, registra no histórico e aparece na tela da equipe em tempo real.',
    url: 'app.trativa.app/leads',
    media: { type: 'video', video: VIDEOS.heroKanban },
    points: [
      { text: 'Arrastar e soltar entre etapas, ou trocar a etapa no seletor do próprio card' },
      { text: 'Contagem de leads por etapa no topo de cada coluna' },
      { text: 'Alterne entre Kanban e tabela, com busca e filtros por status, responsável, origem e cidade' },
    ],
  },
  {
    id: 'leads',
    tab: 'Ficha do lead',
    title: 'Tudo sobre o lead em uma tela',
    text: 'Contato, origem, projeto, responsável e os campos que você criou para o seu processo. Sem procurar em planilha.',
    url: 'app.trativa.app/leads/mercado-bom-preco',
    media: { type: 'img', name: 'lead-detalhe', alt: 'Ficha do lead Mercado Bom Preço no Trativa com dados de contato, informações adicionais, status, responsável e follow-up de WhatsApp' },
    points: [
      { text: 'Abas de dados, conversa de WhatsApp e histórico de ações', x: 56.5, y: 11 },
      { text: 'Etapa atual e responsável, com reatribuição em um clique', x: 86, y: 17 },
      { text: 'Campos personalizados: ticket estimado, porte da empresa, decisor e o que mais você precisar', x: 40, y: 64 },
      { text: 'Follow-ups pendentes de WhatsApp com data e hora', x: 92, y: 62 },
    ],
  },
  {
    id: 'whatsapp',
    tab: 'WhatsApp',
    title: 'A conversa fica na ficha, não no celular do vendedor',
    text: 'Com a WhatsApp Cloud API oficial da Meta, mensagens enviadas e recebidas aparecem dentro do lead.',
    url: 'app.trativa.app/leads/mercado-bom-preco',
    media: { type: 'img', name: 'lead-whatsapp', alt: 'Aba WhatsApp da ficha do lead no Trativa, com janela de atendimento, mensagens trocadas e envio por mensagem livre ou template' },
    points: [
      { text: 'Aviso da janela de atendimento de 24 horas da Meta', x: 70, y: 21 },
      { text: 'Templates aprovados para iniciar ou retomar a conversa', x: 48.5, y: 29 },
      { text: 'Resposta como mensagem livre ou template, sem sair do CRM', x: 49, y: 92 },
      { text: 'Opt-out de WhatsApp registrado no lead', x: 90, y: 52 },
    ],
  },
  {
    id: 'relatorios',
    tab: 'Relatórios',
    title: 'Veja em que etapa as vendas travam',
    text: 'O funil calcula a passagem de uma etapa para a outra e destaca em vermelho a maior queda.',
    url: 'app.trativa.app/funil',
    media: { type: 'img', name: 'funil-geral', alt: 'Funil de vendas do Trativa com totais, conversão final e percentual de passagem entre as etapas' },
    points: [
      { text: 'Funil geral, por vendedor e por origem, com filtro de período', x: 47.5, y: 19 },
      { text: 'Total de leads, convertidos, conversão final e perdidos', x: 68, y: 30.5 },
      { text: 'Percentual de passagem entre cada etapa do funil', x: 66, y: 49.5 },
    ],
  },
  {
    id: 'equipe',
    tab: 'Equipe e metas',
    title: 'Metas por vendedor, acompanhadas sozinhas',
    text: 'Crie metas de leads contatados, convertidos, propostas ou reuniões. O progresso é calculado sozinho, pelas mudanças de etapa registradas nos leads.',
    url: 'app.trativa.app/metas',
    media: { type: 'video', video: VIDEOS.metas },
    points: [
      { text: 'Status de cada meta: meta batida, no ritmo ou abaixo do esperado' },
      { text: 'Três papéis de acesso: proprietário, administrador e colaborador' },
      { text: 'Convite por e-mail, com acesso só aos projetos escolhidos' },
    ],
  },
];

function Pin({ n, x, y, active, onEnter }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className={`absolute inset-0 rounded-full bg-brand-500 ${active ? 'animate-pin-pulse' : 'opacity-0'}`} />
      <span
        className={`relative flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shadow-lg ring-2 ring-white transition ${
          active ? 'scale-110 bg-brand-600 text-white' : 'bg-ink text-white'
        }`}
      >
        {n}
      </span>
    </button>
  );
}

export default function ProductTour() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(0);
  const tabRefs = useRef([]);
  const t = TABS[index];
  const hasPins = t.points.some((p) => p.x !== undefined);

  const select = (i) => {
    setIndex(i);
    setHover(0);
  };

  const onKey = (e) => {
    let next = null;
    if (e.key === 'ArrowRight') next = (index + 1) % TABS.length;
    if (e.key === 'ArrowLeft') next = (index - 1 + TABS.length) % TABS.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = TABS.length - 1;
    if (next !== null) {
      e.preventDefault();
      select(next);
      tabRefs.current[next]?.focus();
      tabRefs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
  };

  return (
    <section id="produto" className="scroll-mt-16 bg-white py-20 sm:py-28" aria-labelledby="tour-titulo">
      {/* âncora antiga mantida para links externos */}
      <span id="features" className="sr-only" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 id="tour-titulo" className="text-balance font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-[2.75rem] sm:leading-[1.08]">
            Conheça o Trativa por dentro
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
            Seis telas do sistema, exatamente como sua equipe vai usar. Escolha uma área para ver de perto.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Áreas do Trativa"
          onKeyDown={onKey}
          className="no-scrollbar -mx-4 mt-10 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={i === index}
              aria-controls={`painel-${tab.id}`}
              tabIndex={i === index ? 0 : -1}
              onClick={() => select(i)}
              className={`relative min-h-[44px] whitespace-nowrap rounded-full px-4 text-sm font-medium transition ${
                i === index ? 'bg-ink text-white' : 'text-gray-600 hover:bg-paper hover:text-gray-900'
              }`}
            >
              {tab.tab}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`painel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={t.id + '-txt'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="lg:col-span-4 lg:pt-4"
            >
              <h3 className="text-balance font-display text-2xl font-bold tracking-tight text-gray-900">{t.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-gray-600">{t.text}</p>
              <ol className="mt-6 space-y-3">
                {t.points.map((p, i) => (
                  <li
                    key={p.text}
                    onMouseEnter={() => setHover(i)}
                    className={`flex gap-3 rounded-lg p-2 -mx-2 text-[15px] leading-relaxed transition ${
                      hasPins && hover === i ? 'bg-brand-50 text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    {hasPins ? (
                      <span
                        className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          hover === i ? 'bg-brand-600 text-white' : 'bg-ink text-white'
                        }`}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                    ) : (
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-brand-600" aria-hidden="true" />
                    )}
                    <span>{p.text}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>

          <div className="lg:col-span-8">
            <BrowserFrame url={t.url}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {t.media.type === 'img' ? (
                    <Picture
                      name={t.media.name}
                      alt={t.media.alt}
                      sizes="(min-width: 1280px) 820px, (min-width: 1024px) 64vw, 100vw"
                    />
                  ) : (
                    <DemoVideo video={t.media.video} />
                  )}
                  {hasPins && (
                    <div className="absolute inset-0 hidden sm:block">
                      {t.points.map((p, i) => (
                        <Pin key={p.text} n={i + 1} x={p.x} y={p.y} active={hover === i} onEnter={() => setHover(i)} />
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
