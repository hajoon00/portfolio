"use client";

import Image from "next/image";
import type { PortfolioGalleryItem } from "@/lib/jpeg-galleries";
import GoBackButton from "./gobackbutton";

type JpegPortfolioProps = {
  items: PortfolioGalleryItem[];
};

export default function JpegPortfolio({ items }: JpegPortfolioProps) {
  return (
    <div className="min-h-screen bg-black">
      <GoBackButton />
      <div className="mx-auto w-full max-w-5xl px-0 pb-16 pt-14">
        {items.map((item, index) => (
          <div key={item.src} className="w-full">
            {item.type === "video" ? (
              <video
                src={item.src}
                className="block h-auto w-full"
                controls
                playsInline
                preload={index === 0 ? "auto" : "metadata"}
                aria-label="Project video"
              />
            ) : (
              <Image
                src={item.src}
                alt=""
                width={1920}
                height={1280}
                sizes="(max-width: 80rem) 100vw, 80rem"
                className="block h-auto w-full"
                priority={index < 2}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
