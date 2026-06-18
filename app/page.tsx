import type { Metadata } from "next";

import HomeAbout from "@/components/home/HomeAbout";
import HomeApproach from "@/components/home/HomeApproach";
import HomeCTACard from "@/components/home/HomeCTACard";
import HomeHRT from "@/components/home/HomeHRT";
import HomeHero from "@/components/home/HomeHero";
import HomeInsuranceBand from "@/components/home/HomeInsuranceBand";
import HomeJourney from "@/components/home/HomeJourney";
import HomeLocation from "@/components/home/HomeLocation";
import HomeServices from "@/components/home/HomeServices";
import HomeTestimonial from "@/components/home/HomeTestimonial";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const PAGE_TITLE =
  "Central Texas Holistic Care | Holistic & Preventive Medicine in Harker Heights, TX";
const PAGE_DESCRIPTION =
  "Central Texas Holistic Care offers personalized holistic medicine, hormone therapy, IV nutrition, men's and women's health in Harker Heights, TX. Book today.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/`,
    type: "website",
    siteName: "Central Texas Holistic Care",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent("Holistic & Preventive Medicine")}&subtitle=${encodeURIComponent("Harker Heights, TX · Hormone therapy, IV nutrition, men's & women's health")}`,
        width: 1200,
        height: 630,
        alt: "Central Texas Holistic Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/api/og?title=${encodeURIComponent("Holistic & Preventive Medicine")}&subtitle=${encodeURIComponent("Harker Heights, TX · Hormone therapy, IV nutrition, men's & women's health")}`],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: `${SITE_URL}/`,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "Central Texas Holistic Care",
  },
  about: {
    "@type": "MedicalBusiness",
    name: "Central Texas Holistic Care",
    url: SITE_URL,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/api/og`,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <HomeHero />
      <HomeInsuranceBand />
      <HomeAbout />
      <HomeApproach />
      <HomeServices />
      <HomeHRT />
      <HomeJourney />
      <HomeTestimonial />
      <HomeCTACard />
      <HomeLocation />
    </>
  );
}
