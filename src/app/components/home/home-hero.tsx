import HomeHeroContent from "./home-hero-content";
import HomeHeroScrollHint from "./home-hero-scroll-hint";
import HomeHeroSpline from "./home-hero-spline";

export default function HomeHero() {
  return (
    <div className="bg-surface">
      <div className="relative">
        <HomeHeroSpline />
        <HomeHeroScrollHint />
      </div>
      <HomeHeroContent />
    </div>
  );
}
