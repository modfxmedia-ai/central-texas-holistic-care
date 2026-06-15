"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Status = "approved" | "in-process" | "closed";
type Carrier = { name: string; status: Status; note?: string };

const CARRIERS: Carrier[] = [
  { name: "Medicare (Group)", status: "approved" },
  { name: "Medicare (Individual)", status: "approved" },
  { name: "Cigna", status: "approved" },
  { name: "Superior Health Plan", status: "approved" },
  { name: "Aetna", status: "approved" },
  { name: "UnitedHealthcare", status: "approved" },
  { name: "BCBS Texas", status: "approved" },
  { name: "Humana", status: "approved" },
  { name: "Multiplan", status: "approved" },
  { name: "Amerigroup", status: "approved" },
  { name: "Medicaid (Group)", status: "approved" },
  { name: "Medicaid (Individual)", status: "approved" },
  { name: "Molina", status: "approved" },
  { name: "Aetna Better Health TX", status: "approved" },
  { name: "Tricare West", status: "in-process", note: "Credentialing underway" },
  { name: "Parkland", status: "closed", note: "Bell County not accepting applications" },
  { name: "Oscar", status: "closed", note: "Panel closed" },
  { name: "Baylor Scott & White", status: "closed", note: "Panel closed" },
];

const APPROVED = CARRIERS.filter((c) => c.status === "approved");
const IN_PROCESS = CARRIERS.filter((c) => c.status === "in-process");

const CHERRY_URL = "https://withcherry.com/";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeInsurance() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.18), transparent 70%)",
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
        {/* ─── Rolling carrier banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative mb-14 sm:mb-16"
        >
          {/* heading chip floating over the banner (outside the overflow-hidden marquee) */}
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6CBE45]/40 bg-[#0f2706] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FAF6EE] shadow-md">
              <ShieldCheck className="size-3 text-[#6CBE45]" />
              In-Network Carriers
            </span>
          </div>

          {/* The actual scrolling marquee — overflow-hidden lives here, not the wrapper */}
          <div className="relative overflow-hidden rounded-2xl border border-[#1a3a0a]/12 bg-gradient-to-br from-[#0f2706] via-[#1a3a0a] to-[#0f2706] py-4 shadow-lg shadow-[#1a3a0a]/15">
            {/* edge fade masks */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0f2706] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0f2706] to-transparent"
            />

            <motion.div
              className="flex shrink-0 items-center gap-10 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 42, ease: "linear", repeat: Infinity }}
            >
              {[...APPROVED, ...IN_PROCESS, ...APPROVED, ...IN_PROCESS].map(
                (c, i) => (
                  <span
                    key={`${c.name}-${i}`}
                    className="flex items-center gap-3 text-sm font-medium tracking-wide text-[#FAF6EE]/90"
                  >
                    <CheckCircle2
                      className={`size-4 ${
                        c.status === "approved"
                          ? "text-[#6CBE45]"
                          : "text-[#C4A862]"
                      }`}
                      strokeWidth={2.4}
                    />
                    <span className="font-heading text-base font-medium">
                      {c.name}
                    </span>
                    <span className="text-[#6CBE45]/70">✦</span>
                  </span>
                ),
              )}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid items-stretch gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* ─── Left: copy ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45]" />
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
                Insurance &amp; Payment
              </p>
            </div>
            <h2
              className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              We Accept Most{" "}
              <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
                Major Insurers.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
              We&apos;re in-network with{" "}
              <span className="font-semibold text-[#1a3a0a]">
                {APPROVED.length} major payers
              </span>{" "}
              — including Medicare, Medicaid, BCBS Texas, Aetna, UHC, Cigna,
              Humana, and more. Transparent self-pay rates and 0% APR financing
              through Cherry round out the picture.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-stone-700">
              {[
                "Most commercial PPO &amp; HMO plans accepted",
                "Medicare &amp; Medicaid (Group + Individual)",
                "Transparent self-pay pricing",
                "Pay over time with 0% APR via Cherry",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-[#6CBE45]/20 hover:bg-[#f0f5eb]/50"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6CBE45] to-[#2D5016] text-white">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/payment-plans/"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/25 transition-shadow hover:shadow-2xl hover:shadow-[#6CBE45]/20"
              >
                View Payment Plans
              </Link>
              <a
                href={CHERRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#1a3a0a] transition-colors hover:border-[#6CBE45] hover:bg-[#f0f5eb]"
              >
                <Sparkles className="size-4 text-[#C4A862]" />
                See If You Qualify
              </a>
            </div>

            <p className="mt-6 text-xs text-stone-500">
              Not sure?{" "}
              <a
                href="tel:+12542132423"
                className="inline-flex items-center gap-1 font-semibold text-[#2D5016] hover:underline"
              >
                <Phone className="size-3" />
                Call (254) 213-2423
              </a>
            </p>
          </motion.div>

          {/* ─── Right: motion-graphic insurance visual ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="relative isolate flex min-h-[520px] items-center justify-center"
            style={{ perspective: 1200 }}
          >
            {/* Inner stage that all decorations anchor to */}
            <div className="relative mx-auto w-full max-w-[520px]">
              {/* Soft elliptical halo behind image */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[78%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(108,190,69,0.32), rgba(108,190,69,0) 70%)",
                  filter: "blur(8px)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.55, 0.85, 0.55],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Slow orbiting dashed ring */}
              <motion.svg
                aria-hidden
                viewBox="0 0 400 400"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[112%] -translate-x-1/2 -translate-y-1/2 text-[#6CBE45]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              >
                <ellipse
                  cx="200"
                  cy="200"
                  rx="190"
                  ry="150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 8"
                />
                <circle cx="390" cy="200" r="3.5" fill="#6CBE45" />
              </motion.svg>

              {/* Floor reflection */}
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-2 left-1/2 -z-10 h-6 w-[70%] -translate-x-1/2 rounded-[50%] bg-[#1a3a0a]/15 blur-2xl"
              />

              {/* Insurance image */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
                className="relative z-10 w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full"
                >
                  <Image
                    src="/images/source/insurance.png"
                    alt="Accepted insurance carriers — BCBS Texas, Aetna, UnitedHealthcare, Medicare, Cigna and more"
                    width={1000}
                    height={700}
                    className="relative z-0 block h-auto w-full"
                    style={{
                      filter:
                        "drop-shadow(0 18px 28px rgba(26,58,10,0.18)) drop-shadow(0 6px 10px rgba(26,58,10,0.10))",
                    }}
                    priority={false}
                  />

                  {/* shimmer beam over the image */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
                    initial={{ x: "-110%" }}
                    animate={{ x: "110%" }}
                    transition={{
                      duration: 2.8,
                      ease: "easeInOut",
                      delay: 0.6,
                      repeat: Infinity,
                      repeatDelay: 3.4,
                    }}
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)",
                    }}
                  />
                </motion.div>

                {/* Floating carrier mini-pills — hug the image edges */}
                {[
                  {
                    label: "BCBS Texas",
                    pos: "left-[4%] top-[14%]",
                    delay: 0.4,
                  },
                  {
                    label: "Aetna",
                    pos: "right-[2%] top-[6%]",
                    delay: 0.55,
                  },
                  {
                    label: "United",
                    pos: "right-[-2%] bottom-[28%]",
                    delay: 0.7,
                  },
                  {
                    label: "Medicare",
                    pos: "left-[8%] bottom-[10%]",
                    delay: 0.85,
                  },
                ].map((p) => (
                  <motion.span
                    key={p.label}
                    initial={{ opacity: 0, scale: 0.6, y: 12 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                      delay: p.delay,
                    }}
                    className={`pointer-events-none absolute z-20 ${p.pos}`}
                  >
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 4 + p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay,
                      }}
                      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#6CBE45]/30 bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#1a3a0a] shadow-[0_8px_20px_-8px_rgba(26,58,10,0.35)] backdrop-blur"
                    >
                      <CheckCircle2
                        className="size-3 text-[#2D5016]"
                        strokeWidth={2.6}
                      />
                      {p.label}
                    </motion.span>
                  </motion.span>
                ))}

                {/* Verified badge — anchored to image, top-right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    ease: EASE,
                    delay: 0.55,
                    type: "spring",
                  }}
                  className="absolute -right-3 -top-3 z-30"
                >
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FAF6EE] shadow-lg shadow-[#1a3a0a]/30 ring-1 ring-[#6CBE45]/40"
                  >
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{
                        background:
                          "radial-gradient(closest-side, rgba(108,190,69,0.65), transparent 70%)",
                      }}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0.9, 0.5],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <CheckCircle2 className="size-3 text-[#6CBE45]" />
                    Verified
                  </motion.span>
                </motion.div>

                {/* Coverage meter — anchored to image, bottom-left */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
                  className="absolute -bottom-4 -left-3 z-30 flex items-center gap-2.5 rounded-2xl border border-[#1a3a0a]/10 bg-white/95 px-3 py-2 shadow-[0_12px_28px_-10px_rgba(26,58,10,0.35)] backdrop-blur"
                >
                  <div className="relative size-9">
                    <svg viewBox="0 0 36 36" className="size-9 -rotate-90">
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#1a3a0a"
                        strokeOpacity="0.12"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#6CBE45"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 14}
                        initial={{ strokeDashoffset: 2 * Math.PI * 14 }}
                        whileInView={{
                          strokeDashoffset: 2 * Math.PI * 14 * 0.06,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.6,
                          ease: "easeOut",
                          delay: 0.7,
                        }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-heading text-[10px] font-semibold text-[#1a3a0a]">
                      94%
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8BAD5A]">
                      Avg. Coverage
                    </div>
                    <div className="text-xs font-semibold text-[#1a3a0a]">
                      Across {APPROVED.length} carriers
                    </div>
                  </div>
                </motion.div>

                {/* Tiny shield accent — replaces stray sparkles */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute right-[6%] bottom-[6%] z-20 flex size-7 items-center justify-center rounded-full bg-[#1a3a0a] ring-2 ring-white shadow-md"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ShieldCheck className="size-3.5 text-[#9DD270]" />
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
