"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  HelpCircle,
  Percent,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const CHERRY_APPLY = "https://withcherry.com/";
const CHERRY_MANAGE = "https://pay.withcherry.com/login";
const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";
const PHONE_DISPLAY = "(254) 213-2423";
const PHONE_TEL = "+12542132423";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const TRUST_PILLS = [
  { icon: ShieldCheck, label: "No hard credit checks" },
  { icon: Percent, label: "True 0% APR options" },
  { icon: Wallet, label: "Up to $50,000 approvals" },
  { icon: Timer, label: "60-second application" },
];

const STEPS = [
  {
    icon: BadgeCheck,
    title: "See if you qualify",
    body: "A 60-second application with no hard credit pull, so checking won't impact your score.",
  },
  {
    icon: CalendarCheck,
    title: "Get care",
    body: "Use your Cherry approval at checkout for any of our hormone, IV, or wellness services.",
  },
  {
    icon: CreditCard,
    title: "Pay over time",
    body: "Pick a plan length that fits your budget, choose a 0% APR option when eligible.",
  },
];

const FAQS = [
  {
    q: "What is Cherry?",
    a: "Cherry is a buy-now-pay-later company that makes it fast and easy to pay for health and wellness purchases over time. They partner with thousands of practices across the U.S.",
  },
  {
    q: "Will applying hurt my credit?",
    a: "No. Cherry uses a soft credit check to determine eligibility, which does not impact your credit score.",
  },
  {
    q: "How much can I be approved for?",
    a: "Approvals range up to $50,000 depending on credit and other factors. You'll see your personalized terms in seconds.",
  },
  {
    q: "Is there a co-signer option?",
    a: "Yes. If you don't qualify on your own, a co-signer can help you get approved or unlock better terms.",
  },
];

export default function CherryWidget() {
  return (
    <>
      {/* ───────────────────────────── Trust pills ───────────────────────────── */}
      <section className="relative w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {TRUST_PILLS.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-center gap-2.5 rounded-2xl border border-stone-200 bg-[color:var(--color-cream-soft)] px-4 py-3 shadow-sm"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#1a3a0a] text-white">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm font-semibold text-stone-800">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────── How Cherry works ──────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[color:var(--color-cream-soft)] py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(196,168,98,0.35) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#C4A862]/40 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6f30]"
            >
              <Sparkles className="size-3 text-[#C4A862]" />
              How Cherry works
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#1a3a0a] sm:text-4xl"
            >
              Three steps. <span className="italic text-[#8a6f30]">Zero stress.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base text-stone-600 sm:text-lg"
            >
              Apply in 60 seconds, get care now, and pay on a schedule that fits
              your life, no hard credit pull, no hidden fees.
            </motion.p>
          </motion.div>

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-12 grid gap-5 sm:gap-6 lg:mt-16 lg:grid-cols-3"
          >
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                {/* gold corner ticks */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-[#C4A862]/60"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#C4A862]/60"
                />
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0f5eb] to-[#e6f0db] text-[#1a3a0a]">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-[0.2em] text-stone-400">
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1a3a0a]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {body}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ───────────────────────────── Example payment card ──────────────────── */}
      <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C4A862]/40 bg-[color:var(--color-cream-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6f30]">
                <Wallet className="size-3 text-[#C4A862]" />
                Example payment
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#1a3a0a] sm:text-4xl">
                See what a $1,000 plan could look like.
              </h2>
              <p className="mt-3 text-base text-stone-600 sm:text-lg">
                Personalized terms appear in seconds, these examples are
                illustrative only. APR depends on credit and other factors.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-stone-700">
                {[
                  "60-second application",
                  "No hard credit check, ever",
                  "True 0% APR options for qualified borrowers",
                  "Interest-bearing plans with APRs as low as 5.99%",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#6CBE45]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={CHERRY_APPLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1a3a0a] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,39,6,0.5)] transition hover:bg-[#0f2706]"
                >
                  See if you qualify
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href={CHERRY_MANAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#1a3a0a] transition hover:border-[#1a3a0a]"
                >
                  Manage your account
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#6CBE45]/15 via-transparent to-[#C4A862]/15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[28px] border border-[#C4A862]/30 bg-gradient-to-br from-[#1a3a0a] via-[#0f2706] to-[#0b1d04] p-8 text-white shadow-[0_30px_80px_-40px_rgba(15,39,6,0.6)] sm:p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-1 -top-1 h-8 w-8 border-l-2 border-t-2 border-[#C4A862]/60"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1 -right-1 h-8 w-8 border-b-2 border-r-2 border-[#C4A862]/60"
                />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9DD270]">
                    $1,000 · Example
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FAF6EE]">
                    <ShieldCheck className="size-3 text-[#9DD270]" />
                    0% APR eligible
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Monthly
                    </p>
                    <p className="mt-1 font-display text-4xl font-semibold text-white sm:text-5xl">
                      $84
                      <span className="text-base font-normal text-white/60">
                        /mo
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-white/60">over 12 months</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Or, shorter
                    </p>
                    <p className="mt-1 font-display text-4xl font-semibold text-white sm:text-5xl">
                      $250
                      <span className="text-base font-normal text-white/60">
                        /mo
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-white/60">over 3 months</p>
                  </div>
                </div>
                <hr className="my-6 border-white/10" />
                <p className="text-xs leading-relaxed text-white/70">
                  Illustrative only. 0% APR & promotional rates subject to
                  eligibility. Example: a $400 plan may be $100/mo over 3
                  months at 0% APR with a down payment due at purchase. See
                  disclosures below.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────── FAQ ───────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[color:var(--color-cream-soft)] py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(196,168,98,0.35) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#C4A862]/40 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6f30]"
            >
              <HelpCircle className="size-3 text-[#C4A862]" />
              Questions
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#1a3a0a] sm:text-4xl"
            >
              Frequently asked questions.
            </motion.h2>
          </motion.div>

          <motion.dl
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-10 space-y-3"
          >
            {FAQS.map(({ q, a }) => (
              <motion.div
                key={q}
                variants={fadeUp}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <dt className="text-base font-semibold text-[#1a3a0a]">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone-600">
                  {a}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ───────────────────────────── Final CTA ─────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] py-20 text-white sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Care first.{" "}
            <span className="italic text-[#9DD270]">Payments on your schedule.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg"
          >
            See your personalized Cherry options in 60 seconds, or call us and
            we'll walk you through it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href={CHERRY_APPLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#6CBE45] px-6 py-3 text-sm font-semibold text-[#0b1d04] shadow-[0_10px_30px_-10px_rgba(108,190,69,0.6)] transition hover:bg-[#9DD270]"
            >
              See if you qualify
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <CalendarCheck className="size-4" />
              Book an appointment
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              <Phone className="size-4" />
              {PHONE_DISPLAY}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────── Disclosures ───────────────────────────── */}
      <section className="w-full bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 text-[11px] leading-relaxed text-stone-500 sm:px-6 lg:px-8">
          <p>
            These are examples only. 0% APR and other promotional rates subject
            to eligibility. Exact terms and APR depend on credit score and other
            factors. For example, a $400 payment plan with Cherry may cost
            $100/month over 3 months at 0% APR with down payment in the amount
            of the monthly payment due at the time of purchase. Not every
            provider that uses Cherry will offer the payment plan terms listed
            above.
          </p>
          <p className="mt-3">
            Payment options through Cherry Technologies, Inc. are issued by
            partner lenders (see{" "}
            <a
              href="https://withcherry.com/lending-partners"
              className="underline hover:text-[#1a3a0a]"
              target="_blank"
              rel="noopener noreferrer"
            >
              withcherry.com/lending-partners
            </a>{" "}
            and{" "}
            <a
              href="https://withcherry.com/terms"
              className="underline hover:text-[#1a3a0a]"
              target="_blank"
              rel="noopener noreferrer"
            >
              withcherry.com/terms
            </a>
            ). Iowa borrowers: APR capped at 20.99%. Accessibility statement:{" "}
            <a
              href="https://withcherry.com/accessibility"
              className="underline hover:text-[#1a3a0a]"
              target="_blank"
              rel="noopener noreferrer"
            >
              withcherry.com/accessibility
            </a>
            .
          </p>
          <p className="mt-3">
            Copyright © 2020-2026 Cherry Technologies Inc. NMLS #2061234, 2
            Embarcadero Center, 8th Floor, San Francisco, CA 94111.
          </p>
        </div>
      </section>
    </>
  );
}
