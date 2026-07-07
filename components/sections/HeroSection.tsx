"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";

const FOREST = "#1a3a0a";
const FOREST_DARK = "#0e2406";
const CREAM = "#FAF6EE";
const SAGE = "#8BAD5A";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function StatCounter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsub = rounded.on("change", setDisplay);
    return unsub;
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, count, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

function BotanicalPattern() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="leaves" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
          <path
            d="M30 90c0-30 25-55 55-55 25 0 45 18 50 40-25 5-50 25-55 50-22-5-50-20-50-35z"
            stroke={CREAM}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M40 90c10-10 30-22 50-25"
            stroke={CREAM}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M120 110c12 18 35 28 55 30"
            stroke={CREAM}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="600" height="800" fill="url(#leaves)" />
    </svg>
  );
}

function FloatingOrb({
  className,
  delay = 0,
  duration = 8,
}: {
  className: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={className}
      style={{
        background:
          "radial-gradient(closest-side, rgba(139,173,90,0.45), rgba(139,173,90,0))",
      }}
      initial={{ scale: 0.9, opacity: 0.4 }}
      animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.35, 0.6, 0.35] }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] w-full overflow-hidden"
      style={{ backgroundColor: FOREST }}
    >
      {/* LEFT, forest green text panel */}
      <div
        className="relative flex w-full flex-col justify-center px-5 py-14 sm:px-10 sm:py-20 lg:w-1/2 lg:px-16 lg:py-24 xl:px-24"
        style={{
          background: `linear-gradient(135deg, ${FOREST_DARK} 0%, ${FOREST} 65%, #234d10 100%)`,
        }}
      >
        <BotanicalPattern />

        {/* Floating accent orbs */}
        <FloatingOrb
          className="absolute -top-24 -left-24 size-80 rounded-full blur-3xl"
          duration={9}
        />
        <FloatingOrb
          className="absolute bottom-10 left-1/3 size-72 rounded-full blur-3xl"
          delay={1.5}
          duration={11}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto w-full max-w-2xl text-[color:var(--cream)]"
          style={{ ["--cream" as string]: CREAM }}
        >
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: SAGE }}
          >
            Welcome to Central Texas Holistic Care
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-6 font-heading font-light leading-[1.05] tracking-tight text-[clamp(2.75rem,6.5vw,5rem)]"
            style={{ color: CREAM }}
          >
            Experience{" "}
            <span className="italic" style={{ color: SAGE }}>
              Personalized
            </span>{" "}
            Wellness and Preventive Care
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-stone-200/85 sm:text-lg"
          >
            At Central Texas Holistic Care (CTHC), we specialize in providing
            individualized health plans tailored to your unique needs. Our experienced
            providers combine the best of traditional family medicine with proven natural
            and holistic therapies to support your overall well-being. We welcome patients
            of all ages and accept most insurance plans.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <ShimmerCta
              href={BOOKING_URL}
              external
              label="Book An Appointment"
              icon={<ArrowRight className="size-4" />}
            />
            <Link
              href="/about-us/"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--cream)]/35 px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:border-[color:var(--cream)] hover:bg-[color:var(--cream)]/10"
              style={{ ["--cream" as string]: CREAM }}
            >
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-5 border-t border-white/10 pt-6"
          >
            <div className="flex -space-x-2">
              {["#8BAD5A", "#c7d3a9", "#5b7d33", "#a8bd7e"].map((c) => (
                <span
                  key={c}
                  aria-hidden
                  className="inline-block size-8 rounded-full ring-2 ring-[#1a3a0a]"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div>
              <p className="font-heading text-2xl text-[color:var(--cream)]" style={{ ["--cream" as string]: CREAM }}>
                <StatCounter target={1500} />
              </p>
              <p className="text-xs uppercase tracking-widest text-stone-300/70">
                Satisfied Customers
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT, cream image panel */}
      <div
        className="relative hidden overflow-hidden lg:block lg:w-1/2"
        style={{ backgroundColor: CREAM }}
      >
        <ImagePanel />
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}

function ShimmerCta({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#8BAD5A] px-7 py-3.5 text-sm font-semibold text-[#0e2406] shadow-lg shadow-emerald-900/30 transition-transform hover:scale-[1.03]";

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {label}
        {icon}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

function ImagePanel() {
  return (
    <div className="relative h-full w-full">
      {/* Soft cream-to-sage wash as image placeholder */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 20%, #ffffff 0%, #f0ead7 40%, #d8e0bf 100%)",
        }}
      />

      {/* Decorative botanical SVG */}
      <svg
        aria-hidden
        viewBox="0 0 600 800"
        className="absolute inset-0 h-full w-full opacity-25"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke={FOREST} strokeWidth="1.2" fill="none" strokeLinecap="round">
          <path d="M300 700 C 240 520, 240 360, 300 180" />
          <path d="M300 620 C 220 600, 170 540, 160 470" />
          <path d="M300 540 C 380 520, 430 460, 440 390" />
          <path d="M300 460 C 220 440, 170 380, 160 310" />
          <path d="M300 380 C 380 360, 430 300, 440 230" />
          <path d="M300 300 C 240 280, 200 230, 195 170" />
          {/* leaves */}
          {[470, 390, 310, 230, 150].map((y, i) => (
            <ellipse
              key={i}
              cx={i % 2 === 0 ? 160 : 440}
              cy={y}
              rx="42"
              ry="14"
              transform={`rotate(${i % 2 === 0 ? -25 : 25} ${i % 2 === 0 ? 160 : 440} ${y})`}
            />
          ))}
        </g>
      </svg>

      {/* Floating quote / trust card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-10 right-10 max-w-md rounded-2xl border border-white/60 bg-white/75 p-6 shadow-xl backdrop-blur-md"
      >
        <p className="font-heading text-xl leading-snug text-[#1a3a0a]">
          “Whole-person medicine that meets you where you are, rooted in evidence,
          guided by experience.”
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#5b7d33]">
          Harker Heights, Texas
        </p>
      </motion.div>

      {/* Decorative orbs on cream side */}
      <FloatingOrb
        className="absolute top-12 right-12 size-40 rounded-full blur-3xl"
        duration={9}
      />
      <FloatingOrb
        className="absolute top-1/2 right-1/3 size-32 rounded-full blur-3xl"
        delay={2}
        duration={11}
      />
    </div>
  );
}

function ScrollIndicator() {
  // Hide once user has scrolled
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setHidden(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[color:var(--cream)]/70"
            style={{ ["--cream" as string]: CREAM }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="size-5" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
