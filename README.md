# Aditya Naikwade — Personal Portfolio

A bespoke, engineering-first personal portfolio built strictly with **Next.js 14 (App Router)** and **Tailwind CSS**. Crafted to avoid generic AI-generated templates, featuring tactile developer artifacts, an interactive IDE terminal, Bento grid modularity, and deep-dive architecture case studies.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router, Server Components, Static Site Generation)
- **Styling**: Tailwind CSS v3.4 (Zero runtime CSS overhead, custom engineering grid tokens)
- **Language**: TypeScript (Strict Mode)
- **Icons**: Lucide React
- **Design Influences**:
  - **Abu Said (`abusaid.netlify.app`)**: Interactive IDE / Code Window with syntax highlighting and file tabs (`aditya.ts`, `cluster.json`, `deploy.sh`).
  - **ThinkBuild (`thinkbuild.in`)**: High-contrast typography, studio Bento grid architecture, and subtle grid patterns.
  - **DeveloperFolio (`developerfolio.js.org`)**: Categorized technical competency matrix with domain filtering.
  - **Yuji Sato (`yujisatojr.github.io`)**: Chronological experience timeline with verified metrics.

---

## 📂 Project Structure

```text
aditya-portfolio/
├── app/
│   ├── globals.css          # Tailwind base, dark theme variables, engineering grid patterns
│   ├── layout.tsx           # SEO metadata, font injections, dark mode shell
│   └── page.tsx             # Main page aggregating sections and Cmd+K listener
├── components/
│   ├── navigation/
│   │   └── Navbar.tsx       # Floating pill navbar with mobile drawer
│   ├── hero/
│   │   ├── Hero.tsx         # Bio, contact chips, and call-to-actions
│   │   └── CodeCard.tsx     # Tabbed IDE window (TypeScript, JSON, Bash)
│   ├── sections/
│   │   ├── BentoAbout.tsx   # Bento grid: ThinkBuild role, Cloud focus, Education
│   │   ├── SkillsMatrix.tsx # Categorized stack (Languages, Frontend, Backend, Tools)
│   │   ├── Projects.tsx     # Featured projects with Case Study triggers
│   │   ├── ExperienceTimeline.tsx # ThinkBuild internship timeline & achievements
│   │   └── Contact.tsx      # Direct reach cards & interactive message simulator
│   ├── projects/
│   │   └── CaseStudyModal.tsx # Architectural deep-dive drawer for flagship projects
│   └── ui/
│       ├── CommandPalette.tsx # Raycast/Linear-style Cmd+K search palette
│       └── TechBadge.tsx    # Tactile technology badge pills
├── data/
│   └── portfolio.config.ts  # Single source of truth for bio, skills, projects, and experience
├── public/                  # Static assets & resume
└── tailwind.config.ts       # Design system tokens and custom utilities
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, statically prerendered production build in `.next/`.

### 3. Start Production Server
```bash
npm run start
```

---

## ✏️ Customizing Your Content

All data is decoupled from the UI and lives in `data/portfolio.config.ts`:
- Update your bio, email, phone, or location.
- Add or edit projects, case study architecture details, and verified metrics.
- Adjust technical skills and proficiency levels.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended for Next.js)
1. Push your repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel automatically detects Next.js and deploys with optimal edge caching.
