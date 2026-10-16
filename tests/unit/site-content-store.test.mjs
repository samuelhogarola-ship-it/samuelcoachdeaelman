import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, lstat, rename } from 'node:fs/promises';
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
