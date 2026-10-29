import { MessageSquare, FileText, Clock, UserPlus, BellRing, Send } from 'lucide-react';
import { BrowserFrame } from '../media/Frames';
import DemoVideo from '../media/DemoVideo';
import Picture from '../media/Picture';
import { VIDEOS } from '../media/media';

// Recursos confirmados em backend/src/services/whatsapp*.js e na ficha do lead.
const features = [
  { Icon: MessageSquare, text: 'Mensagens enviadas e recebidas aparecem na ficha do lead, na ordem da conversa' },
  { Icon: UserPlus, text: 'Quem escreve para o seu número pela primeira vez vira lead automaticamente' },
  { Icon: FileText, text: 'Templates aprovados pela Meta, com variáveis como nome do contato e da empresa' },
  { Icon: Clock, text: 'Controle da janela de atendimento de 24 horas, para saber quando é preciso usar template' },
  { Icon: BellRing, text: 'Follow-ups agendados e aviso de nova mensagem nas notificações' },
  { Icon: Send, text: 'Contato em lote para uma lista filtrada de leads' },
];

export default function WhatsAppSection() {
  return (
    <section id="whatsapp" className="scroll-mt-16 relative overflow-hidden bg-wa py-20 text-white sm:py-28" aria-labelledby="whatsapp-titulo">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.35) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/85 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden="true" />
              WhatsApp Cloud API oficial da Meta
            </p>
            <h2 id="whatsapp-titulo" className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-[2.75rem] sm:leading-[1.08]">
              O WhatsApp da empresa, dentro do processo de vendas
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-white/75 sm:text-lg">
              Conecte o número oficial da empresa e pare de depender do celular de cada vendedor. A
              conversa fica registrada no lead, junto com a etapa e o histórico.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-4 w-4 text-[#7BE3A4]" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/90">{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/80">
              Incluído nos planos Pro e Business. Requer um número conectado à WhatsApp Business Platform
              da Meta.
            </p>
          </div>

          <div className="relative min-w-0 lg:col-span-7">
            <BrowserFrame url="app.trativa.app/leads/mercado-bom-preco" className="shadow-frame">
              <DemoVideo video={VIDEOS.whatsapp} />
            </BrowserFrame>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
              <figure className="min-w-0">
                <BrowserFrame url="app.trativa.app/modelos">
                  <Picture name="modelos-whatsapp" sizes="(min-width: 1024px) 330px, 50vw" alt="Lista de modelos de mensagem de WhatsApp no Trativa, com variáveis e contagem de uso" />
                </BrowserFrame>
                <figcaption className="mt-2 text-sm text-white/85">Modelos de mensagem com variáveis</figcaption>
              </figure>
              <figure className="min-w-0">
                <BrowserFrame url="app.trativa.app/leads">
                  <Picture name="contato-em-lote" sizes="(min-width: 1024px) 330px, 50vw" alt="Janela de contato em lote via WhatsApp no Trativa, com leads filtrados e selecionáveis" />
                </BrowserFrame>
                <figcaption className="mt-2 text-sm text-white/85">Contato em lote para leads filtrados</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
