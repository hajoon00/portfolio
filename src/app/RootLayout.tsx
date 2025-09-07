"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Footer from "./components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMounted]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <html lang="en">
      <body>
        <main>
          {!isHomePage && (
            <nav
              className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md transition-transform duration-300 ${
                isMounted && isNavbarVisible
                  ? "translate-y-0"
                  : "-translate-y-full"
              }`}
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <Link href="/" className="flex items-center space-x-2 group">
                    <Image
                      src="/images/Logo-dark.svg"
                      alt="Hajoon Park Logo"
                      width={100}
                      height={35}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  {/* Navigation Links */}
                  <div className="flex items-center space-x-1">
                    <Link
                      href="/"
                      className={`relative px-4 py-4 text-sm font-medium transition-all duration-300 ${
                        isActive("/")
                          ? "text-gray-900 border-b-2 border-gray-900"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      HOME
                    </Link>
                    {/* <Link
                      href="/work"
                      className={`relative px-4 py-4 text-sm font-medium transition-all duration-300 ${
                        isActive("/work")
                          ? "text-gray-900 border-b-2 border-gray-900"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      WORK
                    </Link> */}
                    {/* <Link
                      href="/art"
                      className={`relative px-4 py-4 text-sm font-medium transition-all duration-300 ${
                        isActive("/art")
                          ? "text-gray-900 border-b-2 border-gray-900"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      ART
                    </Link> */}
                    <Link
                      href="/resume"
                      className={`relative px-4 py-4 text-sm font-medium transition-all duration-300 ${
                        isActive("/resume")
                          ? "text-gray-900 border-b-2 border-gray-900"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
