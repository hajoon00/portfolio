"use client";

import JpegPortfolio from "@/app/components/jpeg-portfolio";
import { isGraphicDesignSlug } from "@/data";
import { getGraphicDesignJpegGallery } from "@/lib/jpeg-galleries";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const Hasom = dynamic(() => import("@/app/content/project/hasom"), {
  ssr: false,
});

const caseStudyBySlug = {
  hasom: Hasom,
} as const;

export default function GraphicDesignCasePage() {
  const raw = useParams()?.slug;
  const slugStr =
    typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";

  if (!isGraphicDesignSlug(slugStr)) {
    notFound();
  }

  const jpegGallery = getGraphicDesignJpegGallery(slugStr);
  if (jpegGallery) {
    return <JpegPortfolio items={jpegGallery} />;
  }

  const Content = caseStudyBySlug[slugStr as keyof typeof caseStudyBySlug];

  return (
    <>
      <Link
        href="/graphic-design"
        className="fixed top-6 left-4 md:left-8 z-[100] inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/10"
      >
        ← Graphic design
      </Link>
      <Content />
    </>
  );
}
