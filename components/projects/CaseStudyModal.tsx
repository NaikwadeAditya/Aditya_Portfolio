"use client";

import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Cpu,
} from "lucide-react";
import { ProjectItem } from "@/types/portfolio";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8 space-y-6 text-zinc-200 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.category}
              </span>

              <span className="text-xs font-mono text-zinc-400">
                {project.period}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-100">
              {project.title}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Architecture Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">

          {/* The Challenge */}
          <div className="case-study-panel p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold font-mono">
              <AlertTriangle className="w-4 h-4" />
              <span>THE CHALLENGE</span>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* The Architecture */}
          <div className="case-study-panel p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold font-mono">
              <Layers className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              {project.caseStudy.architecture}
            </p>
          </div>
        </div>

        {/* Key Engineering Solutions */}
        <div className="case-study-panel p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono">
            <Cpu className="w-4 h-4" />
            <span>IMPLEMENTED ARCHITECTURAL SOLUTIONS</span>
          </div>

          <ul className="space-y-2 pt-1 text-zinc-300">
            {project.caseStudy.solutions.map((sol, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{sol}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Measurable Outcomes & Verified Metrics */}
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
          <span className="text-xs font-mono font-bold text-zinc-300">
            VERIFIED BENCHMARKS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            {project.caseStudy.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300"
              >
                • {metric}
              </div>
            ))}
          </div>
        </div>

        {/* Action Links */}
        {/*
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold transition-colors"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        */}

        {/* Close Instruction */}
        <button
          onClick={onClose}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-300"
        >
          Press ESC to close
        </button>
      </div>
    </div>
  );
};
