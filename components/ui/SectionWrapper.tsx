"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  /** HTML tag to render. Defaults to <section>. */
  as?: "section" | "div" | "article" | "aside";
  /** Override the container variants (default: staggerContainer). */
  variants?: Variants;
  /** Disable scroll triggering — animate immediately. */
  immediate?: boolean;
  /** Optional id for anchor navigation. */
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  as: Tag = "section",
  variants = staggerContainer,
  immediate = false,
  id,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, viewportOnce);
  // motion[Tag] resolves to a component whose props are narrowed to the
  // matching HTML element. We accept any of the four allowed tags, so loosen.
  const MotionTag = motion[Tag] as unknown as React.ComponentType<Record<string, unknown>>;

  return (
    <MotionTag
      ref={ref}
      id={id}
      variants={variants}
      initial="hidden"
      animate={immediate || inView ? "visible" : "hidden"}
      className={cn("relative w-full", className)}
    >
      {children}
    </MotionTag>
  );
}
