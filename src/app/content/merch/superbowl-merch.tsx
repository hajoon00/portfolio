"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SuperbowlMerch = () => {
  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="my-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Superbowl T-shirt
          </p>

          <Image
            src="/images/thumbnail/Thumbnails-superbowl-merch.webp"
            alt="Superbowl T-shirt"
            width={1000}
            height={1000}
          />

          <dl className="mt-10 divide-y divide-gray-800">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-300">
                My Role
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                Graphic Designer <br />
                Event Organizer
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-300">
                Timeline
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                Feb 2025
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

      <section className="py-24 sm:py-32 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Initiating the Project
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            As an avid fan of Philadelphia Eagles and an active member of Penn
            Fine Arts and Design Board (FAD Board), I suggested the idea of
            holding a school-wide event to celebrate Eagles making it to the
            Superbowl.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            Since FAD Board has semesterly Screen Printing events, I thought it
            would be a great opportunity to design a Eagles-themed t-shirt and
            give them out to the Penn community so that we can show our support
            to our best local sports team.
          </p>
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Image
            src="/images/superbowl-merch/past-screen-printing-event.webp"
            alt="past screen printing event"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Design Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Green is the color of Philadelphia Eagles, so I decided to use it as
            the main color of the t-shirt. We had an open call
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Design Process
          </h2>
          <div className="grid grid-cols-2 gap-4 my-10">
            <div className="relative h-96 pb-[100%]">
              <Image
                src="/images/merch/superbowl/superbowl-print.jpg"
                alt="Superbowl T-shirt"
                className="object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="relative h-0 pb-[100%]">
              My design (+ some help of Kathryn Lien)
              <br />
              Silhouette of the iconic Saquon Barkley backflip over the super
              bowl trophy.
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
            <li>Organized the biggest event in FAD Board history</li>
            <li>
              Produced 300+ t-shirts and distributed them to the Penn community
            </li>
          </ul>
          <button className="mt-2 text-lg font-semibold text-neutral-100 bg-hajoon-500 hover:bg-hajoon-600 rounded-md py-2 px-4">
            <Link href="https://www.instagram.com/p/DF07S9xRf-1/">
              Penn Official Instagram Post
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuperbowlMerch;
