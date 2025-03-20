"use client";

import React, { RefObject, useRef } from "react";

const DevFlow: React.FC = () => {
  // Create refs for each section with proper typing
  const defineRef = useRef<HTMLDivElement>(null);
  const ideateRef = useRef<HTMLDivElement>(null);
  const prototypeRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const problemStatementRef = useRef<HTMLDivElement>(null);
  const conceptualizationRef = useRef<HTMLDivElement>(null);
  const initialDesignRef = useRef<HTMLDivElement>(null);
  const hiFiPrototypeRef = useRef<HTMLDivElement>(null);
  const frontendProgrammingRef = useRef<HTMLDivElement>(null);
  const designAdjustmentRef = useRef<HTMLDivElement>(null);
  const aiIntegrationRef = useRef<HTMLDivElement>(null);
  const futureEnhancementRef = useRef<HTMLDivElement>(null);
  const finalReflectionRef = useRef<HTMLDivElement>(null);

  // Updated scroll function with proper typing
  const scrollToRef = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-violet-400">
            Overview
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            DevFlow
          </p>
          <span className="bg-violet-900 text-violet-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
            Frontend Development
          </span>
          <span className="bg-violet-900 text-violet-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
            UI/UX Design
          </span>

          <p className="my-6 text-lg leading-8 text-gray-300">
            프로그래머들의 코딩을 도와줄 수 있는 앱을 구상하고 프로토타입을
            만들었습니다.
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
      <section className="py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center mb-8 space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Design Process
            </h2>
          </div>
          <ol className="items-start sm:flex w-full">
            <li className="relative mb-6 sm:mb-0 w-full cursor-pointer hover:text-violet-400">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-violet-900 text-violet-200 rounded-full shrink-0">
                  1
                </div>
                <div className="hidden sm:flex w-full bg-gray-700 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3
                  className="text-lg font-semibold text-white hover:text-violet-400"
                  onClick={() => scrollToRef(defineRef)}
                >
                  Define
                </h3>
                <p
                  className="text-base font-normal text-gray-400 hover:text-violet-400"
                  onClick={() => scrollToRef(problemStatementRef)}
                >
                  Problem Statement
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 w-full cursor-pointer hover:text-violet-400">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-violet-900 text-violet-200 rounded-full shrink-0">
                  2
                </div>
                <div className="hidden sm:flex w-full bg-gray-700 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3
                  className="text-lg font-semibold text-white hover:text-violet-400"
                  onClick={() => scrollToRef(ideateRef)}
                >
                  Ideate
                </h3>
                <p className="text-base font-normal text-gray-400 hover:text-violet-400">
                  <span
                    className="hover:text-violet-400"
                    onClick={() => scrollToRef(conceptualizationRef)}
                  >
                    Conceptualization
                  </span>
                  <br />
                  <span
                    className="hover:text-violet-400"
                    onClick={() => scrollToRef(initialDesignRef)}
                  >
                    Initial Design
                  </span>
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 w-full cursor-pointer hover:text-violet-400">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-violet-900 text-violet-200 rounded-full shrink-0">
                  3
                </div>
                <div className="hidden sm:flex w-full bg-gray-700 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3
                  className="text-lg font-semibold text-white hover:text-violet-400"
                  onClick={() => scrollToRef(prototypeRef)}
                >
                  Prototype
                </h3>
                <p className="text-base font-normal text-gray-400 hover:text-violet-400">
                  <span
                    className="hover:text-violet-400"
                    onClick={() => scrollToRef(hiFiPrototypeRef)}
                  >
                    Hi-fi Prototype
                  </span>
                  <br />
                  <span
                    className="hover:text-violet-400"
                    onClick={() => scrollToRef(frontendProgrammingRef)}
                  >
                    Frontend Programming{" "}
                  </span>
                  <span
                    className="hover:text-violet-400"
                    onClick={() => scrollToRef(aiIntegrationRef)}
                  >
                    AI Integration{" "}
                  </span>
                </p>
              </div>
            </li>
            <li
              className="relative mb-6 sm:mb-0 w-full cursor-pointer hover:text-violet-400"
              onClick={() => scrollToRef(testRef)}
            >
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-violet-900 text-violet-200 rounded-full shrink-0">
                  4
                </div>
                <div className="hidden sm:flex w-full bg-gray-700 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-white hover:text-violet-400">
                  Test
                </h3>
                <p className="text-base font-normal text-gray-400 hover:text-violet-400">
                  <span
                    className="hover:text-violet-400"
                    onClick={() => scrollToRef(designAdjustmentRef)}
                  >
                    Design Adjustment
                  </span>
                  <br />
                  <span
                    className="hover:text-violet-400"
                    onClick={() => scrollToRef(finalReflectionRef)}
                  >
                    Future Enhancement
                  </span>
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section
        ref={problemStatementRef}
        className="bg-neutral-800 py-20 sm:py-16"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Problem Statement
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            개발자들이 대규모 풀스택 프로젝트를 진행할 때 일반적으로 느끼는 가장
            큰 문제점은 관련 코드가 다양한 파일에 분산되어 있어 일관된 사고를
            유지하기가 어렵다는 것입니다. 또한 동시에 여러 프로젝트를 진행할 때
            각자 코드의 흐름과 구조를 하나의 뇌에 동기화 시키는 와중 혼란을
            겪기도 합니다.
          </p>
        </div>
      </section>

      <section
        ref={conceptualizationRef}
        className="bg-neutral-800 py-20 sm:py-16"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Conceptualization
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            첫 번째 단계로, 코드 스니펫을 대응하는 노트 항목에 연결하는 드래그
            앤 클릭 메커니즘과 선택한 노트 항목과 관련된 모든 코드 스니펫을 한
            번의 클릭으로 보여주는 기능을 갖춘 저충실도 종이 프로토타입을
            설계했습니다. 이 프로토타입에 대한 피드백은 매우 유익했습니다.
            사용자들은 이 개념에 흥미를 느끼며 코딩 효율성을 크게 향상시킬 수
            있는 잠재력을 인정했지만, 사용성 문제에 대한 우려도 표명했습니다.
            일부 사용자들은 이러한 링크를 시작하고 관리하는 방법이 불분명하다고
            언급했으며, 특히 대규모 프로젝트에서는 링크가 많아질 경우 혼란을
            초래할 수 있다고 지적했습니다.
          </p>
        </div>
      </section>

      <section ref={initialDesignRef} className="bg-neutral-800 py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Initial Design
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            사용자의 피드백을 기반으로 이 문제를 해결하기 위해 아이디어를
            브레인스토밍하고 초기 설계를 개선하여 상호작용과 사용성 향상에
            중점을 두었습니다.
          </p>
        </div>
      </section>

      <section ref={hiFiPrototypeRef} className="bg-neutral-800 py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-s tracking-tight text-white sm:text-2xl">
              Hi-fi Prototype
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Hi-Fi 프로토타입에서는 사용자 인터페이스가 직관적이고 반응성이
            뛰어나도록 설계되었습니다. 주로 React 및 Next.js를 사용하여
            개발했으며, 이를 통해 복잡한 상태 관리 및 라우팅이 용이해졌습니다.
            비주얼 디자인에서는 Tailwind CSS를 사용하여 모던하고 일관된 스타일을
            구현하였습니다. 사용자는 코드 스니펫을 쉽게 탐색하고 관련 노트를
            추가할 수 있으며, 특정 주제에 대한 모든 관련 코드 및 메모를 한
            곳에서 볼 수 있는 기능을 갖추고 있습니다. 이 과정에서 사용성
            테스트를 통해 여러 차례 개선 작업을 거쳤으며, 각 테스트마다 사용자
            피드백을 적극 반영하여 최종 제품의 완성도를 높였습니다.
          </p>
        </div>
      </section>

      <section
        ref={frontendProgrammingRef}
        className="bg-neutral-800 py-20 sm:py-16"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Frontend Programming
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Frontend 프로그래밍 단계에서는 React와 Next.js를 사용하여 컴포넌트
            기반의 모듈식 아키텍처를 구축했습니다. 이를 통해 코드의 재사용성을
            극대화하고 유지보수를 용이하게 하였습니다. 상태 관리를 위해 Redux를
            도입하여 전역 상태를 효율적으로 관리하고, 복잡한 애플리케이션 로직을
            간소화했습니다. 또한, Axios를 사용하여 백엔드 API와의 원활한 통신을
            구현하였으며, 이를 통해 실시간 데이터 연동이 가능해졌습니다.
            프론트엔드 성능 최적화를 위해 코드 스플리팅과 지연 로딩 기법을
            활용하였고, 웹팩을 사용하여 빌드 프로세스를 최적화하였습니다.
          </p>
        </div>
      </section>

      <section
        ref={designAdjustmentRef}
        className="bg-neutral-800 py-20 sm:py-16"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Design Adjustment
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            디자인 조정 단계에서는 사용성 테스트 결과를 기반으로 사용자 경험을
            개선하기 위해 여러 가지 변경 사항을 적용했습니다. 첫째, 사용자
            피드백을 반영하여 네비게이션 구조를 단순화하고 보다 직관적인
            인터페이스를 구현했습니다. 둘째, 접근성을 높이기 위해 색상 대비를
            조정하고, 키보드 네비게이션 및 스크린 리더 지원을 추가했습니다.
            셋째, 반응형 디자인을 최적화하여 다양한 디바이스에서 일관된 사용자
            경험을 제공하도록 했습니다. 마지막으로, 성능 개선을 위해 불필요한
            애니메이션을 제거하고, 이미지 및 리소스를 최적화하여 로딩 속도를
            향상시켰습니다.
          </p>
        </div>
      </section>

      <section ref={aiIntegrationRef} className="bg-neutral-800 py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              AI Integration
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            AI 통합 단계에서는 머신러닝 알고리즘을 사용하여 코드 작성 및 수정
            과정을 자동화하는 기능을 구현했습니다. 이를 통해 사용자는 더 빠르고
            효율적으로 코드를 작성할 수 있으며, AI 기반의 코드 추천 기능을 통해
            코드 품질을 향상시킬 수 있습니다. 또한, 자연어 처리(NLP) 기술을
            활용하여 사용자 입력을 이해하고, 관련 코드 스니펫을 자동으로
            제안하는 기능을 추가했습니다. 이러한 AI 통합은 사용자의 작업
            효율성을 극대화하고, 코드 작성 과정에서의 오류를 줄이는 데 큰 도움을
            주었습니다.
          </p>
        </div>
      </section>

      <section
        ref={futureEnhancementRef}
        className="bg-neutral-800 py-20 sm:py-16"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Future Enhancement
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            앞으로의 개선 사항으로는 사용자 피드백을 반영하여 추가적인 기능을
            개발하고, 기존 기능을 더욱 향상시킬 계획입니다. 예를 들어, 실시간
            협업 기능을 추가하여 여러 사용자가 동시에 작업할 수 있도록 하고,
            버전 관리 시스템을 통합하여 코드 변경 이력을 쉽게 추적할 수 있도록
            할 예정입니다. 또한, AI 기반의 코드 분석 및 최적화 기능을 강화하여
            더 높은 수준의 코드 품질을 유지할 수 있도록 할 것입니다. 이러한 개선
            사항을 통해 DevFlow는 더욱 강력하고 유용한 개발 도구로 발전할
            것입니다.
          </p>
        </div>
      </section>

      <section
        ref={finalReflectionRef}
        className="bg-neutral-800 py-20 sm:py-16"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Final Reflection
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            DevFlow 프로젝트를 통해 많은 것을 배울 수 있었고, 실제 사용자
            피드백을 통해 디자인 및 기능을 개선하는 과정에서 많은 인사이트를
            얻었습니다. 특히, 사용자 경험을 최우선으로 고려하여 설계하고
            개발하는 것이 얼마나 중요한지 깨달았습니다. 앞으로도 계속해서 사용자
            피드백을 반영하고, 최신 기술을 도입하여 DevFlow를 발전시켜 나갈
            것입니다.
          </p>
        </div>
      </section>
    </>
  );
};

export default DevFlow;
