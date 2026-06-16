import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Callout } from "@/components/Callout";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ContentVideo } from "@/components/ContentVideo";
import { ExternalLink } from "@/components/ExternalLink";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Getting Started",
  description:
    "A step-by-step guide to setting up and downloading an older season of Rainbow Six Siege.",
  path: "/getting-started",
});

const faqs: FaqItem[] = [
  {
    q: "Using JVAV's Downloader (Windows)",
    a: (
      <>
        <p className="note">Requires .NET 9.0 or newer.</p>
        <ol>
          <li>
            Download the <code>.bat</code> file from the{" "}
            <ExternalLink href="https://github.com/JOJOVAV/r6-downloader/releases/latest">
              latest release
            </ExternalLink>{" "}
            and place it inside your R6S folder
          </li>
          <li>
            Run the <code>.bat</code> file — it will automatically download
            everything it needs
          </li>
          <li>Enter your Steam account name, not your profile name</li>
          <li>
            Select <strong>Game Downloader</strong> from the main menu
          </li>
          <li>
            Choose the <strong>year</strong>, then the <strong>season</strong>{" "}
            you want to download
          </li>
          <li>
            Log in to your Steam account and wait for the download to complete
          </li>
          <li>
            Navigate to your R6S folder → <strong>Downloads</strong> →{" "}
            <strong>Season</strong>
          </li>
          <li>
            Run <code>LaunchR6.bat</code> to launch the game
          </li>
        </ol>
      </>
    ),
  },
  {
    q: "Using Xera's Downloader (Linux)",
    a: (
      <>
        <p className="note">Requires Python 3.11 or newer and native Steam.</p>
        <ol>
          <li>
            Download the <code>.zip</code> file from the{" "}
            <ExternalLink href="https://github.com/Xeralin/Downloader/releases/latest">
              latest release
            </ExternalLink>{" "}
            and extract it
          </li>
          <li>
            Open a terminal in the extracted folder and run{" "}
            <code>python main.py</code>
          </li>
          <li>
            Select <strong>Game downloader</strong> from the main menu
          </li>
          <li>
            Choose the <strong>season</strong> you want to download, then log in
            with your Steam account
          </li>
          <li>Wait for the download to complete</li>
          <li>
            Close Steam completely, confirm <strong>Add to Steam?</strong> and
            pick a compatibility layer
          </li>
          <li>
            Open Steam and click <strong>Play</strong>
          </li>
        </ol>
      </>
    ),
  },
];

export default function GettingStarted() {
  return (
    <>
      <Hero
        tag="Setup Guide"
        corner="SETUP"
        title={<em>Getting Started</em>}
        description="A step-by-step guide to setting up and downloading an older season of Rainbow Six Siege."
      />

      <Callout label="// STEAM REQUIRED">
        This guide only works if you own R6S on Steam. Ubisoft Connect and Epic
        Games accounts are not supported.
      </Callout>

      <SectionTitle>Step 1 — Prepare an R6S Folder</SectionTitle>
      <Prose>
        <p>
          Create a dedicated folder for the game on whichever drive you want to
          store it. Keep the name simple — no spaces or special characters. We
          recommend naming it <strong>R6S</strong>.
        </p>

        <ContentVideo
          src="/media/game-folder.webm"
          label="Creating an R6S folder"
          width={1920}
          height={1080}
        />

        <Callout variant="warning" label="// WARNING">
          Do not place the R6S folder inside OneDrive or any other cloud storage
          service. This will cause issues.
        </Callout>
      </Prose>

      <SectionTitle>Step 2 — Add a Windows Security Exclusion</SectionTitle>
      <Prose>
        <p>
          Before downloading the game, add your R6S folder as an exclusion in
          Windows Security so it does not interfere with game files:
        </p>
        <ol>
          <li>
            Search for <strong>Virus & Threat Protection</strong> in the Windows
            start menu
          </li>
          <li>
            Click <strong>Manage settings</strong> under{" "}
            <em>Virus & Threat Protection Settings</em>
          </li>
          <li>
            Scroll down to <em>Exclusions</em> and click{" "}
            <strong>Add or remove exclusions</strong>
          </li>
          <li>
            Click <strong>Add an exclusion</strong>, select{" "}
            <strong>Folder</strong>, and choose your R6S folder
          </li>
        </ol>
        <ContentVideo
          src="/media/antivirus-exclusion.webm"
          label="Adding an antivirus exclusion"
          width={1920}
          height={1080}
        />
      </Prose>

      <SectionTitle>Step 3 — Download the Game</SectionTitle>
      <Prose>
        <p>
          Detailed instructions for each downloader are below. Visit the{" "}
          <Link href="/downloaders">Downloaders page</Link> for frequently asked
          questions.
        </p>
      </Prose>

      <FaqAccordion items={faqs} />

      <SectionTitle>Need Help?</SectionTitle>
      <Prose>
        <p>
          If you run into issues, check the{" "}
          <Link href="/common-errors">Common Errors</Link> page or visit the{" "}
          <Link href="/how-to-get-help">How To Get Help</Link> page for guidance
          on reporting problems to staff.
        </p>
      </Prose>
    </>
  );
}
