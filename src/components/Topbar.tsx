"use client";

import { usePathname } from "next/navigation";
import { breadcrumbFor, normalizePath } from "@/config/nav";

export function Topbar() {
  const crumbs = breadcrumbFor(normalizePath(usePathname()));

  return (
    <div className="sticky top-0 z-50 flex h-[52px] items-center border-b border-border bg-surface px-8 max-[56.25em]:pl-14 max-[56.25em]:pr-4">
      <div className="font-mono text-[0.75rem] tracking-[0.04em] text-[#4a4a60]">
        {crumbs
          .slice(0, -1)
          .map((crumb) => `${crumb} / `)
          .join("")}
        <span className="font-semibold text-text">
          {crumbs[crumbs.length - 1]}
        </span>
        <span className="ml-px inline-block animate-blink text-text-muted">
          _
        </span>
      </div>
    </div>
  );
}
