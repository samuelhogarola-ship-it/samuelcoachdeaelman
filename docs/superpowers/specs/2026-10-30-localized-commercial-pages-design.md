# Unified Localized Commercial Pages Design

## Intent

Make the national homepage and every Spanish city landing page feel like one professional website instead of unrelated templates. Preserve the site's established visual identity while giving every Spanish, German, and English route a complete, correctly translated experience.

The national homepage remains the broad entry point for online German lessons. Fuengirola keeps its own local landing page rather than replacing the homepage, because the homepage should target the national online offer while local search intent belongs on dedicated city URLs.

## Goals

- Change the Spanish homepage H1 to `Clases de alemán online`.
- Give the hero H1 a full-width first row, followed by a second row containing the offer/CTAs and Samuel's photo.
- Remove the white veil from the hero photo by removing the decorative white gradients and masks that currently wash it out.
- Make `/`, `/de/`, and `/en/` use the same complete visual structure with fully localized copy and H1s.
- Make all 25 existing Spanish city routes use the same commercial-page structure as the homepage.
- Generate complete German and English equivalents for every Spanish city route.
- Keep the nationwide city-discovery section near the bottom of national and city pages, translated for each locale.
- Preserve the repaired floating WhatsApp behavior and give every city its own localized prefilled message.
- Keep SEO metadata, canonicals, alternates, structured data, navigation, and locale switching consistent with the visible language and city.

## Non-goals

- Do not make `/` a Fuengirola-only homepage.
- Do not claim that Samuel has physical premises in every city; the service is online and each city is an area served.
- Do not redesign unrelated learning tools, the blog, account pages, or existing US English city pages.
- Do not invent city-specific statistics, employers, schools, or market claims that cannot be supported.
- Do not change prices or the site's conversion offer.

## Anti-goals

- No manual set of 75 independently maintained city HTML files.
- No Spanish H1 or Spanish visible copy left inside German or English routes.
- No client-side locale replacement that risks an untranslated first render or weak SEO.
- No visually different city template that can drift away from the homepage again.

## Current-state findings

- The Spanish homepage uses the desired premium `home-*` design but its H1 is `Clases de alemán online en toda España`.
- The German and English homepages have translated H1s but use an older, shorter page structure.
- Spanish city pages use a separate partial template. They visually resemble portions of the homepage but do not provide full parity.
- No German or English equivalents exist for the 25 Spanish city routes.
- The photo is washed out by `.home-hero::before`, `.home-hero::after`, `.home-hero-media::before`, `.home-hero-media::after`, and the mask on `.home-hero-photo`.
- City pages currently put the city in a postal address in structured data, which can imply a physical location. They should describe online service coverage instead.
- The body page-transition transform displaced fixed UI; the pending fix removes body transforms and has an automated regression test.

## Selected approach

### Option 1: manual HTML editing

Fast for one page, but guarantees drift across 75 localized city outputs and makes translation defects likely. Rejected.

### Option 2: one static generator with structured locale and city data

Selected. A build-time generator owns the national homepage variants and the Spanish-city variants. Shared layout functions render identical structure; locale dictionaries provide complete UI copy; city records provide only truthful local fields. Static HTML preserves current hosting compatibility and SEO.

### Option 3: one client-rendered dynamic page

Would reduce generated files, but adds runtime JavaScript, weaker first-render guarantees, and unnecessary SEO risk for commercial landing pages. Rejected.

## Information architecture

### National routes

- Spanish: `/`
- German: `/de/`
- English: `/en/`

National H1s:

- ES: `Clases de alemán online`
- DE: `Online-Deutschunterricht`
- EN: `Online German lessons`

National titles follow the same positioning without the old Spain-bound H1 wording:

- ES: `Clases de alemán online | Samuel Coach de Alemán`
- DE: `Online-Deutschunterricht | Samuel Coach de Alemán`
- EN: `Online German lessons | Samuel Coach de Alemán`

Descriptions may mention online coverage across Spain, but the H1 and title stay focused on the core offer.

The national pages describe the online offer broadly. A translated section near the bottom links to Spanish city pages and carries the nationwide coverage message without putting `en toda España` in the H1.

### Spanish city routes

Existing slugs in scope:

`alicante`, `barakaldo`, `barcelona`, `benalmadena`, `bilbao`, `estepona`, `fuengirola`, `granada`, `irun`, `las-palmas`, `madrid`, `malaga`, `marbella`, `mijas`, `murcia`, `nerja`, `palma-de-mallorca`, `pamplona`, `san-sebastian`, `sevilla`, `tenerife`, `torremolinos`, `valencia`, `vitoria-gasteiz`, and `zaragoza`.

Each city has three static routes:

- ES: `/<slug>/`
- DE: `/de/<slug>/`
- EN: `/en/<slug>/`

Example H1s for Barcelona:

- ES: `Clases de alemán online en Barcelona`
- DE: `Online-Deutschunterricht in Barcelona`
- EN: `Online German lessons in Barcelona`

Locale switching always links to the equivalent route for the same page. `hreflang` alternates include `es`, `de`, `en`, and `x-default`, with Spanish as the default for Spanish cities.

The existing US English city routes remain separate and unchanged.

## Page structure

Every generated commercial page uses the same component order and class contract:

1. Shared responsive header and locale switcher.
2. Hero:
   - full-width H1 in the first row;
   - second row with localized lead, unchanged price chips and CTAs on the left;
   - Samuel's unmasked photo on the right;
   - mobile order: H1, offer, CTAs, photo.
3. Three-value method/benefit section.
4. Online format and personalized-plan section.
5. Goal cards for school, university, work, relocation, Goethe/TELC, and public examinations, localized in full.
6. Trust/results and reviews sections, using existing verified figures and links.
7. Free resources section.
8. FAQ section localized in full.
9. Nationwide city-discovery section localized in full, highlighting the current city without removing links to the others.
10. Localized assessment form and footer.
11. Floating WhatsApp link and mobile sticky CTA.

City pages never remove or reorder sections. They use the same structural sequence, visual system, conversion elements, and section count as the national pages. City data may change only the lead paragraph, local badge, one supporting paragraph, nearby-city links, metadata, and WhatsApp message; all other sections remain present and localized.

## Hero visual behavior

- The H1 spans the full `.home-shell` width above the two-column content row.
- Desktop type remains large but uses a controlled maximum width and balanced wrapping so Barcelona and localized variants do not create awkward isolated words.
- The hero photo uses the original asset without white pseudo-element overlays or CSS masks.
- Background decoration may remain behind the overall section only when it does not alter Samuel's face, clothing, or contrast.
- Mobile layouts do not crop the face and do not place text over the image.

## Content model

The generator consumes two explicit data sources:

- Locale dictionary: navigation, CTAs, section headings, body copy, form labels, FAQ, footer, WhatsApp message pattern, and SEO phrase patterns for `es`, `de`, and `en`.
- City records: slug, localized display name when spelling differs, region, geographic metadata, nearby-city links, and a short truthful local introduction in all three languages.

Missing locale content is a build error. The generator must never fall back silently to Spanish for visible copy, metadata, structured data, or accessibility labels.

## SEO and structured data

- Each output receives a language-correct title, description, canonical, Open Graph fields, Twitter fields, breadcrumbs, and H1.
- National pages retain the organization/local-business entity and Fuengirola business address.
- City pages reference the parent organization and express the city through `areaServed`; they do not claim a separate street address or office.
- City pages retain online-service wording and avoid implying face-to-face classes.
- Sitemap generation includes every new localized city URL once.
- Internal links and locale alternates are absolute or root-relative according to the existing convention and must resolve.

## WhatsApp

- Base number remains `+34 644 220 965` / `34644220965`.
- Every generated commercial page includes the shared floating WhatsApp control and the existing mobile sticky CTA, using the shared CSS/JS contract.
- National pages use a locale-specific general inquiry.
- Every city route uses a locale-specific message that includes the city.
- Barcelona Spanish keeps the dedicated intent represented by:
  `Hola Samuel, he visto tu web y me gustaría informarme sobre clases de alemán en Barcelona`.
- The floating control stays viewport-fixed; no ancestor may retain a transform that changes its containing block.

## Generation and ownership

- A dedicated commercial-page generator becomes authoritative for the three national homepages and all 75 Spanish-city locale outputs.
- `scripts/generate-localized-pages.mjs` remains authoritative for non-commercial localized routes. Its home-page writer is removed or made a no-op for `/de/` and `/en/` so there is exactly one owner for each commercial output. `build:i18n` invokes the commercial generator and the existing localized generator in a deterministic order.
- Generated files carry a clear generated-file marker.
- The generator is included in the existing build commands. `npm run check:generated` remains the explicit cleanliness gate (and is added to CI/verification), rather than being called recursively from the build itself.
- Shared CSS remains in `assets/css/styles.css`; generated pages do not embed divergent copies of the commercial layout CSS.
- City and locale data live separately from HTML rendering so copy can be reviewed without editing template markup.

## Validation

Automated checks cover:

- the exact national H1 in all three languages;
- full hero/layout parity for national and representative city routes;
- all 25 cities having ES/DE/EN outputs;
- no Spanish visible copy in German or English city fixtures;
- canonical and reciprocal `hreflang` correctness;
- language-correct city H1s and metadata;
- truthful `areaServed` structured data without fake local addresses;
- internal links and sitemap inclusion;
- city-specific WhatsApp URLs and messages;
- floating WhatsApp buttons remaining inside desktop and mobile viewports;
- generated outputs being clean after a rebuild.

Browser QA uses at least `/`, `/barcelona/`, `/de/barcelona/`, `/en/barcelona/`, and `/fuengirola/` at desktop and mobile widths, with specific attention to H1 wrapping, photo appearance, locale switching, sticky CTAs, and cookie-banner overlap.

## Delivery constraints

- Preserve the current static-hosting architecture and existing brand assets.
- Implement test-first and keep unrelated routes unchanged.
- Do not publish until the generated diff, tests, and browser QA are clean.
- The existing WhatsApp fixed-position correction remains part of the final change set.

