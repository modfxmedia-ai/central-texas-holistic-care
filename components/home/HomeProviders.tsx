"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const BOOKING_BIMISA =
  "https://www.tebra.com/care/provider/bimisa-augustin-dnp-msn-aprnfnp-c-1043765431?lid=2324997788/";
const BOOKING_LARISSA =
  "https://www.tebra.com/care/provider/larissa-garth-pa-c-1487096947";

type Provider = {
  name: string;
  firstName: string;
  credentials: string;
  role: string;
  image: string;
  blurb: string;
  chips: readonly string[];
  badge: string;
  meta: string;
  bookingUrl: string;
};

const PROVIDERS: readonly Provider[] = [
  {
    name: "Dr. Bimisa Augustin",
    firstName: "Bimisa",
    credentials: "DNP, FNP-C, PMHNP-BC",
    role: "Doctor of Nursing Practice · Family & Psychiatric NP",
    image: "/images/providers/dr-bimisa-augustin.jpg",
    blurb:
      "26 years of medical experience and a US Army veteran with 6 combat deployments. Passionate about integrative, hormone-based therapies that help patients thrive, not just survive.",
    chips: ["26 yrs experience", "US Army Veteran", "Hormone specialist"],
    badge: "Founder & Provider",
    meta: "Killeen, TX",
    bookingUrl: BOOKING_BIMISA,
  },
  {
    name: "Dr. Larissa Garth",
    firstName: "Larissa",
    credentials: "DMSC, MPH, MPAS, PA-C",
    role: "Doctor of Medical Science · Certified Physician Assistant",
    image: "/images/providers/dr-larissa-garth.jpg",
    blurb:
      "10+ years of clinical experience blending traditional medicine with hormone health therapy to enhance patient vitality and long-term wellness.",
    chips: ["10+ yrs experience", "Hormone health", "Preventive care"],
    badge: "Provider",
    meta: "Killeen, TX",
    bookingUrl: BOOKING_LARISSA,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function HomeProviders() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] py-24 text-white sm:py-28 lg:py-32">
      {/* Seams to blend with cream neighbors above/below */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[color:var(--color-cream-soft)]/80 via-[color:var(--color-cream-soft)]/0 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 via-white/0 to-transparent"
      />

      {/* Botanical grid backdrop */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.14]"
      >
        <defs>
          <pattern
            id="providers-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M56 0 L0 0 0 56"
              fill="none"
              stroke="#C4A862"
              strokeWidth="0.4"
            />
          </pattern>
          <pattern
            id="providers-curves"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(4)"
          >
            <path
              d="M0 90 Q 45 55 90 90 T 180 90"
              fill="none"
              stroke="#6CBE45"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#providers-grid)" />
        <rect width="100%" height="100%" fill="url(#providers-curves)" />
      </svg>

      {/* Gold hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-[#C4A862]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-24 h-px bg-gradient-to-r from-transparent via-[#C4A862]/30 to-transparent"
      />

      {/* Spotlights */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 size-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.24), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 size-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.22), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#C4A862]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#C4A862]">
              Meet Your Providers
            </p>
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#C4A862]" />
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.05] text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Board-certified.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#9DD270] via-[#C4A862] to-[#9DD270] bg-clip-text italic text-transparent">
                Deeply experienced.
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#C4A862]/70 to-transparent"
              />
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-300 sm:text-lg">
            Every plan at CTHC is built and supervised by a licensed clinician
            who takes the time to know your story, your labs, and your goals.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10"
        >
          {PROVIDERS.map((provider) => (
            <motion.article
              key={provider.name}
              variants={fadeUp}
              className="group relative"
            >
              {/* Outer gold corner ticks */}
              <span
                aria-hidden
                className="pointer-events-none absolute -left-2 -top-2 z-20 h-8 w-8 border-l-2 border-t-2 border-[#C4A862]/70"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-2 -right-2 z-20 h-8 w-8 border-b-2 border-r-2 border-[#C4A862]/70"
              />

              <div className="relative overflow-hidden rounded-[28px] border border-[#C4A862]/25 bg-gradient-to-br from-[#1a3a0a]/60 via-[#0b1d04]/40 to-[#0b1d04]/70 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur">
                {/* Gold top strip */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C4A862] to-transparent opacity-70"
                />

                <div className="grid gap-0 sm:grid-cols-[minmax(0,220px)_1fr]">
                  {/* Portrait */}
                  <div className="relative aspect-[4/5] w-full sm:aspect-auto">
                    <Image
                      src={provider.image}
                      alt={`${provider.name}, ${provider.credentials}`}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 640px) 40vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    {/* warm scrim */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[#0b1d04]/75 via-[#0b1d04]/10 to-transparent"
                    />
                    {/* badges */}
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[#C4A862]/40 bg-[#0b1d04]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C4A862] backdrop-blur">
                      <Star className="size-3" />
                      {provider.badge}
                    </span>
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur">
                      <Stethoscope className="size-3 text-[#C4A862]" />
                      {provider.meta}
                    </span>
                  </div>

                  {/* Copy */}
                  <div className="flex flex-col p-6 sm:p-7">
                    <h3
                      className="font-heading font-semibold leading-[1.15] text-white"
                      style={{ fontSize: "clamp(1.35rem, 2vw, 1.6rem)" }}
                    >
                      {provider.name},{" "}
                      <span className="italic text-[#C4A862]">
                        {provider.credentials}
                      </span>
                    </h3>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {provider.role}
                    </p>

                    <p className="mt-4 text-[14.5px] leading-relaxed text-stone-200/90">
                      {provider.blurb}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {provider.chips.map((chip) => (
                        <li
                          key={chip}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#C4A862]/30 bg-[#C4A862]/10 px-2.5 py-1 text-[11px] font-semibold text-[#C4A862]"
                        >
                          <ShieldCheck className="size-3" />
                          {chip}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={provider.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#C4A862] via-[#8a6f30] to-[#5d4a1f] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-black/30 ring-1 ring-[#C4A862]/30 transition hover:shadow-xl hover:shadow-[#C4A862]/25"
                      >
                        <CalendarCheck className="size-3.5" />
                        Book with Dr. {provider.firstName}
                        <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </a>
                      <Link
                        href={`/about-us/#dr-${provider.firstName.toLowerCase()}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#C4A862] hover:text-white"
                      >
                        Read full bio
                        <ArrowUpRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Foot line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="size-3 text-[#C4A862]" />
            Physician-led
          </span>
          <span aria-hidden className="hidden h-3 w-px bg-white/20 sm:block" />
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="size-3 text-[#6CBE45]" />
            Board-certified
          </span>
          <span aria-hidden className="hidden h-3 w-px bg-white/20 sm:block" />
          <Link
            href="/about-us/"
            className="inline-flex items-center gap-1 text-[#C4A862] hover:text-white"
          >
            Meet the full team
            <ArrowUpRight className="size-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
