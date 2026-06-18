"use client";

import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { Calendar, Compass, FlaskConical, HeartPulse } from "lucide-react";
import { useRef } from "react";

type Step = {
  index: string;
  title: string;
  blurb: string;
  icon: typeof Calendar;
  badge: string;
};

const STEPS: Step[] = [
  {
    index: "01",
    title: "Reach Out",
    blurb:
      "Call us at (254) 213-2423, fill out a contact form, or book directly through our online portal. We respond same or next business day.",
    icon: Calendar,
    badge: "Day 1",
  },  {
    index: "02",
    title: "Personal Consult",
    blurb:
      "Tell us what you're experiencing and your goals. We pair you with a provider whose expertise matches your needs.",
    icon: Compass,
    badge: "Week 1",
  },
  {
    index: "03",
    title: "Build Your Plan",
    blurb:
      "Targeted labs, comprehensive history, and a personalized plan combining family medicine and natural therapies.",
    icon: FlaskConical,
    badge: "Week 2",
  },
  {
    index: "04",
    title: "Heal & Thrive",
    blurb:
      "Ongoing follow-ups, IV menu, supplements, and pellet refills: your provider adjusts the plan as your body responds.",
    icon: HeartPulse,
    badge: "Ongoing",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function HomeJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });
  const progressScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[color:var(--color-cream-soft)] py-24 sm:py-28 lg:py-32"
    >
      {/* aurora glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 size-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 size-[400px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.18), transparent 70%)",
        }}
      />
      {/* dot grid mask */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.10]"
      >
        <defs>
          <pattern id="journey-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1a3a0a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#journey-dots)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Heading ─── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#6CBE45]" />
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
              Getting Started
            </p>
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#6CBE45]" />
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Your Path Begins in{" "}
            <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
              Four Simple Steps.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
            From first call to thriving, here&apos;s how a typical journey
            with CTHC unfolds.
          </p>
        </motion.div>

        {/* ─── Timeline ─── */}
        <div className="relative mt-20">
          {/* Desktop horizontal track */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-12 right-12 top-12 hidden h-[3px] overflow-hidden rounded-full bg-[#1a3a0a]/10 lg:block"
          >
            <motion.div
              style={{ scaleX: progressScale, transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#8BAD5A]"
            />
          </div>

          {/* Mobile vertical track */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-7 top-0 h-full w-[3px] overflow-hidden rounded-full bg-[#1a3a0a]/10 lg:hidden"
          >
            <motion.div
              style={{ scaleY: progressScale, transformOrigin: "top" }}
              className="h-full w-full bg-gradient-to-b from-[#2D5016] via-[#6CBE45] to-[#8BAD5A]"
            />
          </div>

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="relative grid items-stretch gap-10 lg:grid-cols-4 lg:gap-6"
          >
            {STEPS.map(({ index, title, blurb, icon: Icon, badge }, i) => (
              <motion.li
                key={index}
                variants={fadeUp}
                className="group relative flex flex-col pl-20 lg:pl-0"
              >
                {/* Numbered orb */}
                <motion.div
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="absolute left-0 top-0 lg:relative lg:left-auto lg:top-auto lg:mx-auto"
                >
                  <div className="relative">
                    {/* outer ping ring for first card on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-[#6CBE45]/20 opacity-0 blur-md transition-opacity group-hover:opacity-100"
                    />
                    {/* outer ring */}
                    <span
                      aria-hidden
                      className="absolute -inset-2 rounded-full border-2 border-dashed border-[#6CBE45]/40"
                      style={{
                        animation: `journey-spin-${i} ${24 + i * 2}s linear infinite`,
                      }}
                    />
                    {/* main orb */}
                    <div className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FAF6EE] to-white shadow-xl shadow-[#1a3a0a]/15 ring-4 ring-[color:var(--color-cream-soft)] lg:size-24">
                      <span className="font-heading text-2xl font-semibold leading-none lg:text-4xl">
                        <span className="bg-gradient-to-br from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text text-transparent">
                          {index}
                        </span>
                      </span>
                    </div>
                    {/* small icon chip on top-right of orb */}
                    <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] text-[#FAF6EE] shadow-md ring-2 ring-[color:var(--color-cream-soft)] lg:-right-2 lg:-top-2 lg:size-10">
                      <Icon className="size-3.5 lg:size-5" />
                    </span>
                  </div>
                </motion.div>

                {/* Card */}
                <div
                  className="relative mt-2 flex flex-1 flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#6CBE45]/40 hover:shadow-2xl hover:shadow-[#2D5016]/15 lg:mt-10 lg:p-7"
                >
                  {/* corner accent glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-[#6CBE45]/0 to-transparent blur-2xl transition-all group-hover:from-[#6CBE45]/30"
                  />
                  <div className="relative flex flex-1 flex-col">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#f0f5eb] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2D5016] ring-1 ring-[#6CBE45]/25">
                      {badge}
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-medium text-[#1a3a0a]">
                      {title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed text-stone-600"
                      dangerouslySetInnerHTML={{ __html: blurb }}
                    />
                    {/* bottom accent line */}
                    <div
                      aria-hidden
                      className="mt-auto pt-6"
                    >
                      <span className="block h-[2px] w-0 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45] transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          {/* keyframes for orb dashed rings */}
          <style>{`
            @keyframes journey-spin-0 { from { transform: rotate(0); } to { transform: rotate(360deg); } }
            @keyframes journey-spin-1 { from { transform: rotate(0); } to { transform: rotate(-360deg); } }
            @keyframes journey-spin-2 { from { transform: rotate(0); } to { transform: rotate(360deg); } }
            @keyframes journey-spin-3 { from { transform: rotate(0); } to { transform: rotate(-360deg); } }
          `}</style>
        </div>
      </div>
    </section>
  );
}
