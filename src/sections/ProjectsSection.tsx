import { ExternalLink, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon } from '../components/Icons/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import type { ProjectEntry } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectEntry) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding projects-section" aria-label="Engineering Projects">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <div className="sector-tag">SECTOR 04 // APPLIED ENGINEERING</div>
          <h2 className="section-title">Technical Projects & Case Studies</h2>
          <p className="section-subtitle">
            Engineered systems, algorithmic workbenches, and client-side performance experiments built with rigorous architectural constraints.
          </p>
        </header>

        {/* Projects List with Alternating Editorial Layout */}
        <div className="projects-editorial-list">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={`project-case-card tech-card ${isReversed ? 'card-reversed' : ''}`}
              >
                {/* Visual / Screenshot Column */}
                <div className="project-visual-col">
                  <div
                    className="visual-container"
                    onClick={() => onSelectProject(project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open case study for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectProject(project);
                      }
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`Visual architecture for ${project.title}`}
                      className="project-image"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="visual-overlay">
                      <div className="view-case-btn">
                        <span>OPEN FULL CASE STUDY</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className="visual-sector-tag">
                      <Cpu size={12} />
                      <span>{project.sector.split('//')[0].trim()}</span>
                    </div>
                  </div>
                </div>

                {/* Content / Narrative Column */}
                <div className="project-content-col">
                  <div className="project-meta-row">
                    <span className="project-sector-code">{project.sector}</span>
                    <span className="project-status-pill">{project.status}</span>
                  </div>

                  <h3 className="project-title" onClick={() => onSelectProject(project)}>
                    {project.title}
                  </h3>

                  <p className="project-subtitle-text">{project.subtitle}</p>

                  <p className="project-description">{project.shortDescription}</p>

                  {/* Problem / Solution Snapshot */}
                  <div className="problem-solution-snapshot">
                    <div className="snapshot-item">
                      <span className="snapshot-lbl">THE PROBLEM:</span>
                      <p>{project.problem}</p>
                    </div>
                    <div className="snapshot-item">
                      <span className="snapshot-lbl">THE SOLUTION:</span>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  {/* Metric Readouts */}
                  <div className="project-metrics-row">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="project-metric-cell">
                        <span className="m-lbl">{m.label}</span>
                        <span className="m-val">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="project-tech-stack">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="project-actions-row">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => onSelectProject(project)}
                    >
                      <span>INSPECT CASE STUDY</span>
                      <ArrowUpRight size={14} />
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        aria-label={`View ${project.title} GitHub repository`}
                      >
                        <GithubIcon size={14} />
                        <span>CODE REPO</span>
                      </a>
                    )}

                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        <span>LIVE DEMO</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="kerb-strip" />
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-surface);
          position: relative;
        }

        .projects-editorial-list {
          display: flex;
          flex-direction: column;
          gap: clamp(3rem, 6vw, 4.5rem);
        }

        .project-case-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.75rem, 4vw, 3rem);
          padding: clamp(1.25rem, 3.5vw, 2.5rem);
          background: var(--bg-deep);
          border: 1px solid var(--border-medium);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 980px) {
          .project-case-card {
            grid-template-columns: 1fr 1.15fr;
            align-items: center;
          }

          .project-case-card.card-reversed {
            grid-template-columns: 1.15fr 1fr;
          }

          .project-case-card.card-reversed .project-visual-col {
            order: 2;
          }

          .project-case-card.card-reversed .project-content-col {
            order: 1;
          }
        }

        /* Visual Column */
        .project-visual-col {
          width: 100%;
        }

        .visual-container {
          position: relative;
          background: #000;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 16 / 10;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 400ms var(--ease-f1), filter 400ms ease;
          filter: brightness(0.88) contrast(1.1);
        }

        .visual-container:hover .project-image {
          transform: scale(1.03);
          filter: brightness(1) contrast(1.15);
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 9, 11, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 250ms ease;
        }

        .visual-container:hover .visual-overlay {
          opacity: 1;
        }

        .view-case-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--f1-red);
          color: #ffffff;
          padding: 0.6rem 1.15rem;
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          box-shadow: 0 4px 20px rgba(225, 6, 0, 0.5);
          transform: translateY(8px);
          transition: transform 250ms var(--ease-f1);
        }

        .visual-container:hover .view-case-btn {
          transform: translateY(0);
        }

        .visual-sector-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(8, 9, 11, 0.85);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.55rem;
          border-radius: 2px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-secondary);
        }

        /* Content Column */
        .project-content-col {
          display: flex;
          flex-direction: column;
        }

        .project-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .project-sector-code {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--f1-red);
          letter-spacing: 0.12em;
        }

        .project-status-pill {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--telemetry-green);
          background: rgba(0, 229, 153, 0.1);
          border: 1px solid rgba(0, 229, 153, 0.25);
          padding: 0.15rem 0.5rem;
          border-radius: 2px;
        }

        .project-title {
          font-size: clamp(1.4rem, 2.5vw, 1.95rem);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 0.35rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .project-title:hover {
          color: var(--f1-red);
        }

        .project-subtitle-text {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .project-description {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .problem-solution-snapshot {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.95rem 1.15rem;
          border-radius: var(--radius-xs);
          margin-bottom: 1.25rem;
        }

        .snapshot-item {
          font-size: 0.8125rem;
        }

        .snapshot-lbl {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.5625rem;
          font-weight: 700;
          color: var(--f1-red);
          letter-spacing: 0.1em;
          margin-bottom: 0.15rem;
        }

        .snapshot-item p {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .project-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .project-metric-cell {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.5rem 0.75rem;
          border-radius: 2px;
        }

        .m-lbl {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.5625rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .m-val {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          padding: 0.2rem 0.55rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          color: var(--text-secondary);
        }

        .project-actions-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};
