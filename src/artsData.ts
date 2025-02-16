// data/artsData.ts
export type CategoryKey = "digitalArt" | "handDrawing" | "copy";

export const arts: Record<
  CategoryKey,
  {
    src: string;
    alt: string;
    title: string;
    description: string;
    link?: string;
  }[]
> = {
  digitalArt: [
    {
      src: "/arts/DippinDots.gif",
      alt: "Dippin' Dots",
      title: "Dippin' Dots",
      description: "Dippin' Dots",
      link: "https://editor.p5js.org/hajoon00/full/aVsl3x4XF",
    },
  ],
  handDrawing: [
    {
      src: "/arts/Desert.png",
      alt: "Desert",
      title: "Desert",
      description: "Desert",
    },
  ],
  copy: [
    {
      src: "/arts/Batman.png",
      alt: "Batman",
      title: "Batman",
      description: "Batman",
    },
  ],
};
