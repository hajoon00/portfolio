"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
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
const SWIPE_THRESHOLD = 50;

type TransitionDirection = "up" | "down";

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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [transition, setTransition] = useState<{
    from: number;
    to: number;
    direction: TransitionDirection;
  } | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const activeItem = activeIndex === null ? null : feedItems[activeIndex];
  const centerLabel =
    transition !== null
      ? feedItems[transition.to]?.item.title ?? null
      : activeItem?.item.title ?? null;
  const centerDate =
    transition !== null
      ? feedItems[transition.to]?.item.date ?? null
      : activeItem?.item.date ?? null;

  const handleNavigate = (direction: TransitionDirection) => {
    if (transition) return;
    if (feedItems.length === 0) return;
    if (activeIndex === null) {
      if (direction === "down") {
        setActiveIndex(0);
      }
      return;
    }
    const next =
      direction === "up"
        ? (activeIndex + 1) % feedItems.length
        : (activeIndex - 1 + feedItems.length) % feedItems.length;
    setTransition({ from: activeIndex, to: next, direction });

    window.setTimeout(() => {
      setActiveIndex(next);
      setTransition(null);
    }, TRANSITION_MS);
  };

  return (
    <div
      className="relative h-screen overflow-hidden bg-black text-white"
      onWheel={(event) => {
        if (Math.abs(event.deltaY) < SWIPE_THRESHOLD) return;
        handleNavigate(event.deltaY > 0 ? "up" : "down");
      }}
      onTouchStart={(event) => {
        touchStartYRef.current = event.touches[0]?.clientY ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartYRef.current === null) return;
        const endY = event.changedTouches[0]?.clientY;
        if (typeof endY !== "number") {
          touchStartYRef.current = null;
          return;
        }
        const deltaY = touchStartYRef.current - endY;
        if (Math.abs(deltaY) >= SWIPE_THRESHOLD) {
          handleNavigate(deltaY > 0 ? "up" : "down");
        }
        touchStartYRef.current = null;
      }}
    >
      {!transition && activeItem && <BackgroundLayer item={activeItem} />}
      {transition && (
        <>
          <BackgroundLayer
            item={feedItems[transition.from]}
            style={{
              animation: `${
                transition.direction === "up" ? "slideOutUp" : "slideOutDown"
              } ${TRANSITION_MS}ms ease forwards`,
            }}
          />
          <BackgroundLayer
            item={feedItems[transition.to]}
            style={{
              animation: `${
                transition.direction === "up" ? "slideInUp" : "slideInDown"
              } ${TRANSITION_MS}ms ease forwards`,
            }}
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

      <div className="absolute left-1/2 top-1/2 z-30 w-[min(92vw,30rem)] -translate-x-1/2 -translate-y-1/2 md:w-[min(90vw,38rem)]">
        <div className="grid w-full grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center gap-x-3 rounded-2xl border border-white/25 bg-white/10 px-3 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl md:gap-x-4 md:px-4 md:py-4">
          <button
            type="button"
            onClick={() => handleNavigate("down")}
            aria-label="이전 프로젝트 보기"
            className="pointer-events-auto inline-flex h-10 w-10 shrink-0 items-center justify-center justify-self-start rounded-full border border-white/35 bg-black/25 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <ArrowIcon direction="up" />
          </button>
          <button
            type="button"
            onClick={() => handleNavigate(activeItem ? "up" : "down")}
            aria-label={activeItem ? "다음 프로젝트 보기" : "프로젝트 보기"}
            className="min-w-0 justify-self-center rounded-xl px-2 py-3 transition-colors hover:bg-white/10 md:px-4"
          >
            {centerLabel ? (
              <span className="block text-center">
                <span className="block max-w-full break-words text-xl font-medium leading-tight tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] md:text-3xl">
                  {centerLabel}
                </span>
                {centerDate && (
                  <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-white/75 md:text-sm">
                    {centerDate}
                  </span>
                )}
              </span>
            ) : (
              <Image
                src="/images/Logo-white.svg"
                alt="Hajoon Park"
                width={320}
                height={36}
                priority
                className="mx-auto max-h-9 w-auto max-w-[min(70vw,20rem)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] md:max-h-10"
              />
            )}
          </button>
          {activeItem ? (
            <button
              type="button"
              onClick={() => handleNavigate("up")}
              aria-label="다음 프로젝트 보기"
              className="pointer-events-auto inline-flex h-10 w-10 shrink-0 items-center justify-center justify-self-end rounded-full border border-white/35 bg-black/25 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <ArrowIcon direction="down" />
            </button>
          ) : (
            <span
              className="pointer-events-none inline-block h-10 w-10 shrink-0 justify-self-end"
              aria-hidden
            />
          )}
        </div>
      </div>

      {activeItem && (
        <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-end gap-6">
          <Link
            href={activeItem.item.href}
            className="pointer-events-auto shrink-0 inline-flex items-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs md:text-sm backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            View project
          </Link>
        </div>
      )}

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
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slideOutDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "up" | "down" }) {
  const rotationClass = direction === "up" ? "rotate-180" : "";
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-5 w-5 text-white ${rotationClass}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
