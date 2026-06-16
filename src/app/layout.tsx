import type { Metadata, Viewport } from "next";
import { display, mono, body } from "./fonts";
import { baseMetadata } from "@/lib/metadata";
import { site } from "@/config/site";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${body.variable}`}
    >
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
