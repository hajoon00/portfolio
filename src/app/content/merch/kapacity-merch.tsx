"use client";

import React from "react";
import Image from "next/image";
import { merchDesigns } from "@/data";

const KapacityMerch = () => {
  const kapacityData = merchDesigns.find(
    (merch) => merch.slug === "kapacity-merch"
  );

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/images/merch/kapacity/kapacity-hoodie-back.jpg"
          alt="Kapacity Hoodie Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section with Glassmorphism Overlay */}
        <section className="h-screen flex items-center justify-center p-6">
          <div 
            className="max-w-6xl w-full rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="space-y-8">
              {/* Text content */}
              <div>
                <h2 className="text-base font-semibold leading-7 text-pink-400">
                  Overview
                </h2>
                <p className="mt-2 text-2xl text-white font-bold tracking-tight sm:text-2xl">
                  Kapacity 후드티 디자인
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {kapacityData?.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-pink-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="my-6 text-lg leading-8 text-gray-200">
                  University of Pennsylvania 대표 한인 밴드 Kapacity 멤버들을 위한
                  머천다이즈 디자인입니다. 클라이언트의 요청에 따라 한국 전통 문화의
                  요소를 담은 악기를 연주하는 호랑이의 역동적인 초상화를 후드티에
                  적용했습니다.
                </p>

                <p className="my-6 text-lg leading-8 text-gray-200">
                  Procreate를 사용해 로고와 호랑이 그래픽을 직접 손으로 그렸으며 Adobe
                  Illustrator를 이용해 멤버들의 이름을 새겨넣었습니다. 한국 전통
                  문화의 정체성을 현대적인 디자인으로 재해석한 드럼치는 호랑이는
                  추후에 공식 마스코트가 되었습니다.
                </p>
              </div>

              {/* Design images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src="/images/merch/kapacity/Kapacity-hoodie-final.png"
                    alt="Hoodie Back Design"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-300 mt-2 text-center">
                    후면 디자인
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/merch/kapacity/Kapacity-hoodie-front-final.jpg"
                    alt="Hoodie Front Design"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-300 mt-2 text-center">
                    앞면 디자인 (좌측 가슴)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6">제품 목업</h3>
              <Image
                src="/images/merch/kapacity/kapacity-hoodie-back.jpg"
                alt="Hoodie Product Mockup"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KapacityMerch;
