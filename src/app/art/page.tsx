// app/art/page.tsx
"use client";

import { useState, useEffect } from "react";
import { arts, CategoryKey } from "@/artsData";
import Image from "next/image";

export default function ArtPage() {
  const [selectedTab, setSelectedTab] = useState<CategoryKey>("digitalArt");
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
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Navigation */}
        <nav className="mb-12">
          <div className="flex space-x-8">
            <button
              onClick={() => setSelectedTab("digitalArt")}
              className={`text-sm font-medium px-1 pt-1 ${
                selectedTab === "digitalArt"
                  ? "text-gray-100 border-b-2 border-gray-100"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              DIGITAL ART
            </button>
            <button
              onClick={() => setSelectedTab("rendered3d")}
              className={`text-sm font-medium px-1 pt-1 ${
                selectedTab === "rendered3d"
                  ? "text-gray-100 border-b-2 border-gray-100"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              RENDERED 3D
            </button>
            <button
              onClick={() => setSelectedTab("handDrawing")}
              className={`text-sm font-medium px-1 pt-1 ${
                selectedTab === "handDrawing"
                  ? "text-gray-100 border-b-2 border-gray-100"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              ORIGINAL HAND DRAWING
            </button>

            <button
              onClick={() => setSelectedTab("copy")}
              className={`text-sm font-medium px-1 pt-1 ${
                selectedTab === "copy"
                  ? "text-gray-100 border-b-2 border-gray-100"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              COPY
            </button>
          </div>
        </nav>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {arts[selectedTab].map((art, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => setModalImage(art)}
            >
              <div className="relative bg-neutral-900 w-full aspect-square overflow-hidden">
                <Image
                  src={art.src}
                  alt={art.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                  <h3 className="text-xl font-bold">{art.title}</h3>
                  <p className="mt-2 text-center px-6">{art.description}</p>
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
                className="rounded-lg h-[60vh] w-auto object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">
                  {modalImage.title}
                </h3>
                <p className="text-gray-300 mt-2">{modalImage.description}</p>
                {selectedTab === "digitalArt" && modalImage.link && (
                  <a
                    href={modalImage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <button
                      type="button"
                      className="text-white bg-hajoon-500 hover:bg-hajoon-700 font-medium rounded-lg text-sm px-5 py-2.5"
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
