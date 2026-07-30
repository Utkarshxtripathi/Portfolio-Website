import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "teal";
  className?: string;
}

export function Pill({
  children,
  variant = "default",
  className = "",
}: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-mono rounded-md border",
        variant === "default" &&
          "border-hairline text-text-mid bg-surface",
        variant === "accent" &&
          "border-accent/30 text-accent bg-accent-soft",
        variant === "teal" &&
          "border-teal/30 text-teal bg-teal-soft",
        className
      )}
    >
      {children}
    </span>
  );
}

