"use client";

import type { FeaturedProject } from "@/lib/featured-projects";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import FeaturedProjects from "./featured-projects";

export default function HomePage({
  featured,
  more,
  hero,
}: {
  featured: FeaturedProject[];
  more: FeaturedProject[];
  hero: ReactNode;
}) {
  return (
    <motion.div
      className="min-h-screen bg-surface text-neutral-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {hero}
      <FeaturedProjects featured={featured} more={more} />
    </motion.div>
  );
}
