import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Compass, Shield, Swords, Users, Zap } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Boxes, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "units", path: "/units", icon: Shield, isContentType: true },
  { key: "progression", path: "/progression", icon: Zap, isContentType: true },
  { key: "release", path: "/release", icon: Compass, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
