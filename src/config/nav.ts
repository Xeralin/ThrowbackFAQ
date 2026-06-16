type NavItem = { href: string; label: string; badge?: "WIP" };
type NavSection = { label: string; items: NavItem[] };

export const navSections: NavSection[] = [
  {
    label: "General",
    items: [
      { href: "/", label: "Home" },
      { href: "/getting-started", label: "Getting Started" },
    ],
  },
  {
    label: "Support",
    items: [
      { href: "/support", label: "Support Overview" },
      { href: "/common-errors", label: "Common Errors" },
      { href: "/antivirus", label: "Antivirus" },
      { href: "/multiplayer", label: "Multiplayer" },
      { href: "/how-to-get-help", label: "How To Get Help" },
      { href: "/video-guides", label: "Video Guides" },
    ],
  },
  {
    label: "Tools & Mods",
    items: [
      { href: "/tools", label: "Tools Overview" },
      { href: "/downloaders", label: "Downloaders" },
      { href: "/liberator", label: "Liberator" },
      { href: "/heated-metal", label: "Heated Metal" },
      { href: "/cheat-engine", label: "Cheat Engine" },
    ],
  },
  {
    label: "Community",
    items: [
      { href: "/community-servers", label: "Community Servers" },
      { href: "/extended-rules", label: "Extended Rules" },
      { href: "/credits", label: "Credits" },
    ],
  },
];

export const allRoutes: string[] = navSections.flatMap((section) =>
  section.items.map((item) => item.href),
);

const breadcrumbs: Record<string, string[]> = {
  "/": ["FAQ", "Home"],
  "/getting-started": ["FAQ", "Getting Started"],
  "/support": ["FAQ", "Support"],
  "/common-errors": ["FAQ", "Support", "Common Errors"],
  "/antivirus": ["FAQ", "Support", "Antivirus"],
  "/multiplayer": ["FAQ", "Support", "Multiplayer"],
  "/how-to-get-help": ["FAQ", "Support", "How To Get Help"],
  "/video-guides": ["FAQ", "Support", "Video Guides"],
  "/downloaders": ["FAQ", "Tools & Mods", "Downloaders"],
  "/tools": ["FAQ", "Tools & Mods", "Tools"],
  "/liberator": ["FAQ", "Tools & Mods", "Liberator"],
  "/heated-metal": ["FAQ", "Tools & Mods", "Heated Metal"],
  "/cheat-engine": ["FAQ", "Tools & Mods", "Cheat Engine"],
  "/community-servers": ["FAQ", "Community Servers"],
  "/extended-rules": ["FAQ", "Extended Rules"],
  "/credits": ["FAQ", "Credits"],
};

export function normalizePath(path: string): string {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function breadcrumbFor(path: string): string[] {
  return breadcrumbs[normalizePath(path)] ?? ["FAQ"];
}
