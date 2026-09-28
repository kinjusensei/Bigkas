export const tutorialSteps = [
  {
    type: "welcome",
    icon: "📖",
    title: "Welcome to Bigkas!",
    description:
      "Before you begin learning Philippine dialects, let's take a quick tour of how Bigkas works.",
    button: "Let's Go",
  },

  {
    type: "privacy",
    icon: "📷",
    title: "Allow Camera Access",
    description:
      "Bigkas uses your camera to recognize your facial expressions while you practice speaking.",
    button: "Continue",

    cardTitle: "Your Privacy Matters",

    cardItems: [
      "Your camera is only used during lessons.",
      "Images are never stored.",
      "Facial recognition is only used for scoring.",
    ],
  },

  {
    type: "permission",
    icon: "📸",
    title: "Camera Permission",
    description: "Bigkas is ready to request access to your camera.",
    button: "Allow Camera Access",

    cardTitle: "Why do we need it?",

    cardItems: [
      "Detect your facial expressions.",
      "Evaluate pronunciation.",
      "Provide better learning feedback.",
    ],
  },

  {
    type: "faceGuide",
    icon: "😊",
    title: "Position Your Face",
    description:
      "Before using facial recognition, make sure your face is clearly visible.",
    button: "Next",

    cardTitle: "Tips",

    cardItems: [
      "Face the camera directly.",
      "Stay in a well-lit area.",
      "Remove anything covering your face.",
    ],
  },

  {
    type: "voiceGuide",
    icon: "🎤",
    title: "Speak Clearly",
    description: "Bigkas evaluates your pronunciation while you speak.",
    button: "Finish Setup",

    cardTitle: "Best Results",

    cardItems: [
      "Speak naturally.",
      "Reduce background noise.",
      "Hold your phone 20–30 cm away.",
    ],
  },

  {
    type: "ready",
    icon: "🎉",
    title: "You're Ready!",
    description: "Everything is set. Let's start learning Philippine dialects!",
    button: "Start Learning",

    cardTitle: "You'll Be Able To",

    cardItems: [
      "Learn dialects interactively.",
      "Receive pronunciation feedback.",
      "Track your progress.",
    ],
  },
];
