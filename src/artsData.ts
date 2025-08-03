// data/artsData.ts
export type CategoryKey = "digitalArt" | "rendered3d" | "handDrawing" | "copy";

export interface ArtSection {
  description: string;
  items: {
    src: string;
    alt: string;
    title: string;
    description: string;
    link?: string;
  }[];
}

export const arts: Record<CategoryKey, ArtSection> = {
  rendered3d: {
    description: "Maya를 활용한 3D 모델링과 렌더링 작업입니다. 건축물, 캐릭터, 오브젝트 등 다양한 주제로 3D 공간을 구축하고 시각화했습니다.",
    items: [
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
    ],
  },
  digitalArt: {
    description: "React, p5.js 등 다양한 디지털 도구를 활용한 인터랙티브 아트와 웹 기반 창작물입니다. 관심이 생기셨다면 링크를 클릭해보세요! 모바일에서는 조금 불편할 수 있습니다.",
    items: [
      {
        src: "/images/arts/digital/wordcloud.jpg",
        alt: "Wordcloud",
        title: "Wordcloud",
        description: "React app",
        link: "https://blue-in-pink.vercel.app/",
      },
      {
        src: "/images/arts/digital/DippinDots.gif",
        alt: "Dippin' Dots",
        title: "Dippin' Dots",
        description: "p5.js",
        link: "https://editor.p5js.org/hajoon00/full/aVsl3x4XF",
      },
    ],
  },
  handDrawing: {
    description: "Procreate를 활용한 디지털 드로잉 작업입니다. 제 개인적인 취향을 담았으니 온전히 느껴보세요.",
    items: [
      {
        src: "/images/arts/handDrawing/Fear.jpg",
        alt: "Fear",
        title: "호환",
        description: "Procreate",
      },
      {
        src: "/images/arts/handDrawing/Desert.jpg",
        alt: "Desert",
        title: "Desert",
        description: "Procreate",
      },
      {
        src: "/images/arts/handDrawing/Ocean.jpg",
        alt: "Ocean",
        title: "Ocean",
        description: "Procreate",
      },
      {
        src: "/images/arts/handDrawing/Tiger.jpg",
        alt: "Tiger I",
        title: "Tiger I",
        description: "Procreate",
      },
    ],
  },
  copy: {
    description: "기존의 명작들이나 실제 인물을 보고 그린 모작입니다. 원작자들에게 존경과 박수를.",
    items: [
      {
        src: "/images/arts/handDrawing/Thresh.jpg",
        alt: "Thresh",
        title: "Thresh",
        description: "Procreate",
      },
      {
        src: "/images/arts/handDrawing/Batman.jpg",
        alt: "Batman",
        title: "Batman",
        description: "Procreate",
      },
      {
        src: "/images/arts/handDrawing/Dr-Strange.jpg",
        alt: "Dr. Strange",
        title: "Dr. Strange",
        description: "Procreate",
      },
      {
        src: "/images/arts/handDrawing/Pulp-fiction.jpg",
        alt: "Pulp Fiction",
        title: "Pulp Fiction",
        description: "Procreate",
      },
      {
        src: "/images/arts/handDrawing/aespa-winter.jpg",
        alt: "Aespa Winter",
        title: "Aespa Winter",
        description: "Procreate",
      },
      {
        src: "/images/arts/handDrawing/upside-down.jpg",
        alt: "Upside Down",
        title: "Upside Down",
        description: "Procreate",
      },
    ],
  },
};
