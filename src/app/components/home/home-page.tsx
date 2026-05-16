"use client";

import type { FeaturedProject } from "@/lib/featured-projects";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FeaturedProjects from "./featured-projects";
import HomeNavbar from "./home-navbar";

export default function HomePage({
  projects,
  hero,
}: {
  projects: FeaturedProject[];
  hero: ReactNode;
}) {
  return (
    <motion.div
      className="min-h-screen bg-surface text-neutral-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HomeNavbar />
      {hero}
      <FeaturedProjects projects={projects} />

      <section
        id="about"
        className="scroll-mt-24 border-t border-neutral-200/80 bg-surface px-6 py-24 md:px-10 md:py-32"
      >
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-[10px] uppercase tracking-[0.32em] text-neutral-400">
            About
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
            Hajoon Park
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base md:leading-relaxed">
            I work across web, art direction, and brand—building clear,
            expressive digital experiences. From content and campaigns to
            product and graphic design, I focus on work that feels intentional,
            alive, and easy to use.
          </p>
          <Link
            href="/resume"
            className="group mt-8 inline-flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-neutral-900"
          >
            Resume
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-neutral-200/80 bg-surface px-6 py-24 md:px-10 md:py-32"
      >
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-[10px] uppercase tracking-[0.32em] text-neutral-400">
            Contact
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base">
            Open to creative direction, design systems, and product collaborations.
          </p>
          <Link
            href="/resume"
            className="group mt-8 inline-flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-neutral-900"
          >
            View resume
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
