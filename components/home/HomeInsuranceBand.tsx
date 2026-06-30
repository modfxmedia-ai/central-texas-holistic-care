"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const CARRIERS = [
  "Medicare",
  "Medicaid",
  "BCBS Texas",
  "Aetna",
  "UnitedHealthcare",
  "Cigna",
  "Humana",
  "Superior Health Plan",
  "Molina",
  "Amerigroup",
  "Multiplan",
  "Tricare West",
  "Aetna Better Health TX",
];

const HIGHLIGHTS = [
  "Medicare, Medicaid & most commercial plans",
  "0% APR financing via Cherry & Denefits",
  "Transparent pricing, no surprise bills",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function HomeInsuranceBand() {
  return (
    <section
      aria-labelledby="insurance-band-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#ece4d0] via-[#F0EBE0] to-[#e8dfc6] pt-12 pb-24 sm:pt-16 sm:pb-32"
    >
      {/* Hard seams to clearly separate from neighbors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#1a3a0a]/15 via-[#1a3a0a]/0 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/70 via-white/0 to-transparent"
      />
      {/* Gold hairline rules top + bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/45 to-transparent"
      />

      {/* Ambient brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.18), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.24), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#C4A862]/40 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a3a0a] shadow-sm"
          >
            <ShieldCheck className="size-3.5 text-[#6CBE45]" />
            Insurance &amp; Financing
          </motion.span>

          <motion.h2
            id="insurance-band-heading"
            variants={fadeUp}
            className="mt-5 font-heading font-semibold leading-[1.05] tracking-tight text-[#1a3a0a]"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}
          >
            In-network with{" "}
            <span className="relative inline-block">
              <span className="italic text-[#C4A862]">most major</span>
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#C4A862] to-transparent opacity-80"
              />
            </span>{" "}
            insurers.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base"
          >
            We accept Medicare, Medicaid, and most commercial plans. Prefer to
            pay over time? Choose 0% APR financing through{" "}
            <span className="font-semibold text-[#1a3a0a]">Cherry</span> and{" "}
            <span className="font-semibold text-[#1a3a0a]">Denefits</span>.
          </motion.p>
        </motion.div>

        {/* ─── Carrier chips ─── */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.05, delayChildren: 0.15 },
            },
          }}
          className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-2"
        >
          {CARRIERS.map((name) => (
            <motion.li
              key={name}
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
              whileHover={{ y: -2 }}
              className="rounded-full border border-[#1a3a0a]/12 bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#2D5016] shadow-sm shadow-[#1a3a0a]/[0.04] transition-colors hover:border-[#6CBE45]/60 hover:text-[#1a3a0a]"
            >
              {name}
            </motion.li>
          ))}
        </motion.ul>

        {/* ─── Highlights row ─── */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08, delayChildren: 0.25 },
            },
          }}
          className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {HIGHLIGHTS.map((h) => (
            <motion.li
              key={h}
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[13px] text-[#2D5016]"
            >
              <CheckCircle2 className="size-3.5 flex-none text-[#6CBE45]" />
              <span>{h}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* ─── CTAs ─── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/payment-plans/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/30 transition hover:shadow-xl hover:shadow-[#6CBE45]/20"
          >
            <CreditCard className="size-4" />
            View Payment Plans
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+12542132423"
            className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/15 bg-white px-6 py-3 text-sm font-semibold text-[#1a3a0a] shadow-sm transition hover:border-[#6CBE45] hover:bg-[#f0f5eb]"
          >
            <Phone className="size-4 text-[#6CBE45]" />
            Call (254) 213-2423
          </a>
        </motion.div>
      </div>
    </section>
  );
}
