import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rename, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  deletePostImage,
  listPosts,
  parsePostMarkdown,
  readPost,
  saveImageMetadata,
  savePost,
  savePostImage,
  sanitizeImageName,
  serializePostMarkdown,
  slugify,
} from "../../scripts/post-manager-core.mjs";

test("parsea y serializa frontmatter del gestor", () => {
  const parsed = parsePostMarkdown("---\ntitle: Hola\nslug: hola\n---\n\n## Texto");
  assert.equal(parsed.meta.title, "Hola");
  assert.equal(parsed.body, "## Texto");
  assert.match(serializePostMarkdown(parsed.meta, parsed.body), /title: Hola/);
});

test("normaliza slugs e impide nombres de imagen peligrosos", () => {
  assert.equal(slugify("Título con Ñ y espacios"), "titulo-con-n-y-espacios");
  assert.equal(sanitizeImageName("Mi Foto Grande.webp"), "mi-foto-grande.webp");
  assert.throws(() => sanitizeImageName("../secret.txt"), /Imagen invalida/);
});

test("crea, lista, lee y actualiza posts con imagenes", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "post-manager-"));
  try {
    const created = await savePost(root, null, {
      title: "Primer post",
      slug: "primer-post",
      description: "Descripcion inicial",
      tags: "goethe, b1",
      body: "Contenido **importante**",
    });
    assert.equal(created.slug, "primer-post");

    const image = await savePostImage(root, "primer-post", "Cover.webp", Buffer.from("fake").toString("base64"));
    assert.equal(image.file, "cover.webp");
    await saveImageMetadata(root, "primer-post", "cover.webp", {
      alt: "Alumno estudiando aleman",
      description: "Imagen principal del articulo",
      isFeatured: true,
    });

    const posts = await listPosts(root);
    assert.equal(posts.length, 1);
    assert.deepEqual(posts[0].tags, ["goethe", "b1"]);
    assert.equal(posts[0].images[0].file, "cover.webp");
    assert.equal(posts[0].images[0].alt, "Alumno estudiando aleman");
    assert.equal(posts[0].images[0].isFeatured, true);

    const updated = await savePost(root, "primer-post", {
      title: "Primer post editado",
      slug: "primer-post-editado",
      description: "Descripcion editada",
      body: "Nuevo cuerpo",
    });
    assert.equal(updated.slug, "primer-post-editado");
    assert.equal((await readPost(root, "primer-post-editado")).meta.title, "Primer post editado");

    const markdown = await readFile(path.join(root, "blog-posts", "primer-post-editado.md"), "utf8");
    assert.match(markdown, /description: Descripcion editada/);

    await deletePostImage(root, "primer-post-editado", "cover.webp");
    assert.deepEqual((await readPost(root, "primer-post-editado")).images, []);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("abre posts heredados cuando el archivo no coincide con el slug", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "post-manager-legacy-"));
  try {
    await savePost(root, null, {
      title: "Post heredado",
      slug: "post-heredado",
      description: "Descripcion heredada",
      body: "Contenido",
    });
    await rename(
      path.join(root, "blog-posts", "post-heredado.md"),
      path.join(root, "blog-posts", "INSTRUCCIONES.md"),
    );

    const post = await readPost(root, "post-heredado");
    assert.equal(post.file, "INSTRUCCIONES.md");
    assert.equal(post.meta.title, "Post heredado");
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("lista y abre posts HTML existentes sin markdown fuente", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "post-manager-html-"));
  try {
    await mkdir(path.join(root, "f", "post-html-existente"), { recursive: true });
    await writeFile(
      path.join(root, "f", "post-html-existente", "index.html"),
      `<!doctype html>
      <html lang="es">
        <head>
          <title>Post HTML existente | Samuel Coach de Alemán</title>
          <meta name="description" content="Descripcion del post existente">
          <meta property="og:image" content="https://example.com/cover.webp">
          <script type="application/ld+json">{"datePublished":"2026-10-14"}</script>
        </head>
        <body>
          <article>
            <div class="blog-post-card">
              <span class="blog-pill">Gramática B1</span>
              <h1>Post HTML existente</h1>
              <p>Texto <strong>importante</strong> del post.</p>
            </div>
          </article>
        </body>
      </html>`,
      "utf8",
    );

    const posts = await listPosts(root);
    assert.equal(posts[0].source, "generated-html");
    assert.equal(posts[0].slug, "post-html-existente");
    assert.equal(posts[0].status, "html-heredado");

    const post = await readPost(root, "post-html-existente");
    assert.equal(post.source, "generated-html");
    assert.match(post.body, /Texto \*\*importante\*\*/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
