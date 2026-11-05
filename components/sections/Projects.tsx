"use client";

import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio.config";
import { ProjectItem } from "@/types/portfolio";
import { CaseStudyModal } from "../projects/CaseStudyModal";

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="w-full min-w-0 py-10 md:py-12 px-4 max-w-6xl mx-auto space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-zinc-800 pb-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            03 //  Implementations
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Featured Systems & Applications
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400">
          Case Studies & Architecture
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, index) => (
          <div
            key={project.id}
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all flex flex-col justify-between space-y-5 group"
          >
            {/* Card Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  0{index + 1} // {project.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">{project.period}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Resume Highlights List */}
              <ul className="space-y-1.5 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80 font-sans">
                {project.highlights.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono">›</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer: Tech Stack & Actions */}
            <div className="space-y-4 pt-4 border-t border-zinc-800/80">
              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-950 border border-zinc-800 text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 6 && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-950 border border-zinc-800 text-zinc-400">
                    +{project.stack.length - 6} more
                  </span>
                )}
              </div>

              {/* Button Bar */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-0.5 transition-all"
                >
                  <span>Architecture & Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Drawer / Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
