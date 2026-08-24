import assert from "node:assert/strict";
import test from "node:test";

import {
  buildConfirmationUrl,
  buildUnsubscribeUrl,
  publicSubscribeResponse,
  shouldSendConfirmation
} from "../../supabase/functions/newsletter-subscribe/newsletter-handler.mjs";
import { safeNewsletterRedirect } from "../../supabase/functions/newsletter-confirm/redirect-policy.mjs";

const supabaseUrl = "https://hocdlmxzghwymamientc.supabase.co";
const siteUrl = "https://www.samuelcoachdealeman.com";

test("builds direct Supabase confirmation and unsubscribe URLs", () => {
  assert.equal(
    buildConfirmationUrl(supabaseUrl, "token-1", "de", `${siteUrl}/de/newsletter-bestaetigt/`),
    `${supabaseUrl}/functions/v1/newsletter-confirm?token=token-1&locale=de&redirect=${encodeURIComponent(`${siteUrl}/de/newsletter-bestaetigt/`)}`
  );
  assert.equal(
    buildUnsubscribeUrl(supabaseUrl, "token-2", "en"),
    `${supabaseUrl}/functions/v1/newsletter-unsubscribe?token=token-2&locale=en`
  );
});

test("returns the same public subscribe response for every subscriber state", () => {
  assert.deepEqual(publicSubscribeResponse("new"), { status: "confirmation_sent" });
  assert.deepEqual(publicSubscribeResponse("pending"), { status: "confirmation_sent" });
  assert.deepEqual(publicSubscribeResponse("confirmed"), { status: "confirmation_sent" });
});

test("confirmation resend eligibility enforces a 15 minute cooldown", () => {
  const now = new Date("2026-08-24T10:30:00.000Z");
  assert.equal(shouldSendConfirmation(null, now), true);
  assert.equal(
    shouldSendConfirmation({ last_confirmation_sent_at: "2026-08-24T10:20:00.000Z" }, now),
    false
  );
  assert.equal(
    shouldSendConfirmation({ last_confirmation_sent_at: "2026-08-24T10:14:59.000Z" }, now),
    true
  );
});

test("newsletter redirects accept only the exact public origin", () => {
  const fallback = `${siteUrl}/newsletter-confirmado/`;
  assert.equal(
    safeNewsletterRedirect(`${siteUrl}/de/newsletter-bestaetigt/`, fallback, siteUrl),
    `${siteUrl}/de/newsletter-bestaetigt/`
  );
  assert.equal(
    safeNewsletterRedirect("https://www.samuelcoachdealeman.com.evil.test/path", fallback, siteUrl),
    fallback
  );
  assert.equal(
    safeNewsletterRedirect("https://samuelcoachdealeman.com/path", fallback, siteUrl),
    fallback
  );
  assert.equal(safeNewsletterRedirect("javascript:alert(1)", fallback, siteUrl), fallback);
});
