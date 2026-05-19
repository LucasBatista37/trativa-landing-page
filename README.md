# Trativa — Landing Page

Landing page de marketing da plataforma **Trativa**, um CRM de gestão de leads para equipes comerciais brasileiras.

Construída como projeto standalone com React 18 + Vite + Tailwind CSS. Não depende do frontend principal — pode ser hospedada separadamente.

---

## Stack

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| React | 18.3 | Framework UI |
| Vite | 5.3 | Build e dev server |
| Tailwind CSS | 3.4 | Estilização |
| Inter (Google Fonts) | — | Tipografia |
| Framer Motion | 11.x | Animações de scroll |
| Lucide React | 0.400 | Ícones |

---

## Desenvolvimento

```bash
cd landing-page
npm install
npm run dev
```

Abre em `http://localhost:5173`

---

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para deploy (Vercel, Netlify, S3, etc.).

```bash
npm run preview   # Preview do build localmente
```

---

## Estrutura de pastas

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          — Header fixo com blur no scroll
│   │   └── Footer.jsx          — Footer dark 4 colunas
│   └── sections/
│       ├── Hero.jsx             — Seção principal com mockup CSS
│       ├── Problem.jsx          — 4 dores do processo comercial
│       ├── Solution.jsx         — Pipeline visual + pills das 9 etapas
│       ├── Features.jsx         — Grid de 8 funcionalidades reais
│       ├── WhatsAppSection.jsx  — Integração WhatsApp com phone mockup
│       ├── HowItWorks.jsx       — 4 passos de uso
│       ├── Pricing.jsx          — 4 planos reais + trial banner
│       └── FinalCTA.jsx         — CTA final com trust badges
└── utils/
    └── constants.js             — Todos os dados estáticos centralizados
```

---

## Configuração — URL do app

Todos os CTAs apontam para `SITE_URL` definido em `src/utils/constants.js`:

```js
export const SITE_URL = 'https://app.trativa.com.br';
```

Atualize essa constante conforme a URL real de produção do sistema antes do deploy.

---

## Sobre as informações da landing page

### Funcionalidades usadas (confirmadas no código)

Todas as informações apresentadas foram extraídas diretamente do código real do sistema:

- **Pipeline de 9 etapas** — confirmado no modelo `Lead` (campo `status`) e em `formatters.js`
- **Visualizações kanban/tabela/cards** — confirmado nos componentes `KanbanView.jsx`, `LeadTable.jsx`, `LeadCard.jsx`
- **WhatsApp Cloud API** — confirmado nos modelos `WhatsAppIntegration`, `WhatsAppMessage`, `Conversation` e nas rotas `/api/whatsapp`
- **Campos personalizados** — confirmado no modelo `CustomField` com 10+ tipos
- **3 níveis de acesso** — confirmado no modelo `User` (roles: owner, admin, collaborator)
- **Metas de vendas** — confirmado no modelo `SalesGoal` com 4 tipos de meta
- **Relatórios completos** — confirmado nas rotas `/api/reports` (8+ endpoints)
- **Importação/Exportação CSV** — confirmado nas rotas `/api/leads/import` e `/api/leads/export`
- **Detecção de duplicatas** — confirmado na rota `/api/leads/check-duplicate` e campos normalized no modelo
- **Auditoria** — confirmado no modelo `AuditLog` com IP, user-agent e 17+ tipos de ação
- **Planos e preços** — confirmado no modelo `Organization` e no frontend `Billing.jsx` (R$49/R$97/R$197/R$397)
- **Trial de 14 dias** — confirmado no `dateUtils.js` e na lógica de registro

### Informações intencionalmente omitidas

As seguintes informações **não existem no código** e foram **propositalmente deixadas de fora**:

- Depoimentos de clientes (sem base de usuários ainda)
- Número de empresas usando ("X empresas confiam no Trativa")
- Percentual de aumento de vendas ("Aumente em X%")
- Cases de sucesso reais
- Avaliações/estrelas de usuários
- Integrações com Slack, Salesforce ou ferramentas não encontradas no código

### Melhorias futuras (quando o sistema tiver usuários reais)

Quando a base de usuários existir, é possível adicionar:

- Seção de depoimentos com fotos e nome de empresas reais
- Número de leads gerenciados / empresas cadastradas
- Cases de sucesso com resultados concretos
- Avaliações do produto (G2, Capterra, Google)
- Logos de empresas que usam o sistema
- Métricas reais de conversão dos clientes

---

## SEO

A `index.html` contém:

- `<title>` descritivo com nome do produto e proposta de valor
- `<meta name="description">` com copy honesto
- Open Graph para compartilhamento em redes sociais
- `lang="pt-BR"` para indexação correta no Brasil
- Inter font com `preconnect` para performance
- Favicon SVG inline (sem dependência externa)
