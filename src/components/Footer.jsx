import { Logo } from './Logo';
import { footerLinks, socials, siteConfig } from '../data/content';
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from 'react-icons/fa6';
import './Footer.css';

const socialIconMap = {
  FaLinkedin: FaLinkedinIn,
  FaInstagram: FaInstagram,
  FaWhatsapp: FaWhatsapp,
  FaEnvelope: FaEnvelope,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info with Dark Tone Logo */}
          <div className="footer-brand-column">
            <div className="footer-logo-wrap">
              <Logo variant="full" tone="dark" height="56" />
            </div>
            <p className="footer-mission-text">
              The premier student mentorship community at ABES Engineering College, Ghaziabad. Fostering competence, ethical leadership, and peer support since Estd. 2000.
            </p>
            <div className="footer-social-icons">
              {socials.map((s) => {
                const Icon = socialIconMap[s.icon] || FaEnvelope;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={`Follow Salaah on ${s.name}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-column">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Department Wings */}
          <div className="footer-nav-column">
            <h4 className="footer-heading">Department Wings</h4>
            <ul className="footer-links-list">
              {footerLinks.departments.map((dept) => (
                <li key={dept.label}>
                  <a href={dept.href} className="footer-link">
                    {dept.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Legacy */}
          <div className="footer-legacy-column">
            <h4 className="footer-heading">ABES EC Affiliation</h4>
            <p className="footer-legacy-text">
              Dr. A.P.J. Abdul Kalam Technical University (AKTU) • College Code 032
            </p>
            <div className="footer-address">
              <span>{siteConfig.address}</span>
            </div>
            <button
              type="button"
              className="btn btn-secondary back-to-top-footer"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FaArrowUp />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Salaah – The Mentor Community, ABES Engineering College. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with <FaHeart className="heart-icon" /> by Salaah Tech & Design Wings
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
