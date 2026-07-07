"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Insight = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  href: string;
  image: string;
};

const INSIGHTS: Insight[] = [
  {
    category: "Hormone Health",
    title: "BHRT vs Synthetic Hormones: What's the Real Difference?",
    excerpt:
      "Bioidentical hormones are molecularly identical to what your body makes. Here's why that matters for safety, dosing, and how you feel.",
    date: "March 12, 2026",
    read: "6 min read",
    href: "/hormone-therapy/",
    image: "/images/source/bhrt-vs-synthetic-hormones.png",
  },
  {
    category: "IV Therapy",
    title: "What to Expect from Your First Myers' Cocktail",
    excerpt:
      "From the IV blend itself to how you'll feel in the hours and days after, a friendly walkthrough of our most popular drip.",
    date: "March 5, 2026",
    read: "5 min read",
    href: "/iv-nutrition/myers-cocktail/",
    image: "/images/source/myers-cocktail-first-visit.webp",
  },
  {
    category: "Men's Health",
    title: "Low T Symptoms: When Fatigue Means More Than 'Just Tired'",
    excerpt:
      "Stubborn weight, low drive, and brain fog can quietly point to low testosterone. Here's what to ask your provider, and the labs that actually matter.",
    date: "February 27, 2026",
    read: "7 min read",
    href: "/men/testosterone/",
    image: "/images/source/low-t-symptoms.webp",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function HomeInsights() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-28">
      {/* decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-32 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45]" />
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
                Knowledge &amp; Resources
              </p>
            </div>
            <h2
              className="mt-5 font-heading font-light leading-[1.05] text-[#1a3a0a]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Insights for Your{" "}
              <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
                Journey.
              </span>
            </h2>
          </motion.div>
          <Link
            href="/about-us/"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D5016] underline-offset-4 hover:underline"
          >
            View all articles
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {INSIGHTS.map(({ category, title, excerpt, date, read, href, image }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-[color:var(--color-cream-soft)] shadow-sm transition-all hover:border-[#6CBE45]/50 hover:shadow-2xl hover:shadow-[#2D5016]/15"
            >
              {/* Visual */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f0f5eb]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#1a3a0a]/35 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90"
                />
                {/* category chip on image */}
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FAF6EE] ring-1 ring-[#6CBE45]/30 shadow-md">
                  {category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-medium leading-tight text-[#1a3a0a] transition-colors group-hover:text-[#2D5016]">
                  <Link href={href} className="after:absolute after:inset-0">
                    {title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                  {excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-3">
                    <span>{date}</span>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {read}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="block h-[2px] w-0 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45] transition-all duration-500 group-hover:w-12"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
