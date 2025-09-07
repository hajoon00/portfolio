// data/artsData.ts
export interface ArtItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  link?: string;
  isInteractive?: boolean;
}

export const arts: ArtItem[] = [
  // 디지털 아트 (맨 위로)
  {
    src: "/images/arts/digital/wordcloud.jpg",
    alt: "Wordcloud",
    title: "Wordcloud",
    description: "React app",
    link: "https://blue-in-pink.vercel.app/",
    isInteractive: true,
  },
  {
    src: "/images/arts/digital/DippinDots.gif",
    alt: "Dippin' Dots",
    title: "Dippin' Dots",
    description: "p5.js",
    link: "https://editor.p5js.org/hajoon00/full/aVsl3x4XF",
    isInteractive: true,
  },
  // 3D 모델링
  {
    src: "/images/arts/Batcave.jpg",
    alt: "Batcave",
    title: "Batcave",
    description: "MAYA",
  },
  {
    src: "/images/arts/Gryffindor.jpg",
    alt: "Gryffindor",
    title: "Gryffindor",
    description: "MAYA",
  },
  {
    src: "/images/arts/Elan_Fullshot.jpg",
    alt: "Elan_fullshot",
    title: "Elan Fullshot",
    description: "MAYA",
  },
  {
    src: "/images/arts/Elan_Interior.jpg",
    alt: "Elan_interior",
    title: "Elan Interior",
    description: "MAYA",
  },
  {
    src: "/images/arts/Hanok_Semi_Final.jpg",
    alt: "Hanok",
    title: "Hanok",
    description: "MAYA",
  },
  {
    src: "/images/arts/spoon.jpg",
    alt: "spoon",
    title: "spoon",
    description: "MAYA",
  },
  // 손그림
  {
    src: "/images/arts/handdrawing/Fear.jpg",
    alt: "Fear",
    title: "호환",
    description: "Procreate",
  },
  {
    src: "/images/arts/handdrawing/Desert.jpg",
    alt: "Desert",
    title: "Desert",
    description: "Procreate",
  },
  {
    src: "/images/arts/handdrawing/Ocean.jpg",
    alt: "Ocean",
    title: "Ocean",
    description: "Procreate",
  },
  {
    src: "/images/arts/handdrawing/Tiger.jpg",
    alt: "Tiger I",
    title: "Tiger I",
    description: "Procreate",
  },
  // 모작
  {
    src: "/images/arts/handdrawing/Thresh.jpg",
    alt: "Thresh",
    title: "Thresh",
    description: "Procreate",
  },
  {
    src: "/images/arts/handdrawing/Batman.jpg",
    alt: "Batman",
    title: "Batman",
    description: "Procreate",
  },
  {
    src: "/images/arts/handdrawing/Dr-strange.jpg",
    alt: "Dr. Strange",
    title: "Dr. Strange",
    description: "Procreate",
  },
  {
    src: "/images/arts/handdrawing/Pulp-fiction.jpg",
    alt: "Pulp Fiction",
    title: "Pulp Fiction",
    description: "Procreate",
  },
  {
    src: "/images/arts/handdrawing/aespa-winter.jpg",
    alt: "Aespa Winter",
    title: "Aespa Winter",
    description: "Procreate",
  },
  {
    src: "/images/arts/handdrawing/upside-down.jpg",
    alt: "Upside Down",
    title: "Upside Down",
    description: "Procreate",
  },
];
