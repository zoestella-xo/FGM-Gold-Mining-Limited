import type { CSSProperties } from 'react';
import { HOME_HERO } from '../../data/content';
import { images } from '../../config/images';
import './home.css';

/**
 * Full-width hero: landscape photo tinted with the brand brown, centred headline on top.
 * With no image configured it falls back to solid brand brown and a small hint label.
 */
export function Hero() {
  const { hero } = images;
  const imageStyle: CSSProperties | undefined = hero.focus ? { objectPosition: hero.focus } : undefined;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop">
        {hero.src ? (
          <img
            className="hero__image"
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            style={imageStyle}
            loading="eager"
            decoding="async"
          />
        ) : (
          // PLACEHOLDER: set `hero` in src/config/images.ts.
          <span className="hero__placeholder-label">[HERO IMAGE PLACEHOLDER]</span>
        )}
        {/* Brand-brown tint (tokens: --overlay-brand-*) keeps the headline legible and on-palette. */}
        <div className="hero__scrim" />
      </div>

      <div className="hero__content">
        <h1 id="hero-title" className="hero__title">
          {HOME_HERO.title}
        </h1>
        <p className="hero__summary">{HOME_HERO.summary}</p>
      </div>
    </section>
  );
}
