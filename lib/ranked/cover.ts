import { BlobNotFoundError, head, put } from "@vercel/blob";

import { COMMITTED_COVERS, coverPrompt } from "./config";

const HORMONE_COVERS = [
  "photo-1544161515-4ab6ce6db874",
  "photo-1515377905703-c4788e51af15",
  "photo-1556228720-195a672e8a03",
  "photo-1471864190281-a93a3070b6de",
  "photo-1512290923902-8a9f81dc236c",
  "photo-1490750967863-ce07541af7e4",
  "photo-1552693673-1bf9582987c5",
  "photo-1540555700478-4be289fbecef",
] as const;

const IV_COVERS = [
  "photo-1576091160399-112ba8d25d1d",
  "photo-1559757148-5c350d0d3c56",
  "photo-1582719478250-c89cae4dc85b",
  "photo-1579684453423-f84349ef60b0",
  "photo-1581595220892-b0739db3ba8c",
  "photo-1576091160550-1273bdb699ef",
] as const;

const MENS_COVERS = [
  "photo-1571019613454-1cb2f99b2d8b",
  "photo-1517836357463-d25dfeac3438",
  "photo-1534438327276-14e5300c3a48",
  "photo-1571019614242-c5c5dee9f50b",
  "photo-1518611012118-696072aa579a",
] as const;

const WELLNESS_COVERS = [
  "photo-1441974231531-c6227db76b6e",
  "photo-1469474968028-56623f02e42e",
  "photo-1506126613408-eca07ce68773",
  "photo-1518531933037-91b2f5f229cc",
  "photo-1500534314209-a25ddb2bd429",
  "photo-1490645935967-10de6ba17061",
  "photo-1631815588090-d4bfec5b1ccb",
  "photo-1666214280557-f1b5022eb634",
] as const;

const FALLBACK_UNSPLASH = [
  ...HORMONE_COVERS,
  ...IV_COVERS,
  ...MENS_COVERS,
  ...WELLNESS_COVERS,
] as const;

type CoverTheme = "hormone" | "iv" | "mens" | "wellness";

function themeFromText(text: string): CoverTheme {
  const t = text.toLowerCase();
  if (/(iv|hydrat|myers|drip|infusion)/.test(t)) return "iv";
  if (/(testosterone|\blow-t\b|\blow t\b|mens-|men-s)/.test(t)) return "mens";
  if (/(hormone|menopause|perimenopause|hot-flash|estradiol|progesterone|female)/.test(t)) {
    return "hormone";
  }
  return "wellness";
}

function themedPool(theme: CoverTheme): readonly string[] {
  switch (theme) {
    case "hormone":
      return HORMONE_COVERS;
    case "iv":
      return IV_COVERS;
    case "mens":
      return MENS_COVERS;
    default:
      return WELLNESS_COVERS;
  }
}

function coverPngPath(contentId: string): string {
  return `blog-covers/${contentId}.png`;
}

function coverJpgPath(contentId: string): string {
  return `blog-covers/${contentId}.jpg`;
}

function committedCoverUrl(slug?: string): string | null {
  if (!slug) return null;
  return COMMITTED_COVERS[slug] ?? null;
}

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return hash;
}

function unsplashUrl(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?w=1200&q=80&fit=crop`;
}

function picsumUrl(slug: string): string {
  return `https://picsum.photos/seed/${encodeURIComponent(`cthc-${slug}`)}/1200/630`;
}

export function uniqueWebCoverUrl(
  slug: string,
  reserved: Set<string> = new Set(),
  title?: string,
): string {
  const theme = themeFromText(`${title ?? ""} ${slug}`);
  const preferred = themedPool(theme);
  const ordered = [
    ...preferred,
    ...FALLBACK_UNSPLASH.filter((id) => !preferred.includes(id)),
  ];
  const start = hashSlug(slug) % ordered.length;
  for (let i = 0; i < ordered.length; i++) {
    const url = unsplashUrl(ordered[(start + i) % ordered.length]);
    if (!reserved.has(url)) return url;
  }
  let seed = slug;
  let n = 0;
  let url = picsumUrl(seed);
  while (reserved.has(url) && n < 50) {
    n += 1;
    seed = `${slug}-${n}`;
    url = picsumUrl(seed);
  }
  return url;
}

function imageModels(): string[] {
  const preferred = process.env.OPENAI_IMAGE_MODEL?.trim();
  const models = [preferred, "gpt-image-2", "gpt-image-1"].filter(
    (m): m is string => Boolean(m),
  );
  return [...new Set(models)];
}

async function existingBlobUrl(contentId: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null;
  for (const pathname of [coverPngPath(contentId), coverJpgPath(contentId)]) {
    try {
      const meta = await head(pathname);
      if (meta.url) return meta.url;
    } catch (err) {
      if (!(err instanceof BlobNotFoundError)) return null;
    }
  }
  return null;
}

async function persistBuffer(
  pathname: string,
  bytes: Buffer,
  contentType: string,
): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null;
  const blob = await put(pathname, bytes, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
  });
  return blob.url;
}

async function generatePng(title: string): Promise<Buffer | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  const prompt = coverPrompt(title);
  let lastError = "";
  for (const model of imageModels()) {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model, prompt, size: "1536x1024", quality: "medium", n: 1 }),
    });
    const text = await res.text();
    if (!res.ok) {
      lastError = `${model} ${res.status}: ${text.slice(0, 240)}`;
      continue;
    }
    const json = JSON.parse(text) as { data?: Array<{ url?: string; b64_json?: string }> };
    const row = json.data?.[0];
    if (row?.b64_json) return Buffer.from(row.b64_json, "base64");
    if (row?.url) {
      const img = await fetch(row.url);
      if (img.ok) return Buffer.from(await img.arrayBuffer());
    }
  }
  console.error(`[ranked] OpenAI cover generation exhausted: ${lastError}`);
  return null;
}

export async function getRankedCoverImage(input: {
  contentId: string;
  title: string;
  generate: boolean;
  slug?: string;
  reservedUrls?: Set<string>;
}): Promise<string> {
  const slug = input.slug ?? input.contentId;
  const reserved = input.reservedUrls ?? new Set<string>();

  const committed = committedCoverUrl(input.slug);
  if (committed) {
    reserved.add(committed);
    return committed;
  }

  const cached = await existingBlobUrl(input.contentId);
  if (cached) {
    reserved.add(cached);
    return cached;
  }

  const webUrl = uniqueWebCoverUrl(slug, reserved, input.title);
  if (!input.generate) {
    reserved.add(webUrl);
    return webUrl;
  }

  try {
    const png = await generatePng(input.title);
    if (png) {
      const url = await persistBuffer(coverPngPath(input.contentId), png, "image/png");
      if (url) {
        reserved.add(url);
        return url;
      }
    }

    const sourceUrl = uniqueWebCoverUrl(slug, reserved, input.title);
    const img = await fetch(sourceUrl);
    if (img.ok) {
      const bytes = Buffer.from(await img.arrayBuffer());
      const persisted = await persistBuffer(coverJpgPath(input.contentId), bytes, "image/jpeg");
      const url = persisted || sourceUrl;
      reserved.add(url);
      return url;
    }
  } catch (err) {
    console.error(`[ranked] cover failed for ${input.contentId}`, err);
  }

  reserved.add(webUrl);
  return webUrl;
}

export function ensureUniqueCoverImages<
  T extends { slug: string; coverImage: string; title?: string },
>(posts: T[]): T[] {
  const used = new Set<string>();
  return posts.map((post) => {
    let cover = post.coverImage;
    if (!cover || used.has(cover)) cover = uniqueWebCoverUrl(post.slug, used, post.title);
    used.add(cover);
    return cover === post.coverImage ? post : { ...post, coverImage: cover };
  });
}
