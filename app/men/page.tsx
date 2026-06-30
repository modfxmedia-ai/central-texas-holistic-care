import type { Metadata } from "next";
import Script from "next/script";

import MenPageClient from "./MenPageClient";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/men/`;

const PAGE_TITLE = "Men | central holistic care";
const PAGE_DESCRIPTION =
  "Men's health services at Central Texas Holistic Care: testosterone replacement therapy and annual wellness exams, physician-supervised, root-cause care in Killeen, TX.";

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
    { "@type": "ListItem", position: 2, name: "Men", item: CANONICAL },
  ],
};

export default function MenHealthPage() {
  return (
    <>
      <Script
        id="ld-men-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MenPageClient />
    </>
  );
}
