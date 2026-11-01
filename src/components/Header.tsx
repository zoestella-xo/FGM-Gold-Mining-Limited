import { useEffect, useId, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PRIMARY_NAV } from '../data/content';
import { Logo } from './Logo';
import './Header.css';

/**
 * Floating white "pill" navigation that overlays the top of every page.
 *
 *  - Desktop: logo + inline links.
 *  - ≤ 860px: links collapse behind a menu button (closes on route change / Escape).
 *  - Current page is highlighted automatically via NavLink (`aria-current="page"`).
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuId = useId();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <div className="site-nav__bar">
          <Link to="/" className="site-nav__logo" aria-label="FGM Gold Mining Limited, home">
            <Logo variant="dark" size="nav" />
          </Link>

          <button
            type="button"
            className="site-nav__toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>

          <ul id={menuId} className={`site-nav__list${menuOpen ? ' is-open' : ''}`}>
            {PRIMARY_NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
