"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
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
] as const;

export default function HomeInsuranceMarquee() {
  // Duplicate the list so the animation from 0% → -50% loops seamlessly.
  const track = [...CARRIERS, ...CARRIERS];

  return (
    <section
      aria-label="Insurance and financing"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0f2706] via-[#1a3a0a] to-[#0f2706] py-6 sm:py-8"
    >
      {/* Gold hairlines top + bottom to separate visually from neighbors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/45 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-6 lg:px-8"
      >
        {/* Leading label pill */}
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#6CBE45]/40 bg-[#0f2706] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FAF6EE] shadow-md">
          <ShieldCheck className="size-3 text-[#6CBE45]" />
          In-network insurance
        </span>

        {/* Scrolling marquee */}
        <div className="relative min-w-0 flex-1 overflow-hidden">
          {/* Edge fade masks */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0f2706] to-transparent sm:w-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0f2706] to-transparent sm:w-20"
          />

          <motion.ul
            className="flex shrink-0 items-center gap-8 whitespace-nowrap sm:gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          >
            {track.map((name, i) => (
              <li
                key={`${name}-${i}`}
                className="flex items-center gap-2.5 text-sm font-medium tracking-wide text-[#FAF6EE]/90"
              >
                <CheckCircle2
                  className="size-4 text-[#6CBE45]"
                  strokeWidth={2.4}
                />
                <span className="font-heading text-[15px] font-medium">
                  {name}
                </span>
                <span aria-hidden className="text-[#6CBE45]/70">
                  ✦
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Trailing CTA */}
        <Link
          href="/payment-plans/"
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#C4A862]/40 bg-[#C4A862]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FAF6EE] transition hover:bg-[#C4A862]/20"
        >
          Cherry &amp; Denefits financing
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </section>
  );
}
