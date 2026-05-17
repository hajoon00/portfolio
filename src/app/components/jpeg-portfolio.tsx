"use client";

import Image from "next/image";
import type { PortfolioBlock } from "@/lib/jpeg-galleries";
import GoBackButton from "./gobackbutton";

type JpegPortfolioProps = {
  blocks: PortfolioBlock[];
};

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

export default function JpegPortfolio({ blocks }: JpegPortfolioProps) {
  let mediaIndex = 0;

  return (
    <div className="min-h-screen bg-surface text-neutral-900">
      <GoBackButton />
      <div className="mx-auto w-full max-w-5xl px-0 pb-16 pt-14">
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
