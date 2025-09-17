"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { merchDesigns } from "@/data";

const SuperbowlMerch = () => {
  const superbowlData = merchDesigns.find(
    (merch) => merch.slug === "superbowl-merch"
  );
  // const [instagramPreview, setInstagramPreview] =
  //   useState<InstagramPreview | null>(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchInstagramPreview = async () => {
  //     setLoading(true);
  //     try {
  //       // Use our API route to avoid CORS issues
  //       const response = await fetch(
  //         `/api/instagram-preview?url=${encodeURIComponent(
  //           "https://www.instagram.com/p/DF07S9xRf-1/"
  //         )}`
  //       );

  //       if (!response.ok) {
  //         throw new Error(`API responded with status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setInstagramPreview(data);
  //     } catch (error) {
  //       console.error("Error fetching Instagram preview:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchInstagramPreview();
  // }, []);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-green-900 via-green-800 to-green-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-green-300">
              Overview
            </h2>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Penn FAD Board Superbowl Event
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {superbowlData?.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Start Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-4">
              Initiation
            </h2>
            <p className="text-lg leading-8 text-neutral-600">
              Philadelphia Eagles 팬이자 Penn Fine Arts and Design Board (FAD
              Board)의 활발한 멤버로서, Eagles가 슈퍼볼에 진출한 것을 축하하는
              학교 전체 이벤트를 개최하는 아이디어를 제안했습니다.
            </p>

            <p className="mt-4 text-lg leading-8 text-neutral-600">
              FAD Board는 매학기 스크린 프린팅 이벤트를 개최하므로, Eagles
              테마의 티셔츠를 디자인하고 Penn 커뮤니티에 배포하여 우리 지역
              최고의 스포츠 팀에 대한 지원을 보여줄 수 있는 좋은 기회라고
              생각했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 sm:py-24 bg-neutral-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Design Process
            </h2>
          </div>
          <div className="text-left">
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto my-6">
              필라델피아 이글스의 상징색인 초록색을 티셔츠의 메인 컬러로
              선정했습니다. 디자이너들을 대상으로 공개 공모를 진행하였고,
              현지팬들의 수많은 디자인을 한데 모아서 실제로 프린트할 총 3개의
              디자인을 완성했으며 아래 보이는 제 단독 디자인을 포함해 4개의
              디자인을 확정지었습니다.
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200">
            <p className="text-2xl font-semibold text-neutral-700 my-4 text-center">
                최종 디자인
              </p>
              <div className="mt-8 text-center">
                <Image
                  src="/images/thumbnail/Thumbnails-superbowl-merch.webp"
                  alt="Superbowl Merchandise Thumbnail"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="text-center">
                
                  <p className="text-base text-neutral-600">
                    Eagles의 스타 플레이어인 Saquon Barkley의 상징적인 백허들 동작을 
                    슈퍼볼 트로피와 함께 조화롭게 배치하여 팀의 승리와 역동성을 동시에 표현했습니다.
                  </p>
                </div>
                
                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-neutral-700">Tools:</span>
                      <span className="text-neutral-600">Adobe Illustrator, Procreate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-neutral-700">Collaboration:</span>
                      <span className="text-neutral-600">Kathryn Lien</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Process Section */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                디자인 프로세스
              </h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                체계적인 4단계 프로세스를 통해 아이디어부터 완성된 제품까지 전 과정을 직접 경험했습니다.
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1: Graphic Design */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                    그래픽 디자인
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Adobe Illustrator와 Procreate를 활용하여 Saquon Barkley의 백허들 동작과 
                    슈퍼볼 트로피를 조화롭게 표현한 디자인을 완성했습니다.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/images/thumbnail/Thumbnails-superbowl-merch.webp"
                    alt="Graphic Design"
                    width={200}
                    height={140}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Step 2: Material Sourcing */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                    실물 제품 공수
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    학교 디자인 부서의 지원을 받아 300여장의 티셔츠와 100여장의 토트백을 
                    확보하여 대규모 이벤트를 위한 기반을 마련했습니다.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/images/merch/superbowl/tshirts.jpg"
                    alt="Material Sourcing"
                    width={200}
                    height={140}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Step 3: Production */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                    실제 제작
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Eagles의 상징색인 초록색으로 각 티셔츠를 타이다이 염색하여 
                    세상에 하나뿐인 고유한 패턴을 만들었습니다.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/images/merch/superbowl/tie-dye-tshirt.jpg"
                    alt="Tie-dye Production"
                    width={200}
                    height={140}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Step 4: Customization Event */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                    커스터마이즈 실시간 이벤트
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    4가지 스크린 틀을 준비하여 FAD Board 멤버들이 직접 실시간으로 
                    참가자들이 원하는 디자인을 프린팅해주는 인터랙티브 이벤트를 진행했습니다.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/images/merch/superbowl/screenprinting.jpg"
                    alt="Screen Printing Event"
                    width={200}
                    height={140}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Key Takeaways
            </h2>
          </div>

          <ul className="text-lg leading-8 text-neutral-700 space-y-2">
            <li>
              FAD Board 역사상 가장 큰 이벤트를 주도하며 실제 제품을
              대량제작/생산하는 경험을 해보았습니다.
            </li>
            <li>
              300개 이상의 티셔츠 제작 및 Penn 커뮤니티에 배포하며 지역사회와
              공명하는 디자인을 경험했습니다.
            </li>
          </ul>
          <div className="mt-6">
            {/* Instagram Video */}
            <div className="mb-8">
              <div className="max-w-full mx-auto">
                <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">IG</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        Penn Official
                      </p>
                      <p className="text-xs text-neutral-500">Instagram</p>
                    </div>
                  </div>
                  <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden bg-gray-100">
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      controls
                      muted
                      loop
                      
                      autoPlay
                      playsInline
                      onError={(e) => {
                        console.error('Video error:', e);
                        // Hide video and show fallback
                        const video = e.target as HTMLVideoElement;
                        video.style.display = 'none';
                        const fallback = video.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                      onLoadStart={() => console.log('Video loading started')}
                      onCanPlay={() => console.log('Video can play')}
                    >
                      <source src="/images/merch/superbowl/ig-post.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Fallback image */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200" style={{display: 'none'}}>
                      <div className="text-center text-gray-500">
                        <p className="text-sm">Video not available</p>
                        <p className="text-xs mt-1">Check console for errors</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700 mt-3">
                    Penn FAD Board Superbowl Event
                  </p>
                  <Link
                    href="https://www.instagram.com/p/DF07S9xRf-1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium mt-2"
                  >
                    Instagram에서 보기 →
                  </Link>
                </div>
              </div>
            </div>

            {/* Original Instagram Preview (fallback) */}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuperbowlMerch;
