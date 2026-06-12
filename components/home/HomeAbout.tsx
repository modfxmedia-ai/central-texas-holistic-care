"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Calendar, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function HomeAbout() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
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
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* ─── Image composition ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.9, ease: EASE }}
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
            {/* main image */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#1a3a0a]/25 ring-1 ring-white/40">
              <Image
                src="/images/source/women-holding-hands.webp"
                alt="Compassionate, individualized care at Central Texas Holistic Care"
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

            {/* 15+ floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 z-10 sm:-bottom-8 sm:-right-6"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-52 rounded-2xl border border-white/15 bg-gradient-to-br from-[#1a3a0a] to-[#0f2706] p-5 text-[#FAF6EE] shadow-2xl shadow-[#1a3a0a]/30 ring-1 ring-[#6CBE45]/25"
              >
                <div className="font-heading text-4xl font-semibold leading-none">
                  <span className="bg-gradient-to-r from-[#FAF6EE] to-[#6CBE45] bg-clip-text text-transparent">
                    15+
                  </span>
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#FAF6EE]/80">
                  Conditions treated with personalized plans
                </div>
              </motion.div>
            </motion.div>

            {/* dashed ring accent */}
            <motion.svg
              aria-hidden
              viewBox="0 0 100 100"
              className="pointer-events-none absolute -left-5 -top-5 size-20 text-[#6CBE45]/70"
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
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#1a3a0a] transition-colors hover:border-[#6CBE45] hover:bg-[#f0f5eb]"
              >
                <Calendar className="size-4 text-[#6CBE45]" />
                Book an Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
