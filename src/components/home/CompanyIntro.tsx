import { COMPANY } from '../../data/content';
import { Button } from '../Button';
import './home.css';

interface CompanyIntroProps {
  /** Optional serif heading above the paragraph (first intro only). */
  readonly heading?: string;
  readonly ctaLabel: string;
  readonly ctaTo: string;
}

/** Centred company paragraph with a right-aligned call-to-action. Used twice on Home. */
export function CompanyIntro({ heading, ctaLabel, ctaTo }: CompanyIntroProps) {
  return (
    <section className={`company-intro${heading ? ' company-intro--titled' : ''}`}>
      <div className="container">
        {heading ? <h2 className="company-intro__title">{heading}</h2> : null}
        <p className="company-intro__body">{COMPANY.intro}</p>
        <div className="company-intro__actions">
          <Button to={ctaTo} label={ctaLabel} />
        </div>
      </div>
    </section>
  );
}
