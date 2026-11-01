import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ContactInvitation } from '../components/ContactInvitation';
import { PageIntro } from '../components/PageIntro';
import { LicenceRegister } from '../components/collection/LicenceRegister';
import { StageGates } from '../components/collection/StageGates';

/** Figma frame: "Collection" (1440×2532). */
export function Collection() {
  useDocumentTitle('Collection');

  return (
    <div className="page">
      <PageIntro
        title="Grounded in geology."
        summary="Five exploration and mining licences. One disciplined approach to building a portfolio of [open pit / underground] gold assets."
      />
      <LicenceRegister />
      <StageGates />
      <ContactInvitation />
    </div>
  );
}
