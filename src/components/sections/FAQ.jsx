import { Plus } from 'lucide-react';
import { TRIAL_DAYS } from '../../utils/constants';

// Respostas conferidas no código: authController (trial), emailService (retenção),
// leadImportService (CSV), páginas legais de cancelamento e o app Android 1.7.0.
export const FAQ_ITEMS = [
  {
    q: 'Como funciona o teste grátis?',
    a: `São ${TRIAL_DAYS} dias com os limites do plano Starter: 2 usuários, 200 leads, 3 metas, 3 campos personalizados e 3 projetos. Não pedimos cartão de crédito. Se você não assinar um plano até o fim do teste, o acesso é suspenso e nada é cobrado.`,
  },
  {
    q: 'O que acontece com os meus dados se o teste acabar?',
    a: 'A conta fica suspensa até a assinatura ser ativada, e os dados ficam preservados por 30 dias. Ao assinar, você continua de onde parou.',
  },
  {
    q: 'Preciso da API oficial do WhatsApp para usar o Trativa?',
    a: 'Não. Sem a integração, você monta a mensagem a partir de um modelo e abre a conversa no WhatsApp com um clique. Para enviar e receber mensagens dentro da ficha do lead, conecte um número à WhatsApp Business Platform (Cloud API) da Meta, recurso dos planos Pro e Business.',
  },
  {
    q: 'Tem aplicativo para celular?',
    a: 'Sim, para Android, no Google Play. No iPhone, o Trativa funciona pelo navegador, com layout próprio para telas pequenas. Também há app para computador (Windows, macOS e Linux).',
  },
  {
    q: 'Consigo trazer os leads da minha planilha?',
    a: 'Sim. Importe um arquivo CSV (há um modelo pronto para baixar), confira a prévia com válidos, inválidos e duplicados, e só então confirme. Também dá para enviar leads por API a partir de outra ferramenta.',
  },
  {
    q: 'Como funciona o acesso da equipe?',
    a: 'Há três papéis: proprietário, administrador e colaborador. O colaborador vê e edita os leads atribuídos a ele e os que estão sem responsável. Convites são enviados por e-mail, e você escolhe a quais projetos cada pessoa tem acesso.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. O cancelamento é feito em Configurações → Cobrança → Gerenciar assinatura. O acesso continua até o último dia do ciclo já pago.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 bg-white py-20 sm:py-28" aria-labelledby="faq-titulo">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="faq-titulo" className="text-balance font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-[2.75rem] sm:leading-[1.08]">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-gray-600">
            Não achou sua dúvida? Escreva para{' '}
            <a href="mailto:suporte@trativa.com.br" className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800">
              suporte@trativa.com.br
            </a>
            .
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line lg:col-span-8">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                <span className="text-[17px]">{item.q}</span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ring-1 ring-line transition group-open:rotate-45 group-open:bg-ink group-open:text-white group-open:ring-ink">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 text-pretty leading-relaxed text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
