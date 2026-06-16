const discordInvite = "r6s-operation-throwback-2-0-1092820800203141130";

export const site = {
  name: "Throwback FAQ",
  description:
    "Your guide to downloading, setting up, and playing older Rainbow Six Siege seasons.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://throwback-faq.example",
  ogImage: "/media/rb6-redcrow-teaser.webp",
  themeColor: "#c0152a",
  author: "AUTHORED BY OTB STAFF",
  version: "4.3.2",
  lastUpdated: "14th Jul 2026",
  discordInvite,
  discordUrl: `https://discord.gg/${discordInvite}`,
} as const;
