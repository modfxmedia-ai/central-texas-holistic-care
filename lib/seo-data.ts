/**
 * SEO data extracted from https://centraltexasholisticcarepllc.com/
 * Source crawl: depth 3 via nextjs-seo MCP (clone_website) + per-page fetch.
 *
 * NOTE: The live WordPress/Elementor source ships with very thin SEO metadata
 * (no Open Graph tags, no JSON-LD schema, empty meta descriptions on most
 * pages). Where the source provides no value, the field is an empty string or
 * empty array. Use this object as the canonical content & metadata source for
 * the Next.js rebuild, then enrich missing fields in `app/(routes)/.../page.tsx`
 * metadata exports.
 */

export interface SeoPageData {
  /** Page <title> */
  title: string;
  /** <meta name="description"> */
  description: string;
  /** og:title */
  ogTitle: string;
  /** og:description */
  ogDescription: string;
  /** og:image absolute URL */
  ogImage: string;
  /** <link rel="canonical"> */
  canonical: string;
  /** Primary H1 (first one on the page) */
  h1: string;
  /** All headings on the page (H1 + H2; sub-headings included where notable) */
  headings: {
    level: 1 | 2 | 3;
    text: string;
  }[];
  /** Raw JSON-LD blocks (parsed objects). Empty when the source page ships none. */
  schema: Record<string, unknown>[];
  /** Long-form body content (cleaned). Markdown-ish plain text. */
  bodyContent: string;
  /** Internal navigation links extracted from header / footer / breadcrumbs. */
  navLinks: {
    label: string;
    href: string;
  }[];
}

const SITE_URL = "https://centraltexasholisticcarepllc.com";

/** Primary header / footer navigation, identical across every page. */
const PRIMARY_NAV: SeoPageData["navLinks"] = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "About Us", href: `${SITE_URL}/about-us/` },
  { label: "Men", href: `${SITE_URL}/men/` },
  { label: "Women", href: `${SITE_URL}/women/` },
  { label: "IV Nutrition", href: `${SITE_URL}/iv-nutrition/` },
  { label: "Hormone Therapy", href: `${SITE_URL}/hormone-therapy/` },
  { label: "Payment Plans", href: `${SITE_URL}/payment-plans/` },
  {
    label: "Book An Appointment",
    href: "https://www.tebra.com/care/practice/central-texas-holistic-care-163683",
  },
];

export const seoData = {
  home: {
    title: "central holistic care",
    description: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: `${SITE_URL}/`,
    h1: "Experience Personalized Wellness and Preventive Care",
    headings: [
      { level: 1, text: "Experience Personalized Wellness and Preventive Care" },
      { level: 2, text: "Welcome To Central Texas Holistic Care" },
      { level: 3, text: "Common Signs of Hormonal Imbalance Include:" },
      { level: 2, text: "Live Your Best Life" },
      { level: 3, text: "Address" },
      { level: 3, text: "Contact" },
    ],
    schema: [],
    bodyContent: [
      "WELCOME TO CENTRAL TEXAS HOLISTIC CARE",
      "Experience Personalized Wellness and Preventive Care",
      "At Central Texas Holistic Care (CTHC), we specialize in providing individualized health plans tailored to your unique needs. Our experienced providers combine the best of traditional family medicine with proven natural and holistic therapies to support your overall well-being. We welcome patients of all ages and accept most insurance plans, because your path to better health should be both effective and accessible.",
      "Hormonal fluctuations are a natural part of life, from the teenage years to adulthood and beyond. However, when hormone levels become imbalanced, they can lead to a wide range of physical and emotional symptoms that impact daily well-being and quality of life.",
      "Common Signs of Hormonal Imbalance Include:",
      "At Central Texas Holistic Care, we identify and address the root causes of hormonal imbalances through personalized treatment plans that restore your body's natural balance.",
      "Live Your Best Life",
      "Address: 311 E. Stan Schlueter Loop #207, Killeen, TX 76542",
      "Contact: 254 213 2423",
      "Pay over time: No hard credit checks • 0% APR options (powered by Cherry).",
    ].join("\n\n"),
    navLinks: PRIMARY_NAV,
  },

  men: {
    title: "Men | central holistic care",
    description: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: `${SITE_URL}/men/`,
    h1: "Men",
    headings: [
      { level: 1, text: "Men" },
      { level: 2, text: "Live Your Best Life" },
      { level: 3, text: "Address" },
      { level: 3, text: "Contact" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Men", item: `${SITE_URL}/men/` },
        ],
      },
    ],
    bodyContent: [
      "Men",
      "Home › Men",
      "Source page on the live site is a placeholder with breadcrumb only; service descriptions for men's wellness (testosterone optimization, men's hormone replacement, weight loss, peptide therapy, IV nutrition, sexual wellness) should be authored in the Next.js rebuild.",
    ].join("\n\n"),
    navLinks: PRIMARY_NAV,
  },

  women: {
    title: "Women | central holistic care",
    description: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: `${SITE_URL}/women/`,
    h1: "Women",
    headings: [
      { level: 1, text: "Women" },
      { level: 2, text: "Live Your Best Life" },
      { level: 3, text: "Address" },
      { level: 3, text: "Contact" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Women", item: `${SITE_URL}/women/` },
        ],
      },
    ],
    bodyContent: [
      "Women",
      "Home › Women",
      "Source page on the live site is a placeholder with breadcrumb only; service descriptions for women's wellness (BHRT, perimenopause/menopause care, thyroid optimization, sexual health, aesthetic & weight services) should be authored in the Next.js rebuild.",
    ].join("\n\n"),
    navLinks: PRIMARY_NAV,
  },

  "iv-nutrition": {
    title: "IV Nutrition | central holistic care",
    description: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: `${SITE_URL}/iv-nutrition/`,
    h1: "IV Infusion",
    headings: [
      { level: 1, text: "IV Infusion" },
      { level: 2, text: "Live Your Best Life" },
      { level: 3, text: "Address" },
      { level: 3, text: "Contact" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "IV Infusion", item: `${SITE_URL}/iv-nutrition/` },
        ],
      },
    ],
    bodyContent: [
      "IV Infusion",
      "Home › IV Infusion",
      "Source page on the live site is a placeholder with breadcrumb only; IV menu (Myers' Cocktail, Immune Boost, Hydration, NAD+, Glutathione, Performance & Recovery) and pricing should be authored in the Next.js rebuild.",
    ].join("\n\n"),
    navLinks: PRIMARY_NAV,
  },

  "hormone-therapy": {
    title: "Hormone Therapy | central holistic care",
    description: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: `${SITE_URL}/hormone-therapy/`,
    h1: "Hormone Therapy",
    headings: [
      { level: 1, text: "Hormone Therapy" },
      { level: 2, text: "Live Your Best Life" },
      { level: 3, text: "Address" },
      { level: 3, text: "Contact" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Hormone Therapy", item: `${SITE_URL}/hormone-therapy/` },
        ],
      },
    ],
    bodyContent: [
      "Hormone Therapy",
      "Home › Hormone Therapy",
      "Source page on the live site is a placeholder with breadcrumb only; bio-identical hormone replacement therapy (BHRT), pellet therapy (EvexiPEL), TRT, and thyroid programs should be authored in the Next.js rebuild.",
    ].join("\n\n"),
    navLinks: PRIMARY_NAV,
  },

  "about-us": {
    title: "About Us | central holistic care",
    description: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: `${SITE_URL}/about-us/`,
    h1: "About Us",
    headings: [
      { level: 1, text: "About Us" },
      { level: 2, text: "Live Your Best Life" },
      { level: 3, text: "Address" },
      { level: 3, text: "Contact" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about-us/` },
        ],
      },
    ],
    bodyContent: [
      "About Us",
      "Home › About",
      "Source page on the live site is a placeholder with breadcrumb only; mission, founder bio, provider credentials, clinical philosophy, and clinic location story should be authored in the Next.js rebuild.",
    ].join("\n\n"),
    navLinks: PRIMARY_NAV,
  },

  "payment-plans": {
    title: "Payment Plans | central holistic care",
    description: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: `${SITE_URL}/payment-plans/`,
    h1: "Treat now, pay later",
    headings: [
      { level: 1, text: "Treat now, pay later" },
      { level: 2, text: "See an example of what you could pay" },
      { level: 2, text: "How Cherry works" },
      { level: 2, text: "Questions?" },
      { level: 2, text: "Live Your Best Life" },
    ],
    schema: [],
    bodyContent: [
      "Treat now, pay later",
      "No hard credit checks, ever. True 0% APR options available. Interest-bearing plans with APRs as low as 5.99%. Up to $50,000 approvals. No hidden fees.",
      "See if you qualify · Manage your account.",
      "See an example of what you could pay",
      "Example payments for $1,000. Get personalized options. No hard credit checks. 60 seconds to apply. 0% APR and other promotional rates subject to eligibility. See footer for details.",
      "How Cherry works",
      "1. See if you qualify: it only takes 60 seconds to complete the application. 2. Get care: use your approval to pay for your treatment. 3. Pay over time: choose a plan length that fits your needs with 0% APR options.",
      "Questions?",
      "What is Cherry? Cherry is a buy now, pay later company making it fast and easy to pay for health and wellness purchases over time. View all FAQs / Visit help center.",
      "These are examples only. 0% APR and other promotional rates subject to eligibility. Exact terms and APR depend on credit score and other factors. For example, a $400 payment plan with Cherry may cost $100/month over 3 months at 0% APR with down payment in the amount of the monthly payment due at the time of purchase. Not every provider that uses Cherry will offer the payment plan terms listed above.",
      "Payment options through Cherry Technologies, Inc. are issued by partner lenders (see withcherry.com/lending-partners and withcherry.com/terms). Iowa borrowers: APR capped at 20.99%. Accessibility statement: withcherry.com/accessibility.",
      "Copyright © 2020-2026 Cherry Technologies Inc. NMLS #2061234, 2 Embarcadero Center, 8th Floor, San Francisco, CA 94111.",
    ].join("\n\n"),
    navLinks: PRIMARY_NAV,
  },
} as const satisfies Record<string, SeoPageData>;

export type SeoSlug = keyof typeof seoData;

export function getSeoData(slug: SeoSlug): SeoPageData {
  return seoData[slug];
}
