import { Image as ImageIcon } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { ImageAsset } from '../config/images';
import './MediaFrame.css';

interface MediaFrameProps {
  /** Slot from `src/config/images.ts`. An empty `src` renders the placeholder. */
  readonly asset: ImageAsset;
  /** Size the frame from the parent via className (height, aspect-ratio...). */
  readonly className?: string;
  /** Set on above-the-fold images to skip lazy loading. */
  readonly priority?: boolean;
}

/**
 * Fills its parent's box with either the configured image (object-fit: cover,
 * positioned on the asset's `focus` point) or the design's grey "[IMAGE PLACEHOLDER]" tile.
 */
export function MediaFrame({ asset, className, priority = false }: MediaFrameProps) {
  const classes = ['media-frame', className].filter(Boolean).join(' ');

  if (asset.src) {
    const style: CSSProperties | undefined = asset.focus ? { objectPosition: asset.focus } : undefined;
    return (
      <div className={classes}>
        <img
          className="media-frame__img"
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          style={style}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={`${classes} media-frame--empty`} role="img" aria-label={`Image placeholder: ${asset.alt}`}>
      <ImageIcon size={30} strokeWidth={1.25} aria-hidden="true" />
      <span className="media-frame__label">[IMAGE PLACEHOLDER]</span>
    </div>
  );
}
