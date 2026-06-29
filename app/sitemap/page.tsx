import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Compass,
  FileText,
  Heart,
  Home,
  Leaf,
  Map as MapIcon,
  Phone,
  Sparkles,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/sitemap/`;
const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";

const PAGE_TITLE =
  "Sitemap | Browse All Pages | Central Texas Holistic Care";
const PAGE_DESCRIPTION =
  "Find every page on the Central Texas Holistic Care website: services, products, patient resources, and care information in one place.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    siteName: "Central Texas Holistic Care",
    type: "website",
  },
  robots: { index: true, follow: true },
};

/* -------------------------------------------------------------------------- */
/*                                 Site map data                              */
/* -------------------------------------------------------------------------- */

type SiteLink = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

type SiteGroup = {
  title: string;
  icon: LucideIcon;
  accent: string;
  description: string;
  links: SiteLink[];
};

const GROUPS: SiteGroup[] = [
  {
    title: "Main",
    icon: Home,
    accent: "#6CBE45",
    description: "Start here for an overview of the practice.",
    links: [
      {
        label: "Home",
        href: "/",
        description: "Our holistic practice at a glance.",
      },
      {
        label: "About Us",
        href: "/about-us/",
        description: "Meet our team and learn our approach.",
      },
      {
        label: "Payment Plans",
        href: "/payment-plans/",
        description: "0% APR financing through Cherry.",
      },
    ],
  },
  {
    title: "Hormone Therapy",
    icon: Sparkles,
    accent: "#C4A862",
    description: "Personalized hormone balance for every stage of life.",
    links: [
      {
        label: "Hormone Therapy Overview",
        href: "/hormone-therapy/",
        description: "Bioidentical hormone replacement therapy.",
      },
    ],
  },
  {
    title: "Men's Health",
    icon: Stethoscope,
    accent: "#2D5016",
    description: "Specialized care designed for men.",
    links: [
      {
        label: "Men's Health Overview",
        href: "/men/",
        description: "Whole-person care for men.",
      },
      {
        label: "Testosterone Therapy",
        href: "/men/testosterone/",
        description: "Optimize energy, mood, and performance.",
      },
      {
        label: "Wellness Exams",
        href: "/men/wellness-exams/",
        description: "Comprehensive preventive screenings.",
      },
    ],
  },
  {
    title: "Women's Health",
    icon: Heart,
    accent: "#8BAD5A",
    description: "Compassionate care from puberty through menopause.",
    links: [
      {
        label: "Women's Health Overview",
        href: "/women/",
        description: "Whole-person care for women.",
      },
      {
        label: "Gynecological Exams",
        href: "/women/gynecological-exams/",
        description: "Routine women's health and screenings.",
      },
      {
        label: "Menopausal Disorders",
        href: "/women/menopausal-disorders/",
        description: "Peri- and post-menopause care.",
      },
      {
        label: "Menstrual Disorders",
        href: "/women/menstrual-disorders/",
        description: "Hormone balance and cycle regulation.",
      },
    ],
  },
  {
    title: "IV Nutrition",
    icon: Leaf,
    accent: "#9DD270",
    description: "Vitamin and nutrient IV therapy infusions.",
    links: [
      {
        label: "IV Nutrition Overview",
        href: "/iv-nutrition/",
        description: "Our complete drip menu.",
      },
      {
        label: "Myers' Cocktail",
        href: "/iv-nutrition/myers-cocktail/",
        description: "The classic wellness infusion.",
      },
      {
        label: "Immune Booster",
        href: "/iv-nutrition/immune-booster/",
        description: "Vitamin C, zinc, and antioxidants.",
      },
      {
        label: "Workout Recovery",
        href: "/iv-nutrition/workout-recovery/",
        description: "Amino acids and electrolytes.",
      },
      {
        label: "Cold & Flu",
        href: "/iv-nutrition/cold-and-flu/",
        description: "Fast recovery from viral symptoms.",
      },
      {
        label: "Hangover Relief",
        href: "/iv-nutrition/hangover/",
        description: "Rehydration and bounce-back support.",
      },
    ],
  },
  {
    title: "Resources & Policies",
    icon: FileText,
    accent: "#1a3a0a",
    description: "Legal, accessibility, and reference information.",
    links: [
      {
        label: "Sitemap",
        href: "/sitemap/",
        description: "You are here.",
      },
    ],
  },
];

const QUICK_ACTIONS: { label: string; href: string; icon: LucideIcon; external?: boolean }[] = [
  { label: "Book An Appointment", href: BOOKING_URL, icon: Calendar, external: true },
  { label: "Call (254) 213-2423", href: "tel:+12542132423", icon: Phone },
  { label: "Get Directions", href: "/about-us/", icon: MapIcon },
  { label: "Meet the Team", href: "/about-us/", icon: Users },
];

/* -------------------------------------------------------------------------- */
/*                              Page component                                 */
/* -------------------------------------------------------------------------- */

export default function SitemapPage() {
  const totalLinks = GROUPS.reduce((acc, g) => acc + g.links.length, 0);

  return (
    <main className="relative w-full bg-[color:var(--color-cream-soft)]">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-[#1a3a0a]/10 pb-20 pt-28 sm:pt-32 lg:pt-36">
        {/* Aurora glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-20 size-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(108,190,69,0.28), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 size-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(45,80,22,0.18), transparent 70%)",
          }}
        />
        {/* Dot pattern */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 size-full opacity-[0.08]"
        >
          <defs>
            <pattern
              id="sitemap-dots"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#2D5016" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sitemap-dots)" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#2D5016] backdrop-blur">
            <Compass className="size-3.5" />
            Sitemap
          </div>
          <h1
            className="mx-auto mt-6 max-w-3xl font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
            style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
          >
            Find Your Way Around{" "}
            <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
              Central Texas Holistic Care.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
            Every page on our site, organized by topic. Whether you&rsquo;re
            looking for a specific service, a product, or a quick way to
            contact us, start here.
          </p>

          {/* Stat strip */}
          <dl className="mx-auto mt-9 grid max-w-2xl grid-cols-3 gap-3 rounded-2xl border border-[#1a3a0a]/10 bg-white/70 p-4 backdrop-blur">
            <div className="text-center">
              <dt className="font-heading text-2xl font-semibold text-[#1a3a0a] sm:text-3xl">
                <span className="bg-gradient-to-br from-[#2D5016] to-[#6CBE45] bg-clip-text text-transparent">
                  {totalLinks}
                </span>
              </dt>
              <dd className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-stone-600">
                Pages
              </dd>
            </div>
            <div className="text-center">
              <dt className="font-heading text-2xl font-semibold text-[#1a3a0a] sm:text-3xl">
                <span className="bg-gradient-to-br from-[#2D5016] to-[#6CBE45] bg-clip-text text-transparent">
                  {GROUPS.length}
                </span>
              </dt>
              <dd className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-stone-600">
                Sections
              </dd>
            </div>
            <div className="text-center">
              <dt className="font-heading text-2xl font-semibold text-[#1a3a0a] sm:text-3xl">
                <span className="bg-gradient-to-br from-[#2D5016] to-[#6CBE45] bg-clip-text text-transparent">
                  100%
                </span>
              </dt>
              <dd className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-stone-600">
                Whole-Person Care
              </dd>
            </div>
          </dl>

          {/* Quick actions */}
          <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2">
            {QUICK_ACTIONS.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <Link
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#1a3a0a]/15 bg-white px-4 py-2 text-xs font-semibold text-[#1a3a0a] transition-all hover:border-[#6CBE45] hover:bg-[#f0f5eb] hover:shadow-sm"
                >
                  <Icon className="size-3.5 text-[#2D5016]" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Sitemap groups ─── */}
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {GROUPS.map((group) => (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#6CBE45]/40 hover:shadow-2xl hover:shadow-[#2D5016]/10"
              >
                {/* corner gradient glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(closest-side, ${group.accent}33, transparent 70%)`,
                  }}
                />

                {/* Header */}
                <div className="flex items-start gap-4">
                  <span
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${group.accent}, #2D5016)`,
                    }}
                  >
                    <group.icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="font-heading text-xl font-semibold leading-snug text-[#1a3a0a]">
                      {group.title}
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed text-stone-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Accent line */}
                <div className="relative mt-5 h-px w-full bg-stone-200/80">
                  <span
                    className="absolute inset-y-0 left-0 block w-12 origin-left rounded-full transition-all duration-500 group-hover:w-24"
                    style={{
                      background: `linear-gradient(90deg, ${group.accent}, transparent)`,
                    }}
                  />
                </div>

                {/* Links */}
                <ul className="mt-5 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group/link relative -mx-2 flex items-start gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-[#f0f5eb]"
                      >
                        <ArrowRight
                          aria-hidden
                          className="mt-1 size-3.5 shrink-0 text-stone-400 transition-all group-hover/link:translate-x-0.5 group-hover/link:text-[#2D5016]"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-sm text-[#1a3a0a] transition-colors group-hover/link:text-[#2D5016]">
                            {link.label}
                          </div>
                          {link.description ? (
                            <div className="mt-0.5 text-xs leading-relaxed text-stone-500">
                              {link.description}
                            </div>
                          ) : null}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Machine-readable sitemap note */}
          <div className="mt-12 rounded-2xl border border-[#1a3a0a]/10 bg-white/70 p-6 text-center text-sm text-stone-600 backdrop-blur">
            Looking for the machine-readable XML sitemap?{" "}
            <a
              href="/sitemap.xml"
              className="font-semibold text-[#2D5016] underline-offset-4 hover:underline"
            >
              View sitemap.xml
            </a>
            .
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="relative w-full pb-24 sm:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-[#1a3a0a]/20 p-10 ring-1 ring-[#6CBE45]/15 sm:p-14"
            style={{
              background:
                "linear-gradient(135deg, #0f2706 0%, #1a3a0a 40%, #2D5016 80%, #244010 100%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-20 size-80 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(108,190,69,0.4), transparent 70%)",
              }}
            />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9DD270]">
                  Can&rsquo;t find what you need?
                </p>
                <h2
                  className="mt-3 font-heading font-semibold leading-[1.05] text-[#FAF6EE]"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
                >
                  We&rsquo;re here to help.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#FAF6EE]/80 sm:text-base">
                  Give us a call or send a message and a real person will get
                  back to you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FAF6EE] px-6 py-3 text-sm font-semibold text-[#1a3a0a] shadow-xl shadow-[#0f2706]/30 ring-1 ring-[#6CBE45]/25 transition-shadow hover:shadow-2xl"
                >
                  <Calendar className="size-4" />
                  Book Appointment
                </a>
                <a
                  href="tel:+12542132423"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-[#6CBE45] hover:bg-white/10"
                >
                  <Phone className="size-4 text-[#6CBE45]" />
                  (254) 213-2423
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
