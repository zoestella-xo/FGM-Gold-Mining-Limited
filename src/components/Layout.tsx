import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import './Layout.css';

/**
 * Scroll management on navigation:
 *  - "/collection#how-we-mine" scrolls to the element with that id,
 *  - any other route change resets to the top of the page.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/**
 * Shared page chrome: floating header (overlays the top of <main>),
 * routed page content, and the footer.
 */
export function Layout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
