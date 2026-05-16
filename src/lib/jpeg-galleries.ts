const JPEG_BASE = "/images/jpegs";

export type PortfolioGalleryItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

function toGalleryItems(files: readonly string[]): PortfolioGalleryItem[] {
  return files.map((file) => {
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
  });
}

/** Experience slugs replaced by JPEG enumeration. */
export const experienceJpegGalleries: Record<string, readonly string[]> = {
  cdr: ["CDR01.jpg", "CDR02.jpg", "CDR03.jpg", "CDR04.jpg", "CDR05.jpg"],
  "k-pensa": [
    "PENSA01.jpg",
    "PENSA02.jpg",
    "PENSA03.jpg",
    "PENSA04.jpg",
    "PENSA05.jpg",
  ],
  "reading-for-youhak": ["RFY01.jpg", "RFY02.jpg", "RFY03.jpg"],
};

/** Merch slugs replaced by JPEG enumeration. */
export const merchJpegGalleries: Record<string, readonly string[]> = {
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
export const graphicDesignJpegGalleries: Record<string, readonly string[]> = {
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

export function getExperienceJpegGallery(
  slug: string
): PortfolioGalleryItem[] | null {
  const files = experienceJpegGalleries[slug];
  return files ? toGalleryItems(files) : null;
}

export function getMerchJpegGallery(slug: string): PortfolioGalleryItem[] | null {
  const files = merchJpegGalleries[slug];
  return files ? toGalleryItems(files) : null;
}

export function getGraphicDesignJpegGallery(
  slug: string
): PortfolioGalleryItem[] | null {
  const files = graphicDesignJpegGalleries[slug];
  return files ? toGalleryItems(files) : null;
}
