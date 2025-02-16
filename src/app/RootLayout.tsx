"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css"; // Tailwind 스타일 적용
import Footer from "./components/footer";
import GoBackButton from "./components/gobackbutton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // 현재 경로 확인

  return (
    <html lang="en">
      <body>
        {pathname !== "/" && (
          <nav className="bg-transparent fixed w-full z-40 top-0 start-0">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link href="/">
                <span className="self-center text-2xl text-hajoon font-semibold whitespace-nowrap">
                  Hajoon Park
                </span>
              </Link>

              <div className="hidden md:flex md:w-auto">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0">
                  <li>
                    <Link
                      href="/"
                      className="block py-2 px-3 text-hajoon-200 hover:text-hajoon-500"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work"
                      className="block py-2 px-3 text-hajoon-200 hover:text-hajoon-500"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/art"
                      className="block py-2 px-3 text-hajoon-200 hover:text-hajoon-500"
                    >
                      Art
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resume"
                      className="block py-2 px-3 text-hajoon-200 hover:text-hajoon-500"
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}

        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
