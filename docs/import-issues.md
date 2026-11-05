# Lesson import issues

From `Lesson Plan.pdf`. The Tagalog and Waray text is in the app exactly as the PDF has it. The only answers not from the PDF are the Waray practice keys and the Waray 30 key, which you approved as inferred drafts. Tell me what to change and I will change it.

## Start here: the biggest gaps

- **Tagalog 16–29 practice activities have no answer key.** Their matching, choice, fill-in and arrange activities are saved in `extraActivities` with no answers. Learners do not see them yet.
- **Waray practice answers are inferred drafts, not from the PDF.** You approved them as drafted, and they now run the activity steps. Every answer and how it was found is in `docs/waray-draft-answer-keys.md`. A Waray speaker has not checked them.
- **Waray 30 has no answer key in the PDF.** Its 40 multiple-choice questions are now scored with the inferred drafts, at the 70% pass mark in the PDF. All 60 XP is earned on the assessment, because it is the only activity in this lesson. Part F is a practical task and stays unscored.
- **Waray 14–17 assessments are open questions** with written answers, so they are saved but not scored. These lessons have no scored assessment and can be finished without one.
- **Typed-answer, open-ended and role-play activities have no screens yet**, in any lesson. They are saved in `extraActivities` for a later task.
- **Levels inferred:** Waray 18, 19 and 20 do not state a level in the PDF. "Intermediate" comes from their lesson numbers.

## 1. Likely typos, for you to check

These are candidates from reading and from comparing similar words. They are still in the data as written.

| Lesson | Where | What looks wrong |
|---|---|---|
| Tagalog 15 | Vocabulary | "Parirala" has the pronunciation "pa-ra-i-la". The word has syllables "pa-ri-ra-la". |
| Tagalog 16 | Vocabulary | Pronunciations use a different style from most Tagalog lessons, for example "ngunit" is "ngoo-neet". Not wrong, but inconsistent. |
| Tagalog 25 | Activity: Identify the Verb Aspect | Ten items contain the literal text "&lt;underline>" and "&lt;/underline>" (for example "&lt;underline>Nag-aral&lt;/underline> si Ana kagabi."). It looks like formatting that was typed out. |
| Waray 5 | Vocabulary | "Mga anak" has "ma-NGA A-nak": "mga" is respelled with an added vowel. |
| Waray 6 | Vocabulary | "Tuba han lubi / Tubig han lubi" has one pronunciation, "TU-big han LU-bi", for the second form only. |
| Waray 10 | Vocabulary | "Maabilidad" has "mah-ah-ah-bee-lee-DAHD", with three "ah" syllables where the word has two a's. |
| Waray 13 | Vocabulary | The word "igsaysay" has "ig-sah-SAI", while Waray 22 has "ig-say-say". |
| Waray 14 | Vocabulary | Forms of "kinahanglan" are respelled with "nang-ha" here and in Waray 21, 22 and 23, while Waray 13 writes "kee-nahng-LAHN". |
| Waray 14 | Vocabulary | "Nagtatrabaho hira." has "Nag-tra-tra-ba-ho hi-ra". The word has "ta", not "tra", in its second syllable. |
| Waray 17 | Vocabulary | "Baroto han pagkaon / puwesto han pagkaon (descriptive)" has one pronunciation, "Pu-wes-to han pag-ka-on", for the second form only. |
| Waray 18 | Vocabulary | "T-shirt / Baro" has "ti-shert / ba-ro". Possibly fine as a respelling of an English word. |
| Waray 21 | Vocabulary | "Nahahadlok" has "na-hahad-lok". The syllables look joined: "na-ha-had-lok". |
| Waray 21 | Spelling | Both "damu" (Waray 16, 21, 24, 25, 28, 30) and "damo" (at least Waray 21) appear. Please say which should be used, or whether both are fine. |

## 2. Text the PDF itself marks as needing review

These notes are written for the authors, but they are in the lesson text and learners will see them as written. Tell me if they should be hidden or changed.

- **Tagalog 16** (`pronunciationTip`): The following are simplified pronunciation guides for learners. They are not a substitute for audio recorded and reviewed by a Filipino language speaker.
- **Tagalog 17** (`pronunciationTip`): These are simplified pronunciation guides for practice. Audio recordings reviewed by Filipino speakers should be used in the final application.
- **Tagalog 18** (`pronunciationTip`): These are simplified pronunciation guides for learners. Final audio recordings should be reviewed by a Filipino language speaker.
- **Tagalog 19** (`pronunciationTip`): These are simplified pronunciation guides. They should be supplemented with audio recordings reviewed by Filipino language speakers.
- **Waray 3** (`intro`): Number systems and everyday number usage can vary among Waray-speaking communities. The larger-number forms above are candidate teaching forms and should be checked by a Western Samar language evaluator, especially before teaching compound numbers as fixed patterns.
- **Waray 5** (`intro`): Note: Some family terms have alternative forms depending on the speaker, context, and locality. The words above are introductory vocabulary candidates for evaluator review.
- **Waray 6** (`intro`): Note: Some drink names may be borrowed or expressed differently in everyday speech. Use the terms familiar to your local evaluator and intended learners.
- **Waray 9** (`intro`): Note: Some question forms have more than one natural way of being expressed. For example, diin, hain, and ngain can appear in different location-related questions. Their exact usage should be checked with a Western Samar Waray language evaluator.
- **Waray 19** (`body`): The last example is included only as a tentative construction and should be replaced or corrected by a language evaluator before use.
- **Waray 19** (`intro`): Note: The sentences above are learning examples. Some verb forms and expressions may vary across Western Samar communities and should be checked by a native speaker.
- **Waray 26** (`intro`): In this lesson, learners will explore selected expressions and practice understanding them through context. The examples are learning candidates and should be checked by a Western Samar Waray language evaluator before being finalized in the application.
- **Waray 26** (`body`): Consider these candidate expressions:
- **Waray 27** (`intro`): Note: Some vocabulary items are borrowed or adapted from Filipino, Spanish, or English. Their spelling and preferred everyday forms should be checked by a Western Samar language evaluator.
- **Waray 28** (`intro`): Note: The vocabulary includes borrowed and descriptive terms. Some expressions may have alternative forms in Western Samar communities and should be reviewed before implementation.
- **Waray 29** (`intro`): Note: Some terms are borrowed or have alternative regional forms. The vocabulary should be reviewed by a Western Samar Waray evaluator, especially terms for transportation, neighbors, and actions.

## 3. Tagalog Lessons 1–10 were kept, not re-imported

Per your decision, these lessons keep their current text. These strings in the app are not word for word in the PDF. Many are headings or joined lines; the rest are earlier corrections such as "Panganlan" → "Pangalan" and "qMagandang gabi" → "Magandang gabi".

<details><summary>Tagalog 1: 13 of 201 strings</summary>

- Used when you don't agree to the conversation.
- Hindi ako ang nakasira ng gamit na yan
- Hindi ako ang nakakita
- Ano ang pangalan ng kaibigan mo?
- Sino yung kaibigan na kasama mo?
- Used when you are sure of your answer.
- Oo naman makakapunta ako bago magsimula
- Ako ay 19 taong gulang.
- Ako si Pedro.
- I am Maria.
- I am from Pampanga.
- Thank you for your help.
- Goodbye! Take care!

</details>

<details><summary>Tagalog 2: 11 of 249 strings</summary>

- These expressions help make everyday conversations more polite and meaningful. Tap a card to listen.
- Maganda ang ideya niya.
- 1. Using "Po" and "Opo"
- 2. Using "Ikaw" and "Kayo"
- 3. Responding Naturally
- You can answer
- ________ na! Hindi ko sinasadya.
- Yes, I understand. (Respectful)
- Okay, I'll come along.
- Take care!
- Mark: Oo naman! Ano ang kailangan mo?

</details>

<details><summary>Tagalog 3: 33 of 342 strings</summary>

- For example: Isa – One, Dalawa – Two, Tatlo – Three, Sampu – Ten, Dalawampu – Twenty.
- 1. Numbers 11–19
- 2. Numbers 21–99
- 3. Hundreds
- 4 = ________
- Apatnapu't lima
- 7 = ________
- 12 = ________
- 15 = ________
- 20 = ________
- 25 = ________
- 30 = ________
- 45 = ________
- 60 = ________
- 100 = ________
- Convert to Numbers
- 48
- Labing-isa = ________
- Dalawampu't lima = ________
- Apatnapu't walo = ________
- Animnapu = ________
- Siyamnapu't siyam = ________
- Isang daan = ________
- Limampu't anim = ________
- Listen to the audio pronunciation and repeat the following:
- i-sa, da-la-wa, tat-lo, a-pat, li-ma
- 1, 2, 3, 4, 5
- a-nim, pi-to, wa-lo, si-yam, sam-pu
- 6, 7, 8, 9, 10
- la-bing-i-sa, la-bin-da-la-wa, la-bin-tat-lo
- 11, 12, 13
- 21, 22
- 30, 40, 50

</details>

<details><summary>Tagalog 4: 10 of 410 strings</summary>

- To talk about a future day, learners can use bukas (tomorrow). To mention the day when an activity will happen, use sa before the day.
- It is December now.
- In everyday Tagalog, dates can be expressed using numbers and the month: Enero 5 – January 5, Marso 12 – March 12, Hunyo 25 – June 25, Disyembre 31 – December 31.
- To specify the time of day, add: ng umaga – in the morning, ng tanghali – at noon, ng hapon – in the afternoon, ng gabi – at night.
- I am busy this morning.
- What does Anong oras na? mean?
- I am busy this afternoon.
- Practice: Translate into Tagalog
- The document gives no answers for this practice.
- Finish the vocabulary review, complete the practice activities, and obtain at least 70% in the lesson assessment. Learners who do not reach the passing score may review the lesson and retake the asses

</details>

<details><summary>Tagalog 5: 16 of 374 strings</summary>

- For example: Nanay – Mother, Tatay – Father, Ate – Older sister, Kuya – Older brother, Bunso – Youngest child or sibling, Lolo – Grandfather, Lola – Grandmother.
- English (example)
- My (Nanay ko – My mother)
- Your (Tatay mo – Your father)
- His / Her (Ate niya – His/Her older sister)
- Our, excluding the listener (Pamilya namin – Our family)
- Our, including the listener (Pamilya natin – Our family)
- Their (Bahay nila – Their house)
- Example family structure: Grandparents: Lolo and Lola. Parents: Nanay and Tatay. Children: Ate, Kuya, and Bunso.
- Pattern: Family member + possessive word. Nanay ko – My mother, Tatay mo – Your father, Kapatid niya – His/Her sibling, Lolo namin – Our grandfather, Pinsan nila – Their cousin.
- May kapatid ka ba? – Oo, may dalawa akong kapatid.
- May kuya ka ba? – Wala akong kuya, pero may ate ako.
- Ilan kayong magkakapatid? – Tatlo kaming magkakapatid.
- I am the youngest in our family.
- We live with our grandparents.
- Finish the vocabulary review, complete the practice activities, and obtain at least 70% in the lesson assessment. Learners who do not reach the passing score may review the lesson and retake the asses

</details>

<details><summary>Tagalog 6: 14 of 503 strings</summary>

- The three common meals are: Almusal – Breakfast, Tanghalian – Lunch, Hapunan – Dinner.
- Gusto ko ng + food or drink: this means "I want" or "I like" something, depending on the context.
- Ayoko ng + food or drink: this means "I don't like" or "I don't want" something.
- Paborito ko ang + food: this means "My favorite is..."
- Learners can use descriptive words to talk about how food tastes: Matamis – Sweet, Maasim – Sour, Maalat – Salty, Mapait – Bitter, Maanghang – Spicy, Masarap – Delicious.
- A candy that tastes sweet. ________
- A lemon that tastes sour. ________
- A dish with too much salt. ________
- A spicy chili dish. ________
- A bitter vegetable. ________
- I want adobo and rice.
- I am drinking cold water.
- The cooked food is delicious.
- Finish the vocabulary review, complete the practice activities, and obtain at least 70% in the lesson assessment. Learners who do not reach the passing score may review the lesson and retake the asses

</details>

<details><summary>Tagalog 7: 19 of 347 strings</summary>

- For example: Pula – Red, Asul – Blue, Dilaw – Yellow, Bilog – Circle, Kuwadrado – Square, Tatsulok – Triangle.
- Examples: Mapusyaw na asul – Light blue, Madilim na berde – Dark green, Matingkad na pula – Bright red, Matingkad na rosas – Bright pink.
- Learners can also place the color before the object when describing it: Pulang bola – Red ball, Asul na bag – Blue bag, Dilaw na lapis – Yellow pencil, Itim na sapatos – Black shoes.
- When a color word comes before a noun, its form may change depending on the ending of the word: Pula + bola = Pulang bola, Asul + bag = Asul na bag, Dilaw + lapis = Dilaw na lapis. The linking word na
- Learners should also recognize the basic properties of common shapes.
- Number of sides · Description
- 0 straight sides · Round, with no corners
- 3 · Three sides and three corners
- 4 · Four equal sides
- 4 · Four sides, with opposite sides equal
- 5 · Five sides
- 6 · Six sides
- Descriptive words help learners provide additional information about an object: Malaking mesa – Big table, Maliit na bola – Small ball, Mahabang lapis – Long pencil, Maikling guhit – Short line, Malap
- A coin ________
- A triangular road warning sign ________
- A standard rectangular sheet of paper ________
- A square floor tile ________
- A round wall clock ________
- Finish the vocabulary review, complete the practice activities, and obtain at least 70% in the lesson assessment. Learners who do not reach the passing score may review the lesson and retake the asses

</details>

<details><summary>Tagalog 8: 8 of 487 strings</summary>

- Real-life applications: naming animals seen at home or outside, talking about pets and farm animals, describing animals and their characteristics, identifying natural places such as mountains, rivers,
- Filipino descriptions often place the describing word before the noun, but the sentence structure can vary: Malaking aso – Big dog, Maliit na pusa – Small cat, Mabilis na kabayo – Fast horse, Maamong 
- Learners can also describe an animal using a complete sentence.
- Important vocabulary: Nakatira – Lives / Resides, Sa – In / At / On, Malapit sa – Near, Tubig – Water, Puno – Tree, Kagubatan – Forest.
- Pronounce each syllable clearly, avoid omitted or added syllables, and repeat the complete word at a natural speaking pace.
- Swims / Is swimming
- Example image: A dog standing beside a tree. The items are the document's possible answers.
- Finish the vocabulary section, complete the guided conversations, complete the practice activities, and obtain at least 70% in the lesson assessment.

</details>

<details><summary>Tagalog 9: 25 of 408 strings</summary>

- Real-life applications: asking someone's name and age, asking where a person lives, asking about the time or date, asking about an object or place, asking why something happened, and asking how to do 
- Used to ask about · Example
- Things or information · Ano ang pangalan mo?
- People · Sino siya?
- Places or locations · Saan ka nakatira?
- Time or dates · Kailan ang iyong kaarawan?
- Reasons · Bakit ka nandito?
- Methods or conditions · Paano mo ito ginawa?
- Choices · Alin ang gusto mo?
- Number or quantity · Ilan ang kapatid mo?
- Price · Magkano ito?
- Ownership or recipient · Kanino ito?
- Pattern 1: Question Word + Subject. Pattern 2: Question Word + Subject + Verb or Description. Pattern 3: Yes-or-No Questions Using "Ba" – the word ba is commonly used to form questions that can be ans
- Estudyante ka ba? – Oo, estudyante ako.
- May alaga ka bang pusa? – Wala akong alagang pusa.
- Gusto mo ba ng kape? – Hindi, mas gusto ko ang tubig.
- Complete each sentence using the correct question word. Then choose the most appropriate response to each question.
- Choose the most appropriate response: Ano ang pangalan mo?
- Choose the most appropriate response: Saan ka nag-aaral?
- Choose the most appropriate response: Bakit ka nag-aaral ng Filipino?
- Choose the most appropriate response: Ilan ang kapatid mo?
- Choose the most appropriate response: Magkano ang bag na ito?
- Listen carefully to the complete question, identify the question word, understand what information is being requested, and respond using a complete Filipino sentence at a natural pace.
- What is your favorite food?
- Finish the vocabulary section, complete the guided conversations, complete the practice activities, and obtain at least 70% in the lesson assessment.

</details>

<details><summary>Tagalog 10: 8 of 483 strings</summary>

- Kami (We)
- Tayo (We)
- Choose the correct expression. For each situation, choose the most appropriate expression.
- Focus on clear pronunciation of each syllable, proper pacing, correct use of siya and sila, and natural pronunciation of complete sentences.
- This is my friend.
- The application displays a character or profile card containing basic information. Learners must introduce Maria using at least three Filipino sentences.
- Sample answer: Ito si Maria. Kaibigan ko siya. Labinsiyam na taong gulang siya. Nakatira siya sa Angeles City. Estudyante siya sa kolehiyo. Palakaibigan at masipag siya. (This is Maria. She is my frie
- Finish the vocabulary section, complete the guided conversations, complete the practice activities, and obtain at least 70% in the lesson assessment.

</details>

## 4. Issues by lesson

Meaning of each heading:

- **Missing answer key:** the activity has no key in the PDF, so it is saved without answers and has no screen. Send the answers and it can move to a real screen.
- **Answer key problem:** the key does not fit the question or word tiles. The item is saved without a screen.
- **Not scored:** the question is saved but does not count towards the score.
- **XP moved:** the PDF gives XP for something with no screen in this lesson, so the XP is earned elsewhere. The lesson total is unchanged.

### Tagalog 11: Common Daily Conversations (PDF pages 161–179)

**Answer key problem**

- Activity 4: Arrange the Words, item 1: tiles "ako / araw-araw / Maaga / gumigising" do not form the answer key's "Maaga akong gumigising araw-araw.". Item saved without a screen.
- Activity 4: Arrange the Words, item 3: tiles "ko / Mas / gusto / tahimik / ang / lugar" do not form the answer key's "Mas gusto ko ang tahimik na lugar.". Item saved without a screen.
- Activity 4: Arrange the Words, item 5: tiles "dahil / makakasama / Hindi / ako / may / gawain / akong" do not form the answer key's "Hindi ako makakasama dahil may gawain akong kailangan tapusin.". Item saved without a screen.

### Tagalog 12: Giving Directions and Locations (PDF pages 180–202)

**Answer key problem**

- Activity 4: Arrange the Words, item 3: tiles "ng / tabi / paaralan / Nasa / aklatan / ang / ang" do not form the answer key's "Nasa tabi ng paaralan ang aklatan.". Item saved without a screen.

**Capital letters**

- Activity 3: Fill in the Blanks, item 1: the key writes "Tuwid" and the word bank "tuwid"; the word bank's spelling is the correct chip.
- Activity 3: Fill in the Blanks, item 2: the key writes "Kanan" and the word bank "kanan"; the word bank's spelling is the correct chip.
- Activity 3: Fill in the Blanks, item 3: the key writes "Tabi" and the word bank "tabi"; the word bank's spelling is the correct chip.
- Activity 3: Fill in the Blanks, item 4: the key writes "Tumawid" and the word bank "tumawid"; the word bank's spelling is the correct chip.
- Activity 3: Fill in the Blanks, item 5: the key writes "Kaliwa" and the word bank "kaliwa"; the word bank's spelling is the correct chip.

### Tagalog 13: Asking for Information (PDF pages 203–226)

**Answer key problem**

- Activity 5: Arrange the Words, item 4: tiles "maaaring / Sino / ko / kausapin" do not form the answer key's "Sino ang maaari kong kausapin?". Item saved without a screen.

**XP moved**

- XP rows merged under conversation: Complete Guided Conversations + Complete Information-Seeking Role-Play = 30 XP.

### Tagalog 14: Pronouns and Common Verbs (PDF pages 227–249)

**Answer key problem**

- Activity 6: Arrange the Words, item 4: tiles "ang / Akin / aklat / ito" do not form the answer key's "Akin ang aklat na ito.". Item saved without a screen.

**XP moved**

- "Complete Speaking Practice" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Complete Guided Conversations + Complete Speaking Practice = 30 XP.

### Tagalog 15: Basic Sentence Structure (PDF pages 250–272)

**Answer key problem**

- Activity 5: Arrange the Words, item 3: tiles "ng / Kumain / bata / mansanas / ang" do not form the answer key's "Kumakain ng mansanas ang bata.". Item saved without a screen.
- Activity 5: Arrange the Words, item 4: tiles "kami / sa / Pumunta / parke / ang" do not form the answer key's "Pumunta kami sa parke.". Item saved without a screen.

**XP moved**

- XP rows merged under sentences: Complete Sentence Structure Exercises + Complete Sentence Construction Challenge = 30 XP.

### Tagalog 16: Constructing More Complex Sentences (PDF pages 273–290)

**Missing answer key**

- Activity 1: Identify the Connector (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 2: Fill in the Blanks (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 4: Arrange the Words (arrange the words): the PDF has no answer key, so it was saved without answers and has no screen yet.

**Not scored**

- Assessment Part B: Fill in the Blanks: 5 question(s) are not multiple choice; saved but not scored.
- Assessment Part C: Sentence Construction: 5 question(s) are not multiple choice; saved but not scored.
- The score uses 5 of the PDF's 15 assessment questions.

**XP moved**

- "Complete the connector exercises" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Complete the sentence construction activities" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Complete the connector exercises + Finish the guided conversation activity + Complete the sentence construction activities = 40 XP.

### Tagalog 17: Ordering Food (PDF pages 291–313)

**Missing answer key**

- Activity 1: Match the Vocabulary (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 2: Choose the Correct Expression (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 3: Fill in the Blanks (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 4: Arrange the Words (arrange the words): the PDF has no answer key, so it was saved without answers and has no screen yet.

**Not scored**

- Assessment Part B: Fill in the Blanks: 5 question(s) are not multiple choice; saved but not scored.
- Assessment Part C: Situational Responses: 5 question(s) are not multiple choice; saved but not scored.
- The score uses 5 of the PDF's 15 assessment questions.

**XP moved**

- XP rows merged under vocabulary: Complete the vocabulary lesson + Complete the ordering expression exercises = 25 XP.
- XP rows merged under conversation: Finish the guided conversation activity + Complete the restaurant role-playing activity = 25 XP.

**Pronunciation**

- Pronunciation guide lists "mairerekomenda" (mah-ee-reh-reh-koh-men-dah), which is not in the vocabulary tables, so it was not added.

### Tagalog 18: Shopping and Buying (PDF pages 314–338)

**Missing answer key**

- Activity 1: Match the Vocabulary (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 2: Choose the Correct Expression (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 3: Fill in the Blanks (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 4: Arrange the Words (arrange the words): the PDF has no answer key, so it was saved without answers and has no screen yet.

**Not scored**

- Assessment Part B: Fill in the Blanks: 5 question(s) are not multiple choice; saved but not scored.
- Assessment Part C: Situational Responses: 5 question(s) are not multiple choice; saved but not scored.
- The score uses 5 of the PDF's 15 assessment questions.

**XP moved**

- XP rows merged under vocabulary: Complete the vocabulary lesson + Complete the shopping expression exercises = 25 XP.
- XP rows merged under conversation: Finish the guided conversation activity + Complete the shopping role-playing activity = 25 XP.

### Tagalog 19: Talking About Daily Activities (PDF pages 339–362)

**Missing answer key**

- Activity 1: Match the Vocabulary (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 2: Identify the Frequency Expression (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 3: Fill in the Blanks (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 4: Arrange the Words (arrange the words): the PDF has no answer key, so it was saved without answers and has no screen yet.

**Answer key problem**

- Assessment question 3: key says "C – Rarely" but choice C reads "Bihira". The letter was used.
- Assessment question 5: key says "A – To rest" but choice A reads "Magpahinga". The letter was used.

**Not scored**

- Assessment Part B: Fill in the Blanks: 5 question(s) are not multiple choice; saved but not scored.
- Assessment Part C: Sentence Construction: 5 question(s) are not multiple choice; saved but not scored.
- The score uses 5 of the PDF's 15 assessment questions.

**XP moved**

- "Complete the daily routine exercises" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Complete the personal routine paragraph" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Complete the daily routine exercises + Finish the guided conversation activity + Complete the personal routine paragraph = 40 XP.

**Pronunciation**

- Pronunciation guide lists "iskedyul" (ees-keh-dyool), which is not in the vocabulary tables, so it was not added.

### Tagalog 20: Describing People, Places, and Things (PDF pages 363–387)

**Missing answer key**

- Activity 1: Vocabulary Matching (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 2: Choose the Appropriate Description (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 3: Complete the Sentences (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 4: Arrange the Words (arrange the words): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Finish Activities 1–3" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Finish Activities 4–6" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Complete the guided conversations + Finish Activities 1–3 + Finish Activities 4–6 = 40 XP.

### Tagalog 21: Expressing Opinions and Feelings (PDF pages 388–406)

**Missing answer key**

- Activity 1: Vocabulary Matching (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 3: Complete the Sentences (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 5: Arrange the Words (arrange the words): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Complete the lesson proper" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Finish Activities 1–3" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Finish Activities 4–7" (20 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Complete the lesson proper + Finish Activities 1–3 + Finish Activities 4–7 = 50 XP.

### Tagalog 22: Giving Explanations and Reasons (PDF pages 407–431)

**Missing answer key**

- Activity 1: Vocabulary Matching (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 3: Complete the Sentences (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 5: Arrange the Words (arrange the words): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Complete the lesson proper" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Finish Activities 1–3" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Finish Activities 4–7" (20 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Complete the lesson proper + Finish Activities 1–3 + Finish Activities 4–7 = 50 XP.

### Tagalog 23: Agreeing and Disagreeing (PDF pages 432–455)

**Missing answer key**

- Activity 1: Vocabulary Matching (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 3: Complete the Sentences (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 4: Choose the Most Appropriate Response (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 5: Arrange the Words (arrange the words): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Complete the lesson proper" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Finish Activities 1–3" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Finish Activities 4–7" (20 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Complete the lesson proper + Finish Activities 1–3 + Finish Activities 4–7 = 50 XP.

### Tagalog 24: Advanced Sentence Construction (PDF pages 456–479)

**Missing answer key**

- Activity 2: Choose the Appropriate Connector (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 4: Complete the Relative Clauses (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Clause identification" (10 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Sentence combination activities" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Connector and relative clause exercises" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Paragraph construction" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Clause identification + Sentence combination activities + Connector and relative clause exercises + Paragraph construction = 55 XP.

### Tagalog 25: Verb Forms and Tenses (PDF pages 480–508)

**Missing answer key**

- Activity 2: Choose the Correct Verb Form (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Verb aspect identification" (10 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Verb form transformation" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under vocabulary: Vocabulary and grammar review + Root word and affix identification = 20 XP.
- "Sentence correction and construction" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Verb aspect identification + Verb form transformation + Sentence correction and construction = 40 XP.

### Tagalog 26: Idiomatic Expressions and Common Sayings (PDF pages 509–533)

**Missing answer key**

- Activity 1: Identify the Meaning of the Idiom (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 2: Match the Proverb with Its Lesson (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Idiom identification" (10 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Proverb matching" (10 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Context interpretation" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Sentence construction" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Idiom identification + Proverb matching + Context interpretation + Sentence construction + Dialogue construction = 60 XP.

### Tagalog 27: Workplace and School Conversations (PDF pages 534–556)

**Missing answer key**

- Activity 1: Identify the Appropriate Expression (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Lesson Proper" (10 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Practice Activities" (20 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Lesson Proper + Guided Conversations + Practice Activities = 40 XP.

### Tagalog 28: Storytelling and Narration (PDF pages 557–583)

**Missing answer key**

- Activity 1: Vocabulary Matching (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Lesson Proper" (10 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Practice Activities" (20 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Lesson Proper + Guided Conversations + Practice Activities = 40 XP.

### Tagalog 29: Situational Dialogues and Role-Playing (PDF pages 584–605)

**Missing answer key**

- Activity 1: Match the Situation with the Appropriate Expression (matching): the PDF has no answer key, so it was saved without answers and has no screen yet.
- Activity 3: Identify the Appropriate Response (multiple choice): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- "Lesson Proper" (10 XP) has no screen in this lesson, so its XP is earned with conversation.
- "Practice Activities" (20 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Lesson Proper + Guided Situational Dialogues + Practice Activities = 40 XP.

### Tagalog 30: Comprehensive Language Assessment (PDF pages 606–631)

**Not scored**

- Assessment PART D: Listening Comprehension: 7 question(s) need recordings that do not exist yet; saved but not scored.
- Assessment PART F: Writing and Narration: 5 question(s) are not multiple choice; saved but not scored.
- The score uses 48 of the PDF's 60 assessment questions.

**Passing score**

- The PDF sets this lesson's passing score at 80%, not 70%. The PDF's value was used.

**XP moved**

- "Grammar Review" (10 XP) has no screen in this lesson, so its XP is earned with vocabulary.
- "Reading Comprehension" (15 XP) has no screen in this lesson, so its XP is earned with vocabulary.
- "Listening Comprehension" (15 XP) has no screen in this lesson, so its XP is earned with vocabulary.
- "Practical Communication" (20 XP) has no screen in this lesson, so its XP is earned with vocabulary.
- "Writing and Narration" (30 XP) has no screen in this lesson, so its XP is earned with vocabulary.
- XP rows merged under vocabulary: Vocabulary Review + Grammar Review + Reading Comprehension + Listening Comprehension + Practical Communication + Writing and Narration = 100 XP.

**Lesson information**

- No guided conversation found.
- No practice activities section.

**Other text**

- Vocabulary text without a table, kept as a note: C. Grammar Review / Learners should remember the following concepts: / • Personal pronouns and possessive forms. / • Common verbs and their aspects. / • Sentenc

### Waray 1: Basic Greetings and Self-Introduction (PDF pages 632–649)

**Missing answer key**

- Activity 5: Self-Introduction Practice (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- XP rows merged under vocabulary: Vocabulary Practice + Useful Phrases Practice = 20 XP.

**Activity**

- Text before the first activity was not imported: "Complete the following activities to check your understanding of the lesson."

### Waray 2: Common Expressions and Responses (PDF pages 650–674)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Practice + Useful Phrases Practice = 20 XP.

**Activity**

- Text before the first activity was not imported: "Complete the following exercises to strengthen your understanding of common Wara"

### Waray 3: Numbers and Counting (PDF pages 675–699)

**XP moved**

- XP rows merged under vocabulary: Number Vocabulary Practice + Useful Phrases Practice = 20 XP.

**Activity**

- Text before the first activity was not imported: "Complete the following exercises to strengthen your understanding of Waray numbe"

### Waray 4: Days, Months, and Time (PDF pages 700–714)

**Missing answer key**

- Activity 5: Arrange Your Schedule (fill in the blanks): the PDF has no answer key, so it was saved without answers and has no screen yet.

**XP moved**

- XP rows merged under vocabulary: Vocabulary Practice + Phrase Recognition = 20 XP.

### Waray 5: Family Members and Relationships (PDF pages 715–728)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Practice + Phrase Recognition = 20 XP.

### Waray 6: Food and Drinks (PDF pages 729–743)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Practice + Phrase Recognition = 20 XP.

### Waray 7: Colors and Shapes (PDF pages 744–757)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Practice + Phrase Recognition = 20 XP.

### Waray 8: Animals and Nature (PDF pages 758–773)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Practice + Phrase Recognition = 20 XP.

### Waray 9: Asking and Answering Simple Questions (PDF pages 774–788)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Review + Useful Phrases = 20 XP.

### Waray 10: Introducing Other People (PDF pages 789–804)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Review + Useful Phrases = 20 XP.

### Waray 11: Common Daily Conversations (PDF pages 805–817)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Review + Useful Phrases = 20 XP.

### Waray 12: Giving Directions and Locations (PDF pages 818–830)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Review + Useful Phrases = 20 XP.

### Waray 13: Asking for Information (PDF pages 831–843)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Review + Useful Phrases = 20 XP.

### Waray 14: Pronouns and Common Verbs (PDF pages 844–853)

**Missing answer key**

- No scored assessment: the PDF's questions are not multiple choice, so they were saved (with their answers) but not scored.

**Not scored**

- Assessment : 10 question(s) are not multiple choice; saved but not scored.

**XP moved**

- XP rows merged under sentences: Pronoun Identification + Sentence Completion + Translation Activity = 35 XP.
- "Lesson Assessment" (15 XP) has no screen in this lesson, so its XP is earned with conversation.

### Waray 15: Basic Sentence Structure (PDF pages 854–869)

**Missing answer key**

- No scored assessment: the PDF's questions are not multiple choice, so they were saved (with their answers) but not scored.

**Not scored**

- Assessment : 10 question(s) are not multiple choice; saved but not scored.

**XP moved**

- XP rows merged under sentences: Sentence Parts Identification + Negative Sentence Practice + Question Formation = 30 XP.
- "Lesson Assessment" (15 XP) has no screen in this lesson, so its XP is earned with conversation.

### Waray 16: Constructing More Complex Sentences (PDF pages 870–883)

**Missing answer key**

- No scored assessment: the PDF's questions are not multiple choice, so they were saved (with their answers) but not scored.

**Not scored**

- Assessment : 10 question(s) are not multiple choice; saved but not scored.

**XP moved**

- XP rows merged under sentences: Sentence Combination + Sentence Completion + Sentence Expansion and Translation = 35 XP.
- "Lesson Assessment" (15 XP) has no screen in this lesson, so its XP is earned with conversation.

### Waray 17: Ordering Food (PDF pages 884–899)

**Missing answer key**

- No scored assessment: the PDF's questions are not multiple choice, so they were saved (with their answers) but not scored.

**Not scored**

- Assessment : 10 question(s) are not multiple choice; saved but not scored.

**XP moved**

- XP rows merged under sentences: Complete the Order + Translation Activity = 20 XP.
- "Lesson Assessment" (15 XP) has no screen in this lesson, so its XP is earned with conversation.
- XP rows merged under conversation: Restaurant Role-Play + Lesson Assessment = 30 XP.

### Waray 18: Shopping and Buying (PDF pages 900–920)

**Lesson information**

- The PDF does not state a level on this lesson; "Intermediate" comes from its lesson number.

### Waray 19: Talking About Daily Activities (PDF pages 921–941)

**XP moved**

- XP rows merged under sentences: Complete the Sentences + Practice Activities = 25 XP.

**Lesson information**

- The PDF does not state a level on this lesson; "Intermediate" comes from its lesson number.

### Waray 20: Describing People, Places, and Things (PDF pages 942–964)

**XP moved**

- XP rows merged under sentences: Complete the Sentences + Practice Activities = 25 XP.

**Lesson information**

- The PDF does not state a level on this lesson; "Intermediate" comes from its lesson number.

### Waray 21: Expressing Opinions and Feelings (PDF pages 965–980)

**XP moved**

- XP rows merged under sentences: Complete the Sentences + Practice Activities = 25 XP.

### Waray 22: Giving Explanations and Reasons (PDF pages 981–1000)

**Draft answers**

- Identify the Cause and Effect: draft answers are saved, but written answers like these have no screen yet.

**XP moved**

- XP rows merged under sentences: Complete the Sentences + Practice Activities = 25 XP.

### Waray 23: Agreeing and Disagreeing (PDF pages 1001–1020)

**XP moved**

- XP rows merged under sentences: Complete the Sentences + Practice Activities = 25 XP.

### Waray 24: Advanced Sentence Construction (PDF pages 1021–1041)

**XP moved**

- "Combine the Sentences" (10 XP) has no screen in this lesson, so its XP is earned with match.
- "Expand the Sentences" (10 XP) has no screen in this lesson, so its XP is earned with match.
- "Paragraph Construction" (15 XP) has no screen in this lesson, so its XP is earned with match.
- XP rows merged under match: Vocabulary Matching + Combine the Sentences + Expand the Sentences + Paragraph Construction = 45 XP.

### Waray 25: Verb Forms and Tenses (PDF pages 1042–1066)

**XP moved**

- XP rows merged under sentences: Identify the Time Reference + Complete the Sentences + Describe Your Activities = 35 XP.

### Waray 26: Idiomatic Expressions and Common Sayings (PDF pages 1067–1080)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Review + Expression Recognition = 20 XP.

### Waray 27: Workplace and School Conversations (PDF pages 1081–1100)

**XP moved**

- XP rows merged under vocabulary: Vocabulary Review + Useful Expressions = 20 XP.

### Waray 28: Storytelling and Narration (PDF pages 1101–1118)

**XP moved**

- XP rows merged under sentences: Sequence Recognition + Guided Narration + Practice Activities = 35 XP.

### Waray 29: Situational Dialogues and Role-Playing (PDF pages 1119–1139)

**XP moved**

- XP rows merged under conversation: Guided Conversations + Role-Playing Activities = 25 XP.

### Waray 30: Comprehensive Language Assessment (PDF pages 1140–1155)

**XP moved**

- "Expressions and Grammar" (10 XP) has no screen in this lesson, so its XP is earned with assessment.
- "Reading and Conversation" (10 XP) has no screen in this lesson, so its XP is earned with assessment.
- "Practical Communication" (15 XP) has no screen in this lesson, so its XP is earned with assessment.
- XP rows merged under assessment: Vocabulary Assessment + Expressions and Grammar + Reading and Conversation + Practical Communication + Comprehensive Assessment = 60 XP.

**Lesson information**

- No vocabulary section found.
- No guided conversation found.
- No practice activities section.

## 5. Left out on purpose

- Facial-expression notes, certificate notes and score bands such as "14–15 correct: Excellent!" are in the PDF but not the app. Facial expressions never affect scores.
- Completion criteria sentences ("To complete Lesson 21, learners must…") are left out, because the app has its own completion rules.
- Short lines that only introduce a section ("Read the following conversations…", "Complete the following exercises…") are left out where no field shows them.
- Pass marks are as in the PDF: 70%, and 80% for Tagalog 30.
- Tagalog 16–19: the "Part C – Suggested Answers" notes, including that other correct answers should be accepted, apply to unscored questions.
- Tagalog 15 Activities 6 and 8: the key says answers may vary, so these have no fixed answers.
- Tagalog 30: the scoring note that alternative answers may be accepted for questions such as 22 and 31 is not in the app. Scoring accepts only the keyed answer.
- Kapampangan and audio fields were not changed. No recordings exist yet, so listening questions are not scored.

## 6. What this replaced

- Tagalog 11–20 and Waray 1–20 replaced placeholder lessons with the same IDs, so saved progress on those IDs carries over. The old practice-game phrases on those lessons are gone from the board data but remain in git history. Lessons with this step-by-step flow did not use them.
- `docs/tagalog-voice-recording-list.md` was written before this import and no longer matches Tagalog 11–30.

## 7. Lessons and counts

"Saved without a screen" counts items in `extraActivities`, which learners do not see yet.

| Lesson | Level | Vocabulary | Sentences | Dialogue lines | Activity questions on screens | Saved without a screen | Assessment questions scored | Assessment questions not scored | XP |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Tagalog 11: Common Daily Conversations | Intermediate | 67 | 31 | 23 | 32 | 3 | 10 | 0 | 70 |
| Tagalog 12: Giving Directions and Locations | Intermediate | 72 | 27 | 25 | 32 | 5 | 10 | 0 | 70 |
| Tagalog 13: Asking for Information | Intermediate | 49 | 25 | 27 | 29 | 13 | 10 | 0 | 70 |
| Tagalog 14: Pronouns and Common Verbs | Intermediate | 60 | 20 | 20 | 34 | 11 | 10 | 0 | 70 |
| Tagalog 15: Basic Sentence Structure | Intermediate | 49 | 20 | 18 | 13 | 27 | 10 | 0 | 70 |
| Tagalog 16: Constructing More Complex Sentences | Intermediate | 24 | 0 | 17 | 0 | 30 | 5 | 10 | 70 |
| Tagalog 17: Ordering Food | Intermediate | 68 | 0 | 22 | 0 | 35 | 5 | 10 | 70 |
| Tagalog 18: Shopping and Buying | Intermediate | 91 | 0 | 22 | 0 | 35 | 5 | 10 | 70 |
| Tagalog 19: Talking About Daily Activities | Intermediate | 88 | 0 | 20 | 0 | 30 | 5 | 10 | 70 |
| Tagalog 20: Describing People, Places, and Things | Intermediate | 76 | 24 | 23 | 0 | 34 | 15 | 0 | 70 |
| Tagalog 21: Expressing Opinions and Feelings | Advanced | 59 | 20 | 18 | 0 | 34 | 15 | 0 | 80 |
| Tagalog 22: Giving Explanations and Reasons | Advanced | 52 | 18 | 20 | 0 | 39 | 15 | 0 | 80 |
| Tagalog 23: Agreeing and Disagreeing | Advanced | 53 | 22 | 23 | 0 | 37 | 15 | 0 | 80 |
| Tagalog 24: Advanced Sentence Construction | Advanced | 28 | 10 | 18 | 0 | 38 | 15 | 0 | 80 |
| Tagalog 25: Verb Forms and Tenses | Advanced | 52 | 10 | 18 | 0 | 54 | 15 | 0 | 80 |
| Tagalog 26: Idiomatic Expressions and Common Sayings | Advanced | 51 | 15 | 17 | 0 | 46 | 15 | 0 | 80 |
| Tagalog 27: Workplace and School Conversations | Advanced | 60 | 0 | 30 | 0 | 33 | 15 | 0 | 80 |
| Tagalog 28: Storytelling and Narration | Advanced | 75 | 0 | 21 | 0 | 33 | 15 | 0 | 80 |
| Tagalog 29: Situational Dialogues and Role-Playing | Advanced | 40 | 0 | 46 | 0 | 31 | 15 | 0 | 80 |
| Tagalog 30: Comprehensive Language Assessment | Advanced | 24 | 0 | 0 | 0 | 0 | 48 | 12 | 100 |
| Waray 1: Basic Greetings and Self-Introduction | Beginner | 35 | 16 | 27 | 20 | 5 | 10 | 0 | 60 |
| Waray 2: Common Expressions and Responses | Beginner | 36 | 32 | 28 | 20 | 5 | 10 | 0 | 60 |
| Waray 3: Numbers and Counting | Beginner | 41 | 21 | 27 | 15 | 19 | 10 | 0 | 60 |
| Waray 4: Days, Months, and Time | Beginner | 44 | 12 | 12 | 11 | 9 | 10 | 0 | 60 |
| Waray 5: Family Members and Relationships | Beginner | 33 | 12 | 15 | 12 | 10 | 10 | 0 | 60 |
| Waray 6: Food and Drinks | Beginner | 51 | 12 | 15 | 12 | 10 | 10 | 0 | 60 |
| Waray 7: Colors and Shapes | Beginner | 34 | 12 | 15 | 12 | 9 | 10 | 0 | 60 |
| Waray 8: Animals and Nature | Beginner | 63 | 14 | 16 | 12 | 9 | 10 | 0 | 60 |
| Waray 9: Asking and Answering Simple Questions | Beginner | 30 | 12 | 19 | 10 | 9 | 10 | 0 | 60 |
| Waray 10: Introducing Other People | Beginner | 38 | 16 | 18 | 10 | 9 | 10 | 0 | 60 |
| Waray 11: Common Daily Conversations | Intermediate | 41 | 16 | 25 | 9 | 11 | 10 | 0 | 60 |
| Waray 12: Giving Directions and Locations | Intermediate | 43 | 15 | 24 | 15 | 10 | 10 | 0 | 60 |
| Waray 13: Asking for Information | Intermediate | 44 | 14 | 28 | 15 | 10 | 10 | 0 | 60 |
| Waray 14: Pronouns and Common Verbs | Intermediate | 54 | 0 | 18 | 16 | 5 | 0 | 10 | 60 |
| Waray 15: Basic Sentence Structure | Intermediate | 15 | 0 | 18 | 5 | 20 | 0 | 10 | 60 |
| Waray 16: Constructing More Complex Sentences | Intermediate | 14 | 0 | 18 | 10 | 20 | 0 | 10 | 60 |
| Waray 17: Ordering Food | Intermediate | 58 | 0 | 22 | 13 | 20 | 0 | 10 | 60 |
| Waray 18: Shopping and Buying | Intermediate | 52 | 27 | 31 | 10 | 11 | 10 | 0 | 60 |
| Waray 19: Talking About Daily Activities | Intermediate | 62 | 18 | 25 | 10 | 19 | 10 | 0 | 60 |
| Waray 20: Describing People, Places, and Things | Intermediate | 69 | 18 | 24 | 10 | 13 | 10 | 0 | 60 |
| Waray 21: Expressing Opinions and Feelings | Advanced | 53 | 32 | 21 | 15 | 14 | 10 | 0 | 60 |
| Waray 22: Giving Explanations and Reasons | Advanced | 41 | 21 | 23 | 10 | 19 | 10 | 0 | 60 |
| Waray 23: Agreeing and Disagreeing | Advanced | 38 | 17 | 22 | 18 | 10 | 10 | 0 | 60 |
| Waray 24: Advanced Sentence Construction | Advanced | 42 | 20 | 23 | 5 | 24 | 10 | 0 | 60 |
| Waray 25: Verb Forms and Tenses | Advanced | 47 | 21 | 20 | 18 | 8 | 10 | 0 | 60 |
| Waray 26: Idiomatic Expressions and Common Sayings | Advanced | 15 | 0 | 14 | 15 | 5 | 10 | 0 | 60 |
| Waray 27: Workplace and School Conversations | Advanced | 51 | 27 | 27 | 15 | 4 | 10 | 0 | 60 |
| Waray 28: Storytelling and Narration | Advanced | 44 | 21 | 14 | 11 | 5 | 10 | 0 | 60 |
| Waray 29: Situational Dialogues and Role-Playing | Advanced | 54 | 32 | 28 | 10 | 10 | 10 | 0 | 60 |
| Waray 30: Comprehensive Language Assessment | Advanced | 0 | 0 | 0 | 0 | 0 | 40 | 1 | 60 |
