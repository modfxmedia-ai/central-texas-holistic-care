"use client";

import { motion, type Variants } from "framer-motion";
import {
  HeartPulse,
  Mail,
  Rocket,
  Sparkles,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import FaqAccordion from "@/components/sections/FaqAccordion";

const CONTACT_URL = "/contact/";
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const STEPS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Rocket,
    title: "Apply in 60 seconds",
    body: "Fill out a short online application, no paperwork, no waiting room forms.",
  },
  {
    icon: HeartPulse,
    title: "Get care now",
    body: "Use your approval right away so treatment isn't delayed by your budget.",
  },
  {
    icon: Wallet,
    title: "Pay over time",
    body: "Spread the cost across manageable payments on a schedule that fits your life.",
  },
];

const FAQS = [
  {
    question: "Will applying hurt my credit score?",
    answer:
      "No. Checking your eligibility uses a soft credit check that does not affect your credit score. A hard credit check, if ever required, would only happen with your explicit consent.",
  },
  {
    question: "Do I need good credit to be approved?",
    answer:
      "No. Most applicants are approved regardless of credit history, and no-credit-check options are available. Approval and terms are determined by the financing provider based on your application.",
  },
  {
    question: "Are 0% APR options really available?",
    answer:
      "Yes, true 0% APR promotional plans are available for qualified borrowers. Availability depends on eligibility, so you'll see your exact rate and terms before you commit to anything.",
  },
  {
    question: "How much can I be approved for?",
    answer:
      "Approval amounts vary by applicant and are set by the financing provider, most patients qualify for enough to cover a full course of care. You'll see your specific approval amount during the application.",
  },
  {
    question: "What if I have questions before I apply?",
    answer:
      "Reach out to our practice first. Our team can walk you through your care plan and help you understand your financing options before you submit an application.",
  },
];

export default function GetFinancedContent() {
  return (
    <>
      {/* ───────────────────────────── Cherry embed ──────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#C4A862]/40 bg-[color:var(--color-cream-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6f30]"
            >
              <Sparkles className="size-3 text-[#C4A862]" />
              Apply Now
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#1a3a0a] sm:text-4xl"
            >
              Check your options in minutes.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mx-auto mt-10 min-h-[600px] w-full overflow-hidden rounded-2xl border border-stone-200 bg-[color:var(--color-cream-soft)] shadow-sm sm:max-w-4xl"
          >
            {/* CHERRY EMBED CODE HERE */}
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────── How it works ──────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[color:var(--color-cream-soft)] py-12 sm:py-20 lg:py-24">
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
              How it works
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#1a3a0a] sm:text-4xl"
            >
              Three steps. <span className="italic text-[#8a6f30]">Zero pressure.</span>
            </motion.h2>
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

      {/* ───────────────────────────────── FAQ ───────────────────────────────── */}
      <FaqAccordion
        items={FAQS.map(({ question, answer }) => ({
          question,
          answer,
        }))}
        eyebrow="Common questions"
        title="Frequently asked questions."
        className="relative w-full bg-white py-14 sm:py-20 lg:py-28"
      />

      {/* ───────────────────────────── Final CTA ─────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Ready to <span className="italic text-[#9DD270]">get financed?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg"
          >
            Have questions before you apply? Reach out and our team will help you
            find the right fit for your care plan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
            className="mt-9 flex justify-center"
          >
            <Link
              href={CONTACT_URL}
              className="inline-flex items-center gap-2 rounded-full bg-[#6CBE45] px-7 py-3.5 text-sm font-semibold text-[#0b1d04] shadow-[0_10px_30px_-10px_rgba(108,190,69,0.6)] transition hover:bg-[#9DD270]"
            >
              <Mail className="size-4" />
              Contact the practice
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
