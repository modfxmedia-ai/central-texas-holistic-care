"use client";

import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

const PRINCIPLES = [
  "Root-cause diagnostics, not symptom suppression",
  "Bio-identical hormone optimization",
  "Nutrition, lifestyle, and stress alongside medication",
  "Insurance accepted — care that's actually accessible",
];

export default function HolisticMedicineSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a3a0a] py-24 text-[#FAF6EE] sm:py-28 lg:py-32">
      {/* Decorative botanical */}
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute -right-20 top-1/2 h-[120%] w-[60%] -translate-y-1/2 opacity-[0.08]"
      >
        <g stroke="#FAF6EE" strokeWidth="1.2" fill="none" strokeLinecap="round">
          <path d="M300 600 C 240 420, 240 240, 300 60" />
          <path d="M300 520 C 200 510, 130 440, 110 360" />
          <path d="M300 420 C 420 400, 490 330, 510 250" />
          <path d="M300 320 C 200 300, 140 240, 120 170" />
          {[460, 380, 300, 220, 140].map((y, i) => {
            const cx = i % 2 === 0 ? 110 : 510;
            return (
              <ellipse
                key={y}
                cx={cx}
                cy={y}
                rx="55"
                ry="18"
                transform={`rotate(${i % 2 === 0 ? -25 : 25} ${cx} ${y})`}
              />
            );
          })}
        </g>
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8BAD5A]">
                Our Approach
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-4 font-heading font-light leading-[1.05] text-white"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Holistic{" "}
                <span className="italic text-[#8BAD5A]">Medicine?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Holistic medicine treats the whole person — body, hormones, lifestyle,
                and environment — and uses the right tool for the job, whether that's a
                prescription, an IV protocol, a peptide, or a conversation about sleep.
                It's traditional medicine, done thoughtfully.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {PRINCIPLES.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#8BAD5A]/20 text-[#8BAD5A]">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-white/85">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Decorative imagery panel */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div
                className="absolute inset-0 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(139,173,90,0.55), transparent)",
                }}
                aria-hidden
              />
              <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-3">
                <div className="rounded-3xl bg-gradient-to-br from-[#244010] to-[#1a3a0a] p-6 ring-1 ring-white/10">
                  <p className="font-heading text-5xl text-[#8BAD5A]">12+</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                    IV Protocols
                  </p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-[#8BAD5A]/25 to-[#244010] p-6 ring-1 ring-white/10">
                  <p className="font-heading text-5xl text-white">BHRT</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                    Bio-identical Hormones
                  </p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-[#8BAD5A]/25 to-[#244010] p-6 ring-1 ring-white/10">
                  <p className="font-heading text-5xl text-white">All ages</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                    Family Medicine
                  </p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-[#244010] to-[#1a3a0a] p-6 ring-1 ring-white/10">
                  <p className="font-heading text-5xl text-[#8BAD5A]">Insured</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                    Most Plans Accepted
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
