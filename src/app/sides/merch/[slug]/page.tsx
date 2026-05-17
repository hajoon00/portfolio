"use client";

import JpegPortfolio from "@/app/components/jpeg-portfolio";
import { merchDesigns } from "@/data";
import { getMerchJpegGallery } from "@/lib/jpeg-galleries";
import { getProjectMeta } from "@/lib/project-meta";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

const Page = () => {
  const { slug } = useParams<{ slug: string }>();

  const design = merchDesigns.find((d) => d.slug === slug);

  if (!design) {
    return notFound();
  }

  const jpegGallery = getMerchJpegGallery(slug);
  if (jpegGallery) {
    return (
      <JpegPortfolio blocks={jpegGallery} meta={getProjectMeta(slug)} />
    );
  }

  const ContentComponent = dynamic(
    () => import(`@/app/content/merch/${design.slug}.tsx`),
    { ssr: false }
  );

  return (
    <div>
      <ContentComponent />
    </div>
  );
};

export default Page;
