// src/content/experience/k-pensa.tsx
"use client";

import React from "react";
import Image from "next/image";

const CooKR = () => {
  return (
    <div className="space-y-6">
      {/* Initial Thinking Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Initial Thinking
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            In many cities worldwide, including Philly, it&apos;s challenging to
            find authentic Korean cuisine due to ingredients availability and
            altered recipes. There is a proliferation of misleading recipes,
            further confusing those seeking genuine Korean flavors.
          </p>
        </div>
      </section>

      {/* User Interview Insights Section */}
      <section className="py-12 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-8">
            User Interview Insights
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <p className="text-gray-300">
                <span className="font-medium text-hajoon-200">
                  Limited Accessibility:
                </span>{" "}
                Users struggle to find authentic Korean ingredients locally,
                forcing them to bulk-order from specialty shops. This
                discourages experimenting with new recipes.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <p className="text-gray-300">
                <span className="font-medium text-hajoon-200">
                  Preference for Familiarity:
                </span>{" "}
                Users tend to stick to dishes they already know, limiting their
                exploration of diverse Korean cuisine.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <p className="text-gray-300">
                <span className="font-medium text-hajoon-200">
                  Hands-Free Cooking:
                </span>{" "}
                With hands occupied while cooking, users find it difficult to
                interact with devices for recipe guidance.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <p className="text-gray-300">
                <span className="font-medium text-hajoon-200">
                  Ingredient Utilization:
                </span>{" "}
                Users struggle to fully utilize purchased ingredients, often
                resulting in waste. They need better meal planning solutions.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <p className="text-gray-300">
                <span className="font-medium text-hajoon-200">
                  Authenticity:
                </span>{" "}
                Strong desire for recipes that maintain traditional Korean
                flavors and techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-8">User Flow Map</h2>
          <Image
            src="/images/cookr/user-flow.jpg"
            alt="User Flow Diagram"
            width={1000}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Early Design Section */}
      <section className="py-12 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-8">Early Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <Image
                  src="/images/cookr/wireframe-1.jpg"
                  alt="Initial Wireframe"
                  width={400}
                  height={800}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                Basic layout focusing on recipe visibility and clear navigation
              </p>
            </div>
            <div>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <Image
                  src="/images/cookr/wireframe-2.jpg"
                  alt="Refined Wireframe"
                  width={400}
                  height={800}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                Refined design with improved recipe categorization and search
                functionality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Testing Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-8">
            User Testing Insight
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-gray-400">Day One</span>
              <p className="text-gray-300">
                Users found recipe navigation intuitive but wanted clearer
                measurement conversions
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-gray-400">Day Two</span>
              <p className="text-gray-300">
                Added ingredient substitution suggestions based on user feedback
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-gray-400">Day Three</span>
              <p className="text-gray-300">
                Implemented step-by-step photo guides for complex recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design Section */}
      <section className="py-12 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-8">Final Design</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Image
              src="/images/cookr/final-1.jpg"
              alt="Final Design - Home"
              width={200}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/images/cookr/final-2.jpg"
              alt="Final Design - Recipe List"
              width={200}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/images/cookr/final-3.jpg"
              alt="Final Design - Recipe Detail"
              width={200}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/images/cookr/final-4.jpg"
              alt="Final Design - Settings"
              width={200}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CooKR;
