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

document.querySelector("#newPost").addEventListener("click", newPost);
document.querySelector("#savePost").addEventListener("click", savePost);
document.querySelector("#imageUpload").addEventListener("change", uploadImages);
document.querySelector("#saveImageMeta").addEventListener("click", saveSelectedImageMeta);
document.querySelector("#setFeaturedImage").addEventListener("click", setSelectedImageAsFeatured);
search.addEventListener("input", renderPostList);
postList.addEventListener("click", (event) => {
  const card = event.target.closest(".post-card");
  if (!card) return;
  loadPost(card.dataset.slug);
});
fields.body.addEventListener("input", () => {
  visualEditor.innerHTML = markdownPreview(fields.body.value);
  renderPreview();
});
visualEditor.addEventListener("input", () => {
  fields.body.value = richHtmlToMarkdown(visualEditor.innerHTML);
  renderPreview();
});
fields.title.addEventListener("input", () => {
  currentTitle.textContent = fields.title.value || "Nuevo post";
});

for (const button of document.querySelectorAll("[data-wrap], [data-line]")) {
  button.addEventListener("click", () => applyFormat(button));
}
for (const button of document.querySelectorAll("[data-command]")) {
  button.addEventListener("click", () => {
    visualEditor.focus();
    document.execCommand(button.dataset.command);
    fields.body.value = richHtmlToMarkdown(visualEditor.innerHTML);
    renderPreview();
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
    button.innerHTML = `<strong>${escapeHtml(post.title)}</strong><span>${escapeHtml(post.slug)} · ${post.words} palabras · ${post.images.length} imagenes</span>`;
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
}

function fillForm(post) {
  const meta = post.meta || {};
  for (const key of Object.keys(fields)) {
    if (key === "body") fields.body.value = post.body || "";
    else if (key === "tags" && Array.isArray(meta.tags)) fields.tags.value = meta.tags.join(", ");
    else fields[key].value = meta[key] || "";
  }
  visualEditor.innerHTML = markdownPreview(fields.body.value);
  currentTitle.textContent = fields.title.value || "Nuevo post";
}

async function savePost() {
  const payload = readForm();
  const endpoint = state.activeSlug ? `/api/posts/${state.activeSlug}` : "/api/posts";
  const method = state.activeSlug ? "PUT" : "POST";
  const post = await api(endpoint, { method, body: payload });
  state.activeSlug = post.slug;
  await loadPosts();
  await loadPost(post.slug);
  statusText.textContent = "Guardado";
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
    item.innerHTML = `<img src="${image.url}" alt=""><span><strong>${escapeHtml(image.file)}</strong>${image.isFeatured ? "<small>Principal</small>" : ""}</span>${deleteButton}`;
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
  fields.body.value = richHtmlToMarkdown(visualEditor.innerHTML);
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
    fields.body.value = richHtmlToMarkdown(visualEditor.innerHTML);
    renderPreview();
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
}

function prefixSelectedLines(prefix, placeholder) {
  const start = fields.body.selectionStart;
  const end = fields.body.selectionEnd;
  const selected = fields.body.value.slice(start, end) || placeholder;
  const next = selected.split("\n").map((line) => `${prefix}${line.replace(/^#{2,3} |^- /, "")}`).join("\n");
  fields.body.setRangeText(next, start, end, "select");
  fields.body.focus();
  renderPreview();
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
  fields.body.value = richHtmlToMarkdown(visualEditor.innerHTML);
  renderPreview();
}

function insertText(text) {
  const start = fields.body.selectionStart;
  const end = fields.body.selectionEnd;
  fields.body.setRangeText(text, start, end, "end");
  fields.body.focus();
  renderPreview();
}

function renderPreview() {
  const html = markdownPreview(fields.body.value);
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
  await savePost();
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
  const response = await fetch(url, {
    method: options.method || "GET",
    headers: options.body ? { "Content-Type": "application/json" } : undefined,
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
