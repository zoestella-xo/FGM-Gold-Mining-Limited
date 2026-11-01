import { images } from '../config/images';
import './Logo.css';

interface LogoProps {
  /** "dark" = black monogram for light surfaces; "light" = white monogram for brown surfaces. */
  readonly variant: 'dark' | 'light';
  /** "nav" ≈ 51×28 (header pill), "footer" ≈ 147×82. */
  readonly size: 'nav' | 'footer';
}

/**
 * FGM monogram. Renders the image configured in `src/config/images.ts`;
 * until one is supplied it falls back to a text wordmark so layouts hold their shape.
 */
export function Logo({ variant, size }: LogoProps) {
  const asset = variant === 'dark' ? images.logoDark : images.logoLight;
  const classes = `logo logo--${variant} logo--${size}`;

  if (asset.src) {
    return <img className={classes} src={asset.src} alt={asset.alt} />;
  }

  // PLACEHOLDER: replace by setting `logoDark` / `logoLight` in src/config/images.ts.
  return (
    <span className={`${classes} logo--placeholder`} role="img" aria-label={asset.alt}>
      FGM
    </span>
  );
}
