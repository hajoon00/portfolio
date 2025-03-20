// data/artsData.ts
export type CategoryKey = "digitalArt" | "rendered3d" | "handDrawing" | "copy";

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
  rendered3d: [
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
  handDrawing: [
    {
      src: "/images/arts/handDrawing/Fear.jpg",
      alt: "Elan_fullshot",
      title: "호환",
      description: "MAYA",
      
    },
    {
      src: "/images/arts/handDrawing/Desert.jpg",
      alt: "Elan_fullshot",
      title: "호환",
      description: "MAYA",
      
    },
    {
      src: "/images/arts/handDrawing/Ocean.jpg",
      alt: "Elan_fullshot",
      title: "호환",
      description: "MAYA",
      
    },
    {
      src: "/images/arts/handDrawing/Tiger.jpg",
      alt: "Elan_fullshot",
      title: "호환",
      description: "MAYA",
      
    },
  ],
  copy: [
    {
      src: "/images/arts/handDrawing/Thresh.jpg",
      alt: "Elan_fullshot",
      title: "Elan Fullshot",
      description: "MAYA",
      
    },
    {
      src: "/images/arts/handDrawing/Batman.jpg",
      alt: "Elan_fullshot",
      title: "Elan Fullshot",
      description: "MAYA",
    },  
    {
      src: "/images/arts/handDrawing/Dr-Strange.jpg",
      alt: "Elan_fullshot",
      title: "Elan Fullshot",
      description: "MAYA",
    },  
    {
      src: "/images/arts/handDrawing/Pulp-fiction.jpg",
      alt: "Elan_fullshot",
      title: "Elan Fullshot",
      description: "MAYA",
    },
    {
      src: "/images/arts/handDrawing/aespa-winter.jpg",
      alt: "Elan_fullshot",
      title: "Elan Fullshot",
      description: "MAYA",
    },
    {
      src: "/images/arts/handDrawing/upside-down.jpg",
      alt: "Elan_fullshot",
      title: "Elan Fullshot",
      description: "MAYA",
    },

  ],
};
