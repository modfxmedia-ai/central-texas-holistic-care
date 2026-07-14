import type { Metadata } from "next";
import Script from "next/script";

import BlogIndexClient from "./BlogIndexClient";
import { getAllPosts } from "@/lib/blog-data";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const CANONICAL = `${SITE_URL}/blog/`;

const PAGE_TITLE = "Blog | Insights on Hormones, IV Nutrition & Whole-Person Care";
const PAGE_DESCRIPTION =
  "Evidence-based articles from the clinicians at Central Texas Holistic Care. Hormone therapy, IV nutrition, men's and women's health, and the science behind whole-person medicine.";

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

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Central Texas Holistic Care, Blog",
    url: CANONICAL,
    description: PAGE_DESCRIPTION,
    publisher: {
      "@type": "MedicalOrganization",
      name: "Central Texas Holistic Care",
      url: SITE_URL,
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: `${SITE_URL}/blog/${p.slug}/`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
      author: {
        "@type": "Person",
        name: p.author.name,
      },
      image: `${SITE_URL}${p.coverImage}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: CANONICAL },
    ],
  };

  return (
    <>
      <Script
        id="ld-blog-index"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Script
        id="ld-blog-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogIndexClient posts={posts} />
    </>
  );
}
