"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroLabel = "크리에이티브 디자이너 · 개발자";

const heroSubtext =
  "콘텐츠·캠페인·프로덕트·그래픽 디자인을 넘나들며, 명확하고 표현력 있는 경험을 설계합니다.";

export default function HomeHeroContent() {
  return (
    <section
      id="hero-intro"
      className="scroll-mt-0 border-b border-neutral-200/80 bg-surface px-6 py-12 md:px-10 md:py-16"
      aria-label="Introduction"
    >
      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 md:mt-8"
        >
          <Link
            href="/Resume-KOR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-xs font-medium text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-neutral-50 md:text-sm"
          >
            이력서 보기
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
