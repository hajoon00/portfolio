// src/content/experience/k-pensa.tsx
"use client";

import React from "react";

const CDRExperience = () => {
  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight  sm:text-2xl">
            Internship at CDR Associates
          </p>
          <dl className="mt-6 divide-y divide-gray-700">
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Role
              </dt>
              <dd className="mt-2 text-sm ">
                Web Designer <br />
                Planning Team Research Assistant
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Duration
              </dt>
              <dd className="mt-2 text-sm ">Dec 2024 - Jan 2025</dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Tools Used
              </dt>
              <dd className="mt-2 text-sm ">
                Wordpress <br />
                Figma
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Achievements
              </dt>
              <dd className="mt-2 text-sm ">
                Brand Design <br />
                Website Design <br />
                Merch Production
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            My Role
          </h2>

          <p className="mt-2 text-lg leading-8 font-light ">
            I was a sole web designer of the website revamp project, where I
            supervised Supervised three in-house designers in a website
            renovation project.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Process & Approach
          </h2>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            Problem Statement
          </h3>
          <ul className="mt-2 text-lg leading-8 font-light ">
            <li>
              The original website was built using a Wordpress website builder,
              which resulted in poor optimization. Given the nature of a design
              agency, the site had to accommodate numerous images, leading to
              slow rendering speeds.
            </li>
            <li>
              Additionally, years of neglect caused various UI issues.
              Thumbnails became misaligned, and the outdated version of
              WordPress restricted access to certain features.
            </li>
            <li>
              The overall layout was not suitable for showcasing mockups and
              design outcomes, as it was too text-heavy. To address this, we
              decided to increase image sizes and implement a more consistent
              design across detail pages.
            </li>
            <li>
              Also, it is crucial to establish a website management system that
              allows for easy updates and maintenance, so that the design team
              with no coding skills can easily access the website and make
              changes.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Outcome & Impact
          </h2>
          <ul className="mt-2 text-lg leading-8 font-light ">
            <li>
              Contributed to a successful website revamp, improving client
              engagement.
            </li>
            <li>
              Led the full stack Wordpress development, including the
              implementation of a new design system that is now used across the
              website.
            </li>
          </ul>
          <button className="mt-2 text-lg font-semibold text-neutral-100 bg-hajoon-500 hover:bg-hajoon-600 rounded-md py-2 px-4">
            <span>
              <a
                href="https://www.cdr.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDR Associates Website
              </a>
            </span>
          </button>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Takeaways
          </h2>
          <ul className="mt-2 text-lg leading-8 font-light ">
            <li>
              Gained hands-on experience in branding, market research, and web
              design.
            </li>
            <li>
              Strengthened skills in design strategy, competitive analysis, and
              team leadership.
            </li>
            <li>
              Learned the importance of data-driven design in branding
              decisions.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CDRExperience;
