import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnLauncher } from "@/components/OnLauncher";
import { OnDownloader } from "@/components/OnDownloader";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Antivirus",
  description:
    "Common antivirus issues and how to resolve them, including false-positive detections.",
  path: "/antivirus",
});

const faqs: FaqItem[] = [
  {
    q: "My antivirus is blocking the game. What should I do?",
    method: "launcher",
    a: (
      <>
        <p>
          Some antivirus programs flag game files as false positives. Liberator,
          Heated Metal, and the launcher itself are common targets. The fix is
          to add both your library folder and the launcher install folder as
          exclusions. For Windows Security, follow these steps.
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
            <strong>Folder</strong>, and choose your library folder, then repeat
            for the launcher install folder at{" "}
            <code>%LOCALAPPDATA%\ThrowbackLauncher</code>
          </li>
          <li>Restart your machine and try launching the game again</li>
        </ol>
        <p className="note">
          Use <strong>Verify</strong> in the launcher to restore removed game
          files.
        </p>
      </>
    ),
  },
  {
    q: "My antivirus is blocking the game. What should I do?",
    method: "downloader",
    a: (
      <>
        <p>
          Some antivirus programs flag game files as false positives.
          ThrowbackLoader, Liberator, and Heated Metal are common targets. The
          fix is to add your R6S folder as an exclusion. For Windows Security,
          follow these steps.
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
          <li>Restart your machine and try launching the game again</li>
        </ol>
        <p className="note">
          If the issue persists, make sure the exclusion is still in place, then
          run the downloader again to verify and re-download any removed files.
        </p>
      </>
    ),
  },
  {
    q: "Why does my antivirus delete Heated Metal?",
    method: "launcher",
    a: (
      <>
        <p>
          Heated Metal is frequently flagged as a false positive by Windows
          Security and other antivirus software. The files are removed
          automatically while they download, which makes the setup fail.
        </p>
        <p>
          An exclusion does not restore files that were already removed, so the
          order matters.
        </p>
        <ol>
          <li>
            Add both your library folder and the launcher install folder as
            exclusions first, using{" "}
            <Link href="#my-antivirus-is-blocking-the-game-what-should-i-do">
              the steps above
            </Link>
          </li>
          <li>
            Clear the download cache in the launcher Settings so the flagged
            Heated Metal files are fetched fresh instead of reused
          </li>
          <li>
            Download the season again and choose <strong>Heated Metal</strong>{" "}
            in the dialog to restore the files
          </li>
        </ol>
      </>
    ),
  },
  {
    q: "Why does my antivirus delete Heated Metal?",
    method: "downloader",
    a: (
      <>
        <p>
          Heated Metal is frequently flagged as a false positive by Windows
          Security and other antivirus software. The files are removed
          automatically while they download, which makes the setup fail.
        </p>
        <p>
          An exclusion does not restore files that were already removed, so the
          order matters.
        </p>
        <ol>
          <li>
            Add your R6S folder as an exclusion first, using the steps above
          </li>
          <li>
            Download Heated Metal again by following the installation steps on
            the <Link href="/heated-metal">Heated Metal page</Link>
          </li>
        </ol>
      </>
    ),
  },
  {
    q: "My antivirus deleted a game file. How do I get it back?",
    method: "launcher",
    a: (
      <ol>
        <li>
          Add both your library folder and the launcher install folder as
          exclusions in your antivirus settings
        </li>
        <li>
          If the file was part of Heated Metal, clear the download cache in the
          launcher Settings so the flagged files are not reused
        </li>
        <li>
          Use <strong>Verify</strong> in the launcher to restore the files, or
          download the season again and choose <strong>Heated Metal</strong> in
          the dialog if the file was part of Heated Metal
        </li>
      </ol>
    ),
  },
  {
    q: "My antivirus deleted a game file. How do I get it back?",
    method: "downloader",
    a: (
      <ol>
        <li>Add your R6S folder as an exclusion in your antivirus settings</li>
        <li>
          Run the downloader again to verify and re-download any missing files
        </li>
        <li>
          If the file was part of Heated Metal, download Heated Metal again
          after setting the exclusion
        </li>
      </ol>
    ),
  },
  {
    q: "My browser is blocking the download. What do I do?",
    a: (
      <>
        <p>
          Some browsers block downloads that contain executable files. To get
          around this, follow the steps for your browser.
        </p>
        <ul>
          <li>
            <strong>Chrome</strong> — Click the arrow next to the blocked
            download and select <strong>Keep</strong>
          </li>
          <li>
            <strong>Edge</strong> — Click the three dots next to the blocked
            item and select <strong>Keep</strong>
          </li>
          <li>
            <strong>Firefox</strong> — Click the download in the toolbar and
            select <strong>Allow</strong>
          </li>
        </ul>
        <p>
          If that does not work, temporarily disable the enhanced security or
          download protection in your browser, download the file, then re-enable
          it afterwards.
        </p>
        <p className="note">
          Only download files from the official GitHub repositories or the
          Operation Throwback Discord server.
        </p>
      </>
    ),
  },
  {
    q: "I use a third-party antivirus. Does the same apply?",
    a: (
      <>
        <p>
          Yes. The process is essentially the same for all antivirus software.
          You need to add{" "}
          <OnDownloader>your R6S folder as an exclusion</OnDownloader>
          <OnLauncher>
            your library and launcher install folders as exclusions
          </OnLauncher>
          . The exact steps vary by product, but look for an{" "}
          <strong>Exclusions</strong>, <strong>Exceptions</strong>, or{" "}
          <strong>Whitelist</strong> section in your antivirus settings.
        </p>
        <p>
          If you are unsure how to do it for your antivirus, search the internet
          for <code>[your antivirus name] add folder exclusion</code>.
        </p>
      </>
    ),
  },
];

export default function Antivirus() {
  return (
    <>
      <Hero
        tag="Troubleshooting"
        corner="AV"
        title={<em>Antivirus</em>}
        description="Common antivirus issues and how to resolve them, including false-positive detections."
      />
      <MethodSwitch />
      <FaqAccordion items={faqs} />
    </>
  );
}
