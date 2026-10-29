import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const saveData = () =>
  typeof navigator !== 'undefined' && navigator.connection?.saveData === true;

/**
 * Microdemonstração em vídeo (gravação real, sem áudio).
 * - O pôster (AVIF/WebP) fica sempre por baixo: é o LCP e o fallback se o vídeo falhar.
 * - O arquivo só é requisitado quando o player se aproxima da tela.
 * - Toca em loop só enquanto visível; pausa fora da tela.
 * - Com "reduzir movimento" ou economia de dados, não toca sozinho: mostra o botão de play.
 */
export default function DemoVideo({
  video,
  priority = false,
  className = '',
  rounded = '',
  showToggle = true,
}) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [src, setSrc] = useState(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const autoOk = useRef(true);
  const visible = useRef(false);

  useEffect(() => {
    autoOk.current = !prefersReducedMotion() && !saveData();
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setSrc(video.src);
      return undefined;
    }
    const near = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(video.src);
          near.disconnect();
        }
      },
      { rootMargin: '300px 0px' },
    );
    near.observe(el);
    return () => near.disconnect();
  }, [video.src]);

  // novas <source> só são lidas após load()
  useEffect(() => {
    if (src) videoRef.current?.load();
  }, [src]);

  useEffect(() => {
    const el = wrapRef.current;
    const v = videoRef.current;
    if (!el || !v || !src || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        if (entry.isIntersecting && autoOk.current && !userPaused) {
          v.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          v.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src, userPaused]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!src) setSrc(video.src);
    if (v.paused) {
      setUserPaused(false);
      autoOk.current = true;
      v.play().catch(() => {});
    } else {
      setUserPaused(true);
      v.pause();
    }
  };

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden bg-white ${rounded} ${className}`}
      style={{ aspectRatio: `${video.w} / ${video.h}` }}
    >
      <picture>
        <source type="image/avif" srcSet={`${video.poster}.avif`} />
        <img
          src={`${video.poster}.webp`}
          alt={failed ? video.label : ''}
          aria-hidden={failed ? undefined : true}
          width={video.w}
          height={video.h}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : undefined}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {!failed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          loop
          playsInline
          preload="none"
          aria-label={video.label}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          {src && <source src={src} type="video/mp4" />}
          {src && (
            <source
              src={src.replace(/\.mp4$/, '.webm')}
              type="video/webm"
              onError={() => setFailed(true)}
            />
          )}
        </video>
      )}

      {showToggle && !failed && (
        <button
          type="button"
          onClick={toggle}
          className="absolute bottom-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/75 text-white shadow-lg backdrop-blur transition hover:bg-ink focus-visible:outline-white"
          aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        >
          {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4 translate-x-px" aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}
