import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { SeasonTable } from "@/components/SeasonTable";
import { ExternalLink } from "@/components/ExternalLink";
import { DownloaderButton } from "@/components/DownloaderButton";
import { Callout } from "@/components/Callout";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Heated Metal",
  description:
    "An SDK for Rainbow Six Siege — map editor, extended scripting, unlock all, and more.",
  path: "/heated-metal",
});

const heatedMetalSeasons: [string, string, string][] = [
  ["Y5S3", "Shadow Legacy (v0.2.3)", "15018155"],
  ["Y5S4", "Neon Dawn", "15241382"],
  ["Y9S2", "New Blood", "72730050"],
];

export default function HeatedMetal() {
  return (
    <>
      <Hero
        tag="Tools & Mods"
        corner="HM"
        title={<em>Heated Metal</em>}
        description="An SDK for Rainbow Six Siege — map editor, extended scripting, unlock all, and more."
      />

      <SectionTitle>What is Heated Metal?</SectionTitle>
      <Prose>
        <p>
          Heated Metal is a full SDK (Software Development Kit) for R6S that
          adds extended capabilities to specific old game builds. It includes:
        </p>
        <ul>
          <li>A full in-game map editor</li>
          <li>Extended scripting and an in-game console</li>
          <li>Unlock all cosmetics and attachments</li>
          <li>Custom keybinds and host networking controls</li>
        </ul>
      </Prose>

      <SectionTitle>Supported Seasons</SectionTitle>
      <Prose>
        <SeasonTable rows={heatedMetalSeasons} />
      </Prose>

      <div className="mb-8">
        <DownloaderButton href="https://github.com/DataCluster0/HeatedMetal/releases/latest">
          → Download
        </DownloaderButton>
        <DownloaderButton href="https://discord.gg/7mR9VxBxWd" secondary>
          → Heated Metal Discord
        </DownloaderButton>
      </div>

      <SectionTitle>Requirements</SectionTitle>
      <Prose>
        <ul>
          <li>The latest Visual C++ Redistributables</li>
          <li>Medium or above in-game textures (Shadow Legacy only)</li>
          <li>A DXVK executable — Vulkan is not supported</li>
          <li>
            External overlays disabled, as they can stop the UI from rendering
          </li>
        </ul>
      </Prose>

      <SectionTitle>Installation</SectionTitle>
      <Prose>
        <p>
          These steps follow <strong>JVAV&#39;s Downloader</strong> — get it
          from the <Link href="/downloaders">Downloaders page</Link>:
        </p>
        <ol>
          <li>
            Run the <code>.bat</code> file
          </li>
          <li>
            Select <strong>Heated Metal</strong> and wait
          </li>
          <li>
            Select <strong>Game Downloader</strong> and choose your season to
            download the build, which also applies the HeliosLoader
          </li>
          <li>
            Select <strong>Download Heated Metal</strong> to add the SDK
          </li>
          <li>
            Launch the game with <code>LaunchR6.bat</code>, not{" "}
            <code>RainbowSix.exe</code>
          </li>
        </ol>
      </Prose>

      <Callout label="// NOTE">
        <strong>Y9S2 New Blood</strong> is not available through the downloader.
        Download its SDK from the{" "}
        <ExternalLink href="https://discord.gg/7mR9VxBxWd">
          Heated Metal Discord
        </ExternalLink>
        .
      </Callout>

      <SectionTitle>Usage</SectionTitle>
      <Prose>
        <ul>
          <li>
            Press <strong>F1</strong> to open the context menu (console,
            inventory, and more)
          </li>
          <li>
            Press <strong>F3</strong> to open the map editor
          </li>
          <li>
            Run the <code>Setup</code> command in the console to customize your
            keybinds
          </li>
          <li>
            The host can grant admin permissions via{" "}
            <strong>Console → Network → Connections</strong>, unlocking the
            editor and additional features
          </li>
        </ul>
      </Prose>
    </>
  );
}
