"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, Terminal, ArrowUpRight, AlertCircle, Loader2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio.config";

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: data.message || "Message dispatched successfully! Aditya will respond shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Failed to deliver email. Please check your SMTP configuration.",
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: "Network error occurred while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-12 px-4 max-w-6xl mx-auto space-y-12">

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-zinc-800 pb-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            05 // Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Start a Conversation
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400">
          Nodemailer Powered Direct Reach
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Column: Contact Cards & Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm text-zinc-300 leading-relaxed">
            I am currently interning at <strong>ThinkBuild</strong> and am actively open to discussing software engineering roles, full-stack opportunities, and distributed systems collaborations.
          </p>

          {/* Email Quick Copy Card */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-800 text-emerald-400">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-zinc-400">Direct Email</span>
                <a href={`mailto:${personal.email}`} className="text-xs font-mono text-zinc-200 hover:text-emerald-400 transition-colors">
                  {personal.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-800 text-cyan-400">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-zinc-400">Phone / WhatsApp</span>
                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="text-xs font-mono text-zinc-200 hover:text-cyan-400 transition-colors">
                  {personal.phone}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Card */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-zinc-800 text-amber-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-zinc-400">Location Base</span>
              <span className="text-xs font-mono text-zinc-200">{personal.location}</span>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-zinc-400" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>

        </div>

        {/* Right Column: Nodemailer Direct Message Terminal Form */}
        <div className="lg:col-span-7 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 space-y-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-zinc-300">
                Get in Touch
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-500">

            </span>
          </div>

          {/* Status Alert Banner */}
          {statusMessage && (
            <div
              className={`p-4 rounded-xl text-xs font-mono flex items-start gap-3 border ${statusMessage.type === "success"
                  ? "bg-emerald-950/40 text-emerald-300 border-emerald-800/60"
                  : "bg-red-950/40 text-red-300 border-red-800/60"
                }`}
            >
              {statusMessage.type === "success" ? (
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <p className="font-semibold">{statusMessage.text}</p>
                {statusMessage.type === "error" && (
                  <p className="text-[11px] text-zinc-400 font-sans">
                    Make sure your Gmail App Password is configured in <code>.env.local</code>.
                  </p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-zinc-400">Your Name</label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="Rohan / Tech Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div className="space-y-1">
                <label className="text-zinc-400">Your Email Address</label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-zinc-400">Message / Opportunity Scope</label>
              <textarea
                rows={4}
                required
                disabled={isSubmitting}
                placeholder="I reviewed your projects and technical skills in Software development. I'd like to connect regarding a potential opportunities."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 font-sans transition-colors disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-lg bg-emerald-400 text-zinc-950 font-bold hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                  <span>Dispatching via Nodemailer...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* Engineering Footer */}
      <footer className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-zinc-500">

        {/* Copyright and Identity */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span>
            © {new Date().getFullYear()} Aditya Naikwade
          </span>
          <span className="text-zinc-700">•</span>
          <span>Built with curiosity &amp; code.</span>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono">
          <span className="text-zinc-400">Next.js</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">TypeScript</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">Tailwind CSS</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Back to top
          <span>↑</span>
        </button>

      </footer>


    </section>
  );
};
