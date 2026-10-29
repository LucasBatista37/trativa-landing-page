import { DESKTOP_WIDTHS, MOBILE_WIDTHS, DESKTOP_RATIO, MOBILE_RATIO, srcSet } from './media';

/**
 * Captura real em AVIF com fallback WebP, responsiva e com dimensões explícitas (sem CLS).
 */
export default function Picture({
  name,
  alt,
  mobile = false,
  sizes = '(min-width: 1280px) 1100px, 100vw',
  priority = false,
  className = '',
  imgClassName = 'block w-full h-auto',
}) {
  const widths = mobile ? MOBILE_WIDTHS : DESKTOP_WIDTHS;
  const ratio = mobile ? MOBILE_RATIO : DESKTOP_RATIO;
  const fallback = `/media/img/${name}-${widths[1]}.webp`;
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcSet(name, 'avif', widths)} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(name, 'webp', widths)} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={ratio.w}
        height={ratio.h}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={priority ? 'high' : undefined}
        className={imgClassName}
      />
    </picture>
  );
}
