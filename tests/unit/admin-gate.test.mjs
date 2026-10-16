import test from 'node:test'
import assert from 'node:assert/strict'
import { buildAdminLoginUrl, isAdminUser } from '../../assets/js/admin-gate-core.mjs'

test('admin login URL preserves the requested path', async () => {
  const path = '/admin/blogger/?draft=1'
  assert.equal(buildAdminLoginUrl(path), '/login/?redirect=%2Fadmin%2Fblogger%2F%3Fdraft%3D1')
})

test('admin login URL falls back to root for an empty path', () => {
  assert.equal(buildAdminLoginUrl(''), '/login/?redirect=%2F')
})

test('only the configured administrator email passes the admin gate', () => {
  assert.equal(isAdminUser({ email: 'info@webfuengirola.com' }), true)
  assert.equal(isAdminUser({ email: 'other@example.com' }), false)
  assert.equal(isAdminUser(null), false)
})

test('anonymous admin visits return to their original page after login', async () => {
  // Load the real gate with only the browser Supabase transport replaced.
  const { readFile } = await import('node:fs/promises');
  let source = await readFile(new URL('../../assets/js/admin-gate.js', import.meta.url), 'utf8');
  const authStub = 'data:text/javascript,' + encodeURIComponent('export const supabase = { auth: { getSession: async () => ({data: {session: null}}) } };');
  source = source.replace("'./auth.js'", JSON.stringify(authStub));
  source = source.replace("'./admin-gate-core.mjs'", JSON.stringify(new URL('../../assets/js/admin-gate-core.mjs', import.meta.url).href));
  const { requireAdminAccess } = await import('data:text/javascript,' + encodeURIComponent(source));
  let redirected;
  const previousWindow = globalThis.window;
  globalThis.window = { location: { pathname: '/tools/post-manager/', search: '?draft=1', replace: url => { redirected = url; } } };
  try {
    const user = await requireAdminAccess({ root: { setAttribute() {} } });
    assert.equal(user, null);
    assert.equal(redirected, '/login/?redirect=%2Ftools%2Fpost-manager%2F%3Fdraft%3D1');
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});
