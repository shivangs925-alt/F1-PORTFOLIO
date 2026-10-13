import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from '../Icons/SocialIcons';
import type { ProjectEntry } from '../../types/portfolio';

interface ProjectModalProps {
  project: ProjectEntry | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="modal-top-bar">
          <div className="modal-sector-info">
            <span className="sector-tag">{project.sector}</span>
            <span className="status-badge">{project.status}</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project case study modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="modal-scrollable">
          <header className="modal-header">
            <h2 id="modal-project-title" className="modal-title">
              {project.title}
            </h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </header>

          {/* Project Visual / Diagram */}
          <div className="modal-visual-frame">
            <img
              src={project.image}
              alt={`Technical interface of ${project.title}`}
              className="modal-img"
              onError={(e) => {
                // Fallback gradient box if image fails
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
            <div className="visual-badge">
              <Cpu size={12} />
              <span>CASE STUDY TELEMETRY VIEW</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="modal-metrics-grid">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="metric-box">
                <span className="metric-lbl">{metric.label}</span>
                <span className="metric-val">{metric.value}</span>
              </div>
            ))}
          </div>

          {/* Case Study Details Grid */}
          <div className="modal-details-body">
            {/* The Engineering Problem */}
            <div className="detail-section">
              <div className="section-label-row">
                <AlertTriangle size={15} className="label-icon text-amber" />
                <h3>The Engineering Challenge</h3>
              </div>
              <p>{project.problem}</p>
            </div>

            {/* Proposed Solution */}
            <div className="detail-section">
              <div className="section-label-row">
                <CheckCircle2 size={15} className="label-icon text-green" />
                <h3>Technical Solution & Architecture</h3>
              </div>
              <p>{project.solution}</p>
            </div>

            {/* Architecture Points */}
            {project.architectureSummary && (
              <div className="detail-section">
                <div className="section-label-row">
                  <Layers size={15} className="label-icon text-cyan" />
                  <h3>Core Architecture Principles</h3>
                </div>
                <ul className="arch-list">
                  {project.architectureSummary.map((item, idx) => (
                    <li key={idx} className="arch-item">
                      <span className="bullet-pip" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* My Individual Contribution */}
            <div className="detail-section">
              <div className="section-label-row">
                <span className="label-num">01</span>
                <h3>My Individual Contribution</h3>
              </div>
              <p>{project.contribution}</p>
              <div className="team-meta">
                <span className="meta-label">COLLABORATION:</span>
                <span className="meta-value">{project.team}</span>
              </div>
            </div>

            {/* Challenges & What I Learned */}
            <div className="detail-section">
              <div className="section-label-row">
                <span className="label-num">02</span>
                <h3>Failure Modes & Lessons Learned</h3>
              </div>
              <p>{project.challengesLearned}</p>
            </div>

            {/* Technologies */}
            <div className="detail-section">
              <div className="section-label-row">
                <span className="label-num">03</span>
                <h3>Technologies & Stack</h3>
              </div>
              <div className="tech-tags-wrap">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="modal-bottom-bar">
          <div className="links-group">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={15} />
                <span>INSPECT CODE REPOSITORY</span>
              </a>
            )}

            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={15} />
                <span>LAUNCH LIVE DEMO</span>
              </a>
            )}
          </div>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={onClose}
          >
            CLOSE CASE STUDY [ESC]
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: var(--z-modal, 500);
          background: rgba(4, 5, 7, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          animation: modalFadeIn 200ms ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-window {
          background: var(--bg-surface, #121417);
          border: 1px solid var(--border-medium, #303642);
          border-radius: var(--radius-sm, 4px);
          width: 100%;
          max-width: 880px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);
          animation: modalSlideUp 250ms cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        @keyframes modalSlideUp {
          from { transform: translateY(20px) scale(0.98); }
          to { transform: translateY(0) scale(1); }
        }

        .modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--bg-deep);
        }

        .modal-sector-info {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .status-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
          background: rgba(0, 229, 153, 0.1);
          border: 1px solid rgba(0, 229, 153, 0.3);
          color: var(--telemetry-green, #00E599);
        }

        .modal-close-btn {
          color: var(--text-secondary);
          padding: 0.4rem;
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .modal-scrollable {
          padding: 1.75rem clamp(1.25rem, 3vw, 2.25rem);
          overflow-y: auto;
          flex: 1;
        }

        .modal-header {
          margin-bottom: 1.5rem;
        }

        .modal-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 0.4rem;
        }

        .modal-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .modal-visual-frame {
          position: relative;
          background: #000;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          overflow: hidden;
          margin-bottom: 1.5rem;
          max-height: 380px;
        }

        .modal-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: cover;
          display: block;
        }

        .visual-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(8, 9, 11, 0.85);
          backdrop-filter: blur(6px);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--telemetry-cyan);
        }

        .modal-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .metric-box {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-xs);
        }

        .metric-lbl {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .metric-val {
          display: block;
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-details-body {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-section {
          background: var(--bg-deep);
          border: 1px solid var(--border-subtle);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-xs);
        }

        .section-label-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }

        .section-label-row h3 {
          font-size: 1.05rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: var(--text-primary);
        }

        .label-icon {
          flex-shrink: 0;
        }

        .label-num {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--f1-red);
          background: var(--f1-red-dim);
          padding: 0.15rem 0.4rem;
          border-radius: 2px;
        }

        .text-amber {
          color: var(--telemetry-amber);
        }

        .text-green {
          color: var(--telemetry-green);
        }

        .text-cyan {
          color: var(--telemetry-cyan);
        }

        .detail-section p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.9375rem;
        }

        .arch-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .arch-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bullet-pip {
          width: 5px;
          height: 5px;
          background: var(--telemetry-cyan);
          border-radius: 1px;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .team-meta {
          margin-top: 0.85rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .meta-label {
          color: var(--text-muted);
        }

        .meta-value {
          color: var(--text-primary);
        }

        .tech-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.3rem 0.65rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
        }

        .modal-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--border-subtle);
          background: var(--bg-deep);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .links-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
