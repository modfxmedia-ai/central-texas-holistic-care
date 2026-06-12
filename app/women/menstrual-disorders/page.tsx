import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/women/menstrual-disorders/`;

const PAGE_TITLE =
  "Menstrual Disorders | Cycle, PCOS & Endometriosis Care | CTHC";
const PAGE_DESCRIPTION =
  "Evaluation and treatment of menstrual disorders in Harker Heights, TX. Heavy bleeding, painful periods, irregular cycles, PCOS, and endometriosis — with root-cause workup, hormone testing, and personalized plans at Central Texas Holistic Care.";

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

export default function MenstrualDisordersPage() {
  return (
    <PageHero
      title="Menstrual Disorders"
      subtitle="Heavy, painful, or irregular cycles aren't something to push through. We find the cause and build a plan that actually works."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Women", href: "/women/" },
        { label: "Menstrual Disorders", href: "/women/menstrual-disorders/" },
      ]}
    />
  );
}
