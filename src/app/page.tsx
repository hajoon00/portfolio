import HomeHero from "@/app/components/home/home-hero";
import HomePage from "@/app/components/home/home-page";
import { getFeaturedProjects } from "@/lib/featured-projects";

export default function Home() {
  const projects = getFeaturedProjects();

  return <HomePage projects={projects} hero={<HomeHero />} />;
}
