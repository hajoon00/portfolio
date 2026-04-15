// data.ts
export const experiences = [
  {
    id: "exp-01",
    slug: "cdr",
    title: "CDR Associates 인턴",
    company: "CDR Associates",
    date: "Dec 2024 - Jan 2025",
    description: `인턴으로 일하며 웹사이트 개편 주도 / 유일한 퍼블리셔로 웹사이트 개발 담당`,
    hashtags: ["Frontend", "UI/UX", "Web Design"],
    imageUrl: "/images/cdr/CDR-phone.webp",
    imageUrlBack: "/images/thumbnail/BACK-CDR.svg",
  },
  {
    id: "exp-02",
    slug: "k-pensa",
    title: "Executive Board at K-PEnSA",
    company: "K-PEnSA",
    date: "Sept 2023 - May 2025",
    description: `펜실베니아 대학 공식 한인이공계동아리에서 Marketing Chair/VP Internal 직무를 담당하며 웹사이트 개발, 포스터 디자인, 굿즈 제작 등 올라운더 마케팅 활동`,
    hashtags: ["Marketing", "Frontend", "Graphic Design"],
    imageUrl: "/images/thumbnail/Thumbnails-pensa-sticker.webp",
    imageUrlBack: "/images/thumbnail/BACK-PENSA.svg",
  },
  {
    id: "exp-03",
    slug: "reading-for-youhak",
    title: "유학 읽어주는 남자",
    company: "유학 읽어주는 남자",
    date: "Jan 2019 — Sep 2020",
    description: `미국 유학 컨설팅 플랫폼 설립 후 성공적인 수익 모델 구축`,
    hashtags: ["Marketing", "Design System", "Content Creation"],
    imageUrl: "/images/thumbnail/rfy-mockup.jpg",
    imageUrlBack: "/images/thumbnail/BACK-RFY.svg",
  },
];

export const projects = [
  {
    id: "proj-02",
    slug: "devflow",
    title: "DevFlow",
    date: "Spring 2024",
    description: "AI를 활용한 코딩 생산성 향상 웹 애플리케이션입니다.",
    hashtags: ["Product Design", "UX/UI", "Frontend"],
    imageUrl: "/images/thumbnail/Thumbnails-devflow.webp",
  },
  {
    id: "proj-cookr",
    slug: "CooKR",
    title: "CooKR: Korean Recipe App",
    date: "Spring 2024",
    description: "한식 레시피를 찾고 따라 만들 수 있는 앱 디자인입니다.",
    hashtags: ["Product Design", "UX/UI", "App Design"],
    imageUrl: "/images/thumbnail/Thumbnails-cookr.webp",
  },
];

export const merchDesigns = [
  // {
  //   id: "merch-01",
  //   slug: "pensa-merch",
  //   title: "K-PEnSA Merchandise",
  //   date: "Fall 2023",
  //   description: "Club merchandise design for K-PEnSA members",
  //   hashtags: ["Merch Design", "Branding"],
  //   imageUrl: "/images/thumbnail/Thumbnails-pensa-sticker.webp",
  // },
  {
    id: "merch-02",
    slug: "superbowl-merch",
    title: "Penn FAD Board Superbowl Event",
    date: "Spring 2025",
    description: "펜 FAD 보드 슈퍼볼 멤버들을 위한 머천다이즈 디자인입니다.",
    hashtags: ["Merch Design", "Event Coordination"],
    imageUrl: "/images/thumbnail/Thumbnails-superbowl-merch.webp",
  },
  
  // Add more merch designs as needed
];

/** Single entry for the combined graphic design case study page. */
export const graphicDesignsCollection = {
  slug: "graphic-design",
  title: "Graphic design",
  date: "2024 — 2025",
  description:
    "Nyangiverse, Hasom 브랜딩, Kapacity 머천다이즈 등 그래픽·브랜딩 작업입니다.",
  hashtags: ["Branding", "Graphic Design", "BX", "Merch"],
} as const;

/** Home page: project cards grouped by practice area. */
export type HomePortfolioItemRef =
  | { kind: "experience"; slug: string }
  | { kind: "project"; slug: string }
  | { kind: "merch"; slug: string };

export type HomePortfolioSection = {
  id: string;
  title: string;
  items: HomePortfolioItemRef[];
};

export type PortfolioCardItem = {
  slug: string;
  title: string;
  imageUrl: string;
  date?: string;
  hashtags?: string[];
  href: string;
};

/** Cards on /graphic-design — each links to /graphic-design/[slug]. */
export const graphicDesignProjects: PortfolioCardItem[] = [
  {
    slug: "nyangiverse",
    title: "Nyangiverse",
    date: "Spring 2025",
    hashtags: ["Product Design", "Graphic Design", "BX"],
    imageUrl: "/images/nyangiverse/hoodie-hasom-navy.jpg",
    href: "/graphic-design/nyangiverse",
  },
  {
    slug: "hasom",
    title: "Hasom",
    date: "Fall 2024",
    hashtags: ["Branding", "Graphic Design"],
    imageUrl: "/images/thumbnail/Thumbnails-hasom.webp",
    href: "/graphic-design/hasom",
  },
  {
    slug: "kapacity",
    title: "Kapacity 후드티 디자인",
    date: "Spring 2025",
    hashtags: ["Merch Design", "Branding"],
    imageUrl: "/images/thumbnail/Thumbnails-kapacity-hoodie.webp",
    href: "/graphic-design/kapacity",
  },
];

export const graphicDesignSlugs = ["nyangiverse", "hasom", "kapacity"] as const;
export type GraphicDesignSlug = (typeof graphicDesignSlugs)[number];

export function isGraphicDesignSlug(s: string): s is GraphicDesignSlug {
  return (graphicDesignSlugs as readonly string[]).includes(s);
}

export function resolveHomePortfolioItem(
  ref: HomePortfolioItemRef
): PortfolioCardItem | null {
  if (ref.kind === "experience") {
    const e = experiences.find((x) => x.slug === ref.slug);
    if (!e) return null;
    return {
      slug: e.slug,
      title: e.title,
      imageUrl: e.imageUrl,
      date: e.date,
      hashtags: e.hashtags,
      href: `/sides/experience/${e.slug}`,
    };
  }
  if (ref.kind === "project") {
    const p = projects.find((x) => x.slug === ref.slug);
    if (!p) return null;
    return {
      slug: p.slug,
      title: p.title,
      imageUrl: p.imageUrl,
      date: p.date,
      hashtags: p.hashtags,
      href: `/sides/project/${p.slug}`,
    };
  }
  const m = merchDesigns.find((x) => x.slug === ref.slug);
  if (!m) return null;
  return {
    slug: m.slug,
    title: m.title,
    imageUrl: m.imageUrl,
    date: m.date,
    hashtags: m.hashtags,
    href: `/sides/merch/${m.slug}`,
  };
}

export const homePortfolioSections: HomePortfolioSection[] = [
  {
    id: "content-creation",
    title: "Content creation",
    items: [
      { kind: "experience", slug: "cdr" },
      { kind: "experience", slug: "reading-for-youhak" },
    ],
  },
  {
    id: "offline-marketing",
    title: "Offline marketing",
    items: [
      { kind: "experience", slug: "k-pensa" },
      { kind: "merch", slug: "superbowl-merch" },
    ],
  },
  {
    id: "product-design",
    title: "Product design",
    items: [
      { kind: "project", slug: "devflow" },
      { kind: "project", slug: "CooKR" },
    ],
  },
];
