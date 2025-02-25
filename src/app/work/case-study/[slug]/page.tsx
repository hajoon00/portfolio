"use client";

import { caseStudies } from "@/data";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

// Add type for params and use it or remove if not needed
interface PageProps {
  params: { slug: string };
}

const Page = ({ params }: PageProps) => {
  // Use params directly instead of useParams
  const slug = params.slug; // Use params here

  // slug에 해당하는 케이스 스터디를 찾기
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    console.log("Case study not found for slug:", slug); // 케이스 스터디가 없는 경우 로그 출력
    return notFound();
  }

  // 동적으로 케이스 스터디 상세 콘텐츠 로드
  const ContentComponent = dynamic(
    () => import(`@/app/content/case-study/${caseStudy.slug}.tsx`),
    { ssr: false }
  );

  console.log("Case study found:", caseStudy); // 케이스 스터디가 발견된 경우 로그 출력

  return (
    <div className="p-6">
      <ContentComponent />
    </div>
  );
};

export default Page;
