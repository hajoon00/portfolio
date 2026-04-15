"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  graphicDesignsCollection,
  homePortfolioSections,
  resolveHomePortfolioItem,
  type PortfolioCardItem,
} from "@/data";

type HomeFeedItem = {
  item: PortfolioCardItem;
  category: string;
};

const TRANSITION_MS = 700;

function BackgroundLayer({
  item,
  className,
  style,
}: {
  item: HomeFeedItem;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`absolute inset-0 ${className ?? ""}`} style={style}>
      <Image
        src={item.item.imageUrl}
        alt={item.item.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}

export default function Home() {
  const feedItems: HomeFeedItem[] = useMemo(() => {
    const baseItems = homePortfolioSections.flatMap((section) =>
      section.items
        .map((ref) => {
          const item = resolveHomePortfolioItem(ref);
          if (!item) return null;
          return { item, category: section.title };
        })
        .filter((entry): entry is HomeFeedItem => entry !== null)
    );

    baseItems.push({
      category: "Graphic design",
      item: {
        slug: graphicDesignsCollection.slug,
        title: graphicDesignsCollection.title,
        date: graphicDesignsCollection.date,
        hashtags: [...graphicDesignsCollection.hashtags],
        imageUrl: "/images/thumbnail/Thumbnails-nyangiverse.webp",
        href: "/graphic-design",
      },
    });

    return baseItems;
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState<{
    from: number;
    to: number;
  } | null>(null);

  const activeItem = feedItems[activeIndex];

  const handleLogoClick = () => {
    if (transition) return;
    const next = (activeIndex + 1) % feedItems.length;
    setTransition({ from: activeIndex, to: next });

    window.setTimeout(() => {
      setActiveIndex(next);
      setTransition(null);
    }, TRANSITION_MS);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      {!transition && <BackgroundLayer item={activeItem} />}
      {transition && (
        <>
          <BackgroundLayer
            item={feedItems[transition.from]}
            style={{ animation: `slideOutUp ${TRANSITION_MS}ms ease forwards` }}
          />
          <BackgroundLayer
            item={feedItems[transition.to]}
            style={{ animation: `slideInUp ${TRANSITION_MS}ms ease forwards` }}
          />
        </>
      )}

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/35 via-transparent to-black/55" />

      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-white/75">
          Hajoon Park
        </span>
        <Link
          href="/resume"
          className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs font-medium backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          Resume
        </Link>
      </div>

      <button
        onClick={handleLogoClick}
        aria-label="다음 프로젝트 보기"
        className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full px-6 py-4"
      >
        <Image
          src="/images/Logo-white.svg"
          alt="Hajoon Park"
          width={320}
          height={36}
          priority
          className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
        />
      </button>

      <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <p className="mb-2 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/70">
            {activeItem.category}
          </p>
          <h1 className="text-2xl md:text-4xl font-medium tracking-tight">
            {activeItem.item.title}
          </h1>
          {activeItem.item.date && (
            <p className="mt-2 text-xs md:text-sm text-white/75">
              {activeItem.item.date}
            </p>
          )}
        </div>

        <Link
          href={activeItem.item.href}
          className="pointer-events-auto shrink-0 inline-flex items-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs md:text-sm backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          View project
        </Link>
      </div>

      <style jsx global>{`
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slideOutUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
}
