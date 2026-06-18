"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";

type Review = {
  quote: string;
  author: string;
  context: string;
  rating: number;
};

const REVIEWS: Review[] = [
  {
    quote:
      "The team at CTHC actually listened. After years of brushing off my fatigue, they ran the right labs and got me on a hormone plan that gave me my energy back.",
    author: "Jamie R.",
    context: "Hormone optimization patient",
    rating: 5,
  },
  {
    quote:
      "I came in for an IV for a brutal flu and felt human again within hours. The clinic is warm, clean, and the nurses are exceptional.",
    author: "Marcus T.",
    context: "IV nutrition patient",
    rating: 5,
  },
  {
    quote:
      "Pellet therapy changed my quality of life. Mood, sleep, libido, all back. I only wish I'd found CTHC years ago.",
    author: "Linda M.",
    context: "Pellet therapy patient",
    rating: 5,
  },
  {
    quote:
      "Truly individualized care. They built a plan around my labs, my lifestyle, and my goals, not a one-size-fits-all protocol.",
    author: "David C.",
    context: "Men's health patient",
    rating: 5,
  },
];

const AUTOPLAY_MS = 6000;

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % REVIEWS.length),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next, paused]);

  const review = REVIEWS[index];

  return (
    <section className="relative w-full overflow-hidden bg-[#1a3a0a] py-24 text-[#FAF6EE] sm:py-28 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 size-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,173,90,0.25), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8BAD5A]">
            What Patients Say
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-4 font-heading font-light leading-[1.1] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Real stories, real{" "}
            <span className="italic text-[#8BAD5A]">results</span>
          </h2>
        </Reveal>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative mx-auto min-h-[260px] max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-12">
            <Quote
              aria-hidden
              className="absolute left-6 top-6 size-10 text-[#8BAD5A]/40"
            />

            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex justify-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#FCB900] text-[#FCB900]" />
                  ))}
                </div>

                <blockquote className="mt-5 font-heading text-xl leading-relaxed text-white sm:text-2xl">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-white/70">
                  <span className="font-semibold text-white">{review.author}</span>
                  <span className="mx-2 text-white/30">·</span>
                  <span>{review.context}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={prev}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#8BAD5A] hover:text-white"
            >
              <ChevronLeft className="size-4" />
            </button>

            <ul className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    aria-label={`Show review ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-[#8BAD5A]"
                        : "w-4 bg-white/25 hover:bg-white/45"
                    }`}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label="Next review"
              onClick={next}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#8BAD5A] hover:text-white"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
