import { useState } from 'react';
import { Mail, FileText, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honest real behavior: open pre-filled email client
    const subject = encodeURIComponent(
      `[Engineering Inquiry] ${formSubject || 'Academic / Project Connection'} from ${formName || 'Colleague'}`
    );
    const body = encodeURIComponent(
      `Hi ${personal.shortName},\n\n${formMessage}\n\nFrom,\n${formName}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding contact-section" aria-label="Contact and Collaboration">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <div className="sector-tag">SECTOR 06 // PIT WALL & COMMUNICATIONS</div>
          <h2 className="section-title">Have an interesting problem to solve?</h2>
          <p className="section-subtitle">
            Whether for academic collaborations, college technical initiatives, Entrepreneurship Development Program (EDP) discussions with Team Cosmic Minds, or learning opportunities, my inbox is open.
          </p>
        </header>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Links & Communication Channels */}
          <div className="contact-direct-col">
            {/* Quick Email Card */}
            <div className="email-action-card tech-card">
              <div className="email-card-header">
                <Mail size={18} className="email-icon" />
                <span className="email-label">DIRECT INBOX</span>
              </div>

              <div className="email-display-row">
                <code className="email-address">{personal.email}</code>
                <button
                  type="button"
                  className="btn btn-secondary copy-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY'}</span>
                </button>
              </div>

              <p className="email-note">
                Feel free to email directly or use the quick transmission composer.
              </p>
              <div className="kerb-strip" />
            </div>

            {/* Social & Professional Links */}
            <div className="links-cluster">
              <span className="cluster-label">PROFESSIONAL CHANNELS:</span>

              <div className="channels-grid">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link tech-card"
                  aria-label="Visit GitHub Profile"
                >
                  <GithubIcon size={18} />
                  <div className="channel-text">
                    <span className="channel-name">GitHub</span>
                    <span className="channel-sub">Code Repositories</span>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link tech-card"
                  aria-label="Visit LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                  <div className="channel-text">
                    <span className="channel-name">LinkedIn</span>
                    <span className="channel-sub">Academic Network</span>
                  </div>
                </a>

                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link tech-card"
                  aria-label="View Resume PDF"
                >
                  <FileText size={18} />
                  <div className="channel-text">
                    <span className="channel-name">Resume</span>
                    <span className="channel-sub">Curriculum Vitae</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission Composer */}
          <div className="contact-composer-col">
            <div className="composer-card tech-card">
              <div className="composer-header">
                <div className="composer-title-wrap">
                  <Sparkles size={15} className="composer-icon" />
                  <span className="composer-title">TRANSMIT A MESSAGE</span>
                </div>
                <span className="client-routing-tag">REAL CLIENT ROUTING</span>
              </div>

              <form onSubmit={handleFormSubmit} className="composer-form">
                <div className="form-field">
                  <label htmlFor="contact-name">YOUR NAME / ORGANIZATION</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Chen (Student / Recruiter)"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">SUBJECT / TOPIC</label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Technical collaboration / Project inquiry"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">MESSAGE BODY</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your project, question, or opportunity..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={14} />
                  <span>PREPARE & LAUNCH TRANSMISSION</span>
                </button>

                <p className="composer-disclaimer">
                  <strong>Transparency Note:</strong> Clicking this opens your system email client with your formatted draft. No hidden servers or simulated success fakeouts.
                </p>
              </form>

              <div className="kerb-strip" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-surface);
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4rem);
        }

        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-direct-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Email Card */
        .email-action-card {
          padding: 1.75rem;
          background: var(--bg-deep);
          border: 1px solid var(--border-medium);
        }

        .email-card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .email-icon {
          color: var(--f1-red);
        }

        .email-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .email-display-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-xs);
          margin-bottom: 0.75rem;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .email-address {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-primary);
          word-break: break-all;
        }

        .copy-btn {
          padding: 0.4rem 0.75rem;
          font-size: 0.6875rem;
        }

        .email-note {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        /* Channels Cluster */
        .links-cluster {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cluster-label {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .channels-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        @media (min-width: 500px) {
          .channels-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .channel-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--bg-deep);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .channel-link:hover {
          border-color: var(--f1-red);
          transform: translateY(-2px);
        }

        .channel-text {
          display: flex;
          flex-direction: column;
        }

        .channel-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .channel-sub {
          font-family: var(--font-mono);
          font-size: 0.5625rem;
          color: var(--text-muted);
        }

        /* Message Composer */
        .composer-card {
          padding: 1.75rem;
          background: var(--bg-deep);
          border: 1px solid var(--border-medium);
        }

        .composer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .composer-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .composer-icon {
          color: var(--telemetry-cyan);
        }

        .composer-title {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .client-routing-tag {
          font-family: var(--font-mono);
          font-size: 0.5625rem;
          color: var(--telemetry-green);
          background: rgba(0, 229, 153, 0.1);
          padding: 0.15rem 0.45rem;
          border-radius: 2px;
        }

        .composer-form {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          margin-bottom: 1.5rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .form-input, .form-textarea {
          width: 100%;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          padding: 0.75rem 0.95rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.875rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--f1-red);
          background: var(--bg-elevated);
        }

        .form-textarea {
          resize: vertical;
          min-height: 90px;
        }

        .submit-btn {
          width: 100%;
          padding: 0.85rem;
        }

        .composer-disclaimer {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-top: 0.35rem;
        }

        .composer-disclaimer strong {
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};
