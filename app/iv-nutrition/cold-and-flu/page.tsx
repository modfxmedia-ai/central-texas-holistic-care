import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/iv-nutrition/cold-and-flu/`;

const PAGE_TITLE = "Cold & Flu IV | Recover Faster from Viral Illness | CTHC";
const PAGE_DESCRIPTION =
  "Cold & Flu IV in Harker Heights, TX. Rapid rehydration, anti-nausea relief, high-dose vitamin C, zinc, and B-complex to shorten symptoms and get you back on your feet.";

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

export default function ColdAndFluPage() {
  return (
    <PageHero
      title="Cold & Flu"
      subtitle="Rapid rehydration, high-dose vitamin C, zinc, and symptom relief, designed to shorten viral illness and get you back on your feet."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IV Nutrition", href: "/iv-nutrition/" },
        { label: "Cold & Flu", href: "/iv-nutrition/cold-and-flu/" },
      ]}
    />
  );
}
