import test from "node:test";
import assert from "node:assert/strict";

import {
  createContactService,
  GENERIC_RETRY_MESSAGE,
  GENERIC_RISK_MESSAGE,
  SUCCESS_MESSAGE
} from "./contact-handler.mjs";

const basePayload = () => ({
  name: "Maria Gomez",
  email: "maria.gomez@example.com",
  phone: "+34 644 220 965",
  age_band: "18+",
  goal: "Trabajo",
  current_level: "B1",
  availability: "Tardes",
  company: "",
  turnstileToken: "valid-token"
});

const buildService = (overrides = {}) =>
  createContactService({
    verifyTurnstile: async () => ({ success: true }),
    insertLead: async () => ({ success: true, id: "lead-1" }),
    sendLeadEmail: async () => ({ success: true }),
    hashIp: async () => "hashed-ip",
    now: () => "2026-06-27T18:00:00.000Z",
    logger: { error() {} },
    ...overrides
  });

test("accepts a valid contact submission", async () => {
  const service = buildService();
  const result = await service.process({
    payload: basePayload(),
    headers: new Headers({
      "user-agent": "Node Test",
      "x-forwarded-for": "203.0.113.10"
    })
  });

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(result.body.message, SUCCESS_MESSAGE);
  assert.equal(result.body.email_sent, true);
});

test("rejects an invalid turnstile token", async () => {
  let inserted = false;
  const service = buildService({
    verifyTurnstile: async () => ({ success: false }),
    insertLead: async () => {
      inserted = true;
      return { success: true, id: "lead-1" };
    }
  });

  const result = await service.process({
    payload: basePayload(),
    headers: new Headers()
  });

  assert.equal(result.status, 400);
  assert.equal(result.body.success, false);
  assert.equal(result.body.message, GENERIC_RETRY_MESSAGE);
  assert.equal(inserted, false);
});

test("marks honeypot submissions as spam", async () => {
  let emailSent = false;
  const insertedLeads = [];
  const service = buildService({
    insertLead: async (lead) => {
      insertedLeads.push(lead);
      return { success: true, id: "lead-spam" };
    },
    sendLeadEmail: async () => {
      emailSent = true;
      return { success: true };
    }
  });

  const result = await service.process({
    payload: {
      ...basePayload(),
      company: "Bot Company"
    },
    headers: new Headers()
  });

  assert.equal(result.status, 422);
  assert.equal(result.body.message, GENERIC_RISK_MESSAGE);
  assert.equal(insertedLeads[0].status, "spam");
  assert.equal(insertedLeads[0].risk_score >= 100, true);
  assert.equal(emailSent, false);
});

test("marks high-risk submissions as spam", async () => {
  const insertedLeads = [];
  const service = buildService({
    insertLead: async (lead) => {
      insertedLeads.push(lead);
      return { success: true, id: "lead-risk" };
    }
  });

  const result = await service.process({
    payload: {
      ...basePayload(),
      email: "scholarfraschilla9050@tempmail.com",
      phone: "123456789"
    },
    headers: new Headers()
  });

  assert.equal(result.status, 422);
  assert.equal(result.body.message, GENERIC_RISK_MESSAGE);
  assert.equal(insertedLeads[0].status, "spam");
  assert.equal(insertedLeads[0].risk_score >= 70, true);
});

test("returns success when Resend fails but lead is stored", async () => {
  const service = buildService({
    sendLeadEmail: async () => ({ success: false, error: "resend failed" })
  });

  const result = await service.process({
    payload: basePayload(),
    headers: new Headers()
  });

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(result.body.email_sent, false);
});

test("returns server error when Supabase insert fails", async () => {
  let emailSent = false;
  const service = buildService({
    insertLead: async () => ({ success: false, error: "insert failed" }),
    sendLeadEmail: async () => {
      emailSent = true;
      return { success: true };
    }
  });

  const result = await service.process({
    payload: basePayload(),
    headers: new Headers()
  });

  assert.equal(result.status, 500);
  assert.equal(result.body.success, false);
  assert.equal(result.body.message, GENERIC_RETRY_MESSAGE);
  assert.equal(emailSent, false);
});
