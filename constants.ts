import { GameInfo, DownloadOption, ScreenshotConfig } from './types';

export const GAME_INFO: GameInfo = {
  title: "Plants vs Zombies 2 (MOD, Unlimited Coins/Gems/Suns)",
  version: "12.7.1",
  platforms: ["Android", "iOS", "PC"],
  rating: "4.3",
  reviews: "1.6M+",
  downloads: "900M+",
  developer: "ELECTRONIC ARTS",
  updatedDate: "Feb 2025",
  size: "902 MB",
  iconUrl: "https://picsum.photos/seed/pvzicon/256/256" 
};

export const BREADCRUMBS = ["Home", "Games", "PvZ 2 MOD"];

export const SCREENSHOT_CONFIG: ScreenshotConfig = {
  title: "Screenshots",
  autoPlay: true,
  intervalSeconds: 4,
  images: [
    "https://picsum.photos/seed/pvzgame1/800/450",
    "https://picsum.photos/seed/pvzgame2/800/450",
    "https://picsum.photos/seed/pvzgame3/800/450",
    "https://picsum.photos/seed/pvzgame4/800/450"
  ]
};

export const KEY_FEATURES = [
  "Unlimited Coins: Purchase upgrades instantly.",
  "Unlimited Gems: Unlock premium items.",
  "Unlimited Suns: Create any plant instantly during battles.",
  "New Zombie Variants: Stronger and faster enemies.",
  "Custom MOD Enhancements: Improved balance and performance."
];

export const DOWNLOAD_OPTIONS: DownloadOption[] = [
  {
    title: "Download PvZ 2 MOD (Unlimited Coins/Gems/Suns)",
    version: "12.7.1",
    size: "902 MB",
    recommended: true,
    buttonText: "APK",
    link: "#"
  },
  {
    title: "Download Original PvZ 2",
    version: "12.7.1",
    size: "902 MB",
    recommended: false,
    buttonText: "APK",
    link: "#"
  }
];

export const SITE_NAME = "likomy.site";