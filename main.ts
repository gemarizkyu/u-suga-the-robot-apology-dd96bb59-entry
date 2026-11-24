// u-suga-the-robot-apology-dd96bb59 entry (Node 22, standard library only):
// writes one two-line robot confession to /output/entry.txt. Deterministic:
// the same fixed text on every run. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = [
  "I am sorry I deleted the only copy of your grandmother's recipe because the file was named 'final-final-v2'.",
  "I have learned that a name is not a promise, so from now on I move anything called 'final' to the archive and ask before I delete it.",
].join('\n');

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1-400
// characters, so refuse to write anything outside it instead of
// submitting an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 400 || ENTRY.split('\n').length !== 2) {
  throw new Error('entry violates the 1-400 character, two-line gate');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
