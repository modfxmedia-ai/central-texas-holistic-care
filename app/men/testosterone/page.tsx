import type { Metadata } from "next";
import Script from "next/script";

import TestosteronePageClient from "./TestosteronePageClient";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/men/testosterone/`;

const PAGE_TITLE = "Testosterone – central holistic care";
const PAGE_DESCRIPTION =
  "Testosterone Therapy at Central Texas Holistic Care — restore vitality, confidence, and overall wellness with physician-supervised TRT tailored to your labs.";

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
    { "@type": "ListItem", position: 2, name: "Men", item: `${SITE_URL}/men/` },
    { "@type": "ListItem", position: 3, name: "Testosterone", item: CANONICAL },
  ],
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Testosterone Therapy",
  alternateName: "Testosterone Replacement Therapy (TRT)",
  url: CANONICAL,
  description:
    "Physician-supervised testosterone replacement therapy for men experiencing fatigue, low libido, mood changes, weight gain, and slow recovery related to low testosterone.",
  medicineSystem: "https://schema.org/WesternConventional",
  relevantSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Endocrinology",
  },
  provider: {
    "@type": "MedicalOrganization",
    name: "Central Texas Holistic Care",
    url: SITE_URL,
  },
};

export default function TestosteronePage() {
  return (
    <>
      <Script
        id="ld-testosterone-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ld-testosterone-therapy"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProcedureSchema),
        }}
      />
      <TestosteronePageClient />
    </>
  );
}
