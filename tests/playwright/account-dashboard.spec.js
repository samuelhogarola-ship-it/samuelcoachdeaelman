const { test, expect } = require("@playwright/test");

function buildAuthModule({ user, progressRows, attemptsRows, profileRow, roles }) {
  return `
    const sessionUser = ${JSON.stringify(user)};
    const progressData = ${JSON.stringify(progressRows)};
    const attemptsData = ${JSON.stringify(attemptsRows)};
    let profileData = ${JSON.stringify(profileRow)};
    const roleData = ${JSON.stringify(roles)};
    window.__savedProfileUpdates = [];
    window.__storageUploads = [];
    window.__signOutCalls = 0;
    window.__resetPasswordCalls = [];

    export async function requireAuth() {
      return sessionUser;
    }

    export async function signOut() {
      window.__signOutCalls += 1;
      return { error: null };
    }

    export async function resetPassword(email) {
      window.__resetPasswordCalls.push(email);
      return { error: null };
    }

    export async function getUserRoles() {
      return roleData;
    }

    export async function isAdminUser() {
      return false;
    }

    export const supabase = {
      storage: {
        from(bucketName) {
          return {
            async upload(path, file, options) {
              window.__storageUploads.push({
                bucketName,
                path,
                fileName: file?.name || null,
                options
              });
              return { data: { path }, error: null };
            },
            getPublicUrl(path) {
              return {
                data: {
                  publicUrl: \`https://cdn.example.com/\${bucketName}/\${path}\`
                }
              };
            }
          };
        }
      },
      auth: {
        async getSession() {
          return {
            data: {
              session: sessionUser
                ? {
                    access_token: "session-token",
                    user: sessionUser
                  }
                : null
            }
          };
        }
      },
      from(table) {
        if (table === "profiles") {
          return {
            select() {
              return {
                eq() {
                  return {
                    maybeSingle() {
                      return Promise.resolve({ data: profileData, error: null });
                    }
                  };
                }
              };
            },
            update(payload) {
              return {
                eq() {
                  profileData = { ...profileData, ...payload };
                  window.__savedProfileUpdates.push(payload);
                  return Promise.resolve({ data: null, error: null });
                }
              };
            }
          };
        }

        const result = table === "samuel_user_progress"
          ? { data: progressData, error: null }
          : table === "samuel_attempts"
            ? { data: attemptsData, error: null }
            : { data: [], error: null };

        return {
          select() {
            return {
              order() {
                return table === "samuel_attempts"
                  ? {
                      limit() {
                        return Promise.resolve(result);
                      }
                    }
                  : Promise.resolve(result);
              }
            };
          }
        };
      }
    };
  `;
}

async function mockAuthenticatedAccount(page, overrides = {}) {
  const user = overrides.user ?? { id: "user-1", email: "alumna@example.com" };
  const roles = overrides.roles ?? ["student"];
  const ownLeads =
    overrides.ownLeads ??
    [
      {
        id: "lead-1",
        created_at: "2026-06-27T12:00:00.000Z",
        goal: "Preparar entrevistas",
        current_level: "B1",
        availability: "Tardes",
        message: "Necesito preparar entrevistas.",
        status: "answered"
      }
    ];
  const progressRows =
    overrides.progressRows ??
    [
      {
        nivel: "A1",
        exercise_type: "leseverstehen",
        completed_activities: 4,
        average_score: 87,
        updated_at: "2026-06-27T10:00:00.000Z"
      },
      {
        nivel: "A2",
        exercise_type: "lueckentext_type1",
        completed_activities: 2,
        average_score: 74,
        updated_at: "2026-06-26T18:30:00.000Z"
      }
    ];
  const attemptsRows =
    overrides.attemptsRows ??
    [
      {
        completed_at: "2026-06-27T10:00:00.000Z",
        score: 8,
        max_score: 10,
        exercise: {
          exercise_type: "leseverstehen",
          text: {
            titulo: "Familie Schneider",
            nivel: "A1"
          }
        }
      },
      {
        completed_at: "2026-06-26T18:30:00.000Z",
        score: 6,
        max_score: 8,
        exercise: {
          exercise_type: "lueckentext_type1",
          text: {
            titulo: "Reise nach Hamburg",
            nivel: "A2"
          }
        }
      }
    ];
  const profileRow =
    overrides.profileRow ?? {
      full_name: "Maria Gomez",
      avatar_url: "",
      created_at: "2026-06-20T09:00:00.000Z"
    };

  await page.route("**/assets/js/auth.js", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/javascript",
      body: buildAuthModule({ user, progressRows, attemptsRows, profileRow, roles })
    });
  });

  await page.route("**/functions/v1/account-leads", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        success: true,
        leads: ownLeads
      })
    });
  });
}

test.describe("account dashboard", () => {
  test("renders saved progress for an authenticated student", async ({ context, page }) => {
    await context.clearCookies();
    await mockAuthenticatedAccount(page);

    await page.goto("/mi-cuenta/");

    await expect(page.getByRole("heading", { name: /mi cuenta/i })).toBeVisible();
    await expect(page.locator("#account-email")).toHaveText("alumna@example.com");
    await expect(page.locator("#account-loading")).toBeHidden();
    await expect(page.locator("#account-stats")).toBeVisible();
    await expect(page.locator("#stat-completed")).toHaveText("6");
    await expect(page.locator("#stat-attempts")).toHaveText("2");
    await expect(page.locator("#stat-average")).toHaveText("81%");
    await expect(page.locator("#progress-list")).toContainText("A1 · Leseverstehen");
    await expect(page.locator("#progress-list")).toContainText("A2 · Lückentext · Tipo 1");
    await expect(page.locator("#attempts-list")).toContainText("Familie Schneider");
    await expect(page.locator("#attempts-list")).toContainText("8/10");
    await expect(page.locator("#profile-full-name")).toHaveValue("Maria Gomez");
    await expect(page.locator("#profile-preview-name")).toHaveText("Maria Gomez");
    await expect(page.locator("#access-email")).toHaveText("alumna@example.com");
    await expect(page.locator("#access-roles")).toContainText("student");
    await expect(page.locator("#account-leads-list")).toContainText("Preparar entrevistas");
    await expect(page.locator("#account-leads-list")).toContainText("respondido");
  });

  test("shows graceful empty states when the student has no tracked activity", async ({ context, page }) => {
    await context.clearCookies();
    await mockAuthenticatedAccount(page, {
      progressRows: [],
      attemptsRows: []
    });

    await page.goto("/mi-cuenta/");

    await expect(page.locator("#account-loading")).toBeHidden();
    await expect(page.locator("#stat-completed")).toHaveText("0");
    await expect(page.locator("#stat-attempts")).toHaveText("0");
    await expect(page.locator("#stat-average")).toHaveText("-");
    await expect(page.locator("#stat-last-activity")).toHaveText("-");
    await expect(page.locator("#progress-empty")).toBeVisible();
    await expect(page.locator("#attempts-empty")).toBeVisible();
    await expect(page.locator("#progress-list")).toBeHidden();
    await expect(page.locator("#attempts-list")).toBeHidden();
  });

  test("shows an empty state when the account has no linked contact requests", async ({ context, page }) => {
    await context.clearCookies();
    await mockAuthenticatedAccount(page, {
      ownLeads: []
    });

    await page.goto("/mi-cuenta/");

    await expect(page.locator("#account-leads-empty")).toBeVisible();
    await expect(page.locator("#account-leads-list")).toBeHidden();
  });

  test("saves profile updates for the authenticated student", async ({ context, page }) => {
    await context.clearCookies();
    await mockAuthenticatedAccount(page, {
      profileRow: {
        full_name: "",
        avatar_url: ""
      }
    });

    await page.goto("/mi-cuenta/");

    await page.locator("#profile-full-name").fill("Laura Martín");
    await page.locator("#profile-avatar-url").fill("https://example.com/avatar.jpg");
    await page.getByRole("button", { name: /guardar perfil/i }).click();

    await expect(page.locator("#profile-status")).toHaveText(/perfil guardado/i);
    await expect(page.locator("#profile-preview-name")).toHaveText("Laura Martín");

    const savedUpdates = await page.evaluate(() => window.__savedProfileUpdates);
    expect(savedUpdates.at(-1)).toMatchObject({
      full_name: "Laura Martín",
      avatar_url: "https://example.com/avatar.jpg"
    });
  });

  test("uploads a profile avatar file and saves the resulting public URL", async ({ context, page }) => {
    await context.clearCookies();
    await mockAuthenticatedAccount(page, {
      user: { id: "user-42", email: "foto@example.com" },
      profileRow: {
        full_name: "Foto Inicial",
        avatar_url: ""
      }
    });

    await page.goto("/mi-cuenta/");

    await page.locator("#profile-full-name").fill("Laura Avatar");
    await page.locator("#profile-avatar-file").setInputFiles({
      name: "avatar.png",
      mimeType: "image/png",
      buffer: Buffer.from("fake-image")
    });
    await page.getByRole("button", { name: /guardar perfil/i }).click();

    await expect(page.locator("#profile-status")).toHaveText(/perfil guardado/i);

    const storageUploads = await page.evaluate(() => window.__storageUploads);
    expect(storageUploads.at(-1)).toMatchObject({
      bucketName: "profile-avatars",
      path: "user-42/avatar.png",
      fileName: "avatar.png"
    });

    const savedUpdates = await page.evaluate(() => window.__savedProfileUpdates);
    expect(savedUpdates.at(-1)).toMatchObject({
      full_name: "Laura Avatar",
      avatar_url: "https://cdn.example.com/profile-avatars/user-42/avatar.png"
    });
  });

  test("deletes the account after explicit confirmation", async ({ context, page }) => {
    await context.clearCookies();
    await mockAuthenticatedAccount(page);

    let deleteRequest = null;
    await page.route("**/functions/v1/account-delete", async (route) => {
      deleteRequest = {
        method: route.request().method(),
        headers: route.request().headers(),
        body: route.request().postDataJSON()
      };
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Tu cuenta se ha eliminado correctamente."
        })
      });
    });

    await page.goto("/mi-cuenta/");

    await page.locator("#delete-account-confirmation").fill("ELIMINAR");
    await page.getByRole("button", { name: /eliminar cuenta/i }).click();

    await expect(page.locator("#delete-account-status")).toHaveText(/eliminado correctamente/i);
    await page.waitForURL("**/?account_deleted=1");

    expect(deleteRequest).toMatchObject({
      method: "POST",
      body: {
        confirmation: "ELIMINAR"
      }
    });
    expect(deleteRequest.headers.authorization).toBe("Bearer session-token");

  });

  test("downloads an authenticated export of the user's data", async ({ context, page }) => {
    await context.clearCookies();
    await mockAuthenticatedAccount(page);

    let exportRequest = null;
    await page.route("**/functions/v1/account-export", async (route) => {
      exportRequest = {
        method: route.request().method(),
        headers: route.request().headers()
      };
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          export: {
            account: {
              user_id: "user-1",
              email: "alumna@example.com"
            },
            profile: {
              full_name: "Maria Gomez"
            },
            roles: [{ role: "student" }],
            progress: [{ nivel: "A1" }],
            attempts: [],
            contact_leads: []
          }
        })
      });
    });

    const downloadPromise = page.waitForEvent("download");

    await page.goto("/mi-cuenta/");
    await page.getByRole("button", { name: /descargar mis datos/i }).click();

    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/^samuel-coach-datos-\d{4}-\d{2}-\d{2}\.json$/);
    await expect(page.locator("#export-account-status")).toHaveText(/descargado correctamente/i);
    expect(exportRequest.method).toBe("GET");
    expect(exportRequest.headers.authorization).toBe("Bearer session-token");
  });

  test("sends a password reset link for the authenticated account", async ({ context, page }) => {
    await context.clearCookies();
    await mockAuthenticatedAccount(page, {
      roles: ["student", "admin"]
    });

    await page.goto("/mi-cuenta/");
    await page.getByRole("button", { name: /enviar enlace para cambiar contraseña/i }).click();

    await expect(page.locator("#access-status")).toHaveText(/enviado un enlace/i);
    await expect(page.locator("#access-roles")).toContainText("admin");

    const resetCalls = await page.evaluate(() => window.__resetPasswordCalls);
    expect(resetCalls).toEqual(["alumna@example.com"]);
  });

  test("supports direct Supabase function URLs when same-origin rewrites are not available", async ({ context, page }) => {
    await context.clearCookies();

    await page.addInitScript(() => {
      window.__SAMUEL_ACCOUNT_CONFIG__ = {
        leadsEndpoint: "https://project-ref.supabase.co/functions/v1/account-leads",
        exportEndpoint: "https://project-ref.supabase.co/functions/v1/account-export",
        deleteEndpoint: "https://project-ref.supabase.co/functions/v1/account-delete"
      };
    });

    await mockAuthenticatedAccount(page, {
      ownLeads: [
        {
          id: "lead-9",
          created_at: "2026-06-28T09:15:00.000Z",
          goal: "Clases para empresa",
          current_level: "B2",
          availability: "Mañanas",
          message: "Quiero una propuesta para mi equipo.",
          status: "reviewed"
        }
      ]
    });

    let exportUrl = "";
    let deleteUrl = "";

    await page.route("https://project-ref.supabase.co/functions/v1/account-export", async (route) => {
      exportUrl = route.request().url();
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          export: {
            account: {
              user_id: "user-1",
              email: "alumna@example.com"
            }
          }
        })
      });
    });

    await page.route("https://project-ref.supabase.co/functions/v1/account-delete", async (route) => {
      deleteUrl = route.request().url();
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Tu cuenta se ha eliminado correctamente."
        })
      });
    });

    const downloadPromise = page.waitForEvent("download");

    await page.goto("/mi-cuenta/");

    await expect(page.locator("#account-leads-list")).toContainText("Clases para empresa");
    await expect(page.locator("#account-leads-list")).toContainText("revisado");

    await page.getByRole("button", { name: /descargar mis datos/i }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/^samuel-coach-datos-\d{4}-\d{2}-\d{2}\.json$/);
    expect(exportUrl).toBe("https://project-ref.supabase.co/functions/v1/account-export");

    await page.locator("#delete-account-confirmation").fill("ELIMINAR");
    await page.getByRole("button", { name: /eliminar cuenta/i }).click();
    await page.waitForURL("**/?account_deleted=1");
    expect(deleteUrl).toBe("https://project-ref.supabase.co/functions/v1/account-delete");
  });
});
