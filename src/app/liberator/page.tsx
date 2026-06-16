import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Callout } from "@/components/Callout";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { SeasonTable } from "@/components/SeasonTable";
import {
  SUPPORTED_Y12,
  SUPPORTED_Y34,
  UNLOCK_ALL_SEASONS,
} from "@/config/liberator-builds";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ExternalLink } from "@/components/ExternalLink";
import { DownloaderButton } from "@/components/DownloaderButton";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnLauncher } from "@/components/OnLauncher";
import { OnDownloader } from "@/components/OnDownloader";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Liberator",
  description:
    "Unlock all cosmetics and play additional game modes in older Rainbow Six Siege seasons.",
  path: "/liberator",
});

const faqs: FaqItem[] = [
  {
    q: "Windows Security is blocking Liberator.exe, what do I do?",
    display: (
      <>
        Windows Security is blocking <code>Liberator.exe</code>, what do I do?
      </>
    ),
    platform: "windows",
    method: "downloader",
    a: (
      <p>
        Move <code>Liberator.exe</code> directly into your R6S folder, which
        should already have an antivirus exclusion set up — see the{" "}
        <Link href="/antivirus">Antivirus</Link> page for the full steps. If
        your browser blocks the download, temporarily disable browser protection
        to download it, then re-enable it afterward.
      </p>
    ),
  },
  {
    q: "Windows Security is blocking Liberator, what do I do?",
    platform: "windows",
    method: "launcher",
    a: (
      <p>
        Liberator is bundled with the launcher, so there is nothing to download
        separately. If your antivirus flags it as a false positive, add the
        launcher install folder as an exclusion, then restore the flagged files
        from quarantine — or reinstall the launcher if that is not possible. See
        the <Link href="/antivirus">Antivirus</Link> page for the full steps.
      </p>
    ),
  },
  {
    q: "Liberator is crashing the game, how do I fix it?",
    a: (
      <p>
        <OnDownloader>
          Make sure to launch Liberator <strong>before</strong> launching the
          game.{" "}
        </OnDownloader>
        <OnLauncher>
          Make sure Liberator is enabled on its page <strong>before</strong>{" "}
          launching the game.{" "}
        </OnLauncher>
        If the game is still crashing, verify that it is fully closed and end
        any remaining R6S processes before trying again.
      </p>
    ),
  },
  {
    q: "It says this game build is not supported, what does that mean?",
    a: (
      <p>
        Liberator only supports specific game builds. All supported builds are
        listed in the <strong>Supported Seasons</strong> section above.
      </p>
    ),
  },
  {
    q: "The game crashes when playing Terrorist Hunt or the Outbreak event with other players.",
    a: (
      <p>
        The order of operations matters here. Create the local custom game first
        and have other players join before selecting the game mode. Make sure
        everyone is on the <strong>blue team</strong> before starting.
      </p>
    ),
  },
];

export default function Liberator() {
  return (
    <>
      <Hero
        tag="Tools & Mods"
        corner="LIB"
        title={<em>Liberator</em>}
        description="Unlock all cosmetics and play additional game modes in older Rainbow Six Siege seasons."
      />

      <MethodSwitch />

      <SectionTitle>What is Liberator?</SectionTitle>
      <Prose>
        <p>
          Liberator unlocks extra possibilities in Rainbow Six Siege local
          custom games. It cannot be used to cheat on live servers, and never
          will be. This is a further development for Operation Throwback. The
          original developer was Gamecheat13.
        </p>
        <OnDownloader>
          <Callout variant="warning" label="// WARNING">
            Only download Liberator from an official source like the{" "}
            <ExternalLink href="https://github.com/Xeralin/Liberator">
              repository
            </ExternalLink>{" "}
            or the Operation Throwback Discord server. If you find it anywhere
            else, do not use it. We cannot verify its safety.
          </Callout>
        </OnDownloader>
      </Prose>

      <OnDownloader>
        <div className="mb-8">
          <DownloaderButton href="https://github.com/Xeralin/Liberator/releases/latest">
            Download Liberator
          </DownloaderButton>
        </div>
      </OnDownloader>

      <SectionTitle>How to Use Liberator</SectionTitle>
      <OnDownloader>
        <Prose>
          <h3>Installation</h3>
          <ol>
            <li>
              Download the <code>.exe</code> file from the{" "}
              <ExternalLink href="https://github.com/Xeralin/Liberator">
                official repository
              </ExternalLink>{" "}
              or the Operation Throwback Discord server
            </li>
            <li>
              Move the file into your R6S folder so Windows Security will not
              block it
            </li>
            <li>Run Liberator</li>
            <li>Launch the game and all cosmetics should be available</li>
          </ol>

          <h3>Custom game</h3>
          <ol>
            <li>Run Liberator first, before launching the game</li>
            <li>Create a local custom game</li>
            <li>
              Double-click the game mode in the Liberator menu — text appears at
              the bottom of the window if it worked
            </li>
            <li>
              If you want to play Terrorist Hunt or the Outbreak event, make
              sure you are on the <strong>blue team</strong>, then start the
              game
            </li>
          </ol>
        </Prose>
      </OnDownloader>
      <OnLauncher>
        <Prose>
          <h3>Enabling it</h3>
          <ol>
            <li>Open the Liberator page in the launcher</li>
            <li>Make sure Liberator is enabled</li>
            <li>Launch the game from the launcher</li>
          </ol>

          <h3>Custom game</h3>
          <ol>
            <li>
              Enable Liberator on its page <strong>before</strong> launching the
              game
            </li>
            <li>Create a local custom game</li>
            <li>
              Select the game mode in the <strong>Playlist</strong> tab on the
              Liberator page in the launcher — the selected mode is highlighted
            </li>
            <li>
              If you want to play Terrorist Hunt or the Outbreak event, make
              sure you are on the <strong>blue team</strong>, then start the
              game
            </li>
          </ol>
        </Prose>
      </OnLauncher>

      <SectionTitle>Supported Seasons</SectionTitle>
      <Prose>
        <div className="flex flex-wrap items-start gap-x-6">
          <SeasonTable rows={SUPPORTED_Y12} />
          <SeasonTable rows={SUPPORTED_Y34} showEvent />
          <SeasonTable caption="Unlock All" rows={UNLOCK_ALL_SEASONS} />
        </div>
      </Prose>

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FaqAccordion items={faqs} />
    </>
  );
}
