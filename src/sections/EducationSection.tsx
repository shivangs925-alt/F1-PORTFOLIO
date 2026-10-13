import React from 'react';
import { GraduationCap, BookOpen, FlaskConical, Award, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education, personal } = portfolioData;

  return (
    <section id="education" className="section-padding education-section" aria-label="Academic Records & Education">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <div className="sector-tag">SECTOR 02 // ACADEMIC RECORD</div>
          <h2 className="section-title">Academic Foundations</h2>
          <p className="section-subtitle">
            Formal university curriculum, theoretical computer science coursework, and hands-on laboratory engineering.
          </p>
        </header>

        {/* Education Editorial Layout */}
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card tech-card">
              {/* Institution Header Banner */}
              <div className="edu-banner">
                <div className="edu-title-col">
                  <div className="edu-icon-wrap">
                    <GraduationCap size={20} className="edu-icon" />
                  </div>
                  <div>
                    <h3 className="edu-institution">{edu.institution}</h3>
                    <div className="edu-degree">
                      {edu.degree} — {edu.branch}
                    </div>
                  </div>
                </div>

                <div className="edu-period-badge">
                  <span className="period-years">{edu.period}</span>
                  <span className="period-status">{edu.status}</span>
                </div>
              </div>

              {/* Core Focus Area */}
              <div className="edu-focus-box">
                <span className="focus-label">CURRENT ACADEMIC FOCUS:</span>
                <p className="focus-text">{edu.currentFocus}</p>
              </div>

              {/* Two-Column Coursework & Labs Breakdown */}
              <div className="edu-details-columns">
                {/* Column 1: Core Coursework */}
                <div className="edu-subcol">
                  <div className="subcol-header">
                    <BookOpen size={15} className="subcol-icon text-red" />
                    <h4>Core Syllabus & Theory</h4>
                  </div>
                  <ul className="edu-list">
                    {edu.keyCoursework.map((course, cIdx) => (
                      <li key={cIdx} className="edu-list-item">
                        <span className="course-code">MOD_{cIdx + 1}</span>
                        <span className="course-name">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Laboratories & Practicals */}
                <div className="edu-subcol">
                  <div className="subcol-header">
                    <FlaskConical size={15} className="subcol-icon text-cyan" />
                    <h4>Engineering Laboratories</h4>
                  </div>
                  <ul className="edu-list">
                    {edu.laboratories.map((lab, lIdx) => (
                      <li key={lIdx} className="edu-list-item">
                        <span className="course-code lab-code">LAB_{lIdx + 1}</span>
                        <span className="course-name">{lab}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Academic Activities / Honors */}
                  {edu.academicHonors && (
                    <div className="honors-sub-block">
                      <div className="subcol-header honors-header">
                        <Award size={14} className="subcol-icon text-amber" />
                        <h5>Campus Activities</h5>
                      </div>
                      <ul className="honors-list">
                        {edu.academicHonors.map((honor, hIdx) => (
                          <li key={hIdx} className="honor-item">
                            {honor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Academic Integrity Footnote */}
              {edu.note && (
                <div className="edu-integrity-note">
                  <ShieldAlert size={14} className="note-icon" />
                  <p>
                    <strong>Academic Verification Notice:</strong> {edu.note}{' '}
                    {personal.gpaOrStatusNotice && `(${personal.gpaOrStatusNotice})`}
                  </p>
                </div>
              )}

              <div className="kerb-strip" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background-color: var(--bg-surface);
          position: relative;
        }

        .education-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .education-card {
          padding: clamp(1.5rem, 3.5vw, 2.75rem);
          background: var(--bg-deep);
          border: 1px solid var(--border-medium);
        }

        .edu-banner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .edu-banner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .edu-title-col {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .edu-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-xs);
          background: var(--bg-elevated);
          border: 1px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .edu-icon {
          color: var(--f1-red);
        }

        .edu-institution {
          font-size: clamp(1.35rem, 2.5vw, 1.85rem);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
        }

        .edu-degree {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .edu-period-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        @media (min-width: 768px) {
          .edu-period-badge {
            align-items: flex-end;
          }
        }

        .period-years {
          color: var(--text-primary);
          font-weight: 700;
        }

        .period-status {
          color: var(--telemetry-green);
          background: rgba(0, 229, 153, 0.1);
          padding: 0.15rem 0.5rem;
          border-radius: 2px;
          border: 1px solid rgba(0, 229, 153, 0.25);
        }

        .edu-focus-box {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xs);
          margin-bottom: 2rem;
        }

        .focus-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.35rem;
        }

        .focus-text {
          font-size: 0.9375rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .edu-details-columns {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 800px) {
          .edu-details-columns {
            grid-template-columns: 1fr 1fr;
          }
        }

        .subcol-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .subcol-header h4 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }

        .text-red {
          color: var(--f1-red);
        }

        .text-cyan {
          color: var(--telemetry-cyan);
        }

        .text-amber {
          color: var(--telemetry-amber);
        }

        .edu-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .edu-list-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.55rem 0.85rem;
          border-radius: var(--radius-xs);
          transition: border-color var(--transition-fast);
        }

        .edu-list-item:hover {
          border-color: var(--border-bright);
        }

        .course-code {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--f1-red);
          background: var(--f1-red-dim);
          padding: 0.15rem 0.35rem;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .lab-code {
          color: var(--telemetry-cyan);
          background: var(--telemetry-cyan-dim);
        }

        .course-name {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .honors-sub-block {
          margin-top: 1.5rem;
        }

        .honors-header h5 {
          font-size: 0.875rem;
          text-transform: uppercase;
        }

        .honors-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .honor-item {
          font-size: 0.8125rem;
          color: var(--text-muted);
          position: relative;
          padding-left: 1rem;
        }

        .honor-item::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--telemetry-amber);
        }

        .edu-integrity-note {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          background: rgba(255, 159, 28, 0.05);
          border: 1px solid rgba(255, 159, 28, 0.2);
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .note-icon {
          color: var(--telemetry-amber);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .edu-integrity-note strong {
          color: var(--telemetry-amber);
        }
      `}</style>
    </section>
  );
};
