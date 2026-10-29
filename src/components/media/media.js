// Mídias reais do Trativa — capturadas do sistema rodando com a empresa fictícia
// "Vetor Digital" (seed de demonstração). Origem: Leads/visual-assets e
// Leads/ui-ux-execucoes-mac-20261012 (app Android nativo 1.7.0).

export const DESKTOP_WIDTHS = [960, 1600, 2400];
export const MOBILE_WIDTHS = [360, 720];

// proporção das capturas: desktop 2880×1728 (5:3) · Android 1080×2424
export const DESKTOP_RATIO = { w: 1600, h: 960 };
export const MOBILE_RATIO = { w: 1080, h: 2424 };

export const srcSet = (name, ext, widths) =>
  widths.map((w) => `/media/img/${name}-${w}.${ext} ${w}w`).join(', ');

export const VIDEOS = {
  heroKanban: {
    src: '/media/video/hero-kanban.mp4',
    poster: '/media/video/hero-kanban-poster',
    w: 1440, h: 864,
    label: 'Gravação real: lead arrastado da etapa Novo para Em atendimento no pipeline Kanban do Trativa',
  },
  demo: {
    src: '/media/video/demo-completa.mp4',
    poster: '/media/video/demo-completa-poster',
    w: 1440, h: 864,
    label: 'Demonstração completa do Trativa, sem áudio, com 59 segundos',
  },
  whatsapp: {
    src: '/media/video/clip-whatsapp.mp4',
    poster: '/media/video/clip-whatsapp-poster',
    w: 1280, h: 768,
    label: 'Gravação real: aba WhatsApp da ficha do lead, com janela de atendimento, conversa e envio de mensagem livre',
  },
  funil: {
    src: '/media/video/clip-funil.mp4',
    poster: '/media/video/clip-funil-poster',
    w: 1280, h: 768,
    label: 'Gravação real: funil de vendas geral, por vendedor e por origem',
  },
  metas: {
    src: '/media/video/clip-metas.mp4',
    poster: '/media/video/clip-metas-poster',
    w: 1280, h: 768,
    label: 'Gravação real: criação de uma meta de propostas para um vendedor',
  },
  importacao: {
    src: '/media/video/clip-importacao.mp4',
    poster: '/media/video/clip-importacao-poster',
    w: 1280, h: 768,
    label: 'Gravação real: importação de leads por planilha CSV com revisão antes de confirmar',
  },
  celular: {
    src: '/media/video/clip-celular.mp4',
    poster: '/media/video/clip-celular-poster',
    w: 540, h: 1212,
    label: 'Gravação real do app Android do Trativa: painel, lista de leads, ficha e histórico do lead',
  },
};
