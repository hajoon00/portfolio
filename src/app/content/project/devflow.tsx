"use client";

import React from "react";
import { projects } from "@/data";

const DevFlow: React.FC = () => {
  const devflowData = projects.find((proj) => proj.slug === "devflow");

  return (
    <div className="space-y-6">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-violet-500">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-2xl">
            DevFlow: Code Editor Web App
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {devflowData?.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-violet-900 text-violet-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="my-6 text-lg leading-8 text-alt-700">
            AI를 활용한 코딩 생산성 향상 웹 애플리케이션입니다. 개발자들이
            대규모 풀스택 프로젝트를 진행할 때 관련 코드가 다양한 파일에
            분산되어 있어 일관된 사고를 유지하기 어려운 문제를 해결하기 위해
            코드 스니펫과 노트를 연결하는 기능을 제공합니다.
          </p>

          <p className="my-6 text-lg leading-8 text-alt-700">
            React와 Next.js를 사용하여 개발했으며, AI 통합을 통해 코드 작성 및
            수정 과정을 자동화하는 기능을 구현했습니다. 사용자는 코드 스니펫을
            쉽게 탐색하고 관련 노트를 추가할 수 있으며, 특정 주제에 대한 모든
            관련 코드 및 메모를 한 곳에서 볼 수 있습니다.
          </p>

          <a
            href="https://hajoon00.github.io/devflow-public/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              웹사이트 보러가기
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DevFlow;
