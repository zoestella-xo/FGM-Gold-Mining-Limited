import { BELIEFS } from '../../data/content';
import './about.css';

/** Dark "What we believe" band: four principles, each with a one-line explanation. */
export function Beliefs() {
  return (
    <section className="beliefs" aria-labelledby="beliefs-title">
      <div className="container beliefs__inner">
        <div className="beliefs__header">
          <h2 id="beliefs-title" className="beliefs__heading">
            What we believe
          </h2>
        </div>

        <ul className="beliefs__list">
          {BELIEFS.map((belief) => (
            <li key={belief.principle} className="belief">
              <h3 className="belief__principle">{belief.principle}</h3>
              <p className="belief__explanation">{belief.explanation}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
