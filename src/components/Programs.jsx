import { programs, siteConfig } from '../data/content';
import { FaCalendarDays, FaCompass, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './Programs.css';

export function Programs() {
  return (
    <section id="programs" className="programs-section">
      <div className="container">
        {/* Section Header */}
        <div className="programs-header text-center">
          <div className="section-badge">
            <FaCalendarDays />
            <span>Community Initiatives</span>
          </div>
          <h2 className="section-title">Programs & Learning Tracks</h2>
          <p className="section-subtitle mx-auto">
            Structured initiatives designed to support students with peer mentoring, domain fundamentals, and collaborative team projects.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {programs.map((prog) => (
            <div key={prog.id} className="program-card paper-card">
              <div className="program-header">
                <div className="program-tags">
                  <span className="category-tag">{prog.category}</span>
                  <span className="badge-tag">{prog.tag}</span>
                </div>
              </div>

              <h3 className="program-title">{prog.title}</h3>
              <p className="program-desc">{prog.description}</p>

              <div className="program-footer">
                <div className="program-metric">
                  <FaCompass className="metric-icon" />
                  <span>{prog.metrics}</span>
                </div>
                <a
                  href={siteConfig.SUBMISSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary program-btn"
                >
                  <span>Participate</span>
                  <FaArrowUpRightFromSquare className="btn-external-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
