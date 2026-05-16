"use client";

import type { FeaturedProject } from "@/lib/featured-projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

function ProjectMedia({
  project,
  priority,
}: {
  project: FeaturedProject;
  priority?: boolean;
}) {
  const { thumbnail } = project;

  if (thumbnail.type === "video") {
    return (
      <video
        src={thumbnail.src}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <Image
      src={thumbnail.src}
      alt={project.title}
      fill
      sizes="(max-width: 1024px) 100vw, 55vw"
      priority={priority}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    />
  );
}

function FeaturedProjectRow({
  project,
  index,
  priority,
}: {
  project: FeaturedProject;
  index: number;
  priority?: boolean;
}) {
  const reversed = index % 2 === 1;
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-24 last:mb-0 md:mb-36"
    >
      <Link
        href={project.href}
        className="group relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
        onMouseMove={onMove}
        onMouseLeave={() => setCursor((c) => ({ ...c, active: false }))}
      >
        <motion.span
          className="pointer-events-none absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300 bg-surface/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-900 backdrop-blur-sm lg:block"
          style={{ left: cursor.x, top: cursor.y }}
          animate={{
            opacity: cursor.active ? 1 : 0,
            scale: cursor.active ? 1 : 0.85,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        >
          View
        </motion.span>

        <motion.div
          className={`relative aspect-[4/3] overflow-hidden bg-neutral-100 ${
            reversed ? "lg:order-2" : ""
          }`}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectMedia project={project} priority={priority} />
        </motion.div>

        <div
          className={`flex flex-col justify-center gap-3 transition-transform duration-500 ease-out ${
            reversed
              ? "lg:order-1 group-hover:-translate-x-2"
              : "group-hover:translate-x-2"
          }`}
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
            {project.category}
          </p>
          <h3 className="text-3xl font-medium tracking-tight text-neutral-900 transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-5xl lg:text-6xl">
            {project.title}
          </h3>
          {project.year ? (
            <p className="text-sm text-neutral-400">{project.year}</p>
          ) : null}
        </div>
      </Link>
    </motion.article>
  );
}

export default function FeaturedProjects({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  return (
    <section id="work" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <motion.div
        className="mx-auto max-w-[2400px] px-6 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-16 text-[10px] uppercase tracking-[0.32em] text-neutral-400 md:mb-24">
          Selected work
        </p>
        {projects.map((project, index) => (
          <FeaturedProjectRow
            key={project.slug}
            project={project}
            index={index}
            priority={index === 0}
          />
        ))}
      </motion.div>
    </section>
  );
}
