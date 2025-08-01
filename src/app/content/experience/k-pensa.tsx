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

  const roleCards = [
    {
      title: "마케팅 위원장",
      period: "2023.09 - 2024.08",
      description: "클럽의 이벤트와 활동을 위한 마케팅 자료 디자인",
    },
    {
      title: "내무 위원장",
      period: "2024.09 - 2025.05",
      description: "클럽 운영 감독 및 모든 이벤트 원활한 진행",
    },
  ];

  const achievementCards = [
    {
      title: "포스터 디자인",
      description: "Adobe Illustrator를 활용한 다양한 이벤트 포스터 제작",
    },
    {
      title: "머천다이즈 디자인",
      description: "스티커 디자인을 통한 브랜드 아이덴티티 강화",
    },
    {
      title: "커뮤니티 구축",
      description: "회원 수 50% 증가를 통한 활발한 커뮤니티 형성",
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
      title: "머천다이즈 디자인",
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
              개요
            </h2>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              K-PEnSA 임원진
            </h1>
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

          {/* Role Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {roleCards.map((role, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {role.title}
                  </h3>
                  <p className="text-hajoon-400 text-sm mt-1">{role.period}</p>
                </div>
                <p className="text-gray-300">{role.description}</p>
              </div>
            ))}
          </div>

          {/* Project Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-center">
                <div className="text-hajoon-400 font-semibold text-sm mb-2">
                  기간
                </div>
                <div className="text-white font-medium">2023.09 - 현재</div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-center">
                <div className="text-hajoon-400 font-semibold text-sm mb-2">
                  사용 도구
                </div>
                <div className="text-white font-medium">
                  Adobe Illustrator <br />
                  Adobe Photoshop <br />
                  Figma <br />
                  React
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">내 역할</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              K-PEnSA에서 마케팅 위원장과 내무 위원장으로서 클럽의 성장과 운영을
              담당했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementCards.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
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
              머천다이즈 디자인
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              기존 K-PEnSA 머천다이즈는 주로 후드였는데, 이는 여러 문제점을
              가지고 있었습니다. 높은 생산 비용, 계절적 제약, 보관 및 배포의
              복잡성 등이 있었습니다.
            </p>
          </div>

          {/* Design Process */}
          <div className="bg-white rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              디자인 과정
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• 높은 생산 비용으로 인한 학생들의 접근성 부족</li>
              <li>• 계절적 날씨 제약으로 인한 제한된 사용성</li>
              <li>• 조직의 보관 및 배포 복잡성</li>
            </ul>
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
              머천다이즈 영향
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  접근성 향상
                </h4>
                <p className="text-gray-600">
                  낮은 가격대로 머천다이즈 접근성 증가
                </p>
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
