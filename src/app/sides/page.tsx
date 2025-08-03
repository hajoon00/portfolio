"use client";

import Link from "next/link";
import Image from "next/image";
import { projects, merchDesigns } from "@/data";

export default function SidesPage() {
  // Combine all items into one array
  const allItems = [
    ...merchDesigns.map((item) => ({ ...item, type: "merch" })),
    ...projects.map((item) => ({ ...item, type: "project" })),
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            저의 더 많은 프로젝트를 둘러보세요
          </h1>
        </section>

        {/* All Projects Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row gap-6">
            {allItems.map((item) => (
              <Link
                key={item.slug}
                href={`/sides/${item.type}/${item.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <Image
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={item.imageUrl}
                      alt={item.title}
                      width={400}
                      height={225}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm mb-2">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
