import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/products/`;

const PAGE_TITLE =
  "Products | Practitioner-Grade Supplements & Wellness Store | CTHC";
const PAGE_DESCRIPTION =
  "Shop practitioner-grade supplements, peptides, immune support, sleep aids, and hormone-companion products curated by Central Texas Holistic Care in Harker Heights, TX. 0% APR financing available via Cherry.";

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

export default function ProductsPage() {
  return (
    <PageHero
      title="The Shop"
      subtitle="Practitioner-grade supplements, peptides, and wellness essentials, vetted by our clinical team and built to support the work we do together."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/" },
      ]}
    />
  );
}
