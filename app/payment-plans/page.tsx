import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";
import CherryWidget from "@/components/payment-plans/CherryWidget";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/payment-plans/`;

const PAGE_TITLE =
  "Payment Plans | Cherry 0% APR Financing | Central Texas Holistic Care";
const PAGE_DESCRIPTION =
  "Pay over time for your care at Central Texas Holistic Care. Cherry financing offers true 0% APR options, no hard credit checks, approvals up to $50,000, and 60-second applications.";

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

export default function PaymentPlansPage() {
  return (
    <>
      <PageHero
        title="Payment Plans"
        subtitle="Treat now, pay over time, with true 0% APR options, no hard credit checks, and approvals up to $50,000 through Cherry."
        backgroundImage="/images/source/insurance.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Payment Plans", href: "/payment-plans/" },
        ]}
      />
      <CherryWidget />
    </>
  );
}
