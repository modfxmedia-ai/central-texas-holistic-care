"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ChevronDown,
  Clock,
  Droplet,
  HeartPulse,
  Leaf,
  MapPin,
  Menu,
  Phone,
  ShieldPlus,
  Star,
  Stethoscope,
  Thermometer,
  UserCheck,
  Users,
  Wine,
  X,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";
const PHONE_DISPLAY = "(254) 213-2423";
const PHONE_TEL = "+12542132423";
const ADDRESS = "2025 Memory Lane Suite 300, Harker Heights, TX";

type NavChild = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  hideOverview?: boolean;
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us/",
    hideOverview: true,
    children: [
      {
        label: "Meet the Providers",
        href: "/about-us/providers/",
        description: "Get to know our board-certified clinicians.",
        icon: UserCheck,
      },
      {
        label: "Meet the Team",
        href: "/about-us/team/",
        description: "The friendly faces behind your care.",
        icon: Users,
      },
      {
        label: "Testimonials",
        href: "/about-us/testimonials/",
        description: "Real stories from our patients.",
        icon: Star,
      },
    ],
  },
  {
    label: "Men",
    href: "/men/",
    children: [
      {
        label: "Testosterone Therapy",
        href: "/men/testosterone/",
        description: "Optimize energy, mood, and performance.",
        icon: Activity,
      },
      {
        label: "Wellness Exams",
        href: "/men/wellness-exams/",
        description: "Comprehensive preventive screenings.",
        icon: Stethoscope,
      },
    ],
  },
  {
    label: "Women",
    href: "/women/",
    children: [
      {
        label: "Gynecological Exams",
        href: "/women/gynecological-exams/",
        description: "Routine women's health & screenings.",
        icon: UserCheck,
      },
      {
        label: "Menopausal Disorders",
        href: "/women/menopausal-disorders/",
        description: "Personalized peri- and post-menopause care.",
        icon: HeartPulse,
      },
      {
        label: "Menstrual Disorders",
        href: "/women/menstrual-disorders/",
        description: "Hormone balance and cycle regulation.",
        icon: ShieldPlus,
      },
    ],
  },
  {
    label: "IV Nutrition",
    href: "/iv-nutrition/",
    children: [
      {
        label: "Immune Booster",
        href: "/iv-nutrition/immune-booster/",
        description: "Vitamin C, zinc, and antioxidants.",
        icon: ShieldPlus,
      },
      {
        label: "Workout Recovery",
        href: "/iv-nutrition/workout-recovery/",
        description: "Amino acids and electrolytes to rebuild.",
        icon: Activity,
      },
      {
        label: "Myers Cocktail",
        href: "/iv-nutrition/myers-cocktail/",
        description: "The classic energy & wellness infusion.",
        icon: Droplet,
      },
      {
        label: "Cold & Flu",
        href: "/iv-nutrition/cold-and-flu/",
        description: "Fast recovery from viral symptoms.",
        icon: Thermometer,
      },
      {
        label: "Hangover",
        href: "/iv-nutrition/hangover/",
        description: "Rehydrate, detox, and bounce back.",
        icon: Wine,
      },
    ],
  },
  { label: "Hormone Therapy", href: "/hormone-therapy/" },
  { label: "Blog", href: "/blog/" },
  { label: "Payment Plans", href: "/payment-plans/" },
  { label: "Contact", href: "/contact/" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

/* -------------------------------------------------------------------------- */
/*                                  Logo                                       */
/* -------------------------------------------------------------------------- */

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Central Texas Holistic Care — Home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      {/* Plain <img> on purpose: bypasses next/image optimization which has
          intermittently failed to swap in the optimized variant during dev,
          leaving the logo blank. The asset is small and brand-critical. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Central Texas Holistic Care"
        width={1536}
        height={447}
        decoding="async"
        fetchPriority="high"
        className="block h-11 w-auto sm:h-12 lg:h-14"
      />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Desktop nav menu                               */
/* -------------------------------------------------------------------------- */

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu.Root className="relative hidden xl:block">
      <NavigationMenu.List className="flex items-center gap-0.5">
        {NAV.map((item) => {
          const active = isActive(pathname, item.href);

          if (!item.children) {
            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild active={active}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium tracking-wide transition-colors",
                      active
                        ? "text-[#1a3a0a]"
                        : "text-stone-700 hover:text-[#1a3a0a]",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left bg-[#1a3a0a]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          return (
            <NavigationMenu.Item key={item.href}>
              <NavigationMenu.Trigger
                className={cn(
                  "group inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium tracking-wide transition-colors",
                  active
                    ? "text-[#1a3a0a]"
                    : "text-stone-700 hover:text-[#1a3a0a]",
                )}
              >
                {item.label}
                <ChevronDown
                  aria-hidden
                  className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content asChild>
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-full mt-3 w-[380px] rounded-2xl border border-stone-200/70 bg-white/95 p-3 shadow-xl backdrop-blur-md"
                >
                  <ul className="grid gap-1">
                    {!item.hideOverview && (
                      <li>
                        <Link
                          href={item.href}
                          className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-[#1a3a0a]/5"
                        >
                          <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-lg bg-[#1a3a0a]/10 text-[#1a3a0a]">
                            <Leaf className="size-4" />
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-semibold text-stone-900">
                              Overview
                            </span>
                            <span className="block text-xs text-stone-500">
                              All {item.label} services at a glance.
                            </span>
                          </span>
                        </Link>
                      </li>
                    )}
                    {item.children.map((child) => {
                      const Icon = child.icon;
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-[#1a3a0a]/5"
                          >
                            <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-lg bg-[#1a3a0a]/10 text-[#1a3a0a]">
                              <Icon className="size-4" />
                            </span>
                            <span className="flex-1">
                              <span className="block text-sm font-semibold text-stone-900">
                                {child.label}
                              </span>
                              <span className="block text-xs text-stone-500">
                                {child.description}
                              </span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>

      <div className="absolute left-0 top-full">
        <NavigationMenu.Viewport className="relative" />
      </div>
    </NavigationMenu.Root>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Mobile drawer                                 */
/* -------------------------------------------------------------------------- */

function MobileDrawer({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-stone-900/40 xl:hidden"
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 flex w-[min(380px,92vw)] flex-col overflow-y-auto bg-white shadow-2xl xl:hidden"
          >
            <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
              <Link
                href="/"
                onClick={onClose}
                aria-label="Central Texas Holistic Care — Home"
                className="inline-flex shrink-0 items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="Central Texas Holistic Care"
                  width={1536}
                  height={447}
                  decoding="async"
                  className="block h-9 w-auto"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="rounded-full p-2 text-stone-700 hover:bg-stone-100"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex-1 px-3 py-4">
              <ul className="flex flex-col gap-1">
                {NAV.map((item) => {
                  const active = isActive(pathname, item.href);
                  const isExpanded = expanded === item.href;

                  if (!item.children) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-base font-medium",
                            active
                              ? "bg-[#1a3a0a]/10 text-[#1a3a0a]"
                              : "text-stone-800 hover:bg-stone-100",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isExpanded ? null : item.href)
                        }
                        aria-expanded={isExpanded}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium",
                          active
                            ? "bg-[#1a3a0a]/10 text-[#1a3a0a]"
                            : "text-stone-800 hover:bg-stone-100",
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            isExpanded && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                          >
                            {!item.hideOverview && (
                              <li>
                                <Link
                                  href={item.href}
                                  onClick={onClose}
                                  className="block rounded-md px-3 py-2 text-sm text-stone-600 hover:bg-stone-100"
                                >
                                  Overview
                                </Link>
                              </li>
                            )}
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-sm",
                                    pathname === child.href
                                      ? "text-[#1a3a0a]"
                                      : "text-stone-600 hover:bg-stone-100",
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 space-y-3 rounded-xl border border-stone-200 bg-[color:var(--color-cream-soft)] p-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-sm font-semibold text-[#1a3a0a]"
                >
                  <Phone className="size-4" />
                  {PHONE_DISPLAY}
                </a>
                <div className="flex items-start gap-3 text-xs text-stone-600">
                  <MapPin className="mt-0.5 size-4 text-[#8BAD5A]" />
                  {ADDRESS}
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex w-full items-center justify-center rounded-full bg-[#1a3a0a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#2D5016]"
                >
                  Book An Appointment
                </a>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Navbar                                     */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-[#1a3a0a] text-[#FAF6EE] lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-[#8BAD5A]"
            >
              <Phone className="size-3.5" />
              {PHONE_DISPLAY}
            </a>
            <span className="inline-flex items-center gap-2 text-[#FAF6EE]/85">
              <MapPin className="size-3.5 text-[#8BAD5A]" />
              {ADDRESS}
            </span>
          </div>
          <div className="flex items-center gap-5 text-[#FAF6EE]/85">
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3.5 text-[#8BAD5A]" />
              Mon–Fri · 8am–5pm
            </span>
            <Link
              href="/payment-plans/"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#8BAD5A]/15 px-3 py-1 font-medium text-[#FAF6EE] transition-colors hover:bg-[#8BAD5A]/25"
            >
              0% APR financing via Cherry
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "w-full border-b transition-all duration-300",
          scrolled
            ? "border-stone-200 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-[color:var(--color-cream-soft)]/95 backdrop-blur",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:gap-6 lg:px-8",
            scrolled ? "h-16 lg:h-[68px]" : "h-18 lg:h-20",
          )}
        >
          <Logo />

          <DesktopMenu pathname={pathname} />

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="hidden whitespace-nowrap items-center gap-2 rounded-full bg-[#1a3a0a] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#1a3a0a]/20 transition-colors hover:bg-[#2D5016] sm:inline-flex"
            >
              Book An Appointment
            </motion.a>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex size-11 items-center justify-center rounded-full text-[#1a3a0a] hover:bg-[#1a3a0a]/10 xl:hidden"
            >
              {mobileOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}
