import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/women/`;

const PAGE_TITLE = "Women's Health Services | Central Texas Holistic Care";
const PAGE_DESCRIPTION =
  "Women's health services at Central Texas Holistic Care in Harker Heights, TX: gynecological exams, menopause care, menstrual disorders, bio-identical hormone therapy, and personalized preventive medicine.";

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

export default function WomenHealthPage() {
  return (
    <PageHero
      title="Women's Health"
      subtitle="Personalized care for every stage of life: from cycle health to menopause, hormones to heart health."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Women", href: "/women/" },
      ]}
    />
  );
}
