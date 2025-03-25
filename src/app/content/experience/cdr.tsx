// src/content/experience/k-pensa.tsx
"use client";

import React from "react";
import Image from "next/image";
import { experiences } from "@/data";

const CDRExperience = () => {
  const cdrData = experiences.find((exp) => exp.slug === "cdr");

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
          <div className="mt-4 flex flex-wrap gap-2">
            {cdrData?.hashtags.map((tag, index) => (
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
              <dd className="mt-2 text-sm ">
                Web Designer <br />
                Planning Team Research Assistant
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Duration
              </dt>
              <dd className="mt-2 text-sm ">Dec 2024 - Jan 2025</dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
                Tools Used
              </dt>
              <dd className="mt-2 text-sm ">
                Wordpress <br />
                Figma
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-medium leading-6 text-gray-400">
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

      <section className="py-12 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-400">
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
          <h2 className="text-xl font-semibold leading-7 text-hajoon-400">
            Problem Statement
          </h2>

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

      <section className="py-12 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-400">
            Design Process
          </h2>
          <p className="mt-2 text-lg leading-8 font-light ">
            1. Project Detail Page
          </p>
          <p className="mt-2 text-lg leading-8 font-light ">
            굉장히 다양한 디자인의 프로젝트가 있고, 모든 프로젝트가 다른 색과
            스타일을 갖고 있었기 때문에 프로젝트 개개인을 소개하는 이미지들이
            일정하게 배치되면서도 각 프로젝트의 특성을 살릴 수 있도록 하는 것이
            중요했습니다. 따라서 모든 프로젝트 페이지들이 공유하는 일정한 디자인
            시스템을 살리는 것이 중요했습니다.
          </p>
          <Image
            className="my-10"
            src="/images/cdr/cdr-website-figma.jpg"
            alt="CDR Mockup"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-400">
            Responsive Design
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The website was designed to be fully responsive, providing an
            optimal viewing experience across all devices. Special attention was
            paid to maintaining visual hierarchy and usability regardless of
            screen size.
          </p>

          {/* Home Page Comparison */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-hajoon-200 mb-4">
              Home Page
            </h3>
            <div className="flex gap-8">
              <div className="flex-1">
                <h4 className="text-sm text-gray-400 mb-2">Desktop</h4>
                <Image
                  className="rounded-lg shadow-lg"
                  src="/images/cdr/cdr-home-desktop.jpg"
                  alt="CDR Home Desktop Design"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm text-gray-400 mb-2">Mobile</h4>
                <Image
                  className="rounded-lg shadow-lg"
                  src="/images/cdr/cdr-home-mobile.jpg"
                  alt="CDR Home Mobile Design"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          {/* Heritage Page Comparison */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-hajoon-200 mb-4">
              Heritage Page
            </h3>
            <div className="flex gap-8">
              <div className="flex-1">
                <h4 className="text-sm text-gray-400 mb-2">Desktop</h4>
                <Image
                  className="rounded-lg shadow-lg"
                  src="/images/cdr/cdr-heritage-desktop.jpg"
                  alt="CDR Heritage Desktop Design"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm text-gray-400 mb-2">Mobile</h4>
                <Image
                  className="rounded-lg shadow-lg"
                  src="/images/cdr/cdr-heritage-mobile.jpg"
                  alt="CDR Heritage Mobile Design"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-800 rounded-lg p-6">
            <h4 className="text-hajoon-200 font-semibold mb-2">
              Key Responsive Features:
            </h4>
            <ul className="text-gray-300 space-y-2">
              <li>Flexible grid system that adapts to screen width</li>
              <li>Optimized images that load based on device resolution</li>
              <li>Reorganized navigation for mobile users</li>
              <li>Touch-friendly interactive elements</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Outcome & Impact
          </h2>
          <Image
            className="my-10"
            src="/images/cdr/CDR-website.jpg"
            alt="CDR Mockup"
            width={1000}
            height={1000}
          />
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
