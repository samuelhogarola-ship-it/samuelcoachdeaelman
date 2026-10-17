const { test, expect } = require('@playwright/test');
const path = require('path');

test('el editor conserva HTML heredado, guarda borradores y publica', async ({ page }) => {
  let post = {
    slug: 'post-heredado',
    source: 'generated-html',
    format: 'html',
    isPublished: true,
    meta: {
      title: 'Post heredado',
      slug: 'post-heredado',
      description: 'Descripcion inicial',
      date: '2026-10-16',
      author: 'Samuel Coach de Aleman',
      lang: 'es',
      status: 'published',
      content_format: 'html',
    },
    body: '<h1>Post heredado</h1><div class="blog-table-wrap"><table><tbody><tr><td>Contenido</td></tr></tbody></table></div>',
    images: [],
  };
  const saves = [];
  let builds = 0;

  await page.route('**/assets/js/admin-gate.js', route => route.fulfill({
    contentType: 'application/javascript',
    body: 'export async function requireAdminAccess(){ return { email: "info@webfuengirola.com" }; }',
  }));
  await page.route('**/assets/js/auth.js', route => route.fulfill({
    contentType: 'application/javascript',
    body: 'export const supabase={auth:{getSession:async()=>({data:{session:{access_token:"fixture-token"}}})}};',
  }));
  await page.route('**/api/**', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.pathname === '/api/posts' && request.method() === 'GET') {
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ posts: [{
        slug: post.slug,
        title: post.meta.title,
        description: post.meta.description,
        status: post.meta.status,
        isPublished: post.isPublished,
        words: 8,
        images: [],
        tags: [],
      }] }) });
    }
    if (url.pathname === `/api/posts/${post.slug}` && request.method() === 'GET') {
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(post) });
    }
    if (url.pathname === `/api/posts/${post.slug}` && request.method() === 'PUT') {
      const payload = request.postDataJSON();
      saves.push(payload);
      post = { ...post, meta: { ...post.meta, ...payload }, body: payload.body, format: payload.content_format };
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(post) });
    }
    if (url.pathname === '/api/build' && request.method() === 'POST') {
      builds += 1;
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ ok: true }) });
    }
    return route.fulfill({ status: 404, contentType: 'application/json', body: '{"error":"not found"}' });
  });

  await page.goto('/tools/post-manager/');
  await expect(page.locator('#currentTitle')).toHaveText('Post heredado');
  await expect(page.locator('[data-view="markdown"]')).toHaveText('Editar HTML');
  await expect(page.locator('#visualEditor .blog-table-wrap')).toBeVisible();
  await expect(page.locator('#viewPublished')).toHaveAttribute('href', '/f/post-heredado/');

  await page.locator('#title').fill('Post editado como borrador');
  await expect(page.locator('#statusText')).toHaveText('Cambios sin guardar');
  await page.locator('#savePost').click();
  await expect(page.locator('#statusText')).toHaveText('Borrador guardado');
  expect(saves.at(-1).status).toBe('draft');
  expect(saves.at(-1).content_format).toBe('html');
  expect(saves.at(-1).body).toContain('blog-table-wrap');
  expect(builds).toBe(0);

  await page.locator('#title').fill('Post publicado');
  await page.locator('#publishPost').click();
  await expect(page.locator('#statusText')).toHaveText('Publicado correctamente');
  expect(saves.at(-1).status).toBe('published');
  expect(builds).toBe(1);
});

test('el creador propone el slug, valida campos y guarda con Cmd o Ctrl+S', async ({ page }) => {
  const creates = [];

  await page.route('**/assets/js/admin-gate.js', route => route.fulfill({
    contentType: 'application/javascript',
    body: 'export async function requireAdminAccess(){ return { email: "info@webfuengirola.com" }; }',
  }));
  await page.route('**/assets/js/auth.js', route => route.fulfill({
    contentType: 'application/javascript',
    body: 'export const supabase={auth:{getSession:async()=>({data:{session:{access_token:"fixture-token"}}})}};',
  }));
  await page.route('**/api/**', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.pathname === '/api/posts' && request.method() === 'GET') {
      return route.fulfill({ contentType: 'application/json', body: '{"posts":[]}' });
    }
    if (url.pathname === '/api/posts' && request.method() === 'POST') {
      const payload = request.postDataJSON();
      creates.push(payload);
      return route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          slug: payload.slug,
          meta: payload,
          body: payload.body,
          format: 'markdown',
          isPublished: false,
          images: [],
        }),
      });
    }
    if (url.pathname.startsWith('/api/posts/') && request.method() === 'GET') {
      const payload = creates.at(-1);
      return route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({
          slug: payload.slug,
          meta: payload,
          body: payload.body,
          format: 'markdown',
          isPublished: false,
          images: [],
        }),
      });
    }
    return route.fulfill({ status: 404, contentType: 'application/json', body: '{"error":"not found"}' });
  });

  await page.goto('/tools/post-manager/');
  await page.locator('#title').fill('Cómo preparar el Goethe B1');
  await expect(page.locator('#slug')).toHaveValue('como-preparar-el-goethe-b1');

  await page.locator('#savePost').click();
  await expect(page.locator('#statusText')).toHaveText('La meta description es obligatoria.');
  await expect(page.locator('#description')).toBeFocused();
  expect(creates).toHaveLength(0);

  await page.locator('#description').fill('Consejos claros para preparar y aprobar el Goethe B1.');
  await page.locator('#description').press(process.platform === 'darwin' ? 'Meta+s' : 'Control+s');
  await expect(page.locator('#statusText')).toHaveText('Borrador guardado');
  expect(creates).toHaveLength(1);
  expect(creates[0].slug).toBe('como-preparar-el-goethe-b1');
  expect(creates[0].status).toBe('draft');
});

test('ofrece formato contextual e inserta y mueve una imagen desde el cursor', async ({ page }) => {
  let post = {
    slug: 'editor-dinamico',
    format: 'markdown',
    isPublished: false,
    meta: {
      title: 'Editor dinámico',
      slug: 'editor-dinamico',
      description: 'Prueba del editor dinámico',
      date: '2026-10-17',
      author: 'Samuel Coach de Aleman',
      lang: 'es',
      status: 'draft',
      content_format: 'markdown',
    },
    body: 'Primera línea\n\nSegunda línea',
    images: [],
  };
  const saves = [];

  await page.route('**/assets/js/admin-gate.js', route => route.fulfill({
    contentType: 'application/javascript',
    body: 'export async function requireAdminAccess(){ return { email: "info@webfuengirola.com" }; }',
  }));
  await page.route('**/assets/js/auth.js', route => route.fulfill({
    contentType: 'application/javascript',
    body: 'export const supabase={auth:{getSession:async()=>({data:{session:{access_token:"fixture-token"}}})}};',
  }));
  await page.route('**/api/**', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.pathname === '/api/posts' && request.method() === 'GET') {
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ posts: [{
        slug: post.slug,
        title: post.meta.title,
        description: post.meta.description,
        status: post.meta.status,
        isPublished: false,
        words: 4,
        images: post.images,
        tags: [],
      }] }) });
    }
    if (url.pathname === '/api/posts/editor-dinamico' && request.method() === 'GET') {
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(post) });
    }
    if (url.pathname === '/api/posts/editor-dinamico' && request.method() === 'PUT') {
      const payload = request.postDataJSON();
      saves.push(payload);
      post = { ...post, meta: { ...post.meta, ...payload }, body: payload.body };
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(post) });
    }
    if (url.pathname === '/api/posts/editor-dinamico/images' && request.method() === 'POST') {
      const image = { file: 'foto-inline.webp', url: '/f/editor-dinamico/img/foto-inline.webp', alt: '', description: '', isFeatured: false, canDelete: true };
      post.images = [image];
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(image) });
    }
    return route.fulfill({ status: 404, contentType: 'application/json', body: '{"error":"not found"}' });
  });

  await page.goto('/tools/post-manager/');
  await expect(page.locator('#currentTitle')).toHaveText('Editor dinámico');

  await page.locator('#visualEditor').evaluate(editor => {
    const text = editor.querySelector('p').firstChild;
    const range = document.createRange();
    range.setStart(text, 0);
    range.setEnd(text, 7);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event('selectionchange'));
  });
  await expect(page.locator('#selectionToolbar')).toBeVisible();
  await page.locator('#selectionToolbar [data-command="bold"]').click();
  await expect(page.locator('#visualEditor strong, #visualEditor b')).toHaveText('Primera');

  await page.locator('#visualEditor').evaluate(editor => {
    const second = editor.querySelectorAll('p')[1];
    const range = document.createRange();
    range.setStartBefore(second);
    range.collapse(true);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event('selectionchange'));
  });
  const chooserPromise = page.waitForEvent('filechooser');
  await page.locator('#insertImage').click();
  const chooser = await chooserPromise;
  await chooser.setFiles(path.join(__dirname, '../../assets/img/logo-main.webp'));

  const inlineImage = page.locator('#visualEditor img[src="/f/editor-dinamico/img/foto-inline.webp"]');
  await expect(inlineImage).toBeVisible();
  const blocksBefore = await page.locator('#visualEditor').evaluate(editor => [...editor.children].map(node => node.tagName + ':' + node.textContent.trim()));
  expect(blocksBefore).toEqual(['P:Primera línea', 'FIGURE:', 'P:Segunda línea']);

  await inlineImage.click();
  await expect(page.locator('#imageMoveToolbar')).toBeVisible();
  await page.locator('#moveImageDown').click();
  const blocksAfter = await page.locator('#visualEditor').evaluate(editor => [...editor.children].map(node => node.tagName + ':' + node.textContent.trim()));
  expect(blocksAfter).toEqual(['P:Primera línea', 'P:Segunda línea', 'FIGURE:']);

  await page.locator('#visualEditor').evaluate(editor => {
    const second = editor.querySelectorAll('p')[1];
    const range = document.createRange();
    range.setStartBefore(second);
    range.collapse(true);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event('selectionchange'));
  });
  await page.locator('#insertSelectedImage').click();
  await expect(page.locator('#visualEditor img[src="/f/editor-dinamico/img/foto-inline.webp"]')).toHaveCount(2);

  await page.locator('#savePost').click();
  await expect(page.locator('#statusText')).toHaveText('Borrador guardado');
  expect(saves.at(-1).body).toContain('/f/editor-dinamico/img/foto-inline.webp');
});
