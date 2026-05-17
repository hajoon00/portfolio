import { resolvePortfolioItemBySlug } from "@/data";

export type ProjectMeta = {
  slug: string;
  title: string;
  date?: string;
  description?: string;
  hashtags?: string[];
};

export function getProjectMeta(slug: string): ProjectMeta | null {
  const item = resolvePortfolioItemBySlug(slug);
  if (!item) return null;

  return {
    slug: item.slug,
    title: item.title,
    date: item.date,
    description: item.description,
    hashtags: item.hashtags,
  };
}
