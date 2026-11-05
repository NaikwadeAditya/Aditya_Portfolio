"use client";

import React from "react";
import { Briefcase, Cloud, GraduationCap, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio.config";

export const BentoAbout: React.FC = () => {
  const { education, experience, personal } = portfolioData;
  const currentJob = experience[0];

  return (
    <section id="about" className="py-10 md:py-12 px-4 max-w-6xl mx-auto space-y-5">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-zinc-800 pb-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            01 // About & Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Engineering Background & Specialties
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400">
          Learning by building, experimenting and improving.
        </span>
      </div>

      {/* About Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Card 1: ThinkBuild Internship */}
        <div className="md:col-span-7 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Current Engineering Role</span>
              </span>
              <span className="text-xs font-mono text-zinc-400">{currentJob.period}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-zinc-100">
                {currentJob.role} @ <a href={currentJob.companyUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{currentJob.company}</a>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {currentJob.location} • MERN Stack & Client Interface Architecture
              </p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Translating client functional specifications into responsive, reusable components, and conducting in-depth competitor UI/UX benchmarking.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
            {["MERN Stack", "React.js", "Express.js", "MongoDB", "UI/UX Benchmarking", "Git Collaboration"].map((item) => (
              <span key={item} className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/50">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Cloud Resilience & Automation */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Cloud className="w-3.5 h-3.5" />
                <span>Distributed & Cloud Systems</span>
              </span>
              <span className="text-xs font-mono text-zinc-400">Docker & K8s</span>
            </div>

            <h3 className="text-lg font-bold text-zinc-100">
              Autonomous Self-Healing Architectures
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Integrating Machine Learning APIs to display anomaly detection results and implementing simulation and reset
functionalities to demonstrate the self-healing workflow, Containerizing frontend, backend, and ML services using Docker and implemented CI/CD workflows with GitHub
Actions to automate testing, image builds, and Kubernetes deployments.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-zinc-800/80 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400">
              <span>CI/CD Automation</span>
              <span className="text-emerald-400">GitHub Actions</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>ML Microservices</span>
              <span className="text-cyan-400">FastAPI & Next.js</span>
            </div>
          </div>
        </div>

        {/* Card 3: Education & Academics */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </span>
            <span className="text-xs font-mono text-zinc-400">{education.period}</span>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-zinc-100">
              {education.institution}
            </h4>
            <p className="text-xs text-zinc-400 font-mono">
              {education.degree} • {education.location}
            </p>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            Rigorous curriculum covering Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, and Distributed Computing.
          </p>
        </div>

        {/* Card 4: Location & Availability */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-3.5 h-3.5" />
                <span>Base & Mobility</span>
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <h4 className="text-base font-bold text-zinc-100">
              {personal.location}
            </h4>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Available for hybrid , remote & on-site software engineering internships & Job Opportunities, technical collaborations, and full-stack software development engagements.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 font-mono text-xs">
            <span className="text-zinc-400">Response time</span>
            <span className="text-emerald-400">&lt; 24 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
};
