import {
  graphicDesignProjects,
  homePortfolioSections,
  resolveHomePortfolioItem,
  resolvePortfolioItemBySlug,
  type PortfolioCardItem,
} from "@/data";
import {
  getPortfolioThumbnailMedia,
  type PortfolioThumbnailMedia,
} from "@/lib/portfolio-thumbnail";

export type FeaturedProject = {
  slug: string;
  title: string;
  hashtags: string[];
  year?: string;
  description?: string;
  href: string;
  thumbnail: PortfolioThumbnailMedia;
};

const homeFeaturedSlugs = new Set(["nyangiverse", "kapacity", "devflow"]);

const homeFeaturedOrder = ["nyangiverse", "kapacity", "devflow"] as const;

function extractYear(date?: string): string | undefined {
  if (!date) return undefined;
  const years = date.match(/\d{4}/g);
  if (!years?.length) return date;
  if (years.length === 1) return years[0];
  return `${years[0]}–${years[years.length - 1]}`;
}

function toFeatured(item: PortfolioCardItem): FeaturedProject {
  return {
    slug: item.slug,
    title: item.title,
    hashtags: item.hashtags ?? [],
    year: extractYear(item.date),
    description: item.description,
    href: item.href,
    thumbnail: getPortfolioThumbnailMedia(item),
  };
}

export function getFeaturedProjects(): FeaturedProject[] {
  return homeFeaturedOrder
    .map((slug) => {
      const item = resolvePortfolioItemBySlug(slug);
      return item ? toFeatured(item) : null;
    })
    .filter((p): p is FeaturedProject => p !== null);
}

export function getAdditionalHomeProjects(): FeaturedProject[] {
  const additional: FeaturedProject[] = [];

  for (const section of homePortfolioSections) {
    for (const ref of section.items) {
      const item = resolveHomePortfolioItem(ref);
      if (item && !homeFeaturedSlugs.has(item.slug)) {
        additional.push(toFeatured(item));
      }
    }
  }

  for (const item of graphicDesignProjects) {
    if (!homeFeaturedSlugs.has(item.slug)) {
      additional.push(toFeatured(item));
    }
  }

  return additional;
}
