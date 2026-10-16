import assert from 'node:assert/strict';
import test from 'node:test';
import { Readable } from 'node:stream';
import { createContactHandler } from '../../scripts/contact-api.mjs';

const valid = { name: 'María Gómez', email: 'maria@example.invalid', goal: 'Trabajo', current_level: 'B1', age_band: '18+', availability: 'Tardes' };
const env = { RESEND_API_KEY: 'test-key', RESEND_FROM_EMAIL: 'Samuel <hola@example.invalid>', CONTACT_EMAIL: 'coach@example.invalid' };
async function request(handler, payload, options = {}) {
  const req = Readable.from([options.raw ?? JSON.stringify(payload)]);
  req.method = options.method || 'POST';
  req.headers = { 'content-type': 'application/json', origin: 'https://www.samuelcoachdealeman.com', ...options.headers };
  req.socket = { remoteAddress: options.ip || '192.0.2.1' };
  const res = { headers: {}, setHeader(k, v) { this.headers[k.toLowerCase()] = v; }, end(body) { this.body = body ? JSON.parse(body) : null; } };
  await handler(req, res);
  return res;
}

test('missing or malformed fields do not reach the email provider', async () => {
  let calls = 0;
  const handler = createContactHandler({ env, fetchImpl: async () => { calls++; } });
  for (const payload of [{}, null, [], { ...valid, email: 'bad\nBcc: attacker@example.invalid' }, { ...valid, name: 'x'.repeat(121) }]) {
    assert.equal((await request(handler, payload)).statusCode, 400);
  }
  assert.equal((await request(handler, null, { raw: '{invalid' })).statusCode, 400);
  assert.equal(calls, 0);
});

test('valid submission delivers plain text to fixed recipient and reports success', async () => {
  const calls = [];
  const handler = createContactHandler({ env, fetchImpl: async (...args) => { calls.push(args); return new Response('{}', { status: 200 }); } });
  const result = await request(handler, valid);
  assert.equal(result.statusCode, 200);
  assert.equal(result.body.success, true);
  assert.equal(calls.length, 1);
  const [url, options] = calls[0];
  assert.equal(url, 'https://api.resend.com/emails');
  const email = JSON.parse(options.body);
  assert.deepEqual(email.to, [env.CONTACT_EMAIL]);
  assert.equal(email.reply_to, valid.email);
  assert.match(email.text, /María Gómez/);
});

test('provider failure and missing configuration never claim delivery', async () => {
  const missing = createContactHandler({ env: {}, fetchImpl: async () => { throw new Error('must not call'); } });
  assert.equal((await request(missing, valid)).statusCode, 503);
  for (const fetchImpl of [async () => new Response('failure', { status: 403 }), async () => { throw new Error('offline'); }]) {
    const result = await request(createContactHandler({ env, fetchImpl }), valid);
    assert.equal(result.statusCode, 502);
    assert.equal(result.body.success, false);
  }
});

test('blocks foreign origins, oversized bodies and honors method restrictions', async () => {
  const handler = createContactHandler({ env, fetchImpl: async () => { throw new Error('must not call'); } });
  assert.equal((await request(handler, valid, { headers: { origin: 'https://attacker.invalid' } })).statusCode, 403);
  assert.equal((await request(handler, null, { raw: 'x'.repeat(32769) })).statusCode, 413);
  assert.equal((await request(handler, {}, { method: 'GET' })).statusCode, 405);
  assert.equal((await request(handler, {}, { method: 'OPTIONS' })).statusCode, 204);
  assert.equal((await request(handler, valid, { headers: { 'content-type': 'text/plain' } })).statusCode, 415);
});

test('honeypot and rate limit prevent sending; untrusted forwarded headers cannot reset the limit', async () => {
  let calls = 0;
  let time = 0;
  const handler = createContactHandler({ env, now: () => time, fetchImpl: async () => { calls++; return new Response('{}'); } });
  assert.equal((await request(handler, { ...valid, company: 'spam' })).statusCode, 200);
  assert.equal(calls, 0);
  for (let i = 0; i < 3; i++) assert.equal((await request(handler, valid)).statusCode, 200);
  assert.equal((await request(handler, valid, { headers: { 'x-forwarded-for': '198.51.100.2' } })).statusCode, 429);
  assert.equal(calls, 3);
  time = 15 * 60 * 1000;
  assert.equal((await request(handler, valid)).statusCode, 200);
});

test('optional Turnstile secret requires verified token before email delivery', async () => {
  let calls = 0;
  const handler = createContactHandler({ env: { ...env, TURNSTILE_SECRET_KEY: 'test-secret' }, fetchImpl: async () => { calls++; return new Response('{"success":false}'); } });
  assert.equal((await request(handler, valid)).statusCode, 400);
  assert.equal(calls, 0);
  assert.equal((await request(handler, { ...valid, turnstileToken: 'invalid' })).statusCode, 400);
  assert.equal(calls, 1);
});

test('one explicitly trusted proxy uses the final IP and ignores spoofed leftmost IPs', async () => {
  let calls = 0;
  const handler = createContactHandler({ env: { ...env, TRUST_PROXY_HOPS: '1' }, fetchImpl: async () => { calls++; return new Response('{}'); } });
  for (let i = 0; i < 3; i++) {
    const result = await request(handler, valid, { headers: { 'x-forwarded-for': `198.51.100.${i}, 203.0.113.10` } });
    assert.equal(result.statusCode, 200);
  }
  assert.equal((await request(handler, valid, { headers: { 'x-forwarded-for': '198.51.100.99, 203.0.113.10' } })).statusCode, 429);
  assert.equal((await request(handler, valid, { headers: { 'x-forwarded-for': '203.0.113.11' } })).statusCode, 200);
  assert.equal(calls, 4);
});

test('invalid or absent proxy headers use the same socket limit without scanning earlier values', async () => {
  const handler = createContactHandler({ env: { ...env, TRUST_PROXY_HOPS: '1' }, fetchImpl: async () => new Response('{}') });
  for (const header of ['198.51.100.1, invalid', '198.51.100.2,', '198.51.100.3:1234']) {
    assert.equal((await request(handler, valid, { headers: { 'x-forwarded-for': header } })).statusCode, 200);
  }
  for (const header of [undefined, '', ['198.51.100.4'], '198.51.100.5, unknown']) {
    assert.equal((await request(handler, valid, { headers: { 'x-forwarded-for': header } })).statusCode, 429);
  }
});

test('unsupported proxy-hop settings do not enable header trust', async () => {
  for (const hops of ['', 'true', '2']) {
    const handler = createContactHandler({ env: { ...env, TRUST_PROXY_HOPS: hops }, fetchImpl: async () => new Response('{}') });
    for (let i = 0; i < 3; i++) await request(handler, valid);
    assert.equal((await request(handler, valid, { headers: { 'x-forwarded-for': '203.0.113.44' } })).statusCode, 429);
  }
});
