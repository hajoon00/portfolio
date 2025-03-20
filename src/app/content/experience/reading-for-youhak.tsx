import { NextPage } from "next";
import Image from "next/image";

const consultingProcess = [
  {
    step: "Step 1",
    title: "상담",
    description: `Initial consultation to understand student's goals and background`,
  },
  {
    step: "Step 2",
    title: "포트폴리오 컨셉 설정",
    description:
      "Strategic planning of extracurricular activities and academic focus",
  },
  {
    step: "Step 3",
    title: "에세이/레쥬메",
    description: "Development of compelling essays and comprehensive resumes",
  },
  {
    step: "Step 4",
    title: "커먼앱 작성",
    description: "Guidance through the Common Application process",
  },
];

const ReadingForYouhak: NextPage = () => {
  return (
    <div className="bg-transparent">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-100">
            Contents Director @Reading for Youhak
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            I founded{" "}
            <span className="text-hajoon-400">Reading for Youhak</span>, a
            platform that guides students facing financial or systemic barriers
            in applying to U.S. universities. Through content-driven marketing
            and digital engagement, the platform grew into a sustainable
            business.
          </p>

          <dl className="mt-10 divide-y divide-gray-800">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-300">
                My Role
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                Contents Director <br />
                Designer <br />
                Video Producer <br />
                College Admission Consultant
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-300">
                Timeline
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                Jan 2019 - Sept 2020
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-300">
                Tools Used
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                Adobe Illustrator <br />
                Adobe Premiere Pro
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-20 sm:py-16 bg-alt-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Problem Statement
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-200">
            한국은 해외 대학 입시에 대해서 굉장히 제한적인 정보만 얻을 수 있음.
            특히, 영어를 잘 하지 못하는 학부모들 같은 경우는 더욱 정보의
            불균형에 시달릴 수 밖에 없음. 특히 현지의 정보는 국제 학생들에게
            불친절할 때가 많기 때문에, 나는 이런 문제를 해결하기 위해서 모두가
            편리하게 정보에 접근할 수 있는 플랫폼의 필요성을 느꼈음.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Process & Approach
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                1. Content Production
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                The founding philosophy of &quot;Reading for Youhak&quot; was to
                provide easily accessible study abroad information. We chose
                YouTube as our primary platform, producing over 50 videos that
                simplified complex admissions topics.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Image
                  src="/images/reading-for-youhak/youtube-home.jpg"
                  alt="youtube home"
                  width={500}
                  height={300}
                  className="rounded-md shadow-md"
                />
                <Image
                  src="/images/reading-for-youhak/youtube-videos.jpg"
                  alt="youtube videos"
                  width={500}
                  height={300}
                  className="rounded-md shadow-md"
                />
              </div>
              <a
                href="https://www.youtube.com/@유학읽어주는남자"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="mt-6 text-white bg-hajoon-500 hover:bg-hajoon-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Visit YouTube Channel
                </button>
              </a>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                기본적인 standardized test 정보부터 시작해서, common app 작성
                방법, visa application of INternational students, 최신 입시동향
                뉴스 등에 대한 영상을 제작해서 무료로 배포함.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                2. Building a Community
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                그 후로는 지속적인 정보 공유가 이뤄질 수 있도록 커뮤니티를
                만들고, 좀 더 정돈된 자료를 배포하기 시작함. 직접 만든 ap/sat ii
                강의 노트부터 시작해서 3년간의 입시 타임라인을 만들고, 학교별
                체크리스트까지 정리해서 비공개 카페/블로그에 올림. 오픈채팅방을
                만들어서 더빠른 답장을 할 수 있도록 하고, 서로 자료를 공유할 수
                있도록 만들었음.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Turning into a Sustainable Business
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                Consulting Process
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                문제가 뭐였냐? 바로 정보의 불균형. 한국에서는 수많은 유학
                정보들이 학원에서 공유되고, 그 학원의 등록금은 수백만원에서
                수천만원 가까이 됨. 그렇기 때문에 그런 정보가 없는 학생들은
                어디서부터 시작해야 할지 모르는 경우가 많았음. 그래서 우리는
                단순히 에세이를 봐주거나, 레쥬메를 봐주는 것이 아닌 입시의
                처음부터 끝까지 모든 과정을 체계적으로 도와주는 것을 방향으로
                잡았음.
              </p>
              <ol className="mt-4 relative border-s border-gray-700">
                {consultingProcess.map((item, index) => (
                  <li key={index} className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-hajoon-500 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                      {item.step}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-100">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-400">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-hajoon-400">
            Outcome & Impact
          </h2>
          <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-400">
            <li>✅ Reached 66K+ total views on educational videos</li>
            <li>
              ✅ Successfully guided students to top universities including
              Yale, Cornell, and Imperial College
            </li>
            <li>
              ✅ Established a recognizable brand in the Korean education
              consulting space
            </li>
          </ul>

          <div className="mt-8">
            <a
              href="https://www.youtube.com/@유학읽어주는남자"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-hajoon-500 hover:bg-hajoon-800 rounded-lg"
            >
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadingForYouhak;
