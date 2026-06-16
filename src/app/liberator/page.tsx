import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Callout } from "@/components/Callout";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { SeasonTable } from "@/components/SeasonTable";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ExternalLink } from "@/components/ExternalLink";
import { DownloaderButton } from "@/components/DownloaderButton";
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
    a: (
      <p>
        Move <code>Liberator.exe</code> directly into your R6S folder, which
        should already have an antivirus exclusion set up. If your browser
        blocks the download, temporarily disable browser protection to download
        it, then re-enable it afterward.
      </p>
    ),
  },
  {
    q: "Liberator is crashing the game, how do I fix it?",
    a: (
      <p>
        Make sure to launch Liberator <strong>before</strong> launching the
        game. If the game is still crashing, verify that it is fully closed,
        check Task Manager and end any remaining R6S processes before trying
        again.
      </p>
    ),
  },
  {
    q: "It says my build is unsupported, what does that mean?",
    a: (
      <p>
        Liberator only supports specific game builds. All supported builds are
        listed in the <strong>Supported seasons</strong> section above.
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

const supportSeasonsY12: [string, string, string][] = [
  ["Y1S0", "Vanilla", "8194013"],
  ["Y1S1", "Black Ice", "8519860"],
  ["Y1S2", "Dust Line", "9132097"],
  ["Y1S3", "Skull Rain", "9654076"],
  ["Y1S3", "Skull Rain", "9860556"],
  ["Y1S4", "Red Crow", "10211195"],
  ["Y2S1", "Velvet Shell", "10751226"],
  ["Y2S2", "Health", "11216230"],
  ["Y2S3", "Blood Orchid", "11432634"],
  ["Y2S3", "Blood Orchid", "11493221"],
  ["Y2S4", "White Noise", "11553121"],
  ["Y2S4", "White Noise", "11580709"],
];

const supportSeasonsY34: [string, string, string][] = [
  ["Y3S1", "Chimera", "11706399"],
  ["Y3S1", "Chimera (Outbreak)", "11726982"],
  ["Y3S2", "Para Bellum", "11938214"],
  ["Y3S2", "Para Bellum", "11965022"],
  ["Y3S3", "Grim Sky", "12213419"],
  ["Y3S3", "Grim Sky (Mad House)", "12362767"],
  ["Y3S4", "Wind Bastion", "12512571"],
  ["Y4S1", "Burnt Horizon (Rainbow is Magic)", "12815133"],
  ["Y4S1", "Burnt Horizon (Rainbow is Magic)", "12863847"],
  ["Y4S2", "Phantom Sight (Showdown)", "13147883"],
  ["Y4S3", "Ember Rise (Doktor's Curse / Money Heist)", "13632147"],
  ["Y4S4", "Shifting Tides (Road To S.I. 2020)", "13777760"],
  ["Y4S4", "Shifting Tides (Road To S.I. 2020)", "13924517"],
];

const unlockAllSeasons: [string, string, string][] = [
  ["Y5S3", "Shadow Legacy", "15018155"],
  ["Y5S4", "Neon Dawn", "15241382"],
  ["Y6S2", "North Star", "15701375"],
  ["Y7S2", "Vector Glare", "43489433"],
  ["Y7S4", "Solar Raid", "50497889"],
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

      <SectionTitle>What is Liberator?</SectionTitle>
      <Prose>
        <p>
          Liberator unlocks extra possibilities in Rainbow Six Siege local
          custom games. It cannot be used to cheat on live servers, and never
          will be.
        </p>
        <Callout variant="warning" label="// WARNING">
          Only download Liberator from an official source like the{" "}
          <ExternalLink href="https://github.com/Xeralin/Liberator">
            repository
          </ExternalLink>{" "}
          or the Operation Throwback Discord server. If you find it anywhere
          else, do not use it. We cannot verify its safety.
        </Callout>
      </Prose>

      <div className="mb-8">
        <DownloaderButton href="https://github.com/Xeralin/Liberator/releases/latest">
          → Download Liberator
        </DownloaderButton>
      </div>

      <SectionTitle>How to Use Liberator</SectionTitle>
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
          <li>Run the Liberator</li>
          <li>Launch the game and all cosmetics should be available</li>
        </ol>

        <h3>Custom game</h3>
        <ol>
          <li>Run the Liberator first, before launching the game</li>
          <li>Create a local custom game</li>
          <li>
            Double-click the game mode in the Liberator menu — text appears at
            the bottom of the window if it worked
          </li>
          <li>
            If you want to play Terrorist Hunt or the Outbreak event, make sure
            you are on the <strong>blue team</strong>, then start the game
          </li>
        </ol>
      </Prose>

      <SectionTitle>Supported seasons</SectionTitle>
      <Prose>
        <div className="flex flex-wrap items-start gap-x-6">
          <SeasonTable rows={supportSeasonsY12} />
          <SeasonTable rows={supportSeasonsY34} />
          <SeasonTable
            caption="Unlock All"
            className="self-end"
            rows={unlockAllSeasons}
          />
        </div>
      </Prose>

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FaqAccordion items={faqs} />
    </>
  );
}
