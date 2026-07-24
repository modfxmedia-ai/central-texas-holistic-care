import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export interface LegalPageProps {
  /** ISO date string, e.g. "2026-06-30". */
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
  /** Optional footer note rendered after the final section. */
  footnote?: ReactNode;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Shared body layout for legal / policy pages. Wraps the intro, a sticky
 * table-of-contents on the left, and the section content on the right.
 * The page-level <PageHero> is rendered by the calling page, not here.
 */
export default function LegalPageBody({
  lastUpdated,
  intro,
  sections,
  footnote,
}: LegalPageProps) {
  return (
    <main className="bg-[color:var(--color-cream-soft)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Meta strip */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1a3a0a]/15 bg-white px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[#2D5016]">
            <CheckCircle2 className="size-3.5" />
            Effective {formatDate(lastUpdated)}
          </span>
          <span className="text-stone-500">
            Last reviewed by Central Texas Holistic Care
          </span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr] lg:items-start">
          {/* TOC */}
          <nav
            aria-label="On this page"
            className="hidden lg:sticky lg:top-28 lg:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C4A862]">
              On this page
            </p>
            <ul className="mt-4 space-y-2 border-l border-[#1a3a0a]/15 pl-4">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block text-sm leading-snug text-stone-600 transition-colors hover:text-[#2D5016]"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Body */}
          <article className="max-w-3xl">
            <div className="rounded-3xl border border-[#1a3a0a]/10 bg-white p-7 text-base leading-relaxed text-stone-700 sm:p-10">
              <div className="text-[15px] leading-relaxed text-stone-700 sm:text-base">
                {intro}
              </div>

              <div className="mt-10 space-y-12">
                {sections.map((s, i) => (
                  <section
                    key={s.id}
                    id={s.id}
                    aria-labelledby={`${s.id}-title`}
                    className="scroll-mt-28"
                  >
                    <header className="flex items-baseline gap-3">
                      <span className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-[#C4A862]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2
                        id={`${s.id}-title`}
                        className="font-heading text-xl font-semibold text-[#1a3a0a] sm:text-2xl"
                      >
                        {s.title}
                      </h2>
                    </header>
                    <div className="prose-legal mt-4 space-y-4 text-[15px] leading-relaxed text-stone-700 sm:text-base">
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>

              {footnote ? (
                <div className="mt-12 border-t border-[#1a3a0a]/10 pt-6 text-sm leading-relaxed text-stone-600">
                  {footnote}
                </div>
              ) : null}

              {/* Contact callout */}
              <aside className="mt-12 rounded-2xl border border-[#6CBE45]/30 bg-[#f0f5eb]/70 p-6 text-sm leading-relaxed text-[#1a3a0a]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2D5016]">
                  Questions
                </p>
                <p className="mt-2">
                  Contact us by phone at{" "}
                  <a
                    className="font-semibold text-[#2D5016] underline-offset-4 hover:underline"
                    href="tel:+12542132423"
                  >
                    (254) 213-2423
                  </a>
                  . Our clinic is located at 311 E. Stan Schlueter Loop, Suite 207,
                  Killeen, TX 76542.
                </p>
                <p className="mt-3">
                  <Link
                    href="/about-us/"
                    className="text-[#2D5016] underline-offset-4 hover:underline"
                  >
                    Learn more about our practice
                  </Link>
                </p>
              </aside>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
