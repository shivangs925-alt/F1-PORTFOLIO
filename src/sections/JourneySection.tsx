import React from 'react';
import { Flag, CheckCircle, Navigation, Milestone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const { journey } = portfolioData;

  const getCategoryIcon = (category: string, isCurrent?: boolean) => {
    if (isCurrent) return <Navigation size={15} className="milestone-icon text-red" />;
    switch (category) {
      case 'Foundation':
        return <Flag size={15} className="milestone-icon text-muted" />;
      case 'Project Lap':
        return <CheckCircle size={15} className="milestone-icon text-green" />;
      case 'Hackathon & Build':
        return <Milestone size={15} className="milestone-icon text-amber" />;
      default:
        return <Navigation size={15} className="milestone-icon text-cyan" />;
    }
  };

  return (
    <section id="journey" className="section-padding journey-section" aria-label="Learning Progression Timeline">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <div className="sector-tag">SECTOR 05 // RACE PROGRESSION</div>
          <h2 className="section-title">The Engineering Arc</h2>
          <p className="section-subtitle">
            A chronological timeline documenting laboratory milestones, collaborative hackathons, and continuous technical improvement.
          </p>
        </header>

        {/* Vertical Sector Progression Track */}
        <div className="journey-track-container">
          <div className="track-central-spine" aria-hidden="true" />

          <div className="journey-milestones-list">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`milestone-row ${isEven ? 'row-left' : 'row-right'} ${
                    item.isCurrentLap ? 'row-current-lap' : ''
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div className="track-node">
                    <div className={`node-marker ${item.isCurrentLap ? 'marker-live' : ''}`}>
                      {getCategoryIcon(item.category, item.isCurrentLap)}
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="milestone-card tech-card">
                    <div className="milestone-header">
                      <div className="milestone-sector-meta">
                        <span className="milestone-sector">{item.sector}</span>
                        <span className="milestone-category-pill">{item.category}</span>
                      </div>
                      <time className="milestone-date">{item.date}</time>
                    </div>

                    <h3 className="milestone-title">{item.title}</h3>
                    <p className="milestone-summary">{item.summary}</p>

                    <div className="milestone-takeaway">
                      <span className="takeaway-label">ENGINEERING TAKEAWAY:</span>
                      <p className="takeaway-text">{item.takeaway}</p>
                    </div>

                    {item.isCurrentLap && (
                      <div className="current-lap-badge">
                        <span className="pulsing-red-dot" />
                        <span>CURRENT LAP IN PROGRESS // TARGET: SEMESTER EXCELLENCE</span>
                      </div>
                    )}

                    <div className="kerb-strip" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .journey-section {
          background-color: var(--bg-deep);
          position: relative;
        }

        .journey-track-container {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
        }

        /* Central Timeline Track Spine */
        .track-central-spine {
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 24px;
          width: 2px;
          background: linear-gradient(
            180deg,
            var(--f1-red) 0%,
            var(--border-medium) 40%,
            var(--border-subtle) 100%
          );
        }

        @media (min-width: 768px) {
          .track-central-spine {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .journey-milestones-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .milestone-row {
          display: flex;
          align-items: flex-start;
          position: relative;
          width: 100%;
        }

        @media (min-width: 768px) {
          .milestone-row.row-left {
            justify-content: flex-start;
          }

          .milestone-row.row-right {
            justify-content: flex-end;
          }
        }

        /* Track Node Marker */
        .track-node {
          position: absolute;
          left: 12px;
          top: 24px;
          z-index: 10;
        }

        @media (min-width: 768px) {
          .track-node {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .node-marker {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 2px solid var(--border-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        }

        .marker-live {
          border-color: var(--f1-red);
          background: #190909;
          box-shadow: 0 0 12px var(--f1-red);
        }

        .milestone-icon {
          flex-shrink: 0;
        }

        .text-red {
          color: var(--f1-red);
        }

        .text-green {
          color: var(--telemetry-green);
        }

        .text-amber {
          color: var(--telemetry-amber);
        }

        .text-cyan {
          color: var(--telemetry-cyan);
        }

        .text-muted {
          color: var(--text-muted);
        }

        /* Milestone Card */
        .milestone-card {
          width: calc(100% - 60px);
          margin-left: 60px;
          padding: 1.5rem clamp(1.2rem, 3vw, 1.75rem);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .milestone-card {
            width: 44%;
            margin-left: 0;
          }
        }

        .row-current-lap .milestone-card {
          border-color: rgba(225, 6, 0, 0.4);
          background: radial-gradient(circle at 100% 0%, rgba(225, 6, 0, 0.04) 0%, var(--bg-surface) 70%);
        }

        .milestone-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .milestone-sector-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .milestone-sector {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--f1-red);
          letter-spacing: 0.1em;
        }

        .milestone-category-pill {
          font-family: var(--font-mono);
          font-size: 0.5625rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.15rem 0.45rem;
          border-radius: 2px;
        }

        .milestone-date {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
        }

        .milestone-title {
          font-size: 1.15rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
        }

        .milestone-summary {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1rem;
        }

        .milestone-takeaway {
          background: var(--bg-deep);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 0.95rem;
          border-radius: var(--radius-xs);
          margin-bottom: 0.5rem;
        }

        .takeaway-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.5625rem;
          font-weight: 700;
          color: var(--telemetry-cyan);
          letter-spacing: 0.1em;
          margin-bottom: 0.2rem;
        }

        .takeaway-text {
          font-size: 0.8125rem;
          color: var(--text-primary);
          line-height: 1.45;
        }

        .current-lap-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--f1-red);
          letter-spacing: 0.08em;
        }

        .pulsing-red-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--f1-red);
          box-shadow: 0 0 6px var(--f1-red);
          animation: pulseRed 1s infinite alternate;
        }

        @keyframes pulseRed {
          from { opacity: 0.6; }
          to { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};
