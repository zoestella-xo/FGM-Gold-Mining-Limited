import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageIntro } from '../components/PageIntro';
import { ContactDetails } from '../components/contact/ContactDetails';
import { EnquiryForm } from '../components/contact/EnquiryForm';
import '../components/contact/contact.css';

/** Figma frame: "Contact" (1440×1508). */
export function Contact() {
  useDocumentTitle('Contact us');

  return (
    <div className="page">
      <PageIntro title="Let's talk, clearly." />
      <section className="contact-layout" aria-label="Contact and enquiry">
        <div className="container contact-layout__inner">
          <ContactDetails />
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
