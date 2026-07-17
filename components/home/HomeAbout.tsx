"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarClock,
  Check,
  CreditCard,
  Leaf,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function HomeAbout() {
  const [flipped, setFlipped] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setFlipped((f) => !f);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-28">
      {/* Soft seams so the white blends with cream/sage neighbors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[color:var(--color-cream-soft)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[color:var(--color-soft-green)]/55 to-transparent"
      />
      {/* Blueprint vertical-line pattern */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.12]"
      >
        <defs>
          <pattern
            id="about-lines"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 0 L 0 56"
              fill="none"
              stroke="#2D5016"
              strokeWidth="0.7"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-lines)" />
      </svg>
      {/* Sage radial glow (left) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 size-[480px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.18), transparent 70%)",
        }}
      />
      {/* Gold radial glow (right) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.18), transparent 70%)",
        }}
      />
      {/* decorative dot grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-12 top-16 hidden h-64 w-64 opacity-[0.18] lg:block"
      >
        <defs>
          <pattern id="about-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#1a3a0a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-dots)" />
      </svg>
      {/* floating leaf */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0], rotate: [0, 8, -4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[4%] top-24 hidden lg:block"
      >
        <Leaf className="size-9 text-[#6CBE45]/50" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* ─── Copy ─── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12% 0px" }}
          >
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45]" />
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
                About Us
              </p>
            </div>
            <h2
              className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              The Best Thing You Can Do{" "}
              <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
                to Your Health.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
              We focus on regenerative, restorative and preventative treatments
              through our specialization in hormonal and metabolic systems
              dysfunctions. We help to restore patients lives with natural
              bioidentical hormone replacement, nutrition support and
              regenerative services and allopathic treatments.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/about-us/"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/25 transition-shadow hover:shadow-2xl hover:shadow-[#6CBE45]/20"
              >
                About Us
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/about-us/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#1a3a0a] transition-colors hover:border-[#6CBE45] hover:bg-[#f0f5eb]"
              >
                Book a Consultation
              </Link>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Bioidentical hormone replacement",
                "Personalized nutrition support",
                "Regenerative & restorative care",
                "Preventative, root-cause approach",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-stone-600"
                >
                  <span className="mt-0.5 inline-flex size-5 flex-none items-center justify-center rounded-full bg-[#6CBE45]/15 text-[#2D5016]">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-stone-200/80 pt-6">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#6CBE45]/15 ring-1 ring-[#6CBE45]/25">
                  <Leaf className="size-3.5 text-[#2D5016]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a0a]">
                  Physician-led · Killeen, TX
                </span>
              </div>
              <span aria-hidden className="hidden h-4 w-px bg-stone-200 sm:block" />
              <span className="text-xs text-stone-500">
                Trusted by <span className="font-semibold text-[#1a3a0a]">1,200+</span> patients across Central Texas
              </span>
            </div>
          </motion.div>

          {/* ─── Image composition ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.9, ease: EASE }}
            onHoverStart={() => {
              pausedRef.current = true;
            }}
            onHoverEnd={() => {
              pausedRef.current = false;
            }}
            onFocus={() => {
              pausedRef.current = true;
            }}
            onBlur={() => {
              pausedRef.current = false;
            }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[520px]"
          >
            {/* tilted forest background card */}
            <motion.div
              aria-hidden
              animate={{ rotate: [-3.5, -2.5, -3.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#2D5016] to-[#1a3a0a]"
              style={{ transformOrigin: "center" }}
            />
            {/* lime mid card */}
            <motion.div
              aria-hidden
              animate={{ rotate: [3, 2, 3] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#6CBE45] to-[#8BAD5A]"
              style={{ transformOrigin: "center" }}
            />
            {/* main image, continuous 3D flip */}
            <div
              className="absolute inset-0"
              style={{ perspective: "1600px" }}
            >
              <motion.div
                className="relative size-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                {/* front, photo */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#1a3a0a]/25 ring-1 ring-white/40"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src="/images/source/the-best-thing-you-can-do-for-your-health.jpeg"
                    alt="A couple practicing mindful movement outdoors, investing in their long-term health with Central Texas Holistic Care"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(45,80,22,0) 50%, rgba(26,58,10,0.55) 100%)",
                    }}
                  />
                </div>

                {/* back, data */}
                <div
                  className="absolute inset-0 flex flex-col overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a3a0a] via-[#2D5016] to-[#0f2706] p-7 text-[#FAF6EE] shadow-2xl shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/30 sm:p-9"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* subtle pattern overlay */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 size-full opacity-[0.12]"
                  >
                    <defs>
                      <pattern
                        id="about-back-grid"
                        width="36"
                        height="36"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M36 0 L0 0 0 36"
                          fill="none"
                          stroke="#C4A862"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#about-back-grid)" />
                  </svg>
                  {/* gold corner ticks */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-4 top-4 size-3 border-l border-t border-[#C4A862]/55"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-4 bottom-4 size-3 border-b border-r border-[#C4A862]/55"
                  />

                  {/* eyebrow row */}
                  <div className="relative flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#9DD270]">
                      By the numbers
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C4A862]/40 bg-[#0f2706]/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C4A862] backdrop-blur">
                      <Award className="size-3" />
                      Est. 2019
                    </span>
                  </div>

                  {/* Stats, compact 3-row */}
                  <div className="relative mt-5 space-y-3.5">
                    {[
                      {
                        value: "15+",
                        label: "Conditions treated with personalized plans",
                      },
                      {
                        value: "1,200+",
                        label: "Patients supported across Central Texas",
                      },
                      {
                        value: "100%",
                        label: "Bioidentical, root-cause focused care",
                      },
                    ].map(({ value, label }) => (
                      <div
                        key={label}
                        className="flex items-baseline gap-4 border-b border-[#FAF6EE]/10 pb-3 last:border-b-0 last:pb-0"
                      >
                        <div className="font-heading text-3xl font-semibold leading-none sm:text-[2.25rem]">
                          <span className="bg-gradient-to-r from-[#FAF6EE] to-[#6CBE45] bg-clip-text text-transparent">
                            {value}
                          </span>
                        </div>
                        <div className="text-[12.5px] leading-snug text-[#FAF6EE]/80">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Specialties */}
                  <div className="relative mt-5">
                    <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[#C4A862]">
                      <Stethoscope className="size-3.5" />
                      Focus areas
                    </span>
                    <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
                      {[
                        "BHRT & pellets",
                        "IV nutrition",
                        "Peptide therapy",
                        "Regenerative care",
                        "Weight optimization",
                        "Preventive labs",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[12px] text-[#FAF6EE]/85"
                        >
                          <Check className="size-3 flex-none text-[#9DD270]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pull-quote block */}
                  <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#C4A862]/25 bg-[#0f2706]/40 p-4 backdrop-blur-sm">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#C4A862] via-[#9DD270] to-[#C4A862]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-1 -top-2 font-heading text-[44px] leading-none text-[#C4A862]/30"
                    >
                      &ldquo;
                    </span>
                    <p className="relative pl-3 font-heading text-[13.5px] italic leading-snug text-[#FAF6EE]/90">
                      Every plan starts with your labs, your story, and a real
                      conversation, not a prescription pad.
                    </p>
                    <p className="relative mt-2 pl-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#9DD270]">
                     , Our care philosophy
                    </p>
                  </div>

                  {/* Trust chip row */}
                  <ul className="relative mt-4 flex flex-wrap items-center gap-1.5">
                    {[
                      { icon: ShieldCheck, label: "Insurance accepted" },
                      { icon: CreditCard, label: "0% APR financing" },
                      { icon: CalendarClock, label: "Same-day visits" },
                    ].map(({ icon: Icon, label }) => (
                      <li
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#FAF6EE]/15 bg-[#FAF6EE]/[0.06] px-2.5 py-1 text-[10.5px] font-medium text-[#FAF6EE]/85 backdrop-blur"
                      >
                        <Icon className="size-3 text-[#9DD270]" />
                        {label}
                      </li>
                    ))}
                  </ul>

                  {/* Signature line */}
                  <div className="relative mt-auto pt-4">
                    <div className="flex items-center gap-2 border-t border-[#FAF6EE]/15 pt-3">
                      <Sparkles className="size-3.5 flex-none text-[#C4A862]" />
                      <span className="text-[11px] leading-snug text-[#FAF6EE]/75">
                        Physician-led &middot; Functional &amp; holistic medicine &middot; Killeen, TX
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* flip toggle button */}
            <motion.button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              aria-label="Flip card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
              className="absolute right-4 top-4 z-20"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#1a3a0a]/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#FAF6EE] backdrop-blur transition-colors hover:bg-[#1a3a0a]/90">
                <motion.span
                  className="inline-flex"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="size-3.5 text-[#9DD270]" />
                </motion.span>
                Flip
              </span>
            </motion.button>

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
      </div>
    </section>
  );
}
