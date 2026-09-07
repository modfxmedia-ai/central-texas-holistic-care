import { BLOG_POSTS, type BlogBlock, type BlogPost } from "@/lib/blog-data";

import { slugFromTitle } from "./html-to-post";
import type { BlogPostData } from "./types";

function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/['’`´]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Ranked calendar titles that were already compiled locally under a
 * different slug/title. Local always wins — do not show two cards.
 */
const COMPILED_RANKED_TITLES = [
  "Navigating Perimenopause Symptoms When Summer Heat Disrupts Sleep",
  "Testosterone Therapy Vs Lifestyle Changes for Low T",
  "Understanding Regenerative Medicine Consultations in Bell County",
  "How a Men's Health Clinic in Killeen Supports a Late-Summer Reset",
].map(normalizeTitle);

function blockPlainText(block: BlogBlock): string[] {
  switch (block.type) {
    case "p":
    case "h2":
    case "h3":
    case "quote":
      return [block.text];
    case "callout":
      return [`${block.title}: ${block.text}`];
    case "list":
      return block.items;
    case "steps":
      return block.items.map((item) =>
        item.title ? `${item.title}: ${item.text}` : item.text,
      );
    default:
      return [];
  }
}

function localToRankedShape(post: BlogPost): BlogPostData {
  const sections: { heading: string; body: string[] }[] = [];
  let intro = post.excerpt;
  let current: { heading: string; body: string[] } | null = null;
  let sawIntro = false;

  for (const block of post.content) {
    if (block.type === "h2") {
      current = { heading: block.text, body: [] };
      sections.push(current);
      continue;
    }
    if (!current && block.type === "p" && !sawIntro) {
      intro = block.text;
      sawIntro = true;
      continue;
    }
    if (!current) {
      current = { heading: post.title, body: [] };
      sections.push(current);
    }
    current.body.push(...blockPlainText(block).filter(Boolean));
  }

  if (sections.length === 0) {
    sections.push({ heading: post.title, body: [post.excerpt] });
  }

  return {
    slug: post.slug,
    title: post.title,
    metaDescription: post.excerpt,
    h1: post.title,
    publishDate: post.publishedAt.slice(0, 10),
    intro,
    coverImage: post.coverImage,
    coverAlt: post.title,
    sections,
    cta: {
      label: post.relatedServiceLabel,
      href: post.relatedServiceHref,
    },
  };
}

/** Return existing compiled/MDX posts, or []. */
export function getLocalBlogPosts(): BlogPostData[] {
  return BLOG_POSTS.map(localToRankedShape);
}

export function isLocalDuplicateRankedItem(title: string, slug?: string): boolean {
  const locals = getLocalBlogPosts();
  const baseSlug = slug || slugFromTitle(title);
  if (locals.some((post) => post.slug === baseSlug)) return true;

  const normalized = normalizeTitle(title);
  if (COMPILED_RANKED_TITLES.includes(normalized)) return true;

  return locals.some(
    (post) =>
      normalizeTitle(post.title) === normalized ||
      normalizeTitle(post.h1) === normalized,
  );
}
