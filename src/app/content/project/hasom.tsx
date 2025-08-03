// src/content/experience/k-pensa.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";

const Hasom = () => {
  const hasomData = projects.find((proj) => proj.slug === "hasom");

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-sky-300">
              Overview
            </h2>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Hasom – A Craft Brand Identity
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {hasomData?.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-sky-700 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg leading-8 text-sky-100">
              Hasom은 게으르고 까칠하지만 우아한 고양이 하솜의 성격에서 영감을
              받은 크래프트 브랜드입니다. 브랜드의 정체성은 하솜의 핑크빛 피부와
              하늘색 눈을 대표하는 이중성을 중심으로 이루어져 디자인 시스템의
              기초가 되었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Concept Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Brand Concept & Identity
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto text-left">
              브랜드 컨셉은 하솜의 독특한 성격을 장난스럽고 우아한 시각적 언어로
              번역하는 것을 중심으로 구축되었습니다. 컬러 팔레트는 이중적 관점을
              나타냅니다: 핑크는 우리가 하솜을 보는 방식, 파랑은 하솜이 세상을
              보는 방식을 의미합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Development Section */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Logo Development
            </h2>
          </div>
          <div className=" mx-auto">
            <p className="text-lg leading-8 text-neutral-700 mb-6 text-left">
              메인 심볼은 하솜의 특징적인 요소들인 하늘색 눈, 핑크빛 눈꺼풀,
              섬세한 코를 반영하도록 디자인되었으며 미니멀한 접근 방식을
              유지합니다. 다양한 로고 변형을 만들어 다양한 적용 분야에서의
              유연성을 보장했습니다.
            </p>
            <Image
              src="/images/hasom/Logo-Design.jpg"
              alt="Logo Design"
              width={1200}
              height={900}
              className="shadow-lg mx-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Typography & Elements Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Typography & Graphic Elements
            </h2>
          </div>
          <div className=" mx-auto">
            <p className="text-lg leading-8 text-neutral-700 mb-6 text-left">
              브랜드는 깔끔하고 현대적인 외관을 위해 Montserrat을 주
              타이포그래피로 사용하며, 장난스러운 터치를 더하는 보조
              타이포그래피로 All Round Gothic을 보완합니다. 하솜의 특이한
              움직임과 선호도를 반영하는 커스텀 그래픽 요소들이 개발되었습니다.
            </p>
            <Image
              src="/images/hasom/Typography.jpg"
              alt="Typography"
              width={1200}
              height={900}
              className="shadow-lg mx-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Color Palette & Symbolism
            </h2>
          </div>
          <div className=" mx-auto">
            <Image
              src="/images/hasom/Color-Palette.jpg"
              alt="Color Palette"
              width={1200}
              height={900}
              className="shadow-lg mx-auto w-full"
            />
            <p className="text-lg leading-8 text-neutral-700 my-6 text-left">
              브랜드의 핵심 컬러—Red (#FF2D46), Pink (#FFDCE1), Blue
              (#B4DAF9)—는 하솜의 성격의 다양한 측면을 나타내기 위해 신중하게
              선택되었습니다. 핑크는 하솜의 육체적 매력과 특이함을, 파랑은
              하솜이 세상을 보는 관점을 나타냅니다.
            </p>
            <Image
              src="/images/hasom/Color-Symbol.jpg"
              alt="Color Symbol"
              width={1200}
              height={900}
              className="shadow-lg mx-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Brand Application Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Brand Application
            </h2>
          </div>
          <div className=" mx-auto">
            <p className="text-lg leading-8 text-neutral-700 mb-6 text-left">
              브랜드 정체성은 비즈니스 카드, 패키징, 머천다이즈를 포함한 다양한
              터치포인트에 적용되었습니다. 각 적용은 하솜의 이야기를 전하는
              장난스럽지만 미니멀한 미학을 만들면서 브랜드 일관성을 유지하도록
              디자인되었습니다.
            </p>
            <div className="space-y-6">
              <div className="text-center">
                <Image
                  src="/images/hasom/Business-Card.jpg"
                  alt="Business Card"
                  width={1200}
                  height={900}
                  className="shadow-lg mx-auto w-full"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/hasom/Pink-Mockup.jpg"
                  alt="Pink Mockup"
                  width={1200}
                  height={900}
                  className="shadow-lg mx-auto w-full"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/hasom/Blue-Mockup.jpg"
                  alt="Blue Mockup"
                  width={1200}
                  height={900}
                  className="shadow-lg mx-auto w-full"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/hasom/Sticker-Mockup.jpg"
                  alt="Sticker Mockup"
                  width={1200}
                  height={900}
                  className="shadow-lg mx-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20 sm:py-32 bg-neutral-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Outcome & Impact
            </h2>
          </div>
          <div className=" mx-auto">
            <p className="text-lg leading-8 text-neutral-700 text-left">
              이 프로젝트는 디자인을 통해 하솜의 이야기를 효과적으로 전달하는
              일관되고 확장 가능한 브랜드 정체성을 성공적으로 구축했습니다.
              결과는 다양한 플랫폼과 적용 분야에서 그 무결성을 유지하는 인식
              가능하고 장난스러운 브랜드 시스템입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Fixed button at bottom center */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <Link href="/sides">
          <button
            type="button"
            className="text-white bg-sky-700/70 hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-lg transition-all duration-300"
          >
            다른 사이드 프로젝트 보러가기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hasom;
