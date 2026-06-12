import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/women/gynecological-exams/`;

const PAGE_TITLE = "Gynecological Exams | Well-Woman Visits | CTHC";
const PAGE_DESCRIPTION =
  "Comprehensive well-woman exams in Harker Heights, TX. Pap smears, HPV testing, breast and pelvic exams, contraception counseling, and STI screening — delivered in a calm, respectful clinical setting at Central Texas Holistic Care.";

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

export default function GynecologicalExamsPage() {
  return (
    <PageHero
      title="Gynecological Exams"
      subtitle="A respectful, unhurried well-woman visit — built around your time, your questions, and your comfort."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Women", href: "/women/" },
        { label: "Gynecological Exams", href: "/women/gynecological-exams/" },
      ]}
    />
  );
}
