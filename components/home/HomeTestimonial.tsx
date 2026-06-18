"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Review = {
  quote: string;
  author: string;
  context: string;
};

const REVIEWS: Review[] = [
  {
    quote:
      "I had been struggling with hot flashes and mood swings for months, but after seeking treatment here, I feel so much better! The holistic approach really made a difference, and I finally feel like myself again.",
    author: "Verified CTHC Patient",
    context: "Hormone & menopause care",
  },
  {
    quote:
      "I was skeptical about acupuncture at first, but after just a few sessions, I noticed a huge improvement in my headaches and overall stress levels. The process is painless and very relaxing!",
    author: "Verified CTHC Patient",
    context: "Holistic & supportive therapy",
  },
];

const AUTOPLAY_MS = 7000;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeTestimonial() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % REVIEWS.length), []);
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
    <section
      className="relative isolate w-full overflow-hidden bg-[#0f2706] py-24 text-[#FAF6EE] sm:py-28 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Soothing looping background video */}
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover"
      >
        <source src="/videos/testimonial-bg.mp4" type="video/mp4" />
      </video>

      {/* Brand-green wash over the footage (keeps copy legible, sets the mood) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f2706]/70 via-[#1a3a0a]/60 to-[#244010]/70"
      />
      {/* Center scrim so the quote stays crisp over the moving footage */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 45%, rgba(15,39,6,0.55) 0%, rgba(15,39,6,0.2) 55%, transparent 100%)",
        }}
      />

      {/* aurora glows */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1], x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute -right-40 -top-32 size-[560px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.32), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.12, 1], x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        className="pointer-events-none absolute -bottom-40 -left-32 size-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.22), transparent 70%)",
        }}
      />

      {/* faint dot grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.08]"
      >
        <defs>
          <pattern id="testi-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#FAF6EE" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#testi-dots)" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#6CBE45]" />
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
              Patient Reviews
            </p>
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#6CBE45]" />
          </div>
          <h2
            className="mx-auto mt-5 max-w-3xl font-heading font-semibold leading-[1.05] text-[#FAF6EE]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Real Words{" "}
            <span className="bg-gradient-to-r from-[#8BAD5A] via-[#6CBE45] to-[#8BAD5A] bg-clip-text italic text-transparent">
              from CTHC Patients.
            </span>
          </h2>
        </div>

        <div className="relative mt-14">
          {/* giant decorative quote mark */}
          <motion.div
            aria-hidden
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2"
          >
            <Quote className="size-20 text-[#6CBE45]/15" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="relative text-center"
            >
              <div className="mx-auto inline-flex items-center gap-1 text-[#C4A862]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote
                className="mx-auto mt-7 max-w-3xl font-heading font-normal italic leading-[1.4] text-white"
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  textShadow: "0 2px 14px rgba(10,22,5,0.85), 0 1px 3px rgba(10,22,5,0.9)",
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* author block */}
              <div className="mt-10 flex items-center justify-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6CBE45] to-[#2D5016] text-sm font-semibold text-[#FAF6EE] ring-1 ring-white/20">
                  ★
                </span>
                <div className="text-left">
                  <div className="text-sm font-semibold tracking-wide text-[#FAF6EE]">
                    {review.author}
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-[#FAF6EE]/65">
                    {review.context}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls + dots */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur-sm transition-all hover:border-[#6CBE45] hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? "h-1.5 w-9 rounded-full bg-gradient-to-r from-[#6CBE45] to-[#8BAD5A] transition-all"
                      : "h-1.5 w-1.5 rounded-full bg-white/30 transition-all hover:bg-white/60"
                  }
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur-sm transition-all hover:border-[#6CBE45] hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
