"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

const SIGNS = [
  "Persistent fatigue or low energy",
  "Weight gain or stubborn belly fat",
  "Mood swings, anxiety, or depression",
  "Low libido or sexual dysfunction",
  "Brain fog & poor focus",
  "Irregular or painful periods",
  "Hot flashes & night sweats",
  "Trouble sleeping or insomnia",
  "Thinning hair or hair loss",
  "Dry skin or breakouts",
  "Muscle loss or decreased strength",
  "Joint stiffness or chronic pain",
  "Reduced motivation & drive",
];

export default function HormoneImbalanceSection() {
  return (
    <section className="relative w-full bg-[color:var(--color-cream-soft)] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8BAD5A]">
              Recognize the Signs
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-4 font-heading font-light leading-[1.1] text-[#1a3a0a]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Hormone Imbalance{" "}
              <span className="italic text-[#5b7d33]">Can Affect Anyone</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base text-stone-600 sm:text-lg">
              Hormonal fluctuations are normal, but when they tip out of balance, the
              ripple effects touch nearly every part of daily life. If two or more of the
              following sound familiar, it may be time for a deeper look.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNS.map((sign, i) => (
            <RevealItem key={sign}>
              <div className="group flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#2D5016]/30 hover:shadow-lg hover:shadow-[#2D5016]/5">
                <span className="font-heading text-2xl text-[#8BAD5A] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-stone-700">{sign}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
