"use client";

import Link from "next/link";
import { experiences } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Work Experience
            </h1>
            <p className="text-lg text-gray-300">
              Click on each experience to learn more
            </p>
          </motion.div>

          {/* Vertical Layout with Regular Cards */}
          <div className="flex flex-col gap-32 w-full">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.slug}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full"
              >
                <Link
                  href={`/work/experience/${experience.slug}`}
                  className="block w-full group"
                >
                  <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center p-8 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <div className="text-center">
                      <Image
                        className="w-64 h-64 object-contain mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                        src={experience.imageUrl}
                        alt={experience.title}
                        width={256}
                        height={256}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-4">
                        {experience.date}
                      </p>
                      <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
                        {experience.description}
                      </p>
                      <div className="mt-6">
                        <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-white/30">
                          Click to explore
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
