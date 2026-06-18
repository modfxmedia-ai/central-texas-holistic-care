"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

const BENEFITS = [
  {
    title: "Sustained energy",
    body: "Steady hormone levels mean fewer crashes and more done in your day.",
  },
  {
    title: "Better mood & focus",
    body: "Balanced estrogen, testosterone, and thyroid lift fog and stabilize mood.",
  },
  {
    title: "Healthier body composition",
    body: "Optimized hormones support lean muscle and a faster metabolism.",
  },
  {
    title: "Restored intimacy",
    body: "Improved libido and performance for both men and women.",
  },
];

export default function HRTSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[color:var(--color-background)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#2D5016]/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#2D5016]">
                <Sparkles className="size-3.5" />
                Hormone Replacement Therapy
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 font-heading font-light leading-[1.08] text-[#1a3a0a]"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3rem)" }}
              >
                Restoring Balance:{" "}
                <span className="italic text-[#5b7d33]">
                  Hormone Replacement Therapy
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
                Whether you're navigating peri-menopause, low testosterone, or a thyroid
                that's lost its rhythm, modern bio-identical HRT (including pellet
                therapy) can re-establish the chemistry your body once produced on its
                own.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/hormone-therapy/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2D5016] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1F3A0F]"
                >
                  Explore Hormone Therapy
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/women/menopausal-disorders/"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2D5016]/25 px-6 py-3 text-sm font-semibold text-[#2D5016] hover:bg-[#2D5016]/5"
                >
                  Menopausal Care
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={0.05 * i}>
                <div className="h-full rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#2D5016]/30 hover:shadow-xl hover:shadow-[#2D5016]/10">
                  <h3 className="font-heading text-xl text-[#1a3a0a]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
