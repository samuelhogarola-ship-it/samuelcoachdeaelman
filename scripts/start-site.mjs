import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareSiteContent } from './site-content-store.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
if (process.env.SAMUEL_CONTENT_DIR) {
  await prepareSiteContent(rootDir, process.env.SAMUEL_CONTENT_DIR);
}
await import('./post-manager-server.mjs');
