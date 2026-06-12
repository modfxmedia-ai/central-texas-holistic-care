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

const COLLAGE_CHIPS = [
  {
    image: "/images/source/iv-nutrition-vitamins.webp",
    title: "IV Nutrition",
    sub: "Myers' Cocktail",
    side: "tl" as const,
  },
  {
    image: "/images/source/portrait-women-hormone.jpg",
    title: "Hormone Therapy",
    sub: "BHRT & Pellets",
    side: "br" as const,
  },
  {
    image: "/images/source/portrait-men-health.jpg",
    title: "Men's Health",
    sub: "Testosterone",
    side: "bl" as const,
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
/*                          Collage chip card                                  */
/* -------------------------------------------------------------------------- */

function CollageChip({
  image,
  title,
  sub,
  position,
  delay,
}: {
  image: string;
  title: string;
  sub: string;
  position: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={`absolute z-20 ${position}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay + 0.4,
        }}
        className="group flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 p-2.5 pr-4 shadow-xl shadow-[#1a3a0a]/15 backdrop-blur-md transition-transform hover:-translate-y-0.5"
      >
        <div className="relative size-11 shrink-0 overflow-hidden rounded-xl bg-[#f0f5eb] ring-1 ring-[#1a3a0a]/8">
          <Image
            src={image}
            alt=""
            fill
            sizes="44px"
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="min-w-0">
          <div className="truncate text-[13px] font-semibold leading-tight text-[#1a3a0a]">
            {title}
          </div>
          <div className="truncate text-[11px] leading-tight text-stone-500">
            {sub}
          </div>
        </div>
      </motion.div>
    </motion.div>
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
                className="block h-[3px] origin-left rounded-full bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
              />
              <Leaf className="size-4 text-[#6CBE45]" />
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

          {/* ────────── RIGHT: visual composition ────────── */}
          <motion.div
            style={{ y: visualY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[460px] lg:mx-0 lg:max-w-none"
          >
            {/* Background card stack — deep forest (tilted behind) */}
            <motion.div
              aria-hidden
              animate={{ rotate: [-4, -3, -4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] opacity-90"
              style={{ transformOrigin: "center" }}
            />
            {/* Mid card — lime accent (tilted other way) */}
            <motion.div
              aria-hidden
              animate={{ rotate: [3, 2, 3] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#6CBE45] to-[#8BAD5A]"
              style={{ transformOrigin: "center" }}
            />

            {/* Main image — fills the box, sits on top */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#1a3a0a]/25 ring-1 ring-white/40">
              <Image
                src="/images/source/hero-medical-assistant.webp"
                alt="Medical assistant preparing daily vitamins and supplements for a patient"
                fill
                priority
                quality={92}
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
              {/* Color grade overlay */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(45,80,22,0) 35%, rgba(26,58,10,0.65) 100%)",
                }}
              />
              {/* Caption pill on image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white/15 px-3 py-2 backdrop-blur-md">
                  <span className="inline-flex size-7 items-center justify-center rounded-xl bg-[#6CBE45] text-[#1a3a0a]">
                    <Leaf className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                      Whole-Person Care
                    </div>
                    <div className="truncate text-[11px] text-white/70">
                      Traditional medicine + holistic therapies
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ring around composition */}
            <motion.svg
              aria-hidden
              viewBox="0 0 100 100"
              className="pointer-events-none absolute -right-6 -top-6 size-20 text-[#6CBE45]"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 4"
              />
              <circle cx="50" cy="4" r="3.5" fill="currentColor" />
            </motion.svg>

            {/* Floating collage chips */}
            <CollageChip
              {...COLLAGE_CHIPS[0]}
              position="-left-4 top-8 sm:-left-10"
              delay={0.7}
            />
            <CollageChip
              {...COLLAGE_CHIPS[1]}
              position="-right-3 top-1/2 sm:-right-8"
              delay={0.95}
            />
            <CollageChip
              {...COLLAGE_CHIPS[2]}
              position="-left-2 -bottom-2 sm:-left-6 sm:-bottom-4"
              delay={1.2}
            />

            {/* Sparkle accent */}
            <motion.div
              aria-hidden
              className="absolute -bottom-6 right-10"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="size-7 text-[#C4A862]" />
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
