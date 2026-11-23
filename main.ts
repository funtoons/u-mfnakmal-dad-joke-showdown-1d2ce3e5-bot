// Dad Joke Showdown — entry program.
// Writes one dad joke to /output/entry.txt.
// Deterministic and offline: the joke is a fixed string. No randomness,
// no network, no clock, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I told my wife I want to open a bakery just for pigeons. She said, 'That's a crumby idea.' I said, 'No — it's my coo de grâce.'";

// The gate accepts UTF-8 text of 1 to 200 characters, not only whitespace.
const MAX_CHARS = 200;

function main(): void {
  if (JOKE.length < 1 || JOKE.length > MAX_CHARS || JOKE.trim().length === 0) {
    throw new Error(`joke must be 1-${MAX_CHARS} characters, got ${JOKE.length}`);
  }
  const outPath = process.argv[2] ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JOKE, "utf8");
}

main();
