import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic design",
  description:
    "Nyangiverse, Hasom, Kapacity — branding and graphic design work by Hajoon Park.",
};

export default function GraphicDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
