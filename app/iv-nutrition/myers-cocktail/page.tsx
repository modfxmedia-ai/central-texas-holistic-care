import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/iv-nutrition/myers-cocktail/`;

const PAGE_TITLE = "Myer's Cocktail IV | The Original Wellness Infusion | CTHC";
const PAGE_DESCRIPTION =
  "Myer's Cocktail IV in Harker Heights, TX. The classic Dr. John Myers formulation — magnesium, calcium, B-vitamins, and vitamin C — for energy, immunity, and whole-body wellness.";

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

export default function MyersCocktailPage() {
  return (
    <PageHero
      title="Myer's Cocktail"
      subtitle="The original wellness IV — magnesium, calcium, B-vitamins, and vitamin C in the classic Dr. John Myers formulation."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IV Nutrition", href: "/iv-nutrition/" },
        { label: "Myer's Cocktail", href: "/iv-nutrition/myers-cocktail/" },
      ]}
    />
  );
}
