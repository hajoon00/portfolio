"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Nyangiverse = () => {
  // const nyangiverseData = experiences.find((exp) => exp.slug === "nyangiverse");
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
    <div className="space-y-0">
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
      <section className="relative w-full aspect-video overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images/nyangiverse/RENDER_3.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0  z-10" />
        {/* Glassmorphism Info Card */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div 
            className="max-w-lg mx-auto p-4 rounded-xl backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="text-center">
              <h2 className="text-xs font-semibold leading-6 text-pink-600">
                Overview
              </h2>
              <h1 className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
                NYANGIVERSE
              </h1>
            </div>

            {/* Project Info */}
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <span className="text-sm">📅</span>
                <div className="text-left">
                  <p className="text-pink-600 font-semibold text-[10px]">Duration</p>
                  <p className="text-white font-medium text-[10px]">2025.02 - 2025.04</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">🛠️</span>
                <div className="text-left">
                  <p className="text-pink-600 font-semibold text-[10px]">
                    Tools Used
                  </p>
                  <p className="text-white font-medium text-[10px]">
                    React, Adobe Illustrator, Adobe Photoshop, Procreate
                  </p>
                </div>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              픽셀 아트를 선택한 이유
            </h3>
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

          {/* Character Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Hasom Section */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                하솜
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/nyangiverse/hasom-real.jpg"
                    alt="하솜 실제 사진"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/nyangiverse/Result-Hasom.png"
                    alt="하솜 캐릭터"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Haron Section */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                하론
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/nyangiverse/haron-real.jpg"
                    alt="하론 실제 사진"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/nyangiverse/Result-Haron.png"
                    alt="하론 캐릭터"
                    fill
                    className="object-cover"
                  />
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {/* Hasom Images */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                하솜
              </h3>
              <div className="space-y-4">
                {hasomImages.map((image, index) => (
                  <div key={index} className="relative w-full rounded-lg overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                    <div className="mt-2">
                      <h4 className="text-lg font-medium text-gray-900">
                        {image.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Haron Images */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                하론
              </h3>
              <div className="space-y-4">
                {haronImages.map((image, index) => (
                  <div key={index} className="relative w-full rounded-lg overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                    <div className="mt-2">
                      <h4 className="text-lg font-medium text-gray-900">
                        {image.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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

            <div className="flex flex-col md:flex-row gap-8 items-start my-12">
              <Image
                src="/images/nyangiverse/Park_Hajoon_3.jpg"
                alt="Nyangiverse 웹사이트"
                width={1000}
                height={1000}
                className="rounded-lg w-full md:w-1/2"
              />

              <div className="flex flex-col gap-6 w-1/2 md:w-1/2 py-8">
                <a
                  href="https://nyangiverse.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-100 bg-pink-700 rounded-lg p-4 text-center w-1/2"
                >
                  웹사이트 바로가기
                </a>

                <p className="text-lg text-left text-gray-600">
                  이곳은 하솜이와 하론이에 대한 저의 기억을 사람들과 나누고,
                  그들의 흔적을 제 방식으로 남기는 디지털 아카이브입니다. 하나의
                  가상 브랜드의 공식 웹사이트를 만들었으며 브랜드 소개와 각종
                  제품들, 그리고 하솜과 하론을 주인공으로 한
                  <span className="font-bold">
                    {" "}
                    만화까지 만나보실 수 있습니다.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              인터랙티브 경험
            </h3>
            <p className="text-center text-lg">
              React 컴포넌트와 Tailwind CSS를 활용하여 직관적이고 몰입감 있는
              환경을 제작했습니다. 전시에 찾아온 방문자들이 짧은 시간 안에
              하솜이와 하론이의 성격을 알수 있게 짧은 설문조사 섹션도 넣어
              간이 MBTI 테스트를 제작했습니다.
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
              <div className=" overflow-hidden">
                <div className="relative w-1/3 h-96 mx-auto">
                  <Image
                    src="/images/nyangiverse/Park_Hajoon_1.jpg"
                    alt="전시 현장 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className=" overflow-hidden">
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
