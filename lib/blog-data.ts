/**
 * Blog posts for Central Texas Holistic Care.
 *
 * Content is authored in a light Markdown-ish structure and rendered by
 * `BlogPostClient`, supported block types:
 *   - "p"       paragraph
 *   - "h2"      section heading
 *   - "h3"      sub heading
 *   - "quote"   pull quote (with optional attribution)
 *   - "list"    unordered list
 *   - "steps"   numbered steps (with optional per-item title)
 *   - "callout" highlighted info card
 *
 * Kept as a plain-data module (no React deps) so it can be imported from
 * both server metadata generators and client components.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title?: string; text: string }[] }
  | { type: "callout"; title: string; text: string };

export type BlogAuthor = {
  name: string;
  credentials: string;
  role: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryHref: string;
  readMinutes: number;
  publishedAt: string; // ISO date
  updatedAt?: string;
  author: BlogAuthor;
  coverImage: string;
  tags: string[];
  relatedServiceHref: string;
  relatedServiceLabel: string;
  /** Long-form article body. */
  content: BlogBlock[];
};

const DR_AUGUSTIN: BlogAuthor = {
  name: "Dr. Bimisa Augustin",
  credentials: "DNP, FNP-C, PMHNP-BC",
  role: "Doctor of Nursing Practice · Family & Psychiatric NP",
  image: "/images/providers/dr-bimisa-augustin.jpg",
};

const DR_GARTH: BlogAuthor = {
  name: "Dr. Larissa Garth",
  credentials: "DMSC, MPH, MPAS, PA-C",
  role: "Doctor of Medical Science · Certified Physician Assistant",
  image: "/images/providers/dr-larissa-garth.jpg",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "7-signs-of-hormone-imbalance-women-over-35",
    title:
      "7 Signs of Hormone Imbalance Every Woman Over 35 Should Take Seriously",
    excerpt:
      "Fatigue, mood swings, weight that won't budge, these are not just 'getting older.' Here's how our clinicians decode the seven earliest signs of hormone imbalance in women, and what a lab-guided plan actually looks like.",
    category: "Hormone Therapy",
    categoryHref: "/hormone-therapy/",
    readMinutes: 8,
    publishedAt: "2026-05-22",
    updatedAt: "2026-07-10",
    author: DR_AUGUSTIN,
    coverImage: "/images/blog-images/hormone-imbalance-blog-img-v2.webp",
    tags: ["Hormones", "Women's Health", "Perimenopause", "BHRT"],
    relatedServiceHref: "/hormone-therapy/",
    relatedServiceLabel: "Explore Hormone Therapy",
    content: [
      {
        type: "p",
        text: "By the time most women walk into our Killeen clinic, they've been quietly negotiating with their bodies for years. Sleep gets lighter. Periods drift. Mood spikes without warning. The routine labs come back \"normal,\" and yet nothing feels normal. If that description lands close to home, you're not imagining it, and you're not alone.",
      },
      {
        type: "p",
        text: "Hormonal shifts typically begin in the mid-thirties, long before the average patient hears the word perimenopause from a provider. Below are the seven signs we see most often at Central Texas Holistic Care, why they show up, and how we build a plan that actually addresses the root cause.",
      },
      {
        type: "callout",
        title: "Quick note before we dive in",
        text: "Hormone imbalance is a clinical diagnosis. Symptoms alone are not enough, we always confirm with a comprehensive lab panel before recommending therapy.",
      },
      { type: "h2", text: "1. Persistent fatigue that sleep won't fix" },
      {
        type: "p",
        text: "You get eight hours and still wake up flat. Coffee wears off by 10 a.m. This kind of fatigue is often driven by falling progesterone, sluggish thyroid conversion, or elevated cortisol, sometimes all three. A single TSH value won't reveal it; we look at free T3, reverse T3, morning cortisol, and progesterone together.",
      },
      { type: "h2", text: "2. Sleep that fractures at 3 a.m." },
      {
        type: "p",
        text: "Waking between 2 and 4 a.m., wide awake, sometimes anxious, is a hallmark of shifting progesterone paired with a cortisol surge. Restoring healthy sleep architecture is often the first win when we begin bioidentical progesterone support.",
      },
      { type: "h2", text: "3. Weight that stops responding to old habits" },
      {
        type: "p",
        text: "The workouts and eating pattern that used to keep you lean now do nothing, or the scale creeps up. Estrogen dominance, insulin resistance, and low testosterone (yes, women need it too) all reshape body composition in your late thirties and forties.",
      },
      { type: "h2", text: "4. Mood swings, irritability, or a new anxiety" },
      {
        type: "p",
        text: "Progesterone is naturally calming, it's the raw material your brain uses to make GABA. When it drops, the nervous system loses a brake. Patients often describe it as feeling \"turned up to 11\" over things that never used to matter.",
      },
      { type: "h2", text: "5. Cycle changes: heavier, lighter, or unpredictable" },
      {
        type: "p",
        text: "Cycles shortening from 28 to 24 days, spotting mid-cycle, or heavier flow after a lifetime of predictability are early perimenopause signals. They deserve a workup, not a shrug.",
      },
      { type: "h2", text: "6. Low libido and vaginal dryness" },
      {
        type: "p",
        text: "Falling estradiol thins vaginal tissue and lowers natural lubrication. Low testosterone dampens desire itself. Both are highly treatable and rarely discussed with the depth they deserve in a rushed 10-minute visit.",
      },
      { type: "h2", text: "7. Brain fog and 'what was I saying?' moments" },
      {
        type: "p",
        text: "Estrogen supports cerebral blood flow and neurotransmitter balance. As it fluctuates, so does executive function. Patients describe walking into a room and forgetting why, or losing the thread of a sentence mid-way.",
      },
      { type: "h2", text: "What a workup actually looks like at CTHC" },
      {
        type: "steps",
        items: [
          {
            title: "Comprehensive lab panel",
            text: "Sex hormones (estradiol, progesterone, testosterone, free & total), full thyroid, fasting insulin, cortisol rhythm, and inflammation markers.",
          },
          {
            title: "Root-cause consultation",
            text: "A 45-60 minute visit where we correlate your symptoms with the numbers, not the other way around.",
          },
          {
            title: "Personalized plan",
            text: "Bioidentical hormone therapy (pellet, cream, injection, or oral), targeted nutrients, and lifestyle levers matched to your labs.",
          },
          {
            title: "Follow-up & recalibration",
            text: "We retest at 8-12 weeks and adjust. Nothing about your body is static, so your plan shouldn't be either.",
          },
        ],
      },
      {
        type: "quote",
        text: "You should not have to earn feeling well by proving you are sick enough. If your labs are 'normal' but your life is not, that is a signal, not a verdict.",
        cite: "Dr. Bimisa Augustin, DNP",
      },
      { type: "h2", text: "When to book a consult" },
      {
        type: "p",
        text: "If two or more of the signs above have been present for three months or longer, it is worth a conversation. We accept most major insurance, and financing is available for cash-pay hormone programs.",
      },
    ],
  },
  {
    slug: "iv-nutrition-therapy-benefits-central-texas",
    title:
      "IV Nutrition Therapy in Central Texas: What It Is, Who It Helps, and Why It Works",
    excerpt:
      "From immune resilience to post-workout recovery, IV nutrition delivers vitamins and minerals directly into the bloodstream. Here's an honest, physician-supervised look at what these drips do, and what they don't.",
    category: "IV Nutrition",
    categoryHref: "/iv-nutrition/",
    readMinutes: 6,
    publishedAt: "2026-06-04",
    updatedAt: "2026-07-01",
    author: DR_GARTH,
    coverImage: "/images/blog-images/iv-nutrition-therapy-blog-img.jpeg",
    tags: ["IV Therapy", "Wellness", "Immune Support", "Hydration"],
    relatedServiceHref: "/iv-nutrition/",
    relatedServiceLabel: "See IV Nutrition Menu",
    content: [
      {
        type: "p",
        text: "IV nutrition therapy is one of the fastest-growing wellness services in the country, and, admittedly, one of the most over-hyped online. Marketing claims range from reasonable to ridiculous. So let's cut through the noise and walk through what a physician-supervised IV program actually does, based on what we see day-to-day at our Killeen clinic.",
      },
      { type: "h2", text: "How IV therapy is different from oral supplements" },
      {
        type: "p",
        text: "The gut is a bottleneck. Depending on the nutrient, oral absorption sits somewhere between 20 percent and 60 percent, and it drops further during stress, illness, GI inflammation, or with certain medications. IV therapy bypasses digestion entirely, delivering 100 percent bioavailability directly to the bloodstream.",
      },
      {
        type: "callout",
        title: "The takeaway",
        text: "If your labs show a deficiency or your gut is struggling to absorb, IV can produce results in one visit that oral supplements would take weeks, or never, to reach.",
      },
      { type: "h2", text: "Who benefits most" },
      {
        type: "list",
        items: [
          "Adults recovering from viral illness or a cold that won't fully clear",
          "Athletes and weekend warriors managing training loads or muscle soreness",
          "Frequent travelers battling jet lag, dehydration, and disrupted sleep",
          "Migraine and chronic fatigue patients who have plateaued on oral protocols",
          "Adults with malabsorption issues (IBS, celiac, gastric bypass, chronic PPI use)",
          "Anyone recovering the morning after, hydration and B-vitamins do the heavy lifting",
        ],
      },
      { type: "h2", text: "Our four most-requested drips" },
      {
        type: "steps",
        items: [
          {
            title: "Myers' Cocktail",
            text: "The classic. B-complex, B12, magnesium, calcium, and vitamin C, the workhorse of general wellness, immune support, and low-energy days.",
          },
          {
            title: "Immune Booster",
            text: "High-dose vitamin C, zinc, and glutathione. Designed to hit early, the first 48 hours of feeling run-down is where this drip earns its reputation.",
          },
          {
            title: "Workout Recovery",
            text: "Amino acids, electrolytes, and B-vitamins to shorten soreness and rehydrate at the cellular level. A favorite of our CrossFit and endurance patients.",
          },
          {
            title: "Hangover Rescue",
            text: "Saline, anti-nausea and anti-inflammatory support, plus B-complex. Most patients leave feeling fully functional inside 45 minutes.",
          },
        ],
      },
      { type: "h2", text: "What to expect at your first visit" },
      {
        type: "p",
        text: "A licensed clinician reviews your intake, checks vitals, and confirms there are no contraindications. Infusions run 30 to 60 minutes in a private, calm setting. Most patients read, work, or nap. You'll leave hydrated, and the peak benefit typically kicks in within 12 to 24 hours.",
      },
      {
        type: "quote",
        text: "The magic isn't the bag on the pole. It's the right drip, matched to the right person, on the right day. That's what physician supervision is for.",
        cite: "Dr. Larissa Garth, PA-C",
      },
      { type: "h2", text: "What IV therapy is not" },
      {
        type: "p",
        text: "It is not a cure-all. It won't replace sleep, sunlight, real food, or strength training. It won't override serious medical conditions that deserve their own workup. Used well, it's a precision tool, not a supplement stack in liquid form.",
      },
      { type: "h2", text: "Booking and pricing" },
      {
        type: "p",
        text: "Single infusions start at accessible price points, and members access every drip on the menu at a lower monthly rate. We're happy to talk through the right cadence for your goals during a free discovery call.",
      },
    ],
  },
  {
    slug: "testosterone-therapy-mens-vitality-guide",
    title:
      "Testosterone Therapy for Men: A Clinician's Honest Guide to Reclaiming Energy, Drive, and Focus",
    excerpt:
      "Testosterone is not a shortcut, it's a metabolism, mood, and muscle hormone that steadily declines after 30. Here's how we evaluate candidates, what the treatment feels like, and the results real patients can expect.",
    category: "Men's Health",
    categoryHref: "/men/",
    readMinutes: 9,
    publishedAt: "2026-06-19",
    updatedAt: "2026-07-11",
    author: DR_AUGUSTIN,
    coverImage: "/images/blog-images/testosterone-blog-img.jpg",
    tags: ["Testosterone", "Men's Health", "TRT", "Longevity"],
    relatedServiceHref: "/men/testosterone/",
    relatedServiceLabel: "Explore Testosterone Therapy",
    content: [
      {
        type: "p",
        text: "The men we treat rarely walk in asking for testosterone by name. They come in because their edge is gone. Workouts feel harder for less return. Sleep feels shallow. Motivation dims, and the ambition that once ran on autopilot now needs coffee, a cold shower, and a pep talk. Testosterone is often, not always, the missing variable.",
      },
      { type: "h2", text: "What happens to testosterone after 30" },
      {
        type: "p",
        text: "Total testosterone declines by roughly one to two percent per year after age 30. But the free (bioavailable) fraction, the portion that actually reaches your tissues, can fall much faster, especially in the presence of chronic stress, poor sleep, alcohol, or rising sex hormone binding globulin (SHBG).",
      },
      {
        type: "callout",
        title: "Why 'normal' isn't the answer",
        text: "Standard lab ranges span 300-1,000 ng/dL. A 42-year-old at 320 is technically 'normal,' but almost never feels optimal. We treat symptoms plus labs, not labs in isolation.",
      },
      { type: "h2", text: "Signs your testosterone may be low" },
      {
        type: "list",
        items: [
          "Persistent fatigue and reduced motivation",
          "Loss of morning erections and lower libido",
          "Difficulty building or maintaining muscle despite training",
          "Increased body fat, particularly around the waist",
          "Brain fog, irritability, or a shorter fuse",
          "Longer recovery from workouts, minor injuries, or illness",
          "Reduced confidence and a general 'flatness' of mood",
        ],
      },
      { type: "h2", text: "The workup, what actually gets tested" },
      {
        type: "steps",
        items: [
          {
            title: "Comprehensive hormone panel",
            text: "Total T, free T, SHBG, estradiol, DHT, LH, FSH, prolactin. This lets us distinguish primary from secondary causes.",
          },
          {
            title: "Metabolic and safety markers",
            text: "Complete blood count, lipid panel, PSA, hemoglobin A1c, fasting insulin, and liver enzymes. We rule out contraindications before ever writing a prescription.",
          },
          {
            title: "Symptom scoring & lifestyle review",
            text: "We use validated symptom questionnaires alongside a real conversation about sleep, stress, training, alcohol, and relationships.",
          },
          {
            title: "Shared decision-making",
            text: "TRT is a long-term commitment. We walk through delivery options, cost, monitoring cadence, and fertility considerations before you decide.",
          },
        ],
      },
      { type: "h2", text: "How treatment feels, the honest timeline" },
      { type: "h3", text: "Weeks 1-3" },
      {
        type: "p",
        text: "Sleep depth often improves first. Mood lifts. Libido starts to return. Water retention can spike briefly as levels equilibrate.",
      },
      { type: "h3", text: "Weeks 4-8" },
      {
        type: "p",
        text: "Energy stabilizes throughout the day. Recovery from workouts sharpens. Mental focus and drive return. This is the phase where most patients say, 'I feel like myself again.'",
      },
      { type: "h3", text: "Weeks 12+" },
      {
        type: "p",
        text: "Body composition begins to shift, leaner tissue, less abdominal fat, assuming training and nutrition are in place. Follow-up labs at week 8-12 confirm your dose is dialed in.",
      },
      {
        type: "quote",
        text: "Testosterone therapy done well is boring, in the best way. Predictable dosing, predictable labs, predictable results. The fireworks come from you getting your life back.",
        cite: "Dr. Bimisa Augustin, DNP",
      },
      { type: "h2", text: "Delivery options we offer" },
      {
        type: "list",
        items: [
          "Weekly intramuscular or subcutaneous injections, the gold standard for stability",
          "Bioidentical pellets placed every 4-6 months, set-and-forget convenience",
          "Topical creams, a good starting point for patients who want a lower-commitment trial",
        ],
      },
      { type: "h2", text: "Who is not a candidate" },
      {
        type: "p",
        text: "We screen carefully. Men with active prostate cancer, severe untreated sleep apnea, uncontrolled polycythemia, or who are actively pursuing fertility require a different plan (often with adjuncts like HCG or enclomiphene). Nothing about our program is one-size-fits-all.",
      },
      { type: "h2", text: "Ready for a real conversation?" },
      {
        type: "p",
        text: "If two or more of the symptoms above have been quietly compounding, book a consultation. Bring recent labs if you have them, and bring your questions. This is your body, your decade, and your decision.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, count);
}

export function formatPublishedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
