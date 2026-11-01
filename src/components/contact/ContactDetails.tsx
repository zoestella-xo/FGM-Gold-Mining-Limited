import { CONTACT_DETAILS } from '../../data/content';
import './contact.css';

/** Left column of the Contact page: head office address and direct contact lines. */
export function ContactDetails() {
  return (
    <div className="contact-details">
      <section className="contact-details__block" aria-label="Head office">
        <address className="contact-details__address">
          {CONTACT_DETAILS.addressLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
      </section>

      <section className="contact-details__block" aria-label="Direct contact">
        {/* PLACEHOLDER: swap for <a href="mailto:…"> / <a href="tel:…"> once real values exist. */}
        <p className="contact-details__line">{CONTACT_DETAILS.email}</p>
        <p className="contact-details__line">{CONTACT_DETAILS.telephone}</p>
      </section>
    </div>
  );
}
