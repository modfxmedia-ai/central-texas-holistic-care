import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/women/menopausal-disorders/`;

const PAGE_TITLE = "Menopausal Disorders & Menopause Care | CTHC";
const PAGE_DESCRIPTION =
  "Perimenopause and menopause care in Harker Heights, TX. Bio-identical hormone therapy, hot flash and sleep relief, mood and libido support, and long-term bone and heart protection at Central Texas Holistic Care.";

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

export default function MenopausalDisordersPage() {
  return (
    <PageHero
      title="Menopausal Disorders"
      subtitle="Modern perimenopause and menopause care — symptom relief today, long-term protection for tomorrow."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Women", href: "/women/" },
        { label: "Menopausal Disorders", href: "/women/menopausal-disorders/" },
      ]}
    />
  );
}
