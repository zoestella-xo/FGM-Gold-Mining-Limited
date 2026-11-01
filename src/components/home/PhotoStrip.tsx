import { images } from '../../config/images';
import { Button } from '../Button';
import { MediaFrame } from '../MediaFrame';
import './home.css';

/** Three portrait photos (400×518 in the design) with a "View more" link to the Gallery. */
export function PhotoStrip() {
  return (
    <section className="photo-strip" aria-label="Site photography">
      <div className="container">
        <ul className="photo-strip__grid">
          {images.homeGallery.map((asset, index) => (
            <li key={index}>
              <MediaFrame asset={asset} className="photo-strip__frame" />
            </li>
          ))}
        </ul>
        <div className="photo-strip__actions">
          <Button to="/gallery" label="View more" />
        </div>
      </div>
    </section>
  );
}
