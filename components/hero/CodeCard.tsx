"use client";

import React, { useState } from "react";
import { Check, Copy, FileCode, Terminal, Braces } from "lucide-react";

export const CodeCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ts" | "json" | "sh">("ts");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    ts: `// aditya.config.ts — Software Developer Profile
import type { FullStackEngineerIntern } from '@thinkbuild/core';

export const engineer: FullStackEngineer = {
  name: 'Aditya Naikwade',
  currentRole: 'Software Development Intern @ ThinkBuild',
  location: 'Pune / Nashik, Maharashtra, India',
  education: 'B.Tech CSE @ SPPU (2027)',
  coreSpecialization: [
    'MERN Stack Architecture',
    'Next.js 14/15 App Router & Tailwind',
    'Authentication',
    'Role-Based Access Control (RBAC)'
  ],
  verifiedProjects: [
    'Self-Healing Cloud Cluster',
    'MasteryHub Online Course Platform'
  ],
  availableForHire: true
};`,
    json: `{
  "$schema": "https://adityanaikwade.dev/schemas/cloud.json",
  "project": "Self-Healing Cloud Cluster",
  "status": "HEALTHY",
  "orchestration": {
    "runtime": "Docker v26.1",
    "cluster": "Kubernetes v1.30",
    "ci_cd": "GitHub Actions",
    "anomalyDetection": "FastAPI ML Microservice"
  },
  "metrics": {
    "automatedRecoveryTimeMs": 140,
    "availabilityTarget": "99.95%",
    "activeWorkers": 4
  }
}`,
    sh: `#!/usr/bin/env bash
# Deploying Next.js + MERN stack architecture
echo "[2/5] Installing dependencies..."
npm install
echo "[4/5] Creating production build..."
npm run build
echo "[5/5] Deployment preparation completed!"
echo "[✓] Deployment verified: aditya.dev is live."`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-window w-full min-w-0 max-w-full rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs">

      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="hidden sm:inline-block ml-2 text-[11px] text-zinc-500">
            aditya-workspace
          </span>
        </div>


        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("ts")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors ${activeTab === "ts"
                ? "bg-zinc-800 text-emerald-400 font-semibold border border-zinc-700/60"
                : "text-zinc-500 hover:text-zinc-300"
              }`}
          >
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
            <span>aditya.ts</span>
          </button>

          <button
            onClick={() => setActiveTab("json")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors ${activeTab === "json"
                ? "bg-zinc-800 text-emerald-400 font-semibold border border-zinc-700/60"
                : "text-zinc-500 hover:text-zinc-300"
              }`}
          >
            <Braces className="w-3.5 h-3.5 text-amber-400" />
            <span>cluster.json</span>
          </button>

          <button
            onClick={() => setActiveTab("sh")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors ${activeTab === "sh"
                ? "bg-zinc-800 text-emerald-400 font-semibold border border-zinc-700/60"
                : "text-zinc-500 hover:text-zinc-300"
              }`}
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>deploy.sh</span>
          </button>
        </div>

        {/* Copy Code Button */}
        <button
          onClick={handleCopy}
          className="p-1 rounded text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>


      <div key={activeTab}
        className="p-4 overflow-x-auto max-h-[380px] bg-zinc-950/80">
        <pre className="text-zinc-300 leading-relaxed font-mono">
          <code>
            {codeSnippets[activeTab].split("\n").map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell pr-4 text-right select-none text-zinc-600 text-[11px]">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre">
                  {line}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-zinc-900 border-t border-zinc-800 text-[11px] text-zinc-500 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Aditya's Workspace
          </span>
          <span>UTF-8</span>
        </div>
        <span>TypeScript 5.4 • Strict</span>
      </div>
    </div>
  );
};
