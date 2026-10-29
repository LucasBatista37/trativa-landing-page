export const SITE_URL = 'https://app.trativa.app';
export const LANDING_URL = 'https://trativa.app';

// Duração real do teste: backend/src/utils/dateUtils.js (TRIAL_DAYS = 30)
// e e-mail de boas-vindas ("seu trial de 30 dias começou").
export const TRIAL_DAYS = 30;
export const TRIAL_LINE = `${TRIAL_DAYS} dias grátis, sem cartão de crédito`;

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.trativa';

export const NAV_LINKS = [
  { label: 'Produto',       href: '#produto' },
  { label: 'Como funciona', href: '#how-it-works' },
  { label: 'WhatsApp',      href: '#whatsapp' },
  { label: 'Celular',       href: '#celular' },
  { label: 'Planos',        href: '#pricing' },
  { label: 'Dúvidas',       href: '#faq' },
];

// 9 status confirmados no modelo Lead e no formatters.js
export const PIPELINE_STAGES = [
  { key: 'novo',             label: 'Novo',             color: '#3b82f6' },
  { key: 'em_atendimento',   label: 'Em atendimento',   color: '#8b5cf6' },
  { key: 'contatado',        label: 'Contatado',        color: '#6b7280' },
  { key: 'interessado',      label: 'Interessado',      color: '#10b981' },
  { key: 'sem_resposta',     label: 'Sem resposta',     color: '#f59e0b' },
  { key: 'reuniao_marcada',  label: 'Reunião marcada',  color: '#f97316' },
  { key: 'proposta_enviada', label: 'Proposta enviada', color: '#6366f1' },
  { key: 'convertido',       label: 'Convertido',       color: '#059669' },
  { key: 'perdido',          label: 'Perdido',          color: '#ef4444' },
];

// Planos reais confirmados em frontend/src/pages/Billing.jsx (preços) e
// backend/src/services/subscriptionService.js (PLAN_LIMITS: usuários, leads, metas, campos, projetos).
export const PLANS = [
  {
    key: 'starter',
    name: 'Starter',
    price: 49,
    description: 'Para profissionais e autônomos',
    highlight: false,
    badge: null,
    limits: ['2 usuários', '200 leads'],
    features: [
      'Até 2 usuários',
      'Até 200 leads ativos',
      'Até 3 projetos',
      'Pipeline visual com 9 etapas',
      'Visualizações kanban, tabela e cards',
      'Dashboard com métricas por status e origem',
      'Funil de vendas com análise de gargalos',
      'Importação e exportação em CSV',
      'Detecção automática de duplicatas',
      'Até 3 campos personalizados',
      'Até 3 metas por vendedor',
      'Notificações em tempo real',
      'Auditoria completa de ações',
    ],
  },
  {
    key: 'basico',
    name: 'Básico',
    price: 97,
    description: 'Para pequenas equipes comerciais',
    highlight: false,
    badge: null,
    limits: ['3 usuários', '500 leads'],
    features: [
      'Até 3 usuários',
      'Até 500 leads ativos',
      'Até 5 projetos',
      'Tudo do Starter',
      'Gestão de equipe com 3 níveis de acesso',
      'Convites por e-mail para novos membros',
      'Até 5 campos personalizados',
      'Até 5 metas por vendedor',
      'Relatórios por vendedor, origem e cidade',
      'Análise de leads parados',
    ],
  },
  {
    key: 'pro',
    name: 'Pro',
    price: 197,
    description: 'Para equipes em crescimento',
    highlight: true,
    badge: 'Recomendado',
    limits: ['5 usuários', '2.000 leads'],
    features: [
      'Até 5 usuários',
      'Até 2.000 leads ativos',
      'Projetos ilimitados',
      'Tudo do Básico',
      'WhatsApp Cloud API oficial',
      'Templates de mensagem WhatsApp',
      'Metas ilimitadas por vendedor',
      'Até 10 campos personalizados',
      'Relatórios avançados de conversão',
    ],
  },
  {
    key: 'business',
    name: 'Business',
    price: 397,
    description: 'Para operações de maior escala',
    highlight: false,
    badge: 'Mais completo',
    limits: ['20 usuários', 'Leads ilimitados'],
    features: [
      'Até 20 usuários',
      'Leads ilimitados',
      'Tudo do Pro',
      'Campos personalizados ilimitados',
      'Logs de auditoria com rastreamento de IP e user-agent',
      'Histórico de auditoria completo',
      'Relatórios por funil, usuário e período',
    ],
  },
];
