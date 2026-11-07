# Waray translation of "The Secret Behind the Old House": what's needed

Send the speaker **`docs/old-house-waray-template.txt`**. Every English sentence
and practice word is already in it, numbered. They fill in the blank `WAR:`
lines and send it back as plain text (`.txt`, UTF-8).

Total: 2 header lines, 391 sentences in 24 chapters, and 216 practice words
(9 per chapter).

## What the file looks like

```text
TITLE EN: The Secret Behind the Old House
TITLE WAR: <the story title in Waray>
CHAPTER EN: Chapter
CHAPTER WAR: <the Waray word for "Chapter">

=== CHAPTER 1 ===

1.1 EN: Mia and her family moved to a small town during the summer.
1.1 WAR: <this sentence in Waray>
1.2 EN: Her father had found a new job there.
1.2 WAR: <this sentence in Waray>

--- CHAPTER 1 WORDS ---
W1.1 EN: house (in sentence 1.6)
W1.1 WAR: <the Waray word, spelled exactly as in sentence 1.6>
```

## Rules for the speaker

1. **One Waray sentence for each English sentence, same number.** The app shows
   them side by side, so 1.6 must be the translation of 1.6. If one Waray
   sentence naturally covers two English ones, tell us instead of merging them.
2. **Keep each sentence on one line.** Don't let a sentence continue onto a new
   line, and don't add notes between lines.
3. **Don't change the `EN:` lines, the numbers, or the `===` and `---` lines.**
4. **Practice words must be copied from the sentence.** For each word the
   template names its sentence. Write the Waray word exactly as it appears in
   that sentence, as a whole word (`balay`, not part of a longer word). Prefixes
   and suffixes stay if the sentence has them.
5. **No word twice in a chapter.** Each of a chapter's 9 words must be different.
6. **Keep names as they are:** Mia, Ethan, Lily, Mrs. Clara, Robert.

Please also tell us the speaker's name, so we can record that a person checked
it. The Deshawn Waray text is still an unreviewed draft, so this matters.

## What the app does with each part

| Part | Used for |
| --- | --- |
| `TITLE WAR` | Story title on the Story and Chapters screens |
| `CHAPTER WAR` | Chapter names, as "<word> 1" |
| Sentences | Reader text, paired with the English |
| Words | Gold highlights in the reader and the chapter's 10 practice questions |

The English meanings, wrong answers and Show It prompts are shared with Tagalog
and Kapampangan, so the speaker doesn't need to write any questions.

## A PDF won't work as it is

The English, Tagalog and Kapampangan PDFs are paragraphs, and the importer needs
sentences lined up by number. `docs/The Secret behind the old house - waray.pdf`
can't be used at all: **its text is the English story, word for word.**

## Importing it

Check the file. This changes nothing and lists every problem by number:

```bash
node scripts/import-old-house-waray.mjs "path/to/filled-file.txt"
```

When it says OK, import it:

```bash
node scripts/import-old-house-waray.mjs "path/to/filled-file.txt" --write
```

Then run the tests and the typecheck, which now also cover the Waray text:

```bash
npm test
```

```bash
npx tsc --noEmit
```

`--write` only changes `data/stories/oldHouseWaray.ts`. That file lists the story
in Waray and removes the coming-soon state, with no other edits. It reaches
phones through a new EAS `preview` build.
