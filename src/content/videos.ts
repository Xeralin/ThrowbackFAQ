import type { TagVariant } from "@/components/Tag";

export type VideoEntry = {
  videoId: string;
  title: string;
  by: string;
  description: string;
  tags: { label: string; variant?: TagVariant }[];
};

export const videos: VideoEntry[] = [
  {
    videoId: "HuzP-vYgBZU",
    title: "How to Download the Game",
    by: "AURALICY",
    description:
      "A step-by-step walkthrough on how to download an older season of R6S using the community downloader.",
    tags: [
      { label: "Getting Started", variant: "green" },
      { label: "Download" },
    ],
  },
];
