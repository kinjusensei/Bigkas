import { LessonSpeaking } from "../../types/structuredLesson";

// Tagalog Lesson 1 — Activity 4: Speaking Practice, from
// docs/Lesson content.pdf. "Ako si Maria/" is corrected to "Ako si Maria."
//
// English meanings: "Magandang umaga!", "Kamusta ka?" and "Ikinagagalak
// kitang makilala." are from the document. The others are inferred from
// the document's patterns and are to be confirmed by the lesson author:
// "I am Maria.", "I am from Pampanga.", "Thank you for your help.",
// "Goodbye! Take care!".
//
// Respelling only where the document's pronunciation guide covers the
// whole phrase.
export const tagalogLesson1Speaking: LessonSpeaking = {
  title: "Speaking Practice",
  instructions: "Read the following sentences aloud.",
  note: "Learners should listen to the model pronunciation before recording their own voices.",
  practiceLessonId: "tagalog_1",
  phrases: [
    {
      id: "1",
      text: "Magandang umaga!",
      respelling: "ma-gan-dang u-ma-ga",
      meaning: "Good morning",
      audioUrl: require("../../assets/audio/Tagalog/magandang umaga.aac"),
    },
    { id: "2", text: "Kamusta ka?", meaning: "How are you?" },
    { id: "3", text: "Ako si Maria.", meaning: "I am Maria." },
    { id: "4", text: "Taga-Pampanga ako.", meaning: "I am from Pampanga." },
    {
      id: "5",
      text: "Ikinagagalak kitang makilala.",
      meaning: "Nice to meet you.",
    },
    {
      id: "6",
      text: "Salamat sa iyong tulong.",
      meaning: "Thank you for your help.",
    },
    { id: "7", text: "Paalam! Ingat ka!", meaning: "Goodbye! Take care!" },
  ],
};
