// app/art/page.tsx
"use client";

import { useState, useEffect } from "react";
import { arts } from "@/artsData";
import Image from "next/image";

export default function ArtPage() {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
    link?: string;
  } | null>(null);

  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    if (modalImage) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalImage]);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Art Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Maya를 활용한 3D 모델링부터 Procreate로 그린 디지털 드로잉, 그리고
              React와 p5.js로 만든 인터랙티브 아트까지 다양한 매체와 기법을 통해
              표현한 작품들을 소개합니다.{" "}
              <span className="text-yellow-600 font-semibold">별표(★)</span>가
              표시된 작품들은 클릭하면 직접 체험해볼 수 있는 인터랙티브
              아트입니다.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {arts.map((art, index) => (
            <div
              key={index}
              className="cursor-pointer group relative"
              onClick={() => setModalImage(art)}
            >
              <div className="relative bg-white shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={art.src}
                    alt={art.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Interactive Star Badge */}
                {art.isInteractive && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded-full shadow-lg z-10">
                    ★
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-3 tracking-wide">
                      {art.title}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed font-light">
                      {art.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative max-w-4xl mx-auto">
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                width={480}
                height={800}
                className="h-[60vh] w-auto object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">
                  {modalImage.title}
                </h3>
                <p className="text-gray-300 mt-2">{modalImage.description}</p>
                {modalImage.link && (
                  <a
                    href={modalImage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <button
                      type="button"
                      className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      체험해보기
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
