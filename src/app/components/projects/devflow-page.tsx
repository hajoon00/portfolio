"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const SERVICE_URL = "https://hajoon00.github.io/devflow-public/";
const GITHUB_URL = "https://github.com/hajoon00/devflow-public";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const screens = [
  {
    label: "메인 대시보드",
    caption: "연결된 스니펫과 노트를 한눈에",
    src: "/images/thumbnail/Thumbnails-devflow.webp",
  },
  {
    label: "주요 기능",
    caption: "주제별 코드 흐름 탐색",
    src: "/images/thumbnail/Thumbnails-devflow.webp",
  },
  {
    label: "핵심 인터랙션",
    caption: "AI 기반 코드 작성·수정",
    src: "/images/thumbnail/Thumbnails-devflow.webp",
  },
];

const meta = [
  { label: "역할", value: "기획 · 디자인 · 프론트엔드 개발" },
  { label: "기술 스택", value: "Next.js / TypeScript / Tailwind" },
  { label: "제작연도", value: "2025" },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function ScreenCard({
  label,
  caption,
  src,
  index,
}: {
  label: string;
  caption: string;
  src: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08} className="group">
      <div className="overflow-hidden rounded-sm border border-white/[0.08] bg-white/[0.02]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease }}
          >
            <Image
              src={src}
              alt={label}
              fill
              sizes="(max-width: 1200px) 100vw, 600px"
              className="object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              priority={index === 0}
            />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"
            initial={false}
            whileInView={{ y: -8 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
          />
        </div>
        <motion.div className="space-y-1 px-5 py-5 md:px-6 md:py-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="text-lg font-medium tracking-tight text-white md:text-xl">
            {label}
          </h3>
          <p className="text-sm text-white/45">{caption}</p>
        </motion.div>
      </div>
    </Reveal>
  );
}

export default function DevflowPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="bg-[#0a0a0a] text-white">
      <div className="devflow-grain pointer-events-none fixed inset-0 z-0" aria-hidden />

      <Link
        href="/"
        className="fixed left-6 top-6 z-50 text-[11px] uppercase tracking-[0.24em] text-white/45 transition-colors hover:text-white md:left-10"
      >
        ← Home
      </Link>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto w-full max-w-6xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mb-6 text-[10px] uppercase tracking-[0.32em] text-white/40"
          >
            Workflow Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="text-[clamp(4rem,18vw,11rem)] font-medium leading-[0.9] tracking-[-0.04em] text-white"
          >
            DevFlow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.45 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/55 md:mt-10 md:text-lg md:leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            개발 과정의 흐름을 더 직관적이고 효율적으로 만들기 위한 워크플로우
            플랫폼
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-3 md:mt-12"
          >
            <a
              href={SERVICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-white/90"
            >
              서비스 바로가기
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              GitHub 보기
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="mt-16 grid gap-6 border-t border-white/[0.08] pt-10 sm:grid-cols-3 md:mt-20 md:pt-12"
          >
            {meta.map((item) => (
              <div key={item.label} className="space-y-2">
                <dt className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-white/70 md:text-[15px]">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="relative z-10 border-t border-white/[0.06] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[10px] uppercase tracking-[0.32em] text-white/40">
              프로젝트 소개
            </h2>
            <p
              className="mt-8 text-xl leading-[1.75] text-white/75 md:text-2xl md:leading-[1.7]"
              style={{ wordBreak: "keep-all" }}
            >
              DevFlow는 여러 도구를 오가며 발생하는 작업 흐름의 단절을 줄이고,
              보다 자연스럽고 집중할 수 있는 개발 경험을 만들기 위해 시작한
              프로젝트입니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Screens */}
      <section className="relative z-10 px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-6xl space-y-12 md:space-y-16">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">
              주요 화면
            </p>
          </Reveal>
          <motion.div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {screens.map((screen, i) => (
              <ScreenCard key={screen.label} {...screen} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-white/[0.06] px-6 py-28 md:px-10 md:py-40">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-medium leading-tight tracking-[-0.03em] text-white">
            직접 DevFlow를 경험해보세요
          </h2>
          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={SERVICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/[0.1]"
            >
              서비스 방문하기
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </Reveal>
      </section>
    </div>
  );
}
