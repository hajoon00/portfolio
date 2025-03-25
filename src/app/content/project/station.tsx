"use client";

import React from "react";
import { projects } from "@/data";
import Image from "next/image";

const Station = () => {
  const stationData = projects.find((proj) => proj.slug === "station");

  const images = Array.from({ length: 17 }, (_, i) => ({
    src: `/images/station/Station-presentation.${String(i + 1).padStart(
      3,
      "0"
    )}.jpeg`,
    alt: `Station presentation slide ${i + 1}`,
  }));

  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Station: Seoul Mediacity Biennale Redesign
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stationData?.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-hajoon-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <div className="py-12 sm:py-16 bg-alt-900">
        <div
          className="mx-auto px-2 flex flex-col items-center"
          style={{ width: "92%" }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative mb-4" style={{ width: "100%" }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={1200}
                height={900}
                className="rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Station;
