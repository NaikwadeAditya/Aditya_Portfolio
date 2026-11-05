"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { portfolioData } from "@/data/portfolio.config";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const { personal } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      label: "Jump to About & Engineering Overview",
      category: "Navigation",
      action: () => {
        window.location.href = "#about";
        onClose();
      },
    },
    {
      label: "Jump to Verified Skills Matrix",
      category: "Navigation",
      action: () => {
        window.location.href = "#skills";
        onClose();
      },
    },
    {
      label: "Jump to Self-Healing Cloud Cluster Project",
      category: "Projects",
      action: () => {
        window.location.href = "#projects";
        onClose();
      },
    },
    {
      label: "Jump to MasteryHub Course Platform",
      category: "Projects",
      action: () => {
        window.location.href = "#projects";
        onClose();
      },
    },
    {
      label: "Jump to ThinkBuild Internship Experience",
      category: "Experience",
      action: () => {
        window.location.href = "#experience";
        onClose();
      },
    },
    {
      label: "Copy Email: naikwadeaditya7777@gmail.com",
      category: "Contact",
      action: () => {
        navigator.clipboard.writeText(personal.email);
        alert("Email copied to clipboard!");
        onClose();
      },
    },
    {
      label: "Copy Phone: +91 9370679872",
      category: "Contact",
      action: () => {
        navigator.clipboard.writeText(personal.phone);
        alert("Phone copied to clipboard!");
        onClose();
      },
    },
    {
      label: "Open Aditya's GitHub Profile",
      category: "Links",
      action: () => {
        window.open(personal.githubUrl, "_blank");
        onClose();
      },
    },
    {
      label: "Open Aditya's LinkedIn Profile",
      category: "Links",
      action: () => {
        window.open(personal.linkedinUrl, "_blank");
        onClose();
      },
    },
  ];

  const filtered = query.trim()
    ? actions.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : actions;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-800 gap-3">
          <Search className="w-4 h-4 text-zinc-500" />
          <input
            type="text"
            autoFocus
            placeholder="Search portfolio, jump to section, or copy info..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 focus:outline-none text-xs"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-500 border border-zinc-700">
            ESC
          </kbd>
        </div>

        {/* Filtered Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-zinc-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between text-zinc-300 hover:text-emerald-400 hover:bg-zinc-900 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-zinc-600 group-hover:text-emerald-400">›</span>
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400">
                  {item.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-zinc-900/80 border-t border-zinc-800 text-[11px] text-emerald-400 flex items-center justify-between">
          <span>Aditya Naikwade • Navigation Index</span>
          <span>Press ESC or Click Outside to Exit</span>
        </div>
      </div>
    </div>
  );
};
