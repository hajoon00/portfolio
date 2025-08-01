"use client";

import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { experiences } from "@/data";

const consultingProcess = [
  {
    step: "Step 1",
    title: "상담",
    description: `학생의 목표와 배경을 이해하기 위한 초기 상담`,
  },
  {
    step: "Step 2",
    title: "포트폴리오 컨셉 설정",
    description: "과외 활동과 학업 집중 분야에 대한 전략적 계획 수립",
  },
  {
    step: "Step 3",
    title: "에세이/이력서 개발",
    description: "매력적인 에세이와 포괄적인 이력서 개발",
  },
  {
    step: "Step 4",
    title: "Common Application",
    description: "Common Application 과정을 통한 가이던스",
  },
];

const ReadingForYouhak: NextPage = () => {
  const youhakData = experiences.find(
    (exp) => exp.slug === "reading-for-youhak"
  );

  const roleCards = [
    {
      title: "설립자",
      description: "Reading for Youhak 플랫폼 설립 및 비전 제시",
    },
    {
      title: "콘텐츠 디렉터",
      description: "교육 콘텐츠 전략 수립 및 제작 총괄",
    },
    {
      title: "디자이너",
      description: "브랜드 아이덴티티 및 시각적 자료 디자인",
    },
    {
      title: "영상 제작자",
      description: "YouTube 채널 운영 및 교육 영상 제작",
    },
    {
      title: "대학 입학 컨설턴트",
      description: "학생 개별 맞춤형 입학 상담 및 가이던스",
    },
  ];

  const problemCards = [
    {
      title: "정보 접근 제한",
      description: "한국에서 해외 대학 지원 정보 접근이 매우 제한적",
    },
    {
      title: "정보 불평등",
      description: "영어에 능숙하지 않은 학부모들의 정보 불평등 문제",
    },
    {
      title: "지역 정보 부족",
      description: "국제 학생들에게 접근하기 어려운 지역 정보",
    },
    {
      title: "플랫폼 부재",
      description: "모든 사람이 쉽게 접근할 수 있는 통합 플랫폼 부재",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "콘텐츠 제작",
      description: "YouTube를 통한 교육 비디오 제작 및 배포",
    },
    {
      step: "02",
      title: "커뮤니티 구축",
      description: "지속적인 정보 공유를 위한 커뮤니티 형성",
    },
    {
      step: "03",
      title: "비즈니스 전환",
      description: "체계적인 컨설팅 서비스로 지속 가능한 비즈니스 구축",
    },
  ];

  const outcomes = [
    {
      title: "66,000+ 조회수",
      description: "교육 비디오 총 조회수 66,000+ 달성",
    },
    {
      title: "명문대 합격",
      description: "Yale, Cornell, Imperial College 등 명문 대학 합격 실적",
    },
    {
      title: "브랜드 구축",
      description: "한국 교육 컨설팅 분야에서 인지도 있는 브랜드 구축",
    },
  ];

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
              콘텐츠 디렉터 @Reading for Youhak
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {youhakData?.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-hajoon-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-300 text-center max-w-3xl mx-auto">
            저는{" "}
            <span className="text-hajoon-400 font-semibold">
              Reading for Youhak
            </span>
            을 설립했습니다. 이는 미국 대학 지원에 있어 재정적 또는 제도적
            장벽에 직면한 학생들을 안내하는 플랫폼입니다. 콘텐츠 중심의 마케팅과
            디지털 참여를 통해 이 플랫폼은 지속 가능한 비즈니스로 성장했습니다.
          </p>

          {/* Role Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleCards.map((role, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {role.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">{role.description}</p>
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
                <div className="text-white font-medium">
                  2019년 1월 - 2020년 9월
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-center">
                <div className="text-hajoon-400 font-semibold text-sm mb-2">
                  사용 도구
                </div>
                <div className="text-white font-medium">
                  Adobe Illustrator <br />
                  Adobe Premiere Pro
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">문제 제기</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              한국에서는 해외 대학 지원에 대한 정보 접근이 매우 제한적입니다.
              특히 영어에 능숙하지 않은 학부모들은 정보 불평등에 더욱
              취약합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemCards.map((problem, index) => (
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
        </div>
      </section>

      {/* Process & Approach */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              과정 및 접근 방식
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reading for Youhak의 설립 철학은 쉽게 접근할 수 있는 유학 정보를
              제공하는 것이었습니다.
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
        </div>
      </section>

      {/* Content Production */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              콘텐츠 제작
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              YouTube를 주요 플랫폼으로 선택하여 복잡한 입학 주제를 단순화한
              50개 이상의 비디오를 제작했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                YouTube 홈
              </h3>
              <Image
                src="/images/reading-for-youhak/youtube-home.jpg"
                alt="youtube home"
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                YouTube 영상들
              </h3>
              <Image
                src="/images/reading-for-youhak/youtube-videos.jpg"
                alt="youtube videos"
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.youtube.com/@유학읽어주는남자"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-hajoon-500 hover:bg-hajoon-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              YouTube 채널 방문
            </a>
          </div>
        </div>
      </section>

      {/* Community Building */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              커뮤니티 구축
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              지속적인 정보 공유를 가능하게 하는 커뮤니티를 만들고 더 체계적인
              자료를 배포하기 시작했습니다.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  강의 노트 공유
                </h3>
                <p className="text-gray-600 text-sm">
                  AP/SAT II 강의 노트를 직접 제작하여 공유
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  입학 타임라인
                </h3>
                <p className="text-gray-600 text-sm">
                  3년간의 입학 타임라인과 학교별 체크리스트 편집
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  오픈 채팅방
                </h3>
                <p className="text-gray-600 text-sm">
                  빠른 응답과 자원 공유를 위한 오픈 채팅방 설정
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Business */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              지속 가능한 비즈니스로 전환
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              단순히 에세이나 이력서를 검토하는 것이 아니라, 처음부터 끝까지
              전체 입학 과정에 걸쳐 체계적인 지원을 제공하는 더 포괄적인 접근
              방식을 취했습니다.
            </p>
          </div>

          {/* Consulting Process */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              컨설팅 과정
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingProcess.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-hajoon-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
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
              Reading for Youhak을 통해 달성한 주요 성과들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              href="https://www.youtube.com/@유학읽어주는남자"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-hajoon-500 hover:bg-hajoon-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              YouTube 채널 방문
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadingForYouhak;
