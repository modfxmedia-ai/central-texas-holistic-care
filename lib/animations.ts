import type { Variants, Transition } from "framer-motion";

/** Shared easing curve used across the design system. */
export const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Fade in + rise from below. The workhorse entrance animation. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Fade in + slide in from the left. */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Fade in + slide in from the right. */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Stagger child animations — pair with any of the directional fades. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Subtle scale-up entrance. Good for cards and modals. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/** Slide-in drawer (right edge). For mobile menus and side panels. */
export const slideInFromRight: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 320, damping: 32 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: EASE_OUT },
  },
};

/** Convenience: child variant for stagger containers. */
export const staggerItem: Variants = fadeInUp;

/** Shared viewport defaults for scroll-triggered animations. */
export const viewportOnce = { once: true, margin: "-12% 0px" } as const;
