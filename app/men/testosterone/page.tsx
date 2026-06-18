import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/men/testosterone/`;

const PAGE_TITLE = "Testosterone Replacement Therapy | Men's Health | CTHC";
const PAGE_DESCRIPTION =
  "Testosterone Replacement Therapy (TRT) in Harker Heights, TX. Restore energy, libido, mood, and lean muscle with physician-supervised pellet, injection, and topical TRT at Central Texas Holistic Care.";

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

export default function TestosteronePage() {
  return (
    <PageHero
      title="Testosterone Replacement Therapy"
      subtitle="Restore the energy, drive, focus, and strength of optimal testosterone, supervised, monitored, and built around your labs."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Men", href: "/men/" },
        { label: "Testosterone", href: "/men/testosterone/" },
      ]}
    />
  );
}
