"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  ShieldCheck,
  Cpu,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio.config";

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...portfolioData.skills.map((s) => s.category),
  ];

  const filteredCategories =
    selectedCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter(
          (s) => s.category === selectedCategory
        );

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Programming Languages":
        return <Code2 className="w-4 h-4 text-emerald-400" />;

      case "Frontend & UI Engineering":
        return <Cpu className="w-4 h-4 text-cyan-400" />;

      case "Backend & Distributed Systems":
        return <Server className="w-4 h-4 text-blue-400" />;

      case "Databases & Storage":
        return <Database className="w-4 h-4 text-amber-400" />;

      case "DevOps & Cloud Tools":
        return <Wrench className="w-4 h-4 text-purple-400" />;

      default:
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-10 md:py-12 px-4 max-w-6xl mx-auto space-y-6 w-full min-w-0"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-zinc-800 pb-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            02 // Technical Competency
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Verified Stack & Domain Expertise
          </h2>
        </div>

        <span className="text-xs font-mono text-zinc-400">
          Technologies & Tools I Work With
        </span>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`skill-filter px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all border ${
              selectedCategory === cat
                ? "bg-zinc-800 text-emerald-400 border-zinc-700 shadow-sm"
                : "bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((group) => (
          <div
            key={group.category}
            className="skill-card p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-zinc-800 border border-zinc-700">
                  {getCategoryIcon(group.category)}
                </div>

                <h3 className="text-sm font-bold text-zinc-100 font-mono">
                  {group.category}
                </h3>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {group.description}
              </p>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`skill-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-all ${
                    skill.highlight
                      ? "bg-zinc-800 text-zinc-200 border-zinc-700 hover:border-emerald-500/50"
                      : "bg-zinc-900/80 text-zinc-400 border-zinc-800"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      skill.level === "Core"
                        ? "bg-emerald-400"
                        : skill.level === "Advanced"
                          ? "bg-cyan-400"
                          : "bg-zinc-500"
                    }`}
                  />

                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
