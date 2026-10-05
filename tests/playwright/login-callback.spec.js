const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');

const sdk = fs.readFileSync(path.join(path.dirname(require.resolve('@supabase/supabase-js/package.json')), 'dist/umd/supabase.js'), 'utf8');
test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
  await page.route('https://esm.sh/@supabase/supabase-js@2', route => route.fulfill({
    contentType: 'application/javascript',
    body: `${sdk}\nexport const createClient = supabase.createClient;`
  }));
  await page.route('https://hocdlmxzghwymamientc.supabase.co/**', route => route.fulfill({
    status: 400, contentType: 'application/json',
    body: JSON.stringify({ code: 'invalid_credentials', message: 'Invalid login credentials' })
  }));
});

for (const locale of ['', '/de', '/en']) {
  test(`${locale || '/es'} callback percent error keeps login usable`, async ({ page }) => {
    await page.goto(`${locale}/login/?error=access_denied&error_description=Link%20100%25%20expired`);
    await expect(page.locator('#signin-error')).toHaveText('Link 100% expired');
    await expect(page).not.toHaveURL(/error_description/);
    await page.locator('#signin-email').fill('fixture@example.invalid');
    await page.locator('#signin-password').fill('fixture-password');
    await page.locator('#form-signin button[type=submit]').click();
    await expect(page.locator('#signin-error')).toHaveText('Invalid login credentials');
    await expect(page.locator('#form-signin button[type=submit]')).toBeEnabled();
    await expect(page).not.toHaveURL(/password=/);
  });
}

test('callback without description is visible and scrubbed', async ({ page }) => {
  await page.goto('/login/?error=access_denied&error_code=otp_expired');
  await expect(page.locator('#signin-error')).toContainText('otp_expired');
  await expect(page).not.toHaveURL(/error=/);
});

test('restricted text resumes after successful fixture login', async ({ page }) => {
  await page.goto('/leseverstehen/a1/lenas-zimmer/');
  await expect(page.locator('.lese-auth-gate')).toBeVisible();
  await expect(page.locator('.lese-btn-richtig')).toHaveCount(0);
  await page.locator('.lese-auth-gate__btn').click();
  await expect(page).toHaveURL(/\/login\/\?redirect=/);
  const user = { id: '11111111-1111-4111-8111-111111111111', aud: 'authenticated', role: 'authenticated', email: 'fixture@example.invalid', app_metadata: {}, user_metadata: {}, created_at: '2026-01-01T00:00:00Z' };
  await page.route('**/auth/v1/token?grant_type=password', route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify({ access_token: 'fixture-access-token', refresh_token: 'fixture-refresh-token', token_type: 'bearer', expires_in: 3600, user })
  }));
  await page.locator('#signin-email').fill('fixture@example.invalid');
  await page.locator('#signin-password').fill('fixture-password');
  await page.locator('#form-signin button[type=submit]').click();
  await expect(page).toHaveURL(/\/leseverstehen\/a1\/lenas-zimmer\/$/);
  await expect(page.locator('.lese-auth-gate')).toHaveCount(0);
  await expect(page.locator('.lese-btn-richtig').first()).toBeVisible();
});
