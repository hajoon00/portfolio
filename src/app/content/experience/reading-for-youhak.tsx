"use client";

import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
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
    description: "교과외 활동과 학업 집중 분야에 대한 전략적 계획 수립",
  },
  {
    step: "Step 3",
    title: "에세이/이력서 개발",
    description: "개인의 캐릭터를 살리는 에세이와 이력서 작성",
  },
  {
    step: "Step 4",
    title: "Common Application",
    description: "Common Application 과정을 통한 가이던스",
  },
];

const ReadingForYouhak: NextPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const youhakData = experiences.find(
    (exp) => exp.slug === "reading-for-youhak"
  );

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // 스크롤 중임을 표시
      setIsScrolling(true);

      // 스크롤이 멈춘 후 1초 뒤에 인디케이터 숨김
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

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
      description:
        "유튜브 영상 총 조회수 66,000+ 달성. 미국 대입 관련 유튜브 검색 결과 상위권 차지.",
    },
    {
      title: "수강생 명문대 합격",
      description: "Yale, Cornell, Imperial College 등 명문 대학 합격 실적",
    },
    {
      title: "브랜드 구축",
      description: "한국 교육 컨설팅 분야에서 인지도 있는 브랜드 구축",
    },
  ];

  const takeaways = [
    {
      title: "콘텐츠 마케팅",
      description:
        "YouTube에 교육 콘텐츠를 직접 기획·제작·배포하며 디지털 마케팅 실무 역량을 키웠습니다.",
    },
    {
      title: "커뮤니티 구축",
      description:
        "같은 관심사와 니즈를 가진 사람들을 모아 활발한 커뮤니티를 만드는 방법을 배웠습니다.",
    },
    {
      title: "비즈니스 모델 구축",
      description:
        "무료 콘텐츠에서 유료 컨설팅으로 자연스럽게 이어지는 지속 가능한 비즈니스 모델을 구축했습니다.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: scrollProgress > 0 && isScrolling ? 1 : 0,
          x: scrollProgress > 0 && isScrolling ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center space-y-2 opacity-50">
          <div className="w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-alt-600 rounded-full"
              style={{ height: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.span
            className="text-xs font-medium text-gray-600 transform whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 0 && isScrolling ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {Math.round(scrollProgress)}%
          </motion.span>
        </div>
      </motion.div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-24 sm:py-32 bg-gradient-to-br from-red-900 via-red-800 to-red-900"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base font-semibold leading-7 text-red-300"
            >
              Overview
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              유학 읽어주는 남자
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 flex flex-wrap justify-center gap-2"
            >
              {youhakData?.hashtags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center space-x-3"
            >
              <span className="text-2xl">📅</span>
              <div className="text-left">
                <p className="text-red-300 font-semibold text-sm">Duration</p>
                <p className="text-white font-medium">
                  2019년 1월 - 2020년 9월
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="flex items-center space-x-3"
            >
              <span className="text-2xl">🛠️</span>
              <div className="text-left">
                <p className="text-red-300 font-semibold text-sm">Tools Used</p>
                <p className="text-white font-medium">
                  Adobe Illustrator, Premiere Pro
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* My Role Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="text-left max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-base font-semibold leading-7 text-red-600 mb-2"
              >
                My Role
              </motion.h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-semibold text-neutral-900 mb-4"
                  >
                    설립자 & 콘텐츠 디렉터
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-neutral-700 text-base leading-relaxed"
                  >
                    제가 설립한{" "}
                    <span className="text-red-800 font-semibold">
                      유학 읽어주는 남자
                    </span>
                    는 미국 대학 지원에 있어 재정적 또는 제도적 장벽에 직면한
                    학생들을 안내하는 플랫폼입니다. 콘텐츠 중심의 마케팅과
                    디지털 참여를 통해 이 플랫폼은 지속 가능한 비즈니스로
                    성장했습니다.
                    <br />
                    저는 모든 시각적인 요소(로고, 영상 편집, 배포 자료)의
                    디자인을 전담했으며 수천명에게 전달되는 하나의 브랜드를
                    처음부터 끝까지 만들어 나가는 과정을 경험했습니다.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Problem Statement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 bg-neutral-100"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-neutral-900 mb-4 mx-4"
            >
              문제 제기
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-neutral-600 max-w-3xl mx-4"
            >
              한국에서는 해외 대학 지원 정보를 얻기가 매우 어렵습니다. 특히
              영어에 익숙하지 않은 학부모들은 정보 격차를 더 크게 느낄 수밖에
              없습니다.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemCards.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200"
              >
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-lg font-semibold text-neutral-900 mb-3"
                >
                  {problem.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-neutral-600"
                >
                  {problem.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process & Approach */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-neutral-900 mb-4"
            >
              과정 및 접근 방식
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-neutral-600 max-w-3xl mx-auto"
            >
              유학 읽어주는 남자는 누구나 쉽게 접근할 수 있는 유학 정보를
              제공하겠다는 철학에서 출발했습니다.
            </motion.p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-600"></div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute left-6 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="ml-16 bg-white rounded-lg p-6 shadow-lg border border-neutral-200 flex-1"
                  >
                    <div className="flex items-center mb-3">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                        className="text-red-600 font-bold text-lg mr-3"
                      >
                        {step.step}
                      </motion.span>
                      <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.9 }}
                        className="text-xl font-semibold text-neutral-900"
                      >
                        {step.title}
                      </motion.h3>
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 1.1 }}
                      className="text-neutral-600"
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Production */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 bg-neutral-100"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-neutral-900 mb-4"
            >
              콘텐츠 제작
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/sbCiPchbS6g"
                    title="Reading for Youhak - 대표 영상"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-lg text-neutral-600 mx-auto"
            >
              YouTube를 주요 플랫폼으로 삼아, 복잡한 미국 대입 과정을 쉽게 풀어
              설명하는 50편 이상의 영상을 제작했습니다.
            </motion.p>
          </motion.div>

          {/* Representative Video */}

          {/* Video Production Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="my-20 lg:my-24 bg-gradient-to-br from-red-800 to-red-900 py-16 rounded-3xl shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-neutral-100 mb-4"
              >
                영상 제작 과정
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-alt-100 max-w-2xl mx-auto"
              >
                복잡한 미국 대입 정보를 시청자가 쉽게 이해할 수 있도록 체계적인
                제작 과정을 거쳤습니다
              </motion.p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "기획 & 리서치",
                    items: [
                      "시청자 니즈 분석 및 키워드 리서치",
                      "경쟁 채널 분석 및 차별화 포인트 도출",
                      "영상 구조 및 플로우 설계",
                    ],
                  },
                  {
                    step: "2",
                    title: "대본 작성",
                    items: [
                      "시청자 관점에서 이해하기 쉬운 스토리텔링",
                      "핵심 메시지와 서브 포인트 구조화",
                      "자연스러운 전환과 호기심 유발 요소 추가",
                    ],
                  },
                  {
                    step: "3",
                    title: "시각 자료 제작",
                    items: [
                      "Adobe Illustrator로 로고 및 브랜딩 요소 제작",
                      "차트, 그래프, 인포그래픽 디자인",
                      "인트로/아웃트로 모션 그래픽 제작",
                    ],
                  },
                  {
                    step: "4",
                    title: "편집 & 후처리",
                    items: [
                      "Adobe Premiere Pro로 영상 편집 및 컷 편집",
                      "자막 디자인 및 타이밍 조절",
                      "색보정, 오디오 믹싱, 최종 렌더링",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-red-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className=" bg-transparent  text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                        <span className="text-md font-bold">{item.step}</span>
                      </div>
                      <h4 className="text-xl font-bold text-neutral-900">
                        {item.title}
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {item.items.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-600 text-base">
                            {subItem}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-red-200 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    50+
                  </div>
                  <div className="text-neutral-600 text-sm">제작된 영상 수</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-red-200 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    66K+
                  </div>
                  <div className="text-neutral-600 text-sm">총 조회수</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-red-200 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    100%
                  </div>
                  <div className="text-neutral-600 text-sm">직접 제작</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg font-semibold text-neutral-900 mb-4 text-center"
              >
                YouTube 홈
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Image
                  src="/images/reading-for-youhak/youtube-home.jpg"
                  alt="youtube home"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-lg font-semibold text-neutral-900 mb-4 text-center"
              >
                YouTube 영상들
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <Image
                  src="/images/reading-for-youhak/youtube-videos.jpg"
                  alt="youtube videos"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              href="https://www.youtube.com/@유학읽어주는남자"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              YouTube 채널 방문
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Community Building */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-neutral-900 mb-4"
            >
              커뮤니티 구축
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200"
          >
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: "수요 파악 및 소통",
                  description:
                    "유튜브 댓글과 개별 이메일 문의를 통해 학생들과 학부모들의 실제 수요를 파악했습니다. 단순한 정보 제공을 넘어서 개인적인 고민과 상황을 듣고, 더 가까운 소통의 필요성을 느꼈습니다.",
                },
                {
                  title: "무료 컨설팅 진행",
                  description:
                    "깊이 있는 소통을 위해 무료 컨설팅을 진행했습니다. 개별 학생의 상황과 목표를 파악하고, 맞춤형 조언을 제공하며 신뢰 관계를 구축했습니다.",
                },
                {
                  title: "커뮤니티 형성",
                  description:
                    "신뢰 관계를 바탕으로 오픈 채팅방과 인터넷 카페와 같은 커뮤니티를 만들었습니다. 빠른 응답과 자원 공유가 가능한 공간을 통해 지속적인 정보 교환과 상호 지원이 이루어지도록 했습니다.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                      className="text-lg font-semibold text-neutral-900 mb-2"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="text-neutral-600 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sustainable Business */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 bg-neutral-100"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-neutral-900 mb-4"
            >
              지속 가능한 비즈니스로 전환
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-neutral-600 max-w-3xl mx-auto"
            >
              단순히 에세이나 이력서만 검토하는 것이 아니라, 입학 준비의
              처음부터 끝까지 전 과정을 체계적으로 지원하는 포괄적인 서비스의
              필요성을 깨닫고 상품화에 돌입했습니다.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Public Content Direction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-xl border border-pink-200"
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-neutral-900 mb-6 text-center"
              >
                콘텐츠 방향성 확립
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-neutral-600 text-lg leading-relaxed text-center mb-6 text-semibold"
              >
                미국 유학 입시생이라는 굉장히 작은 시장에서 저희는 아무도
                제공하지 않지만 끊임없이 수요가 존재하는 지점을 파고들고자
                했습니다.
              </motion.p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-pink-200">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2 text-center">
                    시험 준비 콘텐츠 제작
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed text-center">
                    AP / SAT II 와 같은 표준 시험 노하우 강의 영상
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-lg border border-pink-200">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2 text-center">
                    Common App 가이드 영상
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed text-center">
                    모두가 사용해야 하지만 수십개의 페이지를 누구의 도움도 없이
                    작성해야 하는 악명 높은 커먼앱 가이드 영상
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-lg border border-pink-200">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2 text-center">
                    미국 입시 관련 뉴스 속보
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed text-center">
                    미국 언론에서만 보도하는 급변하는 입시 제도와 대학 입학
                    정보를 속보로 전달하는 영상
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Consulting Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-xl border border-red-200"
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-neutral-900 mb-6 text-center"
              >
                개인 컨설팅 과정
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-neutral-600 text-lg leading-relaxed text-center mb-6 text-semibold"
              >
                위의 콘텐츠로 쌓인 코어 유저들을 대상으로 종합적인 미국 대입
                가이던스 프로그램을 진행했습니다.
              </motion.p>
              <div className="space-y-4">
                {consultingProcess.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-lg border border-red-200"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg mr-4">
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Outcome & Impact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-neutral-900 mb-4"
            >
              Outcome & Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-neutral-600 max-w-3xl mx-auto"
            >
              유학 읽어주는 남자를 통해 이뤄낸 대표적인 성과들입니다.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6 text-white"
              >
                <div className="mb-3">
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-lg font-semibold"
                  >
                    {outcome.title}
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-red-100"
                >
                  {outcome.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Takeaways */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 bg-neutral-100"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-neutral-900 mb-4"
            >
              Key Takeaways
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-neutral-600 max-w-3xl mx-auto"
            >
              이 경험을 통해 직접 느끼고 배운 점들입니다.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row justify-center gap-6">
            {takeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200 text-center"
              >
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-lg font-semibold text-neutral-900 mb-3"
                >
                  {takeaway.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-neutral-600"
                >
                  {takeaway.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ReadingForYouhak;
