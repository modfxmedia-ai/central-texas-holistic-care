import type { Metadata } from "next";
import Script from "next/script";

import AboutUsPageClient from "./AboutUsPageClient";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/about-us/`;

const PAGE_TITLE = "About Us | central holistic care";
const PAGE_DESCRIPTION =
  "Meet the providers behind Central Texas Holistic Care. Over 20 years of combined experience in regenerative, restorative, and preventive medicine, bio-identical hormones, nutrition, and integrative care in Killeen, TX.";

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Central Texas Holistic Care",
  alternateName: "CTHC",
  url: SITE_URL,
  telephone: "254-213-2423",
  email: "info@centraltexasholisticcarepllc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "311 E. Stan Schlueter Loop #207",
    addressLocality: "Killeen",
    addressRegion: "TX",
    postalCode: "76542",
    addressCountry: "US",
  },
  medicalSpecialty: [
    "Hormone Therapy",
    "Regenerative Medicine",
    "Preventive Medicine",
    "Functional Medicine",
    "Integrative Medicine",
  ],
  employee: [
    {
      "@type": "Person",
      name: "Dr. Bimisa Augustin",
      honorificSuffix: "DNP, FNP-C, PMHNP-BC",
      jobTitle:
        "Doctor of Nursing Practice | Family & Psychiatric Nurse Practitioner",
      image: `${SITE_URL}/images/providers/dr-bimisa-augustin.jpg`,
      affiliation: { "@type": "MedicalOrganization", name: "Central Texas Holistic Care" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of Mary Hardin-Baylor" },
        { "@type": "CollegeOrUniversity", name: "Maryville University" },
        { "@type": "CollegeOrUniversity", name: "The University of Alabama" },
      ],
    },
    {
      "@type": "Person",
      name: "Dr. Larissa Garth",
      honorificSuffix: "DMSC, MPH, MPAS, PA-C",
      jobTitle: "Doctor of Medical Science | Certified Physician Assistant",
      image: `${SITE_URL}/images/providers/dr-larissa-garth.jpg`,
      affiliation: { "@type": "MedicalOrganization", name: "Central Texas Holistic Care" },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: CANONICAL },
  ],
};

export default function AboutUsPage() {
  return (
    <>
      <Script
        id="ld-about-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="ld-about-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutUsPageClient />
    </>
  );
}
