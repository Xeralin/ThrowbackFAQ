import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
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
    a: (
      <>
        <p>
          Some antivirus programs flag game files as false positives. The fix is
          to add your R6S folder as an exclusion. For Windows Security:
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
          <li>Restart your PC and try launching the game again</li>
        </ol>
        <p className="note">
          If the issue persists, make sure the exclusion is still in place, then
          run the downloader again to verify and re-download any removed files.
        </p>
      </>
    ),
  },
  {
    q: "My antivirus deleted a game file. How do I get it back?",
    a: (
      <ol>
        <li>Add your R6S folder as an exclusion in your antivirus settings</li>
        <li>
          Run the downloader again to verify and re-download any missing files
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
          around this:
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
          Only download files from the official Operation Throwback Discord
          server.
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
          You need to add your R6S folder as an exclusion. The exact steps vary
          by product, but look for an <strong>Exclusions</strong>,{" "}
          <strong>Exceptions</strong>, or <strong>Whitelist</strong> section in
          your antivirus settings.
        </p>
        <p>
          If you are unsure how to do it for your specific antivirus, search for
          “[your antivirus name] add folder exclusion” for instructions on the
          internet.
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
      <FaqAccordion items={faqs} />
    </>
  );
}
