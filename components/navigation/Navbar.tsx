"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  Menu,
  X,
  ArrowUpRight,
  Search,
  Sun,
  Moon,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio.config";
import { useTheme } from "@/components/ThemeProvider";

interface NavbarProps {
  onOpenCommand: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={`w-full max-w-5xl flex items-center justify-between gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 border ${theme === "dark"
            ? scrolled
              ? "bg-zinc-950/90 backdrop-blur-xl border-zinc-800 shadow-xl"
              : "bg-zinc-900/70 backdrop-blur-md border-zinc-800/80"
            : scrolled
              ? "bg-white/95 backdrop-blur-xl border-slate-200 shadow-lg shadow-slate-900/5"
              : "bg-white/80 backdrop-blur-md border-slate-200/80"
          }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors">
              aditya.dev
            </span>
            <span className="font-mono text-[10px] text-zinc-400 -mt-0.5">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors py-1 ${theme === "dark"
                  ? "text-zinc-400 hover:text-white"
                  : "text-slate-600 hover:text-emerald-700"
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Search */}
          <button
            onClick={onOpenCommand}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono border transition-colors ${theme === "dark"
                ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                : "bg-slate-50 border-slate-200 text-slate-700 hover:text-emerald-700"
              }`}
            title="Press Cmd+K to search"
            aria-label="Open search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all ${theme === "dark"
                ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-emerald-400"
                : "bg-slate-50 border-slate-200 text-slate-700 hover:text-emerald-700"
              }`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Resume */}
          <a
            href={portfolioData.personal.resumeDownloadUrl || "#contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-400 text-zinc-950 hover:bg-emerald-300 transition-colors"
          >
            Resume
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-4 shadow-2xl backdrop-blur-xl z-50 flex flex-col gap-3">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
            <span className="text-xs font-mono text-zinc-400">
              Available for hire
            </span>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-xs font-mono text-emerald-400 hover:underline break-all"
            >
              {portfolioData.personal.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};