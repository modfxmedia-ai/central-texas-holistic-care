"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";
const PHONE_TEL = "+12542132423";
const PHONE_DISPLAY = "(254) 213-2423";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const SERVICE_TAGS = [
  "Hormone Therapy",
  "IV Nutrition",
  "Men's Health",
  "Women's Health",
];

export default function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate w-full overflow-hidden bg-[color:var(--color-cream-soft)]"
    >
      {/* ─── Ambient brand glows ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 size-[560px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.20), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[480px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(45,80,22,0.16), transparent 70%)",
        }}
      />
      {/* dot grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-8 top-24 hidden h-56 w-56 opacity-[0.16] lg:block"
      >
        <defs>
          <pattern id="hero-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#1a3a0a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-32">
        {/* ─── Copy column ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-xl flex-col items-start"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/15 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-[#1a3a0a] shadow-sm">
              <ShieldCheck className="size-4 text-[#6CBE45]" />
              Holistic &amp; preventive medicine · Killeen, TX
            </span>
          </motion.div>

          <motion.h1
            id="home-hero-heading"
            variants={fadeUp}
            className="mt-7 font-heading font-semibold leading-[1.04] tracking-tight text-[#1a3a0a]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            Personalized care for{" "}
            <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
              whole-body wellness.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-stone-600"
          >
            Root-cause, physician-led medicine in Central Texas — hormone
            therapy, IV nutrition, and men&apos;s &amp; women&apos;s health,
            tailored to you. Most insurance accepted, with 0% APR financing.
          </motion.p>

          {/* service tags */}
          <motion.ul
            variants={fadeUp}
            className="mt-7 flex flex-wrap gap-2"
          >
            {SERVICE_TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[#1a3a0a]/12 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[#2D5016] backdrop-blur"
              >
                {tag}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/25 transition-shadow hover:shadow-2xl hover:shadow-[#6CBE45]/20"
            >
              Book Appointment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a3a0a]/20 bg-white px-7 py-4 text-sm font-semibold text-[#1a3a0a] transition-colors hover:border-[#6CBE45] hover:bg-[#f0f5eb]"
            >
              <Phone className="size-4 text-[#6CBE45]" />
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>

          {/* social proof */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center gap-3"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-[#C4A862] text-[#C4A862]" />
              ))}
            </div>
            <p className="text-sm text-stone-600">
              Trusted by patients across Central Texas
            </p>
          </motion.div>
        </motion.div>

        {/* ─── Media column ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[540px] lg:max-w-none"
        >
          {/* tilted brand backdrop */}
          <div
            aria-hidden
            className="absolute inset-0 -rotate-3 rounded-[2.75rem] bg-gradient-to-br from-[#6CBE45] to-[#2D5016]"
          />
          {/* video frame */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.75rem] shadow-2xl shadow-[#1a3a0a]/30 ring-1 ring-white/50">
            <video
              className="size-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            >
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
            </video>
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,36,6,0) 55%, rgba(14,36,6,0.5) 100%)",
              }}
            />
          </div>

          {/* floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="absolute -bottom-6 -left-4 z-10 sm:-left-8"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-gradient-to-br from-[#1a3a0a] to-[#0f2706] px-5 py-4 text-[#FAF6EE] shadow-2xl shadow-[#1a3a0a]/30 ring-1 ring-[#6CBE45]/25">
              <span className="flex size-11 flex-none items-center justify-center rounded-full bg-[#6CBE45]/15">
                <ShieldCheck className="size-6 text-[#9DD270]" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold leading-tight">
                  Physician-led, board-certified
                </p>
                <p className="text-[11px] text-[#FAF6EE]/75">
                  Most insurance accepted
                </p>
              </div>
            </div>
          </motion.div>

          {/* dashed ring accent */}
          <motion.svg
            aria-hidden
            viewBox="0 0 100 100"
            className="pointer-events-none absolute -right-5 -top-5 size-20 text-[#6CBE45]/70"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />
            <circle cx="50" cy="4" r="3" fill="currentColor" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
