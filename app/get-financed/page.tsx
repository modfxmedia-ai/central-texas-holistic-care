import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";
import GetFinancedContent from "@/components/get-financed/GetFinancedContent";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const CANONICAL = `${SITE_URL}/get-financed/`;

const PAGE_TITLE = `Get Financed | ${SITE_NAME}`;
const PAGE_DESCRIPTION =
  "Apply for flexible financing in under a minute and start your care sooner. No-credit-check and 0% APR options available at Central Texas Holistic Care.";

// Standalone landing page reachable only by direct URL, intentionally not
// linked from the main navigation or footer.
export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent(PAGE_TITLE)}`,
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/api/og?title=${encodeURIComponent(PAGE_TITLE)}`],
  },
  robots: { index: true, follow: true },
};

export default function GetFinancedPage() {
  return (
    <>
      <PageHero
        title="Flexible Financing Options"
        subtitle="Pay for your care over time with fast, flexible financing, no credit check required and 0% APR options available for qualified applicants."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Financed", href: "/get-financed/" },
        ]}
      />
      <GetFinancedContent />
    </>
  );
}
