import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const published = require('../../assets/js/lueckentext-data.js');
// A small reading fixture reproduces corpus changes without running the
// expensive draft authoring algorithm over hundreds of unrelated stories.
const readings = require('../../assets/js/leseverstehen-data.js');
readings.splice(4);
const { buildExercises } = require('../../sprachbausteine/generate-pages.js');

test('rebuilding pages preserves every published cloze answer, gap and exercise type', () => {
  const rebuilt = new Map(buildExercises().map(exercise => [exercise.slug, exercise]));
  for (const exercise of published) {
    assert.deepEqual(rebuilt.get(exercise.slug), exercise, `Published exercise changed: ${exercise.slug}`);
  }
});

test('reading additions do not publish unreviewed cloze exercises', () => {
  assert.deepEqual(buildExercises().map(exercise => exercise.slug).sort(), published.map(exercise => exercise.slug).sort());
});
