import Spline from "@splinetool/react-spline/next";

const SCENE_URL =
  "https://prod.spline.design/PZP85XDXDmUgRpTF/scene.splinecode";

export default async function HomeHeroSpline() {
  return (
    <section className="relative h-svh w-full bg-surface">
      <Spline
        scene={SCENE_URL}
        className="h-full w-full [&_canvas]:cursor-grab active:[&_canvas]:cursor-grabbing"
      />
    </section>
  );
}
