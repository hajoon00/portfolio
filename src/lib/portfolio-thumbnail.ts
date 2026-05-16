import type { PortfolioCardItem } from "@/data";
import fs from "fs";
import path from "path";

const THUMBNAIL_AI_DIR = "/images/thumbnail-ai";

export type PortfolioThumbnailMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

/** Project grid thumbnails that use video instead of a still image. */
const thumbnailVideoBySlug: Record<string, string> = {
  nyangiverse: "/images/nyangiverse/RENDER_3.mp4",
};

/** Slugs whose thumbnail-ai filename does not match `{slug}-thumbnail-ai.*` */
const thumbnailAiFileBySlug: Record<string, string> = {
  "superbowl-merch": "superbowl-thumbnail-ai.png",
  kapacity: "kapacity-thumbnail-ai.png",
  "reading-for-youhak": "rfy-thumbnail-ai.png",
};

const THUMBNAIL_AI_EXTENSIONS = [".png", ".webp", ".jpg", ".jpeg"] as const;

function resolveThumbnailAiCandidates(slug: string): string[] {
  const baseName = thumbnailAiFileBySlug[slug] ?? `${slug}-thumbnail-ai`;

  if (baseName.includes(".")) {
    return [baseName];
  }

  return THUMBNAIL_AI_EXTENSIONS.map((ext) => `${baseName}${ext}`);
}

function findThumbnailAiPath(slug: string): string | null {
  const publicDir = path.join(process.cwd(), "public", "images", "thumbnail-ai");

  for (const fileName of resolveThumbnailAiCandidates(slug)) {
    if (fs.existsSync(path.join(publicDir, fileName))) {
      return `${THUMBNAIL_AI_DIR}/${fileName}`;
    }
  }

  return null;
}

export function getPortfolioThumbnail(item: PortfolioCardItem): string {
  return findThumbnailAiPath(item.slug) ?? item.imageUrl;
}

export function getPortfolioThumbnailMedia(
  item: PortfolioCardItem
): PortfolioThumbnailMedia {
  const videoSrc = thumbnailVideoBySlug[item.slug];
  if (videoSrc) {
    const videoPath = path.join(
      process.cwd(),
      "public",
      videoSrc.replace(/^\//, "")
    );
    if (fs.existsSync(videoPath)) {
      return { type: "video", src: videoSrc };
    }
  }

  return { type: "image", src: getPortfolioThumbnail(item) };
}
