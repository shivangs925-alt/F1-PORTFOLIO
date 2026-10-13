import React from 'react';
import { ArrowDown, ChevronRight, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="hero-section" aria-label="Introduction & Overview">
      <div className="container hero-container">
        {/* Left Column: Editorial Headline & Credentials */}
        <div className="hero-content">
          <div className="hero-sector-badge">
            <span className="badge-dot" />
            <span>B.TECH STUDENT / JECRC UNIVERSITY / INDIA</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name-label">{personal.fullName}</span>
            <span className="hero-headline">{personal.headline}</span>
          </h1>

          <div className="hero-brand-statement-pill">
            <span className="brand-pill-dot" />
            <span>&ldquo;{personal.primaryTagline}&rdquo;</span>
          </div>

          <p className="hero-bio">
            I&apos;m Shivang, a first-year B.Tech student at JECRC University, exploring technology, problem-solving, and the process of turning ideas into practical solutions. I&apos;m building my foundation one concept and one project at a time.
          </p>

          {/* Quick Focus Tags */}
          <div className="hero-interests-list">
            <span className="interests-label">ACADEMIC CONTEXT:</span>
            <span className="interest-tag">Team: {personal.teamName}</span>
            <span className="interest-tag">EDP Activities</span>
            <span className="interest-tag">Computing Practice Labs</span>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary hero-btn"
              onClick={onExploreClick}
            >
              <span>EXPLORE MY PROJECTS</span>
              <ChevronRight size={15} />
            </button>

            <a
              href="#about"
              className="btn btn-secondary hero-btn"
            >
              <Compass size={15} />
              <span>ABOUT ME</span>
            </a>
          </div>
        </div>

        {/* Right Column: High-Precision Telemetry HUD Card & Monogram Frame */}
        <div className="hero-telemetry-col">
          <div className="telemetry-hud-card">
            <div className="hud-header">
              <div className="hud-title-wrap">
                <Compass size={14} className="hud-icon" />
                <span className="hud-title">COCKPIT TELEMETRY // ENG_SPEC</span>
              </div>
              <span className="hud-status-live">SYSTEM ACTIVE</span>
            </div>

            {/* Profile Frame / Monogram Visual */}
            <div className="profile-visual-container">
              {personal.profilePhoto ? (
                <img
                  src={personal.profilePhoto}
                  alt={`${personal.fullName} Profile`}
                  className="profile-real-img"
                />
              ) : (
                <div className="profile-engineered-monogram">
                  <div className="monogram-initials">
                    {personal.fullName
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 2)
                      .replace(/[^A-Za-z]/g, '') || 'ENG'}
                  </div>
                  <div className="monogram-caption">SHIVANG SHEKHAR // JECRC UNIVERSITY</div>
                  <div className="monogram-grid-accent" />
                </div>
              )}
              <div className="kerb-strip" />
            </div>

            {/* Telemetry Readout Grid */}
            <div className="hud-telemetry-grid">
              <div className="hud-cell">
                <span className="hud-cell-label">SECTOR 01: ACADEMIC STATUS</span>
                <span className="hud-cell-val">{personal.currentSemester}</span>
                <span className="hud-cell-sub">{personal.university}</span>
              </div>

              <div className="hud-cell">
                <span className="hud-cell-label">SECTOR 02: LOCATION</span>
                <span className="hud-cell-val">{personal.location}</span>
                <span className="hud-cell-sub">Rajasthan, {personal.country}</span>
              </div>

              <div className="hud-cell">
                <span className="hud-cell-label">SECTOR 03: TEAM INITIATIVE</span>
                <span className="hud-cell-val telemetry-green">{personal.teamName}</span>
                <span className="hud-cell-sub">EDP Ideation & Lab Work</span>
              </div>

              <div className="hud-cell">
                <span className="hud-cell-label">SECTOR 04: FOUNDATION</span>
                <span className="hud-cell-val">FIRST-YEAR B.TECH</span>
                <span className="hud-cell-sub">Zero Fabricated Claims</span>
              </div>
            </div>

            <div className="hud-footer-bar">
              <span className="hud-telemetry-code">{personal.telemetryCode}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Invitation Marker */}
      <div className="scroll-invitation">
        <a href="#about" className="scroll-link" aria-label="Scroll down to About section">
          <span className="scroll-label">SCROLL TO APEX</span>
          <ArrowDown size={14} className="scroll-arrow" />
        </a>
      </div>

      <style>{`
        .hero-section {
          min-height: calc(100vh - 100px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          padding: clamp(3rem, 6vw, 5.5rem) 0 2rem;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4rem);
          align-items: center;
        }

        @media (min-width: 980px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }

        .hero-sector-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--f1-red);
          background: rgba(225, 6, 0, 0.08);
          border: 1px solid rgba(225, 6, 0, 0.25);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-xs);
          margin-bottom: 1.25rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: var(--f1-red);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--f1-red);
        }

        .hero-title {
          margin-bottom: 1.5rem;
        }

        .hero-name-label {
          display: block;
          font-size: clamp(1.1rem, 2.2vw, 1.45rem);
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.08em;
          margin-bottom: 0.35rem;
          text-transform: uppercase;
        }

        .hero-headline {
          display: block;
          font-size: clamp(2.25rem, 5vw, 3.85rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: var(--text-primary);
        }

        .hero-brand-statement-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(225, 6, 0, 0.08);
          border: 1px solid rgba(225, 6, 0, 0.28);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--f1-red);
          font-weight: 600;
          letter-spacing: 0.08em;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
        }

        .brand-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--f1-red);
          box-shadow: 0 0 6px var(--f1-red);
        }

        .banner-segment {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .banner-tag {
          color: var(--text-muted);
          font-size: 0.6875rem;
        }

        .banner-val {
          color: var(--text-primary);
          font-weight: 600;
        }

        .banner-divider {
          color: var(--border-medium);
        }

        .hero-bio {
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 620px;
          margin-bottom: 1.5rem;
        }

        .hero-interests-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .interests-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          margin-right: 0.25rem;
        }

        .interest-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-xs);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 0.85rem 1.6rem;
          font-size: 0.8125rem;
        }

        /* Right Column: Telemetry HUD Card */
        .hero-telemetry-col {
          display: flex;
          justify-content: center;
        }

        .telemetry-hud-card {
          width: 100%;
          max-width: 480px;
          background: var(--bg-surface);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .hud-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: var(--bg-deep);
          border-bottom: 1px solid var(--border-subtle);
        }

        .hud-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hud-icon {
          color: var(--f1-red);
        }

        .hud-title {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .hud-status-live {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--telemetry-green);
          background: rgba(0, 229, 153, 0.1);
          padding: 0.2rem 0.45rem;
          border-radius: 2px;
        }

        .profile-visual-container {
          position: relative;
          background: #090b0e;
        }

        .profile-real-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .profile-engineered-monogram {
          height: 190px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 50% 50%, #15181f 0%, #0a0b0e 90%);
        }

        .monogram-initials {
          font-family: var(--font-display);
          font-size: 4.5rem;
          font-weight: 700;
          letter-spacing: -0.05em;
          color: rgba(244, 242, 237, 0.09);
          line-height: 1;
          user-select: none;
        }

        .monogram-caption {
          position: absolute;
          bottom: 12px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-dim);
          letter-spacing: 0.1em;
        }

        .hud-telemetry-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--border-subtle);
        }

        .hud-cell {
          background: var(--bg-surface);
          padding: 0.85rem 1rem;
        }

        .hud-cell-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.5625rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .hud-cell-val {
          display: block;
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .hud-cell-sub {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-dim);
          margin-top: 0.2rem;
        }

        .hud-footer-bar {
          padding: 0.6rem 1rem;
          background: var(--bg-deep);
          border-top: 1px solid var(--border-subtle);
          text-align: right;
        }

        .hud-telemetry-code {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-dim);
          letter-spacing: 0.08em;
        }

        /* Scroll Invitation */
        .scroll-invitation {
          margin-top: 2.5rem;
          display: flex;
          justify-content: center;
        }

        .scroll-link {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .scroll-link:hover {
          color: var(--f1-red);
        }

        .scroll-label {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .scroll-arrow {
          animation: arrowBounce 1.8s infinite ease-in-out;
        }

        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
};
