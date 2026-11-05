# Story practice: instruction and question audit

Generated from the app's real practice data. Nothing under "Needs your decision" was changed.

## Fixed: instruction now fits the question

| Story | Questions | Before | After |
|---|---|---|---|
| Story for Deshawn (same 45 questions on all 3 language pages) | 45 | 🗨️ Translate · "What does this word mean?" | 💬 Comprehension · "Choose the best answer" |
| Whispers, Tagalog: multiple choice | 54 | "What does this word mean?" | "Choose the best answer" |
| Whispers, Tagalog: typed | 54 | "Enter the English meaning" | "Type your answer" |

Old House (Tagalog and Kapampangan) and Kapampangan Whispers already fit, so they keep their wording.

### Story for Deshawn questions

> Update: the app no longer uses these. Story for Deshawn now has the 10-question format (`data/story-practice/deshawn.ts`, reviewed in `docs/deshawn-practice-review.md`). The 45 questions below are kept, unused, in `data/story-practice/deshawnComprehension.ts`.

The answers below are the English meanings. Each language page now shows them in its own language (`data/story-practice/deshawn.ts`).

| Ch | Q | Question | Answer |
|---|---|---|---|
| 1 | 1 | Where was the little village? | Near a magical forest |
| 1 | 2 | Who did Lily live with? | Her mother |
| 1 | 3 | What did Lily dream of? | Meeting a real fairy |
| 2 | 1 | What did Lily see near the forest? | A bright light |
| 2 | 2 | What did the light look like? | A tiny firefly |
| 2 | 3 | What did Lily hear behind a big tree? | Someone crying |
| 3 | 1 | What color were the fairy's wings? | Golden |
| 3 | 2 | What did the fairy lose? | Her magic star |
| 3 | 3 | Why could the fairy not go home? | She could not fly without the star |
| 4 | 1 | What was the fairy's name? | Stella |
| 4 | 2 | Where did the star fall? | Somewhere in the forest |
| 4 | 3 | When did they begin their search? | Under the moonlight |
| 5 | 1 | What animal did they meet? | A white rabbit |
| 5 | 2 | Why could the rabbit talk? | It was a magical animal |
| 5 | 3 | Where did the rabbit see something bright? | Near the river |
| 6 | 1 | What was wrong with the bridge? | Some boards were broken |
| 6 | 2 | Why did Stella not fly across? | She was too tired |
| 6 | 3 | What did Lily use to help them cross? | A long branch |
| 7 | 1 | Who did they meet across the river? | An old turtle |
| 7 | 2 | Where did the star fall? | Near the Dark Mountain |
| 7 | 3 | Who sleeps on the Dark Mountain? | A giant |
| 8 | 1 | What covered the path? | Tall trees |
| 8 | 2 | What did Stella do to help Lily feel safe? | Held her hand |
| 8 | 3 | Where was the star? | Among the shiny stones |
| 9 | 1 | What fell from Lily's pocket? | A small rock |
| 9 | 2 | What did the giant open? | One eye |
| 9 | 3 | How did the giant ask his question? | In a loud voice |
| 10 | 1 | How did the giant look? | Sad instead of angry |
| 10 | 2 | Why did the giant take the star? | He had been lonely |
| 10 | 3 | How did Lily feel about the giant? | Sorry for him |
| 11 | 1 | What did Lily ask the giant? | If he wanted to be their friend |
| 11 | 2 | What did the giant promise? | To return Stella's star |
| 11 | 3 | How did the giant feel at the end? | Happy |
| 12 | 1 | What filled the mountain? | The star's golden light |
| 12 | 2 | What did Stella whisper? | A magical word |
| 12 | 3 | What appeared around the giant's home? | Beautiful flowers |
| 13 | 1 | Who joined them on the journey? | The rabbit and the turtle |
| 13 | 2 | What was the sun doing when they reached the village? | Beginning to rise |
| 13 | 3 | Why did Lily feel happy? | She made wonderful new friends |
| 14 | 1 | What did Stella give Lily? | A tiny silver necklace |
| 14 | 2 | What did the necklace have? | A star that glowed in the dark |
| 14 | 3 | Where did the fairy fly? | Into the sky |
| 15 | 1 | How often did Lily wear her necklace? | Every day |
| 15 | 2 | What did Stella bring when she visited? | Gifts for Lily and her mother |
| 15 | 3 | What did the giant plant around his mountain? | Flowers |

## Needs your decision: the question text or answer itself looks wrong

The new instruction can't fix these, because the words come from the data. I didn't change them.

### Whispers, Tagalog: asks for a Tagalog word, answer may not be one (27)

| Ch | Q | Question | Answer |
|---|---|---|---|
| 1 | 8 | Which Tagalog word means "Reputasyon"? | Reputation |
| 2 | 8 | Which Tagalog word means "mantsa"? | stain |
| 7 | 8 | Which Tagalog word means "inheritance"? | pamana |
| 8 | 8 | Which Tagalog word means "danger"? | panganib |
| 9 | 8 | Which Tagalog word means "contempt"? | paghamak |
| 10 | 8 | Which Tagalog word means "movement"? | galaw |
| 11 | 8 | Which Tagalog word means "baptism"? | binyag |
| 12 | 8 | Which Tagalog word means "alarm"? | alarma |
| 13 | 8 | Which Tagalog word means "cursed"? | isinumpa |
| 14 | 8 | Which Tagalog word means "whisper"? | bulong |
| 15 | 8 | Which Tagalog word means "stone"? | bato |
| 16 | 8 | Which Tagalog word means "loyalty"? | katapatan |
| 17 | 8 | Which Tagalog word means "evidence"? | ebidensya |
| 18 | 8 | Which Tagalog word means "note/record"? | tala |
| 19 | 8 | Which Tagalog word means "conscience"? | budhi |
| 20 | 8 | Which Tagalog word means "chain"? | kadena |
| 21 | 8 | Which Tagalog word means "accusation"? | akusasyon |
| 22 | 8 | Which Tagalog word means "secret"? | lihim |
| 23 | 8 | Which Tagalog word means "choice"? | pagpili |
| 24 | 8 | Which Tagalog word means "sound"? | tunog |
| 25 | 8 | Which Tagalog word means "inheritance"? | pamana |
| 26 | 8 | Which Tagalog word means "fear"? | takot |
| 27 | 8 | Which Tagalog word means "unity"? | pagkakaisa |
| 28 | 8 | Which Tagalog word means "danger"? | panganib |
| 29 | 8 | Which Tagalog word means "truth"? | katotohanan |
| 30 | 8 | Which Tagalog word means "future"? | kinabukasan |
| 31 | 8 | Which Tagalog word means "decision"? | pagpapasya |

### Whispers, Tagalog: asks a meaning, answer repeats the word (1)

| Ch | Q | Question | Answer |
|---|---|---|---|
| 2 | 6 | What does "padlock" mean? | padlock |

### Whispers, Tagalog: typed, answer repeats the word shown (38)

| Ch | Q | Prompt | Answer |
|---|---|---|---|
| 2 | 7 | The Tagalog equivalent of "talaarawan" | talaarawan |
| 7 | 9 | "kapilya" in Tagalog is | kapilya |
| 8 | 7 | The Tagalog equivalent of "interpretasyon" | interpretasyon |
| 8 | 9 | "kasinungalingan" in Tagalog is | kasinungalingan |
| 9 | 7 | The Tagalog equivalent of "karamihan" | karamihan |
| 9 | 9 | "manyika" in Tagalog is | manyika |
| 10 | 7 | The Tagalog equivalent of "mata" | mata |
| 10 | 9 | "larawan" in Tagalog is | larawan |
| 11 | 9 | "tagapagmana" in Tagalog is | tagapagmana |
| 12 | 7 | The Tagalog equivalent of "pinsala" | pinsala |
| 13 | 9 | "pista" in Tagalog is | pista |
| 14 | 9 | "sulat-kamay" in Tagalog is | sulat-kamay |
| 15 | 7 | The Tagalog equivalent of "kadena" | kadena |
| 16 | 7 | The Tagalog equivalent of "layunin" | layunin |
| 16 | 9 | "pari" in Tagalog is | pari |
| 17 | 9 | "dokumento" in Tagalog is | dokumento |
| 18 | 7 | The Tagalog equivalent of "paningin" | paningin |
| 18 | 9 | "guni-guni" in Tagalog is | guni-guni |
| 19 | 7 | The Tagalog equivalent of "alaala" | alaala |
| 19 | 9 | "imbestigador" in Tagalog is | imbestigador |
| 20 | 7 | The Tagalog equivalent of "labi" | labi |
| 20 | 9 | "tinig" in Tagalog is | tinig |
| 21 | 7 | The Tagalog equivalent of "pahayag" | pahayag |
| 21 | 9 | "paglilitis" in Tagalog is | paglilitis |
| 22 | 7 | The Tagalog equivalent of "kasaysayan" | kasaysayan |
| 23 | 7 | The Tagalog equivalent of "pagtataksil" | pagtataksil |
| 23 | 9 | "binaligtad" in Tagalog is | binaligtad |
| 24 | 7 | The Tagalog equivalent of "tinig" | tinig |
| 24 | 9 | "koro" in Tagalog is | koro |
| 25 | 9 | "kasunduan" in Tagalog is | kasunduan |
| 26 | 7 | The Tagalog equivalent of "pag-amin" | pag-amin |
| 26 | 9 | "tinanggap" in Tagalog is | tinanggap |
| 27 | 9 | "pag-aalsa" in Tagalog is | pag-aalsa |
| 28 | 7 | The Tagalog equivalent of "desisyon" | desisyon |
| 28 | 9 | "pagtatangka" in Tagalog is | pagtatangka |
| 29 | 7 | The Tagalog equivalent of "pagkalito" | pagkalito |
| 29 | 9 | "nawala sa katinuan" in Tagalog is | nawala sa katinuan |
| 31 | 7 | The Tagalog equivalent of "pag-asa" | pag-asa |

### Whispers, Tagalog: typed, says "Tagalog" but check the answer's language (16)

| Ch | Q | Prompt | Answer |
|---|---|---|---|
| 1 | 7 | The Tagalog equivalent of "hamog" | Mist |
| 1 | 9 | "Libing" in Tagalog is | Funeral |
| 2 | 9 | "East wing" in Tagalog is | silangang pakpak |
| 7 | 7 | The Tagalog equivalent of "pangalan" | lagyu |
| 11 | 7 | The Tagalog equivalent of "sangay" | sanga |
| 12 | 9 | "sunog" in Tagalog is | apoy |
| 13 | 7 | The Tagalog equivalent of "magulang" | indung |
| 14 | 7 | The Tagalog equivalent of "pamana" | mana |
| 15 | 9 | "lawa" in Tagalog is | danum |
| 17 | 7 | The Tagalog equivalent of "takot" | kabangisan |
| 22 | 9 | "ninuno" in Tagalog is | ninunu |
| 25 | 7 | The Tagalog equivalent of "pangako" | pangaku |
| 27 | 7 | The Tagalog equivalent of "galit" | amu |
| 30 | 7 | The Tagalog equivalent of "pangalan" | lagyu |
| 30 | 9 | "pagpipilian" in Tagalog is | pamili |
| 31 | 9 | "huling bulong" in Tagalog is | huling bulung |

### Match Cards where the card equals its answer (69)

| Ch | Q | Card | Answer |
|---|---|---|---|
| 7 | 1 | kapilya | kapilya |
| 7 | 2 | hagdan | hagdan |
| 8 | 1 | kasinungalingan | kasinungalingan |
| 8 | 3 | interpretasyon | interpretasyon |
| 8 | 4 | panganib | panganib |
| 9 | 1 | manyika | manyika |
| 9 | 3 | karamihan | karamihan |
| 10 | 1 | larawan | larawan |
| 10 | 2 | anino | anino |
| 10 | 3 | mata | mata |
| 10 | 4 | galaw | galaw |
| 11 | 1 | tagapagmana | tagapagmana |
| 11 | 2 | talaan | talaan |
| 11 | 4 | binyag | binyag |
| 12 | 2 | apoy | apoy |
| 12 | 3 | pinsala | pinsala |
| 12 | 4 | alarma | alarma |
| 13 | 1 | pista | pista |
| 13 | 2 | plasa | plasa |
| 14 | 1 | sulat-kamay | sulat-kamay |
| 15 | 2 | libingan | libingan |
| 15 | 3 | kadena | kadena |
| 16 | 1 | pari | pari |
| 16 | 2 | sumpa | sumpa |
| 16 | 3 | layunin | layunin |
| 16 | 4 | katapatan | katapatan |
| 17 | 1 | dokumento | dokumento |
| 17 | 2 | utang | utang |
| 17 | 4 | ebidensya | ebidensya |
| 18 | 1 | guni-guni | guni-guni |
| 18 | 2 | silid | silid |
| 18 | 3 | paningin | paningin |
| 18 | 4 | tala | tala |
| 19 | 1 | imbestigador | imbestigador |
| 19 | 2 | aksidente | aksidente |
| 19 | 3 | alaala | alaala |
| 19 | 4 | budhi | budhi |
| 20 | 1 | tinig | tinig |
| 20 | 2 | rekord | rekord |
| 20 | 3 | labi | labi |
| 20 | 4 | kadena | kadena |
| 21 | 1 | paglilitis | paglilitis |
| 21 | 3 | pahayag | pahayag |
| 21 | 4 | akusasyon | akusasyon |
| 22 | 3 | kasaysayan | kasaysayan |
| 22 | 4 | lihim | lihim |
| 23 | 1 | binaligtad | binaligtad |
| 23 | 3 | pagtataksil | pagtataksil |
| 24 | 1 | koro | koro |
| 24 | 3 | tinig | tinig |
| 24 | 4 | tunog | tunog |
| 25 | 1 | kasunduan | kasunduan |
| 25 | 2 | nakatago | nakatago |
| 26 | 1 | tinanggap | tinanggap |
| 26 | 3 | pag-amin | pag-amin |
| 27 | 1 | pag-aalsa | pag-aalsa |
| 27 | 2 | bayan | bayan |
| 27 | 4 | pagkakaisa | pagkakaisa |
| 28 | 1 | pagtatangka | pagtatangka |
| 28 | 2 | huling | huling |
| 28 | 3 | desisyon | desisyon |
| 28 | 4 | panganib | panganib |
| 29 | 1 | nawala sa katinuan | nawala sa katinuan |
| 29 | 2 | alaala | alaala |
| 29 | 3 | pagkalito | pagkalito |
| 30 | 4 | kinabukasan | kinabukasan |
| 31 | 2 | katahimikan | katahimikan |
| 31 | 3 | pag-asa | pag-asa |
| 31 | 4 | pagpapasya | pagpapasya |

## Small wording mismatches, not changed

"Say this word out loud" is shown on phrases:

| Ch | Q | Phrase |  |
|---|---|---|---|
| 2 | 5 | Whispers tagalog: silangang pakpak |  |
| 29 | 5 | Whispers tagalog: nawala sa katinuan |  |
| 31 | 5 | Whispers tagalog: huling bulong |  |

Match Cards showing a phrase (the instruction still fits):

| Ch | Q | Card | Answer |
|---|---|---|---|
| 2 | 1 | Whispers tagalog: east wing | silangang pakpak |
| 31 | 1 | Whispers tagalog: huling bulong | huling bulung |
| 16 | 4 | kapampangan: kalawakan gau | Forest |

## Chapters with no practice questions

- Whispers, Tagalog: chapters 3, 4, 5, 6
- Whispers, Waray: all 31 chapters
