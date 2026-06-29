#!/usr/bin/env node
/**
 * Migra las tablas samuel_* de WF-Fuengirola → imKontext.
 *
 * Uso:
 *   node scripts/migrate-samuel-to-imkontext.mjs --dry-run
 *   SOURCE_URL=https://owlcmhlfuszyuwqxuhpb.supabase.co \
 *   SOURCE_SERVICE_KEY=eyJ... \
 *   DEST_URL=https://fvhxbbhxucwawypfzikf.supabase.co \
 *   DEST_SERVICE_KEY=eyJ... \
 *   node scripts/migrate-samuel-to-imkontext.mjs
 *
 * Idempotente: usa upsert por id (UUID). Seguro de re-ejecutar.
 * No migra samuel_attempts ni samuel_user_progress (vacías).
 */

import { createClient } from '@supabase/supabase-js'

const DRY_RUN = process.argv.includes('--dry-run')
const BATCH = 500

if (!DRY_RUN) {
  const required = ['SOURCE_URL', 'SOURCE_SERVICE_KEY', 'DEST_URL', 'DEST_SERVICE_KEY']
  const missing = required.filter(k => !process.env[k])
  if (missing.length) {
    console.error('ERROR: faltan variables de entorno:', missing.join(', '))
    console.error('Usa --dry-run para probar sin credenciales.')
    process.exit(1)
  }
}

const source = DRY_RUN ? null : createClient(
  process.env.SOURCE_URL,
  process.env.SOURCE_SERVICE_KEY,
  { auth: { persistSession: false } }
)

const dest = DRY_RUN ? null : createClient(
  process.env.DEST_URL,
  process.env.DEST_SERVICE_KEY,
  { auth: { persistSession: false } }
)

// ── Helpers ───────────────────────────────────────────────────────────────────

async function fetchAll(table) {
  const pageSize = 1000
  let from = 0
  let rows = []
  while (true) {
    const { data, error } = await source
      .from(table)
      .select('*')
      .range(from, from + pageSize - 1)
    if (error) throw new Error(`Error leyendo ${table}: ${error.message}`)
    rows = rows.concat(data)
    if (data.length < pageSize) break
    from += pageSize
  }
  return rows
}

async function upsertBatch(table, rows) {
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH)
    const { error } = await dest
      .from(table)
      .upsert(batch, { onConflict: 'id' })
    if (error) throw new Error(`Error insertando en ${table} (batch ${i}): ${error.message}`)
    process.stdout.write(`  ${table}: ${Math.min(i + BATCH, rows.length)}/${rows.length}\r`)
  }
  console.log(`  ${table}: ${rows.length} filas ✓`)
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function migrate() {
  console.log(DRY_RUN ? '🔍 DRY RUN — no se escribe nada\n' : '🚀 Iniciando migración samuel_* → imKontext\n')

  // 1. samuel_texts
  console.log('Leyendo samuel_texts...')
  const texts = DRY_RUN ? [] : await fetchAll('samuel_texts')
  console.log(`  ${texts.length} textos encontrados`)
  if (!DRY_RUN) await upsertBatch('samuel_texts', texts)

  // 2. samuel_exercises
  console.log('Leyendo samuel_exercises...')
  const exercises = DRY_RUN ? [] : await fetchAll('samuel_exercises')
  console.log(`  ${exercises.length} ejercicios encontrados`)
  if (!DRY_RUN) await upsertBatch('samuel_exercises', exercises)

  // 3. samuel_exercise_tokens (bulk — batches de 500)
  console.log('Leyendo samuel_exercise_tokens...')
  const tokens = DRY_RUN ? [] : await fetchAll('samuel_exercise_tokens')
  console.log(`  ${tokens.length} tokens encontrados`)
  if (!DRY_RUN) await upsertBatch('samuel_exercise_tokens', tokens)

  // 4. samuel_questions
  console.log('Leyendo samuel_questions...')
  const questions = DRY_RUN ? [] : await fetchAll('samuel_questions')
  console.log(`  ${questions.length} preguntas encontradas`)
  if (!DRY_RUN) await upsertBatch('samuel_questions', questions)

  console.log('\n✅ Migración completada.')
  console.log('   samuel_attempts y samuel_user_progress están vacías — no se migran.')
  console.log('\nVerifica en imKontext:')
  console.log('  samuel_texts:           ' + texts.length + ' filas esperadas')
  console.log('  samuel_exercises:       ' + exercises.length + ' filas esperadas')
  console.log('  samuel_exercise_tokens: ' + tokens.length + ' filas esperadas')
  console.log('  samuel_questions:       ' + questions.length + ' filas esperadas')
}

migrate().catch(err => {
  console.error('\n❌ Error:', err.message)
  process.exit(1)
})
