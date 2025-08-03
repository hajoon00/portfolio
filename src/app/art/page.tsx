// app/art/page.tsx
"use client";

import { useState, useEffect } from "react";
import { arts, CategoryKey } from "@/artsData";
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

  const sectionTitles = {
    rendered3d: "3D 모델링",
    digitalArt: "디지털 아트",
    handDrawing: "손그림",
    copy: "모작",
  };

  const sectionOrder: CategoryKey[] = [
    "rendered3d",
    "digitalArt",
    "handDrawing",
    "copy",
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Art Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            때로는 형식에 구애받지 않고 제가 만들고 싶은 걸 만드는 시간을
            가졌습니다. 다양한 매체와 기법을 통해 표현한 작품들을 소개합니다. 3D
            모델링부터 디지털 아트, 손그림까지 다양한 분야의 창작 활동을
            담았습니다.
          </p>
        </section>

        {/* Art Sections */}
        <div className="space-y-16">
          {sectionOrder.map((category) => (
            <section key={category} className="space-y-12">
              {/* Section Title */}

              <div className="text-left border-l-4 border-gray-300 pl-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 ml-2 ">
                  {sectionTitles[category]}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl ml-2">
                  {arts[category].description}
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {arts[category].items.map((art, index) => (
                  <div
                    key={index}
                    className="cursor-pointer group"
                    onClick={() => setModalImage(art)}
                  >
                    <div className="relative bg-neutral-900 w-full aspect-square overflow-hidden shadow-lg">
                      <Image
                        src={art.src}
                        alt={art.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                        <h3 className="text-xl font-bold">{art.title}</h3>
                        <p className="mt-2 text-center px-6">
                          {art.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
                      Go to Project
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
