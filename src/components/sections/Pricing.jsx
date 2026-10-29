import { Check } from 'lucide-react';
import { PLANS, SITE_URL, TRIAL_DAYS } from '../../utils/constants';
import { PrimaryCTA } from '../ui/Buttons';

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-paper py-20 sm:py-28" aria-labelledby="planos-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 id="planos-titulo" className="text-balance font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-[2.75rem] sm:leading-[1.08]">
              Planos pelo tamanho da sua equipe
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              Todos começam com {TRIAL_DAYS} dias grátis com os limites do Starter. Sem cartão de crédito e
              sem cobrança automática no fim do teste.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <PrimaryCTA>Começar teste de {TRIAL_DAYS} dias</PrimaryCTA>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan) => (
            <article
              key={plan.key}
              className={`relative flex flex-col rounded-2xl p-6 ${
                plan.highlight
                  ? 'bg-ink text-white shadow-frame ring-1 ring-ink'
                  : 'bg-white text-gray-900 ring-1 ring-line'
              }`}
              aria-labelledby={`plano-${plan.key}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 id={`plano-${plan.key}`} className="font-display text-xl font-bold tracking-tight">{plan.name}</h3>
                {plan.badge && (
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      plan.highlight ? 'bg-brand-600 text-white' : 'bg-paper text-gray-700 ring-1 ring-line'
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className={`mt-1 text-sm ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>{plan.description}</p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>R$</span>
                <span className="font-display text-5xl font-bold tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>/mês</span>
              </p>

              <dl className={`mt-5 grid grid-cols-2 gap-2 text-sm`}>
                {plan.limits.map((l) => (
                  <div
                    key={l}
                    className={`rounded-lg px-3 py-2 text-center font-medium ${
                      plan.highlight ? 'bg-white/10 text-white' : 'bg-paper text-gray-800'
                    }`}
                  >
                    <dt className="sr-only">Limite</dt>
                    <dd>{l}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm leading-relaxed">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlight ? 'text-brand-300' : 'text-brand-600'}`}
                      aria-hidden="true"
                    />
                    <span className={plan.highlight ? 'text-white/85' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${SITE_URL}/register`}
                className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? 'bg-brand-600 text-white hover:bg-brand-500'
                    : 'text-gray-900 ring-1 ring-line hover:bg-paper'
                }`}
              >
                Testar grátis e escolher o {plan.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Assinatura mensal com pagamento pelo Stripe. Cancele pelo portal de assinatura quando quiser; o acesso
          continua até o fim do ciclo pago.
        </p>
      </div>
    </section>
  );
}
