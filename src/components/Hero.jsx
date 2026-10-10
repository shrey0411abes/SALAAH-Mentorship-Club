import { useState, useEffect, useRef } from 'react';
import { LogoMark } from './Logo';
import { heroContent, siteConfig, campusViews } from '../data/content';
import {
  FaArrowRight,
  FaUsers,
  FaGraduationCap,
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import './Hero.css';

export function Hero() {
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance campus views unless hovered or reduced motion requested
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveViewIndex((prev) => (prev + 1) % campusViews.length);
    }, 8000);

    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  return (
    <section
      id="hero"
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ABES Engineering College Dynamic Campus Background Stack */}
      <div className="hero-campus-backdrop" aria-hidden="true">
        {campusViews.map((view, idx) => (
          <img
            key={view.id}
            src={view.url}
            alt=""
            className={`campus-bg-img ${idx === activeViewIndex ? 'active' : ''}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : 'low'}
            decoding="async"
            width="1920"
            height="1080"
          />
        ))}
        <div className="hero-campus-overlay"></div>
      </div>

      {/* Soft animated background blobs (maroon and gold) */}
      <div className="hero-blob hero-blob-maroon" aria-hidden="true"></div>
      <div className="hero-blob hero-blob-gold" aria-hidden="true"></div>
      <div className="hero-pattern-overlay" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Institutional Heritage Badge */}
          <div className="hero-badge">
            <span className="badge-sparkle">✦</span>
            <span>{heroContent.badge}</span>
          </div>

          {/* Headline with 'सलाह' as a calligraphic accent word */}
          <h1 className="hero-title">
            {heroContent.headlinePrefix}{' '}
            <span className="hero-calligraphy-accent" title="सलाह (Salaah - Guidance & Wisdom)">
              {heroContent.headlineAccent}
            </span>{' '}
            {heroContent.headlineSuffix}
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            {heroContent.subtext}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a
              href={heroContent.primaryCta.href}
              target={heroContent.primaryCta.isExternal ? '_blank' : undefined}
              rel={heroContent.primaryCta.isExternal ? 'noopener noreferrer' : undefined}
              className="btn btn-primary hero-btn-main"
            >
              <span>{heroContent.primaryCta.label}</span>
              <FaArrowRight className="btn-icon" />
            </a>
            <a href={heroContent.secondaryCta.href} className="btn btn-secondary hero-btn-alt">
              <span>{heroContent.secondaryCta.label}</span>
            </a>
          </div>

          {/* Mini Highlights Pill Strip */}
          <div className="hero-highlights">
            {heroContent.highlights.map((item, idx) => (
              <div key={idx} className="hero-highlight-item">
                <span className="highlight-value">{item.value}</span>
                <span className="highlight-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large Logo Mark with gentle float animation & golden aura */}
        <div className="hero-visual">
          <div className="visual-halo" aria-hidden="true"></div>
          
          <div className="shield-float-card float-animated">
            <LogoMark width="260" height="340" className="hero-shield-svg" />

            {/* Floating Accreditations / Badges */}
            <div className="floating-badge badge-top-right">
              <FaGraduationCap className="badge-icon-gold" />
              <div>
                <strong>ABES EC</strong>
                <small>Estd. 2000</small>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <FaUsers className="badge-icon-maroon" />
              <div>
                <strong>Peer to Peer</strong>
                <small>Direct Mentorship</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentic ABES Engineering College Dynamic Campus Strip */}
      <div className="container hero-campus-strip-container">
        <div className="hero-campus-bar">
          <div className="campus-bar-meta">
            <FaLocationDot className="campus-bar-pin" aria-hidden="true" />
            <span className="campus-bar-label">
              ABES Engineering College <span className="campus-bar-hide-sm">• NH-09, Ghaziabad</span>
            </span>
          </div>

          <div className="campus-bar-controls" role="tablist" aria-label="Campus backdrop views">
            {campusViews.map((view, idx) => (
              <button
                key={view.id}
                type="button"
                role="tab"
                id={`tab-${view.id}`}
                aria-selected={idx === activeViewIndex}
                className={`campus-switch-pill ${idx === activeViewIndex ? 'active' : ''}`}
                onClick={() => setActiveViewIndex(idx)}
              >
                {view.name}
              </button>
            ))}
          </div>

          <a
            href={siteConfig.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="campus-bar-link"
            title="Visit official ABES Engineering College website (abes.ac.in)"
          >
            <span>abes.ac.in</span>
            <FaArrowUpRightFromSquare className="campus-bar-ext-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
