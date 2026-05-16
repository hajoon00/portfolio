"use client";

import { motion } from "framer-motion";

const labelVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const headlineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.35 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "1.1em", rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroLabel = "크리에이티브 디자이너 · 개발자";

const headlineSegments = [
  "웹, 브랜드,",
  "그리고 살아 있는",
  "디지털 경험을",
  "만듭니다.",
];

const heroSubtext =
  "콘텐츠·캠페인·프로덕트·그래픽 디자인을 넘나들며, 명확하고 표현력 있는 경험을 설계합니다.";

export default function HomeHeroContent() {
  return (
    <section
      className="border-b border-neutral-200/80 bg-surface px-6 py-16 md:px-10 md:py-24"
      aria-label="Introduction"
    >
      <motion.div
        className="mx-auto max-w-[min(92vw,1400px)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          variants={labelVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 text-sm text-neutral-500 md:text-base"
        >
          <span className="font-medium text-neutral-800">박하준</span>
          <span className="mx-2 text-neutral-300">·</span>
          {heroLabel}
        </motion.p>

        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-x-[0.2em] text-[clamp(2.25rem,7.5vw,6.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-neutral-900"
          style={{ perspective: 800, wordBreak: "keep-all" }}
        >
          {headlineSegments.map((segment, i) => (
            <motion.span
              key={`${segment}-${i}`}
              variants={wordVariants}
              className="inline-block origin-bottom"
            >
              {segment}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-sm leading-[1.75] text-neutral-600 md:mt-10 md:text-base md:leading-[1.8]"
          style={{ wordBreak: "keep-all" }}
        >
          {heroSubtext}
        </motion.p>
      </motion.div>
    </section>
  );
}
