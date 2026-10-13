import React, { useEffect, useRef } from 'react';

interface NightCircuitCanvasProps {
  progress: number; // 0 (start) to 1 (lights out)
}

export const NightCircuitCanvas: React.FC<NightCircuitCanvasProps> = ({ progress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Deep night sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.65);
      skyGrad.addColorStop(0, '#040507');
      skyGrad.addColorStop(0.7, '#07090D');
      skyGrad.addColorStop(1, '#0C0E14');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Horizon line
      const horizonY = height * 0.46;
      const centerX = width * 0.5;

      // Distant track floodlights bloom
      const floodlights = [
        { x: width * 0.18, y: horizonY - height * 0.08, r: 90, color: 'rgba(255, 230, 200, 0.22)' },
        { x: width * 0.32, y: horizonY - height * 0.05, r: 60, color: 'rgba(255, 240, 220, 0.18)' },
        { x: width * 0.68, y: horizonY - height * 0.06, r: 75, color: 'rgba(255, 240, 220, 0.20)' },
        { x: width * 0.82, y: horizonY - height * 0.09, r: 100, color: 'rgba(255, 230, 200, 0.24)' },
      ];

      floodlights.forEach((light) => {
        const rad = light.r * (1 + progress * 0.15);
        const grad = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, rad);
        grad.addColorStop(0, light.color);
        grad.addColorStop(0.5, 'rgba(255, 220, 180, 0.06)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(light.x, light.y, rad, 0, Math.PI * 2);
        ctx.fill();

        // Core light filament
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(light.x, light.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Perspective Track Surface
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX - width * 0.08, horizonY);
      ctx.lineTo(centerX + width * 0.08, horizonY);
      ctx.lineTo(width * 0.95, height);
      ctx.lineTo(width * 0.05, height);
      ctx.closePath();

      const trackGrad = ctx.createLinearGradient(0, horizonY, 0, height);
      trackGrad.addColorStop(0, '#101217');
      trackGrad.addColorStop(0.5, '#0E1015');
      trackGrad.addColorStop(1, '#07080A');
      ctx.fillStyle = trackGrad;
      ctx.fill();

      // Track edge kerbs (Red & White checkered stripes in perspective)
      const renderKerb = (isLeft: boolean) => {
        const steps = 18;
        for (let i = 0; i < steps; i++) {
          const t0 = Math.pow(i / steps, 2.2);
          const t1 = Math.pow((i + 1) / steps, 2.2);

          const y0 = horizonY + (height - horizonY) * t0;
          const y1 = horizonY + (height - horizonY) * t1;

          const factor0 = (y0 - horizonY) / (height - horizonY);
          const factor1 = (y1 - horizonY) / (height - horizonY);

          const x0Inner = isLeft
            ? centerX - width * (0.08 + factor0 * 0.42)
            : centerX + width * (0.08 + factor0 * 0.42);
          const x0Outer = isLeft ? x0Inner - 18 * factor0 : x0Inner + 18 * factor0;

          const x1Inner = isLeft
            ? centerX - width * (0.08 + factor1 * 0.42)
            : centerX + width * (0.08 + factor1 * 0.42);
          const x1Outer = isLeft ? x1Inner - 18 * factor1 : x1Inner + 18 * factor1;

          ctx.beginPath();
          ctx.moveTo(x0Inner, y0);
          ctx.lineTo(x0Outer, y0);
          ctx.lineTo(x1Outer, y1);
          ctx.lineTo(x1Inner, y1);
          ctx.closePath();

          // Alternate red and white, scrolling gently forward with progress
          const stripePhase = Math.floor(i + progress * 6);
          ctx.fillStyle = stripePhase % 2 === 0 ? '#E10600' : '#E8E8E8';
          ctx.globalAlpha = Math.min(1, 0.2 + factor1 * 0.8);
          ctx.fill();
        }
      };

      renderKerb(true);
      renderKerb(false);

      // Starting Grid Boxes (FIA Grid Slots)
      ctx.globalAlpha = 0.4 + progress * 0.3;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;

      for (let box = 1; box <= 3; box++) {
        const boxProgress = (box * 0.22 + progress * 0.25) % 0.8;
        const y = horizonY + (height - horizonY) * Math.pow(boxProgress, 1.8);
        const factor = (y - horizonY) / (height - horizonY);
        const boxWidth = width * 0.28 * factor;
        const boxLeft = box % 2 === 1 ? centerX - boxWidth * 0.9 : centerX + boxWidth * 0.1;

        ctx.beginPath();
        ctx.rect(boxLeft, y, boxWidth * 0.7, 4 * factor);
        ctx.stroke();
      }

      ctx.restore();

      // Atmospheric vignette
      const vignette = ctx.createRadialGradient(
        centerX,
        height * 0.5,
        height * 0.2,
        centerX,
        height * 0.5,
        width * 0.75
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(0.7, 'rgba(8, 9, 11, 0.45)');
      vignette.addColorStop(1, 'rgba(8, 9, 11, 0.92)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [progress]);

  return (
    <canvas
      ref={canvasRef}
      className="night-circuit-canvas"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};
