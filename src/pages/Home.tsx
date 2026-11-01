import { COMPANY } from '../data/content';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ContactInvitation } from '../components/ContactInvitation';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { Hero } from '../components/home/Hero';
import { PhotoStrip } from '../components/home/PhotoStrip';

/** Figma frame: "Home" (1440×2938). */
export function Home() {
  useDocumentTitle();

  return (
    <div className="page page--white">
      <Hero />
      <CompanyIntro heading={COMPANY.name} ctaLabel="About FGM" ctaTo="/about" />
      <PhotoStrip />
      {/* The design repeats the company paragraph + "About FGM" link below the photos. */}
      <CompanyIntro ctaLabel="About FGM" ctaTo="/about" />
      <FeatureGrid />
      <ContactInvitation eyebrow="START A CONVERSATION" />
    </div>
  );
}
