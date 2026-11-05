// Personal DataSet
import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Aditya Naikwade",
    title: "Full-Stack Developer & Cloud Systems Engineer",
    headline: "Building resilient distributed systems, autonomous cloud dashboards, and high-performance Next.js web applications.",
    subheadline: "Software Development Intern at ThinkBuild • Computer Science & Engineering Undergraduate at Savitribai Phule Pune University.",
    email: "naikwadeaditya7777@gmail.com",
    phone: "+91 9370679872",
    location: "Pune / Nashik, Maharashtra, India",
    status: "Software Developer  •  Available for Opportunities",
    availability: "Available for SWE Roles & Internships",
    githubUrl: "https://github.com/NaikwadeAditya",
    linkedinUrl: "https://www.linkedin.com/in/naikwade-aditya-3173b02a3/",
    resumeDownloadUrl: "/Resume.pdf",
  },
  education: {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Savitribai Phule Pune University",
    location: "Pune, Maharashtra, India",
    period: "Expected May 2027",
  },
  experience: [
    {
      id: "thinkbuild",
      role: "Software Development Intern",
      company: "ThinkBuild",
      companyUrl: "https://www.thinkbuild.in",
      location: "Hybrid — Nashik, India",
      period: "Nov 2026 – Present",
      type: "Internship",
      description: "Contributing to full-stack web application development, responsive client UI engineering, competitive UX benchmarking, and documentation.",
      highlights: [
        "Contributed to full-stack web application development utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Developed responsive and reusable UI components in React.js and modern CSS, emphasizing clean architecture and cross-browser consistency.",
        "Prepared and maintained comprehensive client technical documentation, functional specifications, and business requirement outlines.",
        "Conducted competitor website research and benchmarking to analyze UI/UX, layouts, navigation, and content structures.",
        "Translated client requirements and competitor research findings into actionable design and feature enhancements.",
        "Maintained disciplined Git and GitHub version control, code review practices, and collaborative sprint tracking."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "UI/UX Research", "Git", "GitHub"],
    },
  ],
  projects: [
    {
      id: "self-healing-cloud-cluster",
      title: "Self-Healing Cloud Cluster",
      subtitle: "Autonomous Cloud Resilience Dashboard with Anomaly Detection & Self-Healing Workflows",
      period: "2026 – Present",
      category: "Cloud & Distributed",
      featured: true,
      stack: ["React.js", "Next.js", "Node.js", "FastAPI", "Docker", "Kubernetes", "GitHub Actions", "Tailwind CSS"],
      description: "Engineered an autonomous cloud dashboard to monitor cluster health, detect real-time anomalies via ML APIs, and execute automatic system recovery.",
      highlights: [
        "Developing a responsive web dashboard to visualize cluster status, real-time telemetry, anomaly detection results, and automated recovery actions.",
        "Constructing interactive frontend UI components and integrated with backend microservices through low-latency RESTful APIs.",
        "Integrating Machine Learning anomaly detection APIs with manual simulation and reset triggers to validate self-healing workflows.",
        "Containerizing frontend, backend, and ML services via Docker and built automated CI/CD pipelines with GitHub Actions for testing, container builds, and Kubernetes deployment."
      ],
      metrics: [
        "Automated node recovery simulation",
        "Multi-service Docker containerization",
        "Automated GitHub Actions CI/CD to Kubernetes",
        "Real-time ML anomaly detection telemetry"
      ],
      githubUrl: "https://github.com/AdityaNaikwade/self-healing-cloud-cluster",
      liveUrl: "https://cloud-cluster-demo.adityanaikwade.dev",
      caseStudy: {
        problem: "In distributed cluster architectures, unhandled node failures, memory spikes, and container crashes lead to downtime and require manual DevOps triage.",
        architecture: "FastAPI ML anomaly scoring layer coupled with a Node.js orchestration engine, feeding an interactive React/Next.js dashboard with live recovery triggers.",
        solutions: [
          "Dockerizing each discrete service (ML scoring, backend orchestration, frontend visualizer) for predictable local and cloud execution.",
          "Implementing stateful simulation routines to allow operators to trigger synthetic failure scenarios and observe automated recovery.",
          "Automating end-to-end image builds and test suites on every pull request via GitHub Actions workflows."
        ],
        metrics: [
          "Exploring Kubernetes-based deployment and container orchestration.",
          "Working on service health monitoring and anomaly detection integration.",
          "Exploreing automated recovery mechanisms for simulated infrastructure failures."
        ],
      },
    },
    {
      id: "masteryhub",
      title: "MasteryHub — Online Course Platform",
      subtitle: "Full-Stack Learning Management System with RBAC, Cloud Media & Streaming Analytics",
      period: "Oct 2024 – Dec 2024",
      category: "Full-Stack Web",
      featured: true,
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Cloudinary", "Nodemailer", "PostHog"],
      description: "Architected a scalable MERN-stack educational platform with dedicated portals for instructors and students, secure authentication, and cloud media delivery.",
      highlights: [
        "Engineered a full-stack educational web application providing separate role-specific portals for students and course instructors.",
        "Implemented secure JWT user authentication, role-based access control (RBAC), and robust CRUD operations across courses and content.",
        "Built responsive, accessible React.js interfaces with Redux Toolkit for unified, predictable global state synchronization.",
        "Integrated Cloudinary for media asset delivery, Nodemailer for automated transactional emails, and PostHog for user behavior telemetry.",
        "Configured production environment secrets, MongoDB connection pooling, and deployed application to cloud hosting."
      ],
      metrics: [
        "Dual-portal RBAC authentication architecture",
        "Cloud-based media processing via Cloudinary CDN",
        "Real-time product analytics tracking via PostHog",
        "End-to-end automated transactional email delivery"
      ],
      githubUrl: "https://github.com/AdityaNaikwade/masteryhub-course-platform",
      liveUrl: "https://masteryhub.adityanaikwade.dev",
      caseStudy: {
        problem: "Online course delivery requires strict access control boundaries between content creators and learners, reliable video/image storage, and automated transactional messaging.",
        architecture: "Normalized MongoDB database schemas with Express.js REST APIs, guarded by JWT middleware and Redux Toolkit state slice caching on the React client.",
        solutions: [
          "Implemented role-based middleware to restrict instructor-specific course management and student-specific learning resources.",
          "Integrated Cloudinary for video and certificate storage, reducing the need for local server-side file storage and simplifying media delivery.",
          "Integrated PostHog event tracking to monitor user interactions, course engagement and student activity."
        ],
        metrics: [
          "Role-Based Access Control (RBAC) for secure instructor and student access management.",
          "Optimized MongoDB queries using indexed schemas for efficient data retrieval.",
          "Automated transactional email receipts via Nodemailer."
        ],
      },
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      description: "Foundational & systems programming languages for scalable logic",
      skills: [
        { name: "C++", level: "Core", highlight: true },
        { name: "JavaScript (ES6+)", level: "Core", highlight: true },
        { name: "TypeScript", level: "Core", highlight: true },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      category: "Frontend & UI Engineering",
      description: "Modern component-driven web frameworks with zero layout shift",
      skills: [
        { name: "React.js", level: "Core", highlight: true },
        { name: "Next.js 14/15", level: "Core", highlight: true },
        { name: "Tailwind CSS", level: "Core", highlight: true },
        { name: "HTML5 / Semantic Web", level: "Core" },
        { name: "CSS3 / Modern Layouts", level: "Core" },
      ],
    },
    {
      category: "Backend & Distributed Systems",
      description: "RESTful microservices, orchestration layers, and cloud APIs",
      skills: [
        { name: "Node.js", level: "Core", highlight: true },
        { name: "Express.js", level: "Core", highlight: true },
        { name: "FastAPI", level: "Advanced" },
        { name: "RESTful API Architecture", level: "Core", highlight: true },
      ],
    },
    {
      category: "Databases & Storage",
      description: "Structured relational and high-performance NoSQL stores",
      skills: [
        { name: "MongoDB", level: "Core", highlight: true },
        { name: "PostgreSQL", level: "Advanced" },
        // { name: "Prisma ORM", level: "Proficient" },
      ],
    },
    {
      category: "Libraries & State Management",
      description: "Predictable client-side dataflow and networking",
      skills: [
        { name: "Redux Toolkit", level: "Core", highlight: true },
        { name: "React Router", level: "Advanced" },
        { name: "Axios", level: "Core" },
      ],
    },
    {
      category: "DevOps & Cloud Tools",
      description: "Containerization, CI/CD pipelines, and development toolchain",
      skills: [
        { name: "Docker", level: "Core", highlight: true },
        { name: "Kubernetes", level: "Advanced", highlight: true },
        { name: "GitHub Actions (CI/CD)", level: "Advanced", highlight: true },
        { name: "Git & GitHub", level: "Core", highlight: true },
        { name: "Postman", level: "Core" },
        { name: "VS Code", level: "Core" },
      ],
    },
    {
      category: "Integrations & Core Concepts",
      description: "Third-party cloud infrastructure and foundational CS engineering",
      skills: [
        { name: "Cloudinary (Media CDN)", level: "Advanced" },
        { name: "Nodemailer", level: "Advanced" },
        { name: "PostHog Analytics", level: "Advanced" },
        { name: "OOP (Object-Oriented Design)", level: "Core" },
        { name: "DBMS & Indexing", level: "Core" },
        { name: "Role-Based Access Control (RBAC)", level: "Core" },
      ],
    },
  ],
  quickStats: [
    { label: "Engineering Internship", value: "ThinkBuild", caption: "Software Development Intern" },
    { label: "Core Tech Focus", value: "MERN + Next.js", caption: "Full-Stack & Cloud Architecture" },
    { label: "Cloud & DevOps", value: "Docker / K8s", caption: "Containerized & CI/CD Automated" },
    { label: "Academic Standing", value: "B.Tech CSE", caption: "Savitribai Phule Pune University" },
  ],
};
