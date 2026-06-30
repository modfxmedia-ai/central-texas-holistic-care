"use client";

import { motion, type Variants } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Brain,
  Check,
  Droplet,
  Flame,
  Heart,
  Moon,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const SIGNS = [
  "Irregular menstrual cycles or severe PMS",
  "Brain fog or reduced cognitive function",
  "Thinning hair or hair loss",
  "Low libido or sexual dysfunction",
  "Vaginal dryness or discomfort",
  "Infertility challenges",
  "Mood swings or irritability",
  "Hot flashes or night sweats",
  "Chronic fatigue or low energy",
  "Joint pain or stiffness",
  "Unexplained weight gain",
  "Adult acne or skin changes",
  "Difficulty falling or staying asleep",
];

// Floating hormone-icon chips that orbit the image
const ORBIT_ICONS = [
  { Icon: Brain, label: "Cognitive", color: "#6CBE45", angle: -18 },
  { Icon: Heart, label: "Cardio", color: "#C4A862", angle: 38 },
  { Icon: Flame, label: "Energy", color: "#F08A4B", angle: 102 },
  { Icon: Moon, label: "Sleep", color: "#8BAD5A", angle: 168 },
  { Icon: Zap, label: "Mood", color: "#9DD270", angle: 232 },
  { Icon: Droplet, label: "Hydration", color: "#5DA8C4", angle: 298 },
];

const QUICK_STATS = [
  { value: "13", label: "Symptoms\nWe Address" },
  { value: "1", label: "Root-Cause\nApproach" },
  { value: "100%", label: "Personalized\nTreatment" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*                              Motion variants                                */
/* -------------------------------------------------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

/* -------------------------------------------------------------------------- */
/*                       Orbiting icon chip (positioned)                       */
/* -------------------------------------------------------------------------- */

function OrbitChip({
  Icon,
  label,
  color,
  angle,
  radius = 52,
  delay = 0,
}: {
  Icon: typeof Brain;
  label: string;
  color: string;
  angle: number;
  radius?: number;
  delay?: number;
}) {
  // Convert polar to cartesian percentage offset from center
  const rad = (angle * Math.PI) / 180;
  const x = 50 + radius * Math.cos(rad);
  const y = 50 + radius * Math.sin(rad);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.4 + delay }}
      className="pointer-events-none absolute z-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="flex items-center gap-2 rounded-full border border-white/60 bg-white/95 px-3 py-1.5 shadow-lg shadow-[#1a3a0a]/15 backdrop-blur"
      >
        <span
          className="inline-flex size-6 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: color }}
        >
          <Icon className="size-3.5" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a3a0a]">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Section component                              */
/* -------------------------------------------------------------------------- */

export default function HomeHormoneSigns() {
  return (
    <section className="relative w-full overflow-hidden bg-[color:var(--color-soft-green)] py-24 sm:py-28 lg:py-32">
      {/* Aurora glows */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1], x: [0, -16, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute -bottom-32 right-10 size-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.28), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.1, 1], x: [0, 12, 0] }}
        transition={{
          duration: 16,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.5,
        }}
        className="pointer-events-none absolute -top-32 -left-20 size-[400px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(45,80,22,0.22), transparent 70%)",
        }}
      />

      {/* Faint dot pattern across the whole section */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.08]"
      >
        <defs>
          <pattern
            id="signs-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#2D5016" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#signs-dots)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* ─── Left: orbital image + intro (sticky) ─── */}
          <div className="lg:sticky lg:top-28">
            {/* Orbital composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative mx-auto mb-10 aspect-square w-full max-w-[480px]"
            >
              {/* Outer rotating dashed ring */}
              <motion.svg
                aria-hidden
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full text-[#6CBE45]/45"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, ease: "linear", repeat: Infinity }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.4"
                  strokeDasharray="0.8 1.6"
                />
              </motion.svg>

              {/* Mid rotating ring (counter-rotation) */}
              <motion.svg
                aria-hidden
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full text-[#2D5016]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 80, ease: "linear", repeat: Infinity }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  strokeDasharray="2 3"
                />
              </motion.svg>

              {/* Pulsing inner ring */}
              <motion.svg
                aria-hidden
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full text-[#6CBE45]/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                {/* traveling pulse dots on the inner ring */}
                {[0, 90, 180, 270].map((a) => {
                  const r = (a * Math.PI) / 180;
                  const cx = 50 + 36 * Math.cos(r);
                  const cy = 50 + 36 * Math.sin(r);
                  return (
                    <circle
                      key={a}
                      cx={cx}
                      cy={cy}
                      r="1.4"
                      fill="#6CBE45"
                    />
                  );
                })}
              </motion.svg>

              {/* Solid lime backdrop card (slightly inset) */}
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[14%] rounded-full bg-gradient-to-br from-[#6CBE45]/30 via-[#9DD270]/20 to-[#8BAD5A]/30 blur-md"
              />

              {/* Main image, circular crop */}
              <div className="absolute inset-[16%] overflow-hidden rounded-full shadow-2xl shadow-[#1a3a0a]/30 ring-4 ring-white/80">
                <Image
                  src="/images/source/couple-hormone-imbalance.webp"
                  alt="Hormonal imbalance can affect every part of daily life and relationships"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(45,80,22,0) 50%, rgba(26,58,10,0.4) 100%)",
                  }}
                />
              </div>

              {/* Orbiting hormone chips */}
              {ORBIT_ICONS.map((chip, i) => (
                <OrbitChip
                  key={chip.label}
                  Icon={chip.Icon}
                  label={chip.label}
                  color={chip.color}
                  angle={chip.angle}
                  radius={49}
                  delay={i * 0.08}
                />
              ))}

              {/* Floating sparkle accents */}
              <Sparkles
                aria-hidden
                className="absolute right-[8%] top-[18%] size-5 text-[#C4A862]"
              />
              <motion.div
                aria-hidden
                animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[12%] left-[6%]"
              >
                <Activity className="size-5 text-[#6CBE45]" />
              </motion.div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45]" />
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
                Our Services
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Hormone Imbalance Can Affect Anyone{" "}
              <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
                At Any Stage of Life.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg"
            >
              Hormonal fluctuations are a natural part of life, from the teenage
              years to adulthood and beyond. However, when hormone levels
              become imbalanced, they can lead to a wide range of physical and
              emotional symptoms that impact daily well-being and quality of
              life.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg"
            >
              At Central Texas Holistic Care, we identify and address the root
              causes of hormonal imbalances through personalized treatment
              plans that restore your body&rsquo;s natural balance.
            </motion.p>

            {/* Quick-stats strip */}
            <motion.dl
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-[#1a3a0a]/10 bg-white/70 p-4 backdrop-blur"
            >
              {QUICK_STATS.map((s) => (
                <motion.div
                  key={s.value}
                  variants={fadeUp}
                  className="text-center"
                >
                  <dt className="font-heading text-2xl font-semibold leading-none text-[#1a3a0a] sm:text-3xl">
                    <span className="bg-gradient-to-br from-[#2D5016] to-[#6CBE45] bg-clip-text text-transparent">
                      {s.value}
                    </span>
                  </dt>
                  <dd className="mt-1 whitespace-pre-line text-[10px] font-medium uppercase tracking-[0.16em] text-stone-600">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>

            <Link
              href="/hormone-therapy/"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/25 transition-shadow hover:shadow-2xl hover:shadow-[#6CBE45]/20"
            >
              Explore Hormone Therapy
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* ─── Right: signs grid ─── */}
          <div className="relative">
            {/* Animated SVG wave background behind grid */}
            <svg
              aria-hidden
              viewBox="0 0 400 600"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 size-full opacity-[0.18]"
            >
              <defs>
                <linearGradient id="wave-grad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6CBE45" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2D5016" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,80 Q100,40 200,80 T400,80"
                stroke="url(#wave-grad)"
                strokeWidth="1.5"
                fill="none"
                animate={{
                  d: [
                    "M0,80 Q100,40 200,80 T400,80",
                    "M0,80 Q100,120 200,80 T400,80",
                    "M0,80 Q100,40 200,80 T400,80",
                  ],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M0,260 Q100,220 200,260 T400,260"
                stroke="url(#wave-grad)"
                strokeWidth="1.5"
                fill="none"
                animate={{
                  d: [
                    "M0,260 Q100,300 200,260 T400,260",
                    "M0,260 Q100,220 200,260 T400,260",
                    "M0,260 Q100,300 200,260 T400,260",
                  ],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M0,440 Q100,400 200,440 T400,440"
                stroke="url(#wave-grad)"
                strokeWidth="1.5"
                fill="none"
                animate={{
                  d: [
                    "M0,440 Q100,400 200,440 T400,440",
                    "M0,440 Q100,480 200,440 T400,440",
                    "M0,440 Q100,400 200,440 T400,440",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* Header row with eyebrow + 13/13 progress */}
            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="block h-[2px] w-8 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45]" />
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#8BAD5A]">
                  Common Signs of Hormonal Imbalance
                </p>
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#6CBE45]/40 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a3a0a] shadow-sm"
              >
                <span className="size-1.5 rounded-full bg-[#6CBE45]" />
                {SIGNS.length} Signs · We Treat All
              </motion.span>
            </div>

            <motion.ol
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              className="relative mt-7 grid gap-3 sm:grid-cols-2"
            >
              {SIGNS.map((sign, i) => (
                <motion.li
                  key={sign}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                  className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-5 transition-all hover:border-[#6CBE45]/50 hover:shadow-xl hover:shadow-[#2D5016]/10"
                >
                  {/* hover gradient sweep */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -left-12 -top-12 size-32 rounded-full bg-gradient-to-br from-[#6CBE45]/0 to-[#6CBE45]/0 blur-2xl transition-all group-hover:from-[#6CBE45]/20"
                  />
                  <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f0f5eb] to-[#e6f0db] font-heading text-sm font-medium text-[#2D5016] ring-1 ring-[#6CBE45]/20 tabular-nums transition-all group-hover:from-[#6CBE45] group-hover:to-[#2D5016] group-hover:text-white">
                    <span className="transition-opacity group-hover:opacity-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Check
                      aria-hidden
                      className="absolute size-4 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </span>
                  <p className="relative pt-1.5 text-sm leading-relaxed text-stone-700">
                    {sign}
                  </p>
                </motion.li>
              ))}
            </motion.ol>

            {/* Footer callout under grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="relative mt-6 overflow-hidden rounded-3xl border border-[#1a3a0a]/15 p-6 sm:p-7"
              style={{
                background:
                  "linear-gradient(135deg, #0f2706 0%, #1a3a0a 50%, #2D5016 100%)",
              }}
            >
              {/* aurora glow inside */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(108,190,69,0.45), transparent 70%)",
                }}
              />
              <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#6CBE45]/20 ring-1 ring-[#6CBE45]/40">
                    <Sparkles className="size-5 text-[#9DD270]" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-semibold text-[#FAF6EE] sm:text-xl">
                      Recognize any of these?
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#FAF6EE]/80">
                      A consultation can help pinpoint which hormones are out
                      of balance, and exactly what to do about it.
                    </p>
                  </div>
                </div>
                <Link
                  href="/hormone-therapy/"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FAF6EE] px-6 py-3 text-sm font-semibold text-[#1a3a0a] shadow-lg shadow-[#0f2706]/30 ring-1 ring-[#6CBE45]/30 transition-shadow hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
