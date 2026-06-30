import type { Metadata } from "next";
import Script from "next/script";

import WomenPageClient from "./WomenPageClient";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/women/`;

const PAGE_TITLE = "Women | central holistic care";
const PAGE_DESCRIPTION =
  "Women's health services at Central Texas Holistic Care, comprehensive gynecological exams, menopausal care, and menstrual disorder treatment tailored to every life stage.";

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Women", item: CANONICAL },
  ],
};

export default function WomenHealthPage() {
  return (
    <>
      <Script
        id="ld-women-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WomenPageClient />
    </>
  );
}
