"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

export type FaqItem = { question: string; answer: string };

export interface FaqAccordionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Inject FAQPage JSON-LD for SEO rich results. */
  emitJsonLd?: boolean;
  className?: string;
}

function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function FaqAccordion({
  items,
  eyebrow = "Common Questions",
  title = "Frequently Asked Questions",
  intro,
  emitJsonLd = true,
  className,
}: FaqAccordionProps) {
  return (
    <section className={className ?? "relative w-full bg-[color:var(--color-cream-soft)] py-24 sm:py-28 lg:py-32"}>
      {emitJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(items)) }}
        />
      )}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8BAD5A]">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-4 font-heading font-light leading-[1.1] text-[#1a3a0a]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              {title}
            </h2>
          </Reveal>
          {intro && (
            <Reveal delay={0.12}>
              <p className="mt-4 text-base text-stone-600">{intro}</p>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.15}>
          <Accordion.Root
            type="single"
            collapsible
            className="mt-12 divide-y divide-stone-200 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
          >
            {items.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="group"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-[#2D5016]/5 sm:px-8">
                    <span className="font-heading text-lg text-[#1a3a0a] sm:text-xl">
                      {item.question}
                    </span>
                    <motion.span
                      aria-hidden
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2D5016]/10 text-[#2D5016] transition-transform group-data-[state=open]:rotate-45"
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="overflow-hidden text-sm leading-relaxed text-stone-600 data-[state=closed]:animate-faq-up data-[state=open]:animate-faq-down sm:text-base"
                >
                  <div className="px-6 pb-6 pt-1 sm:px-8">{item.answer}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
