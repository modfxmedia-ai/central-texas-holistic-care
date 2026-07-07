import type { Metadata } from "next";

import Home2Client from "./Home2Client";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/home-2/`;

const PAGE_TITLE =
  "Home 2 · Central Texas Holistic Care | Holistic & Preventive Medicine";
const PAGE_DESCRIPTION =
  "Central Texas Holistic Care offers personalized holistic medicine, hormone therapy, IV nutrition, men's and women's health in Killeen, TX. Book today.";

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
  robots: { index: false, follow: true },
};

export default function Home2Page() {
  return <Home2Client />;
}
