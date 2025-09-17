// src/content/experience/k-pensa.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data";

const CDRExperience = () => {
  const cdrData = experiences.find((exp) => exp.slug === "cdr");

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
      title: "문제 제기",
      description: "기존 웹사이트 분석 및 방향성 제시",
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
  ];

  const takeaways = [
    {
      title: "실무 경험",
      description:
        "실제로 웹사이트를 배포하고 관리하는 경험을 통해 실무 능력 향상",
    },
    {
      title: "협업 능령 향상",
      description:
        "코딩에 전혀 배경지식이 없는 디자이너와 협업하면서 개발자의 입장을 경험하며 넓어진 시야",
    },
    {
      title: "전 과정 아우르는 디자이너",
      description:
        "기획–디자인–개발–운영 전 과정을 아우를 수 있는 디자이너의 가능성을 확인하고 실무에 적용",
    },
  ];

  return (
    <div className=" relative bg-neutral-950 text-neutral-100">
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
          <div className="w-1 h-32 bg-neutral-700 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-neutral-300 rounded-full"
              style={{ height: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.span
            className="text-xs font-medium text-neutral-400 transform whitespace-nowrap"
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
        className="py-24 sm:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base font-semibold leading-7 text-neutral-300"
            >
              Overview
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              CDR Associates
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 flex flex-wrap justify-center gap-2"
            >
              {cdrData?.hashtags.map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-neutral-700 text-white text-xs font-medium px-3 py-1 rounded-full"
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
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <span className="text-2xl">📅</span>
              <div className="text-left">
                <p className="text-neutral-300 font-semibold text-sm">
                  Duration
                </p>
                <p className="text-white font-medium">Dec 2024 - Jan 2025</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <span className="text-2xl">🛠️</span>
              <div className="text-left">
                <p className="text-neutral-300 font-semibold text-sm">
                  Tools Used
                </p>
                <p className="text-white font-medium">Wordpress, Figma</p>
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
            <div className="text-left max-w-2xl">
              <h2 className="text-base font-semibold leading-7 text-neutral-300">
                My Role
              </h2>
              <h3 className="text-3xl font-bold text-white my-3">
                Web Designer
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                CDR Associates에서 웹사이트 개편 프로젝트의 유일한 웹
                디자이너로서 전체 디자인 시스템을 구축했습니다. <br />
                Wordpress를 사용하여 웹사이트를 배포하고 데이터 관리와 서버
                호스팅을 담당했습니다.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Design Process */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Design Process
            </h2>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-700"></div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="absolute left-6 w-4 h-4 bg-neutral-500 rounded-full border-4 border-neutral-900 shadow-lg"
                  ></motion.div>
                  <div className="ml-16 bg-neutral-900 rounded-lg p-6 border border-neutral-800 flex-1 transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-neutral-400 font-bold text-lg mr-3">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-neutral-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
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
        className="py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Problem Statement
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              더 나은 사용자 경험을 제공하기 위해 기존 웹사이트의 다양한
              문제점들을 해결할 필요가 있었습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemCards.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-neutral-300">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Design System Implementation */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              시스템 구축
            </h2>
            <p className="text-lg text-neutral-300 max-w-4xl mx-auto text-left leading-loose">
              비개발자 디자이너들도 편하게 웹사이트에 새로운 프로젝트를
              업로드하고 관리할 수 있는 체계가 필요했습니다.
            </p>
            <p className="text-lg text-neutral-300 max-w-4xl mx-auto text-left leading-loose">
              또한, 프로젝트 세부 페이지의 일관된 디자인 시스템을 구축하여 각
              프로젝트의 특성을 살리면서도 통일감 있는 레이아웃을 구현하는 것이
              중요했습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                WordPress 버전 컨트롤
              </h3>
              <p className="text-neutral-300 mb-4">
                완전히 새로운 워드프레스 기반 시스템을 구축하여 더 안정적이고
                확장 가능한 웹사이트 관리가 가능해졌습니다.
              </p>
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">
                  주요 개선사항
                </h4>
                <ul className="text-sm text-neutral-300 space-y-1">
                  <li>• 최신 워드프레스 버전으로 업그레이드</li>
                  <li>• 프로젝트별 폴더 세분화</li>
                  <li>• 플러그인 최적화 및 보안 강화</li>
                  <li>• 백업 및 복구 시스템 구축</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                상세페이지 디자인 시스템 개편
              </h3>
              <p className="text-neutral-300 mb-4">
                텍스트와 이미지가 분리되어 있던 기존 레이아웃을 개선하여, 업로드
                이미지 안에 설명이 포함된 시각적으로 통일된 시스템으로
                전환했습니다.
              </p>
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">
                  디자인 개선사항
                </h4>
                <ul className="text-sm text-neutral-300 space-y-1">
                  <li>• 이미지와 텍스트의 통합된 레이아웃</li>
                  <li>• 일관된 타이포그래피 시스템</li>
                  <li>• 반응형 이미지 갤러리 구현</li>
                  <li>• 직관적인 콘텐츠 구조</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-lg p-8 text-white"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-4">
                Figma 프로토타입 제작
              </h3>
              <p className="text-neutral-200 max-w-3xl mx-auto text-left">
                디자인 시스템의 일관성을 보장하기 위해 Figma를 활용한 상세한
                프로토타입을 제작했습니다. 이를 통해 개발 전 단계에서 사용자
                경험을 검증하고 최적화할 수 있었습니다.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="mt-12">
              <Image
                className="rounded-lg shadow-xl"
                src="/images/cdr/cdr-website-figma.jpg"
                alt="CDR Mockup"
                width={1000}
                height={1000}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Responsive Design */}
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Responsive Design
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              모든 기기에서 최적의 시청 경험을 제공하도록 완전히 반응형으로
              설계되었습니다.
            </p>
          </motion.div>

          {/* Responsive Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row justify-center gap-6 mb-12">
            {responsiveFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-900 rounded-lg p-6 text-center border border-neutral-800 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Home Page Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Home Page
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 rounded-lg p-6 transition-all duration-300 border border-neutral-800"
              >
                <h4 className="text-lg font-semibold text-white mb-4 text-center">
                  Desktop
                </h4>
                <Image
                  className="rounded-lg shadow-md"
                  src="/images/cdr/cdr-home-desktop.jpg"
                  alt="CDR Home Desktop Design"
                  width={1000}
                  height={1000}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 rounded-lg p-6 transition-all duration-300 border border-neutral-800"
              >
                <h4 className="text-lg font-semibold text-white mb-4 text-center">
                  Mobile
                </h4>
                <Image
                  className="rounded-lg shadow-md"
                  src="/images/cdr/cdr-home-mobile.jpg"
                  alt="CDR Home Mobile Design"
                  width={1000}
                  height={1000}
                />
              </motion.div>
            </div>
          </div>

          {/* Heritage Page Comparison */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Heritage Page
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 rounded-lg p-6 transition-all duration-300 border border-neutral-800"
              >
                <h4 className="text-lg font-semibold text-white mb-4 text-center">
                  Desktop
                </h4>
                <Image
                  className="rounded-lg shadow-md"
                  src="/images/cdr/cdr-heritage-desktop.jpg"
                  alt="CDR Heritage Desktop Design"
                  width={1000}
                  height={1000}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 rounded-lg p-6 transition-all duration-300 border border-neutral-800"
              >
                <h4 className="text-lg font-semibold text-white mb-4 text-center">
                  Mobile
                </h4>
                <Image
                  className="rounded-lg shadow-md"
                  src="/images/cdr/cdr-heritage-mobile.jpg"
                  alt="CDR Heritage Mobile Design"
                  width={1000}
                  height={1000}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Outcome & Impact */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Outcome
            </h2>
            <p className="text-lg text-neutral-300 mx-auto mb-">
              현재까지도 제가 만든 웹사이트는 활발하게 사용되고 있습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="mb-12"
          >
            <Image
              className="rounded-lg shadow-xl"
              src="/images/cdr/CDR-website.jpg"
              alt="CDR Mockup"
              width={1000}
              height={1000}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="mb-12"
          >
            <Image
              className="rounded-lg shadow-xl"
              src="/images/cdr/CDR-phone.webp"
              alt="CDR Mockup"
              width={1000}
              height={1000}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="https://www.cdr.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-neutral-700 hover:bg-neutral-800 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              CDR Associates Website
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Takeaways */}
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Key Takeaways
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              이 프로젝트를 통해 얻은 귀중한 경험과 학습 내용들입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row justify-center gap-6">
            {takeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {takeaway.title}
                </h3>
                <p className="text-neutral-300">{takeaway.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CDRExperience;
