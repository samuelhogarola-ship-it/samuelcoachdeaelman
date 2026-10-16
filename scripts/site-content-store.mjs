import { createHash } from 'node:crypto';
import { copyFile, lstat, mkdir, readFile, readdir, readlink, rename, rm, symlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const trees = ['blog-posts', 'f'];
const digest = data => createHash('sha256').update(data).digest('hex');

async function readOptional(file) {
  try { return await readFile(file); } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

async function statOptional(file) {
  try { return await lstat(file); } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

async function bundledFiles(dir, prefix = '') {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch (error) {
    if (error.code === 'ENOENT') return {};
    throw error;
  }
  const files = {};
  for (const entry of entries) {
    const key = path.posix.join(prefix, entry.name);
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) Object.assign(files, await bundledFiles(file, key));
    else if (entry.isFile()) files[key] = digest(await readFile(file));
    else throw new Error(`Unexpected link in bundled content: ${key}`);
  }
  return files;
}

// Compare each new release with the previous bundled baseline. Only untouched
// files follow the release; editorial edits, uploads and deletions survive it.
export async function prepareSiteContent(rootDir, dataDir) {
  const storage = path.resolve(dataDir);
  await mkdir(path.join(storage, 'content'), { recursive: true });
  const manifestPath = path.join(storage, 'baseline.json');
  const previousBytes = await readOptional(manifestPath);
  const previous = previousBytes ? JSON.parse(previousBytes) : {};
  const next = { ...previous };

  for (const tree of trees) {
    const source = path.join(rootDir, tree);
    const backup = path.join(rootDir, `.bundled-${tree}`);
    const destination = path.join(storage, 'content', tree);
    if (!(await statOptional(source)) && await statOptional(backup)) await rename(backup, source);
    const sourceInfo = await statOptional(source);
    if (sourceInfo && sourceInfo.isSymbolicLink()) {
      if (path.resolve(path.dirname(source), await readlink(source)) !== destination) {
        throw new Error(`Unexpected content link: ${tree}`);
      }
      await rm(backup, { recursive: true, force: true });
      continue; // Restart of the same container: no new image to reconcile.
    }
    const bundled = await bundledFiles(source);
    const old = previous[tree] || {};
    await mkdir(destination, { recursive: true });
    for (const [file, checksum] of Object.entries(bundled)) {
      const target = path.join(destination, file);
      const current = await readOptional(target);
      const currentHash = current === null ? null : digest(current);
      const untouched = old[file] && currentHash === old[file];
      const newlyBundled = !old[file] && current === null;
      if ((untouched || newlyBundled) && currentHash !== checksum) {
        await mkdir(path.dirname(target), { recursive: true });
        const temporary = `${target}.deploy-${process.pid}`;
        await copyFile(path.join(source, file), temporary);
        await rename(temporary, target);
      }
    }
    for (const [file, checksum] of Object.entries(old)) {
      if (Object.hasOwn(bundled, file)) continue;
      const target = path.join(destination, file);
      const current = await readOptional(target);
      if (current !== null && digest(current) === checksum) await rm(target);
    }
    next[tree] = bundled;
    // Persist the new baseline before switching the directory. A crash between
    // rename and symlink is recoverable from the bundled backup on restart.
    const temporaryManifest = `${manifestPath}.tmp`;
    await writeFile(temporaryManifest, JSON.stringify(next) + '\n');
    await rename(temporaryManifest, manifestPath);
    if (sourceInfo) await rename(source, backup);
    await symlink(destination, source, 'dir');
    await rm(backup, { recursive: true, force: true });
  }
}
