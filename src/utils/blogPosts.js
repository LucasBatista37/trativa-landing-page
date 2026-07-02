import { SITE_URL } from './constants';

export const BLOG_POSTS = [
  {
    slug: 'responder-lead-em-5-minutos',
    category: 'Conversão',
    readTime: '8 min',
    title: 'Responder um lead em 5 minutos: por que a velocidade vale mais que o discurso de vendas',
    excerpt:
      'Dados mostram que a velocidade de resposta é um dos fatores que mais pesam na conversão. Veja onde a resposta lenta trava e como automatizar sem perder o toque humano.',
    description:
      'Descubra por que responder um lead em até 5 minutos multiplica a conversão e como automatizar a cadência sem perder o toque humano no atendimento.',
    keywords: {
      primary: 'tempo de resposta ao lead',
      secondary: [
        'responder lead rápido',
        'follow-up automatizado',
        'velocidade de atendimento comercial',
        'cadência de vendas',
        'leads esfriando',
        'notificação de lead em tempo real',
      ],
    },
    coverImage: '/blog/covers/tempo-resposta-lead.svg',
    coverImageAlt:
      'Cronômetro marcando 5 minutos ao lado de conversas de WhatsApp e um funil de vendas com etapas coloridas',
    sections: [
      {
        heading: 'Por que a velocidade de resposta decide a venda antes da conversa começar',
        paragraphs: [
          'Um estudo amplamente citado da Harvard Business Review mostra que empresas que respondem a um lead na primeira hora têm sete vezes mais chance de qualificá-lo do que aquelas que demoram mais. Na prática, a maioria das pequenas empresas não chega perto disso: muitas levam horas, ou só respondem no dia seguinte.',
          'Dados mais recentes do mercado brasileiro de vendas por WhatsApp reforçam o mesmo padrão: quanto mais rápida a primeira resposta, maior a chance de o lead seguir engajado no funil. O motivo é simples — o interesse de quem acabou de preencher um formulário ou mandar uma mensagem é o mais alto que ele terá em toda a jornada. Cada minuto de espera é interesse que se dissolve.',
        ],
        callout: {
          stat: '9x',
          label: 'Leads respondidos em até 5 minutos têm até 9 vezes mais chance de conversão do que leads respondidos depois desse intervalo.',
        },
      },
      {
        heading: 'Onde a resposta lenta normalmente trava',
        paragraphs: [
          'Na maioria dos casos, o atraso não é falta de vontade da equipe — é falta de processo. O lead entra em algum canal, mas ninguém é avisado no momento certo, ou ninguém sabe que aquele contato ainda não teve resposta.',
        ],
        checklist: true,
        bullets: [
          'O lead cai em um número de WhatsApp pessoal, sem visibilidade para o resto da equipe.',
          'A notificação chega por e-mail e ninguém verifica a caixa de entrada em tempo real.',
          'Não existe um responsável claro definido no momento em que o lead entra.',
          'O vendedor só confere o CRM em horários fixos do dia, não quando o lead chega.',
          'Não há um jeito rápido de ver quais leads novos ainda não foram respondidos.',
        ],
        cta: {
          heading: 'Sua equipe sabe quanto tempo leva, em média, para responder um lead novo?',
          text: 'O Trativa notifica em tempo real e mantém todo lead novo visível no pipeline até alguém assumir o atendimento.',
          buttonLabel: 'Testar grátis por 14 dias',
          buttonHref: `${SITE_URL}/register`,
        },
      },
      {
        heading: 'Automação de cadência sem perder o toque humano',
        paragraphs: [
          'A boa notícia é que resolver isso não depende de contratar mais gente. Operações comerciais de qualquer tamanho — de duas a duzentas pessoas — conseguem reduzir o tempo de resposta com automação de cadência: sequências de contato disparadas automaticamente assim que um lead entra, combinadas com notificação imediata para o responsável.',
          'Times que adotam esse modelo relatam taxa de resposta entre 12% e 20%, contra 5% a 8% em operações sem automação. O ganho não vem de substituir o vendedor por um robô — vem de garantir que nenhum lead fique esperando enquanto ninguém percebe. Negociação de preço, contorno de objeção e fechamento continuam sendo trabalho humano; o que muda é a velocidade até esse humano entrar em cena.',
        ],
        image: {
          src: '/blog/illustrations/velocidade-resposta-timeline.svg',
          alt: 'Linha do tempo com quatro etapas: lead chega, notificação instantânea, cadência automática e fechamento humano',
          caption: 'Cadência automatizada: do lead novo à primeira resposta em minutos — o fechamento continua humano.',
        },
      },
      {
        heading: 'Resposta manual vs. resposta com pipeline automatizado',
        paragraphs: [
          'A diferença entre os dois modelos fica clara quando comparada lado a lado.',
        ],
        table: {
          caption: 'Comparação entre resposta manual e resposta com pipeline automatizado',
          headers: ['Critério', 'Processo manual', 'Pipeline com notificação em tempo real'],
          rows: [
            ['Tempo médio até 1ª resposta', 'Horas, às vezes 1 dia', 'Minutos'],
            ['Depende da memória do vendedor', 'Sim', 'Não — o sistema avisa'],
            ['Visibilidade do gestor', 'Baixa, sob demanda', 'Em tempo real, por status'],
            ['Taxa de resposta reportada', '5% a 8%', '12% a 20%'],
            ['Rastreabilidade do atendimento', 'Depende de anotação manual', 'Histórico automático por lead'],
          ],
        },
      },
      {
        heading: 'Como estruturar isso na prática',
        paragraphs: [
          'Não é preciso reformular todo o processo comercial de uma vez. O ganho já aparece com alguns ajustes simples e mensuráveis.',
        ],
        checklist: true,
        bullets: [
          'Defina um SLA interno: por exemplo, todo lead novo precisa de contato em até 5 minutos em horário comercial.',
          'Ative notificações em tempo real para o responsável assim que um lead entra.',
          'Mantenha todo lead novo em uma etapa visível do pipeline até alguém assumir o atendimento.',
          'Meça o tempo médio de resposta por vendedor, não só o volume de leads atendidos.',
          'Revise esse indicador semanalmente junto com a equipe, não apenas no fechamento do mês.',
        ],
      },
      {
        heading: 'Como o Trativa viabiliza a resposta rápida sem sobrecarregar a equipe',
        paragraphs: [
          'O Trativa foi pensado para que a velocidade de resposta não dependa de esforço extra da equipe. Notificações em tempo real avisam assim que um lead novo entra, a integração oficial com a WhatsApp Cloud API da Meta mantém a conversa dentro da própria plataforma — sem depender do celular pessoal de ninguém — e o pipeline visual deixa claro quais leads ainda estão na etapa "novo" e aguardando o primeiro contato.',
          'Os relatórios completos, por status, origem e responsável, mostram exatamente onde o tempo de resposta está travando, para que o gestor corrija a rota antes de perder oportunidades que já estavam quentes.',
        ],
      },
    ],
    finalCta: {
      heading: 'Descubra o tempo médio de resposta da sua equipe',
      text: 'O Trativa notifica automaticamente cada lead novo, mantém o WhatsApp oficial integrado ao pipeline e mostra em relatórios quanto tempo sua equipe leva para responder.',
      buttonLabel: 'Começar teste gratuito',
    },
    relatedSlugs: ['leads-parados-como-identificar-gargalos', 'organizar-leads-whatsapp-sem-perder-historico'],
  },
  {
    slug: 'organizar-leads-whatsapp-sem-perder-historico',
    category: 'Atendimento',
    readTime: '6 min',
    title: 'Como organizar leads que chegam pelo WhatsApp sem perder histórico',
    excerpt:
      'Um guia prático para centralizar conversas, responsáveis e próximos passos quando o WhatsApp é o principal canal comercial.',
    description:
      'Aprenda a organizar leads que chegam pelo WhatsApp com histórico, status no funil e responsáveis claros.',
    sections: [
      {
        heading: 'O problema não é receber leads pelo WhatsApp',
        paragraphs: [
          'Para muitas empresas brasileiras, o WhatsApp é o canal mais rápido para iniciar uma venda. O problema aparece quando cada conversa fica presa no celular de uma pessoa, sem contexto para o restante da equipe.',
          'Quando isso acontece, o gestor não sabe quais contatos foram respondidos, quais precisam de follow-up e quais já deveriam ter avançado para proposta ou reunião.',
        ],
      },
      {
        heading: 'O que precisa ficar registrado',
        paragraphs: [
          'Um lead vindo do WhatsApp precisa ter mais do que nome e telefone. O ideal é registrar origem, etapa do funil, responsável, histórico de atendimento e próxima ação esperada.',
          'Esse controle evita que a conversa dependa apenas da memória do vendedor e ajuda a equipe a retomar o atendimento com contexto.',
        ],
        bullets: [
          'Nome, telefone e canal de origem do lead.',
          'Status atual no processo comercial.',
          'Responsável pelo atendimento.',
          'Histórico de mensagens, notas e próximos passos.',
          'Indicação clara de leads sem resposta ou parados.',
        ],
      },
      {
        heading: 'Como transformar conversa em processo',
        paragraphs: [
          'A melhor forma de organizar o atendimento é conectar cada conversa a uma etapa do pipeline. Assim, o lead deixa de ser apenas uma mensagem aberta e passa a fazer parte de um processo comercial visível.',
          'No Trativa, essa lógica aparece no cadastro do lead, no pipeline visual, nos responsáveis e na integração oficial com WhatsApp Cloud API da Meta, sempre dentro do contexto da organização.',
        ],
      },
      {
        heading: 'Boa prática para começar',
        paragraphs: [
          'Defina uma rotina simples: todo novo contato precisa ter responsável, status e próxima ação. Mesmo antes de criar automações mais avançadas, essa disciplina já reduz perdas por esquecimento.',
        ],
      },
    ],
  },
  {
    slug: 'planilha-de-leads-vs-crm',
    category: 'Organização',
    readTime: '7 min',
    title: 'Planilha de leads vs CRM: quando a operação comercial precisa evoluir',
    excerpt:
      'Entenda os sinais de que a planilha deixou de ajudar e começou a limitar a visibilidade da sua equipe comercial.',
    description:
      'Veja quando trocar planilhas por um CRM de leads pode trazer mais controle para vendas, atendimento e gestão.',
    sections: [
      {
        heading: 'Planilhas funcionam bem no início',
        paragraphs: [
          'Uma planilha pode ser suficiente quando há poucos contatos, uma pessoa vendendo e um processo comercial simples. Ela é flexível, barata e fácil de começar.',
          'Mas conforme o volume de leads cresce, a planilha costuma virar um ponto de atrito: versões duplicadas, campos inconsistentes, falta de histórico e dificuldade para saber quem está cuidando de cada oportunidade.',
        ],
      },
      {
        heading: 'Sinais de que a planilha virou gargalo',
        paragraphs: [
          'O momento de evoluir não depende apenas do tamanho da empresa. Ele aparece quando a operação começa a perder clareza.',
        ],
        bullets: [
          'Leads ficam sem resposta porque ninguém sabe quem assumiu o contato.',
          'O status do funil depende de atualização manual e atrasada.',
          'O gestor precisa pedir relatório em vez de consultar dados em tempo real.',
          'A equipe usa planilha, WhatsApp, caderno e e-mail ao mesmo tempo.',
          'Não existe histórico confiável das interações com cada lead.',
        ],
      },
      {
        heading: 'O que um CRM muda na rotina',
        paragraphs: [
          'Um CRM de leads centraliza informações e cria um processo mais previsível. Em vez de cada pessoa controlar oportunidades do seu jeito, a equipe passa a trabalhar em uma estrutura comum.',
          'No Trativa, essa estrutura inclui visualizações em kanban, tabela e cards, além de importação e exportação em CSV para facilitar a transição de bases já existentes.',
        ],
      },
      {
        heading: 'A troca não precisa ser radical',
        paragraphs: [
          'Uma boa migração começa com o essencial: importar os leads, padronizar status, definir responsáveis e acompanhar os primeiros relatórios. O objetivo não é complicar a rotina, mas reduzir controles paralelos.',
        ],
      },
    ],
  },
  {
    slug: 'pipeline-de-vendas-etapas-claras',
    category: 'Gestão comercial',
    readTime: '5 min',
    title: 'Pipeline de vendas: como definir etapas claras do primeiro contato à conversão',
    excerpt:
      'Organize oportunidades em etapas objetivas para que vendedores e gestores entendam onde cada negociação está.',
    description:
      'Aprenda a estruturar um pipeline de vendas simples, visual e mais fácil de acompanhar pela equipe.',
    sections: [
      {
        heading: 'Pipeline bom é aquele que reduz dúvida',
        paragraphs: [
          'Um pipeline de vendas serve para mostrar em que ponto cada oportunidade está. Se as etapas são confusas, cada vendedor interpreta o processo de um jeito e os relatórios perdem valor.',
          'A regra é simples: uma etapa deve representar uma situação real da venda, não apenas uma intenção vaga.',
        ],
      },
      {
        heading: 'Etapas precisam indicar ação',
        paragraphs: [
          'Uma boa etapa ajuda a equipe a decidir o próximo movimento. Por exemplo: um lead em "novo" precisa de primeiro contato; um lead em "proposta enviada" precisa de acompanhamento; um lead em "sem resposta" precisa de uma tentativa planejada.',
        ],
        bullets: [
          'Use nomes claros e conhecidos pela equipe.',
          'Evite etapas que se sobrepõem.',
          'Defina quando um lead entra e sai de cada etapa.',
          'Acompanhe gargalos por status ao longo do tempo.',
        ],
      },
      {
        heading: 'Como o Trativa organiza essa visão',
        paragraphs: [
          'O Trativa trabalha com um pipeline comercial estruturado em etapas como novo, em atendimento, contatado, interessado, reunião marcada, proposta enviada, convertido e perdido.',
          'Essa organização permite visualizar o funil em kanban e acompanhar onde há concentração de oportunidades ou perda de velocidade.',
        ],
      },
      {
        heading: 'Comece simples e refine com dados',
        paragraphs: [
          'Depois que a equipe começa a usar o pipeline, os relatórios mostram onde o processo trava. A partir daí, fica mais fácil ajustar abordagem, prioridade e acompanhamento.',
        ],
      },
    ],
  },
  {
    slug: 'acompanhar-metas-de-vendas-sem-cobrancas-manuais',
    category: 'Produtividade',
    readTime: '4 min',
    title: 'Como acompanhar metas de vendas sem depender de cobranças manuais',
    excerpt:
      'Veja como transformar metas em acompanhamento contínuo, com menos reunião de cobrança e mais visibilidade para a equipe.',
    description:
      'Aprenda formas simples de acompanhar metas comerciais por vendedor, período e tipo de resultado.',
    sections: [
      {
        heading: 'Meta sem acompanhamento vira pressão de última hora',
        paragraphs: [
          'Quando as metas só aparecem no fechamento do mês, o gestor perde tempo de reação. A equipe também fica sem clareza sobre o ritmo necessário para chegar ao resultado esperado.',
          'Acompanhar metas ao longo do período ajuda a corrigir rota antes que o problema esteja consolidado.',
        ],
      },
      {
        heading: 'Nem toda meta precisa ser apenas venda fechada',
        paragraphs: [
          'Em operações comerciais, existem indicadores intermediários importantes: contatos realizados, reuniões marcadas, propostas enviadas e leads convertidos.',
          'Esses indicadores ajudam a entender se o processo está andando, mesmo antes da conversão final.',
        ],
        bullets: [
          'Metas por vendedor ou responsável.',
          'Metas por período definido.',
          'Acompanhamento de reuniões, propostas, contatos e conversões.',
          'Visão de progresso para reduzir cobranças manuais repetitivas.',
        ],
      },
      {
        heading: 'O papel do sistema na rotina do gestor',
        paragraphs: [
          'Um sistema de gestão não substitui a conversa com a equipe, mas melhora a qualidade dessa conversa. Em vez de perguntar o que aconteceu, o gestor pode olhar dados e discutir próximos passos.',
          'No Trativa, as metas de vendas se conectam ao acompanhamento dos leads e ao progresso da equipe dentro da organização.',
        ],
      },
    ],
  },
  {
    slug: 'leads-parados-como-identificar-gargalos',
    category: 'Relatórios',
    readTime: '6 min',
    title: 'Leads parados: como identificar gargalos antes que oportunidades esfriem',
    excerpt:
      'Aprenda a usar status, origem e tempo sem movimentação para encontrar oportunidades que precisam de ação.',
    description:
      'Entenda como relatórios de leads parados ajudam a evitar perda de oportunidades no funil comercial.',
    sections: [
      {
        heading: 'Lead parado é sinal de falta de próxima ação',
        paragraphs: [
          'Nem todo lead parado está perdido, mas todo lead parado merece atenção. Muitas oportunidades esfriam porque ninguém definiu o próximo passo ou porque o responsável não recebeu um sinal claro de prioridade.',
          'Acompanhar esse tipo de gargalo ajuda a equipe a agir antes que o contato perca interesse.',
        ],
      },
      {
        heading: 'O que observar nos relatórios',
        paragraphs: [
          'Relatórios úteis não precisam começar complexos. Eles precisam responder perguntas práticas sobre a operação.',
        ],
        bullets: [
          'Quais leads estão há mais tempo sem atualização.',
          'Em quais etapas do funil os contatos ficam acumulados.',
          'Quais origens geram mais oportunidades qualificadas.',
          'Quais responsáveis têm mais leads aguardando ação.',
        ],
      },
      {
        heading: 'Como transformar dados em ação',
        paragraphs: [
          'Depois de identificar leads parados, a equipe pode priorizar follow-ups, revisar mensagens, redistribuir responsáveis ou ajustar a etapa do pipeline.',
          'No Trativa, relatórios por status, origem, usuário, cidade e funil ajudam a enxergar esses pontos com mais clareza.',
        ],
      },
      {
        heading: 'Controle simples, impacto direto',
        paragraphs: [
          'O objetivo não é criar relatórios para enfeitar a gestão. É tornar visível o que precisa de atenção para que boas oportunidades não fiquem esquecidas.',
        ],
      },
    ],
  },
];

export const getBlogPostBySlug = (slug) => BLOG_POSTS.find((post) => post.slug === slug);
