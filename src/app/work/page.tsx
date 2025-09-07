"use client";

import Link from "next/link";
import { experiences, projects, merchDesigns } from "@/data";
import Image from "next/image";

export default function WorkPage() {
  return (
    <div className="relative">
      {/* Main Projects Sections */}
      {experiences.map((experience, index) => {
        // 각 섹션별 색상 매핑
        const colorMap = {
          cdr: {
            id: "01",
            bg: "bg-stone-400",
            text: "text-stone-800",
            textSecondary: "text-stone-900",
            button: "bg-white text-alt-600 hover:bg-alt-50",
            tag: "bg-alt-500 text-white",
          },
          "k-pensa": {
            id: "02",
            bg: "bg-gray-800",
            text: "text-white",
            textSecondary: "text-gray-200",
            button: "bg-white text-gray-800 hover:bg-gray-50",
            tag: "bg-gray-600 text-white",
          },
          "reading-for-youhak": {
            id: "03",
            bg: "bg-red-900",
            text: "text-white",
            textSecondary: "text-red-200",
            button: "bg-white text-red-900 hover:bg-red-50",
            tag: "bg-red-700 text-white",
          },
          nyangiverse: {
            id: "04",
            bg: "bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900",
            text: "text-white",
            textSecondary: "text-purple-200",
            button: "bg-white text-purple-900 hover:bg-purple-50",
            tag: "bg-purple-600 text-white",
          },
        };

        const colors =
          colorMap[experience.slug as keyof typeof colorMap] || colorMap.cdr;

        return (
          <Link
            key={experience.slug}
            href={`/sides/experience/${experience.slug}`}
            className="block"
          >
            <section
              className={`h-[60vh] flex items-center justify-center relative ${colors.bg} transition-all duration-500 hover:scale-[1.02] hover:z-50 cursor-pointer overflow-hidden shadow-2xl hover:shadow-3xl`}
              style={{ zIndex: 10 + index }}
            >
              <div className="w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                  {/* Left Column - Background Image (40%) */}
                  <div
                    className={`lg:col-span-2 relative overflow-hidden h-64 lg:h-full ${
                      index % 2 === 0
                        ? "diagonal-clip-odd"
                        : "diagonal-clip-even"
                    }`}
                  >
                    <Image
                      src={experience.imageUrl}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  {/* Right Column - Project Info (60%) */}
                  <div className="lg:col-span-3 flex items-center px-6 lg:px-12 py-8 lg:py-12">
                    <div className="text-left space-y-4 lg:space-y-6 w-full">
                      {/* Project Title */}
                      <div className="space-y-3 lg:space-y-4">
                        <h2
                          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${colors.text} tracking-tight leading-tight`}
                        >
                          {experience.title}
                        </h2>
                        <p
                          className={`text-base md:text-lg lg:text-xl ${colors.textSecondary} leading-relaxed`}
                        >
                          {experience.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {experience.hashtags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`${colors.tag} px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      {/* <div className="pt-2 lg:pt-4">
                        <div
                          className={`inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 ${colors.button} font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 text-base lg:text-lg`}
                        >
                          자세히 보기 →
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Link>
        );
      })}

      {/* Side Projects Section - Full-width horizontal layout */}
      <section className="w-full">
        <div className="text-center py-8 bg-gray-900 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            사이드 프로젝트
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            다양한 창작물과 실험적 프로젝트들을 통해 더 깊이 있는 작업들을
            살펴보실 수 있습니다.
          </p>
        </div>

        {/* Projects Grid - Fixed 1/4 width, responsive height */}
        <div className="grid grid-cols-4 w-full">
          {[...projects, ...merchDesigns].slice(0, 4).map((project) => (
            <div
              key={project.slug}
              className="relative w-full aspect-[4/3] group overflow-hidden"
            >
              <Link
                href={`/sides/${
                  project.id.startsWith("merch") ? "merch" : "project"
                }/${project.slug}`}
                className="block w-full h-full"
              >
                {/* Background Image */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-transparent transition-all duration-300 group-hover:bg-black/80"></div>

                {/* Project Info - Hidden by default, visible on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.hashtags
                      .slice(0, 3)
                      .map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <p className="text-xs text-gray-300">{project.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
