"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  image: string;
  title: string;
  blurb: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    image: "/images/source/iv-infusion-therapy.jpg",
    title: "IV Infusion Therapy",
    blurb:
      "Delivering essential nutrients directly into the bloodstream for rapid absorption and enhanced wellness.",
    href: "/iv-nutrition/",
  },
  {
    image: "/images/source/medical-weight-loss-peptides.jpg",
    title: "Medical Weight Loss & Peptides",
    blurb:
      "Physician-guided weight management programs, including peptide therapy for improved metabolism and fat loss.",
    href: "/men/",
  },
  {
    image: "/images/source/hormone-pelleting.jpg",
    title: "Hormone Pelleting",
    blurb:
      "Long-lasting, bioidentical hormone delivery through pellet insertion, ideal for steady, consistent hormone support.",
    href: "/hormone-therapy/",
  },
  {
    image: "/images/source/acute-care-services.jpg",
    title: "Acute Care Services",
    blurb:
      "Immediate medical care for sudden illnesses, infections, or injuries, when you need it most.",
    href: "/about-us/",
  },
  {
    image: "/images/source/mens-health-optimization.jpeg",
    title: "Men’s Health Optimization",
    blurb:
      "Specialized care addressing low testosterone, fatigue, performance issues, and overall vitality in men.",
    href: "/men/testosterone/",
  },
  {
    image: "/images/source/chronic-care-management.png",
    title: "Chronic Care Management",
    blurb:
      "Ongoing support and treatment plans for managing long-term health conditions with a holistic approach.",
    href: "/about-us/",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function HomeServices() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[color:var(--color-cream-soft)] py-24 sm:py-28 lg:py-32"
    >
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-32 size-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,190,69,0.18), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-32 size-[380px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(45,80,22,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#6CBE45]" />
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8BAD5A]">
              Supportive Therapies We Offer
            </p>
            <span className="block h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#6CBE45]" />
          </div>
          <h2
            className="mt-5 font-heading font-semibold leading-[1.05] text-[#1a3a0a]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Care for Every{" "}
            <span className="bg-gradient-to-r from-[#2D5016] via-[#6CBE45] to-[#2D5016] bg-clip-text italic text-transparent">
              Season of Life.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
            A full spectrum of evidence-based, holistic medicine, delivered
            in a warm, individualized setting at our Harker Heights clinic.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ image, title, blurb, href }, i) => (
            <motion.div key={title} variants={fadeUp}>
              <Link
                href={href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all hover:-translate-y-1.5 hover:border-[#6CBE45]/50 hover:shadow-2xl hover:shadow-[#2D5016]/15"
              >
                {/* Visual w/ index badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f0f5eb]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* gradient overlay on hover */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#1a3a0a]/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90"
                  />
                  {/* index chip */}
                  <span className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full bg-white/90 px-2.5 py-1 font-heading text-[11px] font-medium tracking-[0.2em] text-[#2D5016] backdrop-blur-sm">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-medium leading-tight text-[#1a3a0a] transition-colors group-hover:text-[#2D5016]">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                    {blurb}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2D5016]">
                      Learn more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span
                      aria-hidden
                      className="block h-[2px] w-0 rounded-full bg-gradient-to-r from-[#2D5016] to-[#6CBE45] transition-all duration-500 group-hover:w-12"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/about-us/"
            className="inline-flex items-center gap-2 rounded-full border border-[#1a3a0a]/20 bg-white px-7 py-3 text-sm font-semibold text-[#1a3a0a] transition-colors hover:border-[#6CBE45] hover:bg-[#f0f5eb]"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
