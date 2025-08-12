// src/content/experience/k-pensa.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experiences } from "@/data";

interface ImageStack {
  preview: string;
  images: string[];
}

const KPensaExperience = () => {
  const pensaData = experiences.find((exp) => exp.slug === "k-pensa");

  // Study session images
  const studyImages: ImageStack = {
    preview: "/images/k-pensa/PENSA-Study-1.jpg",
    images: [
      "/images/k-pensa/PENSA-Study-1.jpg",
      "/images/k-pensa/PENSA-Study-2.jpg",
      "/images/k-pensa/PENSA-Study-4.jpg",
      "/images/k-pensa/PENSA-Study-5.jpg",
      "/images/k-pensa/PENSA-Study-8.jpg",
      "/images/k-pensa/PENSA-Study-9.jpg",
      "/images/k-pensa/PENSA-Study-Halloween-1.jpg",
      "/images/k-pensa/PENSA-Study-Halloween-2.jpg",
      "/images/k-pensa/PENSA-Study-Valentine-1.jpg",
      "/images/k-pensa/PENSA-Study-Valentine-2.jpg",
    ],
  };

  // Event images
  const eventImages: ImageStack = {
    preview: "/images/k-pensa/PENSA-Mixer.jpg",
    images: [
      "/images/k-pensa/PENSA-Mixer.jpg",
      "/images/k-pensa/PENSA-EOY-Social-1.jpg",
      "/images/k-pensa/PENSA-EOY-Social-2.jpg",
      "/images/k-pensa/PENSA-EOY-Social-3.jpg",
      // "/images/k-pensa/PENSA-EOY-Social-Menu.jpg",
      "/images/k-pensa/PENSA-Faculty-Chat.jpg",

      "/images/k-pensa/PENSA-Movie-Night.jpg",
      "/images/k-pensa/PENSA-Social-2024F.jpg",
      "/images/k-pensa/PENSA-24S-Advance-Registration-Lunch.jpg",
      "/images/k-pensa/PENSA-Advance-Registration-23F.jpg",
    ],
  };

  const problemCards = [
    {
      title: "미비한 이벤트 홍보",
      description:
        "눈길을 사로잡는 포스터 디자인의 부재와 글로만 가득 채워진 홍보 이메일로 인해 회원 참여도가 저하되었습니다.",
    },
    {
      title: "방치된 공식 웹사이트",
      description:
        "수년간의 방치로 인한 UI 디자인 문제와 더불어 코드 버전 컨트롤 부재로 인해서 리액트의 최신 기능에 접근할 수 없었습니다.",
    },
    {
      title: "공식 굿즈 부재",
      description:
        "수년간 동아리 공식 굿즈가 없었기 때문에 회원들의 소속감을 강조하는 것에 어려움을 겪었습니다.",
    },
    {
      title: "한인 사회 축소에 따른 부원 감소",
      description:
        "학교 한인 인구가 줄어들면서 부원이 우하향하는 경향을 보이고 있었습니다.",
    },
  ];

  const projectSteps = [
    {
      step: "01",
      title: "마케팅 자료 디자인",
      description: "포스터, 홍보물 등 클럽 활동을 위한 시각적 자료 제작",
    },
    {
      step: "02",
      title: "웹사이트 개편",
      description:
        "5년간 방치된 웹사이트를 현대적이고 간결한 디자인으로 업데이트",
    },
    {
      step: "03",
      title: "굿즈 디자인",
      description:
        "스티커 디자인을 통한 브랜드 아이덴티티 강화 및 회원 참여도 향상",
    },
  ];

  const websiteProblems = [
    {
      title: "버전 컨트롤",
      description:
        "과거 버전 부트스트랩 라이브러리 사용으로 인해 최신 기능 적용 불가",
    },
    {
      title: "기본적인 디자인 규칙 무시",
      description:
        "페이지마다 다른 스타일과 디자인 시스템, 그리고 배경사진으로 인한 가독성 저하",
    },
    {
      title: "반응형 디자인 부재",
      description: "모바일 환경을 고려하지 않은 디자인",
    },
    {
      title: "기능성 부족",
      description: "작동하지 않는 Contact Us 페이지와 외부 링크",
    },
  ];

  const outcomes = [
    {
      title: "회원 수 증가",
      description: "마케팅 이니셔티브 주도로 첫 해에 회원 수 50% 증가",
    },
    {
      title: "웹사이트 개편",
      description: "향후 계속 유지보수가 가능한 성공적인 웹사이트 개편",
    },
    {
      title: "굿즈 브랜딩",
      description: "앞으로도 꾸준히 쓸 수 있는 굿즈 브랜딩",
    },
  ];

  const takeaways = [
    {
      title: "마케팅 전략 수립",
      description:
        "학생 조직의 특성을 고려한 마케팅 전략을 수립하고 실행하는 경험을 통해 실무 능력 향상",
    },
    {
      title: "웹 개발 역량",
      description:
        "디자인부터 개발까지 전 과정을 담당하며 프론트엔드 개발 역량을 크게 향상",
    },
    {
      title: "브랜딩 전략",
      description:
        "조직의 정체성을 반영한 브랜딩 전략을 수립하고 일관된 디자인 시스템을 구축",
    },
  ];

  // Sticker design data

  const stickerImages = [
    {
      src: "/images/merch/pensa/stickers-01.jpg",
      alt: "Pensa Merch",
      description: "Blue cat design - Inspired by our mascot's playful nature",
    },
    {
      src: "/images/merch/pensa/stickers-02.jpg",
      alt: "Pensa Merch",
      description: "Penn Engineering logo with K-PEnSA branding elements",
    },
    {
      src: "/images/merch/pensa/stickers-03.jpg",
      alt: "Pensa Merch",
      description: "Minimalist design featuring our organization's initials",
    },
    {
      src: "/images/merch/pensa/stickers-04.jpg",
      alt: "Pensa Merch",
      description: "Abstract pattern incorporating Penn's colors",
    },
  ];

  // Carousel state for each card
  const [studyCarouselIndex, setStudyCarouselIndex] = useState<number>(0);
  const [eventCarouselIndex, setEventCarouselIndex] = useState<number>(0);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-hajoon-500">
              Overview
            </h2>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              K-PEnSA
            </h1>
            <h4 className="text-white text-sm font-medium mt-2">
              (Korea-Penn Engineers and Scientists Association)
            </h4>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {pensaData?.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-hajoon-500 text-white text-xs font-medium px-3 py-1 rounded-full"
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
                <p className="text-hajoon-400 font-semibold text-sm">
                  Duration
                </p>
                <p className="text-white font-medium">2023.09 - 2025.05</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🛠️</span>
              <div className="text-left">
                <p className="text-hajoon-400 font-semibold text-sm">
                  Tools Used
                </p>
                <p className="text-white font-medium">
                  Adobe Illustrator, Photoshop, Figma, React
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Role Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="text-left max-w-3xl">
              <h2 className="text-base font-semibold leading-7 text-hajoon-500">
                My Role
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    Marketing Chair
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    2023.09 - 2024.08
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    이벤트 기획 및 홍보물 제작: 행사 목적과 대상에 맞춘 콘셉트
                    기획부터 포스터·온라인 콘텐츠 등 다양한 홍보물을 직접 디자인
                    및 제작하였습니다. <br />
                    공식 굿즈 제작 및 배포: 브랜딩 전략의 일환으로 굿즈 아이템을
                    기획하고, 디자인부터 제작 및 배포까지 전 과정을 주도하여
                    커뮤니티 소속감과 인지도 강화에 기여했습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    Internal Chair
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    2024.09 - 2025.05
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    공식 웹사이트 제작: 공식 웹사이트를 기획·디자인·개발하고
                    사용자 친화적인 UI/UX와 반응형 구조를 적용하여 커뮤니티
                    구성원 및 외부 방문자의 접근성과 활용도를 높였습니다.
                    <br />
                    이벤트 운영: 네트워킹 행사, 멘토링 세션, 패널 토론 등 다양한
                    온·오프라인 이벤트를 기획하고 운영했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Problem Statement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemCards.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-neutral-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              제가 K-PEnSA에서 진행한 주요 프로젝트들과 그 과정을 소개합니다.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-hajoon-500"></div>
            <div className="space-y-8">
              {projectSteps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-hajoon-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16 bg-white rounded-lg p-6 shadow-lg border border-gray-200 flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-hajoon-500 font-bold text-lg mr-3">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Materials Design */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              마케팅 자료 디자인
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              가장 많은 노력을 기울인 부분은 포스터였습니다. 포스터는 K-PEnSA의
              모든 커뮤니케이션 채널(정기 이메일, 인스타그램 등)을 통해 배포되기
              때문에, 회원들이 이벤트에 대한 정보를 얻을 때 첫인상 역할을
              합니다.
            </p>
          </div>

          {/* Image Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Study Sessions Stack */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <div className="relative mb-4">
                <Image
                  src={studyImages.images[studyCarouselIndex]}
                  alt="스터디 세션 포스터"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md w-full"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={() =>
                    setStudyCarouselIndex((prev) =>
                      prev === 0 ? studyImages.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setStudyCarouselIndex((prev) =>
                      prev === studyImages.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                >
                  ›
                </button>
              </div>

              {/* Image Indicators */}
              <div className="flex justify-center space-x-2 mb-4">
                {studyImages.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setStudyCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === studyCarouselIndex
                        ? "bg-hajoon-500"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                스터디 세션 포스터
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                정기적인 스터디 세션을 위한 포스터로 동아리의 가장 인기가 많고
                대표적인 행사이기에 포스터 간 통일성을 중요하게 생각했습니다.
                매번 달라지는 주제와 간식을 포스터에 반영해서 조금씩 변주를 주어
                지루하지 않은 디자인을 유지했습니다.
              </p>
            </div>

            {/* Events Stack */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <div className="relative mb-4">
                <Image
                  src={eventImages.images[eventCarouselIndex]}
                  alt="소셜 이벤트 포스터"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md w-full"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={() =>
                    setEventCarouselIndex((prev) =>
                      prev === 0 ? eventImages.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setEventCarouselIndex((prev) =>
                      prev === eventImages.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                >
                  ›
                </button>
              </div>

              {/* Image Indicators */}
              <div className="flex justify-center space-x-2 mb-4">
                {eventImages.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setEventCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === eventCarouselIndex
                        ? "bg-hajoon-500"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                이벤트 포스터
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                네트워킹과 친목 도모를 위한 소셜 이벤트 또는 학술 행사 포스터로
                각각의 행사에 맞게 다양한 색상과 스타일을 사용했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Redesign */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              웹사이트 개편
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-left">
              약 5년간 방치되어 있던 웹사이트를 개편했습니다.{" "}
              <span className="text-bold">
                {" "}
                단독으로 디자인부터 개발까지 진행까지 담당하며, 후에 제가
                졸업하고 난 후에도 꾸준히 유지관리가 가능한 시스템을
                만들어놓았습니다.{" "}
              </span>
              기존 웹사이트 구조는 유지하되, 전체적인 디자인 시스템을 더
              현대적이고 간결하게 업데이트했습니다.
            </p>
          </div>

          {/* Website Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                기존 웹사이트 문제점
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <Image
                    src="/images/k-pensa/website/old_website_1.png"
                    alt="이전 이미지 1"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="space-y-3">
                  <Image
                    src="/images/k-pensa/website/old_website_2.png"
                    alt="이전 이미지 2"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="space-y-3">
                  <Image
                    src="/images/k-pensa/website/old_website_3.png"
                    alt="이전 이미지 3"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="space-y-3">
                  <Image
                    src="/images/k-pensa/website/old_website_4.png"
                    alt="이전 이미지 4"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {websiteProblems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold text-lg">•</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {problem.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                개선 사항
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <a
                  href="https://k-pensa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-hajoon-500 hover:bg-hajoon-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center text-center"
                >
                  <div>
                    <div className="text-2xl mb-2">🌐</div>
                    <div className="text-sm">웹사이트</div>
                    <div className="text-xs opacity-90">방문하기</div>
                  </div>
                </a>
                <div className="space-y-3">
                  <Image
                    src="/images/k-pensa/website/New1.png"
                    alt="이전 이미지 2"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="space-y-3">
                  <Image
                    src="/images/k-pensa/website/New2.png"
                    alt="이전 이미지 3"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="space-y-3">
                  <Image
                    src="/images/k-pensa/website/New3.png"
                    alt="이전 이미지 4"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">버전 컨트롤</h4>
                    <p className="text-gray-600 text-sm">
                      최신 버전 React와 Tailwind CSS 사용으로 최적화된 코드 작성
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg">✓</span>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      현대적인 디자인
                    </h4>
                    <p className="text-gray-600 text-sm">
                      현대적이고 일관된 UI/UX 디자인으로 사용자 경험 개선
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      반응형 웹 디자인
                    </h4>
                    <p className="text-gray-600 text-sm">
                      모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험 제공
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      개선된 정보 구조
                    </h4>
                    <p className="text-gray-600 text-sm">
                      직관적인 네비게이션과 공식 이메일로 실시간으로 저장되는
                      Contact Us 페이지
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Design */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">굿즈 제작</h2>
            <div className="relative w-full h-96 mx-auto mb-6">
              <Image
                src="/images/thumbnail/Thumbnails-pensa-sticker.webp"
                alt="Pensa Sticker Thumbnail"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Design Change Reason */}
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            기존 굿즈였던 <span className="text-hajoon-500">후드티</span>의
            문제점
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-lg p-6 ">
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                높은 생산 비용
              </h4>
              <p className="text-gray-600 text-sm">
                후드 제작에는 단가가 높게 책정되어 학생들이 쉽게 구매하거나
                접근하기 어려웠습니다. 굿즈가 모두를 위한 것이 되기 위해서는
                가격 장벽을 낮추는 것이 필요했습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌤️</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                계절적 사용 한계
              </h4>
              <p className="text-gray-600 text-sm">
                후드는 특정 계절에만 착용 가능해 활용도가 낮고, 이로 인해 제작
                대비 효과가 제한적이었습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                보관 및 배포의 복잡성
              </h4>
              <p className="text-gray-600 text-sm">
                의류는 사이즈 분류, 재고 관리, 보관 공간 확보 등에서 복잡한
                관리가 요구되어 관리 차원에서 부담이 컸습니다.
              </p>
            </div>
          </div>
          <div className="mt-12 bg-hajoon-600 rounded-lg p-6 text-white leading-loose">
            <p className="text-alt-100 text-center">
              미국 대학에서 스티커는 학생들이 일상 속 다양한 물건에 쉽게 붙일 수
              있어 본인의 정체성을 나타내는 하나의 문화 요소입니다.
              <br />
              비용 부담이 적고 계절을 타지 않으며, 보관과 배포가 간편한 스티커는
              새로운 굿즈 형태에 가장 적합했습니다.
            </p>
          </div>

          {/* Stickers V2024 */}
          <div className="my-12 bg-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              스티커 V2024
            </h3>
            <p className="text-gray-700 max-w-4xl mx-auto text-left my-6">
              저는 Adobe Illustrator를 사용하여 스티커를 디자인했습니다. 미국의
              레트로한 스포츠 팀 로고들을 참고한 좌측 두 스티커와 귀여움에
              초점을 둔 K-PEnSA의 새로운 오리지날 마스코트인 고양이를 소개하는
              우측 두 스티커는 제가 만들었던 10여개의 디자인 중 투표로 채택되어
              실제로 제작/배포되었습니다.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {stickerImages.map((image, index) => (
                <div key={index} className="rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={150}
                    height={150}
                    className="object-cover rounded-lg w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stickers V2025 */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              스티커 V2025
            </h3>
            <p className="text-gray-600 mb-6 text-center my-6">
              전년도에 가장 인기 있었던 디자인은 고양이의 다양한 변형을 포함한
              스티커 시리즈를 만들기로 결정했습니다.
            </p>
            <div className="grid grid-cols-2 lg:flex flex-row justify-around items-center gap-4">
              <div className="relative w-96 h-96">
                <Image
                  src="/images/merch/pensa/stickers-2025-1.jpg"
                  alt="Pensa Merch 2025"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="relative w-96 h-96">
                <Image
                  src="/images/merch/pensa/stickers-2025-2.jpg"
                  alt="Pensa Merch 2025"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome & Impact */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outcome & Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              K-PEnSA에서의 활동을 통해 달성한 주요 성과들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-hajoon-500 to-hajoon-600 rounded-lg p-6 text-white"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-semibold">{outcome.title}</h3>
                </div>
                <p className="text-hajoon-100">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaways */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              이 프로젝트를 통해 얻은 귀중한 경험과 학습 내용들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row justify-center gap-6">
            {takeaways.map((takeaway, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {takeaway.title}
                </h3>
                <p className="text-gray-600">{takeaway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KPensaExperience;
