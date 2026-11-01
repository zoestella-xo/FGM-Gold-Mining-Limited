import { Link } from 'react-router-dom';
import { Copyright } from 'lucide-react';
import { COMPANY, CONTACT_DETAILS, FOOTER_NAV } from '../data/content';
import { Logo } from './Logo';
import './Footer.css';

/** Site footer: identity, directory, contact details and legal line. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__content">
          <section className="site-footer__identity" aria-label="Company">
            <Logo variant="light" size="footer" />
            <p className="site-footer__label">GOLD MINING LIMITED</p>
            <p className="site-footer__tagline">
              {COMPANY.tagline[0]}
              <br />
              {COMPANY.tagline[1]}
            </p>
          </section>

          <nav className="site-footer__directory" aria-label="Footer">
            <h2 className="site-footer__label">EXPLORE</h2>
            <ul>
              {FOOTER_NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="site-footer__contact" aria-label="Contact and headquarters">
            <h2 className="site-footer__label">CONTACT &amp; HEADQUARTERS</h2>
            {/* PLACEHOLDER: once real details exist, make these <a href="mailto:…"> / <a href="tel:…">. */}
            <p className="site-footer__contact-line">{CONTACT_DETAILS.email}</p>
            <p className="site-footer__contact-line">{CONTACT_DETAILS.telephone}</p>
            <address className="site-footer__address">
              {CONTACT_DETAILS.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </section>
        </div>

        <div className="site-footer__legal">
          <Copyright size={13} aria-hidden="true" />
          <p>{COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
