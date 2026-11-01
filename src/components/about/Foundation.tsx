import { ABOUT_FOUNDATION } from '../../data/content';
import { images } from '../../config/images';
import { MediaFrame } from '../MediaFrame';
import './about.css';

/** About hero: company story + key facts on the left, portrait photo on the right. */
export function Foundation() {
  return (
    <section className="foundation" aria-labelledby="foundation-title">
      <div className="container foundation__inner">
        <div className="foundation__text">
          <h1 id="foundation-title" className="foundation__heading">
            {ABOUT_FOUNDATION.heading}
          </h1>
          <p className="foundation__description">{ABOUT_FOUNDATION.description}</p>

          {/* Semantic key/value list for the two headline facts. */}
          <dl className="foundation__facts">
            {ABOUT_FOUNDATION.facts.map((fact) => (
              <div key={fact.label} className="foundation__fact">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="foundation__fact-value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <MediaFrame asset={images.aboutFoundation} className="foundation__image" priority />
      </div>
    </section>
  );
}
