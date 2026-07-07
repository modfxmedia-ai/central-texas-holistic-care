"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const SITE_URL = "https://centraltexasholisticcarepllc.com";

export type Crumb = { label: string; href: string };

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  /** Optional full-bleed background image URL. */
  backgroundImage?: string;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function buildBreadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href.startsWith("http") ? c.href : `${SITE_URL}${c.href}`,
    })),
  };
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "30%"]); // 0.3x parallax

  return (
    <section
      ref={ref}
      aria-labelledby="page-hero-title"
      className="relative isolate w-full overflow-hidden"
      style={{ height: 360 }}
    >
      {/* Schema.org BreadcrumbList JSON-LD, App Router style (Script via next/head
          is for the Pages Router; this script tag is SSR'd into the HTML). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      {/* Parallax background layer */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        {backgroundImage ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${backgroundImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-[#0f2706]/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2706]/80 via-[#0f2706]/20 to-[#0f2706]/40" />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #1a3a0a 0%, #2D5016 65%, #244010 100%)",
            }}
          />
        )}

        {/* Botanical leaf pattern */}
        <svg
          aria-hidden
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-[0.08]"
        >
          <defs>
            <pattern
              id="page-hero-leaves"
              x="0"
              y="0"
              width="160"
              height="160"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 80c0-28 24-52 52-52 22 0 40 14 47 34-24 6-46 24-50 48-22-6-49-18-49-30z"
                stroke="#FAF6EE"
                strokeWidth="1.1"
                fill="none"
              />
              <path
                d="M40 80c10-9 28-20 46-23"
                stroke="#FAF6EE"
                strokeWidth="0.9"
                fill="none"
                strokeLinecap="round"
              />
            </pattern>
            {/* Subtle noise texture via fractal turbulence */}
            <filter id="page-hero-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="2"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>

          <rect width="600" height="400" fill="url(#page-hero-leaves)" />
          <rect
            width="600"
            height="400"
            filter="url(#page-hero-noise)"
            opacity="0.18"
          />
        </svg>

        {/* Darken bottom edge for content contrast */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="absolute left-4 top-6 sm:left-6 sm:top-8 lg:left-8"
          >
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/60 sm:text-sm">
              {breadcrumbs.map((c, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={`${c.href}-${i}`} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <ChevronRight aria-hidden className="size-3.5 text-white/40" />
                    )}
                    {isLast ? (
                      <span aria-current="page" className="text-white/90">
                        {c.label}
                      </span>
                    ) : (
                      <Link
                        href={c.href}
                        className="transition-colors hover:text-white"
                      >
                        {c.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl text-white"
        >
          <motion.h1
            id="page-hero-title"
            variants={item}
            className="font-heading font-light leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={item}
              className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
