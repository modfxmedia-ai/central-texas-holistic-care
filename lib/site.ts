/**
 * Single source of truth for the production site URL.
 *
 * Reads NEXT_PUBLIC_SITE_URL from the environment, falling back to the
 * production domain so metadata, canonicals, and the sitemap keep working
 * even if the env var is missing at build time. Set the env var in
 * .env.local and in Vercel > Project > Settings > Environment Variables.
 */
export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://centraltexasholisticcarepllc.com";

export const SITE_NAME = "Central Texas Holistic Care";
