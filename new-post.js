#!/usr/bin/env node
/**
 * Interactive Blog Post Creator
 * Usage: npm run new:post
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

async function createPost() {
  console.log('\n📝 Crear nuevo post en blog\n');

  const title = await question('Título del post: ');
  const slug = await question('Slug (URL): ');
  const description = await question('Meta description (160 caracteres max): ');
  const author = await question('Autor [Samuel Coach de Alemán]: ') || 'Samuel Coach de Alemán';
  const lang = await question('Idioma [es/en]: ') || 'es';
  const addImage = await question('¿Añadir imagen? (s/n) [n]: ');

  let imageFile = null;
  if (addImage.toLowerCase() === 's') {
    imageFile = await question('Nombre de la imagen (ej: cover.jpg): ');
  }

  // Crear estructura de directorios
  const postDir = path.join(__dirname, 'f', slug);
  const imgDir = path.join(postDir, 'img');

  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
    console.log(`✓ Creada carpeta: /f/${slug}/`);
  }

  if (imageFile && !fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
    console.log(`✓ Creada carpeta: /f/${slug}/img/`);
  }

  // Crear archivo markdown
  const date = new Date().toISOString().split('T')[0];
  const imageLine = imageFile ? `image: img/${imageFile}\n` : '';
  const imageRef = imageFile ? `\n![${title}](./img/${imageFile})` : '';

  const markdownContent = `---
title: ${title}
slug: ${slug}
description: ${description}
date: ${date}
author: ${author}
lang: ${lang}
${imageLine}---

# ${title}

${imageRef}

## Contenido

Aquí va tu contenido...

### Sección 1

Escribe en markdown:
- **Bold** para destacar
- *Italic* para énfasis
- [Links](https://ejemplo.com)
- Listas con \`- item\`

### Sección 2

\`\`\`
código aquí
\`\`\`

¡Listo! Ahora edita este archivo y ejecuta \`npm run build:blog\`
`;

  const markdownPath = path.join(__dirname, 'blog-posts', `${slug}.md`);

  if (!fs.existsSync(path.join(__dirname, 'blog-posts'))) {
    fs.mkdirSync(path.join(__dirname, 'blog-posts'), { recursive: true });
  }

  fs.writeFileSync(markdownPath, markdownContent);
  console.log(`\n✓ Post creado: /blog-posts/${slug}.md`);

  if (imageFile) {
    console.log(`\n📸 Recuerda copiar tu imagen a: /f/${slug}/img/${imageFile}`);
  }

  // Ejecutar generador
  console.log('\n⏳ Generando HTML...');
  try {
    execSync('npm run build:blog', { stdio: 'inherit' });
    console.log(`\n✅ Post listo en: /f/${slug}/index.html`);
    console.log(`\n📖 Ver: https://www.samuelcoachdealeman.com/f/${slug}/`);
  } catch (e) {
    console.error('❌ Error generando post:', e.message);
  }

  rl.close();
}

createPost().catch(console.error);
