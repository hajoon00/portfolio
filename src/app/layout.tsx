import type { Metadata } from "next";
import RootLayout from "./RootLayout";

export const metadata: Metadata = {
  title: "Hajoon Park",
  description: "Portfolio of Hajoon Park",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
