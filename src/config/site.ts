const discordInvite = "yxpT6EChgr";

export const site = {
  name: "Throwback FAQ",
  description:
    "Your guide to downloading, setting up, and playing older Rainbow Six Siege seasons.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://throwback-faq.example",
  ogImage: "/media/rb6-redcrow-teaser.png",
  themeColor: "#c0152a",
  author: "AUTHORED BY OTB STAFF",
  version: "4.3.1",
  lastUpdated: "22nd Jun 2026",
  discordInvite,
  discordUrl: `https://discord.gg/${discordInvite}`,
} as const;
