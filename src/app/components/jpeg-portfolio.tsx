"use client";

import Image from "next/image";
import type { PortfolioBlock } from "@/lib/jpeg-galleries";
import type { ProjectMeta } from "@/lib/project-meta";
import GoBackButton from "./gobackbutton";

type JpegPortfolioProps = {
  blocks: PortfolioBlock[];
  meta?: ProjectMeta | null;
};

function PortfolioIntro({ meta }: { meta: ProjectMeta }) {
  return (
    <header className="mx-auto max-w-3xl px-6 pb-10 pt-20 md:px-10 md:pb-14 md:pt-24">
      {meta.date ? (
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-400">
          {meta.date}
        </p>
      ) : null}
      <h1 className="text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl">
        {meta.title}
      </h1>
      {meta.description ? (
        <p
          className="mt-5 text-sm leading-relaxed text-neutral-600 md:text-base md:leading-relaxed"
          style={{ wordBreak: "keep-all" }}
        >
          {meta.description}
        </p>
      ) : null}
      {meta.hashtags?.length ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {meta.hashtags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}

function PortfolioBlockView({
  block,
  priority,
}: {
  block: PortfolioBlock;
  priority?: boolean;
}) {
  switch (block.type) {
    case "heading":
      return (
        <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-14">
          <h2 className="text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl">
            {block.title}
          </h2>
          {block.body ? (
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
              {block.body}
            </p>
          ) : null}
        </div>
      );

    case "text":
      return (
        <div
          className={`mx-auto px-6 py-10 md:px-10 md:py-14 ${
            block.size === "wide" ? "max-w-5xl" : "max-w-3xl"
          }`}
        >
          <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-600 md:text-base md:leading-relaxed">
            {block.body}
          </p>
        </div>
      );

    case "video":
      return (
        <video
          src={block.src}
          className="block h-auto w-full"
          controls
          playsInline
          preload={priority ? "auto" : "metadata"}
          aria-label="Project video"
        />
      );

    case "image":
      return (
        <Image
          src={block.src}
          alt=""
          width={1920}
          height={1280}
          sizes="(max-width: 80rem) 100vw, 80rem"
          className="block h-auto w-full"
          priority={priority}
        />
      );
  }
}

export default function JpegPortfolio({ blocks, meta }: JpegPortfolioProps) {
  let mediaIndex = 0;

  return (
    <div className="min-h-screen bg-surface text-neutral-900">
      <GoBackButton />
      {meta ? <PortfolioIntro meta={meta} /> : null}
      <div
        className={`mx-auto w-full max-w-5xl px-0 pb-16 ${meta ? "pt-0" : "pt-14"}`}
      >
        {blocks.map((block, index) => {
          const isMedia = block.type === "image" || block.type === "video";
          const priority = isMedia && mediaIndex < 2;
          if (isMedia) mediaIndex += 1;

          return (
            <div key={`${block.type}-${index}`} className="w-full">
              <PortfolioBlockView block={block} priority={priority} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
