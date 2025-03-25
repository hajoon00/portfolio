// src/content/experience/k-pensa.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experiences } from "@/data";

interface ImageStack {
  preview: string;
  images: string[];
}

const KPensaExperience = () => {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);

  const pensaData = experiences.find((exp) => exp.slug === "k-pensa");

  // Study session images
  const studyImages: ImageStack = {
    preview: "/images/k-pensa/PENSA-Study-1.jpg",
    images: [
      "/images/k-pensa/PENSA-Study-1.jpg",
      "/images/k-pensa/PENSA-Study-2.jpg",
      "/images/k-pensa/PENSA-Study-4.jpg",
      "/images/k-pensa/PENSA-Study-5.jpg",
      "/images/k-pensa/PENSA-Study-8.jpg",
      "/images/k-pensa/PENSA-Study-9.jpg",
      "/images/k-pensa/PENSA-Study-Halloween-1.jpg",
      "/images/k-pensa/PENSA-Study-Halloween-2.jpg",
      "/images/k-pensa/PENSA-Study-Valentine-1.jpg",
      "/images/k-pensa/PENSA-Study-Valentine-2.jpg",
    ],
  };

  // Event images
  const eventImages: ImageStack = {
    preview: "/images/k-pensa/PENSA-EOY-Social-1.jpg",
    images: [
      "/images/k-pensa/PENSA-24S-Advance-Registration-Lunch.jpg",
      "/images/k-pensa/PENSA-Advance-Registration-23F.jpg",
      "/images/k-pensa/PENSA-EOY-Social-1.jpg",
      "/images/k-pensa/PENSA-EOY-Social-2.jpg",
      "/images/k-pensa/PENSA-EOY-Social-3.jpg",
      "/images/k-pensa/PENSA-EOY-Social-Menu.jpg",
      "/images/k-pensa/PENSA-Faculty-Chat.jpg",
      "/images/k-pensa/PENSA-Mixer.jpg",
      "/images/k-pensa/PENSA-Movie-Night.jpg",
      "/images/k-pensa/PENSA-Social-2024F.jpg",
    ],
  };

  // Modal state for viewing full images
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleStackClick = (stackType: "study" | "event") => {
    setModalImages(
      stackType === "study" ? studyImages.images : eventImages.images
    );
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setModalImages(null);
    setSelectedImageIndex(0);
  };

  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Executive Board at K-PEnSA
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {pensaData?.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-hajoon-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <dl className="mt-6 divide-y divide-gray-700">
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Role
              </dt>
              <dd className="mt-2 text-sm text-gray-300">
                Marketing Chair (2023.09 - 2024.08) <br />
                Internal Chair (2024.09 - Present)
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Duration
              </dt>
              <dd className="mt-2 text-sm text-gray-300">2023.09 - Present</dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Tools Used
              </dt>
              <dd className="mt-2 text-sm text-gray-300">
                Adobe Illustrator <br />
                Adobe Photoshop
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Achievements
              </dt>
              <dd className="mt-2 text-sm text-gray-300">
                Poster Design <br />
                Event Planning <br />
                Community Building
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            My Role
          </h2>
          <h3 className="mt-2 text-lg font-semibold text-gray-300">
            Project Leader (Website Revamp)
          </h3>
          <ul className="mt-2 text-lg leading-8 font-light text-gray-300">
            <li>
              As a Marketing Chair, I was responsible for designing marketing
              materials for the club&apos;s events and activities.
            </li>
            <li>
              As an Internal Chair, I was responsible for overseeing the
              club&apos;s operations and ensuring that all events were executed
              smoothly.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-hajoon-500">
              1
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
              Marketing Materials Design
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-200">
            The part I put the most effort into was posters. Since a poster is
            distributed through all of PENSA&apos;s communication channels, it
            serves as the first impression when members obtain information about
            the event.
          </p>

          {/* Image Gallery Section */}
          <h2 className="text-xl font-bold tracking-tight text-white mt-8 mb-4">
            Posters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Study Sessions Stack */}
            <div
              className="relative cursor-pointer group"
              onClick={() => handleStackClick("study")}
            >
              <Image
                src={studyImages.preview}
                alt="Study Sessions Preview"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center group-hover:bg-opacity-70 transition-all">
                <span className="text-white text-xl font-bold">
                  Study Sessions
                </span>
              </div>
            </div>

            {/* Events Stack */}
            <div
              className="relative cursor-pointer group"
              onClick={() => handleStackClick("event")}
            >
              <Image
                src={eventImages.preview}
                alt="Events Preview"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center group-hover:bg-opacity-70 transition-all">
                <span className="text-white text-xl font-bold">
                  Social Events
                </span>
              </div>
            </div>
          </div>

          {/* Modal for viewing images */}
          {modalImages && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <div className="relative max-w-3xl mx-auto px-16">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-100 text-2xl z-10"
                >
                  ×
                </button>

                {/* Left Navigation Button */}
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev === 0 ? modalImages.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-5xl opacity-75 hover:opacity-100 transition-opacity"
                >
                  ‹
                </button>

                <Image
                  src={modalImages[selectedImageIndex]}
                  alt={`Gallery image ${selectedImageIndex + 1}`}
                  width={700}
                  height={525}
                  className="rounded-lg"
                />

                {/* Right Navigation Button */}
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev === modalImages.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-5xl opacity-75 hover:opacity-100 transition-opacity"
                >
                  ›
                </button>

                <div className="flex justify-center space-x-2 mt-4">
                  {modalImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === selectedImageIndex
                          ? "bg-white"
                          : "bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <p className="mt-10 text-lg leading-8 text-gray-300">
            The posters were variations of a base template that I created. I
            used Adobe Illustrator and tailored the graphics based on the snacks
            and theme of each session. Special events such as Halloween and
            Valentine&apos;s Day had unique colors, fonts, and other graphic
            elements that suited the theme.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            You can check out more posters and promotional content on our
            Instagram page.
          </p>
          <a
            href="https://instagram.com/kpensa_upenn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="mt-6 text-white bg-hajoon-500 hover:bg-hajoon-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Go to Instagram
            </button>
          </a>
        </div>
      </section>

      <section className="py-20 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-hajoon-500">
              2
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
              Website Revamp
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-200">
            A website that had been neglected for about 5 years was revamped.
            The existing website structure was maintained, but the overall
            design system was updated to be more modern and concise.
          </p>
          <a
            href="https://k-pensa.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="mt-6 text-white bg-hajoon-500 hover:bg-hajoon-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Website
            </button>
          </a>

          <div className=" py-20 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="before-section">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-200 mb-4">
                    Original Website
                  </h2>
                </div>
                <div className="after-section">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-200 mb-4">
                    Problem
                  </h2>
                </div>
                <img
                  src="/images/k-pensa/website/old_website_1.png"
                  alt="Before Image"
                  className="w-full h-auto rounded-md shadow-md"
                />
                <div className="after-section">
                  가독성이 떨어짐. 옛날 사진 배경.
                </div>

                <div className="before-section">
                  <img
                    src="/images/k-pensa/website/old_website_2.png"
                    alt="Before Image"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>

                <div className="after-section">ㅇㅇㅇ</div>
                <div className="before-section">
                  <img
                    src="/images/k-pensa/website/old_website_3.png"
                    alt="Before Image"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
                <div className="after-section">ㅇㅇㅇ</div>

                <div className="before-section">
                  <img
                    src="/images/k-pensa/website/old_website_4.png"
                    alt="Before Image"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>

                <div className="after-section">
                  <p className="text-base font-semibold leading-7 text-gray-100 mb-4">
                    bad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-hajoon-500">
              3
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
              Event Planning
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-200">
            I planned and executed events for the club.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Outcome & Impact
          </h2>
          <ul className="mt-2 text-lg leading-8 font-light text-gray-300">
            <li>
              Increased membership by 50% in the first year as Marketing Chair
              by leading all marketing initiatives.
            </li>
            <li>A successful website revamp, improving client engagement.</li>

            <li>
              Provided market insights that influenced branding decisions for
              multiple projects.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default KPensaExperience;
