import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/hormone-therapy/`;

const PAGE_TITLE =
  "Hormone Therapy | Bio-Identical HRT in Harker Heights, TX | CTHC";
const PAGE_DESCRIPTION =
  "Bio-identical hormone replacement therapy (BHRT) at Central Texas Holistic Care in Harker Heights, TX. Testosterone, estrogen, progesterone, and thyroid optimization with pellet, injection, oral, and topical delivery — personalized to your labs.";

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

export default function HormoneTherapyPage() {
  return (
    <PageHero
      title="Hormone Therapy"
      subtitle="Bio-identical hormone optimization for men and women — personalized to your labs, your symptoms, and your goals."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Hormone Therapy", href: "/hormone-therapy/" },
      ]}
    />
  );
}
