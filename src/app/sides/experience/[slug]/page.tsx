"use client";

import JpegPortfolio from "@/app/components/jpeg-portfolio";
import { experiences } from "@/data";
import { getExperienceJpegGallery } from "@/lib/jpeg-galleries";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

const Page = () => {
  const { slug } = useParams<{ slug: string }>();

  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    return notFound();
  }

  const jpegGallery = getExperienceJpegGallery(slug);
  if (!jpegGallery) {
    return notFound();
  }

  return (
    <JpegPortfolio blocks={jpegGallery} />
  );
};

export default Page;
