import { supabase } from "/assets/js/auth.js";
import { buildAdminLoginUrl } from "/assets/js/admin-gate-core.mjs";

const fields = {
  title: document.querySelector("#title"),
  slug: document.querySelector("#slug"),
  description: document.querySelector("#description"),
  date: document.querySelector("#date"),
  lang: document.querySelector("#lang"),
  author: document.querySelector("#author"),
  image: document.querySelector("#image"),
  tags: document.querySelector("#tags"),
  category: document.querySelector("#category"),
  level: document.querySelector("#level"),
  status: document.querySelector("#status"),
  body: document.querySelector("#body"),
};

const state = {
  posts: [],
  activeSlug: null,
  activeImages: [],
  selectedImage: null,
  bodyFormat: "markdown",
  dirty: false,
  slugEdited: false,
};

const postList = document.querySelector("#postList");
const search = document.querySelector("#search");
const statusText = document.querySelector("#statusText");
const currentTitle = document.querySelector("#currentTitle");
const imageList = document.querySelector("#imageList");
const preview = document.querySelector("#preview");
const mainPreview = document.querySelector("#mainPreview");
const htmlView = document.querySelector("#htmlView");
const visualEditor = document.querySelector("#visualEditor");
const editorViews = {
  visual: visualEditor,
  markdown: fields.body,
  html: htmlView,
};

document.querySelector("#newPost").addEventListener("click", () => {
  if (confirmDiscardChanges()) newPost();
});
document.querySelector("#savePost").addEventListener("click", () => runAction("Guardando borrador...", () => savePost("draft")));
document.querySelector("#publishPost").addEventListener("click", () => runAction("Publicando...", publishPost));
document.querySelector("#imageUpload").addEventListener("change", uploadImages);
document.querySelector("#saveImageMeta").addEventListener("click", saveSelectedImageMeta);
document.querySelector("#setFeaturedImage").addEventListener("click", setSelectedImageAsFeatured);
search.addEventListener("input", renderPostList);
postList.addEventListener("click", (event) => {
  const card = event.target.closest(".post-card");
  if (!card) return;
  if (confirmDiscardChanges()) loadPost(card.dataset.slug);
});
fields.body.addEventListener("input", () => {
  visualEditor.innerHTML = state.bodyFormat === "html" ? fields.body.value : markdownPreview(fields.body.value);
  renderPreview();
  markDirty();
});
visualEditor.addEventListener("input", () => {
  fields.body.value = state.bodyFormat === "html" ? visualEditor.innerHTML : richHtmlToMarkdown(visualEditor.innerHTML);
  renderPreview();
  markDirty();
});
fields.title.addEventListener("input", () => {
  currentTitle.textContent = fields.title.value || "Nuevo post";
  if (!state.activeSlug && !state.slugEdited) fields.slug.value = slugifyTitle(fields.title.value);
  markDirty();
});
fields.slug.addEventListener("input", () => {
  state.slugEdited = true;
});
for (const field of Object.values(fields).filter((field) => ![fields.title, fields.body, fields.status].includes(field))) {
  field.addEventListener("input", markDirty);
}
document.addEventListener("keydown", (event) => {
  if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "s") return;
  event.preventDefault();
  if (!document.querySelector("#savePost").disabled) {
    runAction("Guardando borrador...", () => savePost("draft"));
  }
});
window.addEventListener("beforeunload", (event) => {
  if (!state.dirty) return;
  event.preventDefault();
  event.returnValue = "";
});

for (const button of document.querySelectorAll("[data-wrap], [data-line]")) {
  button.addEventListener("click", () => applyFormat(button));
}
for (const button of document.querySelectorAll("[data-command]")) {
  button.addEventListener("click", () => {
    visualEditor.focus();
    document.execCommand(button.dataset.command);
    fields.body.value = state.bodyFormat === "html" ? visualEditor.innerHTML : richHtmlToMarkdown(visualEditor.innerHTML);
    renderPreview();
    markDirty();
  });
}
for (const button of document.querySelectorAll("[data-view]")) {
  button.addEventListener("click", () => setView(button.dataset.view));
}
document.querySelector("#insertImage").addEventListener("click", insertSelectedImage);

loadPosts();

async function loadPosts() {
  try {
    const data = await api("/api/posts");
    state.posts = data.posts;
    renderPostList();
    if (state.posts[0]) await loadPost(state.posts[0].slug);
    else newPost();
  } catch (error) {
    statusText.textContent = error.message;
  }
}

function renderPostList() {
  const query = search.value.trim().toLowerCase();
  postList.innerHTML = "";
  for (const post of state.posts.filter((item) => matchesSearch(item, query))) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `post-card${post.slug === state.activeSlug ? " is-active" : ""}`;
    button.dataset.slug = post.slug;
    const publication = post.isPublished ? "Publicado" : "Borrador";
    button.innerHTML = `<strong>${escapeHtml(post.title)}</strong><span>${publication} · ${escapeHtml(post.slug)} · ${post.words} palabras · ${post.images.length} imagenes</span>`;
    postList.append(button);
  }
}

async function loadPost(slug) {
  if (!slug) return;
  statusText.textContent = "Cargando post...";
  try {
    const post = await api(`/api/posts/${slug}`);
    state.activeSlug = post.slug;
    fillForm(post);
    renderImages(post.images);
    renderPostList();
    renderPreview();
    statusText.textContent = `Post cargado: ${post.slug}`;
    document.querySelector(".editor").scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    statusText.textContent = `No se pudo abrir ${slug}: ${error.message}`;
  }
}

function newPost() {
  state.activeSlug = null;
  state.slugEdited = false;
  fillForm({
    meta: {
      title: "",
      slug: "",
      description: "",
      date: new Date().toISOString().slice(0, 10),
      author: "Samuel Coach de Aleman",
      lang: "es",
      status: "draft",
    },
    body: "## Contenido\n\nEscribe aqui el post...",
    images: [],
  });
  renderPostList();
  renderImages([]);
  renderPreview();
  statusText.textContent = "Nuevo post";
  updatePublishedLink(null, false);
}

function fillForm(post) {
  const meta = post.meta || {};
  state.bodyFormat = post.format || meta.content_format || "markdown";
  for (const key of Object.keys(fields)) {
    if (key === "body") fields.body.value = post.body || "";
    else if (key === "tags" && Array.isArray(meta.tags)) fields.tags.value = meta.tags.join(", ");
    else fields[key].value = meta[key] || "";
  }
  visualEditor.innerHTML = state.bodyFormat === "html" ? fields.body.value : markdownPreview(fields.body.value);
  document.querySelector('[data-view="markdown"]').textContent = state.bodyFormat === "html" ? "Editar HTML" : "Editar Markdown";
  currentTitle.textContent = fields.title.value || "Nuevo post";
  updatePublishedLink(meta.slug || post.slug, Boolean(post.isPublished));
  state.slugEdited = Boolean(meta.slug || post.slug);
  state.dirty = false;
}

function markDirty() {
  state.dirty = true;
  statusText.textContent = "Cambios sin guardar";
}

function confirmDiscardChanges() {
  return !state.dirty || window.confirm("Hay cambios sin guardar. ¿Quieres descartarlos?");
}

async function savePost(forcedStatus = null) {
  const payload = readForm();
  if (forcedStatus) payload.status = forcedStatus;
  if (!validatePost(payload)) return null;
  const endpoint = state.activeSlug ? `/api/posts/${state.activeSlug}` : "/api/posts";
  const method = state.activeSlug ? "PUT" : "POST";
  const post = await api(endpoint, { method, body: payload });
  state.activeSlug = post.slug;
  fields.status.value = payload.status;
  const data = await api("/api/posts");
  state.posts = data.posts;
  renderPostList();
  await loadPost(post.slug);
  statusText.textContent = payload.status === "published" ? "Cambios guardados" : "Borrador guardado";
  return post;
}

function updatePublishedLink(slug, isPublished) {
  const link = document.querySelector("#viewPublished");
  link.hidden = !slug || !isPublished;
  link.href = slug ? `/f/${slug}/` : "#";
}

async function publishPost() {
  const post = await savePost("published");
  if (!post) return;
  await api("/api/build", { method: "POST", body: {} });
  updatePublishedLink(post.slug, true);
  statusText.textContent = "Publicado correctamente";
}

function validatePost(payload) {
  const required = [
    [payload.title, fields.title, "El titulo es obligatorio."],
    [payload.description, fields.description, "La meta description es obligatoria."],
    [payload.body, editorViews.visual.hidden ? fields.body : visualEditor, "El contenido es obligatorio."],
  ];
  const invalid = required.find(([value]) => !String(value || "").trim());
  if (!invalid) return true;
  statusText.textContent = invalid[2];
  invalid[1].focus();
  return false;
}

function slugifyTitle(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

async function runAction(message, action) {
  const buttons = [...document.querySelectorAll("#savePost, #publishPost")];
  buttons.forEach((button) => { button.disabled = true; });
  statusText.textContent = message;
  try {
    await action();
  } catch (error) {
    statusText.textContent = error.message;
  } finally {
    buttons.forEach((button) => { button.disabled = false; });
  }
}

async function uploadImages(event) {
  if (!state.activeSlug) {
    statusText.textContent = "Guarda el post antes de subir imagenes";
    event.target.value = "";
    return;
  }

  for (const file of event.target.files) {
    const data = await fileToBase64(file);
    await api(`/api/posts/${state.activeSlug}/images`, {
      method: "POST",
      body: { fileName: file.name, data },
    });
  }

  event.target.value = "";
  await loadPost(state.activeSlug);
}

function renderImages(images) {
  state.activeImages = images;
  imageList.innerHTML = "";
  document.querySelector("#imageMetaForm").hidden = !state.selectedImage;
  if (!images.length) {
    imageList.innerHTML = "<p class=\"status-text\">Sin imagenes para este post.</p>";
    state.selectedImage = null;
    document.querySelector("#imageMetaForm").hidden = true;
    return;
  }

  for (const image of images) {
    const item = document.createElement("div");
    item.className = `image-item${image.file === state.selectedImage ? " is-selected" : ""}`;
    const deleteButton = image.canDelete === false ? "" : "<button class=\"delete-image\" type=\"button\">Borrar</button>";
    item.innerHTML = `<img src="${escapeHtml(image.url)}" alt="${escapeHtml(image.alt || "")}"><span><strong>${escapeHtml(image.file)}</strong>${image.isFeatured ? "<small>Principal</small>" : ""}</span>${deleteButton}`;
    item.addEventListener("click", (event) => {
      if (event.target.closest(".delete-image")) return;
      selectImage(image.file);
    });
    const deleteImageButton = item.querySelector(".delete-image");
    if (deleteImageButton) {
      deleteImageButton.addEventListener("click", async () => {
        await api(`/api/posts/${state.activeSlug}/images/${encodeURIComponent(image.file)}`, { method: "DELETE" });
        await loadPost(state.activeSlug);
      });
    }
    imageList.append(item);
  }

  if (state.selectedImage && images.some((image) => image.file === state.selectedImage)) renderSelectedImageMeta();
  else selectImage(images[0].file);
}

function readForm() {
  fields.body.value = state.bodyFormat === "html" ? visualEditor.innerHTML : richHtmlToMarkdown(visualEditor.innerHTML);
  return {
    title: fields.title.value,
    slug: fields.slug.value,
    description: fields.description.value,
    date: fields.date.value,
    lang: fields.lang.value,
    author: fields.author.value,
    image: fields.image.value,
    tags: fields.tags.value,
    category: fields.category.value,
    level: fields.level.value,
    status: fields.status.value,
    content_format: state.bodyFormat,
    body: fields.body.value,
  };
}

function applyFormat(button) {
  if (!editorViews.visual.hidden) {
    visualEditor.focus();
    if (button.dataset.wrap === "**|**") document.execCommand("bold");
    else if (button.dataset.wrap === "*|*") document.execCommand("italic");
    else if (button.dataset.line === "## ") document.execCommand("formatBlock", false, "h2");
    else if (button.dataset.line === "### ") document.execCommand("formatBlock", false, "h3");
    else if (button.dataset.line === "- ") document.execCommand("insertUnorderedList");
    else if (button.dataset.wrap && button.dataset.wrap.startsWith("[|]")) {
      const url = window.prompt("URL del enlace", "https://");
      if (url) document.execCommand("createLink", false, url);
    }
    fields.body.value = state.bodyFormat === "html" ? visualEditor.innerHTML : richHtmlToMarkdown(visualEditor.innerHTML);
    renderPreview();
    markDirty();
    return;
  }
  if (button.dataset.wrap) {
    const [before, after] = button.dataset.wrap.split("|");
    wrapSelection(before, after, button.dataset.placeholder || "texto");
    return;
  }
  prefixSelectedLines(button.dataset.line, button.dataset.placeholder || "texto");
}

function wrapSelection(before, after, placeholder) {
  const start = fields.body.selectionStart;
  const end = fields.body.selectionEnd;
  const selected = fields.body.value.slice(start, end) || placeholder;
  fields.body.setRangeText(`${before}${selected}${after}`, start, end, "select");
  fields.body.focus();
  renderPreview();
  markDirty();
}

function prefixSelectedLines(prefix, placeholder) {
  const start = fields.body.selectionStart;
  const end = fields.body.selectionEnd;
  const selected = fields.body.value.slice(start, end) || placeholder;
  const next = selected.split("\n").map((line) => `${prefix}${line.replace(/^#{2,3} |^- /, "")}`).join("\n");
  fields.body.setRangeText(next, start, end, "select");
  fields.body.focus();
  renderPreview();
  markDirty();
}

function insertSelectedImage() {
  const image = state.activeImages.find((item) => item.file === state.selectedImage) || state.activeImages[0];
  if (!image) {
    statusText.textContent = "Sube una imagen antes de insertarla";
    return;
  }
  const alt = image.alt || fields.title.value || image.file;
  if (editorViews.visual.hidden) {
    insertText(`![${alt}](${image.url})`);
    return;
  }
  visualEditor.focus();
  document.execCommand("insertHTML", false, `<img src="${escapeHtml(image.url)}" alt="${escapeHtml(alt)}">`);
  fields.body.value = state.bodyFormat === "html" ? visualEditor.innerHTML : richHtmlToMarkdown(visualEditor.innerHTML);
  renderPreview();
  markDirty();
}

function insertText(text) {
  const start = fields.body.selectionStart;
  const end = fields.body.selectionEnd;
  fields.body.setRangeText(text, start, end, "end");
  fields.body.focus();
  renderPreview();
  markDirty();
}

function renderPreview() {
  const html = state.bodyFormat === "html" ? fields.body.value : markdownPreview(fields.body.value);
  if (!visualEditor.innerHTML || editorViews.visual.hidden) visualEditor.innerHTML = html;
  preview.innerHTML = html;
  mainPreview.innerHTML = html;
  htmlView.textContent = html;
}

function markdownPreview(markdown) {
  const lines = escapeHtml(markdown)
    .replace(/\r\n?/g, "\n")
    .replace(/^[ \t]{2,}/gm, "")
    .replace(/^# (.*)$/gm, "<h1>$1</h1>")
    .replace(/^### (.*)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*)$/gm, "<h2>$1</h2>")
    .replace(/&lt;br\s*\/?&gt;/gi, "<br>")
    .replace(/&lt;\/?(strong|b)&gt;/gi, (tag) => tag.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replace(/^<b/i, "<strong").replace(/^<\/b/i, "</strong"))
    .replace(/&lt;\/?(em|i)&gt;/gi, (tag) => tag.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replace(/^<i/i, "<em").replace(/^<\/i/i, "</em"))
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1">')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
    .replace(/`([^`\n]+)`/g, "<code>$1</code>")
    .replace(/&lt;p class=&quot;blog-text-lg&quot;&gt;([\s\S]*?)&lt;\/p&gt;/g, '<p class="blog-text-lg">$1</p>')
    .replace(/&lt;[^&]+?&gt;/g, "");

  return lines
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      const headingMatch = trimmed.match(/^(<h[123]>.*?<\/h[123]>)(?:\n+([\s\S]+))?$/);
      if (headingMatch) {
        const [, heading, rest] = headingMatch;
        return rest ? `${heading}<p>${rest.trim().replace(/\n/g, "<br>")}</p>` : heading;
      }
      if (/^<(p|img)\b/.test(trimmed)) return trimmed;
      if (trimmed.startsWith("- ")) {
        return `<ul>${trimmed.split("\n").map((line) => `<li>${line.replace(/^- /, "")}</li>`).join("")}</ul>`;
      }
      return `<p>${trimmed.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

function setView(view) {
  for (const [name, element] of Object.entries(editorViews)) {
    element.hidden = name !== view;
  }
  for (const button of document.querySelectorAll("[data-view]")) {
    button.classList.toggle("is-active", button.dataset.view === view);
  }
  renderPreview();
}

function richHtmlToMarkdown(html) {
  const root = document.createElement("div");
  root.innerHTML = html;
  root.querySelectorAll("br").forEach((node) => node.replaceWith("\n"));
  root.querySelectorAll("strong, b").forEach((node) => node.replaceWith(`**${node.textContent}**`));
  root.querySelectorAll("em, i").forEach((node) => node.replaceWith(`*${node.textContent}*`));
  root.querySelectorAll("h1, h2, h3").forEach((node) => node.replaceWith(`${"#".repeat(Number(node.tagName[1]))} ${node.textContent}\n\n`));
  root.querySelectorAll("a").forEach((node) => node.replaceWith(`[${node.textContent}](${node.getAttribute("href") || ""})`));
  root.querySelectorAll("img").forEach((node) => node.replaceWith(`![${node.getAttribute("alt") || ""}](${node.getAttribute("src") || ""})`));
  root.querySelectorAll("li").forEach((node) => node.replaceWith(`- ${node.textContent}\n`));
  return root.innerText.replace(/\n{3,}/g, "\n\n").trim();
}

function selectImage(file) {
  state.selectedImage = file;
  renderImages(state.activeImages);
}

function renderSelectedImageMeta() {
  const image = state.activeImages.find((item) => item.file === state.selectedImage);
  const form = document.querySelector("#imageMetaForm");
  form.hidden = !image;
  if (!image) return;
  document.querySelector("#selectedImageName").textContent = image.file;
  document.querySelector("#imageAlt").value = image.alt || "";
  document.querySelector("#imageDescription").value = image.description || "";
}

async function saveSelectedImageMeta() {
  const image = state.activeImages.find((item) => item.file === state.selectedImage);
  if (!image) return;
  if (image.canDelete === false) {
    fields.image.value = image.url;
    statusText.textContent = "La imagen principal heredada ya esta asociada al post";
    return;
  }
  await api(`/api/posts/${state.activeSlug}/images/${encodeURIComponent(image.file)}`, {
    method: "PUT",
    body: {
      alt: document.querySelector("#imageAlt").value,
      description: document.querySelector("#imageDescription").value,
      isFeatured: Boolean(image.isFeatured),
    },
  });
  await loadPost(state.activeSlug);
  statusText.textContent = "Metadatos de imagen guardados";
}

async function setSelectedImageAsFeatured() {
  const image = state.activeImages.find((item) => item.file === state.selectedImage);
  if (!image) return;
  if (image.canDelete === false) {
    fields.image.value = image.url;
    statusText.textContent = "La imagen principal heredada ya esta marcada";
    return;
  }
  await api(`/api/posts/${state.activeSlug}/images/${encodeURIComponent(image.file)}`, {
    method: "PUT",
    body: {
      alt: document.querySelector("#imageAlt").value,
      description: document.querySelector("#imageDescription").value,
      isFeatured: true,
    },
  });
  fields.image.value = `img/${image.file}`;
  await savePost("draft");
  statusText.textContent = "Imagen principal actualizada";
}

function matchesSearch(post, query) {
  if (!query) return true;
  return [post.title, post.slug, post.description, post.category, post.level, ...post.tags]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

async function api(url, options = {}) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    window.location.replace(buildAdminLoginUrl(location.pathname + location.search));
    throw new Error("Inicia sesion como administrador.");
  }
  const response = await fetch(url, {
    method: options.method || "GET",
    headers: {
      Authorization: `Bearer ${session.access_token}`,
      ...(options.body ? { "Content-Type": "application/json" } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const data = await response.json();
  if (!response.ok) {
    statusText.textContent = data.error || "Error";
    throw new Error(data.error || "Error");
  }
  return data;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
