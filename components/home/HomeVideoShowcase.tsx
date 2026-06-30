"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Pause, Play, ShieldCheck, Sparkles, Users } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const POSTER_SRC = "/images/hero/doctor-1.png";
const POSTER_ALT =
  "Inside Central Texas Holistic Care, physician-led personalized consultation";
// Swap the line below with the final clinic film when it's ready.
const VIDEO_SRC = "/videos/hero-loop.mp4";

const TRUST_ITEMS = [
  {
    icon: Users,
    label: "5,000+ patients",
    sub: "Trusted across Central Texas",
  },
  {
    icon: ShieldCheck,
    label: "Board-certified",
    sub: "Physician-led care team",
  },
  {
    icon: Sparkles,
    label: "Whole-body focus",
    sub: "Root-cause, personalized",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function HomeVideoShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {
        /* autoplay/decoding errors silently ignored, placeholder remains */
      });
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      aria-labelledby="home-video-heading"
      className="relative isolate w-full overflow-hidden bg-[#0b1d04] py-24 text-white sm:py-32"
    >
      {/* Ambient brand accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-12 size-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.28), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.22), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.10] mix-blend-overlay"
      >
        <defs>
          <pattern
            id="video-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="#9DD270"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#video-grid)" />
      </svg>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-[#9DD270]" />
            See us in action
          </motion.span>

          <motion.h2
            id="home-video-heading"
            variants={fadeUp}
            className="mt-6 font-heading font-semibold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
          >
            Step inside Central Texas{" "}
            <span className="relative inline-block">
              <span className="italic text-[#C4A862]">Holistic Care</span>
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#C4A862] to-transparent opacity-80"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg"
          >
            A quick look at our clinic, our team, and the personalized
            root-cause care we deliver every day in Killeen.
          </motion.p>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="relative mx-auto mt-14 w-full max-w-5xl"
        >
          {/* Glow halo */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#6CBE45]/25 via-transparent to-[#C4A862]/20 blur-2xl"
          />

          <div className="group relative aspect-video w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1d04] shadow-2xl shadow-black/60 ring-1 ring-white/10">
            {/* Poster image (always rendered behind video) */}
            <Image
              src={POSTER_SRC}
              alt={POSTER_ALT}
              fill
              quality={90}
              sizes="(min-width: 1024px) 960px, 95vw"
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              priority={false}
            />

            {/* Cinematic gradient wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,29,4,0.45) 0%, rgba(11,29,4,0.15) 35%, rgba(11,29,4,0.25) 65%, rgba(11,29,4,0.85) 100%)",
              }}
            />

            {/* Video element (rendered once the user clicks play) */}
            {hasStarted && (
              <video
                ref={videoRef}
                className="absolute inset-0 size-full object-cover"
                playsInline
                preload="metadata"
                controls={false}
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            )}

            {/* Play / pause overlay */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause clinic video" : "Play clinic video"}
              className="absolute inset-0 flex items-center justify-center focus-visible:outline-none"
            >
              <motion.span
                aria-hidden
                animate={
                  isPlaying
                    ? { scale: 0.85, opacity: 0 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.4, ease: EASE }}
                className="relative flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-[#C4A862] via-[#a98a44] to-[#8a6f30] text-[#0b1d04] shadow-2xl shadow-black/50 ring-1 ring-[#C4A862]/60 sm:size-28"
              >
                {/* pulsing rings */}
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#C4A862]/30"
                />
                <span
                  aria-hidden
                  className="absolute -inset-3 -z-10 rounded-full border border-[#C4A862]/40"
                />
                <Play className="ml-1 size-9 fill-current sm:size-10" />
              </motion.span>

              {/* tiny pause indicator when playing */}
              <motion.span
                aria-hidden
                initial={false}
                animate={
                  isPlaying
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12, pointerEvents: "none" }
                }
                transition={{ duration: 0.35, ease: EASE }}
                className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md"
              >
                <Pause className="size-3" /> Pause
              </motion.span>
            </button>

            {/* Top-left "Featured" chip */}
            <span className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-[#9DD270]" />
              Featured film
            </span>

            {/* Top-right "Coming soon" badge (placeholder cue) */}
            <span className="pointer-events-none absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-[#C4A862] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0b1d04] shadow-md">
              Preview
            </span>

            {/* Bottom-left caption */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-8 sm:pb-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C4A862]">
                A look inside · Killeen, TX
              </p>
              <p className="mt-2 max-w-md font-heading text-xl font-semibold leading-tight text-white sm:text-2xl">
                Personalized, root-cause medicine, start to finish.
              </p>
            </div>

            {/* Corner accents */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-3 top-3 size-5 border-l border-t border-[#C4A862]/70"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute right-3 top-3 size-5 border-r border-t border-[#C4A862]/70"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute left-3 bottom-3 size-5 border-b border-l border-[#C4A862]/70"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute right-3 bottom-3 size-5 border-b border-r border-[#C4A862]/70"
            />
          </div>

          {/* Orbiting dashed ring */}
          <motion.svg
            aria-hidden
            viewBox="0 0 100 100"
            className="pointer-events-none absolute -right-6 -top-6 hidden size-20 text-[#9DD270]/60 sm:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
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

        {/* Trust strip */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="mx-auto mt-14 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {TRUST_ITEMS.map(({ icon: Icon, label, sub }) => (
            <motion.li
              key={label}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 backdrop-blur-md"
            >
              <span className="flex size-10 flex-none items-center justify-center rounded-full bg-[#6CBE45]/15 ring-1 ring-[#6CBE45]/25">
                <Icon className="size-5 text-[#9DD270]" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold leading-tight text-white">
                  {label}
                </p>
                <p className="mt-0.5 text-[11px] text-white/65">{sub}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
