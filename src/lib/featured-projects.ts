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
  category: string;
  year?: string;
  description?: string;
  href: string;
  thumbnail: PortfolioThumbnailMedia;
};

const homeFeaturedSlugs = new Set(["nyangiverse", "kapacity", "devflow"]);

const homeFeaturedOrder = [
  { slug: "nyangiverse", category: "Graphic design" },
  { slug: "kapacity", category: "Graphic design" },
  { slug: "devflow", category: "Product design" },
] as const;

function extractYear(date?: string): string | undefined {
  if (!date) return undefined;
  const years = date.match(/\d{4}/g);
  if (!years?.length) return date;
  if (years.length === 1) return years[0];
  return `${years[0]}–${years[years.length - 1]}`;
}

function toFeatured(
  item: PortfolioCardItem,
  category: string
): FeaturedProject {
  return {
    slug: item.slug,
    title: item.title,
    category,
    year: extractYear(item.date),
    description: item.description,
    href: item.href,
    thumbnail: getPortfolioThumbnailMedia(item),
  };
}

export function getFeaturedProjects(): FeaturedProject[] {
  return homeFeaturedOrder
    .map(({ slug, category }) => {
      const item = resolvePortfolioItemBySlug(slug);
      return item ? toFeatured(item, category) : null;
    })
    .filter((p): p is FeaturedProject => p !== null);
}

export function getAdditionalHomeProjects(): FeaturedProject[] {
  const additional: FeaturedProject[] = [];

  for (const section of homePortfolioSections) {
    for (const ref of section.items) {
      const item = resolveHomePortfolioItem(ref);
      if (item && !homeFeaturedSlugs.has(item.slug)) {
        additional.push(toFeatured(item, section.title));
      }
    }
  }

  for (const item of graphicDesignProjects) {
    if (!homeFeaturedSlugs.has(item.slug)) {
      additional.push(toFeatured(item, "Graphic design"));
    }
  }

  return additional;
}
