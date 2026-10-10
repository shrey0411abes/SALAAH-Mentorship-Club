import { useState, useEffect } from 'react';
import { Logo, LogoMark } from './Logo';
import { navLinks } from '../data/content';
import './Navbar.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Simple active link spy
      const sections = ['hero', 'about', 'departments', 'programs', 'connect'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo: Full on Desktop, Shield Mark on Mobile */}
        <a href="#hero" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="logo-desktop-wrap">
            <Logo variant="full" height="48" tone="light" />
          </div>
          <div className="logo-mobile-wrap">
            <LogoMark height="44" tone="light" />
            <div className="mobile-brand-text">
              <span className="mobile-brand-title">सलाह</span>
              <span className="mobile-brand-subtitle">ABES EC</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="navbar-actions">
          <a href="#connect" className="btn btn-primary nav-cta">
            Join Us
          </a>

          <button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span className="hamburger-line top-line"></span>
            <span className="hamburger-line mid-line"></span>
            <span className="hamburger-line bot-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="mobile-logo-group">
              <LogoMark height="38" tone="light" />
              <span className="mobile-logo-name">सलाह • The Mentor Community</span>
            </div>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <a href="#connect" className="btn btn-primary mobile-cta" onClick={closeMobileMenu}>
              Join the Community
            </a>
            <p className="mobile-footer-text">ABES Engineering College • Estd. 2000</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
