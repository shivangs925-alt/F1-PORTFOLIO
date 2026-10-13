import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';

export const TelemetryHeader: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollPercent(Math.min(100, Math.round((window.scrollY / scrollHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="telemetry-bar" aria-label="Live Telemetry Telemetry Bar" role="region">
      <div className="container telemetry-inner">
        <div className="telemetry-col">
          <span className="telemetry-dot" />
          <span className="telemetry-code">{portfolioData.personal.telemetryCode}</span>
        </div>

        <div className="telemetry-col telemetry-mid">
          <span className="telemetry-label">SESSION:</span>
          <span className="telemetry-val">ACADEMIC YEAR {portfolioData.personal.academicYear}</span>
          <span className="telemetry-divider">/</span>
          <span className="telemetry-label">STATUS:</span>
          <span className="telemetry-val telemetry-green">TRACK CLEAR</span>
        </div>

        <div className="telemetry-col telemetry-right">
          <span className="telemetry-label">LAP PROGRESS:</span>
          <span className="telemetry-val">{scrollPercent}%</span>
          <span className="telemetry-divider">/</span>
          <span className="telemetry-time">{timeStr} UTC</span>
        </div>
      </div>

      <div
        className="telemetry-progress-line"
        style={{ width: `${scrollPercent}%` }}
        aria-hidden="true"
      />

      <style>{`
        .telemetry-bar {
          background: #08090b;
          border-bottom: 1px solid var(--border-subtle, #23272F);
          font-family: var(--font-mono, monospace);
          font-size: 0.6875rem;
          color: var(--text-secondary, #A2A5AA);
          position: relative;
          z-index: 90;
          margin-top: 64px;
        }

        .telemetry-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.4rem;
          padding-bottom: 0.4rem;
          overflow-x: auto;
        }

        .telemetry-col {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .telemetry-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--f1-red, #E10600);
        }

        .telemetry-code {
          color: var(--text-primary, #F4F2ED);
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .telemetry-mid {
          display: none;
        }

        @media (min-width: 768px) {
          .telemetry-mid {
            display: flex;
          }
        }

        .telemetry-right {
          font-variant-numeric: tabular-nums;
        }

        .telemetry-label {
          color: var(--text-muted, #666B74);
          font-size: 0.625rem;
        }

        .telemetry-val {
          color: var(--text-primary, #F4F2ED);
          font-weight: 500;
        }

        .telemetry-green {
          color: var(--telemetry-green, #00E599);
        }

        .telemetry-divider {
          color: var(--border-medium, #303642);
        }

        .telemetry-time {
          color: var(--telemetry-cyan, #00D2BE);
          font-weight: 600;
        }

        .telemetry-progress-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--f1-red) 0%, var(--telemetry-cyan) 100%);
          transition: width 80ms linear;
        }
      `}</style>
    </div>
  );
};
