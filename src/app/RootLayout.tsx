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
        <main className={`${!isHomePage ? "pt-20" : ""}`}>
          {!isHomePage && (
            <nav
              className={`fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ${
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
                      src="/images/Logo-white.svg"
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
                          ? "text-white border-b-2 border-white"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      HOME
                    </Link>
                    <Link
                      href="/work"
                      className={`relative px-4 py-4 text-sm font-medium transition-all duration-300 ${
                        isActive("/work")
                          ? "text-white border-b-2 border-white"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      WORK
                    </Link>
                    {/* <Link
                      href="/art"
                      className={`relative px-4 py-4 text-sm font-medium transition-all duration-300 ${
                        isActive("/art")
                          ? "text-white border-b-2 border-white"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      ART
                    </Link> */}
                    <Link
                      href="/resume"
                      className={`relative px-4 py-4 text-sm font-medium transition-all duration-300 ${
                        isActive("/resume")
                          ? "text-white border-b-2 border-white"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
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
