"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { experiences, projects, merchDesigns } from "@/data";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const primaryExperience = experiences[0];
  const secondaryExperiences = experiences.slice(1, 3);
  const tertiaryExperience = experiences[3];
  const sideItems = [...merchDesigns.slice(0, 2), ...projects.slice(0, 2)];

  const getExperienceHref = (slug: string) => `/sides/experience/${slug}`;
  const getSideHref = (item: { id: string; slug: string }) =>
    `/sides/${item.id.startsWith("merch") ? "merch" : "project"}/${item.slug}`;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume-KOR.pdf';
    link.download = 'Hajoon_Park_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Card = ({
    title,
    imageUrl,
    href,
    size,
    date,
    hashtags,
  }: {
    title: string;
    imageUrl: string;
    href: string;
    size: "hero" | "half" | "wide" | "small";
    date?: string;
    hashtags?: string[];
  }) => {
    const sizeClasses =
      size === "hero"
        ? "h-[60vh]"
        : size === "half"
        ? "h-[40vh]"
        : size === "wide"
        ? "h-[50vh]"
        : "aspect-[4/3]"; // small

    const titleClass =
      size === "small"
        ? "text-white text-sm md:text-base font-semibold tracking-tight"
        : "text-white text-2xl md:text-3xl font-semibold tracking-tight";
    const dateClass =
      size === "small"
        ? "text-[10px] md:text-[11px] text-white/90 tracking-wide"
        : "text-[11px] md:text-xs text-white/90 tracking-wide";
    const tagsWrapClass =
      size === "small"
        ? "flex flex-wrap items-center gap-1 text-[10px] md:text-[11px] text-white/80"
        : "flex flex-wrap items-center gap-2 text-[11px] md:text-xs text-white/80";
    const tagChipClass =
      size === "small"
        ? "px-1.5 py-[1px] border border-white/60 uppercase"
        : "px-2 py-[2px] border border-white/60 uppercase";
    const gapClass = size === "small" ? "gap-3" : "gap-4";

    return (
      <Link href={href} className={`group block relative w-full ${sizeClasses} overflow-hidden`}>
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
        <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end ${gapClass}`}>
          <div 
            className="rounded-xl p-4 flex flex-col gap-2"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            <h3 className={titleClass}>{title}</h3>
            {date && <div className={dateClass}>{date}</div>}
            {hashtags && (
              <div className={tagsWrapClass}>
                {hashtags.slice(0, 4).map((tag) => (
                  <span key={tag} className={tagChipClass}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            </div>
        </div>
      </Link>
    );
  };

  return (
    <div 
      className="min-h-screen text-gray-100 relative overflow-hidden bg-neutral-900"
    >
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      {/* Intro Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-8 justify-center items-center text-center">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/images/Logo-white.svg" alt="Hajoon Park Logo" width={300} height={35} priority />
          </Link>
          <p className="text-sm md:text-base text-neutral-300 mb-6">
            보기에 좋은 것을 가능한 모든 방식으로 만드는 디자이너/개발자 박하준입니다.
          </p>
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 text-base font-medium"
          >
            📄 이력서 보기
          </button>
        </div>
      </section>

      {/* Cards Layout */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8 md:space-y-12">
        {/* Row 1: single */}
        {primaryExperience && (
          <Card
            title={primaryExperience.title}
            imageUrl={primaryExperience.imageUrl}
            href={getExperienceHref(primaryExperience.slug)}
            size="hero"
            date={primaryExperience.date}
            hashtags={primaryExperience.hashtags}
          />
        )}

        {/* Row 2: two */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {secondaryExperiences.map((exp) => (
            <Card
              key={exp.slug}
              title={exp.title}
              imageUrl={exp.imageUrl}
              href={getExperienceHref(exp.slug)}
              size="half"
              date={exp.date}
              hashtags={exp.hashtags}
            />
          ))}
        </div>

        {/* Row 3: single */}
        {tertiaryExperience && (
          <Card
            title={tertiaryExperience.title}
            imageUrl={tertiaryExperience.imageUrl}
            href={getExperienceHref(tertiaryExperience.slug)}
            size="wide"
            date={tertiaryExperience.date}
            hashtags={tertiaryExperience.hashtags}
          />
        )}

        {/* Row 4: four sides */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {sideItems.map((item) => (
            <Card
              key={item.slug}
              title={item.title}
              imageUrl={item.imageUrl}
              href={getSideHref(item)}
              size="small"
              date={item.date}
              hashtags={item.hashtags}
            />
          ))}
        </div>
      </main>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Resume</h2>
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* PDF Preview */}
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <iframe
                  src="/Resume-KOR.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  className="w-full h-[60vh] border-0 rounded-lg"
                  title="Resume Preview"
                />
              </div>
              
              {/* Download Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleDownloadResume}
                  className="px-8 py-3 bg-alt-600 hover:bg-alt-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  이력서 다운로드
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
