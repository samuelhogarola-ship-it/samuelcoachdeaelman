# Admin Tools Access Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a password-protected `/admin/` hub for the existing blogger and reports tools.

**Architecture:** Reuse the existing Supabase browser authentication session. Every admin entry point performs the same session check and redirects anonymous visitors to `/login/` with a return URL. The public site remains static; the current post manager server remains a separate runtime dependency for the blogger tool.

**Tech Stack:** Static HTML/CSS/ES modules, existing Supabase auth client, Node test runner, Playwright-compatible route checks.

**Spec:** Approved in conversation on 2026-10-16.

## Global Constraints

- `/admin/` is the landing page for internal tools.
- `/admin/blogger/` exposes the existing post manager.
- `/admin/informes/` exposes the existing reports tool.
- Existing tool URLs remain compatible but require authentication.
- No VPS migration is performed in this phase.

## Review Focus

- Anonymous access to each entry point redirects to login.
- Authenticated access preserves the intended destination.
- Login return URLs are encoded safely.
- Direct legacy URLs are protected as well as `/admin/*` URLs.
- The blogger runtime requirement is documented for the later VPS migration.

### Task 1: Shared admin gate and admin hub

**Files:**
- Create: `assets/js/admin-gate.js`
- Create: `admin/index.html`
- Create: `admin/styles.css`
- Test: `tests/unit/admin-gate.test.mjs`

- [ ] Write failing tests for login redirect construction and protected-page behavior.
- [ ] Implement the shared gate using `supabase.auth.getSession()` and `onAuthStateChange`.
- [ ] Add the Spanish admin hub with links to both tools and sign-out.
- [ ] Run the focused unit test.

### Task 2: Protected tool entry points

**Files:**
- Create: `admin/blogger/index.html`
- Create: `admin/informes/index.html`
- Modify: `tools/post-manager/index.html`
- Modify: `informes-profesor/index.html`

- [ ] Add the shared gate to the existing tools.
- [ ] Add admin wrappers that preserve the same authenticated session and open the existing tool.
- [ ] Run static route and HTML checks.

### Task 3: VPS handoff documentation

**Files:**
- Create: `docs/admin-tools-vps-migration.md`

- [ ] Document static public output, Supabase-backed dynamic features, and the Node post-manager runtime.
- [ ] Document the future reverse-proxy/process-manager/HTTPS requirements without changing deployment.

### Task 4: Verification

- [ ] Run unit tests, lint, generated checks, and the relevant Playwright smoke checks.
- [ ] Inspect the final diff and report any remaining VPS configuration work.
