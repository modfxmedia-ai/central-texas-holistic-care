"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";
const PHONE_TEL = "+12542132423";
const PHONE_DISPLAY = "(254) 213-2423";

const ADDRESS_LINE_1 = "2025 Memory Lane, Suite 300";
const ADDRESS_LINE_2 = "Harker Heights, TX 76548";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("2025 Memory Lane Suite 300, Harker Heights, TX 76548");

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("2025 Memory Lane Suite 300, Harker Heights, TX 76548") +
  "&z=15&output=embed";

const HOURS = [
  { day: "Mon — Fri", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function HomeLocation() {
  return (
    <section
      id="visit-us"
      className="relative overflow-hidden bg-[var(--color-cream-soft)] py-16 sm:py-20"
    >
      {/* Subtle dotted background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,58,10,0.5) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Gold orb glow top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(196,168,98,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header — compact, left aligned with action */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/15 bg-white/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#1a3a0a] backdrop-blur">
              <MapPin className="h-3 w-3" strokeWidth={2.2} />
              Visit Us
            </span>
            <h2
              className="font-heading mt-3 font-semibold leading-[1.1] text-[#0f2706]"
              style={{
                fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Right here in{" "}
              <span className="italic" style={{ color: "#2D5016" }}>
                Harker Heights.
              </span>
            </h2>
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#1a3a0a]/20 bg-white px-4 py-2 text-sm font-medium text-[#1a3a0a] transition hover:border-[#1a3a0a]/40 hover:bg-[#1a3a0a] hover:text-white"
          >
            <Navigation className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span>Get Directions</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.2}
            />
          </a>
        </motion.div>

        {/* Card — compact split: map on left, info on right */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-3xl border border-[#1a3a0a]/12 bg-white shadow-[0_20px_50px_-25px_rgba(15,39,6,0.3)]"
        >
          <div className="grid lg:grid-cols-5">
            {/* MAP — 3/5 */}
            <div className="relative lg:col-span-3">
              <div className="relative h-[260px] w-full sm:h-[300px] lg:h-full lg:min-h-[340px]">
                <iframe
                  title="Map of Central Texas Holistic Care"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[15%] saturate-[0.95]"
                  style={{ border: 0 }}
                  allowFullScreen
                />
                {/* Live pill — top-left */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#0f2706]/90 px-3 py-1.5 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9DD270] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6CBE45]" />
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/90">
                    Open Today
                  </span>
                </div>
              </div>
            </div>

            {/* INFO — 2/5 */}
            <div className="relative bg-gradient-to-br from-[#0f2706] via-[#1a3a0a] to-[#2D5016] p-6 text-white sm:p-7 lg:col-span-2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-dashed border-white/15"
              />

              <div className="relative">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[#6CBE45]/20 ring-1 ring-[#9DD270]/40">
                    <MapPin
                      className="h-4 w-4 text-[#9DD270]"
                      strokeWidth={2.2}
                    />
                  </div>
                  <div>
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#9DD270]">
                      Our Clinic
                    </p>
                    <p className="font-heading mt-1 text-[1.05rem] font-semibold leading-tight text-white">
                      {ADDRESS_LINE_1}
                    </p>
                    <p className="mt-0.5 text-sm text-white/75">
                      {ADDRESS_LINE_2}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Hours */}
                <div>
                  <div className="mb-2.5 flex items-center gap-2">
                    <Clock
                      className="h-3.5 w-3.5 text-[#9DD270]"
                      strokeWidth={2.2}
                    />
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#9DD270]">
                      Clinic Hours
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {HOURS.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between gap-3 text-[0.82rem]"
                      >
                        <span className="text-white/65">{h.day}</span>
                        <span className="font-medium text-white">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#6CBE45] px-4 py-2.5 text-xs font-semibold text-[#0f2706] shadow-[0_10px_24px_-10px_rgba(108,190,69,0.6)] transition hover:bg-[#9DD270]"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
                    <span>Book a Visit</span>
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2.5 text-xs font-medium text-white backdrop-blur transition hover:bg-white/10"
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={2.2} />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer service area line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-center text-xs text-[#1a3a0a]/55 sm:text-sm"
        >
          Serving{" "}
          <span className="font-medium text-[#1a3a0a]">Harker Heights</span>,{" "}
          <span className="font-medium text-[#1a3a0a]">Killeen</span>,{" "}
          <span className="font-medium text-[#1a3a0a]">Belton</span>,{" "}
          <span className="font-medium text-[#1a3a0a]">Temple</span>,{" "}
          <span className="font-medium text-[#1a3a0a]">Copperas Cove</span>, and
          the greater Fort Cavazos area.
        </motion.p>
      </div>
    </section>
  );
}
