#!/usr/bin/env node
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  deletePostImage,
  listPosts,
  readPost,
  saveImageMetadata,
  savePost,
  savePostImage,
} from "./post-manager-core.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const uiDir = path.join(rootDir, "tools", "post-manager");
const port = Number(process.env.POST_MANAGER_PORT || 4321);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === "/health" && req.method === "GET") {
      return sendJson(res, { ok: true, service: "samuel-coach" });
    }

    if (url.pathname === "/api/posts" && req.method === "GET") {
      return sendJson(res, { posts: await listPosts(rootDir) });
    }

    if (url.pathname === "/api/posts" && req.method === "POST") {
      const payload = await readJson(req);
      return sendJson(res, await savePost(rootDir, null, payload), 201);
    }

    const postMatch = url.pathname.match(/^\/api\/posts\/([a-z0-9-]+)$/);
    if (postMatch && req.method === "GET") {
      return sendJson(res, await readPost(rootDir, postMatch[1]));
    }

    if (postMatch && req.method === "PUT") {
      const payload = await readJson(req);
      return sendJson(res, await savePost(rootDir, postMatch[1], payload));
    }

    const imageCollectionMatch = url.pathname.match(/^\/api\/posts\/([a-z0-9-]+)\/images$/);
    if (imageCollectionMatch && req.method === "POST") {
      const payload = await readJson(req, 24 * 1024 * 1024);
      return sendJson(res, await savePostImage(rootDir, imageCollectionMatch[1], payload.fileName, payload.data));
    }

    const imageMatch = url.pathname.match(/^\/api\/posts\/([a-z0-9-]+)\/images\/(.+)$/);
    if (imageMatch && req.method === "DELETE") {
      return sendJson(res, await deletePostImage(rootDir, imageMatch[1], decodeURIComponent(imageMatch[2])));
    }

    if (imageMatch && req.method === "PUT") {
      const payload = await readJson(req);
      return sendJson(res, await saveImageMetadata(rootDir, imageMatch[1], decodeURIComponent(imageMatch[2]), payload));
    }

    if (url.pathname === "/api/build" && req.method === "POST") {
      return sendJson(res, await runBuild());
    }

    return serveStatic(url.pathname, res);
  } catch (error) {
    sendJson(res, { error: error.message || "Error inesperado" }, 500);
  }
});

const host = process.env.POST_MANAGER_HOST || "127.0.0.1";
server.listen(port, host, () => {
  console.log(`Gestor de posts listo en http://${host}:${port}`);
});

async function serveStatic(urlPath, res) {
  const normalizedPath = urlPath === "/" ? "/index.html" : urlPath;
  const isPostManagerPath = normalizedPath === "/tools/post-manager" || normalizedPath.startsWith("/tools/post-manager/");
  const relativePath = isPostManagerPath
    ? normalizedPath.replace(/^\/tools\/post-manager\/?/, "/") || "/index.html"
    : normalizedPath;
  const baseDir = isPostManagerPath ? uiDir : rootDir;
  let targetPath = path.resolve(baseDir, `.${relativePath}`);
  if (!targetPath.startsWith(baseDir)) return sendJson(res, { error: "Ruta no permitida" }, 403);

  try {
    if ((await stat(targetPath)).isDirectory()) {
      targetPath = path.join(targetPath, "index.html");
    }
    const body = await readFile(targetPath);
    res.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Type": contentTypes[path.extname(targetPath)] || "application/octet-stream",
    });
    res.end(body);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("No encontrado");
      return;
    }
    throw error;
  }
}

function sendJson(res, data, status = 200) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

async function readJson(req, maxBytes = 2 * 1024 * 1024) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBytes) throw new Error("La peticion es demasiado grande.");
    chunks.push(chunk);
  }
  return chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {};
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("npm", ["run", "build:blog"], {
      cwd: rootDir,
      env: { ...process.env, REBUILD_BLOG_PAGES: "1" },
      shell: false,
    });
    let output = "";
    child.stdout.on("data", (chunk) => {
      output += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      output += chunk.toString();
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve({ ok: true, output: output.trim() });
      else reject(new Error(output.trim() || `Build fallido con codigo ${code}`));
    });
  });
}
