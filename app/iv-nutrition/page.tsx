import type { Metadata } from "next";
import Script from "next/script";

import IVNutritionPageClient from "./IVNutritionPageClient";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/iv-nutrition/`;

const PAGE_TITLE = "IV Nutrition | central holistic care";
const PAGE_DESCRIPTION =
  "Physician-supervised IV nutrition therapy at Central Texas Holistic Care. Immune Booster, Workout Recovery, Myer's Cocktail, Cold & Flu, and Hangover IV infusions in Harker Heights, TX.";

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
    { "@type": "ListItem", position: 2, name: "IV Infusion", item: CANONICAL },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IV Nutrition Therapies",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: `${SITE_URL}/iv-nutrition/immune-booster/`,
      name: "Immune Booster IV Therapy",
    },
    {
      "@type": "ListItem",
      position: 2,
      url: `${SITE_URL}/iv-nutrition/workout-recovery/`,
      name: "Workout Recovery IV Therapy",
    },
    {
      "@type": "ListItem",
      position: 3,
      url: `${SITE_URL}/iv-nutrition/myers-cocktail/`,
      name: "Myer's Cocktail IV Therapy",
    },
    {
      "@type": "ListItem",
      position: 4,
      url: `${SITE_URL}/iv-nutrition/cold-and-flu/`,
      name: "Cold & Flu IV Therapy",
    },
    {
      "@type": "ListItem",
      position: 5,
      url: `${SITE_URL}/iv-nutrition/hangover/`,
      name: "Hangover IV Therapy",
    },
  ],
};

export default function IvNutritionPage() {
  return (
    <>
      <Script
        id="ld-iv-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ld-iv-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <IVNutritionPageClient />
    </>
  );
}
