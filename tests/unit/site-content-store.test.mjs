import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, lstat, rename, cp } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { prepareSiteContent } from '../../scripts/site-content-store.mjs';

async function fixture(t) {
  const dir = await mkdtemp(path.join(os.tmpdir(), 'samuel-content-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  return { dir, data: path.join(dir, 'persistent') };
}

async function image(dir, name, files) {
  const root = path.join(dir, name);
  for (const [file, content] of Object.entries(files)) {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), content);
  }
  return root;
}

test('deploys new bundled pages while preserving editorial edits and uploads', async t => {
  const { dir, data } = await fixture(t);
  const first = await image(dir, 'release1', {
    'f/edited/index.html': 'bundled original',
    'f/untouched/index.html': 'old template',
    'f/removed/index.html': 'obsolete',
    'blog-posts/edited.md': 'original source',
  });
  await prepareSiteContent(first, data);
  assert.ok((await lstat(path.join(first, 'f'))).isSymbolicLink());
  await writeFile(path.join(first, 'f/edited/index.html'), 'editorial change');
  await writeFile(path.join(first, 'blog-posts/edited.md'), 'saved source');
  await writeFile(path.join(first, 'f/edited/upload.webp'), 'uploaded image');
  const second = await image(dir, 'release2', {
    'f/edited/index.html': 'new bundled template',
    'f/untouched/index.html': 'new template',
    'f/new/index.html': 'new page',
    'blog-posts/edited.md': 'bundled source update',
  });
  await prepareSiteContent(second, data);
  assert.equal(await readFile(path.join(second, 'f/edited/index.html'), 'utf8'), 'editorial change');
  assert.equal(await readFile(path.join(second, 'f/untouched/index.html'), 'utf8'), 'new template');
  assert.equal(await readFile(path.join(second, 'f/new/index.html'), 'utf8'), 'new page');
  assert.equal(await readFile(path.join(second, 'blog-posts/edited.md'), 'utf8'), 'saved source');
  assert.equal(await readFile(path.join(second, 'f/edited/upload.webp'), 'utf8'), 'uploaded image');
  await assert.rejects(readFile(path.join(second, 'f/removed/index.html')), { code: 'ENOENT' });
});

test('does not resurrect editor-deleted images or overwrite changes on container restart', async t => {
  const { dir, data } = await fixture(t);
  const files = { 'f/post/image.webp': 'image', 'blog-posts/post.md': 'source' };
  const first = await image(dir, 'release1', files);
  await prepareSiteContent(first, data);
  await rm(path.join(first, 'f/post/image.webp'));
  await writeFile(path.join(first, 'blog-posts/post.md'), 'edited');
  await prepareSiteContent(first, data);
  const second = await image(dir, 'release2', files);
  await prepareSiteContent(second, data);
  await assert.rejects(readFile(path.join(second, 'f/post/image.webp')), { code: 'ENOENT' });
  assert.equal(await readFile(path.join(second, 'blog-posts/post.md'), 'utf8'), 'edited');
});

test('recovers an interrupted switch from bundled directory to persistent content', async t => {
  const { dir, data } = await fixture(t);
  const root = await image(dir, 'release', { 'f/post/index.html': 'published page' });
  await rename(path.join(root, 'f'), path.join(root, '.bundled-f'));
  await prepareSiteContent(root, data);
  assert.equal(await readFile(path.join(root, 'f/post/index.html'), 'utf8'), 'published page');
});

// Exercise the real module while emulating overlayfs's EXDEV for a lower-layer
// directory rename. All file copies, removals and recovery use the real disk.
async function overlayStore() {
  const source = await readFile(new URL('../../scripts/site-content-store.mjs', import.meta.url), 'utf8');
  const fsAdapter = `
    export * from 'node:fs/promises';
    import { rename as realRename } from 'node:fs/promises';
    export async function rename(from, to) {
      if (/\\/(?:blog-posts|f)$/.test(from) && /\\/\\.bundled-(?:blog-posts|f)$/.test(to)) {
        throw Object.assign(new Error('lower-layer directory'), { code: 'EXDEV' });
      }
      return realRename(from, to);
    }
  `;
  const adapterUrl = 'data:text/javascript,' + encodeURIComponent(fsAdapter);
  return import('data:text/javascript,' + encodeURIComponent(source.replace("'node:fs/promises'", JSON.stringify(adapterUrl))));
}

test('switches overlayfs lower-layer directories after a complete backup copy', async t => {
  const { dir, data } = await fixture(t);
  const root = await image(dir, 'overlay-release', {
    'blog-posts/post.md': 'source',
    'f/post/index.html': 'page',
    'f/post/img/cover.webp': 'image',
  });
  const { prepareSiteContent: prepareOverlay } = await overlayStore();
  await prepareOverlay(root, data);
  assert.ok((await lstat(path.join(root, 'blog-posts'))).isSymbolicLink());
  assert.ok((await lstat(path.join(root, 'f'))).isSymbolicLink());
  assert.equal(await readFile(path.join(root, 'blog-posts/post.md'), 'utf8'), 'source');
  assert.equal(await readFile(path.join(root, 'f/post/img/cover.webp'), 'utf8'), 'image');
  await assert.rejects(lstat(path.join(root, '.bundled-f')), { code: 'ENOENT' });
  await assert.rejects(lstat(path.join(root, '.bundled-f.tmp')), { code: 'ENOENT' });
});

test('restores a complete backup when source removal was interrupted', async t => {
  const { dir, data } = await fixture(t);
  const root = await image(dir, 'release', {
    'f/post/index.html': 'page',
    'f/post/img/cover.webp': 'image',
  });
  await cp(path.join(root, 'f'), path.join(root, '.bundled-f'), { recursive: true });
  await rm(path.join(root, 'f/post/img'), { recursive: true });
  await prepareSiteContent(root, data);
  assert.equal(await readFile(path.join(root, 'f/post/img/cover.webp'), 'utf8'), 'image');
  assert.equal(await readFile(path.join(root, 'f/post/index.html'), 'utf8'), 'page');
  await assert.rejects(lstat(path.join(root, '.bundled-f')), { code: 'ENOENT' });
});

test('discards an interrupted temporary copy and preserves the intact source', async t => {
  const { dir, data } = await fixture(t);
  const root = await image(dir, 'release', {
    'f/post/index.html': 'complete page',
    'f/post/img/cover.webp': 'complete image',
    '.bundled-f.tmp/post/index.html': 'incomplete copy',
  });
  const { prepareSiteContent: prepareOverlay } = await overlayStore();
  await prepareOverlay(root, data);
  assert.equal(await readFile(path.join(root, 'f/post/index.html'), 'utf8'), 'complete page');
  assert.equal(await readFile(path.join(root, 'f/post/img/cover.webp'), 'utf8'), 'complete image');
  await assert.rejects(lstat(path.join(root, '.bundled-f.tmp')), { code: 'ENOENT' });
});
