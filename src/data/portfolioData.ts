import type { PortfolioData } from '../types/portfolio';

/**
 * =============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION FILE — SHIVANG SHEKHAR
 * =============================================================================
 * First-Year B.Tech Student at JECRC University, India.
 * Team: Cosmic Minds | Visual Theme: Formula 1 Motorsport Engineering
 *
 * All personal details, academic coursework, skills, projects, and milestones
 * are managed in this single file. Update placeholders marked with brackets [].
 */
export const portfolioData: PortfolioData = {
  personal: {
    fullName: 'Shivang Shekhar',
    shortName: 'Shivang',
    role: 'First-Year B.Tech Student',
    university: 'JECRC University',
    country: 'India',
    location: 'Jaipur, India',
    branch: '[Engineering Branch — To Be Confirmed]', // Update with your exact engineering branch (e.g. Computer Science & Engineering)
    teamName: 'Cosmic Minds',
    primaryTagline: 'EVERY LAP IS A LESSON. EVERY PROJECT IS PROGRESS.',
    supportingStatement: 'Learning engineering. Exploring ideas. Building towards what comes next.',
    headline: 'Curiosity drives me. Engineering gives it direction.',
    shortBio:
      "Hi, I'm Shivang Shekhar, a first-year B.Tech student at JECRC University, India. I'm beginning my journey into engineering, technology, and practical problem-solving. I enjoy exploring ideas that connect classroom learning with real-world challenges, from smarter campus experiences to technology concepts designed to make everyday tasks more efficient. This portfolio is where I document what I learn, the projects I explore, and the progress I make along the way.",
    email: 'shivangs925@gmail.com',
    github: 'https://github.com/shivangs925-alt',
    linkedin: 'https://linkedin.com/in/[YOUR_LINKEDIN_USERNAME]', // Update with your verified LinkedIn profile
    resumeUrl: '/resume.pdf', // Placed inside /public/resume.pdf
    profilePhoto: '', // Leave empty to display the engineered 'SS' monogram, or set to '/images/profile.jpg'
    telemetryCode: 'CAR #07 // JECRC // COSMIC MINDS // LAP 01',
    currentSemester: 'Semester 02 (Year 01)',
    academicYear: '2024 – 2028 (Undergraduate)',
    academicContext:
      'Engineering studies, computer science laboratory work, and Entrepreneurship Development Program (EDP) activities.',
    gpaOrStatusNotice:
      'First-year academic cycle in progress at JECRC University. Examination results and verified grades to be published upon semester completion.',
  },

  interests: [
    'Applied Problem-Solving & Systems',
    'Computer Science Foundations & C Programming',
    'Campus Resource & Workflow Optimization',
    'Web Engineering & Modular Interfaces',
    'Entrepreneurship Development Program (EDP) Ideation',
  ],

  philosophies: [
    {
      label: 'Every Lap Is a Lesson',
      description:
        'In motorsport, no lap is wasted if telemetry reveals where time was lost. In engineering, every bug or failed design is data for the next iteration.',
      metric: '01 / ITERATION',
    },
    {
      label: 'Groundwork over Guesswork',
      description:
        'Focus on core computer science foundations—memory allocation, algorithms, discrete structures—before jumping into superficial tooling.',
      metric: '02 / FOUNDATION',
    },
    {
      label: 'Practical Utility',
      description:
        'Code and technology should address tangible, day-to-day challenges—whether for fellow students on campus or broader community systems.',
      metric: '03 / PURPOSE',
    },
  ],

  aboutNarrative: {
    origin:
      "I'm Shivang Shekhar, a first-year B.Tech student at JECRC University in Jaipur, India. I'm at the very beginning of my engineering journey, driven by a genuine curiosity about how computing systems operate and how practical engineering can solve real everyday friction.",
    focus:
      "My day-to-day academic life centers on core engineering coursework, laboratory programming in C, algorithmic logic, and collaborative initiatives through our university's Entrepreneurship Development Program (EDP). Alongside batchmates in our team 'Cosmic Minds', I actively explore ideas that connect syllabus fundamentals with practical problem-solving—identifying areas where software can streamline student workflows, laboratory resources, and campus communication.",
    vision:
      "I believe in continuous, disciplined improvement: 'Every lap is a lesson. Every project is progress.' Rather than pretending to be an experienced industry veteran, I treat my undergraduate years as an intense proving ground—learning systematically, questioning assumptions, writing clean code, and documenting the journey honestly.",
  },

  education: [
    {
      institution: 'JECRC University',
      degree: 'Bachelor of Technology (B.Tech)',
      branch: '[Engineering Branch — To Be Confirmed]',
      period: '2024 – 2028 (In Progress)',
      status: 'First-Year Undergraduate // Year 1',
      currentFocus:
        'Core Engineering Foundations, Programming Logic, Computing Laboratories & Entrepreneurship Development Program (EDP)',
      keyCoursework: [
        'Programming for Problem Solving (C Language)',
        'Engineering Mathematics & Calculus',
        'Basic Electrical & Electronics Engineering',
        'Digital Logic & System Fundamentals',
        'Engineering Physics & Analytical Thinking',
      ],
      laboratories: [
        'Computer Programming Practice Lab (Linux / C)',
        'Basic Electronics & Hardware Laboratory',
        'Engineering Physics Practical Lab',
      ],
      academicHonors: [
        'Core Member of Team "Cosmic Minds" (EDP Activities & Campus Innovation)',
        'Active participant in university technical orientation and problem-solving workshops',
      ],
      note: 'Exact department branch, graduation records, and semester examination marks will be updated following formal university evaluations.',
    },
  ],

  skillCategories: [
    {
      id: 'languages',
      title: 'Programming & Logic Building',
      code: 'SEC_01 // SYNTAX & LOGIC',
      description: 'Languages currently practiced in university programming labs and personal problem-solving.',
      skills: [
        {
          name: 'C',
          level: 'Comfortable',
          context: 'Variables, loops, control flow, functions, arrays, pointers, and memory basics in lab assignments.',
          tag: 'Core Lab',
        },
        {
          name: 'C++ Foundations',
          level: 'Practicing',
          context: 'Basic object-oriented principles, syntax extension, and standard library data structures.',
          tag: 'Practicing',
        },
        {
          name: 'Python (Scripting Basics)',
          level: 'Practicing',
          context: 'Basic scripting, data manipulation, logic building, and introductory automation experiments.',
          tag: 'Scripting',
        },
      ],
    },
    {
      id: 'web',
      title: 'Web Technologies & Prototyping',
      code: 'SEC_02 // USER INTERFACES',
      description: 'Building clean, structured, and accessible user interfaces for academic projects.',
      skills: [
        {
          name: 'Semantic HTML5 & Accessible DOM',
          level: 'Comfortable',
          context: 'Structured markup, semantic hierarchy, clean forms, and web content accessibility guidelines.',
          tag: 'Structure',
        },
        {
          name: 'Modern CSS & Responsive Layouts',
          level: 'Comfortable',
          context: 'CSS Grid, Flexbox, CSS custom properties (variables), mobile-first responsive architecture.',
          tag: 'Styling',
        },
        {
          name: 'JavaScript / React Basics',
          level: 'Learning',
          context: 'DOM event handling, component architecture, state management, and modern bundling with Vite.',
          tag: 'Frontend',
        },
      ],
    },
    {
      id: 'fundamentals',
      title: 'CS Foundations & Analytical Methods',
      code: 'SEC_03 // ENGINEERING MINDSET',
      description: 'Theoretical foundations being developed through classroom lectures and self-study.',
      skills: [
        {
          name: 'Algorithmic Thinking & Flowcharts',
          level: 'Comfortable',
          context: 'Breaking complex problems into step-by-step pseudo-code, flowcharts, and testable edge cases.',
          tag: 'Analysis',
        },
        {
          name: 'Data Structures (Foundations)',
          level: 'Learning',
          context: 'Linear structures: Arrays, Stacks, Queues, Single Linked Lists, and time complexity awareness.',
          tag: 'DSA',
        },
        {
          name: 'Git & Version Control',
          level: 'Practicing',
          context: 'Repository initialization, branching, commit discipline, GitHub remote synchronization.',
          tag: 'VCS',
        },
        {
          name: 'Linux / Command Line Navigation',
          level: 'Practicing',
          context: 'File operations, compilation flags (gcc/clang), directory navigation in terminal.',
          tag: 'OS',
        },
      ],
    },
    {
      id: 'tools',
      title: 'Collaboration & EDP Toolchain',
      code: 'SEC_04 // TEAM & PRODUCTIVITY',
      description: 'Tools used for coursework, EDP group ideation with Team Cosmic Minds, and project documentation.',
      skills: [
        {
          name: 'VS Code & Development Environment',
          level: 'Comfortable',
          context: 'Primary coding environment, extensions setup, integrated terminal workflows.',
          tag: 'IDE',
        },
        {
          name: 'EDP Ideation & Problem Framing',
          level: 'Comfortable',
          context: 'Identifying campus friction points, user stakeholder interviews, concept feasibility analysis.',
          tag: 'EDP',
        },
        {
          name: 'Technical Writing & Documentation',
          level: 'Comfortable',
          context: 'Writing structured Markdown READMEs, problem statements, and academic presentation slides.',
          tag: 'Writing',
        },
        {
          name: 'Team Collaboration (Cosmic Minds)',
          level: 'Comfortable',
          context: 'Brainstorming with batchmates, task distribution, and collaborative review.',
          tag: 'Teamwork',
        },
      ],
    },
  ],

  projects: [
    {
      id: 'campusflow-edp',
      sector: 'SECTOR 01 // EDP & CAMPUS EFFICIENCY',
      title: 'CampusFlow: Smart Resource & Schedule Concept',
      subtitle: 'Entrepreneurship Development Program (EDP) Concept by Team Cosmic Minds',
      shortDescription:
        'A student-centric concept designed with Team Cosmic Minds to eliminate communication bottlenecks in university laboratories, notices, and resource bookings.',
      problem:
        'First-year students frequently encounter scattered announcements, confusing lab timetables, and overlapping slot reservations across disparate WhatsApp groups and bulletin boards at university.',
      solution:
        'Drafted a unified, lightweight student portal concept featuring centralized notice feeds, verified laboratory scheduling, and transparent resource booking with clean mobile-first access.',
      contribution:
        'Led problem identification, structured stakeholder questionnaires among batchmates, authored the system architecture flowcharts, and prototyped responsive interface wireframes.',
      team: 'Team Cosmic Minds (Shivang Shekhar — Lead Architecture & Concept)',
      technologies: ['Systems Design', 'Responsive Web', 'EDP Problem Framing', 'Figma Wireframing', 'Documentation'],
      status: 'Academic Prototype',
      challengesLearned:
        'Discovered that the hardest part of software engineering is often accurate requirement gathering. Feedback from peers helped strip away unnecessary complexity and focus on instantaneous notice delivery.',
      repoUrl: 'https://github.com/shivangs925-alt/F1-PORTFOLIO',
      demoUrl: '#',
      image: '/images/project-telemetry.jpg',
      metrics: [
        { label: 'Project Scope', value: 'EDP Initiative' },
        { label: 'Target Audience', value: 'JECRC Students' },
        { label: 'Validation Stage', value: 'Concept & Specs' },
      ],
      architectureSummary: [
        'Centralized notice categorization: Academic, Lab Schedules, Exams, and Clubs',
        'Lightweight mobile interface prioritizing low-bandwidth campus Wi-Fi performance',
        'Direct alignment with JECRC University Entrepreneurship Development Program guidelines',
      ],
    },
    {
      id: 'algotrack-visualizer',
      sector: 'SECTOR 02 // CS FOUNDATIONS',
      title: 'AlgoTrack: Pathfinding & Traversal Workbench',
      subtitle: 'Interactive Visual Workbench for First-Year Algorithmic Learning',
      shortDescription:
        'An educational web tool designed to visually explain graph traversal and search algorithms (BFS, DFS, Dijkstra) for engineering peers.',
      problem:
        'Abstract graph algorithms and queue operations are difficult to mentally model from static blackboard lectures and textbook code snippets alone.',
      solution:
        'Developed an interactive graph node canvas that steps through traversal algorithms frame-by-frame, highlighting active frontier nodes, visited states, and optimal paths.',
      contribution:
        'Implemented graph data structures in TypeScript, engineered the step-by-step execution generator, and crafted a dark, high-contrast visualization canvas.',
      team: 'Independent Academic Exploration',
      technologies: ['TypeScript', 'React', 'HTML5 Canvas', 'Algorithms (BFS/DFS)', 'CSS Custom Tokens'],
      status: 'Active Development',
      challengesLearned:
        'Learned how browser event loops interact with animation timers. Moving from nested setTimeout calls to a deterministic generator-based stepping model resolved desynchronization during rapid user clicks.',
      repoUrl: 'https://github.com/shivangs925-alt/F1-PORTFOLIO',
      demoUrl: '#',
      image: '/images/project-graph.jpg',
      metrics: [
        { label: 'Algorithms', value: 'BFS, DFS & Dijkstra' },
        { label: 'Interaction', value: 'Step-by-Step Play' },
        { label: 'Audience', value: 'First-Year Peers' },
      ],
      architectureSummary: [
        'Generator-driven execution engine allowing bidirectional step-by-step playback',
        'Vector-based node projection with real-time adjacency list telemetry',
        'Strict dark telemetry theme prioritizing visual clarity during long study sessions',
      ],
    },
    {
      id: 'stint-timer',
      sector: 'SECTOR 03 // STUDY SYSTEMS',
      title: 'StintTimer: Task Pacing & Focus Engine',
      subtitle: 'Structured Study & Revision Session Organizer Inspired by Racing Stints',
      shortDescription:
        'A local-first, distraction-free study timer dividing problem-solving sessions into structured "Race Stints" (focused problem sets) and "Pit Stops" (mental recovery).',
      problem:
        'Standard timer apps are cluttered with ads, cloud logins, and distracting social elements, pulling focus away from deep mathematical and programming problem solving.',
      solution:
        'Constructed an offline-first, zero-overhead browser utility that runs entirely on local state, tracks revision stints across coursework modules, and offers keyboard-driven pacing.',
      contribution:
        'Architected local storage data persistence, engineered drift-free timing routines, and designed the minimalist dark motorsport interface.',
      team: 'Independent Project',
      technologies: ['JavaScript', 'HTML5', 'Web Storage API', 'CSS Grid', 'Web Audio Synthesizer'],
      status: 'Academic Prototype',
      challengesLearned:
        'Encountered browser background tab timer throttling where setInterval drifts over time. Implemented performance.now() delta tracking to ensure absolute timing accuracy across long revision stints.',
      repoUrl: 'https://github.com/shivangs925-alt/F1-PORTFOLIO',
      demoUrl: '#',
      image: '/images/project-telemetry.jpg',
      metrics: [
        { label: 'Network Calls', value: '0 (100% Offline)' },
        { label: 'Load Time', value: '< 150ms' },
        { label: 'Theme', value: 'F1 Cockpit' },
      ],
      architectureSummary: [
        'Drift-free delta timestamp calculation immune to browser tab throttling',
        'Zero tracking scripts, cookies, or external server dependencies',
        'Keyboard shortcuts for start, pause, stint lap record, and reset',
      ],
    },
  ],

  journey: [
    {
      sector: 'SECTOR 01',
      date: 'Aug 2024',
      title: 'Green Flag: Entering JECRC University',
      category: 'Foundation',
      summary:
        'Commenced first-year B.Tech undergraduate studies at JECRC University, Jaipur, India. Began foundational study of C programming, engineering mathematics, and analytical problem-solving.',
      takeaway:
        'Understood that strong fundamentals in memory, pointers, and discrete math create an enduring foundation for any branch of engineering.',
    },
    {
      sector: 'SECTOR 02',
      date: 'Nov 2024',
      title: 'Forming Team "Cosmic Minds" & EDP Ideation',
      category: 'Hackathon & Build',
      summary:
        'Formed team "Cosmic Minds" with batchmates for university Entrepreneurship Development Program (EDP) activities. Began researching friction points in student campus life and resource management.',
      takeaway:
        'Good engineering begins with understanding the user problem before writing a single line of code.',
    },
    {
      sector: 'SECTOR 03',
      date: 'Jan 2025',
      title: 'First Software Prototypes & Lab Deliverables',
      category: 'Project Lap',
      summary:
        'Built foundational command-line utilities, practiced Git version control workflows, and engineered first interactive educational prototypes for classmates.',
      takeaway:
        'Writing code for oneself is easy; writing code that is clean, documented, and reproducible for peers is where discipline starts.',
    },
    {
      sector: 'SECTOR 04',
      date: 'Present // Lap 01',
      title: 'Deepening Data Structures & Building Practical Systems',
      category: 'Upcoming Target',
      summary:
        'Currently advancing knowledge in linear data structures, algorithm efficiency, and modern web architectures, preparing for future hackathons and technical internship assessments.',
      takeaway:
        'Every lap is a lesson. Every project is progress. Consistent daily commits compound into genuine capability.',
      isCurrentLap: true,
    },
  ],
};
