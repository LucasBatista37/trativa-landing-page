import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { VIDEOS } from './media';

/**
 * Demonstração completa (59 s, gravação real, sem narração) em <dialog> nativo:
 * foco preso no modal, Esc fecha, controles nativos do player.
 */
export default function VideoModal({ open, onClose }) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const v = VIDEOS.demo;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (!reduce) videoRef.current?.play().catch(() => {});
    }
    if (!open && d.open) {
      videoRef.current?.pause();
      d.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      aria-labelledby="demo-title"
      aria-describedby="demo-desc"
      className="m-auto w-[min(1100px,calc(100vw-24px))] rounded-2xl bg-ink p-0 text-white shadow-2xl backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
        <h2 id="demo-title" className="font-display text-base font-semibold sm:text-lg">
          O Trativa funcionando, do login ao lead atualizado
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          aria-label="Fechar demonstração"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      {open && (
        <video
          ref={videoRef}
          className="block aspect-[5/3] w-full bg-white"
          poster={`${v.poster}.webp`}
          controls
          muted
          playsInline
          preload="metadata"
          aria-label={v.label}
        >
          <source src={v.src} type="video/mp4" />
          <source src={v.src.replace(/\.mp4$/, '.webm')} type="video/webm" />
        </video>
      )}
      <p id="demo-desc" className="px-4 py-3 text-sm leading-relaxed text-white/65 sm:px-5">
        Gravação real, sem áudio, com dados fictícios: login, painel com os totais por etapa, lista de
        leads, pipeline Kanban com leads arrastados entre as etapas “Novo”, “Em atendimento” e
        “Contatado”, e a ficha completa de um lead.
      </p>
    </dialog>
  );
}
