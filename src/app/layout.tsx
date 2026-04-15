import type { Metadata } from "next";
import RootLayout from "./RootLayout";

export const metadata: Metadata = {
  title: "Hajoon Park — Marketing & Design",
  description: "Marketing, branding, and digital work by Hajoon Park.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
