#!/usr/bin/env node
/**
 * Importa los 57 ejercicios lueckentext (tokens pre-procesados) a Supabase.
 * Requiere que import-leseverstehen-to-supabase.mjs se haya ejecutado primero.
 *
 * Uso:
 *   node scripts/import-lueckentext-to-supabase.mjs --dry-run
 *   SUPABASE_URL=... SUPABASE_SERVICE_KEY=... node scripts/import-lueckentext-to-supabase.mjs
 *
 * El archivo lueckentext-data.js es un módulo CJS con 71K líneas.
 * Los tokens se insertan por lotes de BATCH_SIZE para evitar timeouts.
 */

import { createClient } from '@supabase/supabase-js'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const DRY_RUN = process.argv.includes('--dry-run')
const BATCH_SIZE = 500

if (!DRY_RUN && (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY)) {
  console.error('ERROR: SUPABASE_URL y SUPABASE_SERVICE_KEY son obligatorios.')
  process.exit(1)
}

// lueckentext-data.js exporta via module.exports — CJS compatible con createRequire
const LUECKENTEXTE = require(join(__dirname, '../assets/js/lueckentext-data.js'))

const supabase = DRY_RUN
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log(`\n━━━ import-lueckentext-to-supabase ${DRY_RUN ? '[DRY RUN]' : ''} ━━━`)
  console.log(`Ejercicios a importar: ${LUECKENTEXTE.length}`)

  const byType = LUECKENTEXTE.reduce((acc, e) => {
    acc[e.tipo] = (acc[e.tipo] || 0) + 1
    return acc
  }, {})
  console.log('Por tipo:', byType)

  let ok = 0, errors = 0

  for (const item of LUECKENTEXTE) {
    const allTokens = item.paragraphs.flat()
    const blanks = allTokens.filter(t => t.type === 'blank')
    const exerciseType = `lueckentext_${item.tipo}`

    if (DRY_RUN) {
      console.log(`  [DRY] ${item.tipo} · ${item.slug} · ${allTokens.length} tokens · ${blanks.length} blanks`)
      ok++
      continue
    }

    // Buscar text_id por slug
    const { data: textRow, error: textErr } = await supabase
      .from('samuel_texts')
      .select('id')
      .eq('app_key', 'samuel_coach')
      .eq('slug', item.slug)
      .single()

    if (textErr || !textRow) {
      console.error(`  ✗ SKIP [${item.slug}]: texto no encontrado — ejecuta import-leseverstehen primero`)
      errors++
      continue
    }

    // Upsert exercise
    const { data: exercise, error: exErr } = await supabase
      .from('samuel_exercises')
      .upsert({
        text_id: textRow.id,
        exercise_type: exerciseType,
        gap_count: blanks.length,
        metadata: {},
        is_published: true,
      }, { onConflict: 'text_id,exercise_type' })
      .select('id')
      .single()

    if (exErr) {
      console.error(`  ✗ ERROR exercise [${item.slug}]: ${exErr.message}`)
      errors++
      continue
    }

    // Borrar tokens existentes
    await supabase.from('samuel_exercise_tokens').delete().eq('exercise_id', exercise.id)

    // Preparar filas de tokens
    const tokenRows = []
    item.paragraphs.forEach((para, pi) => {
      para.forEach((token, ti) => {
        tokenRows.push({
          exercise_id: exercise.id,
          paragraph_idx: pi,
          token_idx: ti,
          token_type: token.type,
          value: token.type === 'text' ? token.value : null,
          blank_id: token.type === 'blank' ? token.id : null,
          answer: token.type === 'blank' ? token.answer : null,
          category: token.type === 'blank' ? token.category : null,
        })
      })
    })

    // Insertar por lotes
    let batchError = false
    for (let i = 0; i < tokenRows.length; i += BATCH_SIZE) {
      const batch = tokenRows.slice(i, i + BATCH_SIZE)
      const { error: bErr } = await supabase.from('samuel_exercise_tokens').insert(batch)
      if (bErr) {
        console.error(`  ✗ ERROR tokens [${item.slug}] lote ${i}: ${bErr.message}`)
        batchError = true
        errors++
        break
      }
    }

    if (!batchError) {
      console.log(`  ✓ ${exerciseType} · ${item.slug} · ${tokenRows.length} tokens`)
      ok++
    }
  }

  console.log(`\nResultado: ${ok} OK · ${errors} errores`)

  if (!DRY_RUN && errors === 0) {
    console.log('\nVerificación de paridad:')
    const { data: exCounts } = await supabase
      .from('samuel_exercises')
      .select('exercise_type')

    if (exCounts) {
      const dbByType = exCounts.reduce((acc, r) => {
        if (r.exercise_type.startsWith('lueckentext')) {
          acc[r.exercise_type] = (acc[r.exercise_type] || 0) + 1
        }
        return acc
      }, {})
      console.log('  DB por tipo:', dbByType)
      console.log('  JS por tipo:', { lueckentext_type1: byType.type1, lueckentext_type2: byType.type2 })
    }
  }

  process.exit(errors > 0 ? 1 : 0)
}

run()
