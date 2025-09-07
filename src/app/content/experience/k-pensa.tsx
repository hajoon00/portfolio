// src/content/experience/k-pensa.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data";

interface ImageStack {
  preview: string;
  images: string[];
}

const KPensaExperience = () => {
  const pensaData = experiences.find((exp) => exp.slug === "k-pensa");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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

  return (
    <div className="space-y-6 relative bg-neutral-800 min-h-screen">
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
        className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base font-semibold leading-7 text-hajoon-500"
            >
              Overview
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              K-PEnSA
            </motion.h1>
            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white text-sm font-medium mt-2"
            >
              (Korea-Penn Engineers and Scientists Association)
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-4 flex flex-wrap justify-center gap-2"
            >
              {pensaData?.hashtags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="bg-hajoon-500 text-white text-xs font-medium px-3 py-1 rounded-full"
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
            <motion.div className="flex items-center space-x-3">
              <span className="text-2xl">📅</span>
              <div className="text-left">
                <p className="text-hajoon-400 font-semibold text-sm">
                  Duration
                </p>
                <p className="text-white font-medium">2023.09 - 2025.05</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center space-x-3">
              <span className="text-2xl">🛠️</span>
              <div className="text-left">
                <p className="text-hajoon-400 font-semibold text-sm">
                  Tools Used
                </p>
                <p className="text-white font-medium">
                  Adobe Illustrator, Photoshop, Figma, React
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
        className="py-20 sm:py-32 bg-transparent"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-start">
            <div className="text-left max-w-3xl">
              <h2 className="text-base font-semibold leading-7 text-hajoon-500">
                My Role
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    Marketing Chair
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    2023.09 - 2024.08
                  </p>
                  <p className="text-gray-200 text-base leading-relaxed">
                    이벤트 기획 및 홍보물 제작: 행사 목적과 대상에 맞춘 콘셉트
                    기획부터 포스터·온라인 콘텐츠 등 다양한 홍보물을 직접 디자인
                    및 제작하였습니다. <br />
                    공식 굿즈 제작 및 배포: 브랜딩 전략의 일환으로 굿즈 아이템을
                    기획하고, 디자인부터 제작 및 배포까지 전 과정을 주도하여
                    커뮤니티 소속감과 인지도 강화에 기여했습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    Internal Chair
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    2024.09 - 2025.05
                  </p>
                  <p className="text-gray-200 text-base leading-relaxed">
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
      </motion.section>

      {/* Problem Statement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 bg-neutral-900"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Problem Statement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemCards.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-700 rounded-lg p-6 shadow-lg border border-neutral-600 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-200">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 bg-transparent"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Activities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              제가 K-PEnSA에서 진행한 주요 프로젝트들과 그 과정을 소개합니다.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-hajoon-500"></div>
            <div className="space-y-8">
              {projectSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start group"
                >
                  <motion.div className="absolute left-6 w-4 h-4 bg-hajoon-500 rounded-full border-4 border-white shadow-lg"></motion.div>
                  <div className="ml-16 bg-neutral-700 rounded-lg p-6 shadow-lg border border-neutral-600 flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-hajoon-500 font-bold text-lg mr-3">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-200">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Marketing Materials Design */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 bg-neutral-900"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              마케팅 자료 디자인
            </h2>
            
          </motion.div>

          {/* Floating Gallery Section */}
          <div className="relative min-h-[600px] mb-8">
            {/* Study Session Posters */}
            <div className="mb-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-white mb-8 text-left"
              >
                스터디 세션 포스터
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {studyImages.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotate: -5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="relative group cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <Image
                        src={image}
                        alt={`스터디 세션 포스터 ${index + 1}`}
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg w-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center"
                      >
                        <span className="text-white font-medium text-sm">
                          View
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <p className="text-lg text-gray-300 max-w-3xl mt-12">
              정기 스터디 세션은 가장 참여율이 높은 K-PEnSA의 핵심 이벤트였습니다. 하지만 홍보의 부재로 인해 이벤트가 일어나는 것조차 모르는 회원들이 많아져, 포스터에 집중하기로 했습니다.
              기본 디자인을 세팅하고 색과 스터디세션 별 다양한 음식과 테마에 맞추어 변주를 주어 회원들에게 이 이벤트의 반복성을 각인시키고자 했습니다.
            </p>
            </div>

            {/* Event Posters */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-white mb-8 text-left"
              >
                이벤트 포스터
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {eventImages.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotate: 5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="relative group cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -1, 0],
                      }}
                      transition={{
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <Image
                        src={image}
                        alt={`이벤트 포스터 ${index + 1}`}
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg w-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center"
                      >
                        <span className="text-white font-medium text-sm">
                          View
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Website Redesign */}
      <section className="py-16 sm:py-24 bg-transparent">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              웹사이트 개편
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
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

          {/* Connected Problem-Solution Cards */}
          <div className="space-y-8">
            {/* Website Link Card
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-hajoon-500 to-hajoon-600 rounded-lg p-6 text-white text-left shadow-lg"
            >
              <a
                href="https://k-pensa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-2">K-PEnSA 웹사이트</h3>
                <p className="text-hajoon-100 mb-4">
                  개편된 웹사이트를 직접 확인해보세요
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-white text-hajoon-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <span className="mr-2">방문하기</span>
                  <span>→</span>
                </div>
              </a>
            </motion.div> */}

            {/* Problem-Solution Pairs */}
            {[
              {
                problem: websiteProblems[0],
                solution:
                  "최신 버전 React와 Tailwind CSS 사용으로 최적화된 코드 작성",
                oldImage: "/images/k-pensa/website/old_website_1.png",
                newImage: "/images/k-pensa/website/New1.png",
              },
              {
                problem: websiteProblems[1],
                solution: "현대적이고 일관된 UI/UX 디자인으로 사용자 경험 개선",
                oldImage: "/images/k-pensa/website/old_website_2.png",
                newImage: "/images/k-pensa/website/New2.png",
              },
              {
                problem: websiteProblems[2],
                solution:
                  "모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험 제공",
                oldImage: "/images/k-pensa/website/old_website_3.png",
                newImage: "/images/k-pensa/website/New4.jpg",
              },
              {
                problem: websiteProblems[3],
                solution:
                  "직관적인 네비게이션과 공식 이메일로 실시간으로 저장되는 Contact Us 페이지",
                oldImage: "/images/k-pensa/website/old_website_4.png",
                newImage: "/images/k-pensa/website/New3.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 transform -translate-x-1/2 z-0"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Problem Side */}
                  <motion.div className="bg-neutral-700 rounded-lg p-6 shadow-lg border border-red-400 relative">
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <div className="mb-4">
                      <Image
                        src={item.oldImage}
                        alt={`문제점 ${index + 1}`}
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md w-full"
                      />
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-lg">
                      {item.problem.title}
                    </h4>
                    <p className="text-gray-200 text-sm">
                      {item.problem.description}
                    </p>
                  </motion.div>

                  {/* Solution Side */}
                  <motion.div className="bg-neutral-700 rounded-lg p-6 shadow-lg border border-green-400 relative">
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div className="mb-4">
                      <Image
                        src={item.newImage}
                        alt={`개선사항 ${index + 1}`}
                        width={300}
                        height={200}
                        className={`rounded-lg shadow-md w-full ${
                          item.newImage.includes('New4.jpg') 
                            ? 'h-64 object-contain bg-gray-800' 
                            : ''
                        }`}
                      />
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-lg">
                      해결됨
                    </h4>
                    <p className="text-gray-200 text-sm">{item.solution}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchandise Design */}
      <section className="pb-16 sm:pb-24 bg-neutral-900">
        <div className="relative mb-16">
          <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
            <Image
              src="/images/thumbnail/Thumbnails-pensa-sticker.webp"
              alt="Pensa Sticker Thumbnail"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h2 className="text-5xl font-bold text-white text-center">
                굿즈 제작
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Section Header with Background */}

          {/* Design Change Reason */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-white mb-8 text-left">
              기존 굿즈였던 <span className="text-hajoon-500">후드티</span>의
              문제점
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-left">
                
                <h4 className="font-semibold text-white mb-3">
                  높은 생산 비용
                </h4>
                <p className="text-gray-200">
                  후드 제작에는 단가가 높게 책정되어 학생들이 쉽게 구매하거나
                  접근하기 어려웠습니다. 굿즈가 모두를 위한 것이 되기 위해서는
                  가격 장벽을 낮추는 것이 필요했습니다.
                </p>
              </div>
              <div className="text-left">
                
                <h4 className="font-semibold text-white mb-3">
                  계절적 한계
                </h4>
                <p className="text-gray-200">
                  후드는 특정 계절에만 착용 가능해 활용도가 낮고, 이로 인해 제작
                  대비 효과가 제한적이었습니다.
                </p>
              </div>
              <div className="text-left">
             
                <h4 className="font-semibold text-white mb-3">
                  보관 및 배포의 복잡성
                </h4>
                <p className="text-gray-200">
                  의류는 사이즈 분류, 재고 관리, 보관 공간 확보 등에서 복잡한
                  관리가 요구되어 관리 차원에서 부담이 컸습니다.
                </p>
              </div>
            </div>
            <div className="bg-hajoon-600 rounded-lg p-8 text-white">
              <p className="text-left text-lg leading-relaxed">
                미국 대학에서 스티커는 학생들이 일상 속 다양한 물건에 쉽게 붙일
                수 있어 본인의 정체성을 나타내는 하나의 문화 요소입니다.
                <br />
                비용 부담이 적고 계절을 타지 않으며, 보관과 배포가 간편한
                스티커는 새로운 굿즈 형태에 가장 적합했습니다.
              </p>
            </div>
          </div>

          {/* Stickers V2024 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6 text-left">
              스티커 V2024
            </h3>
            <p className="text-gray-200 max-w-4xl text-left mb-8">
              저는 Adobe Illustrator를 사용하여 스티커를 디자인했습니다. 미국의
              레트로한 스포츠 팀 로고들을 참고한 좌측 두 스티커와 귀여움에
              초점을 둔 K-PEnSA의 새로운 오리지날 마스코트인 고양이를 소개하는
              우측 두 스티커는 제가 만들었던 10여개의 디자인 중 투표로 채택되어
              실제로 제작/배포되었습니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stickerImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="object-cover w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stickers V2025 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 text-left">
              스티커 V2025
            </h3>
            <p className="text-gray-200 mb-8 text-left">
              전년도에 가장 인기 있었던 디자인은 고양이의 다양한 변형을 포함한
              스티커 시리즈를 만들기로 결정했습니다.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/merch/pensa/stickers-2025-1.jpg"
                  alt="Pensa Merch 2025"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="relative w-full aspect-square">
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
      <section className="py-16 sm:py-24 bg-transparent">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Outcome & Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              K-PEnSA에서의 활동을 통해 달성한 주요 성과들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-hajoon-600 rounded-lg p-6 text-white"
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
      <section className="py-16 sm:py-24 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              이 프로젝트를 통해 얻은 귀중한 경험과 학습 내용들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row justify-center gap-6">
            {takeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-left transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {takeaway.title}
                </h3>
                <p className="text-gray-600">{takeaway.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KPensaExperience;
