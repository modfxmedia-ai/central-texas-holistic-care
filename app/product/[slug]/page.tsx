import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/components/layout/PageHero";
import { PRODUCT_SLUGS, formatPrice, getProduct } from "@/lib/products";

const SITE_URL = "https://centraltexasholisticcarepllc.com";
const BRAND = "Central Texas Holistic Care";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const canonical = `${SITE_URL}/product/${product.slug}/`;
  const title = `${product.name} | ${formatPrice(product.price)} | CTHC`;
  const description = product.shortDescription;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: BRAND,
      locale: "en_US",
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <PageHero
      title={product.name}
      subtitle={product.shortDescription}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/" },
        { label: product.name, href: `/product/${product.slug}/` },
      ]}
    />
  );
}
