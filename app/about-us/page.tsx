import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/about-us/`;

const PAGE_TITLE = "About Us | Central Texas Holistic Care | Harker Heights, TX";
const PAGE_DESCRIPTION =
  "About Central Texas Holistic Care in Harker Heights, TX: our mission, our integrative medicine team, and the values that shape every patient visit. Bio-identical hormones, IV nutrition, and preventive care under one roof.";

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

export default function AboutUsPage() {
  return (
    <PageHero
      title="About Central Texas Holistic Care"
      subtitle="Modern integrative medicine in Harker Heights, built around the time, attention, and root-cause thinking that real healthcare requires."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us/" },
      ]}
    />
  );
}
