"use client";

import { projects } from "@/data";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

const Page = () => {
  // Use useParams to get the slug directly
  const { slug } = useParams<{ slug: string }>(); // Specify the type for params

  // Find the case study based on the slug
  const caseStudy = projects.find(
    (study: { slug: string }) => study.slug === slug
  );

  if (!caseStudy) {
    console.log("Case study not found for slug:", slug); // Log if not found
    return notFound();
  }

  // Dynamically load the case study content
  const ContentComponent = dynamic(
    () => import(`@/app/content/project/${caseStudy.slug}.tsx`),
    { ssr: false }
  );

  console.log("Case study found:", caseStudy); // Log if found

  return (
    <div>
      <ContentComponent />
    </div>
  );
};

export default Page;
