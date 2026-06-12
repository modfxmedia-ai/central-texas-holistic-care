"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

import { type Product, formatPrice } from "@/lib/products";

type Props = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#2D5016]/30 hover:shadow-2xl hover:shadow-[#2D5016]/10"
    >
      {/* Image / gradient placeholder with zoom on hover */}
      <Link
        href={`/product/${product.slug}/`}
        className="relative block aspect-square w-full overflow-hidden bg-gradient-to-br from-[#f0f5eb] via-[#FAF6EE] to-[#e3ecd5]"
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative botanical SVG placeholder until real product imagery exists */}
          <svg
            className="absolute inset-0 size-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id={`bg-${product.slug}`} cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#8BAD5A" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#2D5016" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="200" height="200" fill={`url(#bg-${product.slug})`} />
            <g transform="translate(100 100)" opacity="0.9">
              <circle r="42" fill="none" stroke="#2D5016" strokeWidth="1.5" opacity="0.35" />
              <circle r="32" fill="#2D5016" opacity="0.06" />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Cormorant Garamond, serif"
                fontStyle="italic"
                fontWeight="300"
                fontSize="22"
                fill="#1a3a0a"
              >
                {product.name.split(" ").slice(0, 2).join(" ")}
              </text>
            </g>
          </svg>
        </motion.div>

        {product.badge && (
          <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-[#1a3a0a] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-md">
            {product.badge}
          </span>
        )}

        <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a3a0a] backdrop-blur">
          {product.category}
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/product/${product.slug}/`} className="block">
          <h3 className="font-heading text-xl text-[#1a3a0a] transition-colors group-hover:text-[#2D5016]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <p className="font-heading text-2xl text-[#1a3a0a]">
            {formatPrice(product.price)}
          </p>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => {
              e.preventDefault();
              // Cart integration placeholder — wire to real cart later
              window.alert(`${product.name} added to cart`);
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2D5016] px-4 py-2 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1F3A0F] hover:shadow-lg"
          >
            <ShoppingBag className="size-3.5" />
            Add to cart
          </button>
        </div>

        <Link
          href={`/product/${product.slug}/`}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D5016] hover:text-[#1F3A0F]"
        >
          View details
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
