import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import {
  DownloaderCard,
  type DownloaderCardProps,
} from "@/components/DownloaderCard";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ContentImage } from "@/components/ContentImage";
import { ExternalLink } from "@/components/ExternalLink";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnWindows } from "@/components/OnWindows";
import { withBasePath } from "@/lib/asset";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Downloaders",
  description:
    "Choose a downloader to get an older season of Rainbow Six Siege. A Steam account with a valid license is required.",
  path: "/downloaders",
});

const launcher: DownloaderCardProps = {
  avatar: { src: "/media/discord-avatars/xeralin.webp", alt: "Xeralin" },
  title: "Xera's Launcher",
  os: [
    { src: "/media/others/windows.png", alt: "Windows", label: "Windows" },
    { src: "/media/others/steam.png", alt: "Linux", label: "Linux" },
  ],
  tags: [{ label: "Recommended", variant: "green" }, { label: "GUI" }],
  buttons: [
    {
      label: "Download",
      href: "https://github.com/Xeralin/ThrowbackLauncher/releases/latest",
    },
  ],
};

const jvav: DownloaderCardProps = {
  avatar: { src: "/media/discord-avatars/jvav.webp", alt: "JVAV" },
  title: "JVAV's Downloader",
  os: [
    {
      src: "/media/others/windows.png",
      alt: "Windows",
      label: "Windows",
    },
  ],
  tags: [{ label: "CLI" }],
  buttons: [
    {
      label: "Download",
      href: "https://github.com/JOJOVAV/r6-downloader/releases/latest",
    },
  ],
};

const faqs: FaqItem[] = [
  {
    q: "I do not own R6S on Steam. Can I use my Ubisoft or Epic Games account?",
    a: (
      <>
        <p>
          No. The downloaders use the Steam depot service to download old game
          seasons from the Steam servers. This requires a valid Steam account
          with a registered license for R6S. Ubisoft Connect and Epic Games
          accounts cannot be used to authenticate with the Steam servers.
        </p>
        <p>
          <strong>R6S is free on Steam</strong> — add it to your Steam library
          on its{" "}
          <ExternalLink href="https://store.steampowered.com/app/359550/">
            store page
          </ExternalLink>{" "}
          and the downloaders will work.
        </p>
      </>
    ),
  },
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
    method: "launcher",
    a: (
      <>
        <p>
          Edit the <strong>Username</strong> field in the launcher Settings (max
          16 characters). The change is saved automatically.
        </p>
        <p className="note">
          Set your username before launching the game so it applies in-game.
        </p>
      </>
    ),
  },
  {
    q: "How do I change my username?",
    method: "downloader",
    a: (
      <>
        <p>
          Your username is stored in <code>Config.toml</code> in your season
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
    method: "launcher",
    a: (
      <p>
        On an installed season the <strong>Manage</strong> tab shows a{" "}
        <strong>Verify</strong> button. It checks for missing or corrupted files
        and re-downloads them, repairing the install in place without deleting
        your existing files.
      </p>
    ),
  },
  {
    q: "What does the verify option do?",
    method: "downloader",
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
    method: "downloader",
    a: (
      <>
        <ol>
          <li>
            Download the latest crack ZIP from the official{" "}
            <ExternalLink href="https://github.com/Xeralin/ThrowbackLoader/releases/latest">
              repository
            </ExternalLink>
          </li>
          <li>
            Extract the ZIP — it contains crack files compatible with all
            seasons
          </li>
          <li>
            Copy the contents into your season folder and replace any existing
            files when prompted
          </li>
        </ol>
        <p className="note">
          The current ThrowbackLoader launches the game through{" "}
          <code>LaunchR6.exe</code>.
        </p>
      </>
    ),
  },
  {
    q: "Can I pause and resume the download?",
    method: "launcher",
    a: (
      <p>
        Yes. Press <strong>Pause</strong> at any point. When you come back to
        the same season, the button shows <strong>Continue download</strong> —
        the launcher verifies what you already have and resumes from where it
        left off. If you close the launcher during a download, it resumes
        automatically the next time you start it.
      </p>
    ),
  },
  {
    q: "Can I pause and resume the download?",
    method: "downloader",
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
    method: "launcher",
    a: (
      <>
        <p>
          Most errors during download do not affect the final result and can be
          ignored. These specific errors have known causes.
        </p>
        <ul>
          <li>
            <strong>Encountered error downloading chunk</strong> — Safe to
            ignore. The Steam servers were briefly unreachable and the launcher
            retries automatically
          </li>
          <li>
            <strong>Depot is not available</strong> — You do not own R6S on
            Steam
          </li>
          <li>
            <strong>Failed to allocate file</strong> — Free up storage space on
            the install drive
          </li>
          <li>
            <strong>The process cannot access the file</strong> — Close any
            program that might be interfering, such as
            <OnWindows> your antivirus or</OnWindows> another game instance
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "I am getting errors while downloading. What should I do?",
    method: "downloader",
    a: (
      <>
        <p>
          Most errors during download do not affect the final result and can be
          ignored. These specific errors have known causes.
        </p>
        <ul>
          <li>
            <strong>Encountered error downloading chunk</strong> — Safe to
            ignore. The Steam servers were briefly unreachable and the
            downloader retries automatically
          </li>
          <li>
            <strong>Depot is not available</strong> — You do not own R6S on
            Steam, or you need to use the SKU RUS option
          </li>
          <li>
            <strong>Failed to allocate file</strong> — Free up storage space or
            move the downloader to a different drive
          </li>
          <li>
            <strong>The process cannot access the file</strong> — Close any
            program that might be interfering, such as your antivirus or another
            game instance
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How do I install the game to a different drive?",
    method: "launcher",
    a: (
      <>
        <p>
          Seasons install into libraries — folders that can live on any drive.
          Open the launcher Settings, press <strong>Add library</strong> to add
          a folder, and use the star to make it the default. When more than one
          library exists, the launcher asks which one to use before each
          download.
        </p>
        <p className="note">
          If you are low on space, check <strong>Disk usage</strong> in the
          launcher Settings and press <strong>Clear</strong> under{" "}
          <strong>Download cache</strong> there to reclaim room.
        </p>
      </>
    ),
  },
  {
    q: "How do I install the game to a different drive?",
    method: "downloader",
    a: (
      <>
        <p>
          Move the downloader to the desired location before downloading — the
          game files are stored next to it.
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
    method: "launcher",
    a: (
      <p>
        Open the season in the launcher, switch to the <strong>Manage</strong>{" "}
        tab, and press <strong>Uninstall</strong>. The launcher removes the
        season files for you. If the game is still running, close it first.
      </p>
    ),
  },
  {
    q: "How do I delete a game season?",
    method: "downloader",
    a: (
      <p>
        Delete the season folder. If the game is still running in the
        background, close it first — on Windows via Task Manager.
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
    method: "downloader",
    a: (
      <p>
        Not necessarily. The progress bar only updates when an individual file
        finishes downloading, and some files are very large. Open Task Manager
        and check whether the downloader or <strong>.NET Host</strong> is using
        network bandwidth. If so, the download is still active.
      </p>
    ),
  },
  {
    q: "What is SKU RUS and do I need it?",
    method: "downloader",
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
            <code>localization.lang</code>
          </a>{" "}
          file and place it in your season folder.
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

      <SectionTitle>Available Downloaders</SectionTitle>
      <DownloaderCard {...launcher} />
      <DownloaderCard {...jvav} />

      <MethodSwitch />
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FaqAccordion items={faqs} />
    </>
  );
}
