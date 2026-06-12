/**
 * Central design tokens for Central Texas Holistic Care.
 * Mirrors the CSS variables declared in `app/globals.css` so TS code can
 * reference colors and typography without hard-coded hex strings.
 *
 * Tailwind v4 reads tokens directly from `globals.css` via `@theme`. Use this
 * file when you need values in TypeScript (chart colors, SVG fills, motion
 * variants, etc.).
 */

export const colors = {
  primary: "#2D5016",
  primaryDark: "#1a3a0a",
  primaryLight: "#8BAD5A",
  forest: "#1a3a0a",
  darkest: "#0e2406",
  sage: "#8BAD5A",
  cream: "#FAF6EE",
  creamDark: "#F0EBE0",
  creamSoft: "#faf6ec",
  softGreen: "#f0f5eb",
  accent: "#C4A862",
  text: "#1C1C1C",
  textMuted: "#6B6B6B",
  border: "rgba(45, 80, 22, 0.12)",
} as const;

export type ColorToken = keyof typeof colors;

export const typography = {
  heading: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
  body: '"Inter", ui-sans-serif, system-ui, sans-serif',
  // Fluid heading sizes
  h1: "clamp(2.5rem, 6vw, 4.5rem)",
  h2: "clamp(2rem, 4vw, 3rem)",
  h3: "clamp(1.5rem, 3vw, 2rem)",
  h4: "clamp(1.25rem, 2.4vw, 1.5rem)",
  body1: "1rem",
  body2: "0.875rem",
  caption: "0.75rem",
} as const;

/** Modular spacing scale (rem). Mirrors Tailwind's default 4px ramp. */
export const spacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
} as const;

export const radius = {
  none: "0",
  sm: "0.375rem", // 6px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  "2xl": "2rem", // 32px
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 2px 0 rgba(28, 28, 28, 0.04)",
  md: "0 4px 12px -2px rgba(28, 28, 28, 0.06)",
  lg: "0 12px 24px -8px rgba(28, 28, 28, 0.10)",
  xl: "0 25px 50px -12px rgba(45, 80, 22, 0.15)",
  glow: "0 0 32px rgba(139, 173, 90, 0.35)",
} as const;

export const motion = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
} as const;

export const designTokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  motion,
} as const;

export default designTokens;
