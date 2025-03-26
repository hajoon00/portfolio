// src/content/experience/k-pensa.tsx
"use client";

import React from "react";
import Image from "next/image";

const Hasom = () => {
  return (
    <>
      {/* Overview Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hasom – A Craft Brand Identity
          </p>
          <span
            key={0}
            className="bg-gray-800 text-hajoon-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
          >
            Brand Identity
          </span>
          <span
            key={1}
            className="bg-gray-800 text-hajoon-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
          >
            Visual Design
          </span>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Hasom is a craft brand inspired by the personality of a cat named
            Hasom—lazy, prickly, yet elegant. The brand&apos;s identity revolves
            around duality, represented by Hasom&apos;s pink skin and sky-blue eyes,
            which became the foundation of the design system.
          </p>
        </div>
      </section>

      {/* Brand Concept Section */}
      <section className="py-20 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Brand Concept & Identity
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The brand concept was built around translating Hasom&apos;s unique
            character into a visual language that emphasizes both playfulness
            and elegance. The color palette represents a dual perspective: pink
            for how we see Hasom, and blue for how Hasom sees the world. This
            duality became a core element of the brand&apos;s identity, influencing
            everything from logo design to packaging.
          </p>
          {/* Add Image component here for mood board */}
        </div>
      </section>

      {/* Logo Development Section */}
      <section className="py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Logo Development
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The main symbol was designed to reflect Hasom&apos;s distinctive
            features: sky-blue eyes, pink eyelids, and delicate nose, while
            maintaining a minimalist approach. Multiple logo variations were
            created to ensure flexibility across different applications, from
            web to merchandise.
          </p>
          {/* Add Image component here for logo variations */}
          <Image
            className="my-10"
            src="/images/hasom/Logo-Design.jpg"
            alt="Logo Design"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      {/* Typography & Elements Section */}
      <section className="py-20 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Typography & Graphic Elements
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The brand utilizes Montserrat as the primary typeface for its clean,
            modern appearance, complemented by All Round Gothic as a secondary
            typeface that adds a playful touch. Custom graphic elements were
            developed to reflect Hasom&apos;s quirky movements and preferences.
          </p>
          {/* Add Image component here for typography showcase */}
          <Image
            className="my-10"
            src="/images/hasom/Typography.jpg"
            alt="Typography"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Color Palette & Symbolism
            </h2>
          </div>
          <Image
            className="my-10"
            src="/images/hasom/Color-Palette.jpg"
            alt="Color Palette"
            width={1000}
            height={1000}
          />
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The brand&apos;s core colors—Red (#FF2D46), Pink (#FFDCE1), and Blue
            (#B4DAF9)—were carefully selected to represent different aspects of
            Hasom&apos;s character. Pink represents Hasom&apos;s physical charm and
            quirks, while blue represents Hasom&apos;s perspective of the world.
          </p>
          {/* Add Image component here for color palette visualization */}

          <Image
            className="my-10"
            src="/images/hasom/Color-Symbol.jpg"
            alt="Color Symbol"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      {/* Brand Application Section */}
      <section className="py-20 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Brand Application
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The brand identity was applied across various touchpoints, including
            business cards, packaging, and merchandise. Each application was
            designed to maintain brand consistency while creating a playful yet
            minimal aesthetic that tells the Hasom story.
          </p>
          {/* Add Image component here for brand applications */}
          <Image
            className="my-10"
            src="/images/hasom/Business-Card.jpg"
            alt="Business Card"
            width={1000}
            height={1000}
          />
          <Image
            className="my-10"
            src="/images/hasom/Pink-Mockup.jpg"
            alt="Pink Mockup"
            width={1000}
            height={1000}
          />
          <Image
            className="my-10"
            src="/images/hasom/Blue-Mockup.jpg"
            alt="Blue Mockup"
            width={1000}
            height={1000}
          />
          <Image
            className="my-10"
            src="/images/hasom/Sticker-Mockup.jpg"
            alt="Blue Mockup Two"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Outcome & Impact
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The project successfully established a cohesive and scalable brand
            identity that effectively tells Hasom&apos;s story through design. The
            result is a recognizable and playful brand system that maintains its
            integrity across various platforms and applications.
          </p>
          {/* Add Image component here for final showcase */}
        </div>
      </section>
    </>
  );
};

export default Hasom;
