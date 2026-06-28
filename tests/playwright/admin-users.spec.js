const { test, expect } = require("@playwright/test");

function buildAdminAuthModule() {
  return `
    export async function requireAuth() {
      return { email: "admin@example.com" };
    }

    export const supabase = {
      auth: {
        async getSession() {
          return {
            data: {
              session: {
                access_token: "admin-access-token"
              }
            }
          };
        }
      }
    };
  `;
}

test.describe("admin users", () => {
  test("loads users and allows granting admin role with mocked endpoint", async ({ context, page }) => {
    await context.clearCookies();

    await page.route("**/assets/js/auth.js", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/javascript",
        body: buildAdminAuthModule()
      });
    });

    let patchPayload = null;
    await page.route("**/functions/v1/admin-users**", async (route) => {
      const request = route.request();

      if (request.method() === "GET") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            success: true,
            admin: {
              id: "admin-1",
              email: "admin@example.com"
            },
            users: [
              {
                user_id: "user-1",
                email: "alumna@example.com",
                full_name: "Maria Gomez",
                avatar_url: "",
                created_at: "2026-06-27T18:00:00.000Z",
                updated_at: "2026-06-27T18:00:00.000Z",
                roles: ["student"],
                is_admin: false
              },
              {
                user_id: "user-2",
                email: "admin2@example.com",
                full_name: "Pablo Admin",
                avatar_url: "",
                created_at: "2026-06-26T18:00:00.000Z",
                updated_at: "2026-06-27T18:00:00.000Z",
                roles: ["student", "admin"],
                is_admin: true
              }
            ]
          })
        });
        return;
      }

      if (request.method() === "PATCH") {
        patchPayload = request.postDataJSON();
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            success: true,
            user: {
              user_id: patchPayload.user_id,
              is_admin: patchPayload.is_admin
            }
          })
        });
        return;
      }

      await route.abort();
    });

    await page.goto("/admin/users/");

    await expect(page.getByRole("heading", { name: /usuarios y roles/i })).toBeVisible();
    await expect(page.locator("#admin-email")).toHaveText("admin@example.com");
    await expect(page.locator("#stat-users-total")).toHaveText("2");
    await expect(page.locator("#stat-users-admin")).toHaveText("1");
    await expect(page.locator("#stat-users-student")).toHaveText("1");
    await expect(page.locator("#users-list")).toContainText("Maria Gomez");
    await expect(page.locator("#users-list")).toContainText("alumna@example.com");
    await expect(page.locator("#users-list")).toContainText("Pablo Admin");

    await page.getByRole("button", { name: /^Admins$/i }).click();
    await expect(page.locator("#users-list")).toContainText("Pablo Admin");
    await expect(page.locator("#users-list")).not.toContainText("Maria Gomez");

    await page.getByPlaceholder(/buscar por nombre o email/i).fill("maria");
    await page.getByRole("button", { name: /^Todos$/i }).click();
    await expect(page.locator("#users-list")).toContainText("Maria Gomez");
    await expect(page.locator("#users-list")).not.toContainText("Pablo Admin");

    await page.getByRole("button", { name: /conceder admin/i }).click();

    await expect(page.locator("#users-status")).toHaveText(/rol actualizado/i);
    expect(patchPayload).toEqual({
      user_id: "user-1",
      is_admin: true
    });
  });
});
