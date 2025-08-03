"use client";

import React from "react";
import Image from "next/image";
import { experiences } from "@/data";

const Nyangiverse = () => {
  const nyangiverseData = experiences.find((exp) => exp.slug === "nyangiverse");

  const characterImages = [
    {
      src: "/images/arts/digital/wordcloud.jpg",
      alt: "하솜 캐릭터 디자인",
      title: "하솜",
      description: "활발하고 장난기 많지만 우아한 성격",
    },
    {
      src: "/images/arts/handdrawing/Tiger.jpg",
      alt: "하론 캐릭터 디자인",
      title: "하론",
      description: "조용하고 내성적이지만 한번 마음을 열면 깊은 애정을 보여줌",
    },
  ];

  const environmentDesigns = [
    {
      src: "/images/arts/handdrawing/Desert.jpg",
      alt: "디지털 환경 1",
      title: "향수를 불러오는 공간",
      description: "레트로 감성의 디지털 환경",
    },
    {
      src: "/images/arts/handdrawing/Ocean.jpg",
      alt: "디지털 환경 2",
      title: "인터랙티브 요소",
      description: "몰입감 있는 인터랙티브 디지털 공간",
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
              냥이버스 – 디지털 추모관
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
                  Pixel Art, Digital Design
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
            <div className="text-left max-w-2xl">
              <h2 className="text-base font-semibold leading-7 text-pink-500">
                My Role
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 my-3">
                Creator & Designer
              </h3>

              <p className="text-gray-700 text-base leading-relaxed">
                Nyangiverse는 제 고양이들인 하솜과 하론과 떨어져 있는 씁쓸한
                현실에서 탄생한 매우 개인적인 프로젝트입니다. 그들이 10년을
                맞이하면서, 그리고 최근 그들의 형제를 잃으면서, 이 프로젝트는
                디지털 추모관 역할을 합니다— 물리적 세계와 가상 세계를 연결하는
                공간에서 그들의 독특한 성격과 우리의 공유된 기억을 보존하는
                방법입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals Section */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              프로젝트 목표 & 비전
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              이 프로젝트는 하솜과 하론의 독특한 성격의 지속적인 디지털 흔적을
              만드는 것을 목표로 합니다. 활발하고 장난기 많지만 우아한 하솜,
              그리고 조용하고 내성적이지만 한번 마음을 열면 깊은 애정을 보여주는
              하론.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">하솜</h3>
              <p className="text-gray-600 mb-4">
                활발하고 장난기 많지만 우아한 성격. 항상 모험과 놀이를 준비하고
                있지만, 모든 움직임에서 세련된 우아함을 유지합니다.
              </p>
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  &ldquo;황금빛 마음을 가진 장난꾸러기 탐험가&rdquo;
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">하론</h3>
              <p className="text-gray-600 mb-4">
                조용하고 내성적이지만 한번 마음을 열면 깊은 애정을 보여주는
                고양이. 관찰력 있고 사려깊으며, 시간이 지나면서 따뜻해지는
                부드러운 영혼을 가지고 있습니다.
              </p>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  &ldquo;숨겨진 깊이가 있는 부드러운 관찰자&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pixel Art Choice Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              픽셀 아트를 선택한 두가지 근본적 이유
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 shadow-lg">
              <div className="relative w-full h-96 mb-4 overflow-hidden">
                <Image
                  src={"/images/arts/handdrawing/Tiger.jpg"}
                  alt={"하론 캐릭터 디자인"}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                레트로 향수
              </h3>
              <p className="text-gray-600 mb-4">
                90년대와 2000년대 초반에 태어난 사람이라면 누구나 픽셀
                스프라이트 게임을 한 번쯤 접해봤을 것입니다. 픽셀 아트는 우리를
                다시 어린 시절로 데려가지만 결코 유치하게 느껴지지는 않습니다.
                픽셀 아트의 디지털이면서도 아날로그적인 감성은 과거와 현재를
                자연스럽게 이어주는 매력적인 매개체입니다.
              </p>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  &ldquo;우리는 한 때 모두 포켓몬 트레이너&rdquo;
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                미니멀리즘 철학
              </h3>
              <p className="text-gray-600 mb-4">
                그 미니멀한 특성은 제 디자인 철학과 일치하여, 본질적인 고양이
                정체성을 유지하면서도 더 인간적인 방식으로 움직이는 인간형
                고양이 캐릭터를 만들 수 있게 합니다.
              </p>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  &ldquo;우리는 한 때 모두 포켓몬 트레이너&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Design Section */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              캐릭터 디자인
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              캐릭터 디자인은 각 고양이의 성격의 본질을 포착하는 데 중점을
              둡니다. 픽셀 아트 스타일은 고양이와 인간 특성의 독특한 조합을
              가능하게 합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {characterImages.map((character, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={character.src}
                    alt={character.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {character.title}
                </h3>
                <p className="text-gray-600">{character.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Space Design Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              디지털 공간 디자인
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              디지털 공간은 개인적인 추모관이자 공유 경험으로 설계되었습니다. 제
              고양이들이 살고 있는 물리적 세계와 그들의 디지털 표현이 존재하는
              가상 공간을 연결하는 다리를 만듭니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentDesigns.map((env, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={env.src}
                    alt={env.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {env.title}
                </h4>
                <p className="text-gray-600">{env.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              인터랙티브 경험
            </h3>
            <p className="text-center text-lg">
              환경은 직관적이고 몰입감 있게 제작되어 방문자들이 인터랙티브
              요소와 시각적 스토리텔링을 통해 하솜과 하론의 독특한 성격을 경험할
              수 있도록 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy & Impact Section */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              레거시 & 영향
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              한국 속담에 &ldquo;호랑이는 죽어서 가죽을 남기고, 사람은 죽어서
              이름을 남긴다&rdquo;고 합니다. 제 고양이들이 호랑이에 더 가깝지만,
              이 프로젝트는 그들의 이름과 성격이 살아남도록 보장하는 제
              방법입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🐱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                디지털 추모관
              </h3>
              <p className="text-gray-600">
                우리가 함께한 시간의 본질을 포착하는 지속적인 헌사
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                공유 경험
              </h3>
              <p className="text-gray-600">
                다른 사람들이 그들의 독특한 캐릭터를 경험하고 감상할 수 있는
                공간을 만듭니다
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                감정적 연결
              </h3>
              <p className="text-gray-600">
                디지털 아트를 통해 물리적 거리를 감정적 친밀감으로 연결합니다
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">지속적인 헌사</h3>
            <p className="text-lg">
              이 프로젝트를 통해, 우리를 분리하는 물리적 거리에도 불구하고
              함께한 시간의 본질을 포착하는 지속적인 헌사를 만들고 싶습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nyangiverse;
