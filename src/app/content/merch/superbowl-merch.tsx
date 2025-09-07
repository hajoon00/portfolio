"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { merchDesigns } from "@/data";

interface InstagramPreview {
  title?: string;
  author_name?: string;
  author_url?: string;
  thumbnail_url?: string;
  width?: number;
  height?: number;
  html?: string;
  provider_name?: string;
  provider_url?: string;
}

const SuperbowlMerch = () => {
  const superbowlData = merchDesigns.find(
    (merch) => merch.slug === "superbowl-merch"
  );
  const [instagramPreview, setInstagramPreview] =
    useState<InstagramPreview | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInstagramPreview = async () => {
      setLoading(true);
      try {
        // Use our API route to avoid CORS issues
        const response = await fetch(
          `/api/instagram-preview?url=${encodeURIComponent(
            "https://www.instagram.com/p/DF07S9xRf-1/"
          )}`
        );

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        setInstagramPreview(data);
      } catch (error) {
        console.error("Error fetching Instagram preview:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPreview();
  }, []);

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

          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200">
              <div className="mt-8 text-center">
                <Image
                  src="/images/thumbnail/Thumbnails-superbowl-merch.webp"
                  alt="Superbowl Merchandise Thumbnail"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <p className="text-2xl font-semibold text-neutral-700 my-4 text-center">
                최종 디자인
              </p>
              <p className="text-lg leading-8 text-neutral-700">
                Adobe Illustrator & Procreate <br />
                (Collaboration with Kathryn Lien)
                <br />
                슈퍼볼 트로피 위로 역동적인 Saquon Barkley의 백플립 실루엣을
                표현한 디자인입니다.
              </p>
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
            {loading ? (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                <p className="mt-2 text-neutral-600">
                  Instagram 프리뷰 로딩 중...
                </p>
              </div>
            ) : instagramPreview ? (
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
                <div
                  className="text-sm text-neutral-700 mb-3"
                  dangerouslySetInnerHTML={{
                    __html:
                      instagramPreview.title ||
                      "Penn FAD Board Superbowl Event",
                  }}
                />
                <Link
                  href="https://www.instagram.com/p/DF07S9xRf-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Instagram에서 보기 →
                </Link>
              </div>
            ) : (
              <div className="text-center">
                <button className="text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md py-2 px-4 transition-colors">
                  <Link
                    href="https://www.instagram.com/p/DF07S9xRf-1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Penn Official Instagram Post
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuperbowlMerch;
