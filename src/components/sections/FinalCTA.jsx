import { SITE_URL, TRIAL_DAYS } from '../../utils/constants';
import { useOpenDemo } from '../media/DemoContext';
import { PrimaryCTA, DemoButton, PlayStoreBadge } from '../ui/Buttons';
import Picture from '../media/Picture';
import { BrowserFrame } from '../media/Frames';

export default function FinalCTA() {
  const openDemo = useOpenDemo();
  return (
    <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="cta-titulo">
      <div className="hero-dots pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h2 id="cta-titulo" className="text-balance font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem]">
            Comece hoje com os leads que você já tem.
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-white/70 sm:text-lg">
            Crie a conta, importe sua planilha e convide a equipe. São {TRIAL_DAYS} dias para testar
            com o seu processo, sem cartão de crédito.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCTA size="lg">Criar conta grátis</PrimaryCTA>
            <DemoButton onClick={openDemo} />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <PlayStoreBadge />
            <a href={`${SITE_URL}/login`} className="text-sm text-white/60 underline-offset-4 hover:text-white hover:underline">
              Já tenho conta: entrar
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-6 lg:block" aria-hidden="true">
          <div className="translate-x-10 rotate-[-2deg]">
            <BrowserFrame dark url="app.trativa.app/dashboard">
              <Picture name="dashboard" sizes="640px" alt="" />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
