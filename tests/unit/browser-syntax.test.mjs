import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { ESLint } from "eslint";

const eslint = new ESLint();

for (const extension of ["js", "mjs"]) {
  for (const [name, source] of [
    ["optional chaining", "export const session = data?.session;"],
    ["nullish coalescing", "export const session = data.session ?? null;"],
  ]) {
    test(`browser ${extension} modules reject ${name} before deployment`, async () => {
      const [result] = await eslint.lintText(source, {
        filePath: `assets/js/compatibility-fixture.${extension}`,
      });
      assert.equal(result.fatalErrorCount, 1, "ES2019 must reject unsupported syntax");
    });
  }

  test(`browser ${extension} modules accept explicit null guards`, async () => {
    const [result] = await eslint.lintText(
      "export const session = data == null || data.session == null ? null : data.session;",
      { filePath: `assets/js/compatibility-fixture.${extension}` },
    );
    assert.equal(result.fatalErrorCount, 0);
  });
}

test("authentication parses before initializing login and premium navigation", async () => {
  const source = await readFile(new URL("../../assets/js/auth.js", import.meta.url), "utf8");
  const results = await eslint.lintText(source, { filePath: "assets/js/auth.js" });
  const failures = results.flatMap(result => result.messages
    .filter(message => message.fatal)
    .map(message => `${result.filePath}:${message.line}: ${message.message}`));
  assert.deepEqual(failures, []);
});
