"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";
const PHONE_TEL = "+12542132423";
const PHONE_DISPLAY = "(254) 213-2423";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

export default function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#0f2706]"
    >
      {/* ─── Calm looping background video (fades in over the dark base) ─── */}
      <motion.video
        className="absolute inset-0 -z-20 size-full object-cover"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ opacity: { duration: 1.6, ease: EASE }, scale: { duration: 12, ease: "easeOut" } }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </motion.video>

      {/* ─── Legibility layers (restrained, even — lets the footage breathe) ─── */}
      {/* Soft even darkening across the whole frame */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#0a1020]/70"
      />
      {/* Gentle top/bottom darkening to anchor the centered text */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1020]/55 via-transparent to-[#0a1020]/75"
      />
      {/* Cinematic vignette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 45%, transparent 45%, rgba(10,16,32,0.7) 100%)",
        }}
      />
      {/* Bottom fade hand-off into the next section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[color:var(--color-cream-soft)]"
      />

      {/* ─── Content ─── */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Trust chip */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur">
              <ShieldCheck className="size-4 text-[#9DD270]" />
              Holistic &amp; preventive medicine · Killeen, TX
            </span>
          </motion.div>

          {/* Single headline */}
          <motion.h1
            id="home-hero-heading"
            variants={fadeUp}
            className="mt-7 font-semibold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            Personalized care for whole-body wellness.
          </motion.h1>

          {/* Single, confident subline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Accepting most insurance plans, with flexible 0% APR financing
            through Cherry and Denefits.
          </motion.p>

          {/* Two CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#1a3a0a] shadow-lg transition-colors hover:bg-[#f0f5eb]"
            >
              Book Appointment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-4 text-[#9DD270]" />
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Subtle scroll cue ─── */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute inset-x-0 bottom-7 z-10 flex justify-center"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/35 p-1.5">
          <motion.span
            className="block size-1.5 rounded-full bg-white/80"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
