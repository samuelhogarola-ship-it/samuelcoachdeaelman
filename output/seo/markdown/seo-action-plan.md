# SEO Action Plan

Generated: 2026-06-30T14:29:53.029Z

No branches were created. Branch names below are proposals only.

## P0 Critical

No P0 was confirmed from local evidence only. Remote crawl/Search Console could reveal P0 status for sitemap 404s.

## P1 High Impact

- Objective: Regenerate sitemap from the same route source used for the deployed build and verify every submitted URL has a resolvable local/deployed target.
  Files/URLs: ["https://www.samuelcoachdealeman.com/recursos/lueckentext/","https://www.samuelcoachdealeman.com/recursos/lueckentext/a1/","https://www.samuelcoachdealeman.com/recursos/lueckentext/a2/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b2/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/auf-dem-markt/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/im-park/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/im-zoo/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/im-restaurant/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/im-einkaufszentrum/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/ausflug-mit-freunden/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/familienausflug/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/museumsbesuch/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/homeoffice/","https://www.samuelcoachdealeman.com/recursos/lueckentext/b1/reise-mit-dem-zug/"]
  Dependency: Local file inventory; remote crawl/Search Console required to confirm production impact.
  Risk: Medium: sitemap changes can de-index valid dynamic routes if generation source is incomplete.
  Validation: Count of sitemap URLs without a matching local HTML file goes to 0 or is justified by another build source.
  Requires: code, data
  Suggested branch: codex/seo-sitemap-canonicals

- Objective: Create the missing category index pages or change the parent links to existing hub pages.
  Files/URLs: [{"from":"recursos/schreiben/eoi/b2/kuerze-arbeitszeiten-pro-contra/index.html","href":"/recursos/schreiben/eoi/b2/","expectedLocalFile":"recursos/schreiben/eoi/b2/index.html"},{"from":"recursos/schreiben/eoi/b2/meine-idealstadt/index.html","href":"/recursos/schreiben/eoi/b2/","expectedLocalFile":"recursos/schreiben/eoi/b2/index.html"},{"from":"recursos/schreiben/eoi/b2/praktikum-bewerbung/index.html","href":"/recursos/schreiben/eoi/b2/","expectedLocalFile":"recursos/schreiben/eoi/b2/index.html"},{"from":"recursos/schreiben/goethe/b1/forumsbeitrag-sprachen-lernen/index.html","href":"/recursos/schreiben/goethe/b1/","expectedLocalFile":"recursos/schreiben/goethe/b1/index.html"},{"from":"recursos/schreiben/goethe/b1/hotel-anfrage-muenchen/index.html","href":"/recursos/schreiben/goethe/b1/","expectedLocalFile":"recursos/schreiben/goethe/b1/index.html"},{"from":"recursos/schreiben/goethe/b2/beschwerde-online-shop/index.html","href":"/recursos/schreiben/goethe/b2/","expectedLocalFile":"recursos/schreiben/goethe/b2/index.html"},{"from":"recursos/schreiben/goethe/b2/meinungsartikel-soziale-medien/index.html","href":"/recursos/schreiben/goethe/b2/","expectedLocalFile":"recursos/schreiben/goethe/b2/index.html"},{"from":"recursos/schreiben/telc/b1/brief-an-eine-freundin/index.html","href":"/recursos/schreiben/telc/b1/","expectedLocalFile":"recursos/schreiben/telc/b1/index.html"},{"from":"recursos/schreiben/telc/b1/krankmeldung-kursleiter/index.html","href":"/recursos/schreiben/telc/b1/","expectedLocalFile":"recursos/schreiben/telc/b1/index.html"},{"from":"recursos/schreiben/telc/b1/kursempfehlung-per-email/index.html","href":"/recursos/schreiben/telc/b1/","expectedLocalFile":"recursos/schreiben/telc/b1/index.html"},{"from":"recursos/schreiben/telc/b1/kurze-nachricht-verspaetung/index.html","href":"/recursos/schreiben/telc/b1/","expectedLocalFile":"recursos/schreiben/telc/b1/index.html"},{"from":"recursos/schreiben/telc/b2/leserbrief-homeoffice/index.html","href":"/recursos/schreiben/telc/b2/","expectedLocalFile":"recursos/schreiben/telc/b2/index.html"}]
  Dependency: Local link resolver; remote HTTP crawl required for final status codes.
  Risk: Low to medium: parent hub URLs need clear canonical targets before editing links.
  Validation: All local internal hrefs resolve to existing files or intentionally external/deferred routes.
  Requires: code, content or manual decision
  Suggested branch: codex/seo-technical-fixes

- Objective: Update the relevant generator/templates so exercise pages output a single topic-aligned H1 server-side/static.
  Files/URLs: [{"file":"CHAT/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/beim-arzt/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/berufe-in-meiner-stadt/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/das-wetter/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/der-morgen/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/familie-schneider/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/hobbys-und-freizeit/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/im-cafe/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/im-supermarkt/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/in-der-schule/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/jahreszeiten/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/lebensmittel-und-einkaufen/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/mein-hund/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/mein-koerper/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/mein-schultag/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/mein-zimmer/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/meine-familie/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/meine-hobbys/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/meine-wohnung/index.html","h1Count":0,"h1":[]},{"file":"de/leseverstehen/a1/tiere-auf-dem-bauernhof/index.html","h1Count":0,"h1":[]}]
  Dependency: Static HTML parse. Need template review to decide whether visible headings are client-rendered.
  Risk: Medium: generated templates affect many pages at once.
  Validation: Generated page templates emit exactly one descriptive H1 per URL.
  Requires: code, content or manual decision
  Suggested branch: codex/seo-technical-fixes

## P2 Important

- Objective: Add minimal, accurate JSON-LD to generated educational templates; avoid unsupported HowTo/FAQ rich-result strategy.
  Files/URLs: ["CHAT/index.html","de/login/index.html","de/mi-cuenta/index.html","de/recursos/sprachbausteine/a1/beim-arzt/index.html","de/recursos/sprachbausteine/a1/berufe-in-meiner-stadt/index.html","de/recursos/sprachbausteine/a1/das-wetter/index.html","de/recursos/sprachbausteine/a1/der-morgen/index.html","de/recursos/sprachbausteine/a1/familie-schneider/index.html","de/recursos/sprachbausteine/a1/hobbys-und-freizeit/index.html","de/recursos/sprachbausteine/a1/im-cafe/index.html","de/recursos/sprachbausteine/a1/im-supermarkt/index.html","de/recursos/sprachbausteine/a1/in-der-schule/index.html","de/recursos/sprachbausteine/a1/index.html","de/recursos/sprachbausteine/a1/jahreszeiten/index.html","de/recursos/sprachbausteine/a1/lebensmittel-und-einkaufen/index.html","de/recursos/sprachbausteine/a1/mein-hund/index.html","de/recursos/sprachbausteine/a1/mein-koerper/index.html","de/recursos/sprachbausteine/a1/mein-schultag/index.html","de/recursos/sprachbausteine/a1/mein-zimmer/index.html","de/recursos/sprachbausteine/a1/meine-familie/index.html","de/recursos/sprachbausteine/a1/meine-hobbys/index.html","de/recursos/sprachbausteine/a1/meine-wohnung/index.html","de/recursos/sprachbausteine/a1/tiere-auf-dem-bauernhof/index.html","de/recursos/sprachbausteine/a2/besuch-im-freilichtmuseum/index.html","de/recursos/sprachbausteine/a2/deutsches-fruehstueck/index.html"]
  Dependency: Local JSON-LD extraction. Rich result eligibility must be validated with Google tools after implementation.
  Risk: Medium: incorrect schema can create trust issues or manual cleanup later.
  Validation: Every indexable educational page has valid WebPage/BreadcrumbList and relevant LearningResource or Article-style graph where appropriate.
  Requires: code, content
  Suggested branch: codex/seo-schema

- Objective: Decide whether CHAT/account/login pages should be indexed; then add canonical/description or mark noindex consistently.
  Files/URLs: {"noDescription":["CHAT/index.html","de/mi-cuenta/index.html","en/mi-cuenta/index.html","mi-cuenta/index.html"],"noCanonical":["CHAT/index.html","leseverstehen/lesen/index.html","mi-cuenta/index.html"]}
  Dependency: Local metadata extraction; business decision required for account/chat indexability.
  Risk: Low to medium: noindex/canonical choices can remove pages from search.
  Validation: All indexable pages have title, description, canonical, robots, and one H1; non-indexable pages declare noindex intentionally.
  Requires: code, content or manual decision
  Suggested branch: codex/seo-sitemap-canonicals

- Objective: Map duplicate article paths, keep one canonical URL per topic, and decide redirect/noindex strategy for alternates.
  Files/URLs: ["f/adverbios-de-frecuencia-en-aleman/","f/haeufigkeitsadverbien-en-aleman/","f/imperativ-en-aleman/","f/el-imperativo-en-aleman/"]
  Dependency: Local canonical grouping; production redirects need remote verification.
  Risk: Medium: redirects need care to preserve existing traffic.
  Validation: Only canonical URLs are linked from hubs and duplicate variants redirect or are excluded intentionally.
  Requires: code, content or manual decision
  Suggested branch: codex/seo-sitemap-canonicals

## P3 Refinements

- Objective: Validate review provenance and NAP consistency before expanding local landing pages.
  Files/URLs: ["index.html","sobre-mi/index.html","servicios/index.html"]
  Dependency: Requires Google Business Profile, review sources, production page review and possibly Search Console.
  Risk: Medium: review markup must be accurate and supportable.
  Validation: NAP and review claims are consistent across visible page copy, schema and external profiles.
  Requires: external data, manual decision
  Suggested branch: codex/seo-local-pages

- Objective: Create a GEO content pattern for educational resource templates, separate from classic SEO metadata work.
  Files/URLs: ["leseverstehen/","recursos/sprachbausteine/","f/"]
  Dependency: Rendered content review and query-level evidence required for prioritization.
  Risk: Low: content additions must avoid thin boilerplate.
  Validation: Priority templates include concise intro, entity-rich summary, learning objective, level, and internal next-step links.
  Requires: code, content or manual decision
  Suggested branch: codex/seo-content-home

## Suggested Branch Groups

- codex/seo-technical-fixes
- codex/seo-schema
- codex/seo-content-home
- codex/seo-local-pages
- codex/seo-sitemap-canonicals
- codex/seo-drift-cleanup

## Next Workflow

Diagnose, prioritize, baseline, suggest branches, then run drift compare and PR creation only as future steps after explicit approval.
