# Unified Localized Commercial Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the divergent homepage and city landing pages with one static, data-driven commercial-page system that renders complete Spanish, German, and English national and city experiences with consistent design, SEO, translations, and WhatsApp CTAs.

**Architecture:** A new commercial generator will own `/`, `/de/`, `/en/`, and the 75 locale/city outputs. It will consume separate locale copy and city records, render one shared HTML structure, and reuse the existing global CSS and scripts. The existing localized generator will continue owning non-commercial routes and will stop writing the commercial homepages.

**Tech Stack:** Static HTML, shared CSS, ES modules/scripts, Node test runner, Playwright, existing sitemap and generated-output checks.

**Spec:** `docs/superpowers/specs/2026-10-30-localized-commercial-pages-design.md`

## Global Constraints

- Keep `/` national; keep `/fuengirola/` as a separate local landing page.
- Generate all 25 Spanish city slugs in ES, DE, and EN (75 city outputs).
- Never silently fall back to Spanish visible copy, metadata, accessibility labels, or structured data.
- Preserve prices, verified review figures, existing assets, static hosting, and existing US English city pages.
- City pages describe online service coverage and `areaServed`; they do not invent local offices or addresses.
- Every generated commercial page includes the floating WhatsApp control and mobile sticky CTA.
- Build and test changes test-first; generated output must be clean after regeneration.

## Review Focus

- A city without a complete locale record must fail the build rather than emit Spanish fallback text. Test in Task 1.
- A locale switch must preserve the same city and route family. Test in Task 2.
- A generated city must not claim a local street address. Test in Task 3.
- A long localized H1 must remain readable and inside the hero at desktop and mobile widths. Test in Task 4.
- A fixed WhatsApp control must remain inside the viewport even while page transitions run. Test in Task 4.

### Task 1: Define commercial data contracts and generator ownership

**Files:**
- Create: `scripts/commercial-page-data.mjs`
- Create: `tests/unit/commercial-pages.test.mjs`
- Modify: `scripts/generate-localized-pages.mjs`
- Modify: `package.json`

**Interfaces:**
- `commercial-page-data.mjs` exports `locales`, `citySlugs`, `cities`, `nationalCopy`, `localeCopy`, and `getCommercialRoute(locale, citySlug?)`.
- Each city record contains `slug`, localized names, region, nearby slugs, localized intro copy, and localized WhatsApp text.
- Each locale record contains every visible string required by the shared commercial template.

- [ ] **Step 1: Write failing data-contract tests**

  Assert that all 25 required slugs exist, every city has ES/DE/EN fields, every locale has the required section keys, and `getCommercialRoute` returns `/`, `/de/`, `/en/` for national pages and the correct localized city paths.

- [ ] **Step 2: Run the focused test and verify it fails**

  Run: `node --test tests/unit/commercial-pages.test.mjs`

  Expected: FAIL because the data module and contract exports do not exist.

- [ ] **Step 3: Implement the data module and ownership boundary**

  Move only commercial copy/data into the new module. Make the existing localized generator skip `/de/` and `/en/` home output so it cannot overwrite the new commercial generator's files. Add a deterministic commercial generation command to `package.json` without changing unrelated route ownership.

- [ ] **Step 4: Run the focused test and verify it passes**

  Run: `node --test tests/unit/commercial-pages.test.mjs`

  Expected: all data-contract assertions pass.

- [ ] **Step 5: Commit**

  Commit message: `refactor: define localized commercial page data contracts`

### Task 2: Build the shared commercial HTML renderer

**Files:**
- Create: `scripts/generate-commercial-pages.mjs`
- Modify: `scripts/commercial-page-data.mjs`
- Modify: `package.json`
- Test: `tests/unit/commercial-pages.test.mjs`

**Interfaces:**
- `renderCommercialPage({ locale, citySlug }) -> string` returns complete HTML for one national or city page.
- `renderCommercialPages() -> void` writes exactly the 3 national outputs and 75 city outputs, then updates sitemap inputs through the existing sitemap flow.

- [ ] **Step 1: Add failing renderer tests**

  Assert that the Spanish national render contains H1 `Clases de alemán online`, Barcelona renders the city H1 and dedicated WhatsApp message, German/English renders contain no Spanish H1 or CTA text, and all commercial output contains the shared section markers, floating WhatsApp control, and mobile CTA.

- [ ] **Step 2: Run the focused test and verify it fails**

  Run: `node --test tests/unit/commercial-pages.test.mjs`

  Expected: FAIL because the renderer is not implemented.

- [ ] **Step 3: Implement the renderer**

  Render one shared structure: header, full-width H1 row, offer/photo row, methods, online format, goals, proof/reviews, resources, FAQ, nationwide city section, assessment form, footer, WhatsApp, and mobile CTA. Use locale-specific route helpers for every internal link and locale switch. Use `areaServed` for city structured data and the parent Fuengirola organization address only.

- [ ] **Step 4: Run the focused test and verify it passes**

  Run: `node --test tests/unit/commercial-pages.test.mjs`

  Expected: all renderer and locale assertions pass.

- [ ] **Step 5: Commit**

  Commit message: `feat: generate unified localized commercial pages`

### Task 3: Integrate generation, metadata, sitemap, and generated files

**Files:**
- Modify: `package.json`
- Modify: `scripts/dedupe-sitemap.mjs` only if the new route records require a narrow extension
- Modify: `scripts/check-generated-clean.mjs` only if the new generator needs explicit ordering
- Modify: `sitemap.xml`
- Modify/Create: generated national and city `index.html` outputs
- Test: `tests/unit/commercial-pages.test.mjs`, `tests/unit/sitemap-integrity.test.mjs`

- [ ] **Step 1: Add failing integration assertions**

  Assert that generation creates all 78 commercial pages, every canonical appears once in `sitemap.xml`, every page has reciprocal `hreflang`, titles/H1s match locale, and city JSON-LD uses `areaServed` without a city postal address.

- [ ] **Step 2: Run the focused tests and verify they fail**

  Run: `node --test tests/unit/commercial-pages.test.mjs tests/unit/sitemap-integrity.test.mjs`

  Expected: FAIL against the current incomplete outputs and missing localized city routes.

- [ ] **Step 3: Wire the build order and regenerate**

  Run the commercial generator before the existing localized generator's non-commercial outputs, then run the existing sitemap deduplication. Regenerate all authoritative outputs and ensure generated markers are present. Do not overwrite unrelated US city pages.

- [ ] **Step 4: Run the focused tests and generated-output gate**

  Run: `node --test tests/unit/commercial-pages.test.mjs tests/unit/sitemap-integrity.test.mjs`

  Then run: `npm run check:generated`

  Expected: all assertions pass and the cleanliness gate reports no stale generated output.

- [ ] **Step 5: Commit**

  Commit message: `feat: publish localized city route outputs`

### Task 4: Match the visual system and remove the hero washout

**Files:**
- Modify: `assets/css/styles.css`
- Modify: `tests/playwright/site.spec.js`
- Modify: `tests/playwright/seo-commercial-pages.spec.js`

- [ ] **Step 1: Add failing browser assertions**

  Cover `/`, `/barcelona/`, `/de/barcelona/`, `/en/barcelona/`, and `/fuengirola/` at desktop and mobile widths. Assert localized H1s, full-width H1 row, photo opacity/visibility, no horizontal overflow, locale-switch targets, and WhatsApp bounding boxes inside the viewport.

- [ ] **Step 2: Run the focused browser tests and verify they fail**

  Run: `npx playwright test tests/playwright/site.spec.js tests/playwright/seo-commercial-pages.spec.js --grep "commercial|WhatsApp|localized|hero" --reporter=line`

  Expected: FAIL against the current templates, old H1, washed photo, and missing city locale routes.

- [ ] **Step 3: Implement CSS and markup contracts**

  Move the H1 into a full-width hero row; place the offer/photo row beneath it; remove the photo pseudo-element overlays and masks; keep responsive crop and spacing; preserve the already-fixed body page-transition behavior so fixed controls remain viewport-bound.

- [ ] **Step 4: Run the focused browser tests and verify they pass**

  Run the same Playwright command.

  Expected: all targeted desktop/mobile assertions pass.

- [ ] **Step 5: Commit**

  Commit message: `fix: align commercial hero layout and fixed WhatsApp control`

### Task 5: Full verification and handoff

**Files:**
- Modify: any generated output or tests required by verification only.

- [ ] **Step 1: Run the full unit/security suite**

  Run: `npm run test:unit`

  Expected: 0 failures.

- [ ] **Step 2: Run the full commercial/site browser suite**

  Run: `npx playwright test tests/playwright/site.spec.js tests/playwright/seo-commercial-pages.spec.js --reporter=line`

  Expected: all non-skipped tests pass.

- [ ] **Step 3: Run generated-output and diff checks**

  Run: `npm run check:generated` and `git diff --check`.

  Expected: no stale generated output and no whitespace errors.

- [ ] **Step 4: Inspect representative pages manually**

  Check `/`, `/barcelona/`, `/de/barcelona/`, `/en/barcelona/`, and `/fuengirola/` at desktop and mobile widths for visual parity, language correctness, hero photo, locale switching, and WhatsApp links.

- [ ] **Step 5: Commit**

  Commit message: `feat: unify localized commercial landing pages`

