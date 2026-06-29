import type { MetadataRoute } from "next";

const SITE_URL = "https://centraltexasholisticcarepllc.com";

type SitemapEntry = MetadataRoute.Sitemap[number];

const STATIC_PAGES: ReadonlyArray<{ path: string; lastModified: string }> = [
  { path: "/", lastModified: "2025-07-04" },
  { path: "/about-us/", lastModified: "2025-06-16" },
  { path: "/men/", lastModified: "2025-06-16" },
  { path: "/men/testosterone/", lastModified: "2025-06-16" },
  { path: "/men/wellness-exams/", lastModified: "2025-06-16" },
  { path: "/women/", lastModified: "2025-06-16" },
  { path: "/women/gynecological-exams/", lastModified: "2025-06-16" },
  { path: "/women/menopausal-disorders/", lastModified: "2025-06-16" },
  { path: "/women/menstrual-disorders/", lastModified: "2025-06-16" },
  { path: "/iv-nutrition/", lastModified: "2025-06-16" },
  { path: "/iv-nutrition/immune-booster/", lastModified: "2025-06-16" },
  { path: "/iv-nutrition/workout-recovery/", lastModified: "2025-06-16" },
  { path: "/iv-nutrition/myers-cocktail/", lastModified: "2025-06-16" },
  { path: "/iv-nutrition/cold-and-flu/", lastModified: "2025-06-16" },
  { path: "/iv-nutrition/hangover/", lastModified: "2026-02-10" },
  { path: "/hormone-therapy/", lastModified: "2025-06-16" },
  { path: "/stem-cell-thrive/", lastModified: "2026-06-30" },
  { path: "/payment-plans/", lastModified: "2026-06-08" },
  { path: "/get-financed/", lastModified: "2026-06-30" },
];

const PRODUCT_SLUGS: ReadonlyArray<string> = [];

const PRODUCT_LAST_MODIFIED = "2025-06-24";

export function generateSitemap(): MetadataRoute.Sitemap {
  const staticEntries: SitemapEntry[] = STATIC_PAGES.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
  }));

  const productEntries: SitemapEntry[] = PRODUCT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/product/${slug}/`,
    lastModified: new Date(PRODUCT_LAST_MODIFIED),
  }));

  return [...staticEntries, ...productEntries];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
