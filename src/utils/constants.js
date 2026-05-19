export const SITE_URL = 'https://app.trativa.app';
export const LANDING_URL = 'https://trativa.app';

export const NAV_LINKS = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'WhatsApp',        href: '#whatsapp' },
  { label: 'Como funciona',   href: '#how-it-works' },
  { label: 'Planos',          href: '#pricing' },
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

// 8 features reais confirmadas no código
export const FEATURES = [
  {
    icon: 'Columns2',
    color: 'text-blue-600 bg-blue-50',
    title: 'Pipeline Kanban',
    description: 'Arraste e solte leads entre as 9 etapas do funil. Visualize também em tabela ou cards, conforme sua preferência.',
  },
  {
    icon: 'MessageSquare',
    color: 'text-emerald-600 bg-emerald-50',
    title: 'WhatsApp Oficial',
    description: 'Integração via WhatsApp Cloud API da Meta. Envie e receba mensagens, use templates aprovados e controle a janela de serviço.',
  },
  {
    icon: 'Sliders',
    color: 'text-violet-600 bg-violet-50',
    title: 'Campos Personalizados',
    description: 'Adicione campos do tipo texto, número, moeda, data, seleção e mais. Adapte o CRM ao seu processo sem código.',
  },
  {
    icon: 'Users',
    color: 'text-orange-600 bg-orange-50',
    title: 'Gestão de Equipe',
    description: 'Três níveis de acesso: Proprietário, Administrador e Colaborador. Convide membros por e-mail e gerencie permissões.',
  },
  {
    icon: 'Target',
    color: 'text-rose-600 bg-rose-50',
    title: 'Metas de Vendas',
    description: 'Defina metas de leads convertidos, contatados, propostas e reuniões. Acompanhe o progresso por vendedor e período.',
  },
  {
    icon: 'BarChart2',
    color: 'text-indigo-600 bg-indigo-50',
    title: 'Relatórios Completos',
    description: 'Análises por status, origem, usuário e funil. Identifique gargalos, leads parados e evolução da taxa de conversão.',
  },
  {
    icon: 'FileText',
    color: 'text-teal-600 bg-teal-50',
    title: 'Importação e Exportação',
    description: 'Importe sua base de contatos em CSV com visualização prévia. Exporte seus dados a qualquer momento, sem restrições.',
  },
  {
    icon: 'ShieldCheck',
    color: 'text-gray-600 bg-gray-100',
    title: 'Auditoria e Duplicatas',
    description: 'Logs completos de todas as ações da equipe. Detecção automática de duplicatas por telefone, e-mail e Instagram.',
  },
];

// Planos reais confirmados no Billing.jsx e modelo Organization (maxUsers, maxLeads)
export const PLANS = [
  {
    key: 'starter',
    name: 'Starter',
    price: 49,
    description: 'Para profissionais e autônomos',
    highlight: false,
    badge: null,
    limits: '2 usuários · 200 leads',
    features: [
      'Até 2 usuários',
      'Até 200 leads ativos',
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
    limits: '3 usuários · 500 leads',
    features: [
      'Até 3 usuários',
      'Até 500 leads ativos',
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
    badge: 'Mais popular',
    limits: '5 usuários · 2.000 leads',
    features: [
      'Até 5 usuários',
      'Até 2.000 leads ativos',
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
    limits: '20 usuários · leads ilimitados',
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
