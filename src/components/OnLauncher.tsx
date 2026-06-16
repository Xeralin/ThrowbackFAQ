"use client";

import type { ReactNode } from "react";
import { useMethod } from "@/lib/method";

export function OnLauncher({ children }: { children: ReactNode }) {
  return useMethod() === "launcher" ? <>{children}</> : null;
}
