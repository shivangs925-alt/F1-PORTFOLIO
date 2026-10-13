import React, { useState, useEffect } from 'react';
import { CinematicIntro } from './components/CinematicIntro/CinematicIntro';
import { Navbar } from './components/Navigation/Navbar';
import { TelemetryHeader } from './components/TelemetryBar/TelemetryHeader';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { JourneySection } from './sections/JourneySection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { ProjectModal } from './components/ProjectModal/ProjectModal';
import type { ProjectEntry } from './types/portfolio';

export const App: React.FC = () => {
  const [introActive, setIntroActive] = useState<boolean>(() => {
    // Check if user has already experienced the intro this session
    try {
      const seen = sessionStorage.getItem('f1_portfolio_intro_seen');
      return seen !== 'true';
    } catch {
      return true;
    }
  });

  const [isReplaying, setIsReplaying] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleIntroComplete = () => {
    setIntroActive(false);
    setIsReplaying(false);
  };

  const handleReplayIntro = () => {
    setIsReplaying(true);
    setIntroActive(true);
  };

  // Scroll spy to update active section in navigation
  useEffect(() => {
    if (introActive) return;

    const sections = ['hero', 'about', 'education', 'skills', 'projects', 'journey', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [introActive]);

  return (
    <div className="portfolio-app-root">
      {/* Cinematic Formula 1 Starting Experience */}
      {introActive && (
        <CinematicIntro
          onComplete={handleIntroComplete}
          isReplay={isReplaying}
        />
      )}

      {/* Primary Navigation Bar */}
      <Navbar
        onReplayIntro={handleReplayIntro}
        activeSection={activeSection}
      />

      {/* Broadcast Telemetry Status Bar */}
      <TelemetryHeader />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <HeroSection
          onExploreClick={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <div className="track-divider" />
        <AboutSection />

        <div className="track-divider" />
        <EducationSection />

        <div className="track-divider" />
        <SkillsSection />

        <div className="track-divider" />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        <div className="track-divider" />
        <JourneySection />

        <div className="track-divider" />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* Technical Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
