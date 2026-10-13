import React from 'react';
import { RotateCcw, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Track Finish Line Kerb Motif */}
      <div className="kerb-strip" />

      <div className="container footer-container">
        {/* Top Footer Tier */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-dot" />
            <span className="footer-name">{personal.fullName}</span>
            <span className="footer-tagline">// EVERY LAP IS A LESSON. EVERY PROJECT IS PROGRESS.</span>
          </div>

          <div className="footer-actions">
            <button
              type="button"
              className="footer-btn"
              onClick={onReplayIntro}
              aria-label="Replay Cinematic Start Sequence"
            >
              <RotateCcw size={13} />
              <span>REPLAY CINEMATIC INTRO</span>
            </button>

            <button
              type="button"
              className="footer-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <ArrowUp size={13} />
              <span>TOP OF LAP</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="track-divider" />

        {/* Bottom Footer Tier */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {currentYear} {personal.fullName}. First-Year B.Tech Student, {personal.university}, {personal.country}.
          </p>

          <div className="footer-telemetry-meta">
            <span>{personal.university.toUpperCase()}</span>
            <span className="meta-sep">/</span>
            <span>TEAM: {personal.teamName.toUpperCase()}</span>
            <span className="meta-sep">/</span>
            <span>{personal.location.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: #060709;
          border-top: 1px solid var(--border-subtle);
          position: relative;
        }

        .footer-container {
          padding-top: clamp(2rem, 4vw, 3rem);
          padding-bottom: clamp(2rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-top-row {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          justify-content: space-between;
          align-items: flex-start;
        }

        @media (min-width: 768px) {
          .footer-top-row {
            flex-direction: row;
            align-items: center;
          }
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--text-primary);
          text-transform: uppercase;
          flex-wrap: wrap;
        }

        .footer-dot {
          width: 7px;
          height: 7px;
          background: var(--f1-red);
          border-radius: 1px;
        }

        .footer-name {
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .footer-tagline {
          color: var(--text-muted);
          font-size: 0.6875rem;
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-secondary);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-xs);
          transition: all var(--transition-fast);
        }

        .footer-btn:hover {
          color: #ffffff;
          border-color: var(--border-bright);
        }

        .footer-bottom-row {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          justify-content: space-between;
          align-items: flex-start;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
        }

        @media (min-width: 768px) {
          .footer-bottom-row {
            flex-direction: row;
            align-items: center;
          }
        }

        .copyright-text {
          font-size: 0.6875rem;
          color: var(--text-muted);
        }

        .footer-telemetry-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.625rem;
        }

        .meta-sep {
          color: var(--border-medium);
        }
      `}</style>
    </footer>
  );
};
