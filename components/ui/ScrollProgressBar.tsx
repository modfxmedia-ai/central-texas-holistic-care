"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

export interface ScrollProgressBarProps {
  /** Bar height in pixels. Default 3. */
  height?: number;
  /** Override the gradient. Provide any valid CSS background. */
  background?: string;
  className?: string;
}

/**
 * Thin progress bar at the top of the viewport that fills as the user scrolls.
 * Driven by `useScroll().scrollYProgress` and smoothed with a spring for buttery motion.
 */
export default function ScrollProgressBar({
  height = 3,
  background,
  className,
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[60] origin-left",
        className
      )}
      style={{
        height,
        scaleX,
        background:
          background ??
          "linear-gradient(90deg, #1a3a0a 0%, #2D5016 40%, #8BAD5A 100%)",
        boxShadow: "0 1px 8px rgba(45, 80, 22, 0.35)",
      }}
    />
  );
}
