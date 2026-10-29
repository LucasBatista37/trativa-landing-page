import { Sliders, FileUp, Copy, ShieldCheck, Bell, FolderKanban, Palette, Download } from 'lucide-react';

// Recursos confirmados no backend (rotas e modelos) e nas capturas do app.
const ITEMS = [
  { Icon: Sliders, title: 'Campos personalizados', text: 'Texto, número, moeda, data, seleção, URL e outros, exibidos no card do Kanban e nos filtros.' },
  { Icon: FileUp, title: 'Importação por CSV ou API', text: 'Revise linha a linha antes de gravar, ou envie leads de outra ferramenta com uma chave de API.' },
  { Icon: Copy, title: 'Duplicados detectados', text: 'Telefone, e-mail e Instagram são comparados no cadastro e na importação.' },
  { Icon: FolderKanban, title: 'Projetos', text: 'Separe carteiras ou campanhas e filtre painel, leads, funil e metas por projeto.' },
  { Icon: Bell, title: 'Notificações em tempo real', text: 'Lead convertido, nova mensagem de WhatsApp, tarefas do dia e leads parados.' },
  { Icon: ShieldCheck, title: 'Auditoria', text: 'Registro das ações da equipe, com quem fez, o quê e quando.' },
  { Icon: Download, title: 'Exportação', text: 'Seus leads saem em CSV quando você quiser.' },
  { Icon: Palette, title: 'Interface do seu jeito', text: 'Seis paletas de cores para a equipe trabalhar com a cara da empresa.' },
];

export default function MoreFeatures() {
  return (
    <section className="border-t border-line bg-white py-20 sm:py-24" aria-labelledby="recursos-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="recursos-titulo" className="max-w-xl text-balance font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          E os detalhes que fazem o dia a dia andar
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ Icon, title, text }) => (
            <li key={title}>
              <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
