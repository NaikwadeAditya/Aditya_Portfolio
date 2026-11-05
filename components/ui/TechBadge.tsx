import React from "react";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "emerald" | "cyan" | "amber";
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, variant = "default" }) => {
  const variantStyles = {
    default: "bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700",
    emerald: "bg-emerald-950/40 text-emerald-400 border-emerald-800/40 hover:border-emerald-700/60",
    cyan: "bg-cyan-950/40 text-cyan-400 border-cyan-800/40 hover:border-cyan-700/60",
    amber: "bg-amber-950/40 text-amber-400 border-amber-800/40 hover:border-amber-700/60",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-colors ${variantStyles[variant]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {name}
    </span>
  );
};
