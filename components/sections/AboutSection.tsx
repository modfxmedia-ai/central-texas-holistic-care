"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";

function Counter({
  to,
  suffix = "+",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  const [text, setText] = useState("0");

  useEffect(() => rounded.on("change", setText), [rounded]);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, mv, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {text}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 1500, suffix: "+", label: "Satisfied patients" },
  { value: 10, suffix: "+", label: "Wellness services" },
  { value: 15, suffix: "+", label: "Years experience" },
  { value: 100, suffix: "%", label: "Individualized care" },
];

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[color:var(--color-cream-soft)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#d8e0bf] to-[#a8bd7e] shadow-xl">
              <svg
                aria-hidden
                viewBox="0 0 400 500"
                className="absolute inset-0 h-full w-full opacity-30"
              >
                <g stroke="#1a3a0a" strokeWidth="1.2" fill="none" strokeLinecap="round">
                  <path d="M200 480 C 140 360, 140 220, 200 80" />
                  <path d="M200 420 C 120 410, 70 360, 60 300" />
                  <path d="M200 340 C 280 320, 330 270, 340 210" />
                  <path d="M200 260 C 120 240, 80 190, 70 130" />
                  {[400, 320, 240, 160, 90].map((y, i) => {
                    const cx = i % 2 === 0 ? 60 : 340;
                    return (
                      <ellipse
                        key={y}
                        cx={cx}
                        cy={y}
                        rx="46"
                        ry="15"
                        transform={`rotate(${i % 2 === 0 ? -25 : 25} ${cx} ${y})`}
                      />
                    );
                  })}
                </g>
              </svg>
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/80 p-5 backdrop-blur-md">
                <p className="font-heading text-lg leading-snug text-[#1a3a0a]">
                  “Root-cause care that treats the whole person — not just symptoms.”
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#5b7d33]">
                  Our Philosophy
                </p>
              </div>
            </div>

            {/* Floating decorative card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-[#2D5016]/10 bg-white p-5 shadow-xl sm:block"
            >
              <p className="font-heading text-3xl text-[#2D5016]">
                <Counter to={15} /> yrs
              </p>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Clinical Experience
              </p>
            </motion.div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8BAD5A]">
                About CTHC
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-4 font-heading font-light leading-[1.1] text-[#1a3a0a]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                The Best Thing You Can Do{" "}
                <span className="italic text-[#5b7d33]">for Your Health</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
                At Central Texas Holistic Care (CTHC), we specialize in providing
                individualized health plans tailored to your unique needs. Our experienced
                providers combine the best of traditional family medicine with proven
                natural and holistic therapies to support your overall well-being. We
                welcome patients of all ages and accept most insurance plans.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="font-heading text-3xl text-[#2D5016]">
                      <Counter to={s.value} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-1 text-xs uppercase tracking-widest text-stone-500">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
