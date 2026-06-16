import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Callout } from "@/components/Callout";
import { SectionTitle } from "@/components/SectionTitle";
import {
  DownloaderCard,
  type DownloaderCardProps,
} from "@/components/DownloaderCard";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ContentImage } from "@/components/ContentImage";
import { ExternalLink } from "@/components/ExternalLink";
import { withBasePath } from "@/lib/asset";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Downloaders",
  description:
    "Choose a downloader to get an older season of Rainbow Six Siege. A Steam account with a valid license is required.",
  path: "/downloaders",
});

const recommended: DownloaderCardProps = {
  avatar: { src: "/media/discord-avatars/jvav.webp", alt: "JVAV" },
  title: "JVAV's Downloader",
  os: {
    src: "/media/others/windows.png",
    alt: "Windows",
    label: "Windows",
  },
  tags: [
    { label: "Batchfile", color: "#c0f032" },
    { label: "PowerShell", color: "#062957" },
  ],
  buttons: [
    {
      label: "→ Download",
      href: "https://github.com/JOJOVAV/r6-downloader/releases/latest",
    },
  ],
};

const xera: DownloaderCardProps = {
  avatar: { src: "/media/discord-avatars/xeralin.webp", alt: "Xeralin" },
  title: "Xera's Downloader",
  os: { src: "/media/others/steam.png", alt: "Steam", label: "Linux" },
  tags: [
    { label: "Python", color: "#3872a4" },
  ],
  buttons: [
    {
      label: "→ Download",
      href: "https://github.com/Xeralin/Downloader/releases/latest",
    },
  ],
};

const faqs: FaqItem[] = [
  {
    q: "Are the downloaders trojans or malware?",
    a: (
      <p>
        No. Your antivirus may flag them because they are not signed by a
        verified developer, since obtaining a code-signing certificate requires
        a significant financial investment. If you have concerns, the source
        code for each downloader is available in its repository for review.
      </p>
    ),
  },
  {
    q: "Why do the downloaders need my Steam login?",
    a: (
      <>
        <p>
          Your credentials are required to access the Steam depot servers, which
          is where the old game files are stored. Each downloader uses{" "}
          <ExternalLink href="https://github.com/SteamRE/DepotDownloader">
            DepotDownloader
          </ExternalLink>
          , an open-source tool.
        </p>
        <p className="note">
          Your password is never stored — DepotDownloader keeps only an
          encrypted access token, just like the Steam client.
        </p>
      </>
    ),
  },
  {
    q: "How do I change my username?",
    a: (
      <>
        <p>
          Your username is stored in <code>Username.toml</code> in your R6S
          folder. Open it and edit the <code>username</code> field (max 16
          characters).
        </p>
        <p>
          On an older ThrowbackLoader version, this file is named{" "}
          <code>ThrowbackLoader.toml</code> instead. Edit the same{" "}
          <code>username</code> field there.
        </p>
        <p className="note">
          Make sure to save the file before launching the game.
        </p>
      </>
    ),
  },
  {
    q: "What does the verify option do?",
    a: (
      <p>
        Verifying checks for missing or corrupted files and re-downloads
        anything that needs fixing. Run the downloader again for the same season
        without deleting your existing files, and it will handle the rest
        automatically.
      </p>
    ),
  },
  {
    q: "How do I replace the crack files?",
    a: (
      <ol>
        <li>
          Download the latest crack ZIP from the official{" "}
          <ExternalLink href="https://github.com/Xeralin/ThrowbackLoader/releases/latest">
            repository
          </ExternalLink>
        </li>
        <li>
          Extract the ZIP — it contains crack files compatible with all seasons
        </li>
        <li>
          Copy the contents into your season folder and replace any existing
          files when prompted
        </li>
      </ol>
    ),
  },
  {
    q: "Can I pause and resume the download?",
    a: (
      <p>
        Yes. Simply close the downloader at any point. When you reopen it and
        select the same season, it will verify existing files and continue from
        where it left off.
      </p>
    ),
  },
  {
    q: "I am getting errors while downloading. What should I do?",
    a: (
      <>
        <p>
          Most errors during download do not affect the final result and can be
          ignored. For specific errors:
        </p>
        <ul>
          <li>
            <strong>Encountered error downloading chunk XXXXXX</strong> — Safe
            to ignore. The Steam servers were briefly unreachable and the
            downloader retries automatically
          </li>
          <li>
            <strong>Depot XXXXX is not available</strong> — You do not own R6S
            on Steam, or you need to use the SKU RUS option
          </li>
          <li>
            <strong>Failed to allocate file</strong> — Free up storage space or
            move the downloader to a different drive
          </li>
          <li>
            <strong>Another process is using XXX</strong> — Close any program
            that might be interfering, such as your antivirus or another game
            instance
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How do I install the game to a different drive?",
    a: (
      <>
        <p>
          Move the downloader to the desired location in File Explorer before
          downloading.
        </p>
        <p className="note">
          Remember to update your antivirus exclusion to point to the new
          folder.
        </p>
      </>
    ),
  },
  {
    q: "How do I delete a game season?",
    a: (
      <p>
        Delete the season folder from File Explorer. If the game is running in
        the background, close it via Task Manager first.
      </p>
    ),
  },
  {
    q: "Do I need the current season of R6S installed?",
    a: (
      <p>
        No. Each downloaded season is completely independent and runs on its
        own, like a separate game.
      </p>
    ),
  },
  {
    q: "My download is stuck at a certain percentage. Is it broken?",
    a: (
      <p>
        Not necessarily. The progress bar only updates when an individual file
        finishes downloading, and some files are very large. Open Task Manager
        and check whether the downloader or <strong>.Net Host</strong> is using
        network bandwidth. If so, the download is still active.
      </p>
    ),
  },
  {
    q: "What is SKU RUS and do I need it?",
    a: (
      <>
        <p>
          Some Steam accounts from post-USSR countries require a different
          regional version of the game. If your account is from one of the
          affected regions (shown in the image below), you need to select the
          SKU RUS option when downloading.
        </p>
        <p>
          The SKU RUS version is in Russian by default. To change the language,
          download the{" "}
          <a
            href={withBasePath("/downloads/localization.lang")}
            download="localization.lang"
          >
            localization.lang
          </a>{" "}
          file and place it in your R6S folder.
        </p>
        <ContentImage
          src="/media/others/sku-rus.avif"
          alt="SKU RUS regions map"
          width={768}
          height={112}
        />
      </>
    ),
  },
];

export default function Downloaders() {
  return (
    <>
      <Hero
        tag="Tools & Mods"
        corner="DL"
        title={<em>Downloaders</em>}
        description="Choose a downloader to get an older season of Rainbow Six Siege. A Steam account with a valid license is required."
      />

      <Callout label="// NOTE">
        The downloaders below are currently being maintained. For detailed
        instructions, follow the{" "}
        <Link href="/getting-started">Getting Started</Link> guide.
      </Callout>

      <SectionTitle>Available Downloaders</SectionTitle>
      <DownloaderCard {...recommended} />
      <DownloaderCard {...xera} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FaqAccordion items={faqs} />
    </>
  );
}
