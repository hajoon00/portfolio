"use client";

import React from "react";
import Image from "next/image";
import { experiences } from "@/data";

const Nyangiverse = () => {
  const nyangiverseData = experiences.find((exp) => exp.slug === "nyangiverse");
  const [hasomCarouselIndex, setHasomCarouselIndex] = React.useState(0);
  const [haronCarouselIndex, setHaronCarouselIndex] = React.useState(0);

  const hasomImages = [
    {
      src: "/images/nyangiverse/Card-Hasom-front.jpg",
      alt: "하솜 신분증",
      title: "하솜 신분증 앞면",
      description: "냥이버스 속 주민등록증",
    },
    {
      src: "/images/nyangiverse/Card-Hasom-back.jpg",
      alt: "하솜 신분증 뒷면",
      title: "하솜 신분증 뒷면",
      description: "지문 대신 발바닥!",
    },
    {
      src: "/images/nyangiverse/hasom-sticker.webp",
      alt: "하솜 스티커",
      title: "하솜 스티커",
      description: "외향형 하솜",
    },
    {
      src: "/images/nyangiverse/hoodie-hasom-navy.jpg",
      alt: "하솜 후드",
      title: "하솜 후드",
      description: "수다쟁이 하솜",
    },
  ];

  const haronImages = [
    {
      src: "/images/nyangiverse/Card-Haron-front.jpg",
      alt: "하론 신분증",
      title: "하론 신분증 앞면",
      description: "냥이버스 속 주민등록증",
    },
    {
      src: "/images/nyangiverse/Card-Haron-back.jpg",
      alt: "하론 신분증 뒷면",
      title: "하론 신분증 뒷면",
      description: "지문 대신 발바닥!",
    },
    {
      src: "/images/nyangiverse/haron-sticker.webp",
      alt: "하론 스티커",
      title: "하론 스티커",
      description: "내향형 하론",
    },
    {
      src: "/images/nyangiverse/hoodie-haron-gray.jpg",
      alt: "하론 후드",
      title: "하론 후드",
      description: "침묵이 좋은 하론",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-pink-300">
              Overview
            </h2>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              NYANGIVERSE
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {nyangiverseData?.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📅</span>
              <div className="text-left">
                <p className="text-pink-300 font-semibold text-sm">Duration</p>
                <p className="text-white font-medium">2025.02 - 2025.04</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🛠️</span>
              <div className="text-left">
                <p className="text-pink-300 font-semibold text-sm">
                  Tools Used
                </p>
                <p className="text-white font-medium">
                  React, Adobe Illustrator, Adobe Photoshop, Procreate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="text-left max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-pink-500">
                Project Overview
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 my-3">
                창의적인 디지털 세계관
              </h3>

              <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p>
                  냥이버스는 제가 키우는 두 고양이, 하솜이와 하론이를 모티브로
                  만든 가상 캐릭터 세계관입니다. 이 프로젝트의 목표는 다음과
                  같습니다.
                </p>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-800 mb-3">
                    첫째, 기억의 보존
                  </h4>
                  <p>
                    하솜이와 하론이의 성격과 추억을 저만의 창의적인 디지털
                    매체로 기록하고 남기는 것.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-6">
                  <h4 className="font-semibold text-pink-800 mb-3">
                    둘째, 확장 가능한 브랜딩
                  </h4>
                  <p>
                    감정적으로 공감할 수 있으면서도 시각적으로 일관된, 앞으로
                    브랜딩이나 굿즈로도 확장할 수 있는 인터랙티브 공간을 만드는
                    것.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl  text-center font-bold text-gray-900 mb-8">
              프로젝트의 배경
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              저는 고양이 세 마리를 키웠는데, 그중 첫째는 작년에 세상을
              떠났습니다.
              <br />
              <br />
              가장 마음이 아팠던 건, 한국과 미국을 오가느라 그 친구와 충분히
              함께하지 못했다는 점이었습니다. 지금 남아 있는 하솜이와 하론이는
              어느덧 열 살이 되어가지만, 지난 몇 년간 실제로 본 시간은 손에 꼽을
              만큼 짧았습니다.
              <br />
              <br /> 한국에 돌아올 때마다 우리에게 남은 시간이 많지 않다는 걸
              점점 더 실감하게 되었고, 그래서 저는 그 아이들을 제 삶에 오래도록
              남기고 싶었습니다. 그것도 제가{" "}
              <span className="text-pink-600 font-semibold">
                가장 잘할 수 있는 방식
              </span>
              으로요.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              디자인 과정
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              하솜이와 하론이를 모티브로 한 캐릭터 디자인부터 인터랙티브
              웹사이트 구현까지의 전체 과정
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>
            <div className="space-y-8">
              {/* designProcess is removed as per edit hint */}
            </div>
          </div>
        </div>
      </section>

      {/* Pixel Art Choice */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              픽셀 아트를 선택한 이유
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col h-full">
              <div className="relative w-full h-96 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={"/images/nyangiverse/pokemon.jpeg"}
                  alt={"포켓몬"}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                레트로 향수
              </h3>
              <p className="text-gray-600 mb-4">
                이 프로젝트는 기억을 시각화한 작업으로, 제가 그들을 바라보는
                시선을 존중하는 방식으로 구현했습니다. 특히 90년대와 2000년대
                초반에 태어난 사람이라면 누구나 픽셀 스프라이트 게임을 한 번쯤
                경험해봤을 것입니다. 픽셀 아트는 우리를 다시 어린 시절로
                데려가지만, 유치하진 않습니다.
              </p>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4 mt-auto">
                <p className="text-sm text-gray-700">
                  우리 모두 한 때는 포켓몬 트레이너
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="relative w-full h-96 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={"/images/nyangiverse/pixel-minimal.jpeg"}
                  alt={"미니멀 픽셀아트"}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                미니멀리즘
              </h3>

              <p className="text-gray-600 mb-4">
                픽셀 아트는 불필요한 복잡함 없이 단순하면서도 풍부한 표현이
                가능하고, 시각적으로도 일관성이 있습니다.
              </p>
              <p className="text-gray-600 mb-4">
                또한 픽셀 아트는 캐릭터의 해부학적 구조를 사람처럼 자유롭게
                변형해도 위화감이 적고, 인간처럼 움직이지만 여전히
                &apos;그들다움&apos;을 유지할 수 있는 자유로움을 줍니다.
              </p>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-4 mt-auto">
                <p className="text-sm text-gray-700">
                  모두가 4D를 외칠 때 2D로 역행하는 강단
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Design Section */}
      <section className="py-16 sm:py-24 ">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              캐릭터 디자인 & 디지털 제작
            </h2>
            <p className="text-lg text-gray-600 lead-loose mx-auto">
              가장 중요한 것은 실제 고양이들의 외형과 닮은 캐릭터를 디자인하는
              것이었습니다. <br />
              저는 그들이 고양이라는 개념에 묶이기 보다는 개성이 있는 객체로서
              보이게 하고 싶었기 때문에 의인화를 선택했습니다.
            </p>
          </div>

          {/* Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Hasom Card */}
            <div className="bg-white p-6 group items-center">
              <div className="relative w-4/5 h-96 mb-4 rounded-lg overflow-hidden mx-auto">
                {/* Real Cat Image */}
                <Image
                  src="/images/nyangiverse/hasom-real.jpg"
                  alt="하솜 실제 사진"
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Character Image */}
                <Image
                  src="/images/nyangiverse/Result-Hasom.png"
                  alt="하솜 캐릭터"
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                하솜
              </h3>
            </div>

            {/* Haron Card */}
            <div className="bg-white p-6 group">
              <div className="relative w-4/5 h-96 mb-4 rounded-lg overflow-hidden mx-auto">
                {/* Real Cat Image */}
                <Image
                  src="/images/nyangiverse/haron-real.jpg"
                  alt="하론 실제 사진"
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Character Image */}
                <Image
                  src="/images/nyangiverse/Result-Haron.png"
                  alt="하론 캐릭터"
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                하론
              </h3>
            </div>
          </div>
          <p className="text-lg text-gray-600 text-center mx-auto">
            하론이와 하솜이의 매력은 생김새도 성격도 정반대지만 마치
            티격태격하는 남매처럼 독특한 관계성에서 나옵니다.
            <br />
            저는 이 관계성을 시각적으로 표현하는 데 큰 흥미를 느꼈습니다.
          </p>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mt-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-purple-800">하솜이</h5>
                <p className="text-sm">
                  외향적이고 장난꾸러기이며, 가끔은 덤벙거리지만 어딘가 우아한
                  매력이 있습니다.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-pink-800">하론이</h5>
                <p className="text-sm">
                  조용하고 낯가림이 있지만, 마음을 열면 누구보다 다정한
                  고양이입니다.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-600 text-center mx-auto mt-12">
            저는 사람들이 이들에게 더욱 몰입할 수 있도록 이들에게{" "}
            <span className="font-bold">캐릭터성</span>을 부여하기로 했습니다.{" "}
            <br />
            그들에게 인격을 부여하고, 그에 따른 이야기를 쌓아갔습니다.
          </p>

          {/* Character Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Hasom Carousel */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={hasomImages[hasomCarouselIndex].src}
                  alt={hasomImages[hasomCarouselIndex].alt}
                  fill
                  className="object-contain"
                />

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                  onClick={() =>
                    setHasomCarouselIndex((prev) => (prev === 0 ? 3 : prev - 1))
                  }
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                  onClick={() =>
                    setHasomCarouselIndex((prev) => (prev === 3 ? 0 : prev + 1))
                  }
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Indicators */}
                <div className="flex justify-center absolute bottom-4 left-0 right-0 space-x-2">
                  <button
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      hasomCarouselIndex === 0 ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    onClick={() => setHasomCarouselIndex(0)}
                  />
                  <button
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      hasomCarouselIndex === 1 ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    onClick={() => setHasomCarouselIndex(1)}
                  />
                  <button
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      hasomCarouselIndex === 2 ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    onClick={() => setHasomCarouselIndex(2)}
                  />
                  <button
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      hasomCarouselIndex === 3 ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    onClick={() => setHasomCarouselIndex(3)}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {hasomImages[hasomCarouselIndex].title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {hasomImages[hasomCarouselIndex].description}
              </p>
            </div>

            {/* Haron Carousel */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={haronImages[haronCarouselIndex].src}
                  alt={haronImages[haronCarouselIndex].alt}
                  fill
                  className="object-contain"
                />

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                  onClick={() =>
                    setHaronCarouselIndex((prev) => (prev === 0 ? 3 : prev - 1))
                  }
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                  onClick={() =>
                    setHaronCarouselIndex((prev) => (prev === 3 ? 0 : prev + 1))
                  }
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Indicators */}
                <div className="flex justify-center absolute bottom-4 left-0 right-0 space-x-2">
                  <button
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      haronCarouselIndex === 0 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setHaronCarouselIndex(0)}
                  />
                  <button
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      haronCarouselIndex === 1 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setHaronCarouselIndex(1)}
                  />
                  <button
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      haronCarouselIndex === 2 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setHaronCarouselIndex(2)}
                  />
                  <button
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      haronCarouselIndex === 3 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setHaronCarouselIndex(3)}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {haronImages[haronCarouselIndex].title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {haronImages[haronCarouselIndex].description}
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 text-center mx-auto mt-12">
            더 많은 그래픽과 그걸 이용한 제품들은 곧 나올 공식 홈페이지에서 보실
            수 있습니다.
          </p>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">웹사이트 제작</h2>
            <div className="flex my-12">
              <a
                href="https://nyangiverse.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-100 bg-pink-700 rounded-lg p-4 max-w-3xl mx-auto"
              >
                웹사이트 바로가기
              </a>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              이곳은 하솜이와 하론이에 대한 저의 기억을 사람들과 나누고, 그들의
              흔적을 제 방식으로 남기는 디지털 아카이브입니다.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              하나의 가상 브랜드의 공식 웹사이트를 만들었으며 브랜드 소개와 각종
              제품들, 그리고 하솜과 하론을 주인공으로 한
              <span className="font-bold"> 만화까지 만나보실 수 있습니다.</span>
            </p>
          </div>
          <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              인터랙티브 경험
            </h3>
            <p className="text-center text-lg">
              React 컴포넌트와 Tailwind CSS를 활용하여 직관적이고 몰입감 있는
              환경을 제작했습니다. 방문자들이 인터랙티브 요소와 시각적
              스토리텔링을 통해 하솜이와 하론이의 독특한 성격을 경험할 수 있도록
              구현했습니다.
            </p>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-purple-800 mb-2">React 구현</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 컴포넌트 기반 아키텍처</li>
                  <li>• 파일 관리 및 인터랙션</li>
                  <li>• 라우팅 및 네비게이션</li>
                  <li>• 성능 최적화</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-pink-800 mb-2">Tailwind CSS</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 반응형 디자인 시스템</li>
                  <li>• 커스텀 색상 팔레트</li>
                  <li>• 애니메이션 및 전환</li>
                  <li>• 접근성 고려</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Production & Exhibition Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              실제 제품 제작과 전시
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              캐릭터 디자인을 바탕으로 스티커와 포스터 등 실제 제품들을
              제작하고, 학교에서 전시하여 대중들과 직접 소통할 수 있었습니다.
            </p>
          </div>

          {/* Exhibition Photos */}
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white overflow-hidden">
                <div className="relative w-1/3 h-96 mx-auto">
                  <Image
                    src="/images/nyangiverse/Park_Hajoon_1.jpg"
                    alt="전시 현장 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-white overflow-hidden">
                <div className="relative w-1/2 h-96 mx-auto">
                  <Image
                    src="/images/nyangiverse/Park_Hajoon_2.JPG"
                    alt="스티커"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Impact Section */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              이 프로젝트를 통해 얻은 핵심 인사이트들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                브랜드 디자인
              </h3>
              <p className="text-gray-600">
                개인적 경험을 바탕으로 한 브랜드 아이덴티티를 구축하며 대중에게
                나만의 브랜드를 각인시키는 방법을 배웠습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                전시 경험
              </h3>
              <p className="text-gray-600">
                실제 제품 제작과 다양한 전시를 통해서 상품을 정말
                &quot;제작&quot;한다는 것이 무엇인지 느낄 수 있었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nyangiverse;
