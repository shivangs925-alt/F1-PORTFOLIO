/**
 * Web Audio API synthesizer for Formula 1 start lights and interface interactions.
 * IMPORTANT: Strictly silent by default. Audio is only triggered when explicitly enabled by user interaction.
 */

class F1AudioController {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setEnabled(enable: boolean) {
    this.enabled = enable;
    if (enable) {
      this.initContext();
    }
  }

  public playLightBeep(index: number) {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Formula 1 start light frequency progression (crisp, professional telemetry tone)
      const baseFreq = 780 + index * 40;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
    } catch {
      // Audio error handling without throwing
    }
  }

  public playLightsOut() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      // Green flag / lights out tone: dual oscillator release
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(1600, this.ctx.currentTime + 0.25);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.25, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(this.ctx.currentTime + 0.36);
      osc2.stop(this.ctx.currentTime + 0.36);
    } catch {
      // Graceful fallback
    }
  }

  public playClick() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // Silently ignore
    }
  }
}

export const soundEngine = new F1AudioController();
