const { test, expect } = require("@playwright/test");

test.describe("account data UI", () => {
  test("renders message content literally and clamps score widths", async ({ page }) => {
    await page.goto("/");

    const result = await page.evaluate(async () => {
      const { renderMessages, renderProgressTable } = await import("/assets/js/account-ui.mjs");
      const section = document.createElement("section");
      const messages = document.createElement("div");
      section.appendChild(messages);
      document.body.appendChild(section);
      renderMessages(section, messages, [{
        id: "message-1",
        content: '<img src=x onerror="window.__xss = true">\nHallo',
        is_read: false,
        created_at: "2026-08-24T10:00:00.000Z"
      }], "de-DE");

      const progress = document.createElement("div");
      document.body.appendChild(progress);
      renderProgressTable(progress, [{
        nivel: "a1",
        exercise_type: "leseverstehen",
        completed_activities: 1,
        average_score: 180
      }], {
        headings: ["Level", "Type", "Completed", "Score"],
        levels: { a1: "A1" },
        types: { leseverstehen: "Leseverstehen" }
      });

      return {
        content: messages.querySelector(".msg-card__content").textContent,
        nestedImages: messages.querySelectorAll(".msg-card__content img").length,
        xss: Boolean(window.__xss),
        width: document.querySelector(".score-bar__fill").style.width
      };
    });

    expect(result.content).toContain("<img src=x");
    expect(result.nestedImages).toBe(0);
    expect(result.xss).toBe(false);
    expect(result.width).toBe("100%");
  });

  test("marks only supplied message ids through the read RPC", async ({ page }) => {
    let requestBody = null;
    await page.route("**/rest/v1/rpc/mark_samuel_messages_read", async (route) => {
      requestBody = route.request().postDataJSON();
      await route.fulfill({ status: 204, body: "" });
    });
    await page.goto("/");

    await page.evaluate(async () => {
      const { markMessagesRead } = await import("/assets/js/account-ui.mjs");
      await markMessagesRead(
        "https://hocdlmxzghwymamientc.supabase.co",
        "anon-key",
        "access-token",
        ["00000000-0000-4000-8000-000000000001"]
      );
    });

    expect(requestBody).toEqual({ p_ids: ["00000000-0000-4000-8000-000000000001"] });
  });

  test("read RPC failures reject instead of disappearing silently", async ({ page }) => {
    await page.route("**/rest/v1/rpc/mark_samuel_messages_read", async (route) => {
      await route.fulfill({ status: 403, contentType: "application/json", body: "{}" });
    });
    await page.goto("/");

    const rejected = await page.evaluate(async () => {
      const { markMessagesRead } = await import("/assets/js/account-ui.mjs");
      try {
        await markMessagesRead("https://hocdlmxzghwymamientc.supabase.co", "anon", "token", ["id"]);
        return false;
      } catch (_error) {
        return true;
      }
    });

    expect(rejected).toBe(true);
  });
});
