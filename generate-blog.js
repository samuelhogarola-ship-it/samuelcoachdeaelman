#!/usr/bin/env node
/**
 * Blog Post Generator
 * Lee markdown en /blog-posts/ y genera HTML en /f/{slug}/index.html
 */

const fs = require('fs');
const path = require('path');

const BLOG_POSTS_DIR = path.join(__dirname, 'blog-posts');
const OUTPUT_DIR = path.join(__dirname, 'f');

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

// Generate HTML template
function generateHtmlPage(slug, frontmatter, htmlContent) {
  const title = frontmatter.title || slug;
  const description = frontmatter.description || `Blog post: ${title}`;
  const publishDate = frontmatter.date || new Date().toISOString().split('T')[0];
  const author = frontmatter.author || 'Samuel Coach de Alemán';

  let image = 'https://www.samuelcoachdealeman.com/assets/img/og-blog.webp';
  if (frontmatter.image) {
    if (frontmatter.image === 'default') {
      image = 'https://www.samuelcoachdealeman.com/assets/img/og-blog.webp';
    } else {
      image = `https://www.samuelcoachdealeman.com/f/${slug}/${frontmatter.image}`;
    }
  }

  return `<!DOCTYPE html>
<html lang="${frontmatter.lang || 'es'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Samuel Coach de Alemán</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="https://www.samuelcoachdealeman.com/f/${slug}/">
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap"></noscript>
  <link rel="stylesheet" href="/assets/css/styles.css?v=20260704a">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="https://www.samuelcoachdealeman.com/f/${slug}/">
  <meta property="og:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${title}",
    "description": "${description}",
    "author": {"@type": "Person", "name": "${author}"},
    "datePublished": "${publishDate}",
    "image": "${image}",
    "publisher": {
      "@type": "Organization",
      "name": "Samuel Coach de Alemán",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.samuelcoachdealeman.com/assets/img/logo-main.webp"
      }
    }
  }
  </script>
</head>
<body>
  <nav class="nav">
    <a href="/" class="nav-logo"><img src="/assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="48" height="48"></a>
    <ul class="nav-links">
      <li><a href="/">Inicio</a></li>
      <li><a href="/recursos/">Recursos</a></li>
      <li><a href="/#contacto">Contacto</a></li>
    </ul>
  </nav>

  <main>
    <article>
      <header>
        <h1>${title}</h1>
        <p class="meta">${publishDate} · ${author}</p>
      </header>

      ${htmlContent}
    </article>
  </main>

  <footer class="footer">
    <p>&copy; 2026 Samuel Coach de Alemán. <a href="/">Inicio</a></p>
  </footer>

  <script defer src="/assets/js/google-analytics-core.js"></script>
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
    const htmlContent = markdownToHtml(parsed.markdown);
    const htmlPage = generateHtmlPage(slug, parsed.frontmatter, htmlContent);

    const outputPath = path.join(OUTPUT_DIR, slug, 'index.html');
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, htmlPage);
    console.log(`✓ Generated ${slug}`);
    generated++;
  });

  console.log(`\n✅ Generated ${generated} blog posts`);
}

// Run
generateBlog();
