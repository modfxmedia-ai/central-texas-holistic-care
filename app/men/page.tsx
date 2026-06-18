import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/men/`;

const PAGE_TITLE = "Men's Health Services | Central Texas Holistic Care";
const PAGE_DESCRIPTION =
  "Men's health services at Central Texas Holistic Care in Harker Heights, TX: testosterone replacement therapy, comprehensive wellness exams, peptide therapy, IV nutrition, and preventive care.";

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

export default function MenHealthPage() {
  return (
    <PageHero
      title="Men's Health"
      subtitle="Strength, energy, performance, and longevity, supported with evidence-based holistic medicine for every life stage."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Men", href: "/men/" },
      ]}
    />
  );
}
