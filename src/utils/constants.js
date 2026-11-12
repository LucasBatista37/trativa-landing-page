import { t } from '../i18n';
export const SITE_URL = 'https://app.trativa.app';
export const LANDING_URL = 'https://trativa.app';

// Duração real do teste: backend/src/utils/dateUtils.js (TRIAL_DAYS = 30)
// e e-mail de boas-vindas ("seu trial de 30 dias começou").
export const TRIAL_DAYS = 30;
export const TRIAL_LINE = t('{TRIAL_DAYS} dias grátis, sem cartão de crédito', { TRIAL_DAYS });

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.trativa';

export const NAV_LINKS = [
  { label: t('Produto'),       href: '#produto' },
  { label: t('Como funciona'), href: '#how-it-works' },
  { label: 'WhatsApp',      href: '#whatsapp' },
  { label: t('Celular'),       href: '#celular' },
  { label: t('Planos'),        href: '#pricing' },
  { label: t('Dúvidas'),       href: '#faq' },
];

// 9 status confirmados no modelo Lead e no formatters.js
export const PIPELINE_STAGES = [
  { key: 'novo',             label: t('Novo'),             color: '#3b82f6' },
  { key: 'em_atendimento',   label: t('Em atendimento'),   color: '#8b5cf6' },
  { key: 'contatado',        label: t('Contatado'),        color: '#6b7280' },
  { key: 'interessado',      label: t('Interessado'),      color: '#10b981' },
  { key: 'sem_resposta',     label: t('Sem resposta'),     color: '#f59e0b' },
  { key: 'reuniao_marcada',  label: t('Reunião marcada'),  color: '#f97316' },
  { key: 'proposta_enviada', label: t('Proposta enviada'), color: '#6366f1' },
  { key: 'convertido',       label: t('Convertido'),       color: '#059669' },
  { key: 'perdido',          label: t('Perdido'),          color: '#ef4444' },
];

// Planos reais confirmados em frontend/src/pages/Billing.jsx (preços) e
// backend/src/services/subscriptionService.js (PLAN_LIMITS: usuários, leads, metas, campos, projetos).
export const PLANS = [
  {
    key: 'starter',
    name: 'Starter',
    price: 49,
    // Preço em dólar (inglês/espanhol): igual ao STRIPE_PRICE_ID_*_USD do servidor.
    priceUsd: 12,
    description: t('Para profissionais e autônomos'),
    highlight: false,
    badge: null,
    limits: [t('2 usuários'), '200 leads'],
    features: [
      t('Até 2 usuários'),
      t('Até 200 leads ativos'),
      t('Até 3 projetos'),
      t('Pipeline visual com 9 etapas'),
      t('Visualizações kanban, tabela e cards'),
      t('Dashboard com métricas por status e origem'),
      t('Funil de vendas com análise de gargalos'),
      t('Importação e exportação em CSV'),
      t('Detecção automática de duplicatas'),
      t('Até 3 campos personalizados'),
      t('Até 3 metas por vendedor'),
      t('Notificações em tempo real'),
      t('Auditoria completa de ações'),
    ],
  },
  {
    key: 'basico',
    name: t('Básico'),
    price: 97,
    // Preço em dólar (inglês/espanhol): igual ao STRIPE_PRICE_ID_*_USD do servidor.
    priceUsd: 24,
    description: t('Para pequenas equipes comerciais'),
    highlight: false,
    badge: null,
    limits: [t('3 usuários'), '500 leads'],
    features: [
      t('Até 3 usuários'),
      t('Até 500 leads ativos'),
      t('Até 5 projetos'),
      t('Tudo do Starter'),
      t('Gestão de equipe com 3 níveis de acesso'),
      t('Convites por e-mail para novos membros'),
      t('Até 5 campos personalizados'),
      t('Até 5 metas por vendedor'),
      t('Relatórios por vendedor, origem e cidade'),
      t('Análise de leads parados'),
    ],
  },
  {
    key: 'pro',
    name: 'Pro',
    price: 197,
    // Preço em dólar (inglês/espanhol): igual ao STRIPE_PRICE_ID_*_USD do servidor.
    priceUsd: 49,
    description: t('Para equipes em crescimento'),
    highlight: true,
    badge: t('Recomendado'),
    limits: [t('5 usuários'), '2.000 leads'],
    features: [
      t('Até 5 usuários'),
      t('Até 2.000 leads ativos'),
      t('Projetos ilimitados'),
      t('Tudo do Básico'),
      t('WhatsApp Cloud API oficial'),
      t('Templates de mensagem WhatsApp'),
      t('Metas ilimitadas por vendedor'),
      t('Até 10 campos personalizados'),
      t('Relatórios avançados de conversão'),
    ],
  },
  {
    key: 'business',
    name: 'Business',
    price: 397,
    // Preço em dólar (inglês/espanhol): igual ao STRIPE_PRICE_ID_*_USD do servidor.
    priceUsd: 99,
    description: t('Para operações de maior escala'),
    highlight: false,
    badge: t('Mais completo'),
    limits: [t('20 usuários'), t('Leads ilimitados')],
    features: [
      t('Até 20 usuários'),
      t('Leads ilimitados'),
      t('Tudo do Pro'),
      t('Campos personalizados ilimitados'),
      t('Logs de auditoria com rastreamento de IP e user-agent'),
      t('Histórico de auditoria completo'),
      t('Relatórios por funil, usuário e período'),
    ],
  },
];
