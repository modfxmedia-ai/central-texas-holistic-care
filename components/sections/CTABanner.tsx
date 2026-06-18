"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[color:var(--color-background)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-16 text-center text-white sm:px-12 sm:py-20"
            style={{
              background:
                "linear-gradient(135deg, #1a3a0a 0%, #2D5016 55%, #244010 100%)",
            }}
          >
            {/* Floating glow */}
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(139,173,90,0.55), transparent)",
              }}
            />
            <motion.div
              aria-hidden
              animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="pointer-events-none absolute -right-20 -top-10 size-64 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(139,173,90,0.4), transparent)",
              }}
            />

            {/* Botanical pattern */}
            <svg
              aria-hidden
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
              className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
            >
              <defs>
                <pattern
                  id="cta-leaves"
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
                </pattern>
              </defs>
              <rect width="800" height="400" fill="url(#cta-leaves)" />
            </svg>

            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8BAD5A]">
                Ready When You Are
              </p>
              <h2
                className="mt-4 font-heading font-light leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
              >
                Your path to better health{" "}
                <span className="italic text-[#8BAD5A]">starts today</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">
                Book an appointment online in under a minute, or call us. Most insurance
                plans accepted.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#8BAD5A] px-7 py-3.5 text-sm font-semibold text-[#0e2406] shadow-lg shadow-emerald-900/30 hover:bg-[#9cbf6a]"
                >
                  Book An Appointment
                  <ArrowRight className="size-4" />
                </motion.a>

                <a
                  href="tel:+12542132423"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <Phone className="size-4" />
                  Call 254-213-2423
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
