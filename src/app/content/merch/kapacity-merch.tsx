"use client";

import React from "react";
import Image from "next/image";
import { merchDesigns } from "@/data";

const KapacityMerch = () => {
  const kapacityData = merchDesigns.find(
    (merch) => merch.slug === "kapacity-merch"
  );

  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-pink-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            Kapacity 후드티 디자인
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {kapacityData?.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-pink-900 text-pink-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="my-6 text-lg leading-8 text-alt-700">
            University of Pennsylvania 대표 한인 밴드 Kapacity 멤버들을 위한
            머천다이즈 디자인입니다. 클라이언트의 요청에 따라 한국 전통 문화의
            요소를 담은 악기를 연주하는 호랑이의 역동적인 초상화를 후드티에
            적용했습니다.
          </p>

          <p className="my-6 text-lg leading-8 text-alt-700">
            Procreate를 사용해 로고와 호랑이 그래픽을 직접 손으로 그렸으며 Adobe
            Illustrator를 이용해 멤버들의 이름을 새겨넣었습니다. 한국 전통
            문화의 정체성을 현대적인 디자인으로 재해석한 드럼치는 호랑이는
            추후에 공식 마스코트가 되었습니다.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-alt-700 mb-6">
            디자인 및 목업
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/merch/kapacity/Kapacity-hoodie-final.png"
                alt="Hoodie Front Design"
                width={500}
                height={500}
              />
              <p className="text-sm text-alt-600 mt-2 text-center">
                후면 디자인
              </p>
            </div>
            <div>
              <Image
                src="/images/merch/kapacity/Kapacity-hoodie-front-final.jpg"
                alt="Hoodie Front Mockup"
                width={500}
                height={500}
              />
              <p className="text-sm text-alt-600 mt-2 text-center">
                앞면 디자인 (좌측 가슴)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-alt-700 mb-6">제품 목업</h3>
          <Image
            className="my-10"
            src="/images/merch/kapacity/kapacity-hoodie-back.jpg"
            alt="Hoodie Back Mockup"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </div>
  );
};

export default KapacityMerch;
