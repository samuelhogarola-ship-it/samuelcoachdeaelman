import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

test('production server serves login modules with an executable JavaScript MIME type', async t => {
  const reservation = createServer();
  reservation.listen(0, '127.0.0.1');
  await once(reservation, 'listening');
  const { port } = reservation.address();
  await new Promise(resolve => reservation.close(resolve));
  const server = spawn(process.execPath, ['scripts/post-manager-server.mjs'], {
    cwd: fileURLToPath(new URL('../../', import.meta.url)),
    env: { ...process.env, POST_MANAGER_HOST: '127.0.0.1', POST_MANAGER_PORT: String(port) },
    stdio: 'ignore',
  });
  t.after(async () => {
    if (server.exitCode === null && server.signalCode === null) {
      const closed = once(server, 'close');
      server.kill();
      await closed;
    }
  });
  const origin = `http://127.0.0.1:${port}`;
  let ready = false;
  for (let attempt = 0; attempt < 50; attempt++) {
    try { ready = (await fetch(`${origin}/health`)).ok; } catch { /* starting */ }
    if (ready) break;
    await delay(100);
  }
  assert.ok(ready, 'production server must start');
  for (const resource of ['/assets/js/auth.js', '/assets/js/auth-redirect.mjs']) {
    const response = await fetch(origin + resource);
    assert.equal(response.status, 200, resource);
    assert.match(response.headers.get('content-type'), /^(text|application)\/javascript\b/, resource);
    assert.match(await response.text(), /export /, resource);
  }
});
