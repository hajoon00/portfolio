"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { isGraphicDesignSlug } from "@/data";

const Nyangiverse = dynamic(
  () => import("@/app/content/experience/nyangiverse"),
  { ssr: false }
);
const Hasom = dynamic(() => import("@/app/content/project/hasom"), {
  ssr: false,
});
const KapacityMerch = dynamic(
  () => import("@/app/content/merch/kapacity-merch"),
  { ssr: false }
);

const caseStudyBySlug = {
  nyangiverse: Nyangiverse,
  hasom: Hasom,
  kapacity: KapacityMerch,
} as const;

export default function GraphicDesignCasePage() {
  const raw = useParams()?.slug;
  const slugStr =
    typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";

  if (!isGraphicDesignSlug(slugStr)) {
    notFound();
  }

  const Content = caseStudyBySlug[slugStr];

  return (
    <>
      <Link
        href="/graphic-design"
        className="fixed top-6 left-4 md:left-8 z-[100] inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/10 transition-colors"
      >
        ← Graphic design
      </Link>
      <Content />
    </>
  );
}
