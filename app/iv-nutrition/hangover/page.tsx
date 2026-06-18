import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/iv-nutrition/hangover/`;

const PAGE_TITLE = "Hangover IV | Fast Recovery in Harker Heights | CTHC";
const PAGE_DESCRIPTION =
  "Hangover IV in Harker Heights, TX. Rapid rehydration, B-vitamins, anti-nausea medication, and headache relief, the fastest way to bounce back after a long night or special occasion.";

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

export default function HangoverPage() {
  return (
    <PageHero
      title="Hangover"
      subtitle="Rapid rehydration, B-vitamins, anti-nausea, and headache relief, the fastest, evidence-based way to bounce back."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IV Nutrition", href: "/iv-nutrition/" },
        { label: "Hangover", href: "/iv-nutrition/hangover/" },
      ]}
    />
  );
}
