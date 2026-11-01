import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ImageAsset } from '../../config/images';
import './gallery.css';

interface LightboxProps {
  readonly photos: readonly ImageAsset[];
  /** Index of the photo being shown, or null when closed. */
  readonly index: number | null;
  readonly onClose: () => void;
  readonly onNavigate: (index: number) => void;
}

/**
 * Full-screen photo viewer built on the native <dialog> element, which gives us
 * a focus trap, a backdrop and Escape-to-close for free.
 * Extra: ← / → keys and on-screen arrows step through the set; clicking the backdrop closes.
 */
export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null;
  const count = photos.length;

  // Keep the native dialog's open state in sync with `index`.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // Arrow-key navigation while open.
  useEffect(() => {
    if (index === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') onNavigate((index + 1) % count);
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + count) % count);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, count, onNavigate]);

  const photo = index !== null ? photos[index] : undefined;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Photo viewer"
      onClose={onClose}
      onClick={(event) => {
        // A click on the dialog box itself (not its children) is a backdrop click.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {photo && index !== null ? (
        <figure className="lightbox__figure">
          <img className="lightbox__image" src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
          <figcaption className="lightbox__caption">
            <span>{photo.alt}</span>
            <span className="lightbox__count">
              {index + 1} / {count}
            </span>
          </figcaption>
        </figure>
      ) : null}

      <button type="button" className="lightbox__btn lightbox__btn--close" aria-label="Close photo viewer" onClick={onClose}>
        <X size={22} aria-hidden="true" />
      </button>
      {index !== null && count > 1 ? (
        <>
          <button
            type="button"
            className="lightbox__btn lightbox__btn--prev"
            aria-label="Previous photo"
            onClick={() => onNavigate((index - 1 + count) % count)}
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__btn--next"
            aria-label="Next photo"
            onClick={() => onNavigate((index + 1) % count)}
          >
            <ChevronRight size={26} aria-hidden="true" />
          </button>
        </>
      ) : null}
    </dialog>
  );
}
