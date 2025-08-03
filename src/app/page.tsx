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
          src="/images/Logo-dark.svg"
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
        className="max-w-3xl text-center mb-16 space-y-6"
      >
        <p className="text-xl text-gray-900 font-medium">
          반갑습니다. 박하준입니다.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          보기 좋은 것은 사람들을 이유 없이 행복하게 만듭니다.
          <br />
          그렇기에, 보기 좋은 것을 가능한 모든 방식으로 만들고 싶어하는
          디자이너가 되었습니다.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          때로는 디자이너로서, 때로는 개발자로서, 때로는 예술가로서 만들고 싶은
          걸 만듭니다.
        </p>
      </motion.div>

      {/* Portfolio Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          href="/work"
          className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          포트폴리오 보러가기
        </Link>
      </motion.div>
    </main>
  );
}
