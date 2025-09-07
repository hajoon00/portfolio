"use client";

import React from "react";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body>
        <main>
          {/* Home Button - Only show on non-home pages */}
          {!isHomePage && (
            <Link
              href="/"
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-white/20 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
          )}
          <div className="pt-0">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
