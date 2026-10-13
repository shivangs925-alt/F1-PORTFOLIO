import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Volume2, VolumeX, FastForward } from 'lucide-react';
import { StartGantry } from './StartGantry';
import { NightCircuitCanvas } from './NightCircuitCanvas';
import { soundEngine } from '../../utils/audio';
import { portfolioData } from '../../data/portfolioData';

interface CinematicIntroProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, isReplay = false }) => {
  const [litCount, setLitCount] = useState<number>(0);
  const [lightsOut, setLightsOut] = useState<boolean>(false);
  const [showIdentity, setShowIdentity] = useState<boolean>(false);
  const [dissolve, setDissolve] = useState<boolean>(false);
  const [soundActive, setSoundActive] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const timersRef = useRef<number[]>([]);
  const hasFinishedRef = useRef<boolean>(false);

  const handleFinish = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    // Clear all pending timers
    timersRef.current.forEach((id) => clearTimeout(id));

    // Save to session storage so subsequent visits go directly to portfolio
    try {
      sessionStorage.setItem('f1_portfolio_intro_seen', 'true');
    } catch {
      // Ignore in restricted environments
    }

    setDissolve(true);
    setTimeout(() => {
      onComplete();
    }, 450);
  }, [onComplete]);

  // Handle ESC key to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  // Reduced motion detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && !isReplay) {
      handleFinish();
    }
  }, [handleFinish, isReplay]);

  // Toggle Sound FX
  const toggleSound = () => {
    const nextState = !soundActive;
    setSoundActive(nextState);
    soundEngine.setEnabled(nextState);
    if (nextState) {
      soundEngine.playClick();
    }
  };

  // Main F1 Start Sequence Timing
  useEffect(() => {
    const timers = timersRef.current;

    // Step 0: Camera moves forward down track
    setProgress(0.15);

    // Sequence of 5 red lights: 1.0s, 1.6s, 2.2s, 2.8s, 3.4s
    const lightDelays = [1000, 1600, 2200, 2800, 3400];

    lightDelays.forEach((delay, index) => {
      const id = window.setTimeout(() => {
        setLitCount(index + 1);
        setProgress(0.2 + (index + 1) * 0.12);
        soundEngine.playLightBeep(index);

        if (index === 2) {
          setShowIdentity(true);
        }
      }, delay);
      timers.push(id);
    });

    // 4.3s: All 5 lights held, identity fully visible
    const holdTimer = window.setTimeout(() => {
      setProgress(0.9);
    }, 4000);
    timers.push(holdTimer);

    // 4.5s: LIGHTS OUT! Simultaneous extinguish & green tone
    const lightsOutTimer = window.setTimeout(() => {
      setLightsOut(true);
      setProgress(1.0);
      soundEngine.playLightsOut();
    }, 4500);
    timers.push(lightsOutTimer);

    // 4.9s: Smooth dissolve into homepage
    const completeTimer = window.setTimeout(() => {
      handleFinish();
    }, 4900);
    timers.push(completeTimer);

    return () => {
      timers.forEach((id) => clearTimeout(id));
    };
  }, [handleFinish]);

  return (
    <div
      className={`cinematic-intro-root ${dissolve ? 'intro-dissolving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic Formula 1 Portfolio Introduction"
    >
      {/* Visual Layer 1: Real Photographic Night Circuit Background with Depth Zoom */}
      <div
        className="intro-photo-layer"
        style={{
          transform: `scale(${1.0 + progress * 0.08}) translateY(${progress * -15}px)`,
        }}
      >
        <img
          src="/images/night-track.jpg"
          alt=""
          className="night-track-img"
          onError={(e) => {
            // Graceful fallback if image fails to load
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="track-lighting-gradient" />
      </div>

      {/* Visual Layer 2: Perspective Night Circuit Canvas (Kerbs, Grid Boxes, Lights) */}
      <NightCircuitCanvas progress={progress} />

      {/* Atmospheric Vignette & Film Grain */}
      <div className="cinematic-atmosphere" />

      {/* Top HUD Controls: Audio Toggle & Skip Intro */}
      <header className="intro-controls-hud">
        <div className="telemetry-session-tag">
          <span className="live-dot" />
          <span>F1 ACADEMIC GP // QUALIFYING OUT-LAP</span>
        </div>

        <div className="controls-right">
          <button
            type="button"
            className="hud-btn"
            onClick={toggleSound}
            aria-label={soundActive ? 'Disable Sound FX' : 'Enable Sound FX (Formula 1 Beeps)'}
            title={soundActive ? 'Mute Audio' : 'Turn on F1 Gantry Audio'}
          >
            {soundActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span className="hud-btn-label">{soundActive ? 'AUDIO ON' : 'AUDIO OFF'}</span>
          </button>

          <button
            type="button"
            className="hud-btn skip-btn"
            onClick={handleFinish}
            aria-label="Skip cinematic introduction and enter portfolio immediately"
          >
            <span>SKIP INTRO</span>
            <FastForward size={14} />
            <kbd className="kbd-shortcut">ESC</kbd>
          </button>
        </div>
      </header>

      {/* Center Stage: Starting Gantry & Personal Identity Reveal */}
      <main className="intro-center-stage">
        <div className="gantry-container">
          <StartGantry litCount={litCount} lightsOut={lightsOut} />
        </div>

        {/* Identity Reveal Card */}
        <div className={`identity-card ${showIdentity ? 'identity-visible' : ''}`}>
          <div className="identity-sector-label">ACADEMIC GRAND PRIX // FIRST-YEAR B.TECH</div>
          <h1 className="identity-name">{portfolioData.personal.fullName}</h1>
          <div className="identity-tagline">ENGINEERING MY NEXT LAP.</div>
          <p className="identity-sub">
            {portfolioData.personal.role} &nbsp;•&nbsp; {portfolioData.personal.university} &middot; {portfolioData.personal.country}
          </p>
          <blockquote className="identity-quote">
            &ldquo;{portfolioData.personal.primaryTagline}&rdquo;
          </blockquote>

          <div className="identity-actions-row">
            <button
              type="button"
              className="btn btn-primary intro-explore-btn"
              onClick={handleFinish}
            >
              <span>EXPLORE MY JOURNEY</span>
            </button>
            <span className={`status-pill ${lightsOut ? 'status-green' : 'status-amber'}`}>
              {lightsOut ? 'LIGHTS OUT // GREEN FLAG' : litCount === 5 ? 'GRID READY' : 'APPROACHING GRID'}
            </span>
          </div>
        </div>
      </main>

      {/* Bottom Telemetry Ticker */}
      <footer className="intro-footer-telemetry">
        <div className="telemetry-item">
          <span className="telemetry-lbl">SYSTEM</span>
          <span className="telemetry-val">ONLINE</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-lbl">CIRCUIT</span>
          <span className="telemetry-val">NIGHT GRAND PRIX</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-lbl">LIGHTS</span>
          <span className="telemetry-val">
            {lightsOut ? 'OUT (GO)' : `${litCount} OF 5 RED`}
          </span>
        </div>
      </footer>

      <style>{`
        .cinematic-intro-root {
          position: fixed;
          inset: 0;
          z-index: var(--z-intro, 1000);
          background-color: #050608;
          color: #f4f2ed;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          transition: opacity 450ms cubic-bezier(0.16, 1, 0.3, 1), transform 450ms ease;
        }

        .intro-dissolving {
          opacity: 0;
          transform: scale(1.03);
          pointer-events: none;
        }

        .intro-photo-layer {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .night-track-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 60%;
          filter: brightness(0.65) contrast(1.2) saturate(0.85);
          opacity: 0.65;
        }

        .track-lighting-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 45%, rgba(8, 9, 11, 0.2) 0%, rgba(5, 6, 8, 0.92) 80%);
        }

        .cinematic-atmosphere {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.85);
          background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* Top HUD Controls */
        .intro-controls-hud {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(1rem, 3vw, 1.75rem) clamp(1rem, 4vw, 2.5rem);
        }

        .telemetry-session-tag {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #a2a5aa;
          background: rgba(18, 20, 25, 0.85);
          padding: 0.35rem 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 3px;
          backdrop-filter: blur(8px);
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e10600;
          box-shadow: 0 0 8px #e10600;
          animation: livePulse 1.2s infinite ease-in-out;
        }

        @keyframes livePulse {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .controls-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hud-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(18, 20, 25, 0.85);
          color: #f4f2ed;
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.45rem 0.85rem;
          border-radius: 3px;
          font-family: var(--font-mono, monospace);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 180ms ease;
        }

        .hud-btn:hover {
          background: rgba(30, 34, 42, 0.95);
          border-color: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        .skip-btn {
          background: rgba(225, 6, 0, 0.18);
          border-color: rgba(225, 6, 0, 0.5);
          color: #ffffff;
        }

        .skip-btn:hover {
          background: #e10600;
          border-color: #e10600;
          box-shadow: 0 0 16px rgba(225, 6, 0, 0.5);
        }

        .kbd-shortcut {
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          padding: 0.1rem 0.35rem;
          font-size: 0.5625rem;
          margin-left: 0.25rem;
          color: #d1d5db;
        }

        /* Center Stage */
        .intro-center-stage {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1.5rem;
          margin: auto 0;
        }

        .gantry-container {
          margin-bottom: clamp(1.5rem, 4vh, 2.75rem);
          transform: perspective(600px) rotateX(4deg);
        }

        .identity-card {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
          max-width: 760px;
        }

        .identity-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .identity-sector-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: #e10600;
          margin-bottom: 0.5rem;
        }

        .identity-name {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2rem, 5.5vw, 4.25rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: #ffffff;
          line-height: 1.05;
          margin-bottom: 0.6rem;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        }

        .identity-tagline {
          font-family: var(--font-mono, monospace);
          font-size: clamp(0.8125rem, 1.8vw, 1.15rem);
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #a2a5aa;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .identity-sub {
          font-size: clamp(0.8125rem, 1.4vw, 0.95rem);
          color: #8c929e;
          letter-spacing: 0.04em;
          margin-bottom: 0.75rem;
        }

        .identity-quote {
          font-family: var(--font-mono, monospace);
          font-size: clamp(0.75rem, 1.3vw, 0.875rem);
          color: var(--f1-red, #e10600);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          font-weight: 600;
        }

        .identity-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .intro-explore-btn {
          padding: 0.5rem 1.15rem;
          font-size: 0.75rem;
        }

        .status-pill {
          font-family: var(--font-mono, monospace);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          padding: 0.3rem 0.85rem;
          border-radius: 2px;
          text-transform: uppercase;
        }

        .status-amber {
          background: rgba(255, 159, 28, 0.14);
          color: #ff9f1c;
          border: 1px solid rgba(255, 159, 28, 0.35);
        }

        .status-green {
          background: rgba(0, 229, 153, 0.18);
          color: #00e599;
          border: 1px solid rgba(0, 229, 153, 0.5);
          box-shadow: 0 0 16px rgba(0, 229, 153, 0.35);
        }

        /* Bottom Telemetry */
        .intro-footer-telemetry {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 4vw, 3rem);
          padding: 1.25rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(8, 9, 11, 0.85);
          backdrop-filter: blur(8px);
        }

        .telemetry-item {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          font-family: var(--font-mono, monospace);
          font-size: 0.6875rem;
        }

        .telemetry-lbl {
          color: #555b66;
        }

        .telemetry-val {
          color: #f4f2ed;
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .telemetry-item:nth-child(2) {
            display: none;
          }
          .hud-btn-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
