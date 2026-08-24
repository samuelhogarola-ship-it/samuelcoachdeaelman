import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const LEVELS = ["A1", "A2", "B1", "B2"];

export function getLevelForThema(value) {
  const thema = Number(value);
  if (!Number.isInteger(thema) || thema < 1) return null;
  if (thema <= 10) return "A1";
  if (thema <= 20) return "A2";
  if (thema <= 39) return "B1";
  return "B2";
}

export function normalizeArticle(value) {
  const article = String(value || "").trim().toLowerCase();
  return ["der", "die", "das"].includes(article) ? article : "";
}

export function normalizeType(value) {
  const type = String(value || "").trim().toLowerCase();
  if (["nomen", "noun", "substantiv", "sustantivo"].includes(type)) return "Nomen";
  if (["verb", "verbo"].includes(type)) return "Verb";
  if (["adjektiv", "adjective", "adjetivo", "adverb", "adverbio"].includes(type)) {
    return "Adjektiv/Adverb";
  }
  if (["ausdruck", "expression", "expresion", "redemittel", "frase"].includes(type)) {
    return "Ausdruck";
  }
  return "Ausdruck";
}

export function buildQuestionBank(words, source = "Vokabel Lab") {
  const levels = Object.fromEntries(LEVELS.map((level) => [level, []]));
  const seen = new Set();

  for (const sourceWord of Array.isArray(words) ? words : []) {
    const de = String(sourceWord.de || "").trim();
    const es = String(sourceWord.es || "").trim();
    const thema = Number(sourceWord.thema);
    const level = getLevelForThema(thema);
    const key = `${de.toLocaleLowerCase("de")}\u0000${es.toLocaleLowerCase("es")}\u0000${thema}`;
    if (!de || !es || !level || seen.has(key)) continue;
    seen.add(key);

    levels[level].push({
      id: String(sourceWord.id || `${level}-${levels[level].length + 1}`),
      de,
      es,
      artikel: normalizeArticle(sourceWord.artikel),
      type: normalizeType(sourceWord.type),
      thema,
      level,
    });
  }

  return {
    version: 1,
    source,
    generatedAt: new Date().toISOString(),
    levels,
  };
}

function getArgument(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : "";
}

async function loadWords() {
  const input = getArgument("--input");
  const url = getArgument("--url") || "https://www.vokabellab.com/api/vocabulario";
  let payload;

  if (input) {
    payload = JSON.parse(await readFile(resolve(input), "utf8"));
  } else {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Vokabel Lab respondió ${response.status}`);
    payload = await response.json();
  }

  return {
    source: input ? `Vokabel Lab snapshot: ${input}` : url,
    words: Array.isArray(payload) ? payload : payload.palabras,
  };
}

async function main() {
  const output = resolve(getArgument("--output") || "assets/data/sudoku-german-questions.json");
  const loaded = await loadWords();
  const bank = buildQuestionBank(loaded.words, loaded.source);

  for (const level of LEVELS) {
    if (bank.levels[level].length < 12) {
      throw new Error(`El banco ${level} solo contiene ${bank.levels[level].length} palabras válidas`);
    }
  }

  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, `${JSON.stringify(bank, null, 2)}\n`, "utf8");
  const counts = LEVELS.map((level) => `${level}: ${bank.levels[level].length}`).join(", ");
  process.stdout.write(`Banco generado en ${output} (${counts})\n`);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === pathToFileURL(currentFile).href) {
  await main();
}
