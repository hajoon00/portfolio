"use client";

import { experiences } from "@/data";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation"; // Import useParams

const Page = () => {
  // Use useParams to get the slug directly
  const { slug } = useParams<{ slug: string }>(); // Specify the type for params

  // Find the experience based on the slug
  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    console.log("Experience not found for slug:", slug); // Log if not found
    return notFound();
  }

  // Dynamically load the experience content
  const ContentComponent = dynamic(
    () => import(`@/app/content/experience/${experience.slug}.tsx`),
    { ssr: false }
  );

  console.log("Experience found:", experience); // Log if found

  return (
    <div>
      <ContentComponent />
    </div>
  );
};

export default Page;
