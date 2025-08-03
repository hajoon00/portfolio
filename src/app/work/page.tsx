"use client";

import Link from "next/link";
import { experiences } from "@/data";
import { useState } from "react";
import Image from "next/image";

export default function WorkPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 md:py-20 lg:py-24">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col items-center gap-16">
          {/* Responsive SVG Layout */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full justify-center items-center">
            {experiences.map((experience, index) => (
              <div key={experience.slug} className="flex-shrink-0">
                <Link
                  href={`/sides/experience/${experience.slug}`}
                  className="block"
                >
                  <div
                    className={`w-48 h-48 sm:w-56 sm:h-56 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-lg flex items-center justify-center ${
                      index % 2 === 0 ? "mt-0" : "md:mt-12 lg:mt-16"
                    } animate-float`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: "3s",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image
                      className="w-full h-full object-contain transition-all duration-300"
                      src={
                        hoveredIndex === index
                          ? experience.imageUrlBack
                          : experience.imageUrl
                      }
                      alt={experience.title}
                      width={256}
                      height={256}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Side Projects Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="/sides"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              사이드 프로젝트 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
