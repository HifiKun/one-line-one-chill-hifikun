// One Line, One Chill — make.fun entry
// A tiny program that writes one single sentence of horror to
// /output/entry.txt (or to the path given as the first argument).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One sentence, under 200 characters. The scare is earned, not announced:
// a warm, ordinary phone call that only afterwards reveals itself as
// impossible — and the last word lands the blow.
const LINE =
  "My mother called to say she loved me, and I thanked her, then remembered she died on Tuesday and I buried her myself.";

const outPath = process.argv[2] ?? "/output/entry.txt";
const text = LINE.trim();

if (text.length < 1 || text.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("line must not be only white space");
}
if (text.includes("\n")) {
  throw new Error("line must be a single line");
}
if (!/[.!?]$/.test(text)) {
  throw new Error("line must be a single sentence");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, text, "utf8");
console.log(`wrote ${text.length} characters to ${outPath}`);
