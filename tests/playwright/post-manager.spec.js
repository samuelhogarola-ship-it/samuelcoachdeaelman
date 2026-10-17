const { test, expect } = require('@playwright/test');

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
