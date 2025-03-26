"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Image
          src="/images/Logo-white.svg"
          alt="Hajoon Park Logo"
          width={200}
          height={67}
          priority
        />
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-center mb-16"
      >
        <p className="text-lg text-gray-300">
          Hi, I&apos;m Hajoon Park, a designer and developer based in
          Philadelphia. I create digital experiences that combine aesthetics
          with functionality.
        </p>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-8"
      >
        <Link
          href="/work"
          className="px-12 py-6 text-lg font-base bg-alt-100 text-alt-900 rounded-lg"
        >
          WORK
        </Link>
        <Link
          href="/art"
          className="px-12 py-6 text-lg font-base bg-alt-100 text-alt-900 rounded-lg"
        >
          ART
        </Link>
      </motion.div>
    </main>
  );
}
