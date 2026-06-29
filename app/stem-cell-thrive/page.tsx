import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Activity,
  ArrowRight,
  Atom,
  Beaker,
  CalendarCheck,
  Check,
  ClipboardList,
  Dna,
  FlaskConical,
  Footprints,
  HeartPulse,
  Leaf,
  Microscope,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Timer,
  TrendingUp,
  Waves,
} from "lucide-react";

import { Accordion, type AccordionItem } from "@/components/ui";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/stem-cell-thrive/`;
const BOOKING_URL = "https://centraltexasholistic.intakeq.com/booking";
const PHONE_DISPLAY = "(254) 213-2423";
const PHONE_TEL = "+12542132423";

const PAGE_TITLE =
  "Stem Cell & Thrive Regenerative Therapy | Killeen, TX | CTHC";
const PAGE_DESCRIPTION =
  "Regenerative stem cell therapy and the Thrive protocol at Central Texas Holistic Care in Killeen, TX. Physician-supervised, root-cause care to support joint, tissue, and whole-body recovery.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "website",
    siteName: "Central Texas Holistic Care",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function StemCellThrivePage() {
  return (
    <>
      <HeroSection />
      <TrustTrio />
      <WhatItIsSection />
      <ThriveProtocolSection />
      <ConditionsSection />
      <WhyCTHCSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Hero                                      */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] py-24 sm:py-28 lg:py-32">
      {/* botanical leaf grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.10]"
      >
        <defs>
          <pattern
            id="sct-hero-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M56 0 L0 0 0 56"
              fill="none"
              stroke="#C4A862"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sct-hero-grid)" />
      </svg>
      {/* spotlights */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 size-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.28), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 size-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.22), transparent 72%)",
        }}
      />
      {/* gold hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-[#C4A862]/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-16 h-px bg-gradient-to-r from-transparent via-[#C4A862]/30 to-transparent"
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center justify-center gap-2 text-[12px] text-white/65"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[#C4A862]"
          >
            Home
          </Link>
          <span aria-hidden className="text-white/30">
            /
          </span>
          <span className="text-white/90">Stem Cell &amp; Thrive</span>
        </nav>

        <div className="flex items-center justify-center gap-3">
          <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#C4A862]" />
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#C4A862]">
            Regenerative &middot; Thrive Protocol
          </p>
          <span className="block h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#C4A862]" />
        </div>

        <h1
          id="page-hero-title"
          className="mt-6 font-heading font-semibold leading-[1.05] text-white"
          style={{ fontSize: "clamp(2.25rem, 5.2vw, 4rem)" }}
        >
          Heal where it starts —{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#9DD270] via-[#C4A862] to-[#9DD270] bg-clip-text italic text-transparent">
              at the cellular level.
            </span>
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-transparent via-[#C4A862]/70 to-transparent"
            />
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">
          Physician-supervised regenerative therapy paired with the{" "}
          <span className="font-semibold text-white">Thrive protocol</span> — a
          root-cause approach that supports joint, tissue, and whole-body
          recovery. Non-surgical, lab-guided, and built around your story.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#C4A862] via-[#8a6f30] to-[#5d4a1f] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#0f2706]/40 ring-1 ring-[#C4A862]/40 transition hover:shadow-2xl hover:shadow-[#C4A862]/30"
          >
            <CalendarCheck className="size-4" />
            Book a Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#C4A862]/60 hover:bg-white/10"
          >
            <Phone className="size-4 text-[#C4A862]" />
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur">
          <Sparkles className="size-3 text-[#C4A862]" />
          Physician-led &middot; Killeen, TX &middot; Same-week visits
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Trust trio                                   */
/* -------------------------------------------------------------------------- */

const TRUST_FEATURES = [
  {
    icon: Stethoscope,
    title: "Physician-led",
    body: "Every regenerative plan is designed and supervised by our medical team — not a kiosk or franchise.",
  },
  {
    icon: Microscope,
    title: "Lab-guided",
    body: "Bloodwork, inflammation markers, and imaging guide the protocol so you treat the cause, not the symptom.",
  },
  {
    icon: ShieldCheck,
    title: "Non-surgical",
    body: "Injection-based, minimally invasive care designed to support your body's own repair systems.",
  },
] as const;

function TrustTrio() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[#C4A862]/20 bg-gradient-to-b from-white to-[#faf6ec] p-7 transition-shadow hover:shadow-[0_20px_60px_-30px_rgba(15,39,6,0.35)]"
            >
              {/* gold corner ticks */}
              <span
                aria-hidden
                className="absolute left-3 top-3 size-4 border-l border-t border-[#C4A862]/50"
              />
              <span
                aria-hidden
                className="absolute bottom-3 right-3 size-4 border-b border-r border-[#C4A862]/50"
              />

              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a0a] to-[#0f2706] text-[#C4A862] shadow-md shadow-[#0f2706]/30">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-[#1a3a0a]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {body}
              </p>
              <span
                aria-hidden
                className="mt-5 block h-px w-full bg-gradient-to-r from-[#1a3a0a] via-[#6CBE45] to-[#C4A862] opacity-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              What it is                                     */
/* -------------------------------------------------------------------------- */

function WhatItIsSection() {
  const bullets = [
    {
      icon: Atom,
      title: "Mesenchymal & exosome therapy",
      body: "Concentrated regenerative signals that orchestrate tissue repair, modulate inflammation, and recruit your body's own repair cells.",
    },
    {
      icon: Syringe,
      title: "Precision injections",
      body: "Ultrasound- or landmark-guided delivery to joints, tendons, scalp, or specific tissues — not a one-size-fits-all infusion.",
    },
    {
      icon: Recycle,
      title: "Optimized recovery window",
      body: "Paired with peptide and nutrient protocols to give the treatment its best chance to take hold.",
    },
  ] as const;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#faf6ec] via-[#f5efd9] to-[#ece4d0] py-20 sm:py-24">
      {/* subtle gold dot grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.15]"
      >
        <defs>
          <pattern
            id="sct-dots"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#C4A862" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sct-dots)" />
      </svg>
      {/* gold hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/35 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
          {/* Visual column */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-[#C4A862]/30 shadow-[0_40px_100px_-40px_rgba(15,39,6,0.45)]">
              <Image
                src="/images/stem-cell/regenerative-medicine.webp"
                alt="Regenerative medicine — cellular healing visualization"
                fill
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 60vw, 90vw"
                className="object-cover"
                priority
              />
              {/* readability scrim */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1d04]/70 via-[#0b1d04]/10 to-transparent"
              />

              {/* DNA mark */}
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-[#C4A862]/40 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4A862] backdrop-blur">
                <Dna className="size-3" />
                Cellular
              </div>

              {/* floating chip */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-left text-white backdrop-blur">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4A862]">
                  <HeartPulse className="size-3" />
                  Whole-person
                </div>
                <p className="mt-2 text-sm leading-snug">
                  Your labs, your imaging, your story — orchestrated into a
                  single regenerative plan.
                </p>
              </div>
            </div>
          </div>

          {/* Copy column */}
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-8 rounded-full bg-[#C4A862]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#8a6f30]">
                What it is
              </p>
            </div>
            <h2
              className="mt-4 font-heading font-semibold leading-[1.1] text-[#0f2706]"
              style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)" }}
            >
              Regenerative care that works{" "}
              <span className="italic text-[#8a6f30]">with</span> your body —
              not around it.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-stone-700">
              Stem cell and exosome therapy use the same signalling pathways
              your body already relies on to heal — concentrated and delivered
              where you need them. Combined with the{" "}
              <span className="font-semibold text-[#1a3a0a]">
                Thrive protocol
              </span>
              , we treat the whole environment around the injury or symptom so
              the result actually lasts.
            </p>

            <ul className="mt-7 space-y-5">
              {bullets.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#1a3a0a] shadow-[0_8px_24px_-12px_rgba(15,39,6,0.35)] ring-1 ring-[#C4A862]/30">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a3a0a]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Thrive protocol                                  */
/* -------------------------------------------------------------------------- */

const THRIVE_STEPS = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Discovery consult",
    body: "We sit down to map your goals, history, and what you've already tried — no rushed intake forms.",
  },
  {
    n: "02",
    icon: FlaskConical,
    title: "Labs & imaging",
    body: "Hormonal panels, inflammation markers, and targeted imaging to confirm the right treatment for the right tissue.",
  },
  {
    n: "03",
    icon: Syringe,
    title: "Regenerative treatment",
    body: "Mesenchymal stem cell or exosome delivery to the precise site — joint, tendon, scalp, or systemic.",
  },
  {
    n: "04",
    icon: TrendingUp,
    title: "Recovery & optimization",
    body: "Peptides, nutrient IVs, and lifestyle scripting to keep the regenerative signal working long after the visit.",
  },
] as const;

function ThriveProtocolSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/15 bg-[#f0f5eb] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1a3a0a]">
            <Leaf className="size-3.5 text-[#6CBE45]" />
            The Thrive Protocol
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.1] text-[#0f2706]"
            style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)" }}
          >
            A clear, four-step path —{" "}
            <span className="italic text-[#8a6f30]">designed around you.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-stone-600">
            From first consult to long-term optimization, every step is paced,
            documented, and supervised by our physician team.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {THRIVE_STEPS.map(({ n, icon: Icon, title, body }, idx) => (
            <li
              key={n}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-b from-white to-[#faf6ec] p-6 transition-all hover:-translate-y-1 hover:border-[#C4A862]/40 hover:shadow-[0_24px_60px_-30px_rgba(15,39,6,0.35)]"
            >
              {/* connector line (desktop) */}
              {idx < THRIVE_STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-[#C4A862]/60 to-transparent lg:block"
                />
              )}

              <div className="flex items-center justify-between">
                <span className="font-heading text-3xl font-semibold tracking-tight text-[#C4A862]">
                  {n}
                </span>
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#1a3a0a] text-[#9DD270] shadow-md shadow-[#1a3a0a]/30">
                  <Icon className="size-5" />
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#1a3a0a]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {body}
              </p>
              <span
                aria-hidden
                className="mt-5 block h-px w-12 bg-gradient-to-r from-[#1a3a0a] to-[#C4A862]"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             Conditions                                      */
/* -------------------------------------------------------------------------- */

const CONDITIONS = [
  { icon: Footprints, label: "Knee, hip & shoulder pain" },
  { icon: Activity, label: "Sports & overuse injuries" },
  { icon: Waves, label: "Tendinopathy & ligament strain" },
  { icon: Beaker, label: "Osteoarthritis support" },
  { icon: HeartPulse, label: "Post-surgical recovery" },
  { icon: Timer, label: "Chronic inflammation & fatigue" },
  { icon: Dna, label: "Hair restoration (PRP / exosomes)" },
  { icon: Sparkles, label: "Sexual wellness & intimacy" },
] as const;

function ConditionsSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] py-20 sm:py-24">
      {/* grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.08]"
      >
        <defs>
          <pattern
            id="sct-cond-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0 L0 0 0 48"
              fill="none"
              stroke="#C4A862"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sct-cond-grid)" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.2), transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/30 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C4A862]/40 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C4A862] backdrop-blur">
            <Atom className="size-3.5" />
            What we help with
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.1] text-white"
            style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)" }}
          >
            Conditions our regenerative program{" "}
            <span className="italic text-[#C4A862]">supports.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-stone-300">
            Every case is screened individually. If we are not the right fit
            for your case, we&apos;ll tell you and point you toward who is.
          </p>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CONDITIONS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#C4A862]/40 hover:bg-white/[0.07]"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0b1d04] text-[#9DD270] ring-1 ring-[#C4A862]/30">
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-medium text-white">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Why CTHC                                       */
/* -------------------------------------------------------------------------- */

const WHY = [
  {
    icon: Stethoscope,
    title: "Physician-supervised, every visit",
    body: "Your treatment is designed, performed, and followed up by our medical team — not delegated to a tech.",
  },
  {
    icon: Microscope,
    title: "Lab + imaging guided",
    body: "We confirm what we are treating before we treat it. No guesswork, no marketing-only diagnoses.",
  },
  {
    icon: Leaf,
    title: "Root-cause, holistic lens",
    body: "Hormones, inflammation, sleep, and lifestyle are all considered — because recovery depends on the whole picture.",
  },
  {
    icon: ShieldCheck,
    title: "Honest expectations",
    body: "You'll hear a realistic timeline and outcome window up front — and we'll tell you if you're not a candidate.",
  },
] as const;

function WhyCTHCSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#ece4d0] via-[#F0EBE0] to-[#e8dfc6] py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/55 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.22), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C4A862]/40 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1a3a0a] shadow-sm">
            <Sparkles className="size-3.5 text-[#6CBE45]" />
            Why CTHC
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.1] text-[#0f2706]"
            style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)" }}
          >
            Regenerative care, done the way{" "}
            <span className="italic text-[#8a6f30]">it should be.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {WHY.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl border border-[#C4A862]/30 bg-white p-7 shadow-[0_18px_50px_-30px_rgba(15,39,6,0.25)]"
            >
              <span
                aria-hidden
                className="absolute left-3 top-3 size-4 border-l border-t border-[#C4A862]/50"
              />
              <span
                aria-hidden
                className="absolute bottom-3 right-3 size-4 border-b border-r border-[#C4A862]/50"
              />
              <div className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a0a] to-[#0f2706] text-[#C4A862] shadow-md shadow-[#1a3a0a]/30">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#1a3a0a]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   FAQ                                       */
/* -------------------------------------------------------------------------- */

const FAQ_ITEMS: AccordionItem[] = [
  {
    value: "what-is",
    title: "What exactly is stem cell therapy?",
    content:
      "Regenerative therapy uses mesenchymal stem cells, growth factors, and exosomes — naturally occurring signalling agents — to support your body's own repair pathways. It is non-surgical and delivered by precise injection.",
  },
  {
    value: "how-long",
    title: "How long until I notice a difference?",
    content:
      "Most patients begin to feel changes within 4–8 weeks, with continued improvement over 3–6 months as tissue remodels. Results depend on the condition, severity, and how well the Thrive protocol is followed.",
  },
  {
    value: "candidate",
    title: "Am I a candidate?",
    content:
      "We screen every case individually. Joint pain, tendon injuries, post-surgical recovery, chronic inflammation, hair restoration, and sexual wellness are common reasons patients qualify. We will be honest if you are not a fit.",
  },
  {
    value: "downtime",
    title: "Is there downtime?",
    content:
      "Most patients return to normal activity within 24–48 hours. We provide a clear recovery script with activity, supplement, and follow-up guidance.",
  },
  {
    value: "thrive",
    title: "What is the Thrive protocol?",
    content:
      "Thrive is our root-cause framework that pairs the regenerative treatment with hormone, nutrient, peptide, and lifestyle optimization — so the result actually lasts.",
  },
  {
    value: "cost",
    title: "How much does it cost — and is financing available?",
    content:
      "Plans are quoted after your discovery consult since the protocol is personalized. We offer 0% APR financing through Cherry and Denefits — most patients are approved within 60 seconds with no hard credit check.",
  },
];

function FAQSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/15 bg-[#f0f5eb] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1a3a0a]">
            FAQ
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.1] text-[#0f2706]"
            style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)" }}
          >
            Real answers to{" "}
            <span className="italic text-[#8a6f30]">real questions.</span>
          </h2>
        </div>
        <div className="mt-10">
          <Accordion items={FAQ_ITEMS} defaultValue="what-is" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Final CTA                                      */
/* -------------------------------------------------------------------------- */

function FinalCTASection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] py-20 sm:py-24">
      {/* gold ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4A862]/55 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 size-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 size-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.22), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C4A862]/40 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C4A862] backdrop-blur">
          <CalendarCheck className="size-3.5" />
          Ready when you are
        </div>
        <h2
          className="mt-5 font-heading font-semibold leading-[1.05] text-white"
          style={{ fontSize: "clamp(1.85rem, 4.2vw, 3rem)" }}
        >
          Book your regenerative{" "}
          <span className="italic text-[#C4A862]">consult.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-stone-300">
          One conversation. Honest expectations. A clear plan to get you back
          to the life you want.
        </p>
        <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-white/80">
          {[
            "Physician-led",
            "Same-week visits",
            "0% APR financing available",
          ].map((label) => (
            <li key={label} className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-[#9DD270]" />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#C4A862] via-[#8a6f30] to-[#5d4a1f] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#0f2706]/40 ring-1 ring-[#C4A862]/40 transition hover:shadow-2xl hover:shadow-[#C4A862]/30"
          >
            <CalendarCheck className="size-4" />
            Book a Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#C4A862]/60 hover:bg-white/10"
          >
            <Phone className="size-4 text-[#C4A862]" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
