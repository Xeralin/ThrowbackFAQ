"use client";

import Link from "next/link";
import { Callout } from "@/components/Callout";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { ContentVideo } from "@/components/ContentVideo";
import { ExternalLink } from "@/components/ExternalLink";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnLinux } from "@/components/OnLinux";
import { OnWindows } from "@/components/OnWindows";
import { useMethod } from "@/lib/method";

function LauncherSteps() {
  return (
    <>
      <SectionTitle>Step 1 — Install the Launcher</SectionTitle>
      <Prose>
        <OnWindows>
          <ol>
            <li>
              Download <code>Launcher.exe</code> from the{" "}
              <ExternalLink href="https://github.com/Xeralin/ThrowbackLauncher/releases/latest">
                latest release
              </ExternalLink>
            </li>
            <li>
              Run it — the launcher installs itself and creates a Start menu
              entry
            </li>
          </ol>
        </OnWindows>
        <OnLinux>
          <ol>
            <li>
              Download <code>Launcher.AppImage</code> from the{" "}
              <ExternalLink href="https://github.com/Xeralin/ThrowbackLauncher/releases/latest">
                latest release
              </ExternalLink>
            </li>
            <li>Open it</li>
          </ol>
        </OnLinux>
      </Prose>

      <OnWindows>
        <SectionTitle>Step 2 — Add an Antivirus Exclusion</SectionTitle>
        <Prose>
          <p>
            Some antivirus programs flag game files as false positives.
            Liberator, Heated Metal, and the launcher itself are common targets.
            The fix is to add both your library folder and the launcher install
            folder as exclusions. For Windows Security, follow these steps.
          </p>
          <ol>
            <li>
              Search for <strong>Virus & Threat Protection</strong> in the
              Windows start menu
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
              <strong>Folder</strong>, and choose your library folder, then
              repeat for the launcher install folder at{" "}
              <code>%LOCALAPPDATA%\ThrowbackLauncher</code>
            </li>
            <li>Restart your machine and try launching the game again</li>
          </ol>
          <p className="note">
            Use <strong>Verify</strong> in the launcher to restore removed game
            files.
          </p>
        </Prose>
      </OnWindows>

      <SectionTitle>
        Step <OnWindows>3</OnWindows>
        <OnLinux>2</OnLinux> — Pick a Season
      </SectionTitle>
      <Prose>
        <p>
          Browse the available seasons under <strong>Download</strong> and press{" "}
          <strong>Download</strong> on the one you want — on your first download
          the launcher asks you to sign in with your Steam account.
        </p>
        <p>
          It then fetches the season straight from the Steam depot servers and
          sets everything up for you.
        </p>
      </Prose>

      <SectionTitle>
        Step <OnWindows>4</OnWindows>
        <OnLinux>3</OnLinux> — Play
      </SectionTitle>
      <Prose>
        <p>
          Press <strong>Play</strong> in the launcher to launch the game.
        </p>
        <OnLinux>
          <p>
            The first time a season shows <strong>Add to Steam</strong> instead
            — close Steam completely before you press it and pick a
            compatibility layer, then <strong>Play</strong> appears.
          </p>
        </OnLinux>
      </Prose>
    </>
  );
}

function JvavSteps() {
  return (
    <>
      <SectionTitle>Step 1 — Prepare an R6S Folder</SectionTitle>
      <Prose>
        <p>
          Create a dedicated folder for the game on whichever drive you want to
          store it.
        </p>
        <p>
          Keep the name simple — no spaces or special characters. We recommend
          naming it <strong>R6S</strong>.
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
          Windows Security so it does not interfere with game files.
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
        <p>
          If you use a different antivirus, add the same folder exclusion there.
        </p>
        <p>
          The <Link href="/antivirus">Antivirus page</Link> covers common
          antivirus issues.
        </p>
      </Prose>

      <SectionTitle>Step 3 — Download the Game</SectionTitle>
      <Prose>
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
            Navigate to your R6S folder → <code>Downloads</code> →{" "}
            <code>Season</code>
          </li>
          <li>
            Run <code>LaunchR6.bat</code> to launch the game
          </li>
        </ol>
      </Prose>
    </>
  );
}

export function GettingStartedSteps() {
  const method = useMethod();

  return (
    <>
      <MethodSwitch />
      {method === "launcher" ? <LauncherSteps /> : <JvavSteps />}
    </>
  );
}
