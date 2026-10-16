#!/usr/bin/env node
import { createContactHandler } from "./contact-api.mjs";
import { createServer } from "node:http";
import { readFile, realpath, stat } from "node:fs/promises";
import { isAdminUser } from "../assets/js/admin-gate-core.mjs";
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
const realRootDir = await realpath(rootDir);
const redirectRules = (await readFile(path.join(rootDir, ".htaccess"), "utf8"))
  .split(/\r?\n/)
  .map(line => line.match(/^RedirectMatch\s+301\s+(\S+)\s+(\S+)\s*$/))
  .filter(Boolean)
  .map(([, pattern, target]) => ({ pattern: new RegExp(pattern), target }));
const supabaseUrl = process.env.SUPABASE_URL || "https://hocdlmxzghwymamientc.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "sb_publishable_d2RkD-vcqXebnAFs31AdHw_ti2Eb5qO";
const contactHandler = createContactHandler();
const port = Number(process.env.POST_MANAGER_PORT || 4321);
let postsListCache = null;
let postsListCacheAt = 0;
const POSTS_CACHE_TTL = 5000;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
};

const privateDirectories = new Set([
  "scripts", "config", "docs", "tests", "node_modules", "supabase", "functions",
  "blog-posts", "site-data", "output", "test-results", "playwright-report", "site-estatica", "CHAT",
]);

function isPublicPath(urlPath) {
  const parts = urlPath.split("/").filter(Boolean);
  if (parts.some(part => part.startsWith(".") || part.includes("\\")) || urlPath.includes("\0")) return false;
  if (privateDirectories.has(parts[0])) return false;
  if (parts[0] === "tools" && parts[1] !== "post-manager") return false;
  if (parts.length === 1 && !["index.html", "robots.txt", "sitemap.xml", "manifest.webmanifest", "umami-config.json"].includes(parts[0]) && path.extname(parts[0])) return false;
  if (parts.at(-1) === "generate-pages.js") return false;
  const extension = path.extname(urlPath).toLowerCase();
  return !extension || Boolean(contentTypes[extension]);
}

const server = createServer(async (req, res) => {
  try {
    res.setHeader("X-Content-Type-Options", "nosniff");
    const url = new URL(req.url, "http://localhost");
    const hostname = (req.headers.host || "").toLowerCase();
    if (hostname === "admin.samuelcoachdealeman.com") {
      const adminPath = url.pathname === "/admin" || url.pathname.startsWith("/admin/")
        ? url.pathname : `/admin${url.pathname}`;
      return redirect(res, `https://www.samuelcoachdealeman.com${adminPath}${url.search}`);
    }
    if (hostname === "samuelcoachdealeman.com") {
      return redirect(res, `https://www.samuelcoachdealeman.com${url.pathname}${url.search}`);
    }
    if (/^\/functions\/v1\/contact\/?$/.test(url.pathname)) return await contactHandler(req, res);
    if (url.pathname.startsWith("/api/")) {
      res.setHeader("Cache-Control", "no-store");
      const authError = await authorizeAdmin(req);
      if (authError) return sendJson(res, { error: authError.message }, authError.status);
    }

    if (url.pathname === "/health" && req.method === "GET") {
      return sendJson(res, { ok: true, service: "samuel-coach" });
    }

    if (url.pathname === "/api/posts" && req.method === "GET") {
      const now = Date.now();
      if (!postsListCache || now - postsListCacheAt > POSTS_CACHE_TTL) {
        postsListCache = await listPosts(rootDir);
        postsListCacheAt = now;
      }
      return sendJson(res, { posts: postsListCache });
    }

    if (url.pathname === "/api/posts" && req.method === "POST") {
      const payload = await readJson(req);
      const result = await savePost(rootDir, null, payload);
      postsListCache = null;
      return sendJson(res, result, 201);
    }

    const postMatch = url.pathname.match(/^\/api\/posts\/([a-z0-9-]+)$/);
    if (postMatch && req.method === "GET") {
      return sendJson(res, await readPost(rootDir, postMatch[1]));
    }

    if (postMatch && req.method === "PUT") {
      const payload = await readJson(req);
      const result = await savePost(rootDir, postMatch[1], payload);
      postsListCache = null;
      return sendJson(res, result);
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

    if (url.pathname.startsWith("/api/")) return sendJson(res, { error: "Ruta no encontrada" }, 404);
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.setHeader("Allow", "GET, HEAD");
      return sendJson(res, { error: "Metodo no permitido" }, 405);
    }
    return await serveStatic(url, req, res);
  } catch (error) {
    sendJson(res, { error: error.status ? error.message : "Error inesperado" }, error.status || 500);
  }
});

const host = process.env.POST_MANAGER_HOST || "127.0.0.1";
server.listen(port, host, () => {
  console.log(`Gestor de posts listo en http://${host}:${port}`);
});

async function authorizeAdmin(req) {
  const bearer = (req.headers.authorization || "").match(/^Bearer ([^\s]+)$/i);
  if (!bearer) return { status: 401, message: "Inicia sesion como administrador." };
  try {
    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/auth/v1/user`, {
      headers: { apikey: supabaseKey, Authorization: `Bearer ${bearer[1]}` },
      signal: AbortSignal.timeout(8000),
      redirect: "error",
    });
    if (response.status === 401 || response.status === 403) return { status: 401, message: "Sesion invalida o caducada." };
    if (!response.ok) return { status: 503, message: "No se pudo verificar la sesion." };
    const user = await response.json();
    if (!user.id || !isAdminUser(user)) return { status: 403, message: "Acceso reservado al administrador." };
    return null;
  } catch {
    return { status: 503, message: "No se pudo verificar la sesion." };
  }
}

function redirect(res, location) {
  res.writeHead(301, { Location: location });
  res.end();
}

function notFound(res) {
  return sendJson(res, { error: "No encontrado" }, 404);
}

async function serveStatic(url, req, res) {
  let urlPath;
  try { urlPath = decodeURIComponent(url.pathname); }
  catch { return sendJson(res, { error: "Ruta invalida" }, 400); }
  if (!isPublicPath(urlPath)) return notFound(res);
  for (const rule of redirectRules) {
    if (rule.pattern.test(urlPath)) return redirect(res, urlPath.replace(rule.pattern, rule.target) + url.search);
  }
  let targetPath = path.resolve(rootDir, `.${urlPath}`);
  if (targetPath !== rootDir && !targetPath.startsWith(rootDir + path.sep)) return notFound(res);
  try {
    if ((await stat(targetPath)).isDirectory()) {
      if (!url.pathname.endsWith("/")) return redirect(res, url.pathname + "/" + url.search);
      targetPath = path.join(targetPath, "index.html");
    }
    const resolvedPath = await realpath(targetPath);
    // Published blog files may live in the persistent volume. Only /f/ maps
    // there; the volume and Markdown drafts remain inaccessible by URL.
    const persistedBlogRoot = path.join(realRootDir, "site-data", "content", "f");
    const isPublishedVolumeFile = urlPath.startsWith("/f/") && resolvedPath.startsWith(persistedBlogRoot + path.sep)
      && isPublicPath("/f/" + path.relative(persistedBlogRoot, resolvedPath));
    if (!isPublishedVolumeFile && (!resolvedPath.startsWith(realRootDir + path.sep) || !isPublicPath("/" + path.relative(realRootDir, resolvedPath)))) return notFound(res);
    if (!contentTypes[path.extname(targetPath).toLowerCase()]) return notFound(res);
    const body = await readFile(resolvedPath);
    res.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Type": contentTypes[path.extname(targetPath).toLowerCase()],
      "Content-Length": body.length,
    });
    res.end(req.method === "HEAD" ? undefined : body);
  } catch (error) {
    if (["ENOENT", "ENOTDIR", "EISDIR"].includes(error.code)) return notFound(res);
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
    if (size > maxBytes) throw Object.assign(new Error("La peticion es demasiado grande."), { status: 413 });
    chunks.push(chunk);
  }
  try { return chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {}; }
  catch { throw Object.assign(new Error("JSON invalido."), { status: 400 }); }
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
