"use client";

import React, { useState } from "react";
import Image from "next/image";

const PensaMerch = () => {
  // Add state for hover text
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Add image data with descriptions
  const stickerImages = [
    {
      src: "/images/merch/pensa/stickers-01.jpg",
      alt: "Pensa Merch",
      description: "Blue cat design - Inspired by our mascot's playful nature",
    },
    {
      src: "/images/merch/pensa/stickers-02.jpg",
      alt: "Pensa Merch",
      description: "Penn Engineering logo with K-PEnSA branding elements",
    },
    {
      src: "/images/merch/pensa/stickers-03.jpg",
      alt: "Pensa Merch",
      description: "Minimalist design featuring our organization's initials",
    },
    {
      src: "/images/merch/pensa/stickers-04.jpg",
      alt: "Pensa Merch",
      description: "Abstract pattern incorporating Penn's colors",
    },
  ];

  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            K-PEnSA Stickers
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I founded <span className="text-gray-200">Reading for Youhak</span>,
            a platform that guides students facing financial or systemic
            barriers in applying to U.S. universities. Through content-driven
            marketing and digital engagement, the platform grew into a
            sustainable business.
          </p>

          <dl className="mt-10 divide-y divide-gray-800">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-300">
                Timeline
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                Jan 2019 - Sept 2020
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-300">
                Tools Used
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                Adobe Illustrator
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Design Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Previous K-PEnSA merchandise consisted primarily of hoodies, which
            presented several challenges:
          </p>
          <ul className="mt-4 text-lg leading-8 font-light text-gray-300">
            <li>
              High production costs made the merchandise expensive for students
            </li>
            <li>Limited usability due to seasonal weather constraints</li>
            <li>Storage and distribution complexities for the organization</li>
          </ul>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-4 text-xl font-semibold leading-7 text-hajoon-300">
            Stickers V2024
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {stickerImages.map((image, index) => (
              <div
                key={index}
                className="relative h-0 pb-[100%] rounded-lg group"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
                {hoveredImage === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg flex items-center justify-center p-4 transition-opacity duration-200">
                    <p className="text-white text-center">
                      {image.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-4 text-xl font-semibold leading-7 text-hajoon-300">
            Stickers V2025
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The most popular design was the blue cat, so I decided to create a
            series of stickers with different variations of the cat.
          </p>
          <div className="grid grid-cols-2 gap-4 my-10">
            <div className="relative h-0 pb-[100%]">
              <Image
                src="/images/merch/pensa/stickers-2025-1.jpg"
                alt="Pensa Merch"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-0 pb-[100%]">
              <Image
                src="/images/merch/pensa/stickers-2025-2.jpg"
                alt="Pensa Merch"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Impact
          </h2>
          <ul className="mt-4 text-lg leading-8 font-light text-gray-300">
            <li>Increased merchandise accessibility with lower price points</li>
            <li>Enhanced brand visibility through everyday use of stickers</li>
            <li>Improved member engagement with collectible design series</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PensaMerch;
