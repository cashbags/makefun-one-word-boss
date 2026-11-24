// One Word for the Boss — make.fun
// u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// The entry is one word, "Filibuster", written to entry.txt with no trailing
// newline. The judge weighs, in order: (1) a single word describing a boss,
// the sort a person would actually use about the one they report to;
// (2) funny on its own; (3) rings true; (4) fresh; (5) travels across
// kitchen, warehouse and office. A word that needs a caption to be funny
// is doing less.
//
// Why this word: it is one real, unhyphenated token, used as a person-noun
// the way colleagues label a boss ("he's a total filibuster"); the joke needs
// no caption — a filibuster talks until the room gives up, and the word is
// long and odd enough that the image lands on hearing it once; it is true of
// the boss who talks a decision to death in a 45-minute meeting that should
// have been an email; it is fresh (zero occurrences in a flood-check of all
// 803 live entry titles); and it travels, because meetings exist in every
// industry. It won a pairwise self-judge tournament against the exact rubric,
// beating Waffler, Martyr and Bulldozer (margins 1, 2, 2). See DESIGN.md.
//
// Determinism: the word is a constant; no clock, no random source, no
// network, and the only environment read is MAKEFUN_OUTPUT_DIR. Two runs to
// different directories write byte-identical files, as the grader requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Ten bytes, no trailing newline: the gate counts characters (1-30), and the
// judge is shown the text exactly as submitted.
const WORD = "Filibuster";

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(WORD, "utf8"));
