import React, { useState } from 'react';
import { Check, ShieldCheck, RefreshCw, Sparkles, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillProficiency } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false;
    return true;
  });

  const getLevelBadge = (level: SkillProficiency) => {
    switch (level) {
      case 'Comfortable':
        return (
          <span className="level-badge badge-comfortable">
            <Check size={11} />
            <span>Comfortable Using</span>
          </span>
        );
      case 'Practicing':
        return (
          <span className="level-badge badge-practicing">
            <RefreshCw size={11} />
            <span>Actively Practicing</span>
          </span>
        );
      case 'Learning':
        return (
          <span className="level-badge badge-learning">
            <Sparkles size={11} />
            <span>Exploring & Lab Study</span>
          </span>
        );
    }
  };

  return (
    <section id="skills" className="section-padding skills-section" aria-label="Technical Skills and Development">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <div className="sector-tag">SECTOR 03 // TECHNICAL TELEMETRY</div>
          <h2 className="section-title">Skills & Development</h2>
          <p className="section-subtitle">
            Competencies grounded in genuine laboratory coursework and active project implementation. Zero fabricated proficiency percentages.
          </p>
        </header>

        {/* Philosophy Callout Banner */}
        <div className="skills-integrity-banner">
          <div className="banner-left">
            <ShieldCheck size={18} className="integrity-icon" />
            <div>
              <span className="integrity-title">HONEST CAPABILITY TAXONOMY</span>
              <p className="integrity-desc">
                Engineering skills are categorized by practical context rather than arbitrary &ldquo;90%&rdquo; sliders.
              </p>
            </div>
          </div>

          <div className="taxonomy-legend">
            <div className="legend-item">
              <span className="dot dot-green" />
              <span>Comfortable: Applied in multiple projects/labs</span>
            </div>
            <div className="legend-item">
              <span className="dot dot-amber" />
              <span>Practicing: Actively refining algorithmic depth</span>
            </div>
            <div className="legend-item">
              <span className="dot dot-cyan" />
              <span>Learning: Currently exploring in semester lectures</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="skills-filter-bar">
          <div className="filter-group">
            <Filter size={13} className="filter-icon" />
            <span className="filter-label">CATEGORY:</span>
            <button
              type="button"
              className={`filter-btn ${selectedCategory === 'all' ? 'filter-active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              ALL DOMAINS
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${selectedCategory === cat.id ? 'filter-active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <span className="filter-label">LEVEL:</span>
            {['all', 'Comfortable', 'Practicing', 'Learning'].map((lvl) => (
              <button
                key={lvl}
                type="button"
                className={`filter-btn ${selectedLevel === lvl ? 'filter-active' : ''}`}
                onClick={() => setSelectedLevel(lvl)}
              >
                {lvl === 'all' ? 'ANY LEVEL' : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="skills-groups-grid">
          {filteredCategories.map((category) => {
            const visibleSkills = category.skills.filter((skill) => {
              if (selectedLevel !== 'all' && skill.level !== selectedLevel) return false;
              return true;
            });

            if (visibleSkills.length === 0) return null;

            return (
              <div key={category.id} className="skill-category-card tech-card">
                <div className="category-header">
                  <div className="category-meta">
                    <span className="category-code">{category.code}</span>
                    <h3 className="category-title">{category.title}</h3>
                  </div>
                  <span className="skills-count-tag">{visibleSkills.length} MODULES</span>
                </div>

                <p className="category-description">{category.description}</p>

                <div className="skills-matrix">
                  {visibleSkills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-tile">
                      <div className="tile-top">
                        <div className="skill-name-wrap">
                          <h4 className="skill-name">{skill.name}</h4>
                          {skill.tag && <span className="skill-domain-tag">{skill.tag}</span>}
                        </div>
                        {getLevelBadge(skill.level)}
                      </div>

                      <p className="skill-context">{skill.context}</p>
                    </div>
                  ))}
                </div>

                <div className="kerb-strip" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-deep);
          position: relative;
        }

        .skills-integrity-banner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-xs);
          margin-bottom: 2rem;
        }

        @media (min-width: 900px) {
          .skills-integrity-banner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .banner-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .integrity-icon {
          color: var(--f1-red);
          flex-shrink: 0;
        }

        .integrity-title {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.2rem;
        }

        .integrity-desc {
          font-size: 0.8125rem;
          color: var(--text-secondary);
        }

        .taxonomy-legend {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
        }

        @media (min-width: 600px) {
          .taxonomy-legend {
            flex-direction: row;
            gap: 1.25rem;
          }
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .dot-green {
          background: var(--telemetry-green);
        }

        .dot-amber {
          background: var(--telemetry-amber);
        }

        .dot-cyan {
          background: var(--telemetry-cyan);
        }

        /* Filter Controls */
        .skills-filter-bar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-xs);
          margin-bottom: 2.25rem;
        }

        @media (min-width: 850px) {
          .skills-filter-bar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .filter-icon {
          color: var(--text-muted);
          margin-right: 0.2rem;
        }

        .filter-label {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-muted);
          margin-right: 0.35rem;
        }

        .filter-btn {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-xs);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          background: var(--bg-deep);
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-medium);
        }

        .filter-active {
          background: var(--f1-red);
          border-color: var(--f1-red);
          color: #ffffff;
          font-weight: 600;
        }

        /* Categories Grid */
        .skills-groups-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .skills-groups-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .skill-category-card {
          padding: clamp(1.25rem, 3vw, 2rem);
          display: flex;
          flex-direction: column;
        }

        .category-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .category-code {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--f1-red);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.2rem;
        }

        .category-title {
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }

        .skills-count-tag {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-muted);
          background: var(--bg-deep);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
        }

        .category-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .skills-matrix {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .skill-tile {
          background: var(--bg-deep);
          border: 1px solid var(--border-subtle);
          padding: 0.95rem 1.15rem;
          border-radius: var(--radius-xs);
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .skill-tile:hover {
          border-color: var(--border-medium);
          transform: translateX(2px);
        }

        .tile-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.45rem;
          flex-wrap: wrap;
        }

        .skill-name-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skill-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-domain-tag {
          font-family: var(--font-mono);
          font-size: 0.5625rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 0.1rem 0.35rem;
          border-radius: 2px;
        }

        .level-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 600;
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
        }

        .badge-comfortable {
          color: var(--telemetry-green);
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid rgba(0, 229, 153, 0.25);
        }

        .badge-practicing {
          color: var(--telemetry-amber);
          background: rgba(255, 159, 28, 0.08);
          border: 1px solid rgba(255, 159, 28, 0.25);
        }

        .badge-learning {
          color: var(--telemetry-cyan);
          background: rgba(0, 210, 190, 0.08);
          border: 1px solid rgba(0, 210, 190, 0.25);
        }

        .skill-context {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
};
