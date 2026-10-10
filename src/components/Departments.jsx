import { departments } from '../data/content';
import {
  FaCode,
  FaPalette,
  FaPenNib,
  FaBullhorn,
  FaListCheck,
  FaShareNodes,
  FaArrowRight,
  FaLayerGroup,
} from 'react-icons/fa6';
import './Departments.css';

// Map icon strings to icon components
const iconMap = {
  FaCode: FaCode,
  FaPalette: FaPalette,
  FaPenNib: FaPenNib,
  FaBullhorn: FaBullhorn,
  FaTasks: FaListCheck,
  FaShareAlt: FaShareNodes,
};

export function Departments() {
  return (
    <section id="departments" className="departments-section">
      <div className="container">
        {/* Section Header */}
        <div className="departments-header text-center">
          <div className="section-badge">
            <FaLayerGroup />
            <span>Specialized Wings</span>
          </div>
          <h2 className="section-title">Departments of Salaah</h2>
          <p className="section-subtitle mx-auto">
            Six focused, inter-disciplinary teams working in tandem to empower students across engineering domains, creative media, outreach, and leadership.
          </p>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="dept-grid">
          {departments.map((dept) => {
            const IconComponent = iconMap[dept.iconName] || FaCode;
            return (
              <div key={dept.id} className="dept-card paper-card">
                <div className="dept-card-top">
                  <div
                    className="dept-icon-wrapper"
                    style={{
                      backgroundColor: 'rgba(139, 26, 26, 0.09)',
                      color: 'var(--maroon-dark)',
                    }}
                  >
                    <IconComponent className="dept-icon" />
                  </div>
                  <span className="dept-tag">{dept.leadTag}</span>
                </div>

                <h3 className="dept-title">{dept.name}</h3>
                <p className="dept-desc">{dept.description}</p>

                <div className="dept-initiatives">
                  <span className="initiatives-label">Key Initiatives:</span>
                  <ul className="initiatives-list">
                    {dept.initiatives.map((item, idx) => (
                      <li key={idx} className="initiative-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dept-card-footer">
                  <a href="#connect" className="dept-join-link">
                    <span>Join this Wing</span>
                    <FaArrowRight className="link-arrow" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Departments;
