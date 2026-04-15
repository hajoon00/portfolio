import Image from "next/image";
import Link from "next/link";
import type { PortfolioCardItem } from "@/data";

export function ProjectCard({ item }: { item: PortfolioCardItem }) {
  return (
    <Link
      href={item.href}
      className="group block relative aspect-[4/3] w-full overflow-hidden rounded-xl"
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end gap-2">
        
        {item.date && (
          <p className="text-[11px] md:text-xs text-white/80 tracking-wide">
            {item.date}
          </p>
        )}
        <h2 className="text-white text-lg md:text-xl font-semibold tracking-tight leading-snug">
          {item.title}
        </h2>
        {item.hashtags && item.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.hashtags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-[2px] text-[10px] md:text-[11px] uppercase tracking-wide text-white/90 border border-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
