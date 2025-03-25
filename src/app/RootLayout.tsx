"use client";

import React from "react";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Footer from "./components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <html lang="en">
      <body>
        <main className={`${!isHomePage ? "pt-24" : ""}`}>
          {!isHomePage && (
            <nav className="fixed top-0 w-full z-50 bg-[#0d0d0d] bg-opacity-85 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
                <div className="flex lg:flex-1 items-center h-16">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <Image
                      src="/images/Logo-white.svg"
                      alt="Hajoon Park Logo"
                      width={120}
                      height={40}
                    />
                  </Link>
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
          )}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
