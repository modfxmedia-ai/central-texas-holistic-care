import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  Clock,
  CreditCard,
  Heart,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/get-financed/`;
const AUTH_TOKEN = "37c3e7c97784090c58141af8912034a5";
const DENEFITS_PREAPPROVAL =
  "https://request.denefits.com/pre-approval-application/e617b16ea40175bea036bbf4f2267c48";

const PAGE_TITLE =
  "Get Financed | 0% APR No Credit Check Plans via Denefits | CTHC";
const PAGE_DESCRIPTION =
  "Pay over time for your wellness, hormone, weight-loss, and TRT programs at Central Texas Holistic Care. No credit checks, instant approval, and flexible 3-24 month plans through Denefits.";

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

const denefits = (code: string) =>
  `https://request.denefits.com/finance-panel?product_code=${code}&auth_token=${AUTH_TOKEN}`;

type Program = {
  name: string;
  price: string;
  audience: "metabolic" | "women" | "men";
  features: readonly string[];
  durations: ReadonlyArray<{ months: 3 | 6 | 9 | 12 | 24; code: string }>;
  highlight?: boolean;
};

const PROGRAMS: readonly Program[] = [
  {
    name: "Foundation Program",
    price: "$300",
    audience: "metabolic",
    features: [
      "GLP-1 therapy at starter dosing (Semaglutide with B12 or Tirzepatide)",
      "Monthly provider check-in",
      "Basic nutrition guidance",
      "Messaging support between visits",
    ],
    durations: [
      { months: 3, code: "pc_1ec4b000ead2" },
      { months: 6, code: "pc_5ea2bd66b5df" },
      { months: 9, code: "pc_d78266c6020c" },
      { months: 12, code: "pc_009439132347" },
      { months: 24, code: "pc_b056b67b8580" },
    ],
  },
  {
    name: "Accelerate Program",
    price: "$499",
    audience: "metabolic",
    highlight: true,
    features: [
      "GLP-1 therapy at optimized dosing or alternative peptide",
      "Lipo-C or B12 injections included",
      "Monthly provider check-ins",
      "Metabolic guidance with in-office lab options",
      "Supplement recommendations, samples provided when available",
    ],
    durations: [
      { months: 3, code: "pc_892ea45b1ea5" },
      { months: 6, code: "pc_2931dff24224" },
      { months: 9, code: "pc_93d203b5c48f" },
      { months: 12, code: "pc_3713cd235918" },
      { months: 24, code: "pc_98840af594a4" },
    ],
  },
  {
    name: "Elite Metabolic Reset",
    price: "$899",
    audience: "metabolic",
    features: [
      "GLP-1 therapy at any dose",
      "NAD+ or MIC injections",
      "Advanced metabolic support",
      "Hormone evaluation if clinically indicated",
      "Priority provider access",
      "Full optimization strategy personalized to your goals",
    ],
    durations: [
      { months: 3, code: "pc_d1b3c538d160" },
      { months: 6, code: "pc_4a03090b1b7c" },
      { months: 9, code: "pc_b3b7cf7d0717" },
      { months: 12, code: "pc_da74a36b47da" },
    ],
  },
  {
    name: "Women's Balance",
    price: "$300",
    audience: "women",
    features: [
      "Estrogen and Progesterone support, topical or oral",
      "Symptom-based optimization",
      "Lab monitoring included",
      "Sleep and mood support",
      "Provider follow-ups",
      "Welcome gift bag included",
    ],
    durations: [
      { months: 3, code: "pc_b441c845ca17" },
      { months: 6, code: "pc_9164d3c1ed8f" },
      { months: 9, code: "pc_e8702a4a5e30" },
      { months: 12, code: "pc_91caae629a94" },
      { months: 24, code: "pc_6586e0ad1136" },
    ],
  },
  {
    name: "Women's Optimize",
    price: "$549",
    audience: "women",
    features: [
      "Full hormone balancing, Estrogen, Progesterone, and Testosterone",
      "Metabolic support with low dose GLP or berberine",
      "B12 shots included",
      "Lab tracking",
      "Provider follow-ups",
      "Welcome gift bag included",
    ],
    durations: [
      { months: 3, code: "pc_2e326e07e17b" },
      { months: 6, code: "pc_6d5043b399e4" },
      { months: 12, code: "pc_83d9efb589e5" },
      { months: 24, code: "pc_a08bc5e75499" },
    ],
  },
  {
    name: "Women's Full Hormone Reset",
    price: "$649",
    audience: "women",
    highlight: true,
    features: [
      "Complete hormone optimization, Estrogen, Progesterone, and Testosterone",
      "DHEA and thyroid support",
      "Peptide therapy if clinically indicated, Sermorelin, Ipamorelin, Tesamorelin",
      "Metabolic support with low dose GLP or berberine",
      "B12 shots included",
      "Provider follow-ups",
      "Welcome gift bag included",
    ],
    durations: [
      { months: 3, code: "pc_83275d770ec4" },
      { months: 6, code: "pc_ce6f3b0ce0ce" },
      { months: 9, code: "pc_18dd21cdbc6d" },
      { months: 12, code: "pc_08308a2f6b7e" },
      { months: 24, code: "pc_316d8a1419fa" },
    ],
  },
  {
    name: "Men's TRT Optimized",
    price: "$300",
    audience: "men",
    features: [
      "Testosterone therapy, injection or topical",
      "Lab monitoring included",
      "Estrogen management with Anastrozole, if needed",
      "DHEA support if clinically indicated",
      "Provider follow-ups",
      "Welcome gift bag included",
    ],
    durations: [
      { months: 3, code: "pc_2e6906470e9a" },
      { months: 6, code: "pc_27952222dc80" },
      { months: 9, code: "pc_dbb623c8c541" },
      { months: 12, code: "pc_c14b3a990cc5" },
      { months: 24, code: "pc_1b309b9de29c" },
    ],
  },
  {
    name: "Men's TRT Elite Performance",
    price: "$549",
    audience: "men",
    highlight: true,
    features: [
      "Advanced testosterone optimization, injection or topical",
      "Peptide therapy, Sermorelin, Ipamorelin, Tesamorelin",
      "NAD+, MOTS-c, adrenal, and DHEA support",
      "Provider follow-ups",
      "Welcome gift bag included",
    ],
    durations: [
      { months: 3, code: "pc_0af55c287b55" },
      { months: 6, code: "pc_73dad0ea6483" },
      { months: 9, code: "pc_050cd2eda4cf" },
      { months: 12, code: "pc_2cdc0def993e" },
      { months: 24, code: "pc_54d0f3a5774f" },
    ],
  },
];

const AUDIENCE_META: Record<
  Program["audience"],
  { label: string; chipClass: string; barClass: string }
> = {
  metabolic: {
    label: "Metabolic & Weight",
    chipClass: "bg-[#C4A862]/15 text-[#8a6f30] ring-[#C4A862]/30",
    barClass: "from-[#C4A862] via-[#9DD270] to-[#C4A862]",
  },
  women: {
    label: "Women's Health",
    chipClass: "bg-[#6CBE45]/15 text-[#2D5016] ring-[#6CBE45]/30",
    barClass: "from-[#9DD270] via-[#6CBE45] to-[#2D5016]",
  },
  men: {
    label: "Men's Health",
    chipClass: "bg-[#1a3a0a]/10 text-[#1a3a0a] ring-[#1a3a0a]/20",
    barClass: "from-[#2D5016] via-[#1a3a0a] to-[#0f2706]",
  },
};

/* -------------------------------------------------------------------------- */
/*                                   Page                                      */
/* -------------------------------------------------------------------------- */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Get Financed",
      item: CANONICAL,
    },
  ],
};

const financingSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "Denefits Financing for Central Texas Holistic Care",
  url: CANONICAL,
  description:
    "Pay-over-time financing for wellness, hormone, weight-loss, and TRT programs at Central Texas Holistic Care. No credit checks, instant approval, flexible 3-24 month plans.",
  provider: {
    "@type": "Organization",
    name: "Denefits",
    url: "https://denefits.com",
  },
  feesAndCommissionsSpecification:
    "No hard credit check required. 3, 6, 9, 12, and 24-month plans available.",
  audience: {
    "@type": "PeopleAudience",
    audienceType: "Patients of Central Texas Holistic Care",
  },
};

export default function GetFinancedPage() {
  return (
    <>
      <Script
        id="ld-getfinanced-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ld-getfinanced-financialproduct"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financingSchema) }}
      />
      <HeroSection />
      <FeatureTrio />
      <ProgramsSection />
      <WhyDenefitsSection />
      <FinalCTASection />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Hero                                      */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] py-14 sm:py-20 lg:py-28">
      {/* botanical leaf grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.10]"
      >
        <defs>
          <pattern
            id="fin-hero-grid"
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
        <rect width="100%" height="100%" fill="url(#fin-hero-grid)" />
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
        <div className="flex items-center justify-center gap-3">
          <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#C4A862]" />
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#C4A862]">
            Pay Over Time &middot; Powered by Denefits
          </p>
          <span className="block h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#C4A862]" />
        </div>

        <h1
          className="mt-6 font-heading font-semibold leading-[1.05] text-white"
          style={{ fontSize: "clamp(2.25rem, 5.2vw, 4rem)" }}
        >
          Get the service{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#9DD270] via-[#C4A862] to-[#9DD270] bg-clip-text italic text-transparent">
              now.
            </span>
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-transparent via-[#C4A862]/70 to-transparent"
            />
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">
          Are you interested in affordable monthly payments? Choose a plan that
          fits your budget, <span className="font-semibold text-white">no hard credit checks</span> and{" "}
          <span className="font-semibold text-white">0% APR options</span>, with
          instant approval through Denefits.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={DENEFITS_PREAPPROVAL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#C4A862] via-[#8a6f30] to-[#5d4a1f] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#0f2706]/40 ring-1 ring-[#C4A862]/40 transition hover:shadow-2xl hover:shadow-[#C4A862]/30"
          >
            <ShieldCheck className="size-4" />
            No Credit Check Financing
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            href="/payment-plans/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#C4A862]/60 hover:bg-white/10"
          >
            <CreditCard className="size-4 text-[#C4A862]" />
            View Payment Plans
          </Link>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur">
          <Sparkles className="size-3 text-[#C4A862]" />
          95% instant approval &middot; 3 to 24 month plans
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Feature trio                                 */
/* -------------------------------------------------------------------------- */

const FEATURES = [
  {
    src: "/images/get-financed/approvals-app.png",
    icon: Zap,
    title: "Instant Approval",
    body: "Get approved in seconds, no credit impact.",
  },
  {
    src: "/images/get-financed/gala_secure.png",
    icon: ShieldCheck,
    title: "Secure & Flexible",
    body: "Safe, contract-based payments through Denefits.",
  },
  {
    src: "/images/get-financed/den-logo.png",
    icon: BadgeCheck,
    title: "Powered by Denefits",
    body: "The trusted financing partner approving 95% of customers.",
  },
] as const;

function FeatureTrio() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
      {/* blueprint pattern */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.08]"
      >
        <defs>
          <pattern
            id="fin-feat-lines"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 0 L 0 48"
              fill="none"
              stroke="#2D5016"
              strokeWidth="0.7"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fin-feat-lines)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {FEATURES.map(({ src, icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#C4A862]/40 hover:shadow-xl hover:shadow-[#1a3a0a]/10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-1 w-24 rounded-bl-2xl bg-gradient-to-r from-transparent via-[#C4A862]/40 to-[#C4A862]"
              />
              <div className="flex items-center gap-4">
                <span className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0f5eb] to-[#e6f0db] ring-1 ring-[#6CBE45]/30">
                  <Icon className="size-6 text-[#2D5016]" />
                  {/* tiny source image preserved */}
                  <Image
                    src={src}
                    alt=""
                    width={28}
                    height={28}
                    aria-hidden
                    className="pointer-events-none absolute -right-1 -bottom-1 size-5 rounded-full bg-white object-contain p-0.5 shadow ring-1 ring-stone-200"
                  />
                </span>
                <h3 className="font-heading text-lg font-semibold text-[#1a3a0a]">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Programs section                               */
/* -------------------------------------------------------------------------- */

function ProgramsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[color:var(--color-cream-soft)] via-[color:var(--color-cream-dark)] to-[color:var(--color-cream-soft)] py-12 sm:py-20 lg:py-28">
      {/* gold dot grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-[0.18]"
      >
        <defs>
          <pattern
            id="fin-prog-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#8a6f30" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fin-prog-dots)" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 size-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 size-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#6CBE45]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#8a6f30]">
              Available Financing Programs
            </p>
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#6CBE45]" />
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
            style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)" }}
          >
            Choose a plan, pick a term,{" "}
            <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
              get started today.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
            Each program is billed at the same monthly rate, only the length of
            the term changes. Tap any month chip to start your application with
            Denefits.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.name} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const meta = AUDIENCE_META[program.audience];

  return (
    <article
      className={
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C4A862]/40 hover:shadow-xl hover:shadow-[#1a3a0a]/10" +
        (program.highlight
          ? " ring-1 ring-[#C4A862]/30 shadow-[0_18px_60px_-30px_rgba(196,168,98,0.45)]"
          : "")
      }
    >
      {/* top accent bar */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${meta.barClass}`}
      />
      {program.highlight && (
        <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-[#C4A862]/40 bg-[#C4A862]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a6f30]">
          <Sparkles className="size-3" />
          Most chosen
        </span>
      )}

      <span
        className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] ring-1 ${meta.chipClass}`}
      >
        {program.audience === "men" ? (
          <Heart className="size-3" />
        ) : program.audience === "women" ? (
          <Heart className="size-3" />
        ) : (
          <TrendingUp className="size-3" />
        )}
        {meta.label}
      </span>

      <h3 className="mt-4 font-heading text-xl font-semibold leading-tight text-[#1a3a0a] sm:text-2xl">
        {program.name}
      </h3>

      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-heading text-4xl font-semibold leading-none text-[#1a3a0a]">
          {program.price}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
          / month
        </span>
      </div>

      <ul className="mt-5 flex flex-col gap-2">
        {program.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-[13px] leading-snug text-stone-600"
          >
            <span className="mt-0.5 inline-flex size-4 flex-none items-center justify-center rounded-full bg-[#6CBE45]/15 text-[#2D5016]">
              <Check className="size-2.5" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-stone-500">
          Choose your term
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {program.durations.map(({ months, code }) => (
            <a
              key={code}
              href={denefits(code)}
              target="_blank"
              rel="noopener noreferrer"
              className="group/chip inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:border-[#1a3a0a] hover:bg-[#1a3a0a] hover:text-white"
            >
              <CalendarClock className="size-3 text-[#6CBE45] group-hover/chip:text-[#9DD270]" />
              {months} mo
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Why Denefits                                   */
/* -------------------------------------------------------------------------- */

function WhyDenefitsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-20">
      {/* faint sage glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 size-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.16), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C4A862]/40 bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a3a0a]">
              <Image
                src="/images/get-financed/card-slash.png"
                alt=""
                width={16}
                height={16}
                aria-hidden
                className="size-4 object-contain"
              />
              No Credit Check
            </span>
            <h2
              className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)" }}
            >
              Approved when traditional financing{" "}
              <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
                says no.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600">
              Most customers with low credit scores often have to compromise or
              delay their purchases, which usually worsens their situation in
              the long run. <a href="https://www.denefits.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1a3a0a] underline decoration-[#C4A862]/60 underline-offset-2 hover:decoration-[#C4A862]">Denefits</a>{" "}
              doesn&rsquo;t require any credit checks and instantly approves{" "}
              <span className="font-semibold text-[#1a3a0a]">95% of customers</span>.
            </p>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              <a href="https://www.denefits.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1a3a0a] underline decoration-[#C4A862]/60 underline-offset-2 hover:decoration-[#C4A862]">Denefits</a> is like a catch-all for customers who don&rsquo;t
              qualify for traditional financing or have other financial
              barriers.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                {
                  src: "/images/get-financed/tick-square.png",
                  icon: Clock,
                  label: "Quick Approvals",
                  detail: "Decision in seconds.",
                },
                {
                  src: "/images/get-financed/card-tick.png",
                  icon: TrendingUp,
                  label: "Build Your Credit",
                  detail: "On-time payments reported.",
                },
              ].map(({ src, icon: Icon, label, detail }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm"
                >
                  <span className="relative inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0f5eb] to-[#e6f0db] ring-1 ring-[#6CBE45]/30">
                    <Icon className="size-5 text-[#2D5016]" />
                    <Image
                      src={src}
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden
                      className="pointer-events-none absolute -bottom-1 -right-1 size-4 rounded-full bg-white object-contain p-0.5 shadow ring-1 ring-stone-200"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1a3a0a]">
                      {label}
                    </p>
                    <p className="text-xs text-stone-500">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={DENEFITS_PREAPPROVAL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1a3a0a]/25 ring-1 ring-[#6CBE45]/30 transition hover:shadow-xl"
              >
                <ShieldCheck className="size-4 text-[#C4A862]" />
                Start a No-Credit-Check Application
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Graphic */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#f0f5eb] to-[#e6f0db]"
              style={{ transform: "rotate(-3deg)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#C4A862]/30 to-transparent"
              style={{ transform: "rotate(2deg)" }}
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-2xl shadow-[#1a3a0a]/10 ring-1 ring-white/60">
              {/* gold corner ticks */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-4 top-4 size-3 border-l border-t border-[#C4A862]/55"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-4 bottom-4 size-3 border-b border-r border-[#C4A862]/55"
              />
              <Image
                src="/images/denefits-approval.jpeg"
                alt="Provider reviewing a Denefits no-credit-check approval with a patient at Central Texas Holistic Care"
                width={800}
                height={800}
                className="mx-auto aspect-square h-auto w-full rounded-2xl object-cover"
              />
              <div className="mt-6 flex items-center justify-center gap-3 border-t border-stone-200 pt-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6CBE45]/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#2D5016] ring-1 ring-[#6CBE45]/30">
                  <BadgeCheck className="size-3" />
                  95% Approval
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Final CTA                                   */
/* -------------------------------------------------------------------------- */

function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] py-12 sm:py-20">
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
        className="pointer-events-none absolute -right-32 bottom-0 size-[440px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,168,98,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C4A862]/40 bg-[#0f2706]/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4A862] backdrop-blur">
          <Sparkles className="size-3" />
          Ready when you are
        </span>
        <h2
          className="mt-5 font-heading font-semibold leading-[1.05] text-white"
          style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)" }}
        >
          Apply in a minute,{" "}
          <span className="bg-gradient-to-r from-[#9DD270] via-[#C4A862] to-[#9DD270] bg-clip-text italic text-transparent">
            start care this week.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-300">
          Get pre-approved with no impact to your credit score, then schedule
          your first visit at our Killeen clinic.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={DENEFITS_PREAPPROVAL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#C4A862] via-[#8a6f30] to-[#5d4a1f] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#0f2706]/40 ring-1 ring-[#C4A862]/40 transition hover:shadow-2xl"
          >
            <ShieldCheck className="size-4" />
            Pre-Approve Now
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+12542132423"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#C4A862]/60 hover:bg-white/10"
          >
            <Phone className="size-4 text-[#9DD270]" />
            Call (254) 213-2423
          </a>
        </div>
      </div>
    </section>
  );
}
