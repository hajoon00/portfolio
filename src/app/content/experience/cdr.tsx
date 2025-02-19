// src/content/experience/k-pensa.tsx
"use client";

import React from "react";

const KPensaExperience = () => {
  return (
    <div className="space-y-6">
      <section className="text-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Internship at CDR Associates
          </p>
          <dl className="mt-6 divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">My Role</dt>
              <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                Web Designer <br />
                Planning Team Research Assistant
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Timeline</dt>
              <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                Dec 2024 - Jan 2025
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Tools Used</dt>
              <dd className="mt-1 text-sm leading-6 \]\ sm:col-span-2 sm:mt-0">
                Wordpress <br />
                Figma
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">Achievements</dt>
              <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                Brand Design <br />
                Website Design <br />
                Merch Production
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default KPensaExperience;
