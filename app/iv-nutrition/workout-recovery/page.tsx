import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/iv-nutrition/workout-recovery/`;

const PAGE_TITLE = "Workout Recovery IV | Amino Acids & Electrolytes | CTHC";
const PAGE_DESCRIPTION =
  "Workout Recovery IV in Harker Heights, TX. Amino acids, B-complex, magnesium, and electrolytes engineered to speed muscle recovery, reduce soreness, and restore performance after hard training.";

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

export default function WorkoutRecoveryPage() {
  return (
    <PageHero
      title="Workout Recovery"
      subtitle="Refuel, rebuild, and bounce back — amino acids and electrolytes delivered when your muscles can actually use them."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IV Nutrition", href: "/iv-nutrition/" },
        { label: "Workout Recovery", href: "/iv-nutrition/workout-recovery/" },
      ]}
    />
  );
}
