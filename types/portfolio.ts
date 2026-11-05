export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeDownloadUrl?: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface CaseStudyData {
  problem: string;
  architecture: string;
  solutions: string[];
  metrics: string[];
  architectureDiagram?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: "Cloud & Distributed" | "Full-Stack Web" | "Systems";
  stack: string[];
  featured: boolean;
  description: string;
  highlights: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: CaseStudyData;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
  }[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: EducationInfo;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  quickStats: {
    label: string;
    value: string;
    caption: string;
  }[];
}
