export interface PersonalInfo {
  fullName: string;
  shortName: string;
  role: string;
  branch: string;
  university: string;
  country: string;
  location: string;
  teamName: string;
  primaryTagline: string;
  supportingStatement: string;
  headline: string;
  shortBio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  profilePhoto?: string;
  telemetryCode: string;
  currentSemester: string;
  academicYear: string;
  academicContext: string;
  gpaOrStatusNotice?: string;
}

export interface CorePhilosophy {
  label: string;
  description: string;
  metric: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  branch: string;
  period: string;
  status: string;
  currentFocus: string;
  keyCoursework: string[];
  laboratories: string[];
  academicHonors?: string[];
  note?: string;
}

export type SkillProficiency = 'Comfortable' | 'Practicing' | 'Learning';

export interface SkillItem {
  name: string;
  level: SkillProficiency;
  context: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectEntry {
  id: string;
  sector: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  problem: string;
  solution: string;
  contribution: string;
  team: string;
  technologies: string[];
  status: 'Production Ready' | 'Active Development' | 'Academic Prototype' | 'Research';
  challengesLearned: string;
  repoUrl?: string;
  demoUrl?: string;
  image: string;
  fallbackGradient?: string;
  metrics: ProjectMetric[];
  architectureSummary?: string[];
}

export interface JourneyMilestone {
  sector: string;
  date: string;
  title: string;
  category: 'Foundation' | 'Project Lap' | 'Hackathon & Build' | 'Upcoming Target';
  summary: string;
  takeaway: string;
  evidenceUrl?: string;
  isCurrentLap?: boolean;
}

export interface PortfolioData {
  personal: PersonalInfo;
  interests: string[];
  philosophies: CorePhilosophy[];
  aboutNarrative: {
    origin: string;
    focus: string;
    vision: string;
  };
  education: EducationEntry[];
  skillCategories: SkillCategory[];
  projects: ProjectEntry[];
  journey: JourneyMilestone[];
}
