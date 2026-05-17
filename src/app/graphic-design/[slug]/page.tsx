"use client";

import JpegPortfolio from "@/app/components/jpeg-portfolio";
import { isGraphicDesignSlug } from "@/data";
import { getGraphicDesignJpegGallery } from "@/lib/jpeg-galleries";
import { getProjectMeta } from "@/lib/project-meta";
import { notFound, useParams } from "next/navigation";

export default function GraphicDesignCasePage() {
  const raw = useParams()?.slug;
  const slugStr =
    typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";

  if (!isGraphicDesignSlug(slugStr)) {
    notFound();
  }

  const jpegGallery = getGraphicDesignJpegGallery(slugStr);
  if (!jpegGallery) {
    notFound();
  }

  return (
    <JpegPortfolio blocks={jpegGallery} meta={getProjectMeta(slugStr)} />
  );
}
