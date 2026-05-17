const JPEG_BASE = "/images/jpegs";

export type PortfolioImageBlock = { type: "image"; src: string };
export type PortfolioVideoBlock = { type: "video"; src: string };

/** Plain text between images — use for captions, context, or section notes. */
export type PortfolioTextBlock = {
  type: "text";
  body: string;
  size?: "narrow" | "wide";
};

/** In-page heading (optional — page header from data.ts is usually enough). */
export type PortfolioHeadingBlock = {
  type: "heading";
  title: string;
  body?: string;
};

export type PortfolioBlock =
  | PortfolioImageBlock
  | PortfolioVideoBlock
  | PortfolioTextBlock
  | PortfolioHeadingBlock;

/**
 * Gallery entry: image/video filename shorthand, absolute path, or a block object.
 *
 * @example
 * cdr: [
 *   { type: "text", body: "프로젝트 개요를 여기에 작성합니다." },
 *   "CDR01.jpg",
 *   "CDR02.jpg",
 * ]
 */
export type GalleryEntry = string | PortfolioBlock;

function fileToMediaBlock(file: string): PortfolioImageBlock | PortfolioVideoBlock {
  const isVideo = /\.(mp4|webm|mov)$/i.test(file);
  const isAbsolute = file.startsWith("/");

  if (isVideo) {
    return {
      type: "video",
      src: isAbsolute ? file : `/${file}`,
    };
  }

  return {
    type: "image",
    src: isAbsolute ? file : `${JPEG_BASE}/${file}`,
  };
}

function normalizeEntry(entry: GalleryEntry): PortfolioBlock {
  if (typeof entry === "string") {
    return fileToMediaBlock(entry);
  }
  return entry;
}

function normalizeGallery(entries: readonly GalleryEntry[]): PortfolioBlock[] {
  return entries.map(normalizeEntry);
}

/** Experience slugs replaced by JPEG enumeration. */
export const experienceJpegGalleries: Record<string, readonly GalleryEntry[]> = {
  cdr: ["CDR01.jpg", "CDR02.jpg", "CDR03.jpg", "CDR04.jpg", "CDR05.jpg"],
  "k-pensa": [
    "PENSA01.jpg",
    "PENSA02.jpg",
    "PENSA03.jpg",
    "PENSA04.jpg",
    "PENSA05.jpg",
    "PENSA06.jpg",
    "PENSA07.jpg",
    "PENSA08.jpg",
  ],
  "reading-for-youhak": ["RFY01.jpg", "RFY02.jpg", "RFY03.jpg"],
};

/** Merch slugs replaced by JPEG enumeration. */
export const merchJpegGalleries: Record<string, readonly GalleryEntry[]> = {
  "superbowl-merch": [
    "FAD01.jpg",
    "FAD02.jpg",
    "FAD03.jpg",
    "FAD04.jpg",
    "FAD05.jpg",
    "FAD06.jpg",
  ],
};

/** Graphic design slugs replaced by JPEG enumeration. */
export const graphicDesignJpegGalleries: Record<string, readonly GalleryEntry[]> = {
  nyangiverse: [
    "/images/nyangiverse/RENDER_3.mp4",
    "NYANG01.jpg",
    "NYANG02.jpg",
    "NYANG03.jpg",
    "NYANG04.jpg",
    "NYANG05.jpg",
    "NYANG06.jpg",
    "NYANG07.jpg",
    "NYANG08.jpg",
    "NYANG09.jpg",
    "NYANG10.jpg",
  ],
  kapacity: ["Kapacity.jpg", "Kapacity02.jpg", "Kapacity03.jpg"],
};

export function getExperienceJpegGallery(slug: string): PortfolioBlock[] | null {
  const entries = experienceJpegGalleries[slug];
  return entries ? normalizeGallery(entries) : null;
}

export function getMerchJpegGallery(slug: string): PortfolioBlock[] | null {
  const entries = merchJpegGalleries[slug];
  return entries ? normalizeGallery(entries) : null;
}

export function getGraphicDesignJpegGallery(
  slug: string
): PortfolioBlock[] | null {
  const entries = graphicDesignJpegGalleries[slug];
  return entries ? normalizeGallery(entries) : null;
}
