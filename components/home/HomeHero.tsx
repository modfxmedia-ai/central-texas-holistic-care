"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Droplet,
  Flame,
  HeartPulse,
  Leaf,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import NeuralBackground from "./NeuralBackground";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";

/* -------------------------------------------------------------------------- */
/*                            Brand tokens (from logo)                         */
/* -------------------------------------------------------------------------- */
// Forest:  #1a3a0a / #2D5016
// Lime:    #6CBE45  ← vibrant logo green
// Sage:    #8BAD5A
// Leaf:    #9DD270
// Cream:   #FAF6EE / #FFFDF6

const STATS = [
  { value: 15, suffix: "+", label: "Conditions Treated" },
  { value: 4.9, decimals: 1, suffix: "★", label: "Patient Rating" },
  { value: 16, suffix: "+", label: "Insurance Carriers" },
  { value: 0, suffix: "% APR", label: "Cherry Financing" },
];

const ROTATING_WORDS = [
  "Hormone Balance",
  "Whole-Body Wellness",
  "Preventive Care",
  "IV Nutrition",
  "Vitality at Every Age",
];

type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  sub: string;
  Icon: typeof Leaf;
  features: string[];
};

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/source/hero-medical-assistant.webp",
    alt: "Medical assistant preparing daily vitamins and supplements for a patient",
    eyebrow: "Whole-Person Care",
    title: "Personalized Wellness",
    sub: "Traditional medicine + holistic therapies",
    Icon: Leaf,
    features: ["Custom Plans", "Family Medicine", "Holistic Care", "All Ages", "Whole-Body"],
  },
  {
    image: "/images/source/iv-infusion-therapy.jpg",
    alt: "Patient receiving an IV nutrition infusion",
    eyebrow: "IV Nutrition Therapy",
    title: "Hydrate · Replenish · Recover",
    sub: "Myers' Cocktail · Immune · Hangover",
    Icon: Droplet,
    features: ["Myers' Cocktail", "Immune Boost", "Fast Recovery", "Hydration", "Energy"],
  },
  {
    image: "/images/source/portrait-women-hormone.jpg",
    alt: "Woman feeling balanced after hormone replacement therapy",
    eyebrow: "Hormone Replacement",
    title: "Bioidentical BHRT & Pellets",
    sub: "Restore balance, energy, and mood",
    Icon: HeartPulse,
    features: ["Bioidentical", "Pellet Therapy", "Mood & Energy", "BHRT", "Hot Flash Relief"],
  },
  {
    image: "/images/source/medical-weight-loss-peptides.jpg",
    alt: "Patient on a medical weight-loss program",
    eyebrow: "Medical Weight Loss",
    title: "Peptide-Guided Programs",
    sub: "Sustainable, physician-supervised results",
    Icon: Flame,
    features: ["Peptide Therapy", "MD-Supervised", "Lasting Results", "Custom Macros", "GLP-1"],
  },
  {
    image: "/images/source/portrait-men-health.jpg",
    alt: "Man showing renewed vitality from testosterone therapy",
    eyebrow: "Men's Health",
    title: "Testosterone Optimization",
    sub: "Energy, focus, and lean muscle",
    Icon: Stethoscope,
    features: ["Testosterone", "Lean Muscle", "Sharper Focus", "Vitality", "Libido"],
  },
];

const MARQUEE_TAGS = [
  "HORMONE THERAPY",
  "IV NUTRITION",
  "TESTOSTERONE",
  "MENOPAUSE CARE",
  "MEDICAL WEIGHT LOSS",
  "PEPTIDE THERAPY",
  "ACUTE CARE",
  "PREVENTIVE MEDICINE",
  "BIOIDENTICAL PELLETS",
  "GYNECOLOGICAL EXAMS",
  "MEN'S HEALTH",
  "WOMEN'S HEALTH",
  "IMMUNE BOOSTER IV",
  "MYERS COCKTAIL",
  "WORKOUT RECOVERY",
];

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
};

/* -------------------------------------------------------------------------- */
/*                            Animated counter                                 */
/* -------------------------------------------------------------------------- */

function Counter({
  to,
  decimals = 0,
  duration = 1.6,
}: {
  to: number;
  decimals?: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / (duration * 1000));
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(to * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setValue(to);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Rotating word swap                               */
/* -------------------------------------------------------------------------- */

function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className="relative inline-block whitespace-nowrap align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "0.6em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.6em", opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="inline-block bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent"
          style={{ backgroundSize: "200% 100%" }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                  ECG / heartbeat motion graph (continuous)                  */
/* -------------------------------------------------------------------------- */

function ECGLine({
  width = 200,
  height = 40,
  color = "#6CBE45",
  speed = 2.4,
  strokeWidth = 2,
}: {
  width?: number;
  height?: number;
  color?: string;
  speed?: number;
  strokeWidth?: number;
}) {
  // One heartbeat cycle is 100 viewBox units wide. We render two cycles
  // back-to-back (viewBox 200 wide) and slide the SVG left by half its
  // pixel width so the trace loops seamlessly.
  return (
    <div
      className="relative overflow-hidden"
      style={{ width, height }}
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        className="absolute inset-y-0 left-0 h-full"
        style={{ width: width * 2 }}
        animate={{ x: [0, -width] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <linearGradient id="ecg-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={color} stopOpacity="0.05" />
            <stop offset="60%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0 20 H28 L32 20 L36 6 L40 34 L44 12 L48 24 L52 20 H100 L128 20 L132 20 L136 6 L140 34 L144 12 L148 24 L152 20 H200"
          fill="none"
          stroke="url(#ecg-fade)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                       Live equalizer / vitals bars                          */
/* -------------------------------------------------------------------------- */

function VitalsBars({
  bars = 4,
  color = "#6CBE45",
}: {
  bars?: number;
  color?: string;
}) {
  return (
    <div className="flex items-end gap-0.5" aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="block w-1 rounded-sm"
          style={{ backgroundColor: color }}
          animate={{ height: [4, 12, 6, 14, 8, 4] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.18,
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Hero                                       */
/* -------------------------------------------------------------------------- */

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Magnetic primary CTA
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { stiffness: 250, damping: 18, mass: 0.5 });
  const springY = useSpring(btnY, { stiffness: 250, damping: 18, mass: 0.5 });
  const onBtnMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    btnX.set(x * 0.25);
    btnY.set(y * 0.35);
  };
  const onBtnLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  // ── Rotating hero slide ──
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(
      () => setSlideIndex((v) => (v + 1) % HERO_SLIDES.length),
      4200,
    );
    return () => clearInterval(id);
  }, [isPaused]);
  const activeSlide = HERO_SLIDES[slideIndex];

  // ── Mouse-tracked 3D tilt for the visual card ──
  const tiltRX = useMotionValue(0);
  const tiltRY = useMotionValue(0);
  const rotateX = useSpring(tiltRX, { stiffness: 120, damping: 14, mass: 0.6 });
  const rotateY = useSpring(tiltRY, { stiffness: 120, damping: 14, mass: 0.6 });
  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltRY.set(px * 14);
    tiltRX.set(-py * 12);
  };
  const onCardLeave = () => {
    tiltRX.set(0);
    tiltRY.set(0);
    setIsPaused(false);
  };

  const marquee = useMemo(() => [...MARQUEE_TAGS, ...MARQUEE_TAGS], []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-hero-heading"
      className="relative isolate w-full overflow-hidden bg-[#FAF6EE]"
    >
      {/* ─── Background layers ─── */}
      {/* Base warm gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, #FFFDF6 0%, #FAF6EE 40%, #F4EFE2 80%, #EDE7D3 100%)",
        }}
      />

      {/* Neural network synapse canvas — drifting nodes, connecting lines, traveling pulses */}
      <NeuralBackground />

      {/* Floating gradient orbs (parallax mood lighting) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(108,190,69,0.55) 0%, rgba(108,190,69,0) 70%)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(157,210,112,0.55) 0%, rgba(157,210,112,0) 70%)",
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(196,168,98,0.45) 0%, rgba(196,168,98,0) 70%)",
        }}
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 30, 0], scale: [1, 1.08, 0.92, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
      />

      {/* Soft vignette to keep edges grounded */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 40%, transparent 30%, rgba(250,246,238,0.55) 75%, rgba(250,246,238,0.85) 100%)",
        }}
      />

      {/* Dot grid overlay (masked to fade) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.16]"
      >
        <defs>
          <pattern
            id="hero-dots"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#1a3a0a" />
          </pattern>
          <radialGradient id="dot-fade" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dot-mask">
            <rect width="100%" height="100%" fill="url(#dot-fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#hero-dots)"
          mask="url(#dot-mask)"
        />
      </svg>

      {/* Bottom fade-to-cream handoff */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-cream-soft, #faf6ec) 90%)",
        }}
      />

      {/* Floating botanical leaves */}
      <motion.svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute left-[5%] top-28 hidden h-16 w-16 text-[#6CBE45]/55 lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, 8, -4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M50 8 C28 28, 18 52, 50 92 C82 52, 72 28, 50 8 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M50 8 L50 92"
          stroke="#1a3a0a"
          strokeWidth="1.3"
          opacity="0.45"
        />
      </motion.svg>
      <motion.svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute bottom-32 left-[10%] hidden h-12 w-12 text-[#9DD270]/70 lg:block"
        animate={{ y: [0, 8, 0], rotate: [0, -10, 6, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <path
          d="M50 12 C32 30, 24 50, 50 88 C76 50, 68 30, 50 12 Z"
          fill="currentColor"
        />
      </motion.svg>
      <motion.svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute right-[40%] top-20 hidden h-10 w-10 text-[#8BAD5A]/50 md:block"
        animate={{ y: [0, -6, 0], rotate: [0, 12, -6, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.4,
        }}
      >
        <path
          d="M50 10 C30 28, 22 50, 50 90 C78 50, 70 28, 50 10 Z"
          fill="currentColor"
        />
      </motion.svg>

      {/* Extra leaves on the right side */}
      <motion.svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute right-[3%] top-44 hidden h-14 w-14 text-[#6CBE45]/45 lg:block"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <path
          d="M50 10 C30 28, 22 50, 50 90 C78 50, 70 28, 50 10 Z"
          fill="currentColor"
        />
      </motion.svg>
      <motion.svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute bottom-44 right-[7%] hidden h-9 w-9 text-[#8BAD5A]/55 lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, 14, -8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path
          d="M50 10 C30 28, 22 50, 50 90 C78 50, 70 28, 50 10 Z"
          fill="currentColor"
        />
      </motion.svg>

      {/* Drifting particle dots */}
      {[
        { left: "12%", top: "42%", size: 6, dur: 9, delay: 0 },
        { left: "22%", top: "68%", size: 4, dur: 11, delay: 1.5 },
        { left: "78%", top: "30%", size: 5, dur: 10, delay: 0.8 },
        { left: "88%", top: "60%", size: 7, dur: 12, delay: 2.2 },
        { left: "55%", top: "85%", size: 4, dur: 8, delay: 1.1 },
        { left: "45%", top: "18%", size: 5, dur: 13, delay: 0.3 },
      ].map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute hidden rounded-full bg-[#6CBE45] md:block"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 12px rgba(108,190,69,0.6)",
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, 12, -8, 0],
            opacity: [0.3, 0.85, 0.3],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* ─── Main content ─── */}
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* ────────── LEFT: copy ────────── */}
          <motion.div
            style={{ y: heroY }}
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 max-w-xl text-center lg:text-left"
          >
            {/* Live badge */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/15 bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.32em] text-[#1a3a0a] shadow-sm backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#6CBE45] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#2D5016]" />
                </span>
                Now Booking · Harker Heights, TX
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="home-hero-heading"
              variants={fadeUp}
              className="mt-6 font-heading font-semibold leading-[1.02] text-[#1a3a0a]"
              style={{ fontSize: "clamp(2.25rem, 4.2vw, 3.75rem)" }}
            >
              Experience
              <br />
              Personalized
              <br />
              <RotatingWord words={ROTATING_WORDS} />
            </motion.h1>

            {/* Accent underline */}
            <motion.div
              variants={fadeIn}
              className="mt-5 flex items-center gap-2 lg:justify-start"
              style={{ justifyContent: "center" }}
            >
              <motion.span
                aria-hidden
                className="relative block h-[3px] origin-left overflow-hidden rounded-full bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-y-0 left-0 block w-8 bg-white/70"
                  animate={{ x: ["-100%", "260%"] }}
                  transition={{
                    duration: 2.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.4,
                  }}
                />
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 14, -10, 0], y: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Leaf className="size-4 text-[#6CBE45]" />
              </motion.span>
            </motion.div>

            {/* Live ECG / heartbeat motion graph */}
            <motion.div
              variants={fadeUp}
              className="mt-4 flex items-center gap-3 lg:justify-start"
              style={{ justifyContent: "center" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/12 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#6CBE45] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#2D5016]" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1a3a0a]">
                  Live · Vitals
                </span>
                <ECGLine width={120} height={20} strokeWidth={1.6} />
                <VitalsBars bars={3} />
              </span>
            </motion.div>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
            >
              Individualized health plans that combine traditional family
              medicine with proven natural and holistic therapies — for
              patients of all ages, accepting most insurance plans.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={onBtnMove}
                onMouseLeave={onBtnLeave}
                style={{ x: springX, y: springY }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#1a3a0a]/30 ring-1 ring-[#6CBE45]/30 transition-shadow hover:shadow-2xl hover:shadow-[#6CBE45]/25"
              >
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "0%" }}
                  animate={{ x: ["0%", "400%"] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatDelay: 1.6,
                    ease: "easeInOut",
                  }}
                />
                <Calendar className="relative size-4" />
                <span className="relative">Book an Appointment</span>
                <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <a
                href="tel:+12542132423"
                className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#1a3a0a] transition-colors hover:border-[#6CBE45] hover:bg-[#f0f5eb]"
              >
                <Phone className="size-4 text-[#6CBE45]" />
                Call (254) 213-2423
              </a>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-3 py-3.5 text-sm font-semibold text-[#1a3a0a] underline-offset-4 transition-colors hover:text-[#2D5016] hover:underline"
              >
                <Stethoscope className="size-4" />
                View Services
                <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>

            {/* Trust micro-row */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-stone-500 lg:justify-start"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-[#2D5016]" />
                Board-certified providers
              </span>
              <span className="hidden text-stone-300 sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-[#C4A862]" />
                0% APR financing via Cherry
              </span>
              <span className="hidden text-stone-300 sm:inline">·</span>
              <span>Same-week visits available</span>
            </motion.div>
          </motion.div>

          {/* ────────── RIGHT: orbital wellness dashboard ────────── */}
          <motion.div
            style={{ y: visualY, perspective: 1400 }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
            className="relative mx-auto aspect-square w-full max-w-[520px] lg:mx-0 lg:max-w-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Pulsing aura */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(108,190,69,0.35), rgba(108,190,69,0) 70%)",
              }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Outer dashed orbit track (slow rotate) */}
            <motion.svg
              aria-hidden
              viewBox="0 0 400 400"
              className="absolute inset-0 size-full text-[#2D5016]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="200"
                cy="200"
                r="195"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="2 8"
              />
            </motion.svg>

            {/* Mid dashed orbit track (counter-rotate, brighter) */}
            <motion.svg
              aria-hidden
              viewBox="0 0 400 400"
              className="absolute inset-[10%] size-[80%] text-[#6CBE45]/55"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="200"
                cy="200"
                r="190"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 10"
              />
              {/* travelling pulse on the track */}
              <circle cx="200" cy="10" r="4" fill="#6CBE45" />
            </motion.svg>

            {/* Innermost faint orbit track (slow) */}
            <motion.svg
              aria-hidden
              viewBox="0 0 400 400"
              className="absolute inset-[22%] size-[56%] text-[#9DD270]/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="1 5"
              />
            </motion.svg>

            {/* Orbiting service tiles — ring rotates so the active tile sits at top */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -slideIndex * (360 / HERO_SLIDES.length) }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              {HERO_SLIDES.map((s, i) => {
                const angle =
                  (i / HERO_SLIDES.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 44; // % of half width from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = s.Icon;
                const active = i === slideIndex;
                return (
                  <motion.button
                    key={s.eyebrow}
                    type="button"
                    onClick={() => setSlideIndex(i)}
                    aria-label={`Show ${s.eyebrow}`}
                    className="group/orb absolute"
                    style={{
                      left: `calc(50% + ${x}%)`,
                      top: `calc(50% + ${y}%)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      // Counter-rotate so the tile stays upright as the ring rotates
                      animate={{
                        rotate: slideIndex * (360 / HERO_SLIDES.length),
                      }}
                      transition={{ duration: 1.1, ease: EASE }}
                      className="relative inline-block"
                    >
                      <span
                        className={`relative flex size-16 items-center justify-center rounded-2xl border bg-white/95 shadow-lg backdrop-blur-sm transition-all sm:size-[68px] ${
                          active
                            ? "border-[#6CBE45] shadow-[0_8px_30px_rgba(108,190,69,0.45)] ring-2 ring-[#6CBE45]/40"
                            : "border-white/80 ring-1 ring-[#1a3a0a]/10 hover:border-[#6CBE45]/60"
                        }`}
                      >
                        {/* gentle bob */}
                        <motion.span
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                          }}
                          className={`flex size-10 items-center justify-center rounded-xl text-white shadow-md ${
                            active
                              ? "bg-gradient-to-br from-[#6CBE45] to-[#2D5016]"
                              : "bg-gradient-to-br from-[#2D5016] to-[#1a3a0a]"
                          }`}
                        >
                          <Icon className="size-5" />
                        </motion.span>

                        {/* active glow ring */}
                        {active ? (
                          <motion.span
                            aria-hidden
                            className="pointer-events-none absolute -inset-1 rounded-2xl"
                            style={{
                              background:
                                "radial-gradient(closest-side, rgba(108,190,69,0.45), transparent 70%)",
                            }}
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        ) : null}
                      </span>

                      {/* Feature content chip — one per tile, pointing outward */}
                      <AnimatePresence>
                        {(() => {
                          const N = HERO_SLIDES.length;
                          // Relative position around the ring, counted clockwise
                          // from the active (top) tile. 0 = active, 1..N-1 = others.
                          const relPos = (i - slideIndex + N) % N;
                          const feature = activeSlide.features[relPos];
                          if (!feature) return null;

                          // World-frame angle of this tile after ring rotation.
                          // Active tile sits at -90deg (top); each step adds 360/N.
                          const worldAngleDeg = (relPos * 360) / N - 90;
                          const rad = (worldAngleDeg * Math.PI) / 180;
                          const offset = 56; // px outward from tile center
                          const dx = Math.cos(rad) * offset;
                          const dy = Math.sin(rad) * offset;
                          const dirX = Math.cos(rad);
                          const dirY = Math.sin(rad);

                          return (
                            <motion.span
                              key={`chip-${slideIndex}-${i}`}
                              initial={{
                                opacity: 0,
                                x: 0,
                                y: 0,
                                scale: 0.5,
                              }}
                              animate={{
                                opacity: 1,
                                x: dx,
                                y: dy,
                                scale: 1,
                              }}
                              exit={{
                                opacity: 0,
                                x: dx * 0.4,
                                y: dy * 0.4,
                                scale: 0.6,
                              }}
                              transition={{
                                duration: 0.55,
                                ease: EASE,
                                delay: 0.18 + relPos * 0.07,
                              }}
                              className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                            >
                              <motion.span
                                animate={{
                                  x: [0, dirX * 3, 0],
                                  y: [0, dirY * 3, 0],
                                }}
                                transition={{
                                  duration: 3.2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: relPos * 0.25,
                                }}
                                className="relative inline-flex items-center"
                              >
                                {/* Pulsing glow halo behind the chip */}
                                <motion.span
                                  aria-hidden
                                  className="absolute inset-0 -z-10 rounded-full blur-md"
                                  style={{
                                    background:
                                      "radial-gradient(closest-side, rgba(108,190,69,0.85), rgba(108,190,69,0.25) 60%, transparent 75%)",
                                  }}
                                  initial={{ scale: 0.6, opacity: 0 }}
                                  animate={{
                                    scale: [1, 1.45, 1],
                                    opacity: [0.55, 0.95, 0.55],
                                  }}
                                  transition={{
                                    duration: 2.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3 + relPos * 0.08,
                                  }}
                                />
                                {/* Sparkle accent */}
                                <motion.span
                                  aria-hidden
                                  className="absolute -right-1 -top-1 size-1.5 rounded-full bg-white"
                                  style={{
                                    boxShadow:
                                      "0 0 8px rgba(255,255,255,0.95), 0 0 14px rgba(108,190,69,0.85)",
                                  }}
                                  animate={{
                                    scale: [0.6, 1.2, 0.6],
                                    opacity: [0.4, 1, 0.4],
                                  }}
                                  transition={{
                                    duration: 1.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.4 + relPos * 0.1,
                                  }}
                                />
                                <span className="relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#6CBE45]/50 bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#1a3a0a] shadow-md shadow-[#1a3a0a]/15 backdrop-blur">
                                  <motion.span
                                    className="size-1 rounded-full bg-[#6CBE45]"
                                    animate={{
                                      boxShadow: [
                                        "0 0 0 0 rgba(108,190,69,0)",
                                        "0 0 0 4px rgba(108,190,69,0)",
                                      ],
                                    }}
                                    transition={{
                                      duration: 1.4,
                                      repeat: Infinity,
                                      ease: "easeOut",
                                      delay: relPos * 0.2,
                                    }}
                                  />
                                  {feature}
                                </span>
                              </motion.span>
                            </motion.span>
                          );
                        })()}
                      </AnimatePresence>
                    </motion.span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Connector lines from each orbital tile to the core (animated dashed) */}
            <svg
              aria-hidden
              viewBox="0 0 400 400"
              className="pointer-events-none absolute inset-0 size-full"
            >
              {HERO_SLIDES.map((_, i) => {
                const angle =
                  (i / HERO_SLIDES.length) * 2 * Math.PI - Math.PI / 2;
                const r1 = 90; // edge of core
                const r2 = 176; // inner edge of orbital tile
                const x1 = 200 + Math.cos(angle) * r1;
                const y1 = 200 + Math.sin(angle) * r1;
                const x2 = 200 + Math.cos(angle) * r2;
                const y2 = 200 + Math.sin(angle) * r2;
                return (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i === slideIndex ? "#6CBE45" : "#2D5016"}
                    strokeOpacity={i === slideIndex ? 0.85 : 0.18}
                    strokeWidth={i === slideIndex ? 2 : 1}
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </svg>

            {/* Center disk — active service photo + HUD overlay */}
            <motion.div
              role="group"
              aria-label="Featured services carousel"
              onMouseMove={onCardMove}
              onMouseLeave={onCardLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="absolute left-1/2 top-1/2 size-[46%] -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-2xl shadow-[#1a3a0a]/40 ring-2 ring-white/60"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.image}
                  initial={{ scale: 0.85, opacity: 0, rotate: -8 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.12, opacity: 0, rotate: 6 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="absolute inset-0"
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1.18 }}
                    transition={{ duration: 5, ease: "easeOut" }}
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      priority={slideIndex === 0}
                      quality={92}
                      sizes="(min-width: 1024px) 360px, 60vw"
                      className="object-cover"
                    />
                  </motion.div>
                  {/* radial vignette */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(closest-side, transparent 45%, rgba(26,58,10,0.78) 100%)",
                    }}
                  />
                  {/* shimmer scan */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    initial={{ x: "-110%" }}
                    animate={{ x: "110%" }}
                    transition={{
                      duration: 2.6,
                      ease: "easeInOut",
                      delay: 0.6,
                      repeat: Infinity,
                      repeatDelay: 2.4,
                    }}
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%)",
                      mixBlendMode: "overlay",
                    }}
                  />
                  {/* Bottom info */}
                  <div className="absolute inset-x-3 bottom-5 text-center">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/85">
                      {activeSlide.eyebrow}
                    </div>
                    <div className="mt-1 text-sm font-semibold leading-tight text-white sm:text-base">
                      {activeSlide.title}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* HUD: ECG + vitals at the top of the disk */}
              <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 rounded-full bg-black/45 px-2 py-1 backdrop-blur-md ring-1 ring-white/10">
                  <span className="size-1.5 rounded-full bg-[#6CBE45] shadow-[0_0_8px_rgba(108,190,69,0.9)]" />
                  <ECGLine width={64} height={14} strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-black/45 px-2 py-1 backdrop-blur-md ring-1 ring-white/10">
                  <VitalsBars bars={4} />
                </div>
              </div>

              {/* HUD bottom corner: rotating service index */}
              <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/45 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.22em] text-white/80 backdrop-blur-md ring-1 ring-white/10">
                {String(slideIndex + 1).padStart(2, "0")}/
                {String(HERO_SLIDES.length).padStart(2, "0")}
              </div>
            </motion.div>

            {/* Floating sparkle accent */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute right-4 top-2"
              animate={{ scale: [1, 1.25, 1], rotate: [0, 24, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="size-7 text-[#C4A862]" />
            </motion.div>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute bottom-4 left-2"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -18, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <Sparkles className="size-5 text-[#6CBE45]" />
            </motion.div>
          </motion.div>
        </div>

        {/* ─── Stat strip ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="relative z-10 mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-[#1a3a0a]/12 py-8 sm:grid-cols-4"
        >
          {STATS.map(({ value, suffix, label, decimals }) => (
            <motion.div key={label} variants={fadeUp} className="text-center">
              <div className="font-heading text-3xl font-semibold text-[#1a3a0a] sm:text-4xl lg:text-5xl">
                <Counter to={value} decimals={decimals} />
                <span className="ml-1 bg-gradient-to-r from-[#2D5016] to-[#6CBE45] bg-clip-text text-transparent">
                  {suffix}
                </span>
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── Marquee ─── */}
      <div className="relative overflow-hidden border-y border-[#1a3a0a]/10 bg-gradient-to-r from-[#0f2706] via-[#1a3a0a] to-[#0f2706] py-4">
        <motion.div
          className="flex shrink-0 items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-[0.28em] text-[#FAF6EE]/85"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, ease: "linear", repeat: Infinity }}
        >
          {marquee.map((tag, i) => (
            <span key={`${tag}-${i}`} className="flex items-center gap-10">
              <span className="text-[#6CBE45]">✦</span>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
