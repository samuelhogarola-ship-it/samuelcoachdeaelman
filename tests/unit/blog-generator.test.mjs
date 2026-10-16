import assert from "node:assert/strict";
import { access, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

async function runGenerator(postsDir, outputDir) {
  const child = spawn(process.execPath, [fileURLToPath(new URL("../../generate-blog.js", import.meta.url))], {
    env: { ...process.env, BLOG_POSTS_DIR: postsDir, BLOG_OUTPUT_DIR: outputDir, REBUILD_BLOG_PAGES: "1", PUBLISH_EXPLICIT_ONLY: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  child.stdout.on("data", (chunk) => { output += chunk; });
  child.stderr.on("data", (chunk) => { output += chunk; });
  const [code] = await once(child, "exit");
  assert.equal(code, 0, output);
}

test("publica solo posts published y renderiza imagenes Markdown", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "blog-generator-"));
  const postsDir = path.join(root, "posts");
  const outputDir = path.join(root, "f");
  try {
    await mkdir(postsDir, { recursive: true });
    await writeFile(path.join(postsDir, "publicado.md"), `---
title: Post publicado
slug: post-publicado
description: Descripcion
status: published
---

![Una clase](/f/post-publicado/img/clase.webp)
`, "utf8");
    await writeFile(path.join(postsDir, "borrador.md"), `---
title: Borrador
slug: borrador
description: No publicar
status: draft
---

Texto privado
`, "utf8");
    await writeFile(path.join(postsDir, "sin-estado.md"), `---
title: Fuente antigua sin estado
slug: sin-estado
description: No debe republicarse por accidente
---

Texto heredado
`, "utf8");

    await runGenerator(postsDir, outputDir);

    const html = await readFile(path.join(outputDir, "post-publicado", "index.html"), "utf8");
    assert.match(html, /<img src="\/f\/post-publicado\/img\/clase\.webp" alt="Una clase">/);
    assert.match(html, /class="blog-post-main"/);
    assert.match(html, /\/assets\/css\/cookie-banner-core\.css/);
    await assert.rejects(access(path.join(outputDir, "borrador", "index.html")));
    await assert.rejects(access(path.join(outputDir, "sin-estado", "index.html")));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("al editar un post heredado conserva la plantilla publica y su HTML enriquecido", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "blog-generator-legacy-"));
  const postsDir = path.join(root, "posts");
  const outputDir = path.join(root, "f");
  try {
    await mkdir(postsDir, { recursive: true });
    await mkdir(path.join(outputDir, "post-heredado"), { recursive: true });
    await writeFile(path.join(postsDir, "post-heredado.md"), `---
title: Titulo actualizado
slug: post-heredado
description: Descripcion actualizada
status: published
content_format: html
---

<h1>Titulo actualizado</h1><div class="blog-table-wrap"><table><tr><td>Contenido nuevo</td></tr></table></div>
`, "utf8");
    await writeFile(path.join(outputDir, "post-heredado", "index.html"), `<!doctype html><html><head>
      <title>Titulo anterior | Samuel Coach de Alemán</title>
      <meta name="description" content="Anterior">
      <meta property="og:title" content="Titulo anterior">
      <meta property="og:description" content="Anterior">
    </head><body><div class="notice">Aviso conservado</div><main>
      <article class="blog-post-main"><div class="blog-post-card"><h1>Anterior</h1></div></article>
    </main><footer>Pie conservado</footer></body></html>`, "utf8");

    await runGenerator(postsDir, outputDir);

    const html = await readFile(path.join(outputDir, "post-heredado", "index.html"), "utf8");
    assert.match(html, /Aviso conservado/);
    assert.match(html, /Pie conservado/);
    assert.match(html, /blog-table-wrap/);
    assert.match(html, /<title>Titulo actualizado \| Samuel Coach de Alemán<\/title>/);
    assert.match(html, /<meta name="description" content="Descripcion actualizada">/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
