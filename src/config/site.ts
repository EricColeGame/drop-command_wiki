export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Drop Command Wiki",
  shortName: "Drop Command",
  logoText: "DC",
  tagline: "Guides, Strategies, Units & Campaign Walkthroughs",
  description: "Your ultimate guide to Drop Command! Explore beginner guides, unit roles, mech builds, campaign strategies, missions, controls, and progression tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://drop-command.wiki",
  supportEmail: "support@drop-command.wiki",
  gameUrl: "https://store.steampowered.com/app/1944880/Drop_Command/",
  heroVideoId: "9bHV2Mm_BOE", // Drop Command - 2026 Launch Trailer (PillBugGames)
  social: {
    discord: "https://discord.com/game/drop-command-1519190537968549889",
    youtube: "https://www.youtube.com/@PillBugGames",
  },
  locales: ["en", "de", "es", "fr"],
  defaultLocale: "en",
};
