import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 18 — imported from "Lesson Plan.pdf", pages 314–338.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson18: StructuredLesson = {
  lessonId: "tagalog_18",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 18,
  title: "Shopping and Buying",
  level: "Intermediate",
  unit: "Unit 3 – Practical Conversations",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–17",
  intro: [
    "This lesson teaches learners how to communicate when shopping in markets, grocery stores, clothing shops, and other retail establishments. Learners will practice asking about prices, quantities, sizes, colors, discounts, and available products.",
    "They will also learn how to make purchases, compare items, ask for discounts, and complete simple transactions using Filipino.",
    "Shopping is a common activity in everyday life. People visit markets, grocery stores, clothing shops, and other establishments to purchase the things they need.",
    "When shopping, you may need to ask:",
    "• How much does an item cost?",
    "• Is another size or color available?",
    "• Can I buy two pieces?",
    "• Is there a discount?",
    "• Can I pay using cash or a card?",
    "For example, imagine that you are buying a shirt at a clothing store.",
    "Customer: Magandang araw po. Magkano po ang damit na ito?",
    "Seller: Limang daang piso po.",
    "Customer: Mayroon po ba kayong mas malaking sukat?",
    "Seller: Opo. Mayroon po kaming medium at large.",
    "Customer: Sige po. Susukatin ko muna.",
    "English Translation:",
    "Customer: Good day. How much is this shirt?",
    "Seller: Five hundred pesos.",
    "Customer: Do you have a larger size?",
    "Seller: Yes. We have medium and large.",
    "Customer: All right. I will try it on first.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino vocabulary used in shopping.",
    "Ask about the prices, sizes, colors, and availability of products.",
    "Express quantities and make requests when buying items.",
    "Compare products based on their prices and characteristics.",
    "Use appropriate expressions when negotiating or asking about discounts.",
    "Participate in basic conversations between customers and sellers.",
    "Complete a simple buying transaction using Filipino.",
  ],
  expressionGroups: [
    {
      title: "A. Shopping Places",
      items: [
        {
          term: "palengke",
          meaning: "public market",
          pronunciation: "pah-leng-keh",
        },
        {
          term: "tindahan",
          meaning: "store",
          pronunciation: "teen-dah-hahn",
        },
        {
          term: "pamilihan",
          meaning: "marketplace",
        },
        {
          term: "grocery store",
          meaning: "grocery store",
        },
        {
          term: "mall",
          meaning: "shopping mall",
        },
        {
          term: "botika",
          meaning: "pharmacy",
        },
        {
          term: "panaderya",
          meaning: "bakery",
        },
        {
          term: "tindahan ng damit",
          meaning: "clothing store",
        },
        {
          term: "tindahan ng sapatos",
          meaning: "shoe store",
        },
        {
          term: "department store",
          meaning: "department store",
        },
        {
          term: "supermarket",
          meaning: "supermarket",
        },
        {
          term: "puwesto",
          meaning: "stall or selling booth",
        },
      ],
    },
    {
      title: "B. Common Shopping Vocabulary",
      items: [
        {
          term: "mamimili",
          meaning: "customer/buyer",
          pronunciation: "mah-mee-mee-lee",
        },
        {
          term: "tindero",
          meaning: "male seller",
        },
        {
          term: "tindera",
          meaning: "female seller",
        },
        {
          term: "paninda",
          meaning: "merchandise or goods for sale",
          pronunciation: "pah-neen-dah",
        },
        {
          term: "produkto",
          meaning: "product",
        },
        {
          term: "presyo",
          meaning: "price",
          pronunciation: "pres-yoh",
        },
        {
          term: "halaga",
          meaning: "value or amount",
        },
        {
          term: "bayad",
          meaning: "payment",
          pronunciation: "bah-yahd",
        },
        {
          term: "sukli",
          meaning: "change",
          pronunciation: "sook-lee",
        },
        {
          term: "diskuwento",
          meaning: "discount",
          pronunciation: "dees-koo-wen-toh",
        },
        {
          term: "resibo",
          meaning: "receipt",
        },
        {
          term: "sukat",
          meaning: "size or measurement",
          pronunciation: "soo-kaht",
        },
        {
          term: "kulay",
          meaning: "color",
          pronunciation: "koo-lahy",
        },
        {
          term: "timbang",
          meaning: "weight",
        },
        {
          term: "dami",
          meaning: "quantity",
        },
        {
          term: "piraso",
          meaning: "piece",
          pronunciation: "pee-rah-soh",
        },
        {
          term: "pares",
          meaning: "pair",
        },
        {
          term: "kilo",
          meaning: "kilogram",
        },
        {
          term: "kalahati",
          meaning: "half",
        },
        {
          term: "buo",
          meaning: "whole",
        },
        {
          term: "stock",
          meaning: "available inventory",
        },
        {
          term: "sako",
          meaning: "sack",
        },
        {
          term: "supot",
          meaning: "bag",
        },
        {
          term: "bayong",
          meaning: "woven market bag",
        },
      ],
    },
    {
      title: "C. Common Items Purchased",
      items: [
        {
          term: "damit",
          meaning: "clothes",
        },
        {
          term: "kamiseta",
          meaning: "shirt",
        },
        {
          term: "pantalon",
          meaning: "pants",
        },
        {
          term: "palda",
          meaning: "skirt",
        },
        {
          term: "sapatos",
          meaning: "shoes",
        },
        {
          term: "tsinelas",
          meaning: "slippers",
        },
        {
          term: "bag",
          meaning: "bag",
        },
        {
          term: "kuwaderno",
          meaning: "notebook",
        },
        {
          term: "lapis",
          meaning: "pencil",
        },
        {
          term: "bolpen",
          meaning: "ballpen",
        },
        {
          term: "bigas",
          meaning: "rice",
        },
        {
          term: "gulay",
          meaning: "vegetables",
        },
        {
          term: "prutas",
          meaning: "fruits",
        },
        {
          term: "karne",
          meaning: "meat",
        },
        {
          term: "isda",
          meaning: "fish",
        },
        {
          term: "itlog",
          meaning: "egg",
        },
        {
          term: "gatas",
          meaning: "milk",
        },
        {
          term: "sabon",
          meaning: "soap",
        },
        {
          term: "shampoo",
          meaning: "shampoo",
        },
        {
          term: "toothpaste",
          meaning: "toothpaste",
        },
      ],
    },
    {
      title: "D. Useful Words for Describing Products",
      items: [
        {
          term: "mura",
          meaning: "cheap or inexpensive",
        },
        {
          term: "mahal",
          meaning: "expensive",
        },
        {
          term: "bago",
          meaning: "new",
        },
        {
          term: "luma",
          meaning: "old",
        },
        {
          term: "maganda",
          meaning: "beautiful or nice",
        },
        {
          term: "matibay",
          meaning: "durable",
          pronunciation: "mah-tee-bah-y",
        },
        {
          term: "malaki",
          meaning: "big",
        },
        {
          term: "maliit",
          meaning: "small",
        },
        {
          term: "mahaba",
          meaning: "long",
        },
        {
          term: "maikli",
          meaning: "short",
        },
        {
          term: "magaan",
          meaning: "light in weight",
          pronunciation: "mah-gah-ahn",
        },
        {
          term: "mabigat",
          meaning: "heavy",
          pronunciation: "mah-bee-gaht",
        },
        {
          term: "malambot",
          meaning: "soft",
        },
        {
          term: "matigas",
          meaning: "hard",
        },
        {
          term: "sapat",
          meaning: "enough",
        },
        {
          term: "kulang",
          meaning: "insufficient",
        },
        {
          term: "pareho",
          meaning: "same",
        },
        {
          term: "magkaiba",
          meaning: "different",
        },
        {
          term: "mas mura",
          meaning: "cheaper",
        },
        {
          term: "mas mahal",
          meaning: "more expensive",
        },
      ],
    },
    {
      title: "E. Expressions Used When Shopping",
      items: [
        {
          term: "Magkano po ito?",
          meaning: "How much is this?",
        },
        {
          term: "Magkano po ang bawat isa?",
          meaning: "How much is each one?",
        },
        {
          term: "Mayroon pa po ba kayo nito?",
          meaning: "Do you still have this?",
        },
        {
          term: "May iba pa po ba kayong kulay?",
          meaning: "Do you have other colors?",
        },
        {
          term: "May mas malaking sukat po ba?",
          meaning: "Do you have a larger size?",
        },
        {
          term: "Maaari ko po bang tingnan?",
          meaning: "May I look at it?",
        },
        {
          term: "Maaari ko po bang subukan?",
          meaning: "May I try it on?",
        },
        {
          term: "Bibili po ako nito.",
          meaning: "I will buy this.",
        },
        {
          term: "Dalawa po ang kukunin ko.",
          meaning: "I will get two.",
        },
        {
          term: "Maaari po bang humingi ng diskuwento?",
          meaning: "May I ask for a discount?",
        },
        {
          term: "May sale po ba kayo?",
          meaning: "Do you have a sale?",
        },
        {
          term: "Sobra po ang presyo.",
          meaning: "The price is too high.",
        },
        {
          term: "Sige po, kukunin ko na.",
          meaning: "All right, I will take it.",
        },
        {
          term: "Hindi ko na lang po kukunin.",
          meaning: "I will not take it after all.",
        },
        {
          term: "Puwede po bang magbayad gamit ang card?",
          meaning: "Can I pay using a card?",
        },
      ],
    },
  ],
  pronunciationTip: "These are simplified pronunciation guides for learners. Final audio recordings should be reviewed by a Filipino language speaker.",
  languageNotes: [
    {
      title: "A. Asking About Prices",
      body: [
        "When shopping, one of the most common questions is asking how much an item costs.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Magkano po ito?",
          meaning: "How much is this?",
        },
        {
          text: "Magkano po ang isang kilo?",
          meaning: "How much is one kilogram?",
        },
        {
          text: "Magkano po ang bawat piraso?",
          meaning: "How much is each piece?",
        },
        {
          text: "Magkano po lahat?",
          meaning: "How much is everything?",
        },
        {
          text: "Bakit po ganoon kamahal?",
          meaning: "Why is it that expensive?",
        },
        {
          text: "Magkano po ang isang kilo ng mangga?",
          meaning: "How much is one kilogram of mangoes?",
        },
        {
          text: "Magkano po ang pares ng sapatos na ito?",
          meaning: "How much is this pair of shoes?",
        },
        {
          text: "Magkano po lahat ang mga pinamili ko?",
          meaning: "How much are all the things I bought?",
        },
      ],
    },
    {
      title: "B. Asking About Product Availability",
      body: [
        "Sometimes, you may want to know whether a particular product is available in another size, color, or quantity.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Mayroon pa po ba kayong ganito?",
          meaning: "Do you still have something like this?",
        },
        {
          text: "May iba pa po ba kayong kulay?",
          meaning: "Do you have other colors?",
        },
        {
          text: "May mas malaking sukat po ba?",
          meaning: "Do you have a larger size?",
        },
        {
          text: "May mas maliit po ba nito?",
          meaning: "Do you have a smaller one?",
        },
        {
          text: "May stock pa po ba kayo?",
          meaning: "Do you still have stock?",
        },
      ],
    },
    {
      title: "B. Asking About Product Availability",
      body: [
        "Customer: Mayroon po ba kayong kulay itim?",
        "Seller: Opo. Mayroon po kaming itim at puti.",
        "Customer: Mayroon din po ba kayong medium na sukat?",
        "Seller: Opo. Narito po.",
      ],
    },
    {
      title: "C. Asking About Sizes and Trying Products",
      body: [
        "When buying clothes or shoes, it is useful to know how to ask about sizes and fitting.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Anong sukat po ang mayroon kayo?",
          meaning: "What sizes do you have?",
        },
        {
          text: "Mayroon po ba nito sa large?",
          meaning: "Do you have this in large?",
        },
        {
          text: "Maaari ko po bang subukan?",
          meaning: "May I try it on?",
        },
        {
          text: "Saan po ang fitting room?",
          meaning: "Where is the fitting room?",
        },
        {
          text: "Medyo maliit po ito sa akin.",
          meaning: "This is a little small for me.",
        },
        {
          text: "Maluwag po ito.",
          meaning: "This is loose.",
        },
        {
          text: "Sakto po ang sukat nito.",
          meaning: "This is the right size.",
        },
        {
          text: "Masyadong mahaba ang pantalon na ito.",
          meaning: "These pants are too long.",
        },
        {
          text: "Mas gusto ko po ang mas malaking sukat.",
          meaning: "I prefer a larger size.",
        },
        {
          text: "Mayroon po ba kayong ibang modelo?",
          meaning: "Do you have another style?",
        },
      ],
    },
    {
      title: "D. Asking for Discounts and Bargaining",
      body: [
        "In public markets and some small shops, customers may ask whether a seller can lower the price.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Maaari po bang humingi ng diskuwento?",
          meaning: "May I ask for a discount?",
        },
        {
          text: "Wala na po bang tawad?",
          meaning: "Is there no room for a lower price?",
        },
        {
          text: "Puwede po bang bawasan nang kaunti?",
          meaning: "Could you lower the price a little?",
        },
        {
          text: "May diskuwento po ba kapag dalawa ang binili?",
          meaning: "Is there a discount if I buy two?",
        },
        {
          text: "Sige po, kukunin ko na kung may diskuwento.",
          meaning: "All right, I will take it if there is a discount.",
        },
      ],
    },
    {
      title: "D. Asking for Discounts and Bargaining",
      body: [
        "Customer: Magkano po ang bag na ito?",
        "Seller: Animnaraang piso po.",
        "Customer: Maaari po bang humingi ng diskuwento?",
        "Seller: Limampung piso na lang po ang bawas.",
        "Customer: Sige po. Kukunin ko na.",
        "Note: Bargaining is more common in some markets and informal shops. It may not be appropriate in fixed-price stores, supermarkets, or department stores.",
      ],
    },
    {
      title: "E. Expressing Quantities",
      body: [
        "When buying groceries or other goods, you need to specify how much or how many items you want.",
      ],
      table: {
        leftHeading: "Filipino Expression",
        rightHeading: "English Meaning",
        rows: [
          {
            left: "isang kilo ng bigas",
            right: "one kilogram of rice",
          },
          {
            left: "kalahating kilo ng karne",
            right: "half a kilogram of meat",
          },
          {
            left: "dalawang piraso ng mangga",
            right: "two pieces of mango",
          },
          {
            left: "isang dosenang itlog",
            right: "one dozen eggs",
          },
          {
            left: "tatlong bote ng tubig",
            right: "three bottles of water",
          },
          {
            left: "dalawang pares ng tsinelas",
            right: "two pairs of slippers",
          },
          {
            left: "isang supot ng asukal",
            right: "one bag of sugar",
          },
          {
            left: "isang pakete ng gatas",
            right: "one packet of milk",
          },
        ],
      },
      examples: [
        {
          text: "Bibili ako ng dalawang kilo ng bigas.",
          meaning: "I will buy two kilograms of rice.",
        },
        {
          text: "Pahingi po ng kalahating kilo ng manok.",
          meaning: "May I have half a kilogram of chicken?",
        },
        {
          text: "Tatlong piraso po ng saging.",
          meaning: "Three pieces of bananas, please.",
        },
      ],
    },
    {
      title: "F. Comparing Products",
      body: [
        "You may need to compare two products before deciding which one to buy.",
        "Useful comparison patterns:",
      ],
      examples: [
        {
          text: "Mas + adjective + kaysa sa...",
          meaning: "More ... than ...",
        },
        {
          text: "Hindi gaanong + adjective",
          meaning: "Not very ...",
        },
        {
          text: "Pinakamura",
          meaning: "Cheapest",
        },
        {
          text: "Pinakamahal",
          meaning: "Most expensive",
        },
        {
          text: "Mas mura ang bag na ito kaysa sa isa.",
          meaning: "This bag is cheaper than the other one.",
        },
        {
          text: "Mas matibay ang sapatos na iyon.",
          meaning: "Those shoes are more durable.",
        },
        {
          text: "Ito ang pinakamurang produkto sa tindahan.",
          meaning: "This is the cheapest product in the store.",
        },
        {
          text: "Hindi gaanong mahal ang damit na ito.",
          meaning: "This clothing item is not very expensive.",
        },
      ],
    },
    {
      title: "G. Completing a Purchase",
      body: [
        "After choosing an item, you need to confirm your purchase and pay.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Kukunin ko na po ito.",
          meaning: "I will take this.",
        },
        {
          text: "Ito na lang po ang bibilhin ko.",
          meaning: "I will buy this one instead.",
        },
        {
          text: "Magkano po lahat?",
          meaning: "How much is everything?",
        },
        {
          text: "Heto po ang bayad.",
          meaning: "Here is the payment.",
        },
        {
          text: "Pakibigay na lang po ang resibo.",
          meaning: "Please give me the receipt.",
        },
        {
          text: "Salamat po.",
          meaning: "Thank you.",
        },
      ],
    },
    {
      title: "G. Completing a Purchase",
      body: [
        "Customer: Kukunin ko na po ang dalawang kamiseta.",
        "Seller: Isang libong piso po lahat.",
        "Customer: Heto po ang bayad.",
        "Seller: Narito po ang inyong resibo.",
      ],
    },
    {
      title: "H. Important Grammar: Using \"Mas\" for Comparisons",
      body: [
        "The word mas is used to compare qualities or characteristics.",
        "Pattern:",
        "Mas + descriptive word + kaysa sa + comparison",
      ],
      examples: [
        {
          text: "Mas mura ito kaysa sa isa.",
          meaning: "This is cheaper than the other one.",
        },
        {
          text: "Mas malaki ang bag na iyon kaysa rito.",
          meaning: "That bag is bigger than this one.",
        },
        {
          text: "Mas maganda ang kulay asul para sa akin.",
          meaning: "The blue color looks better to me.",
        },
      ],
    },
    {
      title: "I. Important Grammar: Quantity Expressions",
      body: [
        "Filipino uses different quantity words depending on the object being counted or measured.",
      ],
      examples: [
        {
          text: "isang kilo ng bigas",
          meaning: "one kilogram of rice",
        },
        {
          text: "dalawang bote ng tubig",
          meaning: "two bottles of water",
        },
        {
          text: "tatlong piraso ng mangga",
          meaning: "three pieces of mango",
        },
        {
          text: "isang pares ng sapatos",
          meaning: "one pair of shoes",
        },
        {
          text: "isang dosenang itlog",
          meaning: "one dozen eggs",
        },
      ],
      remember: "Use a suitable quantity expression to make your request clear. For example, isang pares is appropriate for shoes, while isang kilo is appropriate for products sold by weight.",
    },
    {
      title: "Lesson Summary",
      body: [
        "This lesson introduced useful Filipino vocabulary and expressions for shopping and buying.",
      ],
      table: {
        leftHeading: "Expression",
        rightHeading: "Purpose",
        rows: [
          {
            left: "Magkano po ito?",
            right: "Asking for the price",
          },
          {
            left: "May iba pa po ba kayong kulay?",
            right: "Asking about available colors",
          },
          {
            left: "May mas malaking sukat po ba?",
            right: "Asking for another size",
          },
          {
            left: "Pahingi po ng...",
            right: "Requesting an item",
          },
          {
            left: "Maaari po bang humingi ng diskuwento?",
            right: "Asking for a discount",
          },
          {
            left: "Kalahating kilo po.",
            right: "Specifying quantity",
          },
          {
            left: "Mas mura ito kaysa sa isa.",
            right: "Comparing prices",
          },
          {
            left: "Kukunin ko na po ito.",
            right: "Confirming a purchase",
          },
          {
            left: "Magkano po lahat?",
            right: "Asking for the total",
          },
          {
            left: "Pakibigay na lang po ang resibo.",
            right: "Requesting a receipt",
          },
        ],
      },
      remember: "Shopping conversations involve more than asking for prices. You should also be able to describe what you need, compare available products, specify quantities, and confirm your purchase politely.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Buying Vegetables at the Market",
      lines: [
        {
          speaker: "Customer",
          text: "Magandang umaga po. Magkano po ang isang kilo ng kamatis?",
          translation: "Good morning. How much is one kilogram of tomatoes?",
        },
        {
          speaker: "Seller",
          text: "Animnapung piso po.",
          translation: "Sixty pesos.",
        },
        {
          speaker: "Customer",
          text: "Puwede po bang kalahating kilo lang?",
          translation: "Can I have just half a kilogram?",
        },
        {
          speaker: "Seller",
          text: "Opo. May iba pa po ba kayong kailangan?",
          translation: "Yes. Do you need anything else?",
        },
        {
          speaker: "Customer",
          text: "Pahingi rin po ng isang kilo ng patatas.",
          translation: "I would also like one kilogram of potatoes.",
        },
        {
          speaker: "Seller",
          text: "Sige po. Isasabay ko na.",
          translation: "All right. I will include those.",
        },
        {
          speaker: "Customer",
          text: "Magkano po lahat?",
          translation: "How much is everything?",
        },
        {
          speaker: "Seller",
          text: "Isang daan at sampung piso po.",
          translation: "One hundred and ten pesos.",
        },
      ],
    },
    {
      title: "Conversation 2: Buying Clothes",
      lines: [
        {
          speaker: "Customer",
          text: "Magandang hapon po. Magkano po ang kamiseta na ito?",
          translation: "Good afternoon. How much is this shirt?",
        },
        {
          speaker: "Seller",
          text: "Tatlong daan at limampung piso po.",
          translation: "Three hundred and fifty pesos.",
        },
        {
          speaker: "Customer",
          text: "May iba pa po ba kayong kulay?",
          translation: "Do you have other colors?",
        },
        {
          speaker: "Seller",
          text: "Opo. May itim, puti, at asul.",
          translation: "Yes. We have black, white, and blue.",
        },
        {
          speaker: "Customer",
          text: "Maaari ko po bang subukan ang kulay itim?",
          translation: "May I try the black one?",
        },
        {
          speaker: "Seller",
          text: "Opo. Nasa kaliwa po ang fitting room.",
          translation: "Yes. The fitting room is on the left.",
        },
        {
          speaker: "Customer",
          text: "Sakto po ang sukat. Kukunin ko na po ito.",
          translation: "The size fits perfectly. I will take it.",
        },
      ],
    },
    {
      title: "Conversation 3: Asking for a Discount",
      lines: [
        {
          speaker: "Customer",
          text: "Magkano po ang bag na ito?",
          translation: "How much is this bag?",
        },
        {
          speaker: "Seller",
          text: "Walong daang piso po.",
          translation: "Eight hundred pesos.",
        },
        {
          speaker: "Customer",
          text: "May diskuwento po ba kapag dalawa ang bibilhin?",
          translation: "Is there a discount if I buy two?",
        },
        {
          speaker: "Seller",
          text: "Maaari ko po kayong bigyan ng isang daan na diskuwento sa dalawang bag.",
          translation: "I can give you a one-hundred-peso discount on two bags.",
        },
        {
          speaker: "Customer",
          text: "Magkano po ang dalawang bag pagkatapos ng diskuwento?",
          translation: "How much are the two bags after the discount?",
        },
        {
          speaker: "Seller",
          text: "Isang libo at limang daang piso po.",
          translation: "One thousand five hundred pesos.",
        },
        {
          speaker: "Customer",
          text: "Sige po. Kukunin ko na ang dalawa.",
          translation: "All right. I will take both.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Answer all 15 questions.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does presyo mean?",
        options: [
          {
            key: "A",
            text: "Payment",
          },
          {
            key: "B",
            text: "Price",
          },
          {
            key: "C",
            text: "Receipt",
          },
          {
            key: "D",
            text: "Change",
          },
        ],
        answerKey: "B",
        title: "Part A: Multiple Choice",
      },
      {
        id: 2,
        prompt: "Which expression asks for a discount?",
        options: [
          {
            key: "A",
            text: "Magkano po ito?",
          },
          {
            key: "B",
            text: "Mayroon po ba kayo nito?",
          },
          {
            key: "C",
            text: "Maaari po bang humingi ng diskuwento?",
          },
          {
            key: "D",
            text: "Saan po ang tindahan?",
          },
        ],
        answerKey: "C",
        title: "Part A: Multiple Choice",
      },
      {
        id: 3,
        prompt: "What does kalahating kilo mean?",
        options: [
          {
            key: "A",
            text: "One kilogram",
          },
          {
            key: "B",
            text: "Two kilograms",
          },
          {
            key: "C",
            text: "Half a kilogram",
          },
          {
            key: "D",
            text: "Three kilograms",
          },
        ],
        answerKey: "C",
        title: "Part A: Multiple Choice",
      },
      {
        id: 4,
        prompt: "Which word means \"change\" in a shopping transaction?",
        options: [
          {
            key: "A",
            text: "Sukli",
          },
          {
            key: "B",
            text: "Sukat",
          },
          {
            key: "C",
            text: "Presyo",
          },
          {
            key: "D",
            text: "Piraso",
          },
        ],
        answerKey: "A",
        title: "Part A: Multiple Choice",
      },
      {
        id: 5,
        prompt: "What does mas mura mean?",
        options: [
          {
            key: "A",
            text: "More expensive",
          },
          {
            key: "B",
            text: "Cheaper",
          },
          {
            key: "C",
            text: "Bigger",
          },
          {
            key: "D",
            text: "Heavier",
          },
        ],
        answerKey: "B",
        title: "Part A: Multiple Choice",
      },
    ],
  },
  extraActivities: [
    {
      title: "Match the Vocabulary",
      kind: "match",
      instructions: "Match each Filipino word with its English meaning.",
      items: [
        "Presyo",
        "Sukli",
        "Piraso",
        "Diskuwento",
        "Resibo",
      ],
      choices: [
        "Change",
        "Price",
        "Discount",
        "Piece",
        "Receipt",
      ],
    },
    {
      title: "Choose the Correct Expression",
      kind: "rewrite",
      items: [
        "You want to ask how much a shirt costs.\nA. Magkano po ang kamiseta?\nB. Saan po ang kamiseta?\nC. Kailan po ang kamiseta?",
        "You want to ask whether another color is available.\nA. May iba pa po ba kayong kulay?\nB. Magkano po lahat?\nC. Gusto ko po ng tubig.",
        "You want to ask for half a kilogram of rice.\nA. Isang kilo po ng bigas.\nB. Kalahating kilo po ng bigas.\nC. Dalawang piraso po ng bigas.",
        "You want to ask for a discount.\nA. Maaari po bang humingi ng diskuwento?\nB. Maaari po bang humingi ng resibo?\nC. Maaari po bang umupo?",
        "You want to say that you will buy the item.\nA. Hindi ko po alam.\nB. Kukunin ko na po ito.\nC. Saan po kayo pupunta?",
      ],
    },
    {
      title: "Fill in the Blanks",
      kind: "fill",
      instructions: "Choose the correct word from the choices.",
      items: [
        "Magkano po ang ______ ng bag na ito?",
        "Maaari po bang humingi ng ______?",
        "Dalawang ______ po ng mangga ang bibilhin ko.",
        "Mayroon po ba kayo ng mas malaking ______?",
        "Magkano po ang aking ______ kung limang daang piso ang ibabayad ko?",
      ],
      choices: [
        "presyo",
        "sukli",
        "diskuwento",
        "piraso",
        "sukat",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a correct Filipino sentence.",
      items: [
        "po / Magkano / ito",
        "ng / kilo / isang / bigas / Pahingi / po",
        "po / May / ibang / ba / kulay / kayo",
        "ko / ito / na / Kukunin / po",
        "po / diskuwento / Maaari / humingi / bang / ng",
      ],
    },
    {
      title: "Translate into Filipino",
      kind: "translate",
      instructions: "Translate the following sentences.",
      items: [
        "How much is one kilogram of apples?",
        "Do you have a larger size?",
        "I will buy two pieces of bread.",
        "May I ask for a discount?",
        "This bag is cheaper than that bag.",
      ],
    },
    {
      title: "Shopping Role-Playing",
      kind: "roleplay",
      instructions: "Pair up with another learner.\nOne learner will act as the customer, while the other will act as the seller.\nCustomer's task:",
      items: [
        "Ask about the price of at least two products.",
        "Ask whether another size or color is available.",
        "Request a specific quantity.",
        "Ask for a discount.",
        "Confirm the purchase and pay.",
        "Greet the customer.",
        "Explain the available products and prices.",
        "Answer questions about sizes, colors, and quantities.",
        "Respond to a discount request.",
        "Calculate the total amount and provide a receipt.",
      ],
      note: "Seller's task:\nLearners should use at least six expressions from the lesson.",
    },
    {
      title: "Lesson Assessment – Part B: Fill in the Blanks",
      kind: "assessment",
      items: [
        "Magkano po ang ______ ng sapatos na ito?",
        "Mayroon po ba kayo ng mas malaking ______?",
        "Dalawang ______ po ng mangga ang bibilhin ko.",
        "Puwede po bang humingi ng ______?",
        "Magkano po ang aking ______ kung sobra ang ibinayad ko?",
      ],
      answers: [
        "presyo",
        "sukat",
        "piraso",
        "diskuwento",
        "sukli",
      ],
    },
    {
      title: "Lesson Assessment – Part C: Situational Responses",
      kind: "assessment",
      items: [
        "You are buying one kilogram of rice. Write your request in Filipino.",
        "You want to know whether a clothing store has a medium-sized shirt. What would you ask?",
        "You want to compare two bags and say that the first one is cheaper. Write the sentence in Filipino.",
        "You want to buy three pieces of bread. Write your request in Filipino.",
        "You have decided to purchase an item. What would you say to the seller?",
      ],
      answers: [
        "Pahingi po ng isang kilo ng bigas.",
        "Mayroon po ba kayo ng kamiseta na medium ang sukat?",
        "Mas mura ang unang bag kaysa sa pangalawang bag.",
        "Pahingi po ng tatlong piraso ng tinapay.",
        "Kukunin ko na po ito.",
      ],
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Complete the vocabulary lesson + Complete the shopping expression exercises",
        xp: 25,
      },
      {
        section: "conversation",
        label: "Finish the guided conversation activity + Complete the shopping role-playing activity",
        xp: 25,
      },
      {
        section: "assessment",
        label: "Pass the lesson assessment",
        xp: 20,
      },
    ],
    total: 70,
    badge: {
      name: "Smart Shopper Badge",
      description: "Awarded when the learner completes the lesson and successfully performs a shopping conversation using appropriate Filipino expressions.",
    },
    completionRequirement: "Finish all lesson sections. Complete the required practice activities. Obtain at least 70% in the assessment. Complete the shopping role-playing activity.",
  },
  expectedOutcomes: [
    "Recognize common shopping vocabulary.",
    "Ask about prices and product availability.",
    "Specify quantities and sizes.",
    "Compare products.",
    "Ask about discounts when appropriate.",
    "Complete simple buying and selling transactions.",
    "The learner can participate in basic shopping conversations in Filipino, ask relevant questions about products, and communicate purchasing decisions clearly and politely.",
  ],
};
