import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, RotateCcw } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface NavbarProps {
  onReplayIntro: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'about', label: 'ABOUT', sector: '01' },
    { id: 'education', label: 'ACADEMICS', sector: '02' },
    { id: 'skills', label: 'SKILLS', sector: '03' },
    { id: 'projects', label: 'PROJECTS', sector: '04' },
    { id: 'journey', label: 'JOURNEY', sector: '05' },
    { id: 'contact', label: 'CONTACT', sector: '06' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'header-scrolled' : ''}`}
        role="banner"
      >
        <div className="container nav-container">
          {/* Wordmark Logo */}
          <a
            href="#"
            className="brand-wordmark"
            aria-label={`${portfolioData.personal.fullName} - Home`}
          >
            <span className="brand-marker" />
            <span className="brand-name">{portfolioData.personal.fullName}</span>
            <span className="brand-spec">JECRC // ENG-01</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="nav-item">
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.id)}
                      className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="link-sector">{link.sector}</span>
                      <span className="link-text">{link.label}</span>
                      {isActive && <span className="active-pip" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions: Replay Intro & Resume */}
          <div className="nav-actions">
            <button
              type="button"
              className="action-icon-btn"
              onClick={onReplayIntro}
              title="Replay Cinematic Start Sequence"
              aria-label="Replay Cinematic Start Sequence"
            >
              <RotateCcw size={14} />
              <span className="btn-label-desktop">REPLAY INTRO</span>
            </button>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary nav-resume-btn"
              aria-label="Download Resume PDF"
            >
              <FileText size={13} />
              <span>RESUME</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="sector-tag">TELEMETRY NAVIGATION</span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className={`mobile-nav-item ${activeSection === link.id ? 'mobile-active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                <span className="mobile-sector-num">SEC_{link.sector}</span>
                <span className="mobile-sector-name">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <button
              type="button"
              className="btn btn-secondary mobile-replay-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
            >
              <RotateCcw size={14} />
              <span>REPLAY CINEMATIC INTRO</span>
            </button>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText size={14} />
              <span>VIEW RESUME</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-nav, 100);
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background-color 250ms ease, border-color 250ms ease, backdrop-filter 250ms ease;
        }

        .header-scrolled {
          background: rgba(8, 9, 11, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom-color: var(--border-subtle, #23272F);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .brand-wordmark {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .brand-marker {
          width: 8px;
          height: 8px;
          background: var(--f1-red);
          border-radius: 1px;
        }

        .brand-spec {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 500;
          color: var(--text-muted);
          margin-left: 0.35rem;
          padding: 0.15rem 0.35rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: 2px;
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 900px) {
          .desktop-nav {
            display: block;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 0.65rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          position: relative;
          transition: color var(--transition-fast), background var(--transition-fast);
        }

        .link-sector {
          font-size: 0.625rem;
          color: var(--text-dim);
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
        }

        .nav-link-active {
          color: #ffffff;
        }

        .nav-link-active .link-sector {
          color: var(--f1-red);
        }

        .active-pip {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 2px;
          background: var(--f1-red);
          border-radius: 1px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .action-icon-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.45rem 0.7rem;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-subtle);
          background: var(--bg-surface);
          transition: all var(--transition-fast);
        }

        .action-icon-btn:hover {
          color: #ffffff;
          border-color: var(--border-bright);
          background: var(--bg-elevated);
        }

        .nav-resume-btn {
          padding: 0.45rem 0.9rem;
          font-size: 0.75rem;
        }

        .btn-label-desktop {
          display: none;
        }

        @media (min-width: 600px) {
          .btn-label-desktop {
            display: inline;
          }
        }

        .mobile-toggle-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          color: var(--text-primary);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
        }

        @media (min-width: 900px) {
          .mobile-toggle-btn {
            display: none;
          }
        }

        /* Mobile Drawer */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: calc(var(--z-nav, 100) + 10);
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 250ms ease;
        }

        .mobile-menu-open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 340px;
          background: var(--bg-surface);
          border-left: 1px solid var(--border-medium);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu-open .mobile-menu-content {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .mobile-close-btn {
          color: var(--text-secondary);
          padding: 0.25rem;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 0.85rem 1rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          text-align: left;
          transition: all var(--transition-fast);
        }

        .mobile-nav-item:hover, .mobile-active {
          background: var(--bg-elevated);
          border-color: var(--border-subtle);
        }

        .mobile-active {
          border-left: 3px solid var(--f1-red);
        }

        .mobile-sector-num {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--f1-red);
        }

        .mobile-sector-name {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .mobile-menu-footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        .mobile-replay-btn {
          width: 100%;
        }
      `}</style>
    </>
  );
};
