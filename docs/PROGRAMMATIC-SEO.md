# Programmatic SEO: Areas We Serve

This document covers the programmatic city × service system that lives under
`/areas-we-serve/`. Read this before adding a new city, a new service, or
flipping a page live.

## Architecture

| Path                                          | Purpose                                              |
| --------------------------------------------- | ---------------------------------------------------- |
| `lib/locations.ts`                            | Single source of truth. Cities + services + helpers. |
| `lib/programmatic-content.ts`                 | Composes unique copy per (city × service) pair.      |
| `app/areas-we-serve/page.tsx`                 | Root hub. Lists live cities.                         |
| `app/areas-we-serve/[city]/page.tsx`          | City hub. Lists live services in that city.          |
| `app/areas-we-serve/[city]/[service]/page.tsx`| Service-in-city page (the SEO target).               |
| `app/sitemap.ts`                              | Reads `getLiveCities()` + `getLiveCityServicePairs()`.|

All three page templates are server components. They use `generateStaticParams`
to pre-render every live combination at build time, plus `generateMetadata`
for per-page canonical, title, and description.

## The `live` flag

Every city and every service has a `live: boolean`. Only entries with
`live: true` are:

1. Included in `generateStaticParams` (so they pre-render).
2. Emitted in the sitemap.
3. Reachable through `/areas-we-serve/...` links.

Entries with `live: false` are kept in the file as staged content. Visiting
their URL directly returns a 404 via `notFound()`. This is the staged-rollout
mechanism: write real content, leave `live: false`, review, then flip it on
in a small batch.

## Adding a new city

1. Append a new `City` to `CITIES` in `lib/locations.ts` with `live: false`.
2. Fill in **real** values, especially:
   - `shortDescription`: one specific sentence about the place. Do not write
     generic Texas filler.
   - `landmarks`: 3-5 actual named places (parks, schools, businesses).
   - `industries`: who actually lives and works there (military, education,
     retirees, etc).
   - `driveTimeMin` + `primaryRoute`: drive from the clinic in Google Maps and
     write what you actually see.
   - `surroundingCitySlugs`: slugs of other cities in `CITIES`. These power the
     "nearby communities" internal links.
   - `character`: one of `military | suburban-professional | college-town |
     medical-hub | rural | historic-village`. This selects the intro variant
     in `programmatic-content.ts`, so the same service reads differently in
     different city types.
3. Visit `/areas-we-serve/<slug>/` and `/areas-we-serve/<slug>/<each-service>/`
   in dev. Confirm the copy reads naturally for that specific place.
4. Flip `live: true`.
5. Submit only the new URLs to Google Search Console (do not bulk-submit). Add
   a Last Modified bump in the sitemap if you update an existing city.

## Adding a new service

1. Append a new `Service` to `SERVICES` with `live: false`.
2. Fill in:
   - `hubHref`: the existing canonical service page on the site (e.g.
     `/hormone-therapy/`). Used for the "main page" backlink.
   - `process`: 4 steps. Each step's `title` becomes an H3.
   - `baseFaqs`: 4-6 city-agnostic FAQs.
   - `localFaqs`: 1-2 functions that take a `City` and return a question
     interpolating real city data.
   - `schemaType` + `schemaSpecialty`: Schema.org medical type.
3. If the service needs a different intro shape, extend
   `composeWhyChoose()` in `lib/programmatic-content.ts` with a new branch.
4. Confirm every existing live city's `/<city>/<service>/` URL reads
   naturally before flipping `live: true`.

## Content composition

`lib/programmatic-content.ts` does the heavy lifting. The intro paragraph
varies by `city.character`, the "why choose us" paragraph varies by
`service.slug`, and the driving-directions paragraph varies by drive time
and named landmarks. None of the sections are pure templates with
placeholders, every paragraph is composed from real city + service data so
two pages do not read identically.

If a page reads templated, the fix is to **extend the data**, not to add
another template. Add more landmarks, more industry detail, more
city-specific FAQs, then re-run.

## Indexing strategy

The site already has very thin Search Console traffic. The staged-rollout
plan is:

1. **Week 1**: Ship 3 cities × 3 services = 9 service pages plus 3 city hubs
   and 1 root hub. (This is what is live today.)
2. **Week 2**: Submit those 13 URLs individually to GSC. Monitor for index
   coverage. If any are rejected as "Duplicate" or "Crawled, not indexed",
   improve the copy on those specific pages before adding more.
3. **Week 3+**: Add the next batch of 3-5 cities once the first batch is
   indexed cleanly. Repeat. Do not add 1,000 URLs at once, Google treats
   that as a quality signal.

## Build verification

```bash
node ./node_modules/.bin/next build
```

The build output should list each live city × service pair under the
`/areas-we-serve/[city]/[service]` SSG route. If a new city does not appear
there, it is not `live: true`.
