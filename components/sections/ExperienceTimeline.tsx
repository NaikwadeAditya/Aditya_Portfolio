"use client";

import React from "react";
import { Calendar, MapPin, CheckCircle2, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio.config";

export const ExperienceTimeline: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-10 md:py-12 px-4 max-w-6xl mx-auto space-y-6 w-full min-w-0">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-zinc-800 pb-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            04 // Professional Trajectory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Work Experience & Roles
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400">
          My Experience
        </span>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-800 space-y-10 ml-2">
        {experience.map((job) => (
          <div key={job.id} className="relative group">
            {/* Timeline Pin / Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Experience Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all space-y-4">
              {/* Job Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-zinc-100">
                      {job.role}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-200 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                    >
                      <span>{job.company}</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Job Summary */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {job.description}
              </p>

              {/* Detailed Bullet Points */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Key Accomplishments & Responsibilities:
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {job.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
