// Node replacement for the legacy PHP mail() endpoint. No provider credentials
// are embedded: unconfigured delivery returns 503 and the browser offers email.
import { normalizePayload, validateBasicPayload, calculateRiskScore, RISK_THRESHOLD } from '../supabase/functions/contact/contact-handler.mjs';
import { isIP } from 'node:net';

const ORIGINS = new Set(['https://www.samuelcoachdealeman.com', 'https://samuelcoachdealeman.com']);
const WINDOW_MS = 15 * 60 * 1000;
const MAX_IPS = 10000;
const MAX_BYTES = 32768;

function clientIp(req, env) {
  const socketIp = req.socket?.remoteAddress || 'unknown';
  // Enable only when exactly one trusted proxy is the sole network ingress.
  // Traefik appends the real client address after any supplied XFF values.
  if (env.TRUST_PROXY_HOPS !== '1') return socketIp;
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded !== 'string') return socketIp;
  const last = forwarded.split(',').at(-1).trim();
  return isIP(last) ? last : socketIp;
}

export function createContactHandler({ env = process.env, fetchImpl = fetch, now = Date.now, getClientIp = (req) => clientIp(req, env) } = {}) {
  const attempts = new Map();
  return async function contactHandler(req, res) {
    const origin = req.headers.origin || '';
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Vary', 'Origin');
    const reply = (status, messageKey, extra = {}) => {
      res.statusCode = status;
      res.end(status === 204 ? undefined : JSON.stringify({ success: status === 200, messageKey, ...extra }));
    };
    if (origin && !ORIGINS.has(origin)) return reply(403, 'retry');
    if (origin) res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    if (req.method === 'OPTIONS') return reply(204);
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST, OPTIONS');
      return reply(405, 'retry');
    }
    if (!(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) return reply(415, 'review');
    if (Number(req.headers['content-length']) > MAX_BYTES) return reply(413, 'review');

    let raw;
    try {
      const chunks = [];
      let bytes = 0;
      for await (const chunk of req) {
        bytes += Buffer.byteLength(chunk);
        if (bytes > MAX_BYTES) return reply(413, 'review');
        chunks.push(Buffer.from(chunk));
      }
      raw = JSON.parse(Buffer.concat(chunks).toString('utf8'));
      if (!raw || typeof raw !== 'object' || Array.isArray(raw) || Object.values(raw).some(value => typeof value !== 'string')) return reply(400, 'review');
    } catch {
      return reply(400, 'review');
    }
    const payload = normalizePayload(raw);
    // Existing public pages do not yet have a production Turnstile site key.
    // Enforce the token only when the server secret is deliberately configured.
    const errors = validateBasicPayload(payload).filter(field => field !== 'turnstileToken' || env.TURNSTILE_SECRET_KEY);
    if (errors.length) return reply(400, 'review');
    if (payload.company) return reply(200, 'success');
    if (calculateRiskScore(payload) >= RISK_THRESHOLD) return reply(422, 'risk');
    if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.CONTACT_EMAIL) return reply(503, 'retry');

    const timestamp = now();
    for (const [key, entry] of attempts) if (timestamp >= entry.expires) attempts.delete(key);
    const ip = getClientIp(req);
    const entry = attempts.get(ip) || { count: 0, expires: timestamp + WINDOW_MS };
    if (entry.count >= 3 || (!attempts.has(ip) && attempts.size >= MAX_IPS)) {
      res.setHeader('Retry-After', String(Math.ceil(Math.max(1, entry.expires - timestamp) / 1000)));
      return reply(429, 'retry');
    }
    entry.count++;
    attempts.set(ip, entry);

    try {
      if (env.TURNSTILE_SECRET_KEY) {
        const verified = await fetchImpl('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: payload.turnstileToken, remoteip: ip }),
          signal: AbortSignal.timeout(10000)
        });
        if (!verified.ok || (await verified.json()).success !== true) return reply(400, 'review');
      }
      const fields = [
        ['Nombre', payload.name], ['Email', payload.email], ['Teléfono', payload.phone],
        ['Edad', payload.age_band], ['Objetivo', payload.goal], ['Nivel', payload.current_level],
        ['Disponibilidad', payload.availability], ['Mensaje', payload.user_message],
        ['Idioma', payload.locale], ['Página', payload.page_path]
      ];
      const sent = await fetchImpl('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.RESEND_FROM_EMAIL, to: [env.CONTACT_EMAIL], reply_to: payload.email,
          subject: 'Nuevo lead web - Samuel Coach de Alemán',
          text: fields.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join('\n')
        }),
        signal: AbortSignal.timeout(10000)
      });
      if (!sent.ok) return reply(502, 'retry');
      return reply(200, 'success');
    } catch {
      return reply(502, 'retry');
    }
  };
}
