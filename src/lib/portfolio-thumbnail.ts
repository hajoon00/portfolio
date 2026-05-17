import type { PortfolioCardItem } from "@/data";
import fs from "fs";
import path from "path";

const THUMBNAIL_AI_DIR = "/images/thumbnail-ai";

export type PortfolioThumbnailMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

/** Legacy video paths outside thumbnail-ai (e.g. nyangiverse render). */
const thumbnailVideoBySlug: Record<string, string> = {
  nyangiverse: "/images/nyangiverse/RENDER_3.mp4",
};

/** Slugs whose thumbnail-ai basename does not match `{slug}-thumbnail-ai.*` */
const thumbnailAiFileBySlug: Record<string, string> = {
  "superbowl-merch": "superbowl-thumbnail-ai",
  kapacity: "kapacity-thumbnail-ai",
  "reading-for-youhak": "rfy-thumbnail-ai",
  cdr: "cdr-thumbnail-ai",
};

const THUMBNAIL_AI_IMAGE_EXTENSIONS = [".png", ".webp", ".jpg", ".jpeg"] as const;
const THUMBNAIL_AI_VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"] as const;

function isVideoFile(fileName: string): boolean {
  return THUMBNAIL_AI_VIDEO_EXTENSIONS.some((ext) =>
    fileName.toLowerCase().endsWith(ext)
  );
}

function resolveThumbnailAiCandidates(slug: string): string[] {
  const baseName = thumbnailAiFileBySlug[slug] ?? `${slug}-thumbnail-ai`;

  if (baseName.includes(".")) {
    return [baseName];
  }

  return [
    ...THUMBNAIL_AI_VIDEO_EXTENSIONS.map((ext) => `${baseName}${ext}`),
    ...THUMBNAIL_AI_IMAGE_EXTENSIONS.map((ext) => `${baseName}${ext}`),
  ];
}

function findThumbnailAiMedia(slug: string): PortfolioThumbnailMedia | null {
  const publicDir = path.join(process.cwd(), "public", "images", "thumbnail-ai");

  for (const fileName of resolveThumbnailAiCandidates(slug)) {
    if (fs.existsSync(path.join(publicDir, fileName))) {
      const src = `${THUMBNAIL_AI_DIR}/${fileName}`;
      return isVideoFile(fileName)
        ? { type: "video", src }
        : { type: "image", src };
    }
  }

  return null;
}

export function getPortfolioThumbnail(item: PortfolioCardItem): string {
  const media = findThumbnailAiMedia(item.slug);
  if (media?.type === "image") return media.src;
  return item.imageUrl;
}

export function getPortfolioThumbnailMedia(
  item: PortfolioCardItem
): PortfolioThumbnailMedia {
  const thumbnailAi = findThumbnailAiMedia(item.slug);
  if (thumbnailAi) return thumbnailAi;

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
