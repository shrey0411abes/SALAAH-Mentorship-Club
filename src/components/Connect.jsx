import { socials, siteConfig } from '../data/content';
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapLocationDot,
  FaArrowUpRightFromSquare,
  FaComments,
  FaClipboardList,
} from 'react-icons/fa6';
import './Connect.css';

const socialIconMap = {
  FaLinkedin: FaLinkedinIn,
  FaInstagram: FaInstagram,
  FaWhatsapp: FaWhatsapp,
  FaEnvelope: FaEnvelope,
};

export function Connect() {
  return (
    <section id="connect" className="connect-section">
      <div className="container">
        {/* Section Header */}
        <div className="connect-header text-center">
          <div className="section-badge">
            <FaComments />
            <span>Connect & Participate</span>
          </div>
          <h2 className="section-title">Connect with Salaah</h2>
          <p className="section-subtitle mx-auto">
            Reach out through our student channels or register directly through our official participation form.
          </p>
        </div>

        {/* 4 Social Channels Grid */}
        <div className="socials-grid">
          {socials.map((social) => {
            const Icon = socialIconMap[social.icon] || FaEnvelope;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card paper-card"
              >
                <div className="social-icon-box">
                  <Icon className="social-icon" />
                </div>
                <div className="social-details">
                  <h3 className="social-name">{social.name}</h3>
                  <span className="social-handle">{social.handle}</span>
                  <p className="social-desc">{social.description}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Connect Action Grid: Official Form Link Card + Campus Details */}
        <div className="connect-interactive-grid">
          {/* Official Registration / Mentor Request Card */}
          <div className="join-hub-wrapper paper-card">
            <div className="hub-head">
              <div className="hub-icon-box">
                <FaClipboardList className="hub-icon" />
              </div>
              <div>
                <h3 className="form-title">Join Salaah / Request Mentorship</h3>
                <p className="form-subtitle">
                  Official Registration & Peer Pairing Portal
                </p>
              </div>
            </div>

            <p className="hub-desc">
              All member inductions, department preferences, and mentor pairings for ABES Engineering College students are coordinated through our verified submission portal.
            </p>

            <div className="hub-action-box">
              <a
                href={siteConfig.SUBMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hub-btn"
              >
                <span>Open Registration Form</span>
                <FaArrowUpRightFromSquare className="btn-icon" />
              </a>
              <span className="hub-notice">
                Opens in a new tab • Requires college or personal Google account
              </span>
            </div>
          </div>

          {/* Campus Location & Info Strip */}
          <div className="campus-info-card paper-card">
            <div className="campus-head">
              <div className="campus-icon-box">
                <FaMapLocationDot />
              </div>
              <div>
                <h3 className="campus-title">Campus Headquarters</h3>
                <span className="campus-sub">ABES Engineering College</span>
              </div>
            </div>

            {/* Campus Photo Preview with abes.ac.in link */}
            <div className="campus-preview-card">
              <img
                src={siteConfig.campusImageUrl}
                alt="ABES Engineering College Campus, Ghaziabad"
                className="campus-preview-img"
                loading="lazy"
                width="400"
                height="160"
              />
              <a
                href={siteConfig.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="campus-preview-link"
              >
                <span>Visit abes.ac.in</span>
                <FaArrowUpRightFromSquare className="link-ext-icon" />
              </a>
            </div>

            <p className="campus-desc">
              Student mentorship coordination and domain meetups take place across the central academic blocks and seminar facilities.
            </p>

            <div className="campus-details-list">
              <div className="campus-detail-item">
                <strong>Address:</strong>
                <span>{siteConfig.address}</span>
              </div>

              <div className="campus-detail-item">
                <strong>Official Email:</strong>
                <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
              </div>

              <div className="campus-detail-item">
                <strong>Affiliation:</strong>
                <span>ABES Engineering College (AKTU Code 032)</span>
              </div>
            </div>

            <div className="campus-badge-box">
              <span className="campus-pill">AKTU Code: 032</span>
              <span className="campus-pill">NAAC Accredited</span>
              <span className="campus-pill">Estd. 2000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
