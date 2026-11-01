import { CONTACT_INVITATION_TITLE } from '../data/content';
import { Button } from './Button';
import './ContactInvitation.css';

interface ContactInvitationProps {
  /** Optional small label above the title (shown on Home: "START A CONVERSATION"). */
  readonly eyebrow?: string;
}

/** Beige call-to-action band that closes most pages: title on the left, button on the right. */
export function ContactInvitation({ eyebrow }: ContactInvitationProps) {
  return (
    <section className="contact-invitation" aria-labelledby="contact-invitation-title">
      <div className="container contact-invitation__inner">
        <div className="contact-invitation__text">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 id="contact-invitation-title" className="contact-invitation__title">
            {CONTACT_INVITATION_TITLE}
          </h2>
        </div>
        <Button to="/contact" label="Contact us" />
      </div>
    </section>
  );
}
