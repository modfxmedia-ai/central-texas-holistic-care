"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

type Pillar = {
  icon: string;
  title: string;
  body: string;
  accent: string;
};

const PILLARS: Pillar[] = [
  {
    icon: "/images/source/icon1.png",
    title: "What Is Holistic Medicine?",
    body:
      "Holistic medicine focuses on treating the entire body, not just isolated symptoms or conditions. This whole-body approach promotes long-term health, balance, and a deeper sense of well-being. By addressing physical, emotional, and lifestyle factors, holistic care supports healing from the inside out.",
    accent: "from-[#6CBE45]/20 to-transparent",
  },
  {
    icon: "/images/source/icon2.png",
    title: "Supplement-Based Therapies: IV Hydration Therapy",
    body:
      "Boost your energy, immunity, and wellness with IV Hydration Therapy, also known as an \u201cIV Cocktail.\u201d This nutrient-rich treatment delivers essential vitamins, minerals, and fluids directly into your bloodstream for faster absorption and maximum effectiveness. It\u2019s a quick and efficient way to recharge your body and feel your best.",
    accent: "from-[#8BAD5A]/20 to-transparent",
  },
  {
    icon: "/images/source/icon3.png",
    title: "Comprehensive Wellness Exams",
    body:
      "Regular wellness exams are key to preventive healthcare. These check-ups not only assess your overall health but also give you the chance to stay up to date on important vaccinations, such as seasonal flu shots to protect against influenza and other recommended vaccines based on age, lifestyle, or health conditions.",
    accent: "from-[#C4A862]/20 to-transparent",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function HomeApproach() {
  return (
    <section className="relative w-full overflow-hidden bg-[color:var(--color-cream-soft)] py-24 sm:py-28 lg:py-32">
      {/* decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 size-[380px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Our Approach
            </p>
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#6CBE45]" />
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Whole-Person Care,{" "}
            <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
              From Every Angle.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
            Three core pillars guide every plan we build at CTHC: holistic
            medicine, supplement-based therapies, and consistent preventive
            care.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {PILLARS.map(({ icon, title, body, accent }, i) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition-all hover:border-[#6CBE45]/40 hover:shadow-2xl hover:shadow-[#2D5016]/15"
            >
              {/* gradient accent glow */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br blur-2xl ${accent}`}
              />
              {/* top-left badge w/ number */}
              <div className="relative flex items-center justify-between">
                <span className="font-heading text-xs font-medium uppercase tracking-[0.32em] text-[#8BAD5A]">
                  0{i + 1}
                </span>
                <Sparkles className="size-4 text-[#C4A862]/70 transition-colors group-hover:text-[#C4A862]" />
              </div>

              <div className="relative mt-6 flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0f5eb] to-[#e6f0db] ring-1 ring-[#6CBE45]/20 transition-transform group-hover:scale-105">
                <Image
                  src={icon}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 object-contain"
                  aria-hidden
                />
              </div>

              <h3 className="relative mt-7 font-heading text-xl font-medium leading-tight text-[#1a3a0a]">
                {title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-stone-600">
                {body}
              </p>

              {/* bottom accent line */}
              <div
                aria-hidden
                className="relative mt-7 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45] transition-all duration-500 group-hover:w-20"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
