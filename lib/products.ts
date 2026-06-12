export type Product = {
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  category: string;
  image: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    price: 10.0,
    shortDescription:
      "A peptide liposomal tablet shown to offer therapeutic benefits that promote GI health and support reduced inflammation.",
    longDescription:
      "BPC-157 LPT is derived from gastric juices and has been shown to have remarkable healing properties in laboratory studies. BPC-157, short for Body Protection Compound-157, is a stable pentadecapeptide consisting of 15 amino acids.",
    benefits: [
      "Total Body Support — health of tendons, ligaments, bones, muscles, skin",
      "Exercise Recovery — supports post-workout repair (not WADA-approved)",
      "Gastrointestinal Support — gastric ulcers, IBS, leaky gut, Crohn's",
      "Neural Support — protection and regeneration of neural tissues",
    ],
    category: "Peptides",
    image: "/products/bpc-157.png",
    badge: "Bestseller",
  },
  {
    slug: "complete-mag",
    name: "Complete Mag",
    price: 32.99,
    shortDescription:
      "Three important chelated forms of magnesium for enhanced absorption and full-body benefit.",
    longDescription:
      "Complete Mag is a dietary supplement providing 3 important chelated forms of magnesium for enhanced absorption. Magnesium is involved in over 300 enzymatic reactions and is foundational to nervous system, cardiovascular, and metabolic health.",
    benefits: [
      "Adrenal hormone balance",
      "Bone health and tooth enamel",
      "Cardiovascular function",
      "Detoxification & glucose metabolism",
      "Mental health and nerve function",
    ],
    category: "Minerals",
    image: "/products/complete-mag.png",
  },
  {
    slug: "curcumin-support",
    name: "Curcumin Support",
    price: 46.99,
    shortDescription:
      "Liver-protective, detoxifying, and free-radical-scavenging support from highly bioavailable curcumin.",
    longDescription:
      "Turmeric, a flavoring spice rich in Curcumin, has liver-protective, detoxifying, and free radical scavenging properties. Curcumin Support delivers a clinical-strength dose in a form designed for maximum absorption.",
    benefits: [
      "Protects against free radical damage and liver toxins",
      "Normalizes gallbladder function",
      "Aids digestion",
      "Helps maintain healthy cholesterol levels",
      "Supports circulation and blood vessel health",
    ],
    category: "Anti-inflammatory",
    image: "/products/curcumin-support.png",
  },
  {
    slug: "thyroid-support",
    name: "Thyroid Support",
    price: 49.99,
    shortDescription:
      "A vegetarian blend of Tyrosine, herbal extracts, vitamins, and minerals — featuring ForsLean® Coleus forskohlii.",
    longDescription:
      "THYROID SUPPORT is a vegetarian blend of Tyrosine with herbal extracts, vitamins and minerals not found in other supplements. It includes patented ForsLean® Coleus forskohlii to support the maintenance and proper function of a healthy thyroid.",
    benefits: [
      "Appetite and weight management",
      "Sustained energy",
      "Balanced mood",
      "Healthy T3 (Triiodothyronine) and T4 (Thyroxine) production",
    ],
    category: "Hormone Support",
    image: "/products/thyroid-support.png",
  },
  {
    slug: "methyl-support",
    name: "Methyl Support",
    price: 57.99,
    shortDescription:
      "Bioavailable B-vitamins and TMG for the methylation pathway central to brain, cardiovascular, and detox health.",
    longDescription:
      "Methylation is becoming one of the most recognized, foremost approaches to supporting overall health. From brain to cardiovascular system, from detoxification to energy production, the accessibility of methyl groups is essential to health. This formula goes beyond conventional usage and provides unparalleled methylation support using the most active, bioavailable forms of each ingredient.",
    benefits: [
      "Riboflavin (B2) for cofactor activation",
      "P-5-P (active B6) for 100+ enzymatic reactions",
      "Methylcobalamin (active B12) for instant utilization",
      "Trimethylglycine (TMG) for methyl donation and liver phase 2",
    ],
    category: "B-Vitamins",
    image: "/products/methyl-support.png",
  },
  {
    slug: "adk",
    name: "ADK",
    price: 37.5,
    shortDescription:
      "Balanced Vitamins A, D3, and K2 working together to maximize bone, calcium, and cardiovascular health.",
    longDescription:
      "ADK is a balanced formulation of nutrients — vitamins A, D3 and K2 — that work together to maximize bone building, calcium optimization, and cardiovascular health. The synergistic ratio ensures calcium ends up in bones and teeth rather than arterial walls.",
    benefits: [
      "Facilitate absorption of calcium for bone and heart health",
      "Reduce calcium build-up in blood vessels",
      "Optimize hormone therapy",
      "Reduce osteoporosis risk",
      "Reduce risk for certain cancers",
      "Support weight loss goals",
    ],
    category: "Vitamins",
    image: "/products/adk.png",
  },
  {
    slug: "evexipel-complete",
    name: "EvexiPEL Complete",
    price: 99.99,
    shortDescription:
      "Foundational nutrients designed to optimize the benefits of pellet hormone therapy.",
    longDescription:
      "The EvexiPEL Complete formula includes several vital nutrients — or fuel — the body needs to use hormones efficiently and optimize the benefits of pellet therapy. These key nutrients have been shown to support healthy hormone metabolism, body composition, and cardiovascular wellness in both men and women.",
    benefits: [
      "Healthy testosterone levels",
      "Estrogen balance for women and men",
      "Prostate and breast health",
      "Weight management and insulin sensitivity",
      "Cardiovascular and mitochondrial health",
      "Brain function and mood",
    ],
    category: "Hormone Support",
    image: "/products/evexipel-complete.png",
    badge: "Pellet companion",
  },
  {
    slug: "glutaryl",
    name: "Glutaryl",
    price: 99.0,
    shortDescription:
      "Topical glutathione spray — the body's master antioxidant delivered transdermally for optimal absorption.",
    longDescription:
      "Glutaryl is a unique topical glutathione spray that bypasses the digestive system and delivers reduced glutathione directly through the skin. Glutathione is the body's master antioxidant — central to detoxification, immune function, and cellular repair.",
    benefits: [
      "Replenishes the body's master antioxidant",
      "Supports liver and detoxification pathways",
      "Promotes immune resilience",
      "Easy transdermal delivery — no needles, no gut absorption issues",
    ],
    category: "Antioxidants",
    image: "/products/glutaryl.png",
  },
  {
    slug: "koi-cbd",
    name: "KOI CBD",
    price: 70.0,
    shortDescription:
      "Premium broad-spectrum CBD from a trusted, lab-tested source — for stress, sleep, and recovery support.",
    longDescription:
      "KOI CBD is one of the most respected names in the cannabidiol space, with rigorous third-party testing and consistent product quality. We carry KOI CBD as part of our integrative toolkit for patients managing anxiety, sleep, chronic pain, and recovery.",
    benefits: [
      "Supports stress and anxiety response",
      "Promotes restful sleep",
      "Aids muscle and joint recovery",
      "Third-party tested for purity and potency",
    ],
    category: "CBD",
    image: "/products/koi-cbd.png",
  },
  {
    slug: "immune-charge-100-ml",
    name: "Immune Charge® 100 mL",
    price: 95.0,
    shortDescription:
      "Liposomal liquid blend of Elderberry, Vitamin C, E, K1, K2, and high-dose Vitamin D for immune support.",
    longDescription:
      "Take immune support to the next level with Immune Charge+, a potent, high-dose liposomal blend with concentrated elderberry, vitamin C, and vitamin E. Includes a powerful 4,166 IU vitamin D and 438mcg vitamin K per 1 tsp. serving to support a healthy immune response. Refrigerate after opening. NET WT 3.38 FL OZ (100 mL). Also available in a 12-pack of individual shots.",
    benefits: [
      "High-dose elderberry for immune defense",
      "Liposomal vitamin C for superior absorption",
      "4,166 IU vitamin D per serving",
      "Vitamin K1, K2, and E synergy",
    ],
    category: "Immune Support",
    image: "/products/immune-charge-100ml.png",
  },
  {
    slug: "immune-charger-throat-spray",
    name: "Immune Charger Throat Spray",
    price: 46.99,
    shortDescription:
      "Liposomal liquid zinc throat spray with quercetin, luteolin, and propolis for targeted upper-respiratory support.",
    longDescription:
      "Immune Support Liquid Zinc Supplement with Quercetin — a 'Throat Coat' with Liposomal Absorption Technology. A highly bioavailable zinc-based spray designed to provide immune support right at the site of viral entry. NET WT 0.9 FL OZ (27 mL).",
    benefits: [
      "Liposomal zinc for superior absorption",
      "Targeted throat coverage where infections start",
      "Quercetin + luteolin flavonoid synergy",
      "Propolis for natural antimicrobial action",
    ],
    category: "Immune Support",
    image: "/products/immune-charger-throat-spray.png",
  },
  {
    slug: "sleep-gummies",
    name: "Sleep Gummies",
    price: 45.0,
    shortDescription:
      "Superfood gummies with botanicals and herbal extracts to calm the mind and promote rest — without melatonin.",
    longDescription:
      "Our Superfood Gummies were formulated with botanicals and herbal extracts designed to calm the mind and promote rest without melatonin. Servings: 30 per jar. Flavor: Tart Cherry. Made with 7 organic ingredients, ethically sourced from 6 independent farms. Use: Enjoy 1 gummy before bed.",
    benefits: [
      "Melatonin-free sleep support",
      "Tart cherry flavor for nightly enjoyment",
      "7 organic ingredients from independent farms",
      "Herbs extracted in-house to concentrate active compounds",
    ],
    category: "Sleep & Stress",
    image: "/products/sleep-gummies.png",
  },
  {
    slug: "dream-tea",
    name: "Dream Tea",
    price: 30.0,
    shortDescription:
      "Calming superfood tea with chamomile, lemon, and ginger — designed to promote rest without melatonin.",
    longDescription:
      "This Superfood Powder was formulated with botanicals and herbal extracts designed to calm the mind and promote rest without melatonin. Servings: 45 per jar. Flavor: Soothing Chamomile with notes of Lemon and Ginger. Made with 10 organic ingredients, ethically sourced from 7 independent farms. Use: Add 1 scoop (2g) to 8oz of hot water.",
    benefits: [
      "Melatonin-free sleep support",
      "Warming chamomile, lemon, and ginger",
      "10 organic ingredients from independent farms",
      "45 servings — ritual you can rely on nightly",
    ],
    category: "Sleep & Stress",
    image: "/products/dream-tea.png",
  },
  {
    slug: "turmeric-latte-mix",
    name: "Turmeric Latte Mix",
    price: 30.0,
    shortDescription:
      "Anti-inflammatory superfood latte powder with sustainably-sourced turmeric (>5% curcuminoids).",
    longDescription:
      "This Superfood Powder was formulated with powerful anti-inflammatories to help combat systemic inflammation. Each jar contains 45 servings. Flavor: Spicy, warm, with a touch of sweetness. Use: Add one scoop to 8oz of warm or steamed milk. Made with 10 organic ingredients sourced from 6 independent farms.",
    benefits: [
      "Combats systemic inflammation",
      "Sustainably sourced turmeric (>5% curcuminoids)",
      "Warm, sweet-spicy daily ritual",
      "10 organic ingredients from independent farms",
    ],
    category: "Anti-inflammatory",
    image: "/products/turmeric-latte-mix.png",
  },
];

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug);

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
