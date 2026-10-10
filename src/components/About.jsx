import { useState, useEffect, useRef, useCallback } from 'react';
import { aboutContent } from '../data/content';
import { FaCompass, FaLightbulb, FaShieldHalved } from 'react-icons/fa6';
import './About.css';

export function About() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    departments: 0,
    years: 0,
    pillars: 0,
    community: 0,
  });

  const statsRef = useRef(null);

  const animateCountUp = useCallback(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts({
        departments: 6,
        years: 4,
        pillars: 3,
        community: 1,
      });
      return;
    }

    const duration = 1200; // ms
    const startTime = performance.now();

    const targets = {
      departments: 6,
      years: 4,
      pillars: 3,
      community: 1,
    };

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        departments: Math.floor(easeProgress * targets.departments),
        years: Math.floor(easeProgress * targets.years),
        pillars: Math.floor(easeProgress * targets.pillars),
        community: Math.floor(easeProgress * targets.community),
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCounts(targets);
      }
    };

    requestAnimationFrame(step);
  }, []);

  // Trigger count-up animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCountUp();
        }
      },
      { threshold: 0.25 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateCountUp]);

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="about-header text-center">
          <div className="section-badge">
            <FaShieldHalved />
            <span>Heritage & Purpose</span>
          </div>
          <h2 className="section-title">{aboutContent.sectionTitle}</h2>
          <p className="section-subtitle mx-auto">
            {aboutContent.sectionSubtitle}
          </p>
        </div>

        {/* Narrative Box */}
        <div className="about-story-card paper-card">
          <div className="story-quote-mark" aria-hidden="true">“</div>
          <p className="about-story-text">
            {aboutContent.story}
          </p>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="mission-vision-grid">
          <div className="mv-card paper-card mission-card">
            <div className="mv-icon-box">
              <FaCompass className="mv-icon" />
            </div>
            <h3 className="mv-title">{aboutContent.mission.title}</h3>
            <p className="mv-description">{aboutContent.mission.description}</p>
          </div>

          <div className="mv-card paper-card vision-card">
            <div className="mv-icon-box gold-icon-box">
              <FaLightbulb className="mv-icon" />
            </div>
            <h3 className="mv-title">{aboutContent.vision.title}</h3>
            <p className="mv-description">{aboutContent.vision.description}</p>
          </div>
        </div>

        {/* Pillars Strip */}
        <div className="pillars-grid">
          {aboutContent.pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-item">
              <div className="pillar-num">0{idx + 1}</div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* 4 Count-up Stats Triggered on Scroll */}
        <div className="stats-container" ref={statsRef}>
          <div className="stats-inner">
            {aboutContent.stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className="stat-number">
                  {counts[stat.id] || 0}
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
                <p className="stat-desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
