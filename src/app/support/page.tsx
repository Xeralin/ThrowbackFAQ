import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { NavCard, CardGrid } from "@/components/NavCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description:
    "Find guides for common issues, or learn how to get help from the community and staff.",
  path: "/support",
});

export default function Support() {
  return (
    <>
      <Hero
        tag="Troubleshooting"
        corner="SUP"
        title={<em>Support</em>}
        description="Find guides for common issues, or learn how to get help from the community and staff."
      />

      <SectionTitle>Support Guides</SectionTitle>
      <CardGrid>
        <NavCard
          href="/how-to-get-help"
          title="How To Get Help"
          desc="Find out how to report issues effectively and get support from staff."
          arrow="→ READ MORE"
        />
        <NavCard
          href="/common-errors"
          title="Common Errors"
          desc="Solutions for crashes, DLL errors, missing files, and other frequent problems."
          arrow="→ READ MORE"
        />
        <NavCard
          href="/antivirus"
          title="Antivirus Issues"
          desc="Common antivirus issues and how to fix them, including false-positive detections."
          arrow="→ READ MORE"
        />
        <NavCard
          href="/multiplayer"
          title="Multiplayer"
          desc="How to set up and play with others, including common connection issues."
          arrow="→ READ MORE"
        />
        <NavCard
          href="/video-guides"
          title="Video Guides"
          desc="A collection of video guides covering setup, troubleshooting, and gameplay."
          arrow="→ WATCH"
        />
      </CardGrid>
    </>
  );
}
