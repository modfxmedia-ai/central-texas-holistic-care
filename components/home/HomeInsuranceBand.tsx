"use client";

import { motion } from "framer-motion";
import { CreditCard, ShieldCheck } from "lucide-react";
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
];

export default function HomeInsuranceBand() {
  return (
    <section
      aria-labelledby="insurance-band-heading"
      className="w-full border-b border-[#1a3a0a]/10 bg-[color:var(--color-cream-soft)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/15 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-[#1a3a0a]">
            <ShieldCheck className="size-4 text-[#8BAD5A]" />
            Insurance &amp; Financing
          </span>
          <h2
            id="insurance-band-heading"
            className="mt-5 font-semibold leading-tight text-[#1a3a0a]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            In-network with most major insurers.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            We accept Medicare, Medicaid, and most commercial plans. Prefer to
            pay over time? Choose 0% APR financing through{" "}
            <span className="font-semibold text-[#1a3a0a]">Cherry</span> and{" "}
            <span className="font-semibold text-[#1a3a0a]">Denefits</span>.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-3"
        >
          {CARRIERS.map((name) => (
            <li
              key={name}
              className="rounded-full border border-[#1a3a0a]/10 bg-white px-4 py-2 text-sm font-medium text-stone-700"
            >
              {name}
            </li>
          ))}
        </motion.ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/payment-plans/"
            className="inline-flex items-center gap-2 rounded-full bg-[#1a3a0a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2D5016]"
          >
            <CreditCard className="size-4" />
            View Payment Plans
          </Link>
          <a
            href="tel:+12542132423"
            className="text-sm font-medium text-[#2D5016] underline-offset-4 hover:underline"
          >
            Questions about coverage? Call (254) 213-2423
          </a>
        </div>
      </div>
    </section>
  );
}
