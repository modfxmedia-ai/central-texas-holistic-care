"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Heart,
  Leaf,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export default function HomeCTACard() {
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { stiffness: 250, damping: 18, mass: 0.5 });
  const springY = useSpring(btnY, { stiffness: 250, damping: 18, mass: 0.5 });
  const onBtnMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    btnX.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    btnY.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onBtnLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <section className="relative w-full bg-[color:var(--color-cream-soft)] py-24 sm:py-28 lg:py-32">
      {/* Decorative top divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(45,80,22,0.25) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-[#1a3a0a]/20 ring-1 ring-[#6CBE45]/15"
          style={{
            background:
              "linear-gradient(135deg, #0f2706 0%, #1a3a0a 40%, #2D5016 80%, #244010 100%)",
          }}
        >
          {/* Aurora glows */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 12, 0] }}
            transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
            className="pointer-events-none absolute -right-32 -top-28 size-[480px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(108,190,69,0.45), transparent 70%)",
            }}
          />
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.12, 1], x: [0, 18, 0], y: [0, -16, 0] }}
            transition={{
              duration: 16,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1,
            }}
            className="pointer-events-none absolute -bottom-32 -left-24 size-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(196,168,98,0.28), transparent 70%)",
            }}
          />

          {/* Faint dot pattern */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 size-full opacity-[0.10]"
          >
            <defs>
              <pattern
                id="cta-dots"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#FAF6EE" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>

          <div className="relative grid items-stretch gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            {/* ─── LEFT: Visual column ─── */}
            <div className="relative hidden min-h-[460px] lg:block">
              {/* Image with overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-l-[2.5rem]">
                <Image
                  src="/images/source/ready-to-feel-your-best-self.jpeg"
                  alt="A woman with arms outstretched, joyful and ready to feel her best self with care from Central Texas Holistic Care"
                  fill
                  sizes="(min-width: 1024px) 480px, 0px"
                  className="object-cover"
                />
                {/* Forest gradient blends image into the right card body */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(15,39,6,0.35) 0%, rgba(26,58,10,0.55) 50%, rgba(26,58,10,0.95) 100%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,39,6,0) 60%, rgba(15,39,6,0.55) 100%)",
                  }}
                />
              </div>

              {/* "Now Booking" pill */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#FAF6EE] backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#9DD270] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#6CBE45]" />
                </span>
                Now Booking
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute bottom-8 left-8 max-w-[14rem] rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6CBE45] to-[#2D5016] text-[#FAF6EE]">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <div className="font-heading text-2xl font-semibold leading-none text-[#FAF6EE]">
                      ≤ 1 wk
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#FAF6EE]/75">
                      Avg. wait time
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative dashed orbit */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                className="pointer-events-none absolute right-[-3rem] top-[40%] size-32 rounded-full border border-dashed border-[#6CBE45]/40"
              />
              <Sparkles
                aria-hidden
                className="absolute right-6 top-[34%] size-5 text-[#6CBE45]"
              />
            </div>

            {/* ─── RIGHT: Copy + CTAs ─── */}
            <div className="relative px-7 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#6CBE45]" />
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
                  Live Your Best Life
                </p>
                <span className="block h-[2px] flex-1 rounded-full bg-gradient-to-l from-transparent to-[#6CBE45]/30" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-5 font-heading font-semibold leading-[1.05] text-[#FAF6EE]"
                style={{ fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)" }}
              >
                Ready to feel your{" "}
                <span className="bg-gradient-to-r from-[#8BAD5A] via-[#6CBE45] to-[#8BAD5A] bg-clip-text italic text-transparent">
                  best self?
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-[#FAF6EE]/85 sm:text-lg"
              >
                Most patients are seen within one week of reaching out. Book
                online, give us a call, or send a message, we&apos;ll guide
                you through the next step.
              </motion.p>

              {/* Trust micro-row */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-[#FAF6EE]/80"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
                  <ShieldCheck className="size-3 text-[#6CBE45]" /> Most
                  insurance
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
                  <Heart className="size-3 text-[#C4A862]" /> All ages welcome
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
                  <Leaf className="size-3 text-[#9DD270]" /> Whole-person care
                </span>
              </motion.div>

              {/* CTA cluster */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <motion.a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={onBtnMove}
                  onMouseLeave={onBtnLeave}
                  style={{ x: springX, y: springY }}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#FAF6EE] px-7 py-3.5 text-sm font-semibold text-[#1a3a0a] shadow-xl shadow-[#0f2706]/30 ring-1 ring-[#6CBE45]/25 transition-shadow hover:shadow-2xl"
                >
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#6CBE45]/35 to-transparent"
                    initial={{ x: "0%" }}
                    animate={{ x: ["0%", "400%"] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      repeatDelay: 1.6,
                      ease: "easeInOut",
                    }}
                  />
                  <Calendar className="relative size-4" />
                  <span className="relative">Book Appointment</span>
                  <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                </motion.a>

                <a
                  href="tel:+12542132423"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-[#6CBE45] hover:bg-white/10"
                >
                  <Phone className="size-4 text-[#6CBE45]" />
                  (254) 213-2423
                </a>

                <a
                  href="mailto:info@centraltexasholisticcarepllc.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-3 text-sm font-semibold text-[#FAF6EE]/85 underline-offset-4 transition-colors hover:text-[#9DD270] hover:underline"
                >
                  <MessageCircle className="size-4" />
                  Send a Message
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
