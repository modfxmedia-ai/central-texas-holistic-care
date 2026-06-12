"use client";

import { motion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  Clock,
  CreditCard,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

type Status = "approved" | "in-process" | "closed";
type Carrier = { name: string; status: Status; note?: string };

const CARRIERS: Carrier[] = [
  { name: "Medicare (Group)", status: "approved" },
  { name: "Medicare (Individual)", status: "approved" },
  { name: "Cigna", status: "approved" },
  { name: "Superior Health Plan", status: "approved" },
  { name: "Aetna", status: "approved" },
  { name: "UnitedHealthcare", status: "approved" },
  { name: "BCBS Texas", status: "approved" },
  { name: "Humana", status: "approved" },
  { name: "Multiplan", status: "approved" },
  { name: "Amerigroup", status: "approved" },
  { name: "Medicaid (Group)", status: "approved" },
  { name: "Medicaid (Individual)", status: "approved" },
  { name: "Molina", status: "approved" },
  { name: "Aetna Better Health TX", status: "approved" },
  { name: "Tricare West", status: "in-process", note: "Credentialing underway" },
  { name: "Parkland", status: "closed", note: "Bell County not accepting applications" },
  { name: "Oscar", status: "closed", note: "Panel closed" },
  { name: "Baylor Scott & White", status: "closed", note: "Panel closed" },
];

const APPROVED = CARRIERS.filter((c) => c.status === "approved");
const IN_PROCESS = CARRIERS.filter((c) => c.status === "in-process");
const CLOSED = CARRIERS.filter((c) => c.status === "closed");

const CHERRY_URL = "https://withcherry.com/";
const EASE = [0.22, 1, 0.36, 1] as const;

const pillContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025 } },
};

const pillItem: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

export default function HomeInsurance() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.18), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-20 size-[380px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* ─── Left: copy ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45]" />
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
                Insurance &amp; Payment
              </p>
            </div>
            <h2
              className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              We Accept Most{" "}
              <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
                Major Insurers.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
              We&apos;re in-network with{" "}
              <span className="font-semibold text-[#1a3a0a]">
                {APPROVED.length} major payers
              </span>{" "}
              — including Medicare, Medicaid, BCBS Texas, Aetna, UHC, Cigna,
              Humana, and more. Transparent self-pay rates and 0% APR financing
              through Cherry round out the picture.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-stone-700">
              {[
                "Most commercial PPO &amp; HMO plans accepted",
                "Medicare &amp; Medicaid (Group + Individual)",
                "Transparent self-pay pricing",
                "Pay over time with 0% APR via Cherry",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-[#6CBE45]/20 hover:bg-[#f0f5eb]/50"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6CBE45] to-[#2D5016] text-white">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/payment-plans/"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/25 transition-shadow hover:shadow-2xl hover:shadow-[#6CBE45]/20"
              >
                View Payment Plans
              </Link>
              <a
                href={CHERRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#1a3a0a] transition-colors hover:border-[#6CBE45] hover:bg-[#f0f5eb]"
              >
                <Sparkles className="size-4 text-[#C4A862]" />
                See If You Qualify
              </a>
            </div>

            <p className="mt-6 text-xs text-stone-500">
              Not sure?{" "}
              <a
                href="tel:+12542132423"
                className="inline-flex items-center gap-1 font-semibold text-[#2D5016] hover:underline"
              >
                <Phone className="size-3" />
                Call (254) 213-2423
              </a>
            </p>
          </motion.div>

          {/* ─── Right: rich carrier card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-br from-[color:var(--color-cream-soft)] to-white p-7 shadow-sm sm:p-9"
          >
            {/* corner gradient accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-gradient-to-br from-[#6CBE45]/25 to-transparent blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 size-52 rounded-full bg-gradient-to-tr from-[#C4A862]/20 to-transparent blur-2xl"
            />

            {/* header */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] text-[#FAF6EE] ring-1 ring-[#6CBE45]/30">
                  <ShieldCheck className="size-4" />
                </span>
                <p className="font-heading text-lg font-medium text-[#1a3a0a]">
                  In-Network Carriers
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#FAF6EE] ring-1 ring-[#6CBE45]/25">
                <Sparkles className="size-3 text-[#6CBE45]" />
                {APPROVED.length} Approved
              </span>
            </div>

            {/* legend */}
            <div className="relative mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#6CBE45] ring-2 ring-[#6CBE45]/25" />
                Approved · {APPROVED.length}
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#C4A862] ring-2 ring-[#C4A862]/25" />
                In Process · {IN_PROCESS.length}
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-stone-400 ring-2 ring-stone-300" />
                Currently Closed · {CLOSED.length}
              </span>
            </div>

            {/* approved pills */}
            <motion.div
              variants={pillContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              className="relative mt-5 flex flex-wrap gap-2"
            >
              {APPROVED.map((c) => (
                <motion.span
                  key={c.name}
                  variants={pillItem}
                  whileHover={{ y: -2 }}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-[#6CBE45]/30 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm transition-all hover:border-[#6CBE45] hover:bg-[#f0f5eb] hover:text-[#1a3a0a] hover:shadow-md"
                >
                  <CheckCircle2 className="size-3 text-[#2D5016]" strokeWidth={2.4} />
                  {c.name}
                </motion.span>
              ))}
              {IN_PROCESS.map((c) => (
                <motion.span
                  key={c.name}
                  variants={pillItem}
                  whileHover={{ y: -2 }}
                  title={c.note}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#C4A862]/40 bg-[#FAF6EE] px-3 py-1.5 text-xs font-medium text-[#7a6730] shadow-sm transition-all hover:border-[#C4A862] hover:shadow-md"
                >
                  <Clock className="size-3" strokeWidth={2.4} />
                  {c.name}
                </motion.span>
              ))}
            </motion.div>

            {/* closed footnote — collapsible visual style */}
            <div className="relative mt-5">
              <details className="group rounded-2xl border border-stone-200 bg-white/60 px-4 py-3 transition-colors hover:bg-white">
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-stone-400 ring-2 ring-stone-300" />
                    Currently unavailable ({CLOSED.length})
                  </span>
                  <span className="text-stone-400 transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <ul className="mt-3 space-y-1.5 text-xs text-stone-500">
                  {CLOSED.map((c) => (
                    <li key={c.name} className="flex items-baseline gap-2">
                      <span className="font-medium text-stone-600">{c.name}</span>
                      {c.note ? (
                        <span className="text-stone-400">— {c.note}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </details>
            </div>

            {/* divider */}
            <div className="relative mt-6 h-px bg-gradient-to-r from-transparent via-[#1a3a0a]/15 to-transparent" />

            {/* 3-up benefits */}
            <div className="relative mt-6 grid grid-cols-3 gap-3">
              {[
                {
                  icon: BadgeCheck,
                  big: `${APPROVED.length}`,
                  label: "Plans Approved",
                  tint: "from-[#6CBE45]/25 to-transparent",
                  iconBg: "from-[#6CBE45] to-[#2D5016]",
                },
                {
                  icon: CreditCard,
                  big: "0%",
                  label: "APR via Cherry",
                  tint: "from-[#C4A862]/25 to-transparent",
                  iconBg: "from-[#C4A862] to-[#9C8344]",
                },
                {
                  icon: Clock,
                  big: "1 wk",
                  label: "Avg. wait time",
                  tint: "from-[#8BAD5A]/25 to-transparent",
                  iconBg: "from-[#8BAD5A] to-[#2D5016]",
                },
              ].map(({ icon: Icon, big, label, tint, iconBg }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white/70 p-4 backdrop-blur-sm transition-all hover:border-[#6CBE45]/40 hover:shadow-md"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br blur-xl ${tint}`}
                  />
                  <span
                    className={`relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br text-white ${iconBg}`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="relative mt-3 font-heading text-2xl font-semibold leading-none text-[#1a3a0a]">
                    {big}
                  </div>
                  <div className="relative mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* verification footer */}
            <div className="relative mt-auto pt-6">
              <div className="flex items-start gap-3 rounded-2xl border border-[#6CBE45]/30 bg-gradient-to-br from-[#f0f5eb] to-white p-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6CBE45] to-[#2D5016] text-white">
                  <CheckCircle2 className="size-4" />
                </span>
                <p className="text-sm leading-relaxed text-stone-700">
                  <span className="font-semibold text-[#1a3a0a]">
                    Verification is quick
                  </span>{" "}
                  — share your member ID at booking and our front desk will
                  run benefits before your first visit.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
