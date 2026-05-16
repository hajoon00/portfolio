"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-neutral-200/80 bg-surface/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[2400px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="relative opacity-90 transition-opacity duration-300 hover:opacity-100"
        >
          <Image
            src="/images/Logo-dark.svg"
            alt="Hajoon Park"
            width={140}
            height={18}
            priority
            className="h-4 w-auto md:h-[18px]"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <ul className="flex items-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative text-[11px] uppercase tracking-[0.22em] text-neutral-600 transition-colors duration-300 hover:text-neutral-900 md:text-xs"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-neutral-900 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
