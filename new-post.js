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
  let useDefaultImage = false;

  if (addImage.toLowerCase() === 's') {
    const imageSource = await question('¿Imagen custom (c) o usar estática temporalmente (e)? [c/e]: ');
    if (imageSource.toLowerCase() === 'c') {
      imageFile = await question('Nombre de la imagen (ej: cover.jpg): ');
    } else {
      useDefaultImage = true;
      imageFile = null;
    }
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
  const imageLine = imageFile ? `image: img/${imageFile}\n` : (useDefaultImage ? `image: default\n` : '');
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
  } else if (useDefaultImage) {
    console.log(`\n🎨 Usando imagen estática (og-blog.webp)`);
    console.log(`\n💡 Para cambiar después:`);
    console.log(`   1. Copia tu imagen a: /f/${slug}/img/cover.webp`);
    console.log(`   2. Edita /blog-posts/${slug}.md`);
    console.log(`   3. Cambia "image: default" → "image: img/cover.webp"`);
    console.log(`   4. Ejecuta: npm run build:blog`);
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
