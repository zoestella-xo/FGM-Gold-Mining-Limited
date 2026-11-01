import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { images } from '../../config/images';
import { Lightbox } from './Lightbox';
import './gallery.css';

/**
 * Masonry-style photo gallery.
 *
 * Photos in the set are a mix of tall phone shots and wide landscapes, so instead of
 * forcing one crop the grid uses CSS columns and lets every image keep its natural
 * proportions (nothing is cut off). Clicking a photo opens it in the lightbox.
 *
 * Add or reorder photos in `src/config/images.ts` → `gallery`.
 */
export function GalleryGrid() {
  const photos = images.gallery;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="gallery-grid" aria-label="Photo gallery">
      <div className="container gallery-grid__inner">
        <ul className="gallery-grid__list">
          {photos.map((photo, index) => (
            <li key={`${photo.src}-${index}`} className="gallery-grid__cell">
              <button
                type="button"
                className="gallery-tile"
                aria-label={`Enlarge photo: ${photo.alt}`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  className="gallery-tile__img"
                  src={photo.src}
                  alt=""
                  width={photo.width}
                  height={photo.height}
                  // The first row loads eagerly; the rest wait until scrolled near.
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="gallery-tile__icon" aria-hidden="true">
                  <Maximize2 size={18} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox photos={photos} index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </section>
  );
}
