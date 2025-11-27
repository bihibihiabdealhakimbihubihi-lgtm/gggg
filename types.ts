export interface GameInfo {
  title: string;
  version: string;
  platforms: string[];
  rating: string;
  reviews: string;
  downloads: string;
  developer: string;
  updatedDate: string;
  size: string;
  iconUrl: string;
}

export interface DownloadOption {
  title: string;
  version: string;
  size: string;
  recommended: boolean;
  buttonText: string;
  link: string;
}

export interface ScreenshotConfig {
  title: string;
  autoPlay: boolean;
  intervalSeconds: number;
  images: string[];
}