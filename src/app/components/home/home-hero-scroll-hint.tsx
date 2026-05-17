"use client";

import { motion } from "framer-motion";

export default function HomeHeroScrollHint() {
  const scrollDown = () => {
    document
      .getElementById("hero-intro")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollDown}
      aria-label="Scroll down"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-800 md:bottom-10"
    >
      <motion.span
        aria-hidden
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 9l5 5 5-5" />
          <path d="M7 13l5 5 5-5" />
        </svg>
      </motion.span>
    </motion.button>
  );
}
