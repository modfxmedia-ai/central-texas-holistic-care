"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

export interface AnimatedCounterProps {
  /** The final value to count up to. */
  to: number;
  /** Starting value. Default 0. */
  from?: number;
  /** Animation duration in seconds. Default 1.8. */
  duration?: number;
  /** Number of decimal places to show. Default 0. */
  decimals?: number;
  /** Suffix to append (e.g. "+", "%", "k"). */
  suffix?: string;
  /** Prefix to prepend (e.g. "$"). */
  prefix?: string;
  /** Use grouping separators (1,500 instead of 1500). Default true. */
  useGrouping?: boolean;
  className?: string;
}

export default function AnimatedCounter({
  to,
  from = 0,
  duration = 1.8,
  decimals = 0,
  suffix,
  prefix,
  useGrouping = true,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
