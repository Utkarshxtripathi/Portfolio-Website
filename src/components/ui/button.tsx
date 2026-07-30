"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline" | "glow";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "ghost",
  href,
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-mono tracking-wide transition-all duration-150 ease-out rounded-lg select-none active:scale-[0.97]";

  const variants = {
    primary:
      "bg-accent text-canvas font-semibold hover:bg-accent-hover shadow-md hover:shadow-accent/20",
    glow:
      "bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 hover:border-accent/50 shadow-[0_0_20px_-3px_rgba(245,165,36,0.3)]",
    outline:
      "bg-surface border border-hairline text-text-hi hover:border-hairline-bright hover:bg-surface-hover",
    ghost:
      "text-text-mid hover:text-text-hi hover:bg-surface-hover",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

