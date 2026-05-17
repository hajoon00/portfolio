"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroLabel = "디자이너 · 기획자";

const heroSubtext =
  "0에서 1을, 1에서 100을.";

export default function HomeHeroContent() {
  return (
    <section
      id="hero-intro"
      className="scroll-mt-0 border-b border-neutral-200/80 bg-surface px-6 py-12 md:px-10 md:py-16"
      aria-label="Introduction"
    >
      <motion.div
        className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-2xl">
          <p className="text-xs text-neutral-500 md:text-sm">
            <span className="font-medium text-neutral-700">박하준</span>
            <span className="mx-2 text-neutral-300">·</span>
            {heroLabel}
          </p>

          <h1
            className="mt-4 text-2xl font-medium leading-snug tracking-tight text-neutral-900 md:mt-5 md:text-3xl"
            style={{ wordBreak: "keep-all" }}
          >
            기획부터 디자인까지.
          </h1>

          <p
            className="mt-4 text-xs leading-relaxed text-neutral-600 md:text-sm md:leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
          {heroSubtext}
        </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 md:self-end"
        >
          <Link
            href="/Resume-KOR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800 md:text-sm"
          >
            이력서 보기
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
