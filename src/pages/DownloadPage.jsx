import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';

const BASE = 'https://github.com/LucasBatista37/trativa-desktop/releases/latest/download';
const RELEASES_URL = 'https://github.com/LucasBatista37/trativa-desktop/releases/latest';

const PLATFORMS = [
  {
    id: 'windows',
    name: 'Windows',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0078D4" aria-hidden="true">
        <path d="M3 5.557L10.5 4.5V11.5H3V5.557ZM11.5 4.356L21 3V11.5H11.5V4.356ZM3 12.5H10.5V19.5L3 18.443V12.5ZM11.5 12.5H21V21L11.5 19.644V12.5Z"/>
      </svg>
    ),
    requirement: 'Windows 10 ou superior (64-bit)',
    downloads: [
      { label: 'Baixar para Windows', url: `${BASE}/Trativa-Desktop-Setup.exe`, primary: true },
    ],
    note: 'Instalador NSIS · ~120 MB',
  },
  {
    id: 'mac',
    name: 'macOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-700" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    requirement: 'macOS 11 (Big Sur) ou superior',
    downloads: [
      { label: 'Baixar para Mac (Apple Silicon)', url: `${BASE}/Trativa-Desktop-mac-arm64.dmg`, primary: true },
      { label: 'Baixar para Mac (Intel)', url: `${BASE}/Trativa-Desktop-mac-x64.dmg`, primary: false },
    ],
    note: 'Arquivo DMG · M1, M2, M3 ou Intel',
    warning: 'Como o app não é assinado pela Apple, na primeira abertura clique com botão direito → Abrir.',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-700" fill="currentColor" aria-hidden="true">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00.11.27c.05.06.12.09.19.09a.53.53 0 00.47-.3c.165-.375.352-.75.56-1.12.45.766 1.012 1.49 1.695 2.19-.2.396-.38.8-.536 1.213-.217.581-.296 1.2-.296 1.818C7 22.52 9.53 24 12 24c2.468 0 5-1.48 5-5.77 0-.618-.079-1.237-.296-1.817-.155-.413-.336-.817-.535-1.212.683-.7 1.244-1.424 1.695-2.19.208.37.395.745.56 1.12a.53.53 0 00.47.3c.07 0 .14-.03.19-.09a.424.424 0 00.11-.27c.123-.806-.009-1.657-.287-2.49-.59-1.77-1.831-3.47-2.716-4.52-.75-1.067-.974-1.928-1.05-3.02-.064-1.49 1.057-5.965-3.17-6.298a6.04 6.04 0 00-.481-.02z"/>
      </svg>
    ),
    requirement: 'Qualquer distribuição moderna (x64)',
    downloads: [
      { label: 'Baixar para Linux (AppImage)', url: `${BASE}/Trativa-Desktop-linux-x86_64.AppImage`, primary: true },
    ],
    note: 'AppImage · sem instalação necessária',
    warning: 'Após baixar, marque o arquivo como executável: chmod +x *.AppImage',
  },
];

const STEPS = [
  { n: '1', title: 'Baixe o instalador', desc: 'Escolha o arquivo para o seu sistema operacional e aguarde o download.' },
  { n: '2', title: 'Execute o instalador', desc: 'Abra o arquivo baixado e siga as instruções na tela. Leva menos de 1 minuto.' },
  { n: '3', title: 'Pronto!', desc: 'O Trativa abrirá automaticamente. Faça login e comece a usar.' },
];

const FEATURES = [
  { icon: '⚡', text: 'Acesso rápido pelo ícone na barra de tarefas' },
  { icon: '🔔', text: 'Notificações desktop de novos leads e tarefas' },
  { icon: '🔒', text: 'Seguro — sem dados armazenados localmente' },
  { icon: '🔄', text: 'Atualizações automáticas incluídas' },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <SEO
        title="Baixar Trativa Desktop — Windows, macOS e Linux"
        description="Instale o Trativa Desktop no seu computador e gerencie leads com mais agilidade. Disponível para Windows, macOS e Linux, com atualizações automáticas."
        path="/download"
      />
      <Header />

      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" />
            Disponível para Windows, macOS e Linux
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Trativa para Desktop
          </h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto">
            Toda a potência do Trativa em um aplicativo instalável. Acesso mais rápido, notificações nativas e experiência profissional em qualquer sistema.
          </p>
        </div>
      </section>

      {/* Platform cards */}
      <section className="px-4 -mt-8 mb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLATFORMS.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                {p.icon}
                <div>
                  <h2 className="font-bold text-gray-900">{p.name}</h2>
                  <p className="text-xs text-gray-400">{p.requirement}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-3 mt-auto">
                {p.downloads.map((d) => (
                  <a
                    key={d.url}
                    href={d.url}
                    className={`block text-center text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors ${
                      d.primary
                        ? 'bg-brand-600 hover:bg-brand-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {d.label}
                  </a>
                ))}
              </div>

              <p className="text-xs text-gray-400 text-center">{p.note}</p>

              {p.warning && (
                <p className="mt-3 text-xs text-amber-600 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                  ⚠️ {p.warning}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-brand-600 transition-colors"
          >
            Ver todas as versões e changelogs no GitHub →
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
            Por que usar o aplicativo desktop?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.text} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-xl flex-shrink-0">{f.icon}</span>
                <p className="text-sm text-gray-700">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-10">
            Como instalar
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="flex-1 text-center">
                <div className="w-10 h-10 rounded-full bg-brand-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {s.n}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Requisitos</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Windows', 'Windows 10 ou superior (64-bit)'],
                  ['macOS', 'macOS 11 Big Sur ou superior (Intel ou Apple Silicon)'],
                  ['Linux', 'Qualquer distribuição x64 com suporte a AppImage'],
                  ['Conexão com internet', 'Necessária — o sistema roda na nuvem'],
                  ['Conta Trativa', 'Necessária — crie em trativa.app'],
                ].map(([req, val]) => (
                  <tr key={req} className="even:bg-gray-50">
                    <td className="px-5 py-3 font-medium text-gray-700 w-2/5">{req}</td>
                    <td className="px-5 py-3 text-gray-500">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-hero-gradient px-4 py-14 text-center">
        <h2 className="text-2xl font-black text-white mb-2">Pronto para começar?</h2>
        <p className="text-blue-200 text-sm mb-6">Escolha o instalador para o seu sistema e acesse o Trativa direto do seu desktop.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`${BASE}/Trativa-Desktop-Setup.exe`}
            className="bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
          >
            Baixar para Windows
          </a>
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white text-sm transition-colors"
          >
            Outras plataformas →
          </a>
          <Link
            to="/"
            className="text-blue-200 hover:text-white text-sm transition-colors"
          >
            Conhecer o Trativa →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
