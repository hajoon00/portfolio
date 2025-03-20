"use client";

import React from "react";

const PensaMerch = () => {
  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">
            K-PEnSA Merchandise Design
          </p>
          <dl className="mt-6 divide-y divide-gray-700">
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Role
              </dt>
              <dd className="mt-2 text-sm text-gray-300">
                Merchandise Designer <br />
                Marketing Chair
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Timeline
              </dt>
              <dd className="mt-2 text-sm text-gray-300">Fall 2023</dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Tools Used
              </dt>
              <dd className="mt-2 text-sm text-gray-300">
                Adobe Illustrator <br />
                Figma
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Problem Statement
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

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Solution
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Developed a sticker collection as an alternative merchandise option:
          </p>
          <ul className="mt-4 text-lg leading-8 font-light text-gray-300">
            <li>
              Created versatile designs that could be applied to various
              surfaces
            </li>
            <li>
              Significantly reduced production costs and retail price point
            </li>
            <li>Easier to distribute and store compared to clothing items</li>
            <li>Allowed for greater design variety and creative expression</li>
          </ul>
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
