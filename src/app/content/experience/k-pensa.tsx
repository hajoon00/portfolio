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
    preview: "/images/k-pensa/PENSA-EOY-Social-1.jpg",
    images: [
      "/images/k-pensa/PENSA-24S-Advance-Registration-Lunch.jpg",
      "/images/k-pensa/PENSA-Advance-Registration-23F.jpg",
      "/images/k-pensa/PENSA-EOY-Social-1.jpg",
      "/images/k-pensa/PENSA-EOY-Social-2.jpg",
      "/images/k-pensa/PENSA-EOY-Social-3.jpg",
      "/images/k-pensa/PENSA-EOY-Social-Menu.jpg",
      "/images/k-pensa/PENSA-Faculty-Chat.jpg",
      "/images/k-pensa/PENSA-Mixer.jpg",
      "/images/k-pensa/PENSA-Movie-Night.jpg",
      "/images/k-pensa/PENSA-Social-2024F.jpg",
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
      title: "가독성 부족",
      description: "옛날 사진 배경으로 인한 가독성 저하",
    },
    {
      title: "구식 디자인",
      description: "사용자 경험을 고려하지 않은 구식 디자인",
    },
    {
      title: "복잡한 구조",
      description: "정보 구조가 복잡하고 혼란스러운 네비게이션",
    },
    {
      title: "반응형 부족",
      description: "모바일 환경에서의 반응형 디자인 부재",
    },
  ];

  const outcomes = [
    {
      title: "회원 수 증가",
      description: "마케팅 이니셔티브 주도로 첫 해에 회원 수 50% 증가",
    },
    {
      title: "웹사이트 개편",
      description: "성공적인 웹사이트 개편으로 고객 참여도 향상",
    },
    {
      title: "브랜딩 영향",
      description:
        "여러 프로젝트의 브랜딩 결정에 영향을 미친 시장 인사이트 제공",
    },
  ];

  // Sticker design data
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

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

  // Modal state for viewing full images
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleStackClick = (stackType: "study" | "event") => {
    setModalImages(
      stackType === "study" ? studyImages.images : eventImages.images
    );
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setModalImages(null);
    setSelectedImageIndex(0);
  };

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
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              기존 웹사이트의 다양한 문제점들을 해결하여 더 나은 사용자 경험을
              제공하기 위한 개편이 필요했습니다.
            </p>
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
              프로젝트 과정
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              K-PEnSA에서 진행한 주요 프로젝트들과 그 과정을 소개합니다.
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
              가장 많은 노력을 기울인 부분은 포스터였습니다. 포스터는 PENSA의
              모든 커뮤니케이션 채널을 통해 배포되기 때문에, 회원들이 이벤트에
              대한 정보를 얻을 때 첫인상 역할을 합니다.
            </p>
          </div>

          {/* Image Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Study Sessions Stack */}
            <div
              className="relative cursor-pointer group bg-white rounded-lg p-6 shadow-lg"
              onClick={() => handleStackClick("study")}
            >
              <Image
                src={studyImages.preview}
                alt="스터디 세션 미리보기"
                width={400}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center group-hover:bg-opacity-70 transition-all">
                <span className="text-white text-xl font-bold">
                  스터디 세션
                </span>
              </div>
            </div>

            {/* Events Stack */}
            <div
              className="relative cursor-pointer group bg-white rounded-lg p-6 shadow-lg"
              onClick={() => handleStackClick("event")}
            >
              <Image
                src={eventImages.preview}
                alt="이벤트 미리보기"
                width={400}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center group-hover:bg-opacity-70 transition-all">
                <span className="text-white text-xl font-bold">
                  소셜 이벤트
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://instagram.com/kpensa_upenn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-hajoon-500 hover:bg-hajoon-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              인스타그램으로 이동
            </a>
          </div>

          {/* Modal for viewing images */}
          {modalImages && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <div className="relative max-w-3xl mx-auto px-16">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-100 text-2xl z-10"
                >
                  ×
                </button>

                {/* Left Navigation Button */}
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev === 0 ? modalImages.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-5xl opacity-75 hover:opacity-100 transition-opacity"
                >
                  ‹
                </button>

                <Image
                  src={modalImages[selectedImageIndex]}
                  alt={`갤러리 이미지 ${selectedImageIndex + 1}`}
                  width={700}
                  height={525}
                  className="rounded-lg"
                />

                {/* Right Navigation Button */}
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev === modalImages.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-5xl opacity-75 hover:opacity-100 transition-opacity"
                >
                  ›
                </button>

                <div className="flex justify-center space-x-2 mt-4">
                  {modalImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === selectedImageIndex
                          ? "bg-white"
                          : "bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Website Redesign */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              웹사이트 개편
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              약 5년간 방치되어 있던 웹사이트를 개편했습니다. 기존 웹사이트
              구조는 유지하되, 전체적인 디자인 시스템을 더 현대적이고 간결하게
              업데이트했습니다.
            </p>
          </div>

          {/* Website Problems */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {websiteProblems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <a
              href="https://k-pensa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-hajoon-500 hover:bg-hajoon-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              웹사이트 방문
            </a>
          </div>

          {/* Before/After Comparison */}
          <div className="bg-neutral-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              기존 웹사이트 문제점
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Image
                  src="/images/k-pensa/website/old_website_1.png"
                  alt="이전 이미지 1"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md w-full"
                />
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="text-gray-700 font-medium">
                    가독성이 떨어짐. 옛날 사진 배경.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Image
                  src="/images/k-pensa/website/old_website_2.png"
                  alt="이전 이미지 2"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md w-full"
                />
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="text-gray-700 font-medium">
                    구식 디자인, 사용자 경험 부족
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Image
                  src="/images/k-pensa/website/old_website_3.png"
                  alt="이전 이미지 3"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md w-full"
                />
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="text-gray-700 font-medium">
                    정보 구조가 복잡하고 혼란스러움
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Image
                  src="/images/k-pensa/website/old_website_4.png"
                  alt="이전 이미지 4"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md w-full"
                />
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="text-gray-700 font-medium">
                    모바일 반응형 부족
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Design */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              굿즈 디자인
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              높은 생산 비용으로 인한 학생들의 접근성 부족
              <br />
              계절적 날씨 제약으로 인한 제한된 사용성
              <br />
              조직의 보관 및 배포 복잡성
            </p>
          </div>

          {/* Stickers V2024 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              스티커 V2024
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stickerImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-0 pb-[100%] rounded-lg group"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                  {hoveredImage === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg flex items-center justify-center p-4 transition-opacity duration-200">
                      <p className="text-white text-center">
                        {image.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stickers V2025 */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              스티커 V2025
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              가장 인기 있었던 디자인은 파란 고양이였습니다. 그래서 고양이의
              다양한 변형을 포함한 스티커 시리즈를 만들기로 결정했습니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-0 pb-[100%]">
                <Image
                  src="/images/merch/pensa/stickers-2025-1.jpg"
                  alt="Pensa Merch 2025"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-0 pb-[100%]">
                <Image
                  src="/images/merch/pensa/stickers-2025-2.jpg"
                  alt="Pensa Merch 2025"
                  fill
                  className="object-cover rounded-lg"
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
              결과 및 영향
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

          {/* Merchandise Impact */}
          <div className="mt-12 bg-neutral-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              굿즈 영향
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  접근성 향상
                </h4>
                <p className="text-gray-600">낮은 가격대로 굿즈 접근성 증가</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  브랜드 가시성
                </h4>
                <p className="text-gray-600">
                  일상적인 스티커 사용으로 브랜드 가시성 향상
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  회원 참여도
                </h4>
                <p className="text-gray-600">
                  수집 가능한 디자인 시리즈로 회원 참여도 향상
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KPensaExperience;
