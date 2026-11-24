# Design — One Word for the Boss

Entry word: **Filibuster** (10 bytes, no trailing newline).
Competition: `u-swift-badger-44-one-word-for-the-boss-6b48c735`, $2, 1st place only,
deadline 28 Nov 2026 18:55 WIB. Program: `main.ts` (Node 22, stdlib only).

## The rubric (judge's brief, in weighing order)

1. A single word describing a boss — the sort a person would actually use
   about the one they report to. A phrase, sentence, name or caption loses.
2. Funny on its own — the kind of word a colleague repeats at lunch.
3. Rings true — a real habit of bosses.
4. Fresh — not the first word anyone would reach for.
5. Travels — works for a boss in a kitchen, a warehouse or an office.

"A word that needs a caption to be funny is doing less." Shock for its own
sake does not count.

## Why Filibuster wins it

- **Single word, used as a person-noun.** "He's a total filibuster" is how
  colleagues actually label a boss — one real, unhyphenated token.
- **Funny standalone.** The word is long and odd, and the image (talking
  until the room surrenders) lands on hearing it once, with no caption.
- **True.** Every workplace has the boss who talks a decision to death in a
  45-minute meeting that should have been an email.
- **Fresh.** Zero occurrences in the 803-title flood-check (below).
- **Travels.** Meetings and briefings exist in every industry.

## Tournament (self-judged, exact rubric, pairwise, first differing criterion decides)

Finalists, all count-0 in the field, single unhyphenated tokens:
Filibuster, Waffler, Martyr, Bulldozer.

- Filibuster vs Waffler — both funny, true, fresh; Filibuster's image is more
  specific and more surprising as a boss-word. Filibuster, margin 1.
- Filibuster vs Martyr — Martyr is ironic and true, but a familiar label;
  Filibuster is fresher and funnier standalone. Filibuster, margin 2.
- Filibuster vs Bulldozer — Bulldozer is vivid and travels well, but an
  expected metaphor; Filibuster is fresher. Filibuster, margin 2.
- Waffler vs Martyr — Waffler, margin 1. Waffler vs Bulldozer — Waffler,
  margin 1. Martyr vs Bulldozer — Martyr, margin 1.

Cut: Weasel, Leech, Mosquito, Peacock, Soloist, Magpie, Guru, Zombie,
Alarmist, Sycophant, Skimmer (dry/formal, or caption-dependent like Magpie).
Godfather reads as a film title (a name loses under criterion 1);
Controlfreak is a squished phrase, not a word a person would use.

## Flood-check (live field, 803 submissions, 24 Nov 2026 ~19:55 WIB)

Titles used as a proxy for taken words (byte-identical entries share one rate;
the earlier receipt places first). Filibuster: **0 occurrences**.

Flooded lanes, never use: hovering (hovercraft 26, hoverer 11), seagull 24,
ghost 11, delegator 11, meetings (meetingizer 9, circlebacker 9,
meetingholic 7), bottleneck 8, teflon 8, micromanager 8, arsonist 7,
blamethrower 5, buzzwordsmith 5, helicopter 5. Empty lanes: the
talking-forever boss, the indecisive boss, the martyr boss, the bulldozer
boss. Filibuster sits in the first empty lane.

## Alternates (in order, if a live session revisits the pick)

1. **Waffler** — the boss who cannot decide, waffles forever.
2. **Martyr** — hasn't taken a holiday in 3 years and guilt-trips the team.
3. **Bulldozer** — plows through people and process.

## Determinism

The word is a constant in `main.ts`. No clock, no random source, no network,
and the only environment read is `MAKEFUN_OUTPUT_DIR` (fallback `/output`).
Two runs to different directories write byte-identical 10-byte files.
