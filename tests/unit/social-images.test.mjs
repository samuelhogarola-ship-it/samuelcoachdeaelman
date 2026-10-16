import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const origin = 'https://www.samuelcoachdealeman.com';

test('local Open Graph and Twitter images exist for every tracked HTML page', () => {
  const files = spawnSync('git', ['ls-files', '*.html'], { cwd: root, encoding: 'utf8' });
  assert.equal(files.status, 0, files.stderr);
  const missing = [];
  for (const file of files.stdout.trim().split('\n')) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    for (const [tag] of html.matchAll(/<meta\b[^>]*>/gi)) {
      const attributes = Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(match => [match[1], match[2]]));
      if (!['og:image', 'twitter:image'].includes(attributes.property || attributes.name)) continue;
      const url = new URL(attributes.content, origin);
      if (url.origin !== origin) continue;
      if (!fs.existsSync(path.join(root, decodeURIComponent(url.pathname)))) missing.push(`${file}: ${url.pathname}`);
    }
  }
  assert.deepEqual(missing, [], `Missing social images:\n${missing.join('\n')}`);
});

test('blog generator uses an existing default and falls back when an article image is missing', t => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'social-images-'));
  t.after(() => fs.rmSync(temp, { recursive: true, force: true }));
  fs.copyFileSync(path.join(root, 'generate-blog.js'), path.join(temp, 'generate-blog.js'));
  fs.mkdirSync(path.join(temp, 'blog-posts'));
  fs.mkdirSync(path.join(temp, 'assets/img'), { recursive: true });
  fs.copyFileSync(path.join(root, 'assets/img/og-home.webp'), path.join(temp, 'assets/img/og-home.webp'));
  for (const [slug, image] of [['default-post', 'default'], ['missing-post', 'absent.webp'], ['image-post', 'photo.webp']]) {
    fs.writeFileSync(path.join(temp, 'blog-posts', `${slug}.md`), `---\ntitle: Example\ndate: 2026-07-03\nimage: ${image}\n---\nExample.`);
  }
  fs.mkdirSync(path.join(temp, 'f/image-post'), { recursive: true });
  fs.writeFileSync(path.join(temp, 'f/image-post/photo.webp'), 'existing article asset');
  const result = spawnSync(process.execPath, ['generate-blog.js'], { cwd: temp, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  for (const slug of ['default-post', 'missing-post']) {
    const html = fs.readFileSync(path.join(temp, 'f', slug, 'index.html'), 'utf8');
    assert.ok(html.includes(`<meta property="og:image" content="${origin}/assets/img/og-home.webp">`), slug);
  }
  assert.ok(fs.readFileSync(path.join(temp, 'f/image-post/index.html'), 'utf8').includes(`${origin}/f/image-post/photo.webp`));
});
