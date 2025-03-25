"use client";

import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { experiences } from "@/data";

const consultingProcess = [
  {
    step: "Step 1",
    title: "Consultation",
    description: `Initial consultation to understand student's goals and background`,
  },
  {
    step: "Step 2",
    title: "Portfolio Concept Setting",
    description:
      "Strategic planning of extracurricular activities and academic focus",
  },
  {
    step: "Step 3",
    title: "Essay/Resume Development",
    description: "Development of compelling essays and comprehensive resumes",
  },
  {
    step: "Step 4",
    title: "Common Application",
    description: "Guidance through the Common Application process",
  },
];

const ReadingForYouhak: NextPage = () => {
  const youhakData = experiences.find(
    (exp) => exp.slug === "reading-for-youhak"
  );

  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Contents Director @Reading for Youhak
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {youhakData?.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-hajoon-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
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
                My Role
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                Contents Director <br />
                Designer <br />
                Video Producer <br />
                College Admission Consultant
              </dd>
            </div>
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
                Adobe Illustrator <br />
                Adobe Premiere Pro
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Problem Statement
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-200">
            In Korea, there is very limited access to information about applying
            to universities abroad. This is especially true for parents who are
            not proficient in English, making them more vulnerable to
            information inequality. Additionally, local information is often not
            very accessible to international students. Because of this, I felt
            the need for a platform that allows everyone to easily access the
            necessary information.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Process & Approach
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                1. Content Production
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                The founding philosophy of "Reading for Youhak" was to provide
                easily accessible study abroad information. We chose YouTube as
                our primary platform, producing over 50 videos that simplified
                complex admissions topics.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Image
                  src="/images/reading-for-youhak/youtube-home.jpg"
                  alt="youtube home"
                  width={500}
                  height={300}
                  className="rounded-md shadow-md"
                />
                <Image
                  src="/images/reading-for-youhak/youtube-videos.jpg"
                  alt="youtube videos"
                  width={500}
                  height={300}
                  className="rounded-md shadow-md"
                />
              </div>
              <a
                href="https://www.youtube.com/@유학읽어주는남자"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="mt-6 text-white bg-hajoon-500 hover:bg-hajoon-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Visit YouTube Channel
                </button>
              </a>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                We created and distributed free videos covering essential
                information, starting from standardized tests, guidelines for
                filling out the Common App, visa applications for international
                students, and the latest admissions trends.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                2. Building a Community
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                After that, I created a community to enable continuous
                information sharing and began distributing more organized
                materials. I started by creating and sharing my own AP/SAT II
                lecture notes, then compiled a three-year admissions timeline
                and school-specific checklists, which I uploaded to a private
                cafe/blog. I also set up an open chat room to provide quicker
                responses and facilitate resource sharing among members.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 sm:py-32 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Turning into a Sustainable Business
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                Consulting Process
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                In Korea, a vast amount of study abroad information is shared
                through private academies, with tuition fees ranging from
                thousands to hundreds of thousands of U.S. dollars. As a result,
                students who lack access to such information often have no idea
                where to start. Therefore, we decided to take a more
                comprehensive approach, not just reviewing essays or resumes,
                but offering systematic support throughout the entire admissions
                process, from start to finish.
              </p>
              <ol className="mt-4 relative border-s border-gray-700">
                {consultingProcess.map((item, index) => (
                  <li key={index} className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-hajoon-500 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                      {item.step}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-100">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-400">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Outcome & Impact
          </h2>
          <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-400">
            <li>✅ Reached 66K+ total views on educational videos</li>
            <li>
              ✅ Successfully guided students to top universities including
              Yale, Cornell, and Imperial College
            </li>
            <li>
              ✅ Established a recognizable brand in the Korean education
              consulting space
            </li>
          </ul>

          <div className="mt-8">
            <a
              href="https://www.youtube.com/@유학읽어주는남자"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-hajoon-500 hover:bg-hajoon-800 rounded-lg"
            >
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadingForYouhak;
