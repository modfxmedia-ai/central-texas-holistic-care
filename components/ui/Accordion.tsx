"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface AccordionItem {
  value: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** "single" (default) or "multiple" — matches Radix semantics. */
  type?: "single" | "multiple";
  /** Optional default-open value(s). */
  defaultValue?: string | string[];
  className?: string;
  itemClassName?: string;
}

/**
 * Reusable Radix Accordion wrapped with framer-motion height animation.
 * Avoids the CSS-only Radix animation in favour of spring-y opens/closes.
 */
export default function Accordion({
  items,
  type = "single",
  defaultValue,
  className,
  itemClassName,
}: AccordionProps) {
  // Track open state ourselves so AnimatePresence can drive the height anim.
  const initial =
    type === "multiple"
      ? Array.isArray(defaultValue)
        ? defaultValue
        : []
      : typeof defaultValue === "string"
        ? [defaultValue]
        : [];
  const [openValues, setOpenValues] = useState<string[]>(initial);

  const isMultiple = type === "multiple";
  const rootProps = isMultiple
    ? {
        type: "multiple" as const,
        value: openValues,
        onValueChange: (v: string[]) => setOpenValues(v),
      }
    : {
        type: "single" as const,
        collapsible: true,
        value: openValues[0] ?? "",
        onValueChange: (v: string) => setOpenValues(v ? [v] : []),
      };

  return (
    <RadixAccordion.Root
      {...rootProps}
      className={cn(
        "divide-y divide-stone-200 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm",
        className
      )}
    >
      {items.map((item) => {
        const isOpen = openValues.includes(item.value);
        return (
          <RadixAccordion.Item
            key={item.value}
            value={item.value}
            className={cn("group", itemClassName)}
          >
            <RadixAccordion.Header asChild>
              <h3>
                <RadixAccordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-[#1a3a0a] outline-none transition-colors hover:bg-[#f0f5eb]/40 focus-visible:bg-[#f0f5eb] sm:px-7 sm:py-6 sm:text-lg">
                  <span className="font-heading">{item.title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f0f5eb] text-[#2D5016]"
                  >
                    <ChevronDown className="size-4" />
                  </motion.span>
                </RadixAccordion.Trigger>
              </h3>
            </RadixAccordion.Header>

            {/* Radix still owns the open state for a11y; we drive visuals. */}
            <RadixAccordion.Content forceMount asChild>
              <div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-stone-700 sm:px-7 sm:pb-7 sm:text-base">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RadixAccordion.Content>
          </RadixAccordion.Item>
        );
      })}
    </RadixAccordion.Root>
  );
}
