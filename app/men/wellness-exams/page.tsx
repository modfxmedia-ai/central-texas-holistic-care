import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/men/wellness-exams/`;

const PAGE_TITLE = "Men's Wellness Exams | Annual Preventive Care | CTHC";
const PAGE_DESCRIPTION =
  "Comprehensive men's wellness exams in Harker Heights, TX. Annual preventive physicals, advanced lab panels, cardiac and cancer screening, and personalized prevention plans at Central Texas Holistic Care.";

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

export default function MenWellnessExamsPage() {
  return (
    <PageHero
      title="Men's Wellness Exams"
      subtitle="A complete annual look at heart, metabolic, hormonal, and cancer-risk markers, built around modern preventive medicine."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Men", href: "/men/" },
        { label: "Wellness Exams", href: "/men/wellness-exams/" },
      ]}
    />
  );
}
