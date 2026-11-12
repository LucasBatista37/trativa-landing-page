import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Globe } from 'lucide-react';
import { BrowserFrame, PhoneFrame } from '../media/Frames';
import Picture from '../media/Picture';
import DemoVideo from '../media/DemoVideo';
import { VIDEOS } from '../media/media';
import { PlayStoreBadge } from '../ui/Buttons';
import { SITE_URL } from '../../utils/constants';

import { t, appUrl } from '../../i18n';
// Recursos verificados em cada plataforma (app web/desktop e app Android 1.7.0).
const DESKTOP = [
  t('Pipeline Kanban com arrastar e soltar e visão em tabela'),
  t('Importação por CSV e por API, exportação e contato em lote'),
  t('Funil, metas, equipe, campos personalizados e modelos de mensagem'),
  t('Seis paletas de cores para a interface'),
];
const MOBILE = [
  t('Painel com totais e a lista do que precisa de atenção'),
  t('Busca e filtros de leads, e Kanban em abas por etapa'),
  t('Ficha do lead: trocar a etapa, editar e abrir o WhatsApp'),
  t('Cadastro de lead, funil, metas e notificações'),
];

const GALLERY = [
  { name: 'm-leads', alt: t('Lista de leads no app Android do Trativa com busca e filtros'), cap: 'Leads' },
  { name: 'm-kanban', alt: t('Kanban em abas por etapa no app Android do Trativa'), cap: 'Kanban' },
  { name: 'm-funil', alt: t('Funil de vendas no app Android do Trativa'), cap: t('Funil') },
  { name: 'm-metas', alt: t('Metas por vendedor no app Android do Trativa'), cap: t('Metas') },
];

export default function Platforms() {
  return (
    <section id="celular" className="scroll-mt-16 overflow-hidden bg-white py-20 sm:py-28" aria-labelledby="plataformas-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 id="plataformas-titulo" className="text-balance font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-[2.75rem] sm:leading-[1.08]">
            {t('Na mesa do escritório e no bolso do vendedor')}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
            {t('Use no navegador, instale no computador ou baixe o app Android. A conta e os dados são os mesmos em todos.')}
          </p>
        </div>

        {/* composição: computador ao fundo, celular em primeiro plano */}
        <div className="relative mt-12 sm:mt-14">
          <div className="sm:mr-[18%] lg:mr-[22%]">
            <BrowserFrame url="app.trativa.app/leads">
              <Picture name="leads-tabela" sizes="(min-width: 1280px) 900px, 78vw" alt={t('Lista de leads em tabela no Trativa, com telefone, cidade, segmento, origem, status e responsável')} />
            </BrowserFrame>
          </div>
          <div className="relative mx-auto -mt-24 w-[58%] max-w-[300px] sm:absolute sm:bottom-[-8%] sm:right-[2%] sm:mt-0 sm:w-[26%] lg:right-[4%] lg:w-[22%]">
            <PhoneFrame>
              <DemoVideo video={VIDEOS.celular} rounded="rounded-[2rem]" />
            </PhoneFrame>
          </div>
        </div>

        <div className="mt-16 grid gap-10 sm:mt-20 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-gray-900">
              <Monitor className="h-5 w-5 text-brand-600" aria-hidden="true" />
              {t('No computador')}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-gray-700">
              {DESKTOP.map((d) => (
                <li key={d} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" aria-hidden="true" />{d}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <a href={appUrl(`${SITE_URL}/login`)} className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
                <Globe className="h-4 w-4" aria-hidden="true" /> {t('Abrir no navegador')}
              </a>
              <Link to="/download" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
                <Monitor className="h-4 w-4" aria-hidden="true" /> {t('App para Windows, macOS e Linux')}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-gray-900">
              <Smartphone className="h-5 w-5 text-brand-600" aria-hidden="true" />
              {t('No app Android')}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-gray-700">
              {MOBILE.map((d) => (
                <li key={d} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" aria-hidden="true" />{d}</li>
              ))}
            </ul>
            <div className="mt-6">
              <PlayStoreBadge />
            </div>
          </div>
        </div>

        {/* telas reais do app Android */}
        <ul className="no-scrollbar -mx-4 mt-14 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-6 sm:px-0" aria-label={t('Telas do app Android')}>
          {GALLERY.map((g) => (
            <li key={g.name} className="w-[44%] flex-shrink-0 snap-start sm:w-auto">
              <figure>
                <div className="overflow-hidden rounded-2xl ring-1 ring-line shadow-frame-light">
                  <Picture name={g.name} mobile sizes="(min-width: 640px) 25vw, 44vw" alt={g.alt} />
                </div>
                <figcaption className="mt-2 text-sm text-gray-500">{g.cap}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
