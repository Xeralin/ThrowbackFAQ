"use client";

import type { ReactNode } from "react";
import { usePlatform } from "@/lib/platform";

export function OnWindows({ children }: { children: ReactNode }) {
  return usePlatform() === "windows" ? <>{children}</> : null;
}
