import {
  graphicDesignProjects,
  homePortfolioSections,
  resolveHomePortfolioItem,
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
  href: string;
  thumbnail: PortfolioThumbnailMedia;
};

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
    href: item.href,
    thumbnail: getPortfolioThumbnailMedia(item),
  };
}

export function getFeaturedProjects(): FeaturedProject[] {
  const projects: FeaturedProject[] = [];

  for (const section of homePortfolioSections) {
    for (const ref of section.items) {
      const item = resolveHomePortfolioItem(ref);
      if (item) projects.push(toFeatured(item, section.title));
    }
  }

  for (const item of graphicDesignProjects) {
    projects.push(toFeatured(item, "Graphic design"));
  }

  return projects;
}
