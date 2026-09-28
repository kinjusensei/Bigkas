// Bigkas privacy policy content.
//
// DRAFT — have this reviewed before public release. Replace every [BRACKETED]
// item with your real details, and check each "what we collect" line against
// what the app actually does.
//
// When you change the policy in a way users should re-agree to, bump
// PRIVACY_POLICY_VERSION. Each profile stores the version it agreed to.

export const PRIVACY_POLICY_VERSION = "2026-09-28";
export const PRIVACY_POLICY_EFFECTIVE = "September 28, 2026";

export type PolicySection = {
  heading: string;
  paragraphs: string[];
};

/** Official sources the policy is based on — shown as tappable links. */
export const LEGAL_SOURCES: { label: string; url: string }[] = [
  {
    label: "Republic Act No. 10173 — Data Privacy Act of 2012 (Official Gazette)",
    url: "https://www.officialgazette.gov.ph/2012/08/15/republic-act-no-10173/",
  },
  {
    label: "Implementing Rules and Regulations of the Data Privacy Act (National Privacy Commission)",
    url: "https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/",
  },
  {
    label: "NPC Advisory No. 2024-03 — Guidelines on Child-Oriented Transparency (FAQs)",
    url: "https://privacy.gov.ph/wp-content/uploads/2024/12/FAQs-Advisory-on-Guidelines-on-Child-Oriented-Transparency.pdf",
  },
  {
    label: "NPC Advisories & Circulars (full list)",
    url: "https://privacy.gov.ph/pips-and-pics/advisories-circulars/",
  },
  {
    label: "National Privacy Commission — file a complaint",
    url: "https://privacy.gov.ph/",
  },
];

export const PRIVACY_SUMMARY =
  "Bigkas collects only what it needs to teach you Tagalog, Kapampangan and Waray and to save your progress. We never sell your information. You can ask to see, correct or delete your data at any time.";

export const PRIVACY_SECTIONS: PolicySection[] = [
  {
    heading: "1. Who we are",
    paragraphs: [
      "Bigkas is a dialect-learning app made by [TEAM / SCHOOL / ORGANIZATION NAME], [ADDRESS]. We are the personal information controller for the data described here, as defined in Republic Act No. 10173, the Data Privacy Act of 2012.",
      "Our Data Protection Officer can be reached at [DPO EMAIL].",
    ],
  },
  {
    heading: "2. What we collect",
    paragraphs: [
      "Account details: your display name, email address and password. Your password is stored encrypted by our login provider; we cannot see it.",
      "Learning data: your chosen dialects, lessons and pretests completed, scores, XP, level, streak and daily goal.",
      "Profile photo: a preset tarsier avatar, or a photo you choose to upload.",
      "Speaking practice: when you use speaking exercises, the app uses your microphone to check your pronunciation. [CONFIRM: say whether recordings are stored or only processed on the device, and which service processes them.]",
      "Bug reports: the category, summary, description and screenshot you send us.",
      "Notifications: which announcements and replies you have read.",
    ],
  },
  {
    heading: "3. Why we use it",
    paragraphs: [
      "To create and secure your account, save your progress, unlock lessons and story chapters, show your name and XP on the leaderboard, give pronunciation feedback, reply to your bug reports, and improve the app.",
      "We do not use your data for advertising, and we do not sell or rent it to anyone.",
    ],
  },
  {
    heading: "4. Our legal basis",
    paragraphs: [
      "We process your personal information based on your consent, which you give when you create an account (Section 12(a) of the Data Privacy Act). The Act defines consent as freely given, specific and informed, and it must be recorded — so we save the date and version of this policy you agreed to.",
      "You can withdraw your consent at any time by deleting your account or contacting us. We will then stop processing your data, except where the law requires us to keep it.",
    ],
  },
  {
    heading: "5. Who we share it with",
    paragraphs: [
      "Supabase, which hosts our database, login system and file storage. [CONFIRM the server region shown in your Supabase project settings, e.g. Singapore.] Because these servers may be outside the Philippines, your data may be transferred abroad; we remain responsible for protecting it.",
      "Other users see only your display name, avatar, level and XP on the leaderboard.",
      "Bigkas administrators can see bug reports you send so they can reply.",
      "We may disclose information if required by Philippine law or a lawful order.",
    ],
  },
  {
    heading: "6. How long we keep it",
    paragraphs: [
      "We keep your account and learning data while your account is active. When you delete your account, we delete your personal data within [NUMBER] days, except records the law requires us to keep.",
      "Bug reports and their screenshots are kept for [NUMBER] months after they are resolved, then deleted.",
    ],
  },
  {
    heading: "7. How we protect it",
    paragraphs: [
      "Data is sent over encrypted connections. Database access rules make sure each user can read only their own private data, and bug report screenshots are stored in a private location that only administrators can open.",
      "If a data breach puts your information at real risk, we will notify you and the National Privacy Commission as the Data Privacy Act requires.",
    ],
  },
  {
    heading: "8. Your rights",
    paragraphs: [
      "Under the Data Privacy Act you have the right to be informed about how your data is used, to access it, to object to its processing, to have it corrected, to have it blocked or erased, to get a copy in a portable format, to claim damages if it is misused, and to file a complaint with the National Privacy Commission.",
      "To use any of these rights, email [DPO EMAIL]. We will reply within [NUMBER] days.",
    ],
  },
  {
    heading: "9. Children and students",
    paragraphs: [
      "Many Bigkas learners are students. Under the National Privacy Commission's Guidelines on Child-Oriented Transparency (Advisory No. 2024-03), a child is anyone under 18. If you are under 18, please read this policy with your parent or guardian — they need to agree before you create an account.",
      "Parents and guardians can ask to see, correct or delete their child's data at any time using the contact details above.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    paragraphs: [
      "If we make important changes, we will tell you in the app and ask you to agree again before continuing.",
    ],
  },
];
