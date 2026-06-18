"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

import { formatPrice } from "@/lib/products";

type Props = {
  productName: string;
  price: number;
};

export default function AddToCartButton({ productName, price }: Props) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      onClick={() => {
        // Cart integration placeholder — wire to real cart later
        window.alert(`${productName} (${formatPrice(price)}) added to cart`);
      }}
      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2D5016] px-7 py-4 font-semibold text-white shadow-lg shadow-[#2D5016]/20 transition-all hover:bg-[#1F3A0F] hover:shadow-xl sm:w-auto"
    >
      <ShoppingBag className="size-5 transition-transform group-hover:rotate-[-6deg]" />
      Add to Cart · {formatPrice(price)}
    </motion.button>
  );
}
