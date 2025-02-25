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
    <div className=" min-h-screen pt-8">
      <section className="max-w-screen-xl mx-auto px-4 py-8 text-center">
        <h1 className="mb-4 font-bold text-4xl text-gray-800">Doodle to Art</h1>
        <p className="mt-4 text-lg leading-8 text-gray-800">
          Sometimes, I don&apos;t want to follow the rules of design. I imitate
          masterpieces or create my own drawings.
        </p>
      </section>

      <section className="max-w-screen-lg mx-auto">
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 py-4">
          {(["digitalArt", "handDrawing", "copy"] as CategoryKey[]).map(
            (tab) => (
              <button
                key={tab}
                type="button"
                className={`px-6 py-2 rounded-full font-medium ${
                  selectedTab === tab
                    ? "bg-gray-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab === "digitalArt"
                  ? "Digital Art"
                  : tab === "handDrawing"
                  ? "Original Hand Drawing"
                  : "Copy"}
              </button>
            )
          )}
        </div>

        {/* Artworks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
          {arts[selectedTab].map((art, index) => (
            <div
              key={index}
              className="relative group w-full bg-white shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => setModalImage(art)}
            >
              <Image
                src={art.src}
                alt={art.alt}
                width={500}
                height={300}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold mb-2">{art.title}</h3>
                <p className="text-sm px-4 text-center">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-2xl mx-4">
            <button
              className="absolute top-2 right-5 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="overflow-hidden">
              <Image
                className="object-contain max-h-[80vh] max-w-full"
                src={modalImage.src}
                alt={modalImage.alt}
                width={500}
                height={300}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                {modalImage.title}
              </h3>
              <p className="text-gray-600 mt-2">{modalImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
