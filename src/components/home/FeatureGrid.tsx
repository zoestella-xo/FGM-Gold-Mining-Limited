import { LICENCES, MINING_SEQUENCE } from '../../data/content';
import { Button } from '../Button';
import './home.css';

/**
 * Two side-by-side feature cards: the portfolio (beige) and how we mine (brown).
 * The licence count is derived from the register so the two never drift apart.
 */
export function FeatureGrid() {
  const licenceCount = String(LICENCES.length).padStart(2, '0');

  return (
    <section className="feature-grid" aria-label="Portfolio and operating approach">
      <div className="container feature-grid__inner">
        <article className="feature feature--portfolio">
          <p className="feature__count" aria-hidden="true">
            {licenceCount}
          </p>
          <h2 className="feature__heading">
            One portfolio.
            <br />
            Five licences.
          </h2>
          <p className="feature__description">
            Explore our collection of exploration and mining assets. Licence names, locations and asset-level details
            are awaiting confirmation.
          </p>
          <Button to="/collection" label="View collection" />
        </article>

        <article className="feature feature--operations">
          <h2 className="feature__heading feature__heading--large">How We Mine</h2>
          <p className="feature__description">
            Six stages. Each one has a gate, and no stage starts before the previous one clears it.
          </p>
          <p className="feature__sequence">{MINING_SEQUENCE}</p>
          <Button to="/collection#how-we-mine" label="Our approach" />
        </article>
      </div>
    </section>
  );
}
