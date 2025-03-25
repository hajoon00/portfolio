"use client";

import React from "react";
import Image from "next/image";
const KapacityMerch = () => {
  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Kpacity Hoodie
          </p>

          <dl className="mt-10 divide-y divide-gray-800">
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
                Adobe Illustrator Procreate
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Design Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            I had to make an original graphic for the hoodie. The client wanted
            dynamic portrait of a tiger playing an instrument with the touch of
            Korean heritage.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Image
              src="/images/merch/kapacity/Kapacity-hoodie-final.png"
              alt="Hoodie 1"
              width={500}
              height={500}
            />
            <Image
              src="/images/merch/kapacity/Kapacity-hoodie-front-final.jpg"
              alt="Hoodie 2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-7 text-hajoon-600">
            Final Product
          </h2>
          <Image
            className="my-10"
            src="/images/merch/kapacity/kapacity-hoodie-back.jpg"
            alt="Hoodie 1"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </div>
  );
};

export default KapacityMerch;
