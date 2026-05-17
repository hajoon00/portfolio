import HomeHero from "@/app/components/home/home-hero";
import HomePage from "@/app/components/home/home-page";
import {
  getAdditionalHomeProjects,
  getFeaturedProjects,
} from "@/lib/featured-projects";

export default function Home() {
  const featured = getFeaturedProjects();
  const more = getAdditionalHomeProjects();

  return (
    <HomePage featured={featured} more={more} hero={<HomeHero />} />
  );
}
