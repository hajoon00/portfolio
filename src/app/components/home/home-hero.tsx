import HomeHeroContent from "./home-hero-content";
import HomeHeroSpline from "./home-hero-spline";

export default function HomeHero() {
  return (
    <div className="bg-surface">
      <HomeHeroSpline />
      <HomeHeroContent />
    </div>
  );
}
