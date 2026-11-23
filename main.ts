import { mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is a single letter, A for coffee.
// The program writes exactly one UTF-8 byte to /output/entry.txt:
// no trailing newline, no extra whitespace. Deterministic: no network,
// no randomness, no clock — the same byte on every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "A", "utf8");
