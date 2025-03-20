"use client";

import { merchDesigns } from "@/data";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation"; // Import useParams

const Page = () => {
  // Use useParams to get the slug directly
  const { slug } = useParams<{ slug: string }>(); // Specify the type for params

  // Find the experience based on the slug
  const design = merchDesigns.find((design) => design.slug === slug);

  if (!design) {
    console.log("Design not found for slug:", slug); // Log if not found
    return notFound();
  }

  // Dynamically load the experience content
  const ContentComponent = dynamic(
    () => import(`@/app/content/merch/${design.slug}.tsx`),
    { ssr: false }
  );

  console.log("Design found:", design); // Log if found

  return (
    <div>
      <ContentComponent />
    </div>
  );
};

export default Page;
