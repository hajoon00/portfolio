// src/content/experience/k-pensa.tsx
"use client";

import React from "react";
import Image from "next/image";
import { experiences } from "@/data";

const CDRExperience = () => {
  const cdrData = experiences.find((exp) => exp.slug === "cdr");

  const problemCards = [
    {
      title: "느린 로딩 속도",
      description:
        "워드프레스 빌더로 구축된 원래 웹사이트의 최적화 부족으로 인한 렌더링 속도 저하",
    },
    {
      title: "UI 문제",
      description:
        "수년간의 방치로 인한 썸네일 정렬 문제 및 구버전 워드프레스로 인한 기능 접근 제한",
    },
    {
      title: "부적절한 레이아웃",
      description:
        "디자인 결과물을 보여주기에 적합하지 않은 전체 레이아웃과 과도한 텍스트",
    },
    {
      title: "관리 시스템 부재",
      description:
        "코딩 기술이 없는 디자인 팀이 쉽게 웹사이트를 관리할 수 있는 시스템 부재",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "분석 & 리서치",
      description: "기존 웹사이트 분석 및 사용자 니즈 조사",
    },
    {
      step: "02",
      title: "디자인 시스템 구축",
      description: "모든 프로젝트가 공유하는 일관된 디자인 시스템 설계",
    },
    {
      step: "03",
      title: "반응형 디자인",
      description: "모든 기기에서 최적의 경험을 제공하는 반응형 레이아웃 구현",
    },
    {
      step: "04",
      title: "개발 & 테스트",
      description: "워드프레스 기반 개발 및 다양한 기기에서의 테스트",
    },
  ];

  const responsiveFeatures = [
    {
      title: "유연한 그리드",
      description: "화면 너비에 맞게 조정되는 그리드 시스템",
    },
    {
      title: "최적화된 이미지",
      description: "기기 해상도에 따라 로드되는 최적화된 이미지",
    },
    {
      title: "모바일 네비게이션",
      description: "모바일 사용자를 위한 재구성된 내비게이션",
    },
    {
      title: "터치 친화적",
      description: "터치 친화적인 인터랙티브 요소",
    },
  ];

  const outcomes = [
    {
      title: "고객 참여 향상",
      description: "성공적인 웹사이트 개편으로 고객 참여도 증가",
    },
    {
      title: "디자인 시스템 구현",
      description: "전체 스택 워드프레스 개발을 통한 새로운 디자인 시스템 구현",
    },
  ];

  const takeaways = [
    {
      title: "실무 경험",
      description: "브랜딩, 시장 조사 및 웹 디자인에 대한 실무 경험 획득",
    },
    {
      title: "전략적 사고",
      description: "디자인 전략, 경쟁 분석 및 팀 리더십 기술 강화",
    },
    {
      title: "데이터 기반 디자인",
      description: "브랜딩 결정에서 데이터 기반 디자인의 중요성 학습",
    },
  ];

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
              Internship at CDR Associates
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {cdrData?.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-hajoon-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Role & Project Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Web Designer
                </h3>
              </div>
              <p className="text-gray-300">
                웹사이트 개편 프로젝트의 유일한 웹 디자이너
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Planning Team Research Assistant
                </h3>
              </div>
              <p className="text-gray-300">
                기획팀 연구 보조원으로서 프로젝트 지원
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-center">
                <div className="text-hajoon-400 font-semibold text-sm mb-2">
                  Duration
                </div>
                <div className="text-white font-medium">
                  Dec 2024 - Jan 2025
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-center">
                <div className="text-hajoon-400 font-semibold text-sm mb-2">
                  Tools Used
                </div>
                <div className="text-white font-medium">Wordpress, Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Problem Statement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              기존 웹사이트의 다양한 문제점들을 해결하여 더 나은 사용자 경험을
              제공하기 위한 개편이 필요했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemCards.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              프로젝트 세부 페이지의 일관된 디자인 시스템을 구축하여 각
              프로젝트의 특성을 살리면서도 통일감 있는 레이아웃을 구현했습니다.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-hajoon-500"></div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
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

          <div className="mt-12">
            <Image
              className="rounded-lg shadow-xl"
              src="/images/cdr/cdr-website-figma.jpg"
              alt="CDR Mockup"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Responsive Design
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              모든 기기에서 최적의 시청 경험을 제공하도록 완전히 반응형으로
              설계되었습니다.
            </p>
          </div>

          {/* Responsive Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {responsiveFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Home Page Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Home Page
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Desktop
                </h4>
                <Image
                  className="rounded-lg shadow-md"
                  src="/images/cdr/cdr-home-desktop.jpg"
                  alt="CDR Home Desktop Design"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Mobile
                </h4>
                <Image
                  className="rounded-lg shadow-md"
                  src="/images/cdr/cdr-home-mobile.jpg"
                  alt="CDR Home Mobile Design"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          {/* Heritage Page Comparison */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Heritage Page
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Desktop
                </h4>
                <Image
                  className="rounded-lg shadow-md"
                  src="/images/cdr/cdr-heritage-desktop.jpg"
                  alt="CDR Heritage Desktop Design"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Mobile
                </h4>
                <Image
                  className="rounded-lg shadow-md"
                  src="/images/cdr/cdr-heritage-mobile.jpg"
                  alt="CDR Heritage Mobile Design"
                  width={1000}
                  height={1000}
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
              성공적인 웹사이트 개편을 통해 달성한 주요 성과들입니다.
            </p>
          </div>

          <div className="mb-12">
            <Image
              className="rounded-lg shadow-xl"
              src="/images/cdr/CDR-website.jpg"
              alt="CDR Mockup"
              width={1000}
              height={1000}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

          <div className="text-center">
            <a
              href="https://www.cdr.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-hajoon-500 hover:bg-hajoon-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              CDR Associates Website
            </a>
          </div>
        </div>
      </section>

      {/* Takeaways */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              이 프로젝트를 통해 얻은 귀중한 경험과 학습 내용들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

export default CDRExperience;
