"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type CardVariant = "solid" | "glass" | "outline" | "dark";

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: CardVariant;
  interactive?: boolean;
  children?: ReactNode;
}

const VARIANT: Record<CardVariant, string> = {
  solid:
    "bg-white border border-stone-200 shadow-sm",
  glass:
    "bg-white/70 backdrop-blur-md border border-white/40 shadow-lg shadow-[#2D5016]/5",
  outline:
    "bg-transparent border border-stone-300/70",
  dark:
    "bg-gradient-to-br from-[#1a3a0a] via-[#2D5016] to-[#244010] text-white border border-[#8BAD5A]/30 shadow-2xl",
};

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "solid", interactive = false, className, children, ...rest },
  ref
) {
  return (
    <motion.div
      ref={ref}
      whileHover={
        interactive
          ? { y: -6, boxShadow: "0 25px 50px -12px rgba(45, 80, 22, 0.20)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-7 transition-colors",
        VARIANT[variant],
        interactive && "cursor-pointer hover:border-[#2D5016]/30",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

export default Card;
