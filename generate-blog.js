#!/usr/bin/env node
/**
 * Blog Post Generator
 * Lee markdown en /blog-posts/ y genera HTML en /f/{slug}/index.html
 */

const fs = require('fs');
const path = require('path');

const BLOG_POSTS_DIR = process.env.BLOG_POSTS_DIR || path.join(__dirname, 'blog-posts');
const OUTPUT_DIR = process.env.BLOG_OUTPUT_DIR || path.join(__dirname, 'f');

// Ensure directories exist
if (!fs.existsSync(BLOG_POSTS_DIR)) {
  fs.mkdirSync(BLOG_POSTS_DIR, { recursive: true });
  console.log(`✓ Created ${BLOG_POSTS_DIR}`);
}
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Parse frontmatter + markdown
function parseBlogPost(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    console.error('❌ Invalid format. Must start with --- frontmatter ---');
    return null;
  }

  const frontmatter = {};
  match[1].split('\n').forEach(line => {
    if (line.trim()) {
      const [key, ...valueParts] = line.split(':');
      frontmatter[key.trim()] = valueParts.join(':').trim();
    }
  });

  const markdownContent = match[2];

  return { frontmatter, markdown: markdownContent };
}

// Format inline elements (bold, italic, links, code)
function formatInline(text) {
  return text
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/`(.*?)`/g, '<code>$1</code>');
}

// Simple markdown to HTML
function markdownToHtml(markdown) {
  // Split by double newlines to identify blocks
  const blocks = markdown.split(/\n\n+/);
  const html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';

    // Headings
    if (/^### /.test(block)) {
      return block.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    }
    if (/^## /.test(block)) {
      return block.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    }
    if (/^# /.test(block)) {
      return block.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    }

    // Code blocks
    if (/^```/.test(block)) {
      const code = block.replace(/^```[\s\S]*?\n?([\s\S]*?)\n?```$/gm, '$1');
      return '<pre><code>' + code.trim() + '</code></pre>';
    }

    // Lists
    if (/^- /.test(block)) {
      const items = block.split('\n').map(line => {
        if (line.trim().startsWith('- ')) {
          const itemText = line.replace(/^- /, '').trim();
          return '<li>' + formatInline(itemText) + '</li>';
        }
        return '';
      }).join('');
      return '<ul>' + items + '</ul>';
    }

    // Paragraphs with formatting
    return '<p>' + formatInline(block) + '</p>';
  }).join('\n');

  return html;
}

function escapeAttribute(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMetaTag(html, attribute, name, content) {
  const pattern = new RegExp(`<meta\\s+${attribute}=["']${name}["'][^>]*>`, 'i');
  const replacement = `<meta ${attribute}="${name}" content="${escapeAttribute(content)}">`;
  return pattern.test(html) ? html.replace(pattern, replacement) : html;
}

function updateExistingPage(existing, slug, frontmatter, htmlContent) {
  const title = frontmatter.title || slug;
  const description = frontmatter.description || `Blog post: ${title}`;
  const canonical = `https://www.samuelcoachdealeman.com/f/${slug}/`;
  const publishDate = frontmatter.date || new Date().toISOString().split('T')[0];
  let image = 'https://www.samuelcoachdealeman.com/assets/img/og-home.webp';
  if (frontmatter.image && frontmatter.image !== 'default') {
    image = frontmatter.image.startsWith('http') || frontmatter.image.startsWith('/')
      ? frontmatter.image
      : `${canonical}${frontmatter.image}`;
  }

  let next = existing.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(title)} | Samuel Coach de Alemán</title>`);
  next = replaceMetaTag(next, 'name', 'description', description);
  next = replaceMetaTag(next, 'property', 'og:title', title);
  next = replaceMetaTag(next, 'property', 'og:description', description);
  next = replaceMetaTag(next, 'property', 'og:url', canonical);
  next = replaceMetaTag(next, 'property', 'og:image', image);
  next = replaceMetaTag(next, 'name', 'twitter:title', title);
  next = replaceMetaTag(next, 'name', 'twitter:description', description);
  next = replaceMetaTag(next, 'name', 'twitter:image', image);
  next = next.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}">`);
  next = next.replace(/"headline"\s*:\s*"(?:[^"\\]|\\.)*"/g, `"headline": ${JSON.stringify(title)}`);
  next = next.replace(/"description"\s*:\s*"(?:[^"\\]|\\.)*"/g, `"description": ${JSON.stringify(description)}`);
  next = next.replace(/"dateModified"\s*:\s*"(?:[^"\\]|\\.)*"/g, `"dateModified": ${JSON.stringify(publishDate)}`);

  const article = `<article class="blog-post-main">\n          <div class="blog-post-card">\n${htmlContent}\n          </div>\n        </article>`;
  if (/<article\s+class=["']blog-post-main["'][^>]*>[\s\S]*?<\/article>/i.test(next)) {
    return next.replace(/<article\s+class=["']blog-post-main["'][^>]*>[\s\S]*?<\/article>/i, article);
  }
  return next.replace(/<article[^>]*>[\s\S]*?<\/article>/i, `<article>\n${htmlContent}\n</article>`);
}

// Generate HTML template
function generateHtmlPage(slug, frontmatter, htmlContent) {
  const title = frontmatter.title || slug;
  const description = frontmatter.description || `Blog post: ${title}`;
  const publishDate = frontmatter.date || new Date().toISOString().split('T')[0];
  const author = frontmatter.author || 'Samuel Coach de Alemán';
  const canonical = `https://www.samuelcoachdealeman.com/f/${slug}/`;
  const safeTitle = escapeAttribute(title);
  const safeDescription = escapeAttribute(description);
  const safeAuthor = escapeAttribute(author);

  let image = 'https://www.samuelcoachdealeman.com/assets/img/og-home.webp';
  if (frontmatter.image && frontmatter.image !== 'default') {
    if (frontmatter.image.startsWith('http') || frontmatter.image.startsWith('/')) image = frontmatter.image;
    else if (fs.existsSync(path.join(OUTPUT_DIR, slug, frontmatter.image))) image = `${canonical}${frontmatter.image}`;
  }

  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.samuelcoachdealeman.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.samuelcoachdealeman.com/f/' },
          { '@type': 'ListItem', position: 3, name: title, item: canonical },
        ],
      },
      {
        '@type': 'BlogPosting', headline: title, description, url: canonical,
        datePublished: publishDate, dateModified: publishDate,
        inLanguage: frontmatter.lang || 'es',
        author: { '@type': 'Person', name: author, url: 'https://www.samuelcoachdealeman.com/sobre-mi/' },
        publisher: { '@type': 'Person', name: 'Samuel Coach de Alemán', url: 'https://www.samuelcoachdealeman.com/' },
        image, mainEntityOfPage: canonical,
      },
    ],
  }, null, 2).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="${frontmatter.lang || 'es'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle} | Samuel Coach de Alemán</title>
  <meta name="description" content="${safeDescription}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="theme-color" content="#455a64">
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap"></noscript>
  <link rel="icon" type="image/webp" href="/assets/img/favicon.webp">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="stylesheet" href="/assets/css/cookie-banner-core.css">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDescription}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${escapeAttribute(image)}">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDescription}">
  <meta name="twitter:image" content="${escapeAttribute(image)}">
  <script type="application/ld+json">${structuredData}</script>
</head>
<body>
  <nav>
    <div class="nav-inner">
      <a class="nav-logo" href="/"><img src="/assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="260" height="260"></a>
      <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú"><span></span><span></span><span></span></button>
      <ul class="nav-links"><li><a href="/">Inicio</a></li><li><a href="/f/">Blog</a></li><li><a href="/sobre-mi/">Sobre mí</a></li><li><a href="/servicios/">Servicios</a></li><li><a href="/recursos/">Recursos</a></li></ul>
    </div>
    <div id="mobile-menu" class="mobile-menu" hidden><a href="/">Inicio</a><a href="/f/">Blog</a><a href="/sobre-mi/">Sobre mí</a><a href="/servicios/">Servicios</a><a href="/recursos/">Recursos</a></div>
  </nav>

  <main class="blog-shell"><div class="container">
    <div class="blog-breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/">Inicio</a></li><li><a href="/f/">Blog</a></li><li>${safeTitle}</li></ol></div>
    <div class="blog-post-layout">
      <article class="blog-post-main"><div class="blog-post-card">
        <h1>${safeTitle}</h1>
        <p class="blog-post-lead">${safeDescription}</p>
        <div class="blog-post-meta"><span>📅 ${publishDate}</span><span>✍️ ${safeAuthor}</span></div>
        ${htmlContent}
      </div></article>
    </div>
  </div>
  </main>

  <footer><div class="container"><p>&copy; 2026 Samuel Coach de Alemán · <a href="/f/">Blog</a> · <a href="/legal/">Aviso legal</a></p></div></footer>

  <script src="/assets/js/main.js" defer></script>
  <script defer src="/assets/js/umami-analytics-core.js"></script>
  <script defer src="/assets/js/cookie-banner-core.js"></script>
</body>
</html>`;
}

// Main function
function generateBlog() {
  if (!fs.existsSync(BLOG_POSTS_DIR)) {
    console.log('ℹ No blog posts yet. Create /blog-posts/*.md');
    return;
  }

  const files = fs.readdirSync(BLOG_POSTS_DIR).filter(f => f.endsWith('.md'));

  if (files.length === 0) {
    console.log('ℹ No .md files in /blog-posts/');
    return;
  }

  let generated = 0;
  files.forEach(file => {
    const filePath = path.join(BLOG_POSTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseBlogPost(content);

    if (!parsed) {
      console.error(`❌ Failed to parse ${file}`);
      return;
    }

    const slug = parsed.frontmatter.slug || file.replace('.md', '');
    const defaultStatus = process.env.PUBLISH_EXPLICIT_ONLY === '1' ? 'draft' : 'published';
    if ((parsed.frontmatter.status || defaultStatus).toLowerCase() !== 'published') {
      console.log(`- Draft not published: ${slug}`);
      return;
    }
    const htmlContent = parsed.frontmatter.content_format === 'html'
      ? parsed.markdown.trim()
      : markdownToHtml(parsed.markdown);

    const outputPath = path.join(OUTPUT_DIR, slug, 'index.html');
    const outputDir = path.dirname(outputPath);

    if (fs.existsSync(outputPath) && process.env.REBUILD_BLOG_PAGES !== '1') {
      console.log(`- Preserved editorial page ${slug}`);
      return;
    }

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const htmlPage = fs.existsSync(outputPath)
      ? updateExistingPage(fs.readFileSync(outputPath, 'utf8'), slug, parsed.frontmatter, htmlContent)
      : generateHtmlPage(slug, parsed.frontmatter, htmlContent);
    fs.writeFileSync(outputPath, htmlPage);
    console.log(`✓ Generated ${slug}`);
    generated++;
  });

  console.log(`\n✅ Generated ${generated} blog posts`);
}

// Run
generateBlog();
