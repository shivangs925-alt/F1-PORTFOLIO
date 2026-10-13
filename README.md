# Shivang Shekhar — Cinematic Formula 1 Engineering Portfolio

A production-quality academic portfolio website personalized for **Shivang Shekhar**, a first-year B.Tech engineering student at **JECRC University**, India (Team: **Cosmic Minds**). Built with React, TypeScript, and Vite, combining the cinematic atmosphere of Formula 1 motorsport broadcasting with the clarity and intellectual rigor of a genuine student engineering showcase.

> **Primary Tagline:** *"EVERY LAP IS A LESSON. EVERY PROJECT IS PROGRESS."*  
> **Supporting Statement:** *"Learning engineering. Exploring ideas. Building towards what comes next."*

---

## 🏎️ Core Experience & Architecture

### 1. Opening Experience (The Night Circuit & Gantry Start)
- **Scene A (Dark Opening):** Atmospheric night race circuit with asphalt perspective, track edge kerbs, distant floodlights, and subtle atmospheric bloom.
- **Scene B (Forward Perspective):** Physical forward camera motion approaching the starting grid.
- **Scene C (5 Red Starting Lights):** FIA-style 5-lamp starting gantry illuminating sequentially (`01` -> `02` -> `03` -> `04` -> `05`), holding briefly, then extinguishing simultaneously for **LIGHTS OUT**!
- **Scene D (Personal Identity Reveal):** High-precision typographic entrance:
  > **SHIVANG SHEKHAR**  
  > `ENGINEERING MY NEXT LAP.`  
  > *First-Year B.Tech Student • JECRC University · India*  
  > *"Every lap is a lesson. Every project is progress."*
- **Scene E (Determinism & Accessibility):**
  - **Explore My Journey & Skip Intro [ESC]:** Instant keyboard and button bypass to enter the portfolio immediately.
  - Honors `prefers-reduced-motion` automatically.
  - Uses `sessionStorage` (`f1_portfolio_intro_seen`) so subsequent page reloads go directly to the homepage.
  - Interactive **Replay Intro** button in navbar, mobile menu, and footer.
  - Silent by default with an optional synthesized Web Audio API sound toggle for authentic gantry timing beeps.

### 2. Homepage & Sector Layout
- **Sector 01 — Personal Story & Philosophy (`#about`):** *"The Person Behind the Projects"* narrative detailing Shivang's student journey, EDP activities with Team Cosmic Minds, and 3 core engineering principles (*Every Lap Is a Lesson*, *Groundwork over Guesswork*, *Practical Utility*).
- **Sector 02 — Academic Record (`#education`):** JECRC University, degree foundations, laboratory practicals, and academic integrity disclosures.
- **Sector 03 — Technical Telemetry (`#skills`):** Honest capability taxonomy categorized by practical context (*Comfortable using*, *Actively Practicing*, *Exploring & Lab Study*). Zero fabricated percentages or arbitrary progress sliders.
- **Sector 04 — Applied Engineering (`#projects`):** Detailed technical case studies (*CampusFlow [EDP Concept]*, *AlgoTrack [Visual Traversal]*, *StintTimer [Focus Engine]*) featuring problem constraints, architecture decisions, personal contributions, and failure lessons. Includes an interactive deep-dive modal.
- **Sector 05 — Race Progression (`#journey`):** Vertical sector progression timeline documenting genuine first-year milestones at JECRC University.
- **Sector 06 — Communications (`#contact`):** One-click clipboard email copy, professional channels (GitHub, LinkedIn, Resume), and a transparent client-side message composer opening direct pre-filled emails.

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation & Run Commands
```bash
# 1. Navigate into the project folder
cd f1-engineering-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in your browser
# Visit http://localhost:5173
```

### Production Build & Validation
```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ✏️ How to Customize Your Personal Details

All student details, academic information, projects, and skills are maintained in **one single central configuration file**:

📁 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

### 1. Update Personal Information
Open [`src/data/portfolioData.ts`](./src/data/portfolioData.ts) and replace the placeholders:
- `fullName`: Replace `[YOUR FULL NAME]` with your name.
- `shortName`: Replace `[FIRST NAME]` with your preferred name or initials.
- `branch`: Replace `[COMPUTER SCIENCE / YOUR BRANCH]` with your department.
- `university`: Replace `[YOUR UNIVERSITY NAME]` with your university.
- `location`: Replace `[CITY, COUNTRY]` with your current city.
- `email`: Replace `contact@example.com` with your active email address.
- `github`: Replace with your actual GitHub profile link.
- `linkedin`: Replace with your actual LinkedIn profile link.

### 2. Add Your Profile Picture
- Place your image inside the `public/images/` directory, for example: `public/images/profile.jpg`.
- In `src/data/portfolioData.ts`, set:
  ```ts
  profilePhoto: '/images/profile.jpg',
  ```
- *Note:* If left blank `''`, the website automatically displays an engineered carbon-weave monogram frame with your initials.

### 3. Add Your Resume PDF
- Replace `public/resume.pdf` with your real resume file named `resume.pdf`.
- All "Download Resume" buttons throughout the header, hero, and contact sections point directly to `/resume.pdf`.

### 4. Add or Modify Projects
In `src/data/portfolioData.ts`, edit the `projects` array. Each project accepts:
```ts
{
  id: 'unique-project-slug',
  sector: 'SECTOR 01 // YOUR SPECIALTY',
  title: 'Project Title',
  subtitle: 'One-line technical subtitle',
  shortDescription: 'Concise summary for the case card',
  problem: 'The real technical constraint or challenge',
  solution: 'Your architectural solution',
  contribution: 'What you specifically designed, built, or tested',
  team: 'Solo Project or Team description',
  technologies: ['C', 'TypeScript', 'React', 'Canvas'],
  status: 'Active Development' | 'Production Ready' | 'Academic Prototype',
  challengesLearned: 'What failed initially and what you learned',
  repoUrl: 'https://github.com/yourusername/project',
  demoUrl: 'https://your-demo-url.com',
  image: '/images/your-project-screenshot.jpg',
  metrics: [
    { label: 'Latency', value: '< 16ms' },
    { label: 'Coverage', value: 'Unit Tested' }
  ],
  architectureSummary: [
    'Key architecture point 1',
    'Key architecture point 2'
  ]
}
```

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Run `npm run build` to generate the `/dist` directory.
2. Drag and drop the `/dist` folder into [Netlify Drop](https://app.netlify.com/drop) or connect your GitHub repository with Build Command `npm run build` and Publish Directory `dist`.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'`.
2. Run `npm run build` and deploy the `dist` branch using GitHub Actions (`actions/deploy-pages`).

---

## 🛡️ Anti-Vibe-Coding Design Adherence
- **Color Palette:** Deep carbon black (`#08090B`), graphite (`#121417`), warm white (`#F4F2ED`), muted grey (`#A2A5AA`), and signature racing red (`#E10600`) reserved strictly for focal accents.
- **Typography:** Space Grotesk (headings), Inter (body readability), JetBrains Mono (technical telemetry).
- **Integrity:** Zero fake analytics numbers, zero fake awards, zero arbitrary proficiency percentages.
- **Accessibility:** Semantic HTML5, full keyboard navigation with visible focus states, ARIA dialog modal, and `prefers-reduced-motion` compliance.
