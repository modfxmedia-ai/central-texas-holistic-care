"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function HomeHRT() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 size-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.20), transparent 70%)",
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
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* ─── Copy ─── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12% 0px" }}
          >
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45]" />
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
                Restoring Balance
              </p>
            </div>
            <h2
              className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Hormone Replacement Therapy{" "}
              <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
                (HRT).
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
              Hormone Replacement Therapy (HRT) helps restore hormonal balance
              by supplementing your body with bioidentical hormones, bringing
              levels back to their optimal range. This targeted therapy can
              effectively reduce symptoms of imbalance while improving energy,
              mood, and overall quality of life.
            </p>

            {/* benefit chips */}
            <ul className="mt-7 flex flex-wrap gap-2">
              {[
                "Bioidentical",
                "Energy",
                "Mood",
                "Quality of Life",
              ].map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#6CBE45]/30 bg-gradient-to-br from-[#f0f5eb] to-white px-3.5 py-1.5 text-xs font-medium text-[#1a3a0a]"
                >
                  <Sparkles className="size-3 text-[#6CBE45]" />
                  {chip}
                </li>
              ))}
            </ul>

            <Link
              href="/hormone-therapy/"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/25 transition-shadow hover:shadow-2xl hover:shadow-[#6CBE45]/20"
            >
              Explore Hormone Therapy
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* ─── Image ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[460px]"
          >
            {/* tilted forest back card */}
            <motion.div
              aria-hidden
              animate={{ rotate: [-3, -2, -3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#2D5016] to-[#1a3a0a]"
              style={{ transformOrigin: "center" }}
            />
            {/* lime mid card */}
            <motion.div
              aria-hidden
              animate={{ rotate: [3, 2, 3] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#6CBE45] to-[#8BAD5A]"
              style={{ transformOrigin: "center" }}
            />
            {/* main image */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#1a3a0a]/25 ring-1 ring-white/40">
              <Image
                src="/images/source/hormone-replacement-therapy-hrt.jpg"
                alt="A woman feeling balanced and energized outdoors after restoring her hormones with HRT at Central Texas Holistic Care"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(45,80,22,0) 55%, rgba(26,58,10,0.45) 100%)",
                }}
              />
            </div>
            {/* dashed ring accent */}
            <motion.svg
              aria-hidden
              viewBox="0 0 100 100"
              className="pointer-events-none absolute -right-5 -top-5 size-20 text-[#C4A862]/70"
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 5"
              />
              <circle cx="50" cy="4" r="3" fill="currentColor" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
