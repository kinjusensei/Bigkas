const dialects = [
  {
    id: "tagalog",
    name: "Tagalog",
    color: "#22C55E",

    levels: [
      {
        id: 1,
        lessonId: "tagalog 1",
        title: "Basic Greetings",
        subtitle: "Learn how to greet people.",
        unlocked: true,
      },
      {
        id: 2,
        lessonId: "tagalog 2",
        title: "Introducing Yourself",
        subtitle: "Introduce yourself in Tagalog.",
        unlocked: true,
      },
      {
        id: 3,
        lessonId: "tagalog 3",
        title: "Numbers",
        subtitle: "Count from 1 to 20.",
        unlocked: true,
      },
      {
        id: 4,
        lessonId: "tagalog 4",
        title: "Colors",
        subtitle: "Learn common colors.",
        unlocked: false,
      },
      {
        id: 5,
        lessonId: "tagalog 5",
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
        lessonId: "kapampangan 1",
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
        lessonId: "waray 1",
        title: "Pangumusta",
        subtitle: "Basic greetings.",
        unlocked: true,
      },
    ],
  },
];

export default dialects;
