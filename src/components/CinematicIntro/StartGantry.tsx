import React from 'react';

interface StartGantryProps {
  litCount: number; // 0 to 5
  lightsOut: boolean;
}

export const StartGantry: React.FC<StartGantryProps> = ({ litCount, lightsOut }) => {
  return (
    <div className="gantry-wrapper" aria-label="Formula 1 Starting Gantry Sequence" role="status">
      <div className="gantry-girders">
        <div className="gantry-beam" />
      </div>

      <div className="gantry-housing">
        {[1, 2, 3, 4, 5].map((index) => {
          const isRedActive = !lightsOut && litCount >= index;

          return (
            <div key={index} className={`gantry-column ${isRedActive ? 'column-active' : ''}`}>
              <div className="lamp-top-bracket" />
              
              {/* Dual Red High-Intensity LED Cluster */}
              <div className="lamp-cluster">
                <div
                  className={`led-bulb ${isRedActive ? 'led-on' : 'led-off'}`}
                  aria-hidden="true"
                >
                  <span className="bulb-core" />
                  {isRedActive && <span className="bulb-glow" />}
                </div>

                <div
                  className={`led-bulb ${isRedActive ? 'led-on' : 'led-off'}`}
                  aria-hidden="true"
                >
                  <span className="bulb-core" />
                  {isRedActive && <span className="bulb-glow" />}
                </div>
              </div>

              <div className="column-label">0{index}</div>
            </div>
          );
        })}
      </div>

      <style>{`
        .gantry-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 20;
          user-select: none;
        }

        .gantry-girders {
          width: 100%;
          max-width: 440px;
          height: 10px;
          position: relative;
          margin-bottom: 4px;
        }

        .gantry-beam {
          width: 100%;
          height: 4px;
          background: #252830;
          border-top: 1px solid #3c424e;
          border-bottom: 1px solid #14161a;
          box-shadow: 0 4px 12px rgba(0,0,0,0.8);
        }

        .gantry-housing {
          display: flex;
          gap: clamp(8px, 2.5vw, 18px);
          background: #0d0f12;
          padding: clamp(10px, 2vw, 16px) clamp(14px, 3vw, 24px);
          border: 1px solid #232731;
          border-radius: 4px;
          box-shadow: 
            inset 0 1px 2px rgba(255,255,255,0.06),
            0 20px 45px rgba(0, 0, 0, 0.85);
        }

        .gantry-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .lamp-top-bracket {
          width: 12px;
          height: 3px;
          background: #232731;
          border-radius: 1px;
        }

        .lamp-cluster {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #07080a;
          padding: 6px 5px;
          border-radius: 4px;
          border: 1px solid #1b1e25;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.9);
        }

        .led-bulb {
          width: clamp(20px, 4vw, 30px);
          height: clamp(20px, 4vw, 30px);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 80ms ease, box-shadow 80ms ease;
        }

        .led-off {
          background: #1b1313;
          border: 1px solid #2a1b1b;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.8);
        }

        .led-off .bulb-core {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2b1717;
          opacity: 0.6;
        }

        .led-on {
          background: #ff1e16;
          border: 1px solid #ff7b75;
          box-shadow: 
            0 0 12px #ff1e16,
            0 0 28px #e10600,
            0 0 50px rgba(225, 6, 0, 0.75),
            inset 0 0 8px #ffffff;
        }

        .led-on .bulb-core {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 8px #ffffff;
        }

        .bulb-glow {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 30, 22, 0.45) 0%, transparent 70%);
          pointer-events: none;
          animation: pulseGlow 0.8s infinite alternate ease-in-out;
        }

        @keyframes pulseGlow {
          from { opacity: 0.85; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1.08); }
        }

        .column-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.625rem;
          color: #555c69;
          letter-spacing: 0.05em;
          margin-top: 2px;
        }

        .column-active .column-label {
          color: #ff524e;
        }
      `}</style>
    </div>
  );
};
