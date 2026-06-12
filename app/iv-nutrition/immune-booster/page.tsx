import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/iv-nutrition/immune-booster/`;

const PAGE_TITLE = "Immune Booster IV | High-Dose Vitamin C & Zinc | CTHC";
const PAGE_DESCRIPTION =
  "Immune Booster IV infusion in Harker Heights, TX. High-dose vitamin C, zinc, B-complex, and glutathione to fortify your immune system before travel, during stress, or at the first sign of illness.";

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

export default function ImmuneBoosterPage() {
  return (
    <PageHero
      title="Immune Booster"
      subtitle="High-dose vitamin C, zinc, B-complex, and glutathione — built to defend, fortify, and recover."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IV Nutrition", href: "/iv-nutrition/" },
        { label: "Immune Booster", href: "/iv-nutrition/immune-booster/" },
      ]}
    />
  );
}
