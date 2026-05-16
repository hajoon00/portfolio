import Image from "next/image";
import Link from "next/link";
import {
  graphicDesignProjects,
  homePortfolioSections,
  resolveHomePortfolioItem,
  type PortfolioCardItem,
} from "@/data";
import { getPortfolioThumbnailMedia } from "@/lib/portfolio-thumbnail";

type ProjectRow = {
  id: string;
  title: string;
  items: PortfolioCardItem[];
};

function buildProjectRows(): ProjectRow[] {
  const rows: ProjectRow[] = homePortfolioSections.map((section) => ({
    id: section.id,
    title: section.title,
    items: section.items
      .map((ref) => resolveHomePortfolioItem(ref))
      .filter((item): item is PortfolioCardItem => item !== null),
  }));

  rows.push({
    id: "graphic-design",
    title: "Graphic design",
    items: graphicDesignProjects,
  });

  return rows;
}

export default function ProjectsPage() {
  const rows = buildProjectRows();
  const firstThumbnailHref = rows[0]?.items[0]?.href;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-black px-4 py-4 md:px-6">
        <Link
          href="/"
          className="text-[10px] uppercase tracking-[0.24em] text-white/75 hover:text-white md:text-xs"
        >
          Hajoon Park
        </Link>
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 md:text-xs">
          Projects
        </p>
      </header>

      <main className="mx-auto w-full max-w-[2400px]">
        {rows.map((row) => (
          <section key={row.id} aria-labelledby={`row-${row.id}`}>
            <h2
              id={`row-${row.id}`}
              className="px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-white/55 md:px-6 md:text-sm"
            >
              {row.title}
            </h2>
            <div className="grid grid-cols-2">
              {row.items.map((item) => (
                <ProjectThumbnail
                  key={item.href}
                  item={item}
                  priority={item.href === firstThumbnailHref}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

function ProjectThumbnail({
  item,
  priority = false,
}: {
  item: PortfolioCardItem;
  priority?: boolean;
}) {
  const media = getPortfolioThumbnailMedia(item);

  return (
    <Link href={item.href} className="relative block aspect-[16/9] w-full">
      {media.type === "video" ? (
        <video
          src={media.src}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload={priority ? "auto" : "metadata"}
          aria-hidden
        />
      ) : (
        <Image
          src={media.src}
          alt={item.title}
          fill
          priority={priority}
          sizes="(max-width: 2400px) 50vw, 1200px"
          className="object-cover"
        />
      )}
      <span className="sr-only">{item.title}</span>
    </Link>
  );
}
