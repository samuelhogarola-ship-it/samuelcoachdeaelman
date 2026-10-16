import assert from 'node:assert/strict';
import { test, before, after } from 'node:test';
import { createServer, request } from 'node:http';
import { spawn } from 'node:child_process';
import { cp, mkdir, mkdtemp, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { once } from 'node:events';

let root, child, base, authServer;
const authRequests = [];
before(async () => {
  root = await mkdtemp(path.join(tmpdir(), 'post-server-security-'));
  await cp(new URL('../../scripts/', import.meta.url), path.join(root, 'scripts'), { recursive: true });
  await cp(new URL('../../supabase/', import.meta.url), path.join(root, 'supabase'), { recursive: true });
  await mkdir(path.join(root, 'assets/js'), { recursive: true });
  await cp(new URL('../../assets/js/admin-gate-core.mjs', import.meta.url), path.join(root, 'assets/js/admin-gate-core.mjs'));
  await cp(new URL('../../.htaccess', import.meta.url), path.join(root, '.htaccess'));
  for (const [file, body] of Object.entries({
    'index.html': '<h1>Home</h1>', 'login/index.html': 'Login',
    'assets/js/app.mjs': 'export const ok = true;',
    'robots.txt': 'User-agent: *', 'sitemap.xml': '<urlset/>',
    'manifest.webmanifest': '{}', 'assets/fonts/font.woff2': 'font',
    '.env.local': 'PRIVATE_SECRET=hidden', 'package.json': '{"private":true}',
    'functions/v1/contact/index.php': '<?php secret();',
    'blog/wp-content/themes/theme/index.php': '<?php secret();',
    'blog-posts/draft.md': '---\ntitle: Draft\nslug: draft\n---\nDraft content',
    'config/private.json': '{"secret":true}', 'assets/private.js.bak': 'secret',
    'site-data/content/f/persisted/index.html': '<h1>Persisted post</h1>',
    'site-data/content/f/persisted/img/cover.webp': 'image',
    'site-data/baseline.json': '{"secret":true}',
    'schreiben/generate-pages.js': 'secret build script',
    'tools/post-manager/index.html': '<h1>Editor</h1>',
  })) {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), body);
  }
  await symlink(path.join(root, 'site-data/content/f'), path.join(root, 'f'));
  await symlink(path.join(root, '.env.local'), path.join(root, 'assets/leak.txt'));
  authServer = createServer((req, res) => {
    authRequests.push({ url: req.url, headers: req.headers });
    res.setHeader('Content-Type', 'application/json');
    if (req.headers.authorization === 'Bearer verified-admin') res.end(JSON.stringify({ id: 'admin-id', email: 'info@webfuengirola.com' }));
    else if (req.headers.authorization === 'Bearer ordinary-user') res.end(JSON.stringify({ id: 'user-id', email: 'student@example.com' }));
    else { res.statusCode = 401; res.end('{"error":"invalid token"}'); }
  }).listen(0, '127.0.0.1');
  await once(authServer, 'listening');
  const reservation = createServer().listen(0, '127.0.0.1');
  await once(reservation, 'listening');
  const port = reservation.address().port;
  await new Promise(resolve => reservation.close(resolve));
  base = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, [path.join(root, 'scripts/post-manager-server.mjs')], {
    env: { ...process.env, POST_MANAGER_PORT: String(port), POST_MANAGER_HOST: '127.0.0.1', SUPABASE_URL: `http://127.0.0.1:${authServer.address().port}`, SUPABASE_ANON_KEY: 'test-public-key' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Server startup timed out')), 10000);
    child.stdout.once('data', () => { clearTimeout(timeout); resolve(); });
    child.once('exit', code => { clearTimeout(timeout); reject(new Error(`Server exited: ${code}`)); });
  });
});
after(async () => {
  if (child && child.exitCode === null) { child.kill(); await once(child, 'exit'); }
  if (authServer) await new Promise(resolve => authServer.close(resolve));
  if (root) await rm(root, { recursive: true, force: true });
});

test('post API requires a bearer token before exposing draft content', async () => {
  assert.equal((await fetch(`${base}/api/posts`)).status, 401);
});
test('invalid bearer and non-admin users cannot access posts', async () => {
  for (const [token, status] of [['forged-admin', 401], ['ordinary-user', 403]]) {
    const res = await fetch(`${base}/api/posts`, { headers: { Authorization: `Bearer ${token}` } });
    assert.equal(res.status, status);
  }
});
test('verified administrator can read posts through Supabase user verification', async () => {
  const res = await fetch(`${base}/api/posts`, { headers: { Authorization: 'Bearer verified-admin' } });
  assert.equal(res.status, 200);
  assert.equal((await res.json()).posts[0].slug, 'draft');
  assert.ok(authRequests.some(req => req.url === '/auth/v1/user' && req.headers.apikey === 'test-public-key' && req.headers.authorization === 'Bearer verified-admin'));
});
test('repository internals, PHP source, drafts and symlink targets are not public', async () => {
  for (const resource of ['/.env.local', '/.htaccess', '/package.json', '/scripts/post-manager-server.mjs', '/config/private.json', '/functions/v1/contact/index.php', '/blog/wp-content/themes/theme/index.php', '/blog-posts/draft.md', '/assets/private.js.bak', '/assets/leak.txt', '/schreiben/generate-pages.js', '/%2eenv.local', '/assets/%2e%2e%2f.env.local']) {
    assert.equal((await fetch(base + resource)).status, 404, resource);
  }
});
test('public files have correct MIME and nosniff headers', async () => {
  for (const [resource, mime] of [['/assets/js/app.mjs', 'text/javascript'], ['/robots.txt', 'text/plain'], ['/sitemap.xml', 'application/xml'], ['/manifest.webmanifest', 'application/manifest+json'], ['/assets/fonts/font.woff2', 'font/woff2']]) {
    const res = await fetch(base + resource);
    assert.equal(res.status, 200, resource);
    assert.ok(res.headers.get('content-type').startsWith(mime), resource);
    assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
  }
});
test('directories redirect to trailing slash without losing query', async () => {
  const res = await fetch(`${base}/tools/post-manager?draft=1`, { redirect: 'manual' });
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), '/tools/post-manager/?draft=1');
});
test('Apache legacy redirects also run under Node', async () => {
  for (const [resource, target] of [['/lueckentext/a1/', '/sprachbausteine/a1/'], ['/de/f/el-imperativo-en-aleman/', '/f/imperativ-en-aleman/'], ['/blog/f/der-die-das-los-generos-en-aleman/', '/f/der-die-das-los-generos-en-aleman/']]) {
    const res = await fetch(base + resource + '?source=old', { redirect: 'manual' });
    assert.equal(res.status, 301, resource);
    assert.equal(res.headers.get('location'), target + '?source=old');
  }
});
test('apex host redirects to canonical www preserving path and query', async () => {
  const res = await new Promise((resolve, reject) => {
    request(`${base}/login/?redirect=%2Fadmin%2F`, { headers: { Host: 'samuelcoachdealeman.com' } }, response => {
      response.resume(); resolve(response);
    }).on('error', reject).end();
  });
  assert.equal(res.statusCode, 301);
  assert.equal(res.headers.location, 'https://www.samuelcoachdealeman.com/login/?redirect=%2Fadmin%2F');
});

test('persistent published content is public but the mounted volume is private', async () => {
  assert.equal((await fetch(base + '/f/persisted/')).status, 200);
  assert.equal((await fetch(base + '/f/persisted/img/cover.webp')).status, 200);
  assert.equal((await fetch(base + '/site-data/content/f/persisted/')).status, 404);
  assert.equal((await fetch(base + '/site-data/baseline.json')).status, 404);
});
test('all editorial mutations and builds reject anonymous requests', async () => {
  for (const [method, resource] of [['POST', '/api/posts'], ['PUT', '/api/posts/draft'], ['POST', '/api/posts/draft/images'], ['DELETE', '/api/posts/draft/images/cover.webp'], ['PUT', '/api/posts/draft/images/cover.webp'], ['POST', '/api/build']]) {
    assert.equal((await fetch(base + resource, { method })).status, 401, resource);
  }
});
test('verified administrator can create a draft and malformed JSON returns 400', async () => {
  const headers = { Authorization: 'Bearer verified-admin', 'Content-Type': 'application/json' };
  const created = await fetch(base + '/api/posts', { method: 'POST', headers, body: JSON.stringify({ title: 'Test post', slug: 'test-post', description: 'Test description', body: 'Content' }) });
  assert.equal(created.status, 201);
  assert.equal((await created.json()).slug, 'test-post');
  const invalid = await fetch(base + '/api/posts', { method: 'POST', headers, body: '{' });
  assert.equal(invalid.status, 400);
});
test('HEAD has the public content type and no body', async () => {
  const res = await fetch(base + '/login/', { method: 'HEAD' });
  assert.equal(res.status, 200);
  assert.match(res.headers.get('content-type'), /^text\/html/);
  assert.equal(await res.text(), '');
});
test('contact requests reach the Node handler instead of the PHP filesystem', async () => {
  const res = await fetch(base + '/functions/v1/contact/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
  assert.equal(res.status, 400);
  assert.equal((await res.json()).success, false);
});
test('administrator hostname redirects to the canonical admin area', async () => {
  for (const [source, target] of [['/?draft=1', '/admin/?draft=1'], ['/blogger/?draft=1', '/admin/blogger/?draft=1'], ['/admin/blogger/', '/admin/blogger/']]) {
    const res = await new Promise((resolve, reject) => {
      request(base + source, { headers: { Host: 'admin.samuelcoachdealeman.com' } }, response => {
        response.resume(); resolve(response);
      }).on('error', reject).end();
    });
    assert.equal(res.statusCode, 301);
    assert.equal(res.headers.location, 'https://www.samuelcoachdealeman.com' + target);
  }
});
