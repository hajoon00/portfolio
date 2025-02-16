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
            Marketing Chair @K-PEnSA (Korea-PENN Engineers & Scientists
            Association)
          </p>
          <dl className="mt-6 divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">My Role</dt>
              <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                Marketing Chair
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Timeline</dt>
              <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                Sept 2023 - now
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
    </div>
  );
};

export default KPensaExperience;
