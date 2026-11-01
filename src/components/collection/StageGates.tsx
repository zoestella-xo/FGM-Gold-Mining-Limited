import { OPERATING_STAGES } from '../../data/content';
import './collection.css';

/**
 * "How We Mine": six gated stages in a two-column grid, closed by a principle line.
 * The section id lets Home's "Our approach" button deep-link here (/collection#how-we-mine).
 */
export function StageGates() {
  return (
    <section id="how-we-mine" className="stage-gates" aria-labelledby="stage-gates-title">
      <div className="container stage-gates__inner">
        <h2 id="stage-gates-title" className="stage-gates__heading">
          How We Mine
        </h2>

        <ol className="stage-gates__grid">
          {OPERATING_STAGES.map((stage) => (
            <li key={stage.number} className="stage">
              <span className="stage__number">{stage.number}</span>
              <div className="stage__details">
                <h3 className="stage__title">{stage.title}</h3>
                <p className="stage__description">{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="stage-gates__closure">Closure is part of the plan. Not an afterthought.</p>
      </div>
    </section>
  );
}
