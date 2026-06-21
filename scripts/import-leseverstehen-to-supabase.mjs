#!/usr/bin/env node
/**
 * Importa los 57 textos + preguntas de leseverstehen-data.js a Supabase.
 *
 * Uso:
 *   node scripts/import-leseverstehen-to-supabase.mjs --dry-run
 *   SUPABASE_URL=... SUPABASE_SERVICE_KEY=... node scripts/import-leseverstehen-to-supabase.mjs
 *
 * Idempotente: usa upsert por (app_key, slug). Borra y reinserta preguntas.
 */

import { createClient } from '@supabase/supabase-js'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const TEXTOS = require(join(__dirname, '../assets/js/leseverstehen-data.js'))
const DRY_RUN = process.argv.includes('--dry-run')

if (!DRY_RUN && (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY)) {
  console.error('ERROR: SUPABASE_URL y SUPABASE_SERVICE_KEY son obligatorios.')
  console.error('Usa --dry-run para probar sin credenciales.')
  process.exit(1)
}

const supabase = DRY_RUN
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log(`\n━━━ import-leseverstehen-to-supabase ${DRY_RUN ? '[DRY RUN]' : ''} ━━━`)
  console.log(`Textos a importar: ${TEXTOS.length}`)

  const byLevel = TEXTOS.reduce((acc, t) => {
    acc[t.nivel] = (acc[t.nivel] || 0) + 1
    return acc
  }, {})
  console.log('Por nivel:', byLevel)

  let ok = 0, skipped = 0, errors = 0

  for (const t of TEXTOS) {
    if (DRY_RUN) {
      console.log(`  [DRY] ${t.nivel} · ${t.slug} · ${t.preguntas.length} preguntas`)
      ok++
      continue
    }

    // Upsert texto
    const { data: text, error: textError } = await supabase
      .from('samuel_texts')
      .upsert({
        app_key: 'samuel_coach',
        slug: t.slug,
        nivel: t.nivel,
        content_lang: 'de',
        titulo: t.titulo,
        descripcion: t.descripcion ?? null,
        texto: t.texto,
        is_published: true,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'app_key,slug' })
      .select('id')
      .single()

    if (textError) {
      console.error(`  ✗ ERROR [${t.slug}]: ${textError.message}`)
      errors++
      continue
    }

    // Borrar preguntas existentes (idempotente)
    await supabase.from('samuel_questions').delete().eq('text_id', text.id)

    const questions = t.preguntas.map((p, i) => ({
      text_id: text.id,
      order_index: i,
      enunciado: p.enunciado,
      respuesta: p.respuesta,
      explicacion: null,
    }))

    const { error: qError } = await supabase.from('samuel_questions').insert(questions)

    if (qError) {
      console.error(`  ✗ ERROR preguntas [${t.slug}]: ${qError.message}`)
      errors++
      continue
    }

    console.log(`  ✓ ${t.nivel} · ${t.slug}`)
    ok++
  }

  console.log(`\nResultado: ${ok} OK · ${skipped} omitidos · ${errors} errores`)

  if (!DRY_RUN) {
    console.log('\nVerificación de paridad:')
    const { data: counts } = await supabase
      .from('samuel_texts')
      .select('nivel')
      .eq('app_key', 'samuel_coach')

    if (counts) {
      const dbByLevel = counts.reduce((acc, r) => {
        acc[r.nivel] = (acc[r.nivel] || 0) + 1
        return acc
      }, {})
      console.log('  DB por nivel:', dbByLevel)
      console.log('  JS por nivel:', byLevel)

      const match = JSON.stringify(dbByLevel) === JSON.stringify(byLevel)
      console.log(match ? '  ✓ Paridad confirmada' : '  ✗ PARIDAD FALLIDA — revisar')
    }
  }

  process.exit(errors > 0 ? 1 : 0)
}

run()
