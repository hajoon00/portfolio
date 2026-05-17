export const experiences = [
  {
    slug: "cdr",
    title: "CDR Associates 인턴",
    date: "Dec 2024 - Jan 2025",
    description:
      "공식 웹사이트 디자인부터 배포까지",
    hashtags: ["Frontend", "UI/UX", "Web Design"],
    imageUrl: "/images/cdr/CDR-phone.webp",
  },
  {
    slug: "k-pensa",
    title: "Executive Board at K-PEnSA",
    date: "Sept 2023 - May 2025",
    description:
      "웹사이트 개발, 포스터 디자인, 굿즈 제작 등 올라운더 마케팅 경험",
    hashtags: ["Marketing", "Frontend", "Graphic Design"],
    imageUrl: "/images/thumbnail/Thumbnails-pensa-sticker.webp",
  },
  {
    slug: "reading-for-youhak",
    title: "유학 읽어주는 남자",
    date: "Jan 2019 — Sep 2020",
    description: "미국 유학 컨설팅 플랫폼 설립 후 성공적인 수익 모델 구축하기",
    hashtags: ["Marketing", "Design System", "Content Creation"],
    imageUrl: "/images/thumbnail/rfy-mockup.jpg",
  },
];

export const projects = [
  {
    slug: "devflow",
    title: "DevFlow",
    date: "Spring 2024",
    description: `AI를 활용한 코딩 생산성 향상 웹 애플리케케이션을 "가상으로 구현해보기"`,
    hashtags: ["Product Design", "UX/UI", "Frontend"],
    imageUrl: "/images/thumbnail/Thumbnails-devflow.webp",
  },
];

export const merchDesigns = [
  {
    slug: "superbowl-merch",
    title: "Penn FAD Board Superbowl Event",
    date: "Spring 2025",
    description: "펜 FAD 보드 슈퍼볼 멤버들을 위한 머천다이즈 디자인입니다.",
    hashtags: ["Merch Design", "Event Coordination"],
    imageUrl: "/images/thumbnail/Thumbnails-superbowl-merch.webp",
  },
];

export const graphicDesignsCollection = {
  title: "Graphic design",
  description:
    "Nyangiverse, Kapacity 머천다이즈 등 그래픽·브랜딩 작업입니다.",
} as const;

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
  description?: string;
  hashtags?: string[];
  href: string;
};

export const graphicDesignProjects: PortfolioCardItem[] = [
  {
    slug: "nyangiverse",
    title: "Nyangiverse",
    date: "Spring 2025",
    description:
      "냥이버스는 제가 키우는 두 고양이를 모티브로 만든 가상 캐릭터 세계관이며, 브랜딩과 굿즈로 확장 가능한 인터랙티브 공간을 목표로 했습니다.",
    hashtags: ["Product Design", "Graphic Design", "BX"],
    imageUrl: "/images/nyangiverse/hoodie-hasom-navy.jpg",
    href: "/graphic-design/nyangiverse",
  },
  {
    slug: "kapacity",
    title: "Kapacity 후드티 디자인",
    date: "Spring 2025",
    description:
      "University of Pennsylvania 한인 밴드 Kapacity 멤버들을 위한 머천다이즈 디자인. 한국 전통 문화의 요소를 담은 호랑이 그래픽을 후드티에 적용했습니다.",
    hashtags: ["Merch Design", "Branding"],
    imageUrl: "/images/thumbnail/Thumbnails-kapacity-hoodie.webp",
    href: "/graphic-design/kapacity",
  },
];

export const graphicDesignSlugs = ["nyangiverse", "kapacity"] as const;
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
      description: e.description,
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
      description: p.description,
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
    description: m.description,
    hashtags: m.hashtags,
    href: `/sides/merch/${m.slug}`,
  };
}

export function resolvePortfolioItemBySlug(slug: string): PortfolioCardItem | null {
  const graphic = graphicDesignProjects.find((p) => p.slug === slug);
  if (graphic) return graphic;

  for (const section of homePortfolioSections) {
    for (const ref of section.items) {
      const item = resolveHomePortfolioItem(ref);
      if (item?.slug === slug) return item;
    }
  }

  return null;
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
    items: [{ kind: "project", slug: "devflow" }],
  },
];
