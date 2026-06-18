import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/iv-nutrition/`;

const PAGE_TITLE = "IV Nutrition Therapy | IV Infusions in Harker Heights, TX";
const PAGE_DESCRIPTION =
  "Physician-supervised IV nutrition therapy at Central Texas Holistic Care. Immune Booster, Workout Recovery, Myer's Cocktail, Cold & Flu, and Hangover IV infusions delivered in a clean, comfortable Harker Heights clinic.";

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

export default function IvNutritionPage() {
  return (
    <PageHero
      title="IV Nutrition Therapy"
      subtitle="Physician-supervised IV infusions for immunity, recovery, energy, and resilience, delivered in a calm, private setting."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IV Nutrition", href: "/iv-nutrition/" },
      ]}
    />
  );
}
