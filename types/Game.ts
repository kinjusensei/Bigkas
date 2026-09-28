import { Lesson } from "../types/lesson";
const dialects: {
  id: string;
  name: string;
  color: string;
  levels: Lesson[];
}[] = [
  {
    id: "tagalog",
    name: "Tagalog",
    color: "#22C55E",

    levels: [
      {
        id: 1,
        lessonId: "tagalog_1",
        title: "Basic Greetings",
        subtitle: "Learn how to greet people.",
        unlocked: true,
      },
      {
        id: 2,
        lessonId: "tagalog_2",
        title: "Introducing Yourself",
        subtitle: "Introduce yourself in Tagalog.",
        unlocked: true,
      },
      {
        id: 3,
        lessonId: "tagalog_3",
        title: "Numbers",
        subtitle: "Count from 1 to 20.",
        unlocked: true,
      },
      {
        id: 4,
        lessonId: "tagalog_4",
        title: "Colors",
        subtitle: "Learn common colors.",
        unlocked: false,
      },
      {
        id: 5,
        lessonId: "tagalog_5",
        title: "Family",
        subtitle: "Learn family members.",
        unlocked: false,
      },
    ],
  },

  {
    id: "kapampangan",
    name: "Kapampangan",
    color: "#F97316",

    levels: [
      {
        id: 1,
        lessonId: "kapampangan_1",
        title: "Pangumusta",
        subtitle: "Basic greetings.",
        unlocked: true,
      },
    ],
  },

  {
    id: "waray",
    name: "Waray",
    color: "#A855F7",

    levels: [
      {
        id: 1,
        lessonId: "waray_1",
        title: "Pangumusta",
        subtitle: "Basic greetings.",
        unlocked: true,
      },
    ],
  },
];

export default dialects;
