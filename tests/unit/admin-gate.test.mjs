import test from 'node:test'
import assert from 'node:assert/strict'
import { buildAdminLoginUrl } from '../../assets/js/admin-gate-core.mjs'

test('admin login URL preserves the requested path', async () => {
  const path = '/admin/blogger/?draft=1'
  assert.equal(buildAdminLoginUrl(path), '/login/?redirect=%2Fadmin%2Fblogger%2F%3Fdraft%3D1')
})

test('admin login URL falls back to root for an empty path', () => {
  assert.equal(buildAdminLoginUrl(''), '/login/?redirect=%2F')
})
