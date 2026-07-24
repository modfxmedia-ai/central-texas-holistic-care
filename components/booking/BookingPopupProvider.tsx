"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck, CheckCircle2, X } from "lucide-react";
import Script from "next/script";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* -------------------------------------------------------------------------- */
/*  Config                                                                     */
/* -------------------------------------------------------------------------- */

const DEFAULT_BOOKING_URL =
  "https://www.tebra.com/care/practice/central-texas-holistic-care-163683";

const FORM_ID = "p131FxBw8RGqchvj6brU";
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const FORM_NAME = "🟢 vercel website popup form 23-07-26 ";

// Any anchor whose href matches one of these substrings will trigger the popup.
const BOOKING_URL_MATCHERS = ["tebra.com/care"];

function isBookingHref(href: string | null | undefined): boolean {
  if (!href) return false;
  return BOOKING_URL_MATCHERS.some((m) => href.includes(m));
}

/* -------------------------------------------------------------------------- */
/*  Context                                                                    */
/* -------------------------------------------------------------------------- */

type BookingPopupContextValue = {
  openBookingPopup: (targetUrl?: string) => void;
  closeBookingPopup: () => void;
};

const BookingPopupContext = createContext<BookingPopupContextValue | null>(null);

export function useBookingPopup(): BookingPopupContextValue {
  const ctx = useContext(BookingPopupContext);
  if (!ctx) {
    // Fail-soft: return no-ops if provider isn't mounted for any reason.
    return {
      openBookingPopup: () => {},
      closeBookingPopup: () => {},
    };
  }
  return ctx;
}

/* -------------------------------------------------------------------------- */
/*  Provider                                                                   */
/* -------------------------------------------------------------------------- */

export default function BookingPopupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState<string>(DEFAULT_BOOKING_URL);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const targetUrlRef = useRef(targetUrl);

  useEffect(() => {
    targetUrlRef.current = targetUrl;
  }, [targetUrl]);

  const openBookingPopup = useCallback((url?: string) => {
    setTargetUrl(url && url.length > 0 ? url : DEFAULT_BOOKING_URL);
    setSubmitted(false);
    setIsOpen(true);
  }, []);

  const closeBookingPopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  /* --------------------- Global click interception -------------------------- */
  useEffect(() => {
    if (typeof document === "undefined") return;

    const handler = (event: MouseEvent) => {
      // Only intercept plain left-clicks without modifier keys so users who
      // intentionally open in a new tab/window still get the raw external URL.
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;

      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      // Skip anchors that opt out.
      if (anchor.dataset.bookingSkipPopup === "true") return;

      const rawHref =
        anchor.getAttribute("href") ?? anchor.href ?? "";
      if (!isBookingHref(rawHref)) return;

      event.preventDefault();
      event.stopPropagation();
      openBookingPopup(anchor.href || rawHref);
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [openBookingPopup]);

  /* --------------------- ESC to close + body scroll lock -------------------- */
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  /* --------------------- Listen for form-submitted event -------------------- */
  useEffect(() => {
    if (!isOpen) return;

    const onMessage = (event: MessageEvent) => {
      // Only accept messages from the LeadConnector form origin.
      try {
        const originHost = new URL(event.origin).hostname;
        const isTrusted =
          originHost.endsWith("leadconnectorhq.com") ||
          originHost.endsWith("msgsndr.com") ||
          originHost.endsWith("gohighlevel.com");
        if (!isTrusted) return;
      } catch {
        return;
      }

      // LeadConnector emits a variety of shapes. Match defensively.
      const data = event.data as unknown;
      let isSubmitEvent = false;

      const testString = (s: string) =>
        /form.?submit|form.?submitted|submit.?success|hsFormSubmit/i.test(s);

      if (typeof data === "string") {
        isSubmitEvent = testString(data);
      } else if (data && typeof data === "object") {
        const rec = data as Record<string, unknown>;
        const candidates = [rec.event, rec.type, rec.name, rec.action].map(
          (v) => (typeof v === "string" ? v : ""),
        );
        isSubmitEvent =
          candidates.some(testString) || rec.formSubmitted === true;
      }

      if (isSubmitEvent) {
        // Optimistically try to open in a new tab (may be blocked since this
        // isn't triggered by a direct user gesture) and then show a success
        // screen with a guaranteed click-through fallback.
        try {
          window.open(
            targetUrlRef.current || DEFAULT_BOOKING_URL,
            "_blank",
            "noopener,noreferrer",
          );
        } catch {
          /* ignore */
        }
        setSubmitted(true);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [isOpen]);

  const value = useMemo<BookingPopupContextValue>(
    () => ({ openBookingPopup, closeBookingPopup }),
    [openBookingPopup, closeBookingPopup],
  );

  return (
    <BookingPopupContext.Provider value={value}>
      {children}

      {/* Load LeadConnector embed script once, after interaction. */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
        onReady={() => setScriptLoaded(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="booking-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-popup-title"
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close booking form"
              onClick={closeBookingPopup}
              className="absolute inset-0 bg-gradient-to-br from-[#0b1d04]/70 via-[#0f2706]/75 to-[#0b1d04]/85 backdrop-blur-sm"
            />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
              }}
              className="relative z-10 flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-[#C4A862]/40 bg-white shadow-[0_30px_90px_-30px_rgba(15,39,6,0.55)]"
              style={{ maxHeight: "min(88vh, 720px)" }}
            >
              {/* Gold sheen */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4A862] to-transparent"
              />

              {/* Header */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2706] via-[#1a3a0a] to-[#0b1d04] px-4 py-3.5">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(196,168,98,0.28), transparent 72%)",
                  }}
                />
                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#C4A862]/15 text-[#C4A862] ring-1 ring-[#C4A862]/30">
                      <CalendarCheck className="size-3.5" />
                    </span>
                    <h2
                      id="booking-popup-title"
                      className="font-heading text-base font-semibold leading-tight text-white sm:text-[17px]"
                    >
                      Let&apos;s get you scheduled
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={closeBookingPopup}
                    aria-label="Close"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-[#C4A862]/60 hover:bg-white/15"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              </div>

              {/* Form / success screen */}
              {submitted ? (
                <div className="relative flex flex-1 flex-col items-center justify-center gap-5 bg-white px-6 py-10 text-center sm:px-8 sm:py-12">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-[#6CBE45]/15 text-[#2D5016] ring-1 ring-[#6CBE45]/40">
                    <CheckCircle2 className="size-7" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#1a3a0a] sm:text-2xl">
                      Thanks, we&apos;ve got your details.
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-stone-600">
                      Continue to our booking portal to pick a time that works
                      for you.
                    </p>
                  </div>
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-booking-skip-popup="true"
                    onClick={() => {
                      window.setTimeout(() => setIsOpen(false), 200);
                    }}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2D5016] via-[#1a3a0a] to-[#0f2706] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#1a3a0a]/25 ring-1 ring-[#C4A862]/30 transition hover:-translate-y-0.5"
                  >
                    <CalendarCheck className="size-4 text-[#C4A862]" />
                    Open booking portal
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <p className="text-[11px] text-stone-500">
                    Opens in a new tab.
                  </p>
                </div>
              ) : (
                <div className="relative flex-1 overflow-y-auto bg-white px-5 pb-5 pt-4 sm:px-7 sm:pb-6 sm:pt-5">
                  <iframe
                    key={FORM_ID + (scriptLoaded ? "-ready" : "")}
                    src={FORM_SRC}
                    id={`inline-${FORM_ID}`}
                    title={FORM_NAME}
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name={FORM_NAME}
                    data-height="undefined"
                    data-layout-iframe-id={`inline-${FORM_ID}`}
                    data-form-id={FORM_ID}
                    style={{
                      width: "100%",
                      minHeight: 440,
                      border: "none",
                      borderRadius: 0,
                      display: "block",
                      background: "transparent",
                    }}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingPopupContext.Provider>
  );
}
