/**
 * Molduras de apresentação. Não alteram a captura: só dão contexto (navegador / celular).
 */
export function BrowserFrame({ url = 'app.trativa.app', children, className = '', dark = false }) {
  return (
    <div
      className={`min-w-0 overflow-hidden rounded-xl ring-1 ${
        dark ? 'bg-ink-soft ring-white/10 shadow-frame' : 'bg-white ring-line shadow-frame-light'
      } ${className}`}
    >
      <div
        className={`flex min-w-0 items-center gap-2 border-b px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5 ${
          dark ? 'border-white/10 bg-ink-soft' : 'border-line bg-paper'
        }`}
        aria-hidden="true"
      >
        <div className="flex gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-white/20' : 'bg-gray-300'}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-white/20' : 'bg-gray-300'}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-white/20' : 'bg-gray-300'}`} />
        </div>
        <div
          className={`mx-auto flex min-w-0 max-w-xs flex-1 items-center justify-center gap-1.5 truncate rounded-md px-3 py-1 text-[11px] sm:text-xs ${
            dark ? 'bg-white/5 text-white/55' : 'bg-white text-gray-500 ring-1 ring-line'
          }`}
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3 flex-shrink-0" fill="currentColor" aria-hidden="true">
            <path d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5H6V4.5a2 2 0 1 1 4 0V6Z" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
        <div className="hidden w-[42px] sm:block" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`relative rounded-[2.4rem] bg-[#0d1117] p-[7px] shadow-phone ring-1 ring-white/10 ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-white">
        {children}
        {/* câmera frontal sobre a área livre da barra de status da captura */}
        <span className="absolute left-1/2 top-[1.1%] h-[2.1%] w-[6.5%] -translate-x-1/2 rounded-full bg-[#0d1117]" aria-hidden="true" />
      </div>
    </div>
  );
}
