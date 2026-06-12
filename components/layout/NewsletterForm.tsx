"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading" || state === "success") return;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setState("error");
      return;
    }
    setState("loading");
    // No backend wired yet — simulate a delivery so the UI feels real.
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === "error") setState("idle");
        }}
        disabled={state === "loading" || state === "success"}
        className="h-11 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#8BAD5A] focus:bg-white/10 disabled:opacity-60"
      />

      <motion.button
        type="submit"
        whileHover={{ scale: state === "idle" ? 1.03 : 1 }}
        whileTap={{ scale: state === "idle" ? 0.97 : 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        disabled={state === "loading" || state === "success"}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#8BAD5A] px-6 text-sm font-semibold text-[#0e2406] shadow-sm transition-colors hover:bg-[#9cbf6a] disabled:opacity-80"
      >
        <AnimatePresence mode="wait" initial={false}>
          {state === "loading" && (
            <motion.span
              key="loading"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </motion.span>
          )}
          {state === "success" && (
            <motion.span
              key="success"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              <Check className="size-4" />
              Subscribed
            </motion.span>
          )}
          {(state === "idle" || state === "error") && (
            <motion.span
              key="idle"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              Subscribe
              <Send className="size-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <p
        role="status"
        aria-live="polite"
        className="sr-only"
      >
        {state === "success" && "Thanks — you're subscribed."}
        {state === "error" && "Please enter a valid email address."}
      </p>
    </form>
  );
}
