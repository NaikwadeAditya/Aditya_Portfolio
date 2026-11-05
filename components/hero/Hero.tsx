"use client";

import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio.config";
import { CodeCard } from "./CodeCard";

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative w-full min-w-0 pt-28 pb-8 sm:pt-32 sm:pb-10 md:pt-36 md:pb-12 px-4 max-w-6xl mx-auto">
      <div className="grid w-full min-w-0 grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Bio & Calls to Action */}
        <div className="lg:col-span-7 space-y-6">

          {/* Main Title & Name */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Portfolio & Engineering Index
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.1]">
              Hi, I&apos;m <span className="text-emerald-400">{personal.name}</span>.
            </h1>
            <p className="text-lg sm:text-xl font-medium text-zinc-300">
              {personal.title}
            </p>
          </div>

          {/* Subheadline & Technical Mission */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
            {personal.headline} Focused on clean React/Next.js architectures, Dockerized microservices, and autonomous cloud self-healing workflows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-400 text-zinc-950 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-950/20"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
            >
              <span>View Experience </span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all"
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Channels & Direct Reach */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-zinc-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>{personal.email}</span>
            </a>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-zinc-400" />
              <span>{personal.phone}</span>
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Code Card */}
        <div className="lg:col-span-5 w-full">
          <CodeCard />
        </div>

      </div>
    </section>
  );
};
