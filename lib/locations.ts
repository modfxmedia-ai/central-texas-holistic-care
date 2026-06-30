/**
 * Programmatic SEO source of truth.
 *
 * Every /areas-we-serve/* URL is generated from this file. Flip `live: true`
 * on a city or service to include it in the sitemap and pre-render its pages.
 *
 * Adding a new city/service:
 *   1. Append a new entry to CITIES or SERVICES with live: false
 *   2. Fill in real, researched data (not generic copy)
 *   3. Verify the page renders at /areas-we-serve/<slug>/[service]/
 *   4. Flip live: true once content is reviewed
 *   5. Submit the URL to Search Console (do not bulk-submit)
 */

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type CityCharacter =
  | "military"
  | "suburban-professional"
  | "college-town"
  | "medical-hub"
  | "rural"
  | "historic-village";

export type City = {
  /** URL slug, kebab-case, no spaces. */
  slug: string;
  /** Display name, e.g. "Harker Heights". */
  name: string;
  /** Possessive form, e.g. "Harker Heights'", used in headings. */
  possessive: string;
  /** County name without the word "County". */
  county: string;
  state: "Texas";
  /** ZIP codes served, populates Schema.org areaServed. */
  zipCodes: string[];
  lat: number;
  lng: number;
  population: number;
  /** Door-to-door drive time from 311 E. Stan Schlueter Loop, Killeen, TX 76542. */
  driveTimeMin: number;
  /** Primary route used to reach the clinic from this city. */
  primaryRoute: string;
  /** What this place is locally known for (1 short clause). */
  character: CityCharacter;
  /** One-sentence local color used in intros, keep specific. */
  shortDescription: string;
  /** Top employers / industries, pulled into "Who we treat" copy. */
  industries: string[];
  /** Named landmarks (parks, schools, businesses) for unique local context. */
  landmarks: string[];
  /** Slugs of cities used for internal linking on this page. */
  surroundingCitySlugs: string[];
  /** When true, included in sitemap + generateStaticParams. */
  live: boolean;
};

export type ServiceFAQ = (city: City) => { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Plural / casual phrasing for body copy (e.g. "hormone replacement"). */
  shortName: string;
  /** Canonical service hub on the main site, used in internal links. */
  hubHref: string;
  /** Primary keyword phrase, lowercase. */
  primaryKeyword: string;
  /** Secondary phrasings to weave naturally into copy. */
  secondaryKeywords: string[];
  /** 1-2 sentence summary used in meta description templates and hero. */
  shortDescription: string;
  /** 3-4 sentence overview used in the page intro. */
  longDescription: string;
  /** Bullet-style benefits, 5 to 7 items. */
  benefits: string[];
  /** Problems / symptoms this service addresses. */
  addresses: string[];
  /** 4-step treatment process; titles are also used as H3s. */
  process: { title: string; body: string }[];
  /** Generic FAQs (no city interpolation). */
  baseFaqs: { q: string; a: string }[];
  /** Localized FAQs that vary by city. */
  localFaqs: ServiceFAQ[];
  /** Schema.org medical type. */
  schemaType: "MedicalTherapy" | "MedicalProcedure" | "PreventiveProcedure";
  /** Schema.org MedicalSpecialty value. */
  schemaSpecialty: string;
  live: boolean;
};

/* -------------------------------------------------------------------------- */
/*                                   Cities                                   */
/* -------------------------------------------------------------------------- */

export const CITIES: ReadonlyArray<City> = [
  {
    slug: "killeen",
    name: "Killeen",
    possessive: "Killeen's",
    county: "Bell",
    state: "Texas",
    zipCodes: ["76540", "76541", "76542", "76543", "76544", "76549"],
    lat: 31.1171,
    lng: -97.7278,
    population: 156768,
    driveTimeMin: 5,
    primaryRoute: "East Stan Schlueter Loop / US-190",
    character: "military",
    shortDescription:
      "Home to Fort Cavazos and one of the youngest, most active populations in Central Texas, a community that needs care built around shift work, deployment schedules, and high physical demand.",
    industries: [
      "Fort Cavazos service members and families",
      "first responders and law enforcement",
      "shift-working healthcare staff",
      "small-business owners along South Fort Hood Street",
    ],
    landmarks: [
      "Fort Cavazos main gate (Clear Creek)",
      "Stewart C. Meyer Harker Heights / Killeen Public Library",
      "Lions Club Park",
      "Killeen Mall",
      "Long Branch Park",
    ],
    surroundingCitySlugs: ["harker-heights", "copperas-cove", "nolanville", "belton"],
    live: true,
  },
  {
    slug: "harker-heights",
    name: "Harker Heights",
    possessive: "Harker Heights'",
    county: "Bell",
    state: "Texas",
    zipCodes: ["76548"],
    lat: 31.0846,
    lng: -97.6597,
    population: 35878,
    driveTimeMin: 9,
    primaryRoute: "US-190 East / FM 2410",
    character: "suburban-professional",
    shortDescription:
      "A growing professional suburb along US-190 with strong household incomes, an active retiree population, and a community that prioritizes preventive, longevity-focused medicine.",
    industries: [
      "dual-income professionals commuting to Killeen and Temple",
      "retired military officers",
      "small-business and healthcare professionals",
      "youth-sports families along Knights Way",
    ],
    landmarks: [
      "Carl Levin Park",
      "Stewart C. Meyer Harker Heights Library",
      "Market Heights shopping center",
      "Dana Peak Park (Lake Belton)",
      "Skipcha Mountain Trail",
    ],
    surroundingCitySlugs: ["killeen", "nolanville", "belton", "copperas-cove"],
    live: true,
  },
  {
    slug: "copperas-cove",
    name: "Copperas Cove",
    possessive: "Copperas Cove's",
    county: "Coryell",
    state: "Texas",
    zipCodes: ["76522"],
    lat: 31.1196,
    lng: -97.9111,
    population: 36079,
    driveTimeMin: 20,
    primaryRoute: "US-190 West",
    character: "military",
    shortDescription:
      "A close-knit community on the western edge of Fort Cavazos where many active-duty and retired military families settle for the schools, the quieter pace, and quick access to West Range training areas.",
    industries: [
      "Fort Cavazos west-side military families",
      "Copperas Cove ISD educators and staff",
      "small-business owners along Business 190",
      "VA-connected retirees",
    ],
    landmarks: [
      "City Park (Copperas Cove)",
      "Five Hills Performing Arts Theater",
      "Ogletree Gap Preserve",
      "South Park",
      "the Copperas Cove Civic Center",
    ],
    surroundingCitySlugs: ["killeen", "lampasas", "harker-heights"],
    live: true,
  },

  /* ───────────────── Staged, not live, no sitemap entry yet ───────────────── */

  {
    slug: "belton",
    name: "Belton",
    possessive: "Belton's",
    county: "Bell",
    state: "Texas",
    zipCodes: ["76513"],
    lat: 31.0563,
    lng: -97.4641,
    population: 25060,
    driveTimeMin: 25,
    primaryRoute: "I-14 / US-190 East",
    character: "college-town",
    shortDescription:
      "Anchored by the University of Mary Hardin-Baylor and the Bell County courthouse square, with families balancing campus life, downtown businesses, and Lake Belton recreation.",
    industries: [
      "University of Mary Hardin-Baylor faculty and students",
      "Bell County government and legal professionals",
      "downtown small-business owners",
      "Lake Belton recreation families",
    ],
    landmarks: [
      "the historic Bell County Courthouse",
      "University of Mary Hardin-Baylor campus",
      "Miller Springs Nature Center",
      "Lake Belton",
      "Heritage Park",
    ],
    surroundingCitySlugs: ["harker-heights", "killeen", "temple", "salado"],
    live: false,
  },
  {
    slug: "temple",
    name: "Temple",
    possessive: "Temple's",
    county: "Bell",
    state: "Texas",
    zipCodes: ["76501", "76502", "76504"],
    lat: 31.0982,
    lng: -97.3428,
    population: 89000,
    driveTimeMin: 35,
    primaryRoute: "I-14 East to I-35 North",
    character: "medical-hub",
    shortDescription:
      "A regional medical and rail hub built around Baylor Scott & White and a growing biotech corridor, a community already comfortable with integrative, lab-driven care.",
    industries: [
      "Baylor Scott & White Medical Center clinicians and staff",
      "BNSF rail employees",
      "Temple College students and faculty",
      "manufacturing and logistics professionals",
    ],
    landmarks: [
      "Baylor Scott & White Memorial Hospital",
      "the Railroad and Heritage Museum",
      "Miller Park",
      "Temple College",
      "Lions Park",
    ],
    surroundingCitySlugs: ["belton", "salado", "harker-heights", "killeen"],
    live: false,
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                  Services                                  */
/* -------------------------------------------------------------------------- */

export const SERVICES: ReadonlyArray<Service> = [
  {
    slug: "hormone-therapy",
    name: "Hormone Therapy",
    shortName: "hormone replacement therapy",
    hubHref: "/hormone-therapy/",
    primaryKeyword: "hormone replacement therapy",
    secondaryKeywords: [
      "bioidentical hormone therapy",
      "BHRT",
      "hormone pellet therapy",
      "low estrogen treatment",
      "low testosterone treatment",
      "perimenopause care",
    ],
    shortDescription:
      "Lab-guided bioidentical hormone replacement therapy (BHRT) for men and women, pellets, injections, creams, and oral options tailored to your bloodwork.",
    longDescription:
      "Our hormone therapy program treats the root drivers of fatigue, brain fog, low libido, sleep disruption, and mood changes by restoring testosterone, estrogen, and progesterone to healthy ranges using bioidentical, body-identical hormones. Every plan starts with comprehensive labs and a clinician-led consult, then matches you to the right delivery method, pellet, injection, topical, or oral, and the right dose. We re-test, adjust, and stay with you for as long as the protocol is active.",
    benefits: [
      "Restored energy and sharper focus within the first few weeks",
      "Improved sleep quality and recovery",
      "Stable mood, lower anxiety, and reduced irritability",
      "Better libido, sexual function, and intimacy",
      "Healthier body composition, leaner mass, less stubborn fat",
      "Improved bone density and long-term cardiovascular markers",
      "A dose adjusted to your labs, not a one-size template",
    ],
    addresses: [
      "low testosterone (Low T) in men 30+",
      "perimenopausal and menopausal symptoms",
      "irregular cycles and PMS-related mood swings",
      "post-partum hormone shifts",
      "thyroid-related fatigue when paired with thyroid optimization",
      "andropause and age-related decline in vitality",
    ],
    process: [
      {
        title: "Comprehensive lab panel",
        body: "We start with a thorough hormone, metabolic, and cardiovascular panel so every dosing decision is grounded in your actual biology, not a checklist.",
      },
      {
        title: "Clinician-led consult",
        body: "You sit down with a provider, not a sales rep, to review symptoms, history, goals, and the trade-offs of each delivery route.",
      },
      {
        title: "Personalized protocol",
        body: "We build a plan around pellets, injections, creams, or oral hormones, and pair it with sleep, nutrition, and supplement support when indicated.",
      },
      {
        title: "Re-test and refine",
        body: "Follow-up labs at the right intervals confirm levels are landing where they should, and we adjust the dose until you feel like yourself again.",
      },
    ],
    baseFaqs: [
      {
        q: "Is bioidentical hormone therapy safe?",
        a: "When prescribed and monitored by a clinician using labs, bioidentical hormone therapy has a strong safety profile. We screen for cardiovascular, prostate, and breast-health risk factors before starting and re-check labs on a defined cadence to keep levels in physiologic ranges.",
      },
      {
        q: "How long until I feel a difference?",
        a: "Most patients notice improvements in energy, sleep, and mood within 2-4 weeks. Libido, body composition, and recovery typically respond over 8-12 weeks as levels stabilize.",
      },
      {
        q: "Which delivery method is best, pellets, injections, or creams?",
        a: "The best route depends on your labs, lifestyle, and how your body absorbs hormones. Pellets are low-maintenance and last 3-5 months; injections offer the most adjustability; creams and oral options work well for many women. We walk you through the trade-offs in your consult.",
      },
      {
        q: "Does insurance cover hormone therapy?",
        a: "Coverage varies by carrier and by therapy type. Many patients use HSA/FSA dollars, and we offer 0% APR financing through Cherry and Denefits so cost is rarely the blocker.",
      },
    ],
    localFaqs: [
      (city) => ({
        q: `Do you treat patients from ${city.name}?`,
        a: `Yes, patients drive in from ${city.name} regularly. Our clinic is roughly ${city.driveTimeMin} minutes from ${city.name} via ${city.primaryRoute}, and many ${city.name} residents bundle their visit with grocery or work errands in Killeen on the same trip.`,
      }),
    ],
    schemaType: "MedicalTherapy",
    schemaSpecialty: "Endocrinology",
    live: true,
  },

  {
    slug: "iv-nutrition",
    name: "IV Nutrition Therapy",
    shortName: "IV nutrition",
    hubHref: "/iv-nutrition/",
    primaryKeyword: "IV nutrition therapy",
    secondaryKeywords: [
      "IV vitamin therapy",
      "IV hydration therapy",
      "vitamin infusion",
      "Myers cocktail",
      "immune IV drip",
      "athletic recovery IV",
    ],
    shortDescription:
      "Physician-supervised IV infusions delivering hydration, B-complex, vitamin C, magnesium, glutathione, and amino acids directly to your bloodstream for full absorption.",
    longDescription:
      "Our IV nutrition program delivers carefully formulated infusions to the patients who actually need them, people recovering from illness, athletes between training blocks, busy professionals running on empty, and patients with absorption issues that make oral supplementation unreliable. Every drip is built around your goal, immune support, recovery, energy, or a full-body reset, and every infusion is screened and supervised by a clinician, not a kiosk technician.",
    benefits: [
      "Complete bioavailability, 100% absorption, no GI bottleneck",
      "Faster recovery from illness, travel, and physical exertion",
      "Restored hydration and electrolyte balance in 30-45 minutes",
      "Targeted immune support during flu season and pre-travel",
      "A calm, supervised drip room, not a back room or a kiosk",
      "Customizable add-ons (anti-nausea, NAD+, glutathione push) when appropriate",
    ],
    addresses: [
      "post-illness fatigue and lingering viral symptoms",
      "dehydration and electrolyte deficits",
      "athletic recovery and DOMS (delayed onset muscle soreness)",
      "frequent travel, jet lag, and time-zone disruption",
      "high-stress periods with poor sleep and recovery",
      "nutrient absorption issues following GI illness or surgery",
    ],
    process: [
      {
        title: "Brief intake",
        body: "We confirm your goal for the visit, review medications, and check basic vitals before mixing your drip.",
      },
      {
        title: "Custom-mixed infusion",
        body: "Your IV is prepared in-clinic with the exact electrolytes, B-vitamins, antioxidants, and any approved add-ons your protocol calls for.",
      },
      {
        title: "Supervised drip",
        body: "You relax in a private, comfortable chair while the infusion runs, typically 30-60 minutes, with a clinician available at all times.",
      },
      {
        title: "Aftercare and cadence",
        body: "We give you a clear hydration and follow-up plan, and recommend the cadence (one-off, weekly, or monthly) that fits your goal.",
      },
    ],
    baseFaqs: [
      {
        q: "How long does an IV drip take?",
        a: "Most infusions run 30-60 minutes from IV start to finish, including a brief intake and IV placement. NAD+ drips run longer.",
      },
      {
        q: "Will I feel better immediately?",
        a: "Most patients notice improved hydration, energy, and mental clarity within hours. Immune and recovery effects build over the following 24-72 hours.",
      },
      {
        q: "Is IV therapy safe?",
        a: "Every drip is physician-supervised. We screen briefly before starting, confirm your medications, and adjust formulations based on what you can safely receive.",
      },
      {
        q: "How often should I get an IV?",
        a: "It depends on your goal. For general wellness, monthly works for most patients. For acute illness or athletic blocks, weekly during the period is common. Your provider will recommend a cadence.",
      },
    ],
    localFaqs: [
      (city) => ({
        q: `Can I get an IV drip the same day from ${city.name}?`,
        a: `Same-day appointments are often available depending on the calendar. ${city.name} patients usually reach our Killeen clinic in about ${city.driveTimeMin} minutes via ${city.primaryRoute}, and most plan their drip around lunch or end of day so they can go straight home and rest.`,
      }),
    ],
    schemaType: "MedicalTherapy",
    schemaSpecialty: "InternalMedicine",
    live: true,
  },

  {
    slug: "testosterone-therapy",
    name: "Testosterone Therapy",
    shortName: "testosterone replacement therapy",
    hubHref: "/men/testosterone/",
    primaryKeyword: "testosterone replacement therapy",
    secondaryKeywords: [
      "TRT",
      "low testosterone treatment",
      "Low T clinic",
      "testosterone injections",
      "testosterone pellets",
      "hormone optimization for men",
    ],
    shortDescription:
      "Lab-guided testosterone replacement therapy (TRT) for men, restore energy, strength, focus, libido, and recovery with a physician-supervised protocol.",
    longDescription:
      "Our testosterone replacement program is built for men who are doing the right things, training, eating well, sleeping, and still feel a step slower than they should. We confirm Low T with bloodwork (total testosterone, free testosterone, estradiol, SHBG, PSA, CBC, and metabolic markers), then match you to the right delivery method and dose. Every plan is overseen by a clinician, with labs re-checked on a schedule so we hit the target range without overshooting.",
    benefits: [
      "Restored energy, drive, and motivation",
      "Improved strength, recovery, and exercise tolerance",
      "Sharper focus and steadier mood",
      "Better libido and sexual function",
      "Leaner body composition over 3-6 months",
      "Improved sleep quality and morning energy",
      "Clear, measured progress with re-checked labs",
    ],
    addresses: [
      "diagnosed low testosterone (typically total T under ~350 ng/dL with symptoms)",
      "persistent fatigue, low motivation, and brain fog",
      "loss of strength and stalled training progress",
      "low libido and erectile changes",
      "weight gain around the midsection despite effort",
      "sleep that doesn't restore, waking unrefreshed",
    ],
    process: [
      {
        title: "Symptom and history review",
        body: "We start with a real conversation about what's changed, your training, sleep, stress, and family history, not a checklist intake.",
      },
      {
        title: "Comprehensive lab panel",
        body: "Total and free testosterone, estradiol, SHBG, PSA, CBC, lipids, and metabolic markers, so we treat the whole picture, not one number.",
      },
      {
        title: "Personalized TRT protocol",
        body: "We match you to injection, pellet, or topical delivery based on labs, lifestyle, and preference, and add ancillary medications only when indicated.",
      },
      {
        title: "Re-test, refine, repeat",
        body: "Follow-up labs at 6-8 weeks confirm we're hitting the right range. From there, we re-check on a defined cadence and adjust as your goals evolve.",
      },
    ],
    baseFaqs: [
      {
        q: "Am I a candidate for TRT?",
        a: "Most men we treat have total testosterone in the low-normal or below-range zone with clear symptoms, fatigue, low libido, slow recovery, mood changes. The lab panel and consult together determine candidacy. We do not start TRT on symptoms alone.",
      },
      {
        q: "How long until I feel a difference?",
        a: "Energy, mood, and libido often respond in the first 2-4 weeks. Strength, body composition, and recovery typically follow over 8-12 weeks as levels stabilize.",
      },
      {
        q: "Will I have to be on TRT for life?",
        a: "Many men stay on TRT long-term because the underlying biology doesn't reverse. Some can pause for fertility windows. We talk through expected duration and fertility planning during your consult.",
      },
      {
        q: "Does TRT affect fertility?",
        a: "TRT can suppress natural sperm production. If fertility is a near-term priority, we discuss alternatives or add medications to preserve fertility before starting.",
      },
    ],
    localFaqs: [
      (city) => ({
        q: `Where can I get TRT near ${city.name}?`,
        a: `Our clinic in Killeen is roughly ${city.driveTimeMin} minutes from ${city.name} via ${city.primaryRoute}, many patients schedule labs and consults back-to-back so they only make the trip once.`,
      }),
    ],
    schemaType: "MedicalTherapy",
    schemaSpecialty: "Endocrinology",
    live: true,
  },

  /* ───────────────── Staged, not live yet ───────────────── */

  {
    slug: "wellness-exams",
    name: "Annual Wellness Exams",
    shortName: "annual wellness exams",
    hubHref: "/men/wellness-exams/",
    primaryKeyword: "annual wellness exam",
    secondaryKeywords: [
      "preventive wellness checkup",
      "executive physical",
      "biomarker labs",
      "longevity-focused physical",
    ],
    shortDescription:
      "Comprehensive annual wellness exams with biomarker labs, cardiovascular screening, and a personalized prevention plan.",
    longDescription:
      "Our annual wellness exam is built to catch the things a standard 15-minute physical misses, early metabolic dysfunction, declining hormone trends, lipid patterns that matter, and modifiable risk factors that change your trajectory over the next ten years.",
    benefits: [
      "Catch problems while they're still reversible",
      "A full picture of metabolic, hormonal, and cardiovascular health",
      "A clear, prioritized prevention plan",
      "Updated immunizations and age-appropriate screenings",
      "Direct access to your provider for follow-up questions",
    ],
    addresses: [
      "annual preventive screening",
      "longevity and healthspan planning",
      "metabolic and cardiovascular risk assessment",
      "hormone-trend baseline",
    ],
    process: [
      { title: "Pre-visit lab work", body: "Comprehensive panel ordered before your visit so the appointment is spent on findings, not waiting." },
      { title: "Physical exam and review", body: "Head-to-toe physical with your provider, plus a review of every lab value." },
      { title: "Personalized plan", body: "Clear next steps, lifestyle, supplementation, screening, or follow-up, written out." },
      { title: "Annual re-check", body: "We schedule your next year on the way out so prevention stays on the calendar." },
    ],
    baseFaqs: [
      { q: "How long is an annual wellness exam?", a: "Plan for 45-60 minutes in clinic, plus your pre-visit lab draw." },
    ],
    localFaqs: [
      (city) => ({ q: `Do you accept new patients from ${city.name}?`, a: `Yes. We welcome new annual wellness patients from ${city.name} and the surrounding ${city.county} County communities.` }),
    ],
    schemaType: "PreventiveProcedure",
    schemaSpecialty: "PrimaryCare",
    live: false,
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getLiveCities(): City[] {
  return CITIES.filter((c) => c.live);
}

export function getLiveServices(): Service[] {
  return SERVICES.filter((s) => s.live);
}

/**
 * Returns every live city × live service pair. Used for sitemap and
 * generateStaticParams in the [service] route.
 */
export function getLiveCityServicePairs(): { city: City; service: Service }[] {
  const pairs: { city: City; service: Service }[] = [];
  for (const city of getLiveCities()) {
    for (const service of getLiveServices()) {
      pairs.push({ city, service });
    }
  }
  return pairs;
}

/**
 * Returns the N nearest surrounding cities (live only) that we want to
 * cross-link from the given city. Falls back to other live cities if the
 * surrounding list is short.
 */
export function getNearbyCities(city: City, count = 3): City[] {
  const live = getLiveCities().filter((c) => c.slug !== city.slug);
  const ordered: City[] = [];
  for (const slug of city.surroundingCitySlugs) {
    const found = live.find((c) => c.slug === slug);
    if (found) ordered.push(found);
  }
  for (const c of live) {
    if (!ordered.find((o) => o.slug === c.slug)) ordered.push(c);
  }
  return ordered.slice(0, count);
}
