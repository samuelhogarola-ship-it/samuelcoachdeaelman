import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('../../scripts/consolidate-blog-locales.mjs', import.meta.url));
const origin = 'https://www.samuelcoachdealeman.com';

test('blog consolidation preserves real translations, reciprocal alternates and indexable sitemap entries', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-seo-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const writePage = (route, lang, extra = '') => {
    const file = path.join(root, route, 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, `<html lang="${lang}"><head>\n  <link rel="canonical" href="${origin}/${route}/">\n${extra}\n</head><body>Content</body></html>`);
  };
  writePage('f/guide', 'es', `  <link rel="alternate" hreflang="de" href="${origin}/de/f/missing/">`);
  writePage('de/f/ratgeber', 'de', `  <link rel="alternate" hreflang="es" href="${origin}/f/guide/">`);
  writePage('en/f/guide', 'en', `  <link rel="alternate" hreflang="es" href="${origin}/f/guide/">`);
  writePage('f/hidden', 'es', '<meta name="robots" content="noindex, follow">');
  writePage('f/el-imperativo-en-aleman', 'es');
  fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${origin}/contacto/</loc></url>
  <url><loc>${origin}/f/guide/</loc><lastmod>2026-07-03</lastmod></url>
  <url><loc>${origin}/f/hidden/</loc></url>
  <url><loc>${origin}/f/el-imperativo-en-aleman/</loc></url>
  <!-- BLOG-I18N:START -->
  <url><loc>${origin}/de/f/ratgeber/</loc><lastmod>2026-07-04</lastmod></url>
  <!-- BLOG-I18N:END -->
</urlset>`);
  const run = () => {
    const result = spawnSync(process.execPath, [script], { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
  };
  run();
  const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
  assert.match(sitemap, /\/de\/f\/ratgeber\/.*<\/loc><lastmod>2026-07-04<\/lastmod>/);
  assert.match(sitemap, /\/en\/f\/guide\//);
  assert.doesNotMatch(sitemap, /\/hidden\/|el-imperativo-en-aleman/);
  for (const route of ['f/guide', 'de/f/ratgeber', 'en/f/guide']) {
    const html = fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
    for (const [lang, target] of [['es', 'f/guide'], ['de', 'de/f/ratgeber'], ['en', 'en/f/guide'], ['x-default', 'f/guide']]) {
      assert.ok(html.includes(`hreflang="${lang}" href="${origin}/${target}/"`), `${route} must link ${lang}`);
    }
    assert.doesNotMatch(html, /\/missing\//);
  }
  const before = ['sitemap.xml', 'f/guide/index.html', 'de/f/ratgeber/index.html', 'en/f/guide/index.html'].map(file => fs.readFileSync(path.join(root, file), 'utf8'));
  run();
  const after = ['sitemap.xml', 'f/guide/index.html', 'de/f/ratgeber/index.html', 'en/f/guide/index.html'].map(file => fs.readFileSync(path.join(root, file), 'utf8'));
  assert.deepEqual(after, before, 'repeated builds must be stable');
});
