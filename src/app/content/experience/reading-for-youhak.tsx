import { NextPage } from "next";

const consultingProcess = [
  {
    step: "Step 1",
    title: "상담",
    description:
      "Initial consultation to understand student's goals and background",
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
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-100">
            Contents Director @유학 읽어주는 남자
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            A volunteer initiative turned into a thriving platform, guiding
            students facing financial or systemic barriers in applying to U.S.
            universities. Through content-driven marketing and digital
            engagement, the platform grew into a sustainable business.
          </p>

          <dl className="mt-10 divide-y divide-gray-800">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-300">
                My Role
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                컨텐츠 디렉터 <br />
                디자이너 <br />
                영상 PD <br />
                입시 컨설턴트
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

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Process & Approach
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                1. Content Strategy & Production
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                The founding philosophy of "Reading for Youhak" was to provide
                easily accessible study abroad information. We chose YouTube as
                our primary platform, producing over 50 videos that simplified
                complex admissions topics.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src="/vercel.svg"
                  alt="youtube home"
                  className="rounded-lg shadow-xl"
                />
                <img
                  src="/vercel.svg"
                  alt="youtube videos"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                2. Consulting Process
              </h3>
              <ol className="mt-4 relative border-s border-gray-700">
                {consultingProcess.map((item, index) => (
                  <li key={index} className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
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
          <h2 className="text-base font-semibold leading-7 text-red-600">
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
              href="https://www.youtube.com/@user-lj3mq5qu2i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-700 hover:bg-red-800 rounded-lg"
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
