import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { NavCard, CardGrid } from "@/components/NavCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Tools",
  description:
    "Downloaders, mods, and tools for older Rainbow Six Siege seasons.",
  path: "/tools",
});

export default function Tools() {
  return (
    <>
      <Hero
        tag="Tools & Mods"
        corner="TOOLS"
        title={<em>Tools</em>}
        description="Downloaders, mods, and tools for older Rainbow Six Siege seasons."
      />

      <SectionTitle>Available Tools</SectionTitle>
      <CardGrid>
        <NavCard
          href="/downloaders"
          title="Downloaders"
          desc="JVAV's and Xera's downloaders for getting older seasons of the game."
          arrow="→ READ MORE"
        />
        <NavCard
          href="/liberator"
          title="Liberator"
          desc="Unlock all cosmetics and play additional game modes in Y1S0 up to Y4S4."
          arrow="→ READ MORE"
        />
        <NavCard
          href="/heated-metal"
          title="Heated Metal"
          desc="An SDK for R6S — map editor, scripting, unlock all, and more."
          arrow="→ READ MORE"
        />
        <NavCard
          href="/cheat-engine"
          title="Cheat Engine"
          desc="Modify Terrorist Hunt with Cheat Engine tables."
          arrow="→ READ MORE"
        />
      </CardGrid>

      <SectionTitle>External Links</SectionTitle>
      <CardGrid>
        <NavCard
          external
          href="https://github.com/JOJOVAV/r6-tools"
          title="Additional Modding Tools"
          desc="Includes R6Liberator2, R6SGlobal_ShadowLegacy, R6S_VoidEdge, Shears, and more."
          arrow="→ OPEN REPO"
        />
        <NavCard
          external
          href="https://www.radmin-vpn.com/"
          title="RadminVPN"
          desc="Free VPN software used to connect with other players for local multiplayer."
          arrow="→ OPEN LINK"
        />
      </CardGrid>
    </>
  );
}
