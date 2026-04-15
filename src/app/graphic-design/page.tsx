import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/app/components/project-card";
import { graphicDesignProjects, graphicDesignsCollection } from "@/data";

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen text-gray-100 bg-neutral-900">
      <header className="relative border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Logo-white.svg"
                alt="Hajoon Park"
                width={280}
                height={32}
                priority
              />
            </Link>
            <p className="text-sm md:text-base text-neutral-300 max-w-xl leading-relaxed">
              {graphicDesignsCollection.description}
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <h1 className="sr-only">{graphicDesignsCollection.title}</h1>
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-6 md:mb-8"
          aria-hidden
        >
          {graphicDesignsCollection.title}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {graphicDesignProjects.map((item) => (
            <ProjectCard key={item.href} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
