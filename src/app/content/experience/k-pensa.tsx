// src/content/experience/k-pensa.tsx
"use client";

import React from "react";

const KPensaExperience = () => {
  return (
    <div className="space-y-6">
      <section className="text-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Executive Board at K-PEnSA (Korea-PENN Engineers & Scientists
            Association)
          </p>
          <dl className="mt-6 divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">My Role</dt>
              <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                Marketing Chair <br />
                Internal Chair
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Timeline</dt>
              <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                Sept 2023 - Aug 2024 <br />
                Sept 2024 - now
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Tools Used</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Adobe Illustrator <br />
                Adobe Photoshop <br />
                Adobe Stock <br />
                Bootstrap <br />
                Figma
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">Achievements</dt>
              <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                Marketing Strategy Design <br />
                Design System Establishment <br />
                Website Revamp <br />
                Merch Production
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-red-600">
              1
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Event Promotion
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            I was in charge of promoting club events. I managed the main
            promotion channel, Instagram. I posted event promotion content
            featuring posters that I created, and primarily used Instagram
            Stories to increase participation.
          </p>
          <h3 className="mt-8 text-lg font-bold text-gray-900">
            Biweekly Study Session
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            This is the club&apos;s main event and has the highest participation
            rate. I hosted biweekly study sessions where students in similar
            majors could help each other and create a space to support their
            academic growth.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            The posters were variations of a base template that I created. I
            used Adobe Illustrator and tailored the graphics based on the snacks
            and theme of each session. Special events such as Halloween and
            Valentine&apos;s Day had unique colors, fonts, and other graphic
            elements that suited the theme.
          </p>
          {/* <StudySessionCarousel /> */}
          <h3 className="mt-8 text-lg font-bold text-gray-900">
            Social Events
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A collection of various attempts that align with the event&apos;s
            concept.
          </p>
          {/* <SocialEventsCarousel /> */}
          <h3 className="mt-8 text-lg font-bold text-gray-900">
            Academic Events
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A collection of various attempts that align with the event&apos;s
            concept.
          </p>
          {/* <AcademicEventsCarousel /> */}
          <p className="mt-4 text-lg leading-8 text-gray-600">
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
    </div>
  );
};

export default KPensaExperience;
