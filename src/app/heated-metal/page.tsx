import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { SeasonTable } from "@/components/SeasonTable";
import type { SeasonRow } from "@/config/liberator-builds";
import { ExternalLink } from "@/components/ExternalLink";
import { DownloaderButton } from "@/components/DownloaderButton";
import { Callout } from "@/components/Callout";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnLauncher } from "@/components/OnLauncher";
import { OnDownloader } from "@/components/OnDownloader";
import { OnWindows } from "@/components/OnWindows";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Heated Metal",
  description:
    "An SDK for Rainbow Six Siege — map editor, extended scripting, unlock all, and more.",
  path: "/heated-metal",
});

const heatedMetalSeasons: SeasonRow[] = [
  {
    season: "Y5S3",
    operation: "Shadow Legacy",
    version: "v0.2.3",
    build: "15018155",
  },
  {
    season: "Y5S4",
    operation: "Neon Dawn",
    version: "Latest",
    build: "15241382",
  },
  {
    season: "Y9S2",
    operation: "New Blood",
    version: "Open Beta",
    build: "72730050",
  },
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

      <MethodSwitch />

      <SectionTitle>What is Heated Metal?</SectionTitle>
      <Prose>
        <p>
          Heated Metal is a full SDK (Software Development Kit) for R6S by{" "}
          <ExternalLink href="https://github.com/DataCluster0/HeatedMetal">
            DataCluster0
          </ExternalLink>{" "}
          that adds extended capabilities to specific old game builds. It
          includes the following features.
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
        <SeasonTable rows={heatedMetalSeasons} showVersion />
      </Prose>

      <Callout label="// NOTE">
        <OnLauncher>
          <strong>Y9S2 New Blood</strong> is only available on the{" "}
          <ExternalLink href="https://discord.gg/7mR9VxBxWd">
            Heated Metal Discord
          </ExternalLink>
          , so the launcher cannot fetch the SDK for you. Still choose{" "}
          <strong>Heated Metal</strong> when downloading, then copy the Heated
          Metal files from the Discord into the game folder yourself.
        </OnLauncher>
        <OnDownloader>
          The <strong>Y9S2 New Blood</strong> SDK is only available on the{" "}
          <ExternalLink href="https://discord.gg/7mR9VxBxWd">
            Heated Metal Discord
          </ExternalLink>
          . Download the season build as usual, then copy the Heated Metal files
          from the Discord into the game folder yourself.
        </OnDownloader>
      </Callout>

      <div className="mb-8">
        <DownloaderButton href="https://github.com/DataCluster0/HeatedMetal/releases/latest">
          Download
        </DownloaderButton>
        <DownloaderButton href="https://discord.gg/7mR9VxBxWd" secondary>
          Heated Metal Discord
        </DownloaderButton>
      </div>

      <SectionTitle>Requirements</SectionTitle>
      <Prose>
        <ul>
          <OnWindows>
            <li>The latest Visual C++ Redistributables</li>
          </OnWindows>
          <li>Medium or above in-game textures (Shadow Legacy only)</li>
          <li>
            The DirectX executable (<code>RainbowSix.exe</code>) — the Vulkan
            executable is not supported
            <OnLauncher>
              . The launcher starts the DirectX one for you automatically
            </OnLauncher>
          </li>
          <li>
            External overlays disabled, as they can stop the UI from rendering
          </li>
        </ul>
      </Prose>

      <SectionTitle>Installation</SectionTitle>
      <Prose>
        <OnLauncher>
          <p>Heated Metal installs as its own copy of the season.</p>
        </OnLauncher>
        <OnDownloader>
          <p>
            Heated Metal installs as its own copy of the season — keep a
            separate download without the SDK if you also play regular Operation
            Throwback multiplayer.
          </p>
        </OnDownloader>
        <OnLauncher>
          <ol>
            <li>
              In the launcher, press <strong>Download</strong> on one of the
              supported seasons above
            </li>
            <li>
              Choose <strong>Heated Metal</strong> in the dialog that opens
            </li>
            <li>
              The launcher downloads the build and adds the SDK automatically —
              no separate tool needed
            </li>
            <li>
              Launch the game from the launcher once the download completes
            </li>
          </ol>
          <OnWindows>
            <p className="note">
              Heated Metal is often flagged by antivirus software as a false
              positive — if the setup fails, see the{" "}
              <Link href="/antivirus#why-does-my-antivirus-delete-heated-metal">
                Antivirus page
              </Link>
              .
            </p>
          </OnWindows>
          <p>
            Already have the season installed without Heated Metal? Uninstall it
            first, then download it again and choose{" "}
            <strong>Heated Metal</strong> in the dialog.
          </p>
        </OnLauncher>
        <OnDownloader>
          <OnWindows>
            <p>Install the SDK manually on top of a supported season.</p>
            <ol>
              <li>
                Download one of the supported seasons above — see the{" "}
                <Link href="/getting-started">Getting Started</Link> guide
              </li>
              <li>
                Download the five loader files from the{" "}
                <ExternalLink href="https://github.com/Xeralin/HeliosLoader">
                  HeliosLoader repository
                </ExternalLink>{" "}
                and place them in the game folder, replacing existing files
              </li>
              <li>
                Open <code>HeliosLoader.json</code> and set your username in the{" "}
                <code>Username</code> field
              </li>
              <li>
                Download <code>HeatedMetal.7z</code> from the{" "}
                <ExternalLink href="https://github.com/DataCluster0/HeatedMetal/releases/latest">
                  latest release
                </ExternalLink>{" "}
                and extract it into the game folder, so the{" "}
                <code>HeatedMetal</code> folder and <code>DefaultArgs.dll</code>{" "}
                sit next to <code>RainbowSix.exe</code>
              </li>
              <li>
                Launch the game with <code>RainbowSix.exe</code>
              </li>
            </ol>
            <p className="note">
              Heated Metal is often flagged by antivirus software as a false
              positive — if the setup fails, see the{" "}
              <Link href="/antivirus#why-does-my-antivirus-delete-heated-metal">
                Antivirus page
              </Link>
              .
            </p>
          </OnWindows>
        </OnDownloader>
      </Prose>

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
            The host can grant admin permissions in the console under{" "}
            <strong>Network</strong> and then <strong>Connections</strong>,
            unlocking the editor and additional features
          </li>
        </ul>
      </Prose>
    </>
  );
}
