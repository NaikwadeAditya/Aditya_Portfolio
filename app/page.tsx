"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { BentoAbout } from "@/components/sections/BentoAbout";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { Projects } from "@/components/sections/Projects";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Contact } from "@/components/sections/Contact";
import { CommandPalette } from "@/components/ui/CommandPalette";


export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen min-w-0 w-full flex flex-col">
      {/*Navigation Bar */}
      <Navbar onOpenCommand={() => setCommandPaletteOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <BentoAbout />

      {/* Technical Skills */}
      <SkillsMatrix />

      {/* Featured Projects & Case Study Architecture Drawer */}
      <Projects />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Direct Engineering Outreach & Footer */}
      <Contact />

      {/* Linear / Raycast-style Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </main>
  );
}