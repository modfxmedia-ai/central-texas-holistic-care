import type { Metadata } from "next";
import Script from "next/script";

import IVSubpageClient from "@/components/iv/IVSubpageClient";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/iv-nutrition/hangover/`;

const PAGE_TITLE = "Hangover | central holistic care";
const PAGE_DESCRIPTION =
  "Hangover IV Therapy in Harker Heights, TX. Rapid rehydration, B-vitamins, glutathione, anti-nausea, and pain relief medication, the fastest way to bounce back after a long night.";

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "IV Infusion",
      item: `${SITE_URL}/iv-nutrition/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hangover",
      item: CANONICAL,
    },
  ],
};

const therapySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Hangover IV Therapy",
  alternateName: "Hangover Recovery IV Drip",
  description:
    "Physician-supervised IV infusion of fluids, electrolytes, B-complex, B12, glutathione, anti-nausea, and anti-inflammatory medication for rapid hangover recovery.",
  url: CANONICAL,
};

export default function HangoverPage() {
  return (
    <>
      <Script
        id="ld-hangover-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ld-hangover-therapy"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(therapySchema) }}
      />
      <IVSubpageClient
        h1="Hangover"
        breadcrumbLabel="Hangover"
        eyebrow="Hangover IV"
        heroSubtitle="Rapid rehydration, B-vitamins, anti-nausea, and headache relief, the fastest way to bounce back."
        tagline="Hydrate. Detox. Bounce Back Fast."
        h2="Hangover IV Therapy"
        h2Accent="IV Therapy"
        body="Don't let a night of fun turn into a day of regret. Our Hangover IV Therapy is designed to rapidly rehydrate, flush out toxins, relieve nausea, and restore energy, so you can get back on your feet faster and feel like yourself again."
        closingNote="Whether you're recovering from a night out or prepping for a busy day ahead, this drip will have you feeling recharged, refreshed, and fully functional in no time."
        iconKey="sunrise"
        trust={[
          { iconKey: "shieldCheck", label: "Physician-supervised" },
          { iconKey: "droplets", label: "Sterile, single-use" },
          { iconKey: "zap", label: "Same-day relief" },
        ]}
        highlights={[
          "Electrolytes + Glutathione",
          "Anti-nausea support",
          "Bounce-back fast",
        ]}
        image={{
          src: `${SITE_URL}/wp-content/uploads/2025/06/Hangover-pexels-polina-tankilevitch-8213169-scaled.webp`,
          alt: "Hangover IV Therapy",
        }}
        benefits={{
          eyebrow: "Symptoms We Treat",
          title: "Common Hangover Symptoms We Treat",
          titleAccent: "We Treat",
          items: [
            { iconKey: "flame", title: "Headaches and brain fog" },
            { iconKey: "droplets", title: "Dehydration and dry mouth" },
            { iconKey: "activity", title: "Fatigue and body weakness" },
            {
              iconKey: "heartPulse",
              title: "Irritability, anxiety, and mood swings",
            },
          ],
        }}
        ingredients={{
          eyebrow: "What's Inside",
          title: "What's Inside the Hangover Drip?",
          titleAccent: "Hangover Drip?",
          items: [
            {
              name: "IV Fluids + Electrolytes",
              detail:
                "Rehydrate fast with saline fluids that restore balance and relieve headaches, fatigue, and dry mouth.",
              iconKey: "droplets",
            },
            {
              name: "Vitamin B Complex",
              detail:
                "Replenish lost B vitamins (B1, B2, B3, B6, B9) essential for brain function and energy metabolism.",
              iconKey: "battery",
            },
            {
              name: "Vitamin B12",
              detail:
                "Boost energy and combat mental fog with an instant infusion that bypasses digestive absorption issues.",
              iconKey: "zap",
            },
            {
              name: "Glutathione",
              detail:
                "Detox powerhouse that breaks down alcohol toxins and eases inflammation for quicker recovery.",
              iconKey: "shieldCheck",
            },
            {
              name: "Anti-Nausea Medication",
              detail:
                "Blocks signals in your nervous system to reduce queasiness and vomiting.",
              iconKey: "pill",
            },
            {
              name: "Anti-Inflammatory & Pain Medication",
              detail:
                "Alleviates headache, body aches, and general discomfort for a smoother recovery.",
              iconKey: "flame",
            },
          ],
        }}
        faqs={[
          {
            q: "How quickly will I feel better?",
            a: "Most patients feel meaningful relief within 30-60 minutes of starting the drip, especially from hydration, nausea, and headache.",
          },
          {
            q: "How long does the appointment take?",
            a: "About 45 minutes door-to-door, including a brief intake and IV placement.",
          },
          {
            q: "Is it safe?",
            a: "Yes, every drip is physician-supervised. We screen briefly before starting and adjust medications based on what you can safely receive.",
          },
          {
            q: "Can I get this before a big event instead of after?",
            a: "Yes. Some patients use the hangover drip as pre-event hydration or post-flight recovery.",
          },
        ]}
        related={[
          {
            title: "Myer's Cocktail",
            href: "/iv-nutrition/myers-cocktail/",
            blurb: "Whole-body reset for energy, immunity, and relief.",
            iconKey: "sparkles",
          },
          {
            title: "Workout Recovery",
            href: "/iv-nutrition/workout-recovery/",
            blurb: "Amino acids + high-dose magnesium for post-exercise rebuild.",
            iconKey: "dumbbell",
          },
          {
            title: "Immune Booster",
            href: "/iv-nutrition/immune-booster/",
            blurb: "Antioxidant + immune support before travel or season changes.",
            iconKey: "shieldCheck",
          },
        ]}
        ctaHeading={{
          lead: "Skip the recovery day.",
          accent: "Get the morning back.",
        }}
        ctaSubline="Book the Hangover IV and feel functional in under an hour."
      />
    </>
  );
}
