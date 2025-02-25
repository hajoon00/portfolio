"use client";

import { experiences } from "@/data";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

const Page = ({ params }: PageProps) => {
  // React.use()를 사용하여 params를 비동기적으로 unwrap
  const { slug } = useParams();

  // slug에 해당하는 경험을 찾기
  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    console.log("Experience not found for slug:", slug); // 경험이 없는 경우 로그 출력
    return notFound();
  }

  // 동적으로 경험 상세 콘텐츠 로드
  const ContentComponent = dynamic(
    () => import(`@/app/content/experience/${experience.slug}.tsx`),
    { ssr: false }
  );

  console.log("Experience found:", experience); // 경험이 발견된 경우 로그 출력

  return (
    <div className="p-6">
      <ContentComponent />
    </div>
  );
};

export default Page;
