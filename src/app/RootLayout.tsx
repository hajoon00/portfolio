"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 w-full z-50 bg-[#0d0d0d] bg-opacity-85 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
            <div className="flex justify-start h-16">
              <div className="flex space-x-8">
                <Link
                  href="/"
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive("/")
                      ? "text-gray-100 border-b-2 border-gray-100"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  Hajoon Park
                </Link>
              </div>
            </div>
            <div className="flex justify-end h-16">
              <div className="flex space-x-8">
                <Link
                  href="/"
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive("/")
                      ? "text-gray-100 border-b-2 border-gray-100"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  HOME
                </Link>
                <Link
                  href="/work"
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive("/work")
                      ? "text-gray-100 border-b-2 border-gray-100"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  WORK
                </Link>
                <Link
                  href="/art"
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive("/art")
                      ? "text-gray-100 border-b-2 border-gray-100"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  ART
                </Link>
                <Link
                  href="/resume"
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive("/resume")
                      ? "text-gray-100 border-b-2 border-gray-100"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  RESUME
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
