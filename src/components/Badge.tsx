import type { ReactNode } from "react";

type BadgeProps = {
  variant?: "default" | "wip" | "recommended";
  children: ReactNode;
};

export function Badge({ variant = "default", children }: BadgeProps) {
  const variantClasses =
    variant === "wip"
      ? "animate-wip-glow border-[#3a3000] bg-[#1a1500] text-accent"
      : variant === "recommended"
        ? "border-[#1a3a1a] bg-[#0a1a0a] text-[#6abf6a]"
        : "border-border bg-surface-2 text-text-muted";
  return (
    <span
      className={`rounded-[3px] border px-[0.4rem] py-[0.1rem] font-mono text-[0.6rem] ${variantClasses}`}
    >
      {children}
    </span>
  );
}
