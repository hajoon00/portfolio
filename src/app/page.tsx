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
        <p className="text-lg text-alt-800">
          Hi, I&apos;m Hajoon Park, a designer and developer based in
          Philadelphia. <br />I create digital experiences that combine
          aesthetics with functionality.
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
          className="px-6 py-3 text-md font-medium bg-transparent text-alt-800 hover:bg-alt-100 hover:text-alt-900 rounded-2xl"
        >
          WORK
        </Link>
        <Link
          href="/art"
          className="px-6 py-3 text-md font-medium bg-transparent text-alt-800 hover:bg-alt-100 hover:text-alt-900 rounded-2xl"
        >
          ART
        </Link>
      </motion.div>
    </main>
  );
}
