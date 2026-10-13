import React from 'react';
import { Terminal, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { aboutNarrative, philosophies, personal } = portfolioData;

  return (
    <section id="about" className="section-padding about-section" aria-label="About the Engineer">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <div className="sector-tag">SECTOR 01 // PERSONAL STORY & PHILOSOPHY</div>
          <h2 className="section-title">The Person Behind the Projects</h2>
          <p className="section-subtitle">
            First-year engineering undergraduate at JECRC University, India. Exploring computer science foundations, campus problem-solving with Team Cosmic Minds, and the discipline of incremental progress.
          </p>
        </header>

        {/* Narrative Grid */}
        <div className="about-editorial-grid">
          {/* Main Narrative Column */}
          <div className="about-narrative-col">
            <div className="narrative-block">
              <div className="block-meta">
                <span className="block-index">01.01</span>
                <span className="block-title">ORIGIN & CURIOSITY</span>
              </div>
              <p className="narrative-lead">{aboutNarrative.origin}</p>
            </div>

            <div className="narrative-block">
              <div className="block-meta">
                <span className="block-index">01.02</span>
                <span className="block-title">CURRENT EXPLORATION & LAB WORK</span>
              </div>
              <p>{aboutNarrative.focus}</p>
            </div>

            <div className="narrative-block">
              <div className="block-meta">
                <span className="block-index">01.03</span>
                <span className="block-title">OUTLOOK & AMBITION</span>
              </div>
              <p>{aboutNarrative.vision}</p>
            </div>
          </div>

          {/* Core Principles & Telemetry Side Column */}
          <div className="about-principles-col">
            <div className="principles-box tech-card">
              <div className="principles-header">
                <Target size={15} className="principles-icon" />
                <span className="principles-title">ENGINEERING PRINCIPLES</span>
              </div>

              <div className="principles-list">
                {philosophies.map((item, idx) => (
                  <div key={idx} className="principle-item">
                    <div className="principle-metric">{item.metric}</div>
                    <h3 className="principle-label">{item.label}</h3>
                    <p className="principle-desc">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Student Reality Statement Box */}
              <div className="academic-reality-box">
                <div className="reality-header">
                  <Terminal size={13} className="reality-icon" />
                  <span>TRANSPARENCY STATEMENT</span>
                </div>
                <p className="reality-text">
                  As a first-year undergraduate, I prioritize deep understanding over inflated metrics.
                  I do not claim decades of expertise; I claim curiosity, discipline, and verifiable daily commits.
                </p>
                <div className="reality-footer">
                  <span>CAMPUS STATUS: {personal.role}</span>
                </div>
              </div>

              <div className="kerb-strip" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-deep);
          position: relative;
        }

        .about-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4.5rem);
        }

        @media (min-width: 960px) {
          .about-editorial-grid {
            grid-template-columns: 1.25fr 0.95fr;
          }
        }

        .about-narrative-col {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .narrative-block {
          position: relative;
          padding-left: clamp(1rem, 2.5vw, 2rem);
          border-left: 2px solid var(--border-subtle);
          transition: border-color var(--transition-fast);
        }

        .narrative-block:hover {
          border-left-color: var(--f1-red);
        }

        .block-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.65rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          letter-spacing: 0.1em;
        }

        .block-index {
          color: var(--f1-red);
          font-weight: 700;
        }

        .block-title {
          color: var(--text-muted);
        }

        .narrative-lead {
          font-size: clamp(1.05rem, 1.8vw, 1.2rem);
          line-height: 1.65;
          color: var(--text-primary);
        }

        .narrative-block p {
          line-height: 1.7;
          font-size: 1rem;
        }

        /* Principles Column */
        .principles-box {
          padding: 1.75rem clamp(1.25rem, 3vw, 2rem);
          overflow: hidden;
        }

        .principles-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .principles-icon {
          color: var(--f1-red);
        }

        .principles-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .principles-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .principle-item {
          position: relative;
        }

        .principle-metric {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--f1-red);
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }

        .principle-label {
          font-size: 1.05rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .principle-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Reality Box */
        .academic-reality-box {
          background: var(--bg-deep);
          border: 1px solid var(--border-subtle);
          padding: 1rem 1.2rem;
          border-radius: var(--radius-xs);
          margin-bottom: 1.5rem;
        }

        .reality-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--telemetry-cyan);
          margin-bottom: 0.5rem;
        }

        .reality-icon {
          color: var(--telemetry-cyan);
        }

        .reality-text {
          font-size: 0.8125rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .reality-footer {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-subtle);
          padding-top: 0.5rem;
        }
      `}</style>
    </section>
  );
};
