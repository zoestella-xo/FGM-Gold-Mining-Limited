import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ContactInvitation } from '../components/ContactInvitation';
import { Beliefs } from '../components/about/Beliefs';
import { Foundation } from '../components/about/Foundation';

/** Figma frame: "About" (1440×2235). */
export function About() {
  useDocumentTitle('About');

  return (
    <div className="page">
      <Foundation />
      <Beliefs />
      <ContactInvitation />
    </div>
  );
}
