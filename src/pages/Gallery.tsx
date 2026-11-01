import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ContactInvitation } from '../components/ContactInvitation';
import { PageIntro } from '../components/PageIntro';
import { GalleryGrid } from '../components/gallery/GalleryGrid';

/** Figma frame: "Gallery" (1440×1989). */
export function Gallery() {
  useDocumentTitle('Gallery');

  return (
    <div className="page">
      <PageIntro title="A closer look." />
      <GalleryGrid />
      <ContactInvitation />
    </div>
  );
}
