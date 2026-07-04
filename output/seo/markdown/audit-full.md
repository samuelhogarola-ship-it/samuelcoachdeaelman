# Full SEO Audit

Generated: 2026-06-30T14:29:53.029Z

Mode: audit and planning only. No production code, content, branches, commits or PRs were changed.

## Scope

- Local HTML index pages analyzed: 478
- Sitemap URLs: 2693
- Main URLs sampled for baseline: 12
- Robots.txt: present

## Capability Status

- seo-orchestrator: setup_required
- seo-technical: setup_required
- seo-schema: setup_required
- seo-content: setup_required
- seo-geo: setup_required
- seo-sitemap: setup_required
- seo-drift: setup_required
- seo-local: setup_required

## Summary Counts

- Missing title: 0
- Missing meta description: 4
- Missing canonical: 3
- Missing robots meta: 0
- H1 not exactly one: 176
- Missing JSON-LD: 196
- Local HTML not in sitemap: 56
- Sitemap URLs without local HTML: 186
- Broken local internal links detected: 12

## Findings

### P1 P1-sitemap-local-mismatch

- Observation: Local sitemap has 2693 URLs, while only 478 local HTML index pages were found; 186 sitemap URLs do not map to local HTML files in this checkout.
- Impact: Search engines may waste crawl budget or hit URLs that are absent in the static build if the deployed state matches this repository.
- Dependency: Local file inventory; remote crawl/Search Console required to confirm production impact.
- How we would know it failed: Google Search Console reports submitted URL not found, soft 404, crawl anomaly, or excluded submitted pages.
- Leading indicator: Count of sitemap URLs without a matching local HTML file goes to 0 or is justified by another build source.
- Recommended action: Regenerate sitemap from the same route source used for the deployed build and verify every submitted URL has a resolvable local/deployed target.
- Affected files/URLs: [
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/a1/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/a2/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b2/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/auf-dem-markt/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/im-park/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/im-zoo/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/im-restaurant/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/im-einkaufszentrum/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/ausflug-mit-freunden/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/familienausflug/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/museumsbesuch/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/homeoffice/",
  "https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/reise-mit-dem-zug/"
]
- Risk of touching it: Medium: sitemap changes can de-index valid dynamic routes if generation source is incomplete.

### P1 P1-internal-broken-section-links

- Observation: 12 local internal links point to missing local index pages, concentrated in schreiben category parent URLs.
- Impact: Users and crawlers may hit 404s from exercise pages, weakening crawl paths and topical hubs.
- Dependency: Local link resolver; remote HTTP crawl required for final status codes.
- How we would know it failed: 404 responses or crawl errors for parent writing category paths.
- Leading indicator: All local internal hrefs resolve to existing files or intentionally external/deferred routes.
- Recommended action: Create the missing category index pages or change the parent links to existing hub pages.
- Affected files/URLs: [
  {
    "from": "recursos/schreiben/eoi/b2/kuerze-arbeitszeiten-pro-contra/index.html",
    "href": "/recursos/schreiben/eoi/b2/",
    "expectedLocalFile": "recursos/schreiben/eoi/b2/index.html"
  },
  {
    "from": "recursos/schreiben/eoi/b2/meine-idealstadt/index.html",
    "href": "/recursos/schreiben/eoi/b2/",
    "expectedLocalFile": "recursos/schreiben/eoi/b2/index.html"
  },
  {
    "from": "recursos/schreiben/eoi/b2/praktikum-bewerbung/index.html",
    "href": "/recursos/schreiben/eoi/b2/",
    "expectedLocalFile": "recursos/schreiben/eoi/b2/index.html"
  },
  {
    "from": "recursos/schreiben/goethe/b1/forumsbeitrag-sprachen-lernen/index.html",
    "href": "/recursos/schreiben/goethe/b1/",
    "expectedLocalFile": "recursos/schreiben/goethe/b1/index.html"
  },
  {
    "from": "recursos/schreiben/goethe/b1/hotel-anfrage-muenchen/index.html",
    "href": "/recursos/schreiben/goethe/b1/",
    "expectedLocalFile": "recursos/schreiben/goethe/b1/index.html"
  },
  {
    "from": "recursos/schreiben/goethe/b2/beschwerde-online-shop/index.html",
    "href": "/recursos/schreiben/goethe/b2/",
    "expectedLocalFile": "recursos/schreiben/goethe/b2/index.html"
  },
  {
    "from": "recursos/schreiben/goethe/b2/meinungsartikel-soziale-medien/index.html",
    "href": "/recursos/schreiben/goethe/b2/",
    "expectedLocalFile": "recursos/schreiben/goethe/b2/index.html"
  },
  {
    "from": "recursos/schreiben/telc/b1/brief-an-eine-freundin/index.html",
    "href": "/recursos/schreiben/telc/b1/",
    "expectedLocalFile": "recursos/schreiben/telc/b1/index.html"
  },
  {
    "from": "recursos/schreiben/telc/b1/krankmeldung-kursleiter/index.html",
    "href": "/recursos/schreiben/telc/b1/",
    "expectedLocalFile": "recursos/schreiben/telc/b1/index.html"
  },
  {
    "from": "recursos/schreiben/telc/b1/kursempfehlung-per-email/index.html",
    "href": "/recursos/schreiben/telc/b1/",
    "expectedLocalFile": "recursos/schreiben/telc/b1/index.html"
  },
  {
    "from": "recursos/schreiben/telc/b1/kurze-nachricht-verspaetung/index.html",
    "href": "/recursos/schreiben/telc/b1/",
    "expectedLocalFile": "recursos/schreiben/telc/b1/index.html"
  },
  {
    "from": "recursos/schreiben/telc/b2/leserbrief-homeoffice/index.html",
    "href": "/recursos/schreiben/telc/b2/",
    "expectedLocalFile": "recursos/schreiben/telc/b2/index.html"
  }
]
- Risk of touching it: Low to medium: parent hub URLs need clear canonical targets before editing links.

### P1 P1-h1-missing-generated-pages

- Observation: 176 pages do not have exactly one H1; sampled generated leseverstehen pages have zero H1 in static HTML.
- Impact: Main topic extraction is weaker for classic SEO and answer engines; accessibility landmarks are also less clear.
- Dependency: Static HTML parse. Need template review to decide whether visible headings are client-rendered.
- How we would know it failed: Rendered pages still lack one visible H1 after browser inspection.
- Leading indicator: Generated page templates emit exactly one descriptive H1 per URL.
- Recommended action: Update the relevant generator/templates so exercise pages output a single topic-aligned H1 server-side/static.
- Affected files/URLs: [
  {
    "file": "CHAT/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/beim-arzt/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/berufe-in-meiner-stadt/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/das-wetter/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/der-morgen/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/familie-schneider/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/hobbys-und-freizeit/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/im-cafe/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/im-supermarkt/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/in-der-schule/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/jahreszeiten/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/lebensmittel-und-einkaufen/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/mein-hund/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/mein-koerper/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/mein-schultag/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/mein-zimmer/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/meine-familie/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/meine-hobbys/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/meine-wohnung/index.html",
    "h1Count": 0,
    "h1": []
  },
  {
    "file": "de/leseverstehen/a1/tiere-auf-dem-bauernhof/index.html",
    "h1Count": 0,
    "h1": []
  }
]
- Risk of touching it: Medium: generated templates affect many pages at once.

### P2 P2-missing-schema-resource-pages

- Observation: 196 local pages have no JSON-LD, mostly generated resource/exercise/login/account pages.
- Impact: Entity clarity and citability are inconsistent across long-tail educational pages; answer engines get less structured context.
- Dependency: Local JSON-LD extraction. Rich result eligibility must be validated with Google tools after implementation.
- How we would know it failed: Schema validator finds absent or invalid graph on target templates.
- Leading indicator: Every indexable educational page has valid WebPage/BreadcrumbList and relevant LearningResource or Article-style graph where appropriate.
- Recommended action: Add minimal, accurate JSON-LD to generated educational templates; avoid unsupported HowTo/FAQ rich-result strategy.
- Affected files/URLs: [
  "CHAT/index.html",
  "de/login/index.html",
  "de/mi-cuenta/index.html",
  "de/recursos/sprachbausteine/a1/beim-arzt/index.html",
  "de/recursos/sprachbausteine/a1/berufe-in-meiner-stadt/index.html",
  "de/recursos/sprachbausteine/a1/das-wetter/index.html",
  "de/recursos/sprachbausteine/a1/der-morgen/index.html",
  "de/recursos/sprachbausteine/a1/familie-schneider/index.html",
  "de/recursos/sprachbausteine/a1/hobbys-und-freizeit/index.html",
  "de/recursos/sprachbausteine/a1/im-cafe/index.html",
  "de/recursos/sprachbausteine/a1/im-supermarkt/index.html",
  "de/recursos/sprachbausteine/a1/in-der-schule/index.html",
  "de/recursos/sprachbausteine/a1/index.html",
  "de/recursos/sprachbausteine/a1/jahreszeiten/index.html",
  "de/recursos/sprachbausteine/a1/lebensmittel-und-einkaufen/index.html",
  "de/recursos/sprachbausteine/a1/mein-hund/index.html",
  "de/recursos/sprachbausteine/a1/mein-koerper/index.html",
  "de/recursos/sprachbausteine/a1/mein-schultag/index.html",
  "de/recursos/sprachbausteine/a1/mein-zimmer/index.html",
  "de/recursos/sprachbausteine/a1/meine-familie/index.html",
  "de/recursos/sprachbausteine/a1/meine-hobbys/index.html",
  "de/recursos/sprachbausteine/a1/meine-wohnung/index.html",
  "de/recursos/sprachbausteine/a1/tiere-auf-dem-bauernhof/index.html",
  "de/recursos/sprachbausteine/a2/besuch-im-freilichtmuseum/index.html",
  "de/recursos/sprachbausteine/a2/deutsches-fruehstueck/index.html"
]
- Risk of touching it: Medium: incorrect schema can create trust issues or manual cleanup later.

### P2 P2-canonical-and-description-gaps

- Observation: 4 pages lack meta descriptions and 3 pages lack canonicals.
- Impact: Important utility/account pages may have inconsistent snippets and canonical consolidation; if indexable, this creates low-value index inventory.
- Dependency: Local metadata extraction; business decision required for account/chat indexability.
- How we would know it failed: Indexable pages remain without canonical or description after template update.
- Leading indicator: All indexable pages have title, description, canonical, robots, and one H1; non-indexable pages declare noindex intentionally.
- Recommended action: Decide whether CHAT/account/login pages should be indexed; then add canonical/description or mark noindex consistently.
- Affected files/URLs: {
  "noDescription": [
    "CHAT/index.html",
    "de/mi-cuenta/index.html",
    "en/mi-cuenta/index.html",
    "mi-cuenta/index.html"
  ],
  "noCanonical": [
    "CHAT/index.html",
    "leseverstehen/lesen/index.html",
    "mi-cuenta/index.html"
  ]
}
- Risk of touching it: Low to medium: noindex/canonical choices can remove pages from search.

### P2 P2-blog-canonical-duplicates

- Observation: Some blog/article files share canonical URLs with alternate duplicate paths, e.g. simplified and longer Spanish slugs for the same grammar topic.
- Impact: Duplicate local URLs can dilute internal linking signals if both are reachable, even if canonical consolidates indexing.
- Dependency: Local canonical grouping; production redirects need remote verification.
- How we would know it failed: Both duplicate URL variants remain internally linked or receive impressions separately.
- Leading indicator: Only canonical URLs are linked from hubs and duplicate variants redirect or are excluded intentionally.
- Recommended action: Map duplicate article paths, keep one canonical URL per topic, and decide redirect/noindex strategy for alternates.
- Affected files/URLs: [
  "f/adverbios-de-frecuencia-en-aleman/",
  "f/haeufigkeitsadverbien-en-aleman/",
  "f/imperativ-en-aleman/",
  "f/el-imperativo-en-aleman/"
]
- Risk of touching it: Medium: redirects need care to preserve existing traffic.

### P3 P3-local-entity-proof

- Observation: Home page contains Fuengirola/Malaga geo tags and LocalBusiness/ProfessionalService schema, but external NAP consistency, Google Business Profile and review-source proof are unavailable locally.
- Impact: Local relevance is present but cannot be fully validated; unsupported aggregateRating could be risky if review evidence is not visible to users/search engines.
- Dependency: Requires Google Business Profile, review sources, production page review and possibly Search Console.
- How we would know it failed: Structured data testing or manual review cannot verify ratings/reviews cited in schema.
- Leading indicator: NAP and review claims are consistent across visible page copy, schema and external profiles.
- Recommended action: Validate review provenance and NAP consistency before expanding local landing pages.
- Affected files/URLs: [
  "index.html",
  "sobre-mi/index.html",
  "servicios/index.html"
]
- Risk of touching it: Medium: review markup must be accurate and supportable.

### P3 P3-geo-answer-blocks

- Observation: Core pages are clear, but many resource pages appear template-driven and may lack compact answer blocks, explicit entities and citation-ready summaries in static HTML.
- Impact: Answer engines may understand the library but cite individual resources less often than pages with concise definitions and structured summaries.
- Dependency: Rendered content review and query-level evidence required for prioritization.
- How we would know it failed: Target resource pages fail manual answer-block checklist or receive no long-tail impressions/citations.
- Leading indicator: Priority templates include concise intro, entity-rich summary, learning objective, level, and internal next-step links.
- Recommended action: Create a GEO content pattern for educational resource templates, separate from classic SEO metadata work.
- Affected files/URLs: [
  "leseverstehen/",
  "recursos/sprachbausteine/",
  "f/"
]
- Risk of touching it: Low: content additions must avoid thin boilerplate.

## Classic SEO vs GEO

Classic SEO priorities are sitemap/indexability, internal link integrity, canonical consolidation, titles/descriptions and heading structure. GEO priorities are entity clarity, citation-ready summaries, answer blocks and accurate schema. FAQPage is not treated as a primary rich-result lever, and HowTo is not recommended as a rich-result strategy.

## Setup Required

- Google Search Console
- Analytics
- PageSpeed/CrUX/Core Web Vitals real field data
- remote crawl with HTTP status codes
- SERP/local competitor data
- Google Business Profile/NAP review sources
- backlink/citation data
