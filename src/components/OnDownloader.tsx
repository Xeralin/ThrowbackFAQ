"use client";

import type { ReactNode } from "react";
import { useMethod } from "@/lib/method";

export function OnDownloader({ children }: { children: ReactNode }) {
  return useMethod() === "downloader" ? <>{children}</> : null;
}
