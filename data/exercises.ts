import { Question } from "@/components/ExerciseEngine";

// ============================================
// A1 LEVEL - BEGINNER (100 exercises)
// ============================================

export const exercicesA1: Question[] = [
    // Verb "to be" - Present (15 exercises)
    {
        id: "a1-1",
        type: "MCQ",
        question: "I ___ a teacher.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 0,
        explanation: "With 'I', we always use 'am'."
    },
    {
        id: "a1-2",
        type: "MCQ",
        question: "She ___ from France.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 1,
        explanation: "With 'she/he/it', we use 'is'."
    },
    {
        id: "a1-3",
        type: "MCQ",
        question: "They ___ students.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 2,
        explanation: "With 'they/we/you', we use 'are'."
    },
    {
        id: "a1-4",
        type: "GapFill",
        question: "My name ___ John.",
        correctAnswer: "is",
        explanation: "'My name' is third person singular, so we use 'is'."
    },
    {
        id: "a1-5",
        type: "MCQ",
        question: "We ___ happy.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 2,
        explanation: "With 'we', we use 'are'."
    },
    {
        id: "a1-6",
        type: "GapFill",
        question: "You ___ late.",
        correctAnswer: "are",
        explanation: "With 'you', we use 'are'."
    },
    {
        id: "a1-7",
        type: "MCQ",
        question: "It ___ cold today.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 1,
        explanation: "With 'it', we use 'is'."
    },
    {
        id: "a1-8",
        type: "MCQ",
        question: "The cat ___ black.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 1,
        explanation: "'The cat' is singular (third person), so we use 'is'."
    },
    {
        id: "a1-9",
        type: "GapFill",
        question: "The books ___ on the table.",
        correctAnswer: "are",
        explanation: "'Books' is plural, so we use 'are'."
    },
    {
        id: "a1-10",
        type: "MCQ",
        question: "My brother ___ tall.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 1,
        explanation: "'My brother' is third person singular, so we use 'is'."
    },
    {
        id: "a1-11",
        type: "GapFill",
        question: "I ___ tired.",
        correctAnswer: "am",
        explanation: "With 'I', we always use 'am'."
    },
    {
        id: "a1-12",
        type: "MCQ",
        question: "The children ___ in the park.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 2,
        explanation: "'Children' is plural, so we use 'are'."
    },
    {
        id: "a1-13",
        type: "GapFill",
        question: "This ___ my car.",
        correctAnswer: "is",
        explanation: "'This' refers to a singular thing, so we use 'is'."
    },
    {
        id: "a1-14",
        type: "MCQ",
        question: "You and I ___ friends.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 2,
        explanation: "'You and I' = 'we', so we use 'are'."
    },
    {
        id: "a1-15",
        type: "GapFill",
        question: "The weather ___ nice.",
        correctAnswer: "is",
        explanation: "'Weather' is singular, so we use 'is'."
    },

    // Articles a/an/the (15 exercises)
    {
        id: "a1-16",
        type: "MCQ",
        question: "___ apple a day keeps the doctor away.",
        options: ["A", "An", "The", "No article"],
        correctAnswer: 1,
        explanation: "We use 'an' before words starting with a vowel sound."
    },
    {
        id: "a1-17",
        type: "MCQ",
        question: "I have ___ dog.",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 0,
        explanation: "We use 'a' before consonant sounds when mentioning something for the first time."
    },
    {
        id: "a1-18",
        type: "GapFill",
        question: "She is ___ engineer.",
        correctAnswer: "an",
        explanation: "'Engineer' starts with a vowel sound, so we use 'an'."
    },
    {
        id: "a1-19",
        type: "MCQ",
        question: "Look at ___ moon!",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 2,
        explanation: "We use 'the' for unique things like the moon, sun, etc."
    },
    {
        id: "a1-20",
        type: "GapFill",
        question: "I need ___ umbrella.",
        correctAnswer: "an",
        explanation: "'Umbrella' starts with a vowel sound, so we use 'an'."
    },
    {
        id: "a1-21",
        type: "MCQ",
        question: "He is ___ honest man.",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 1,
        explanation: "'Honest' starts with a vowel sound (the 'h' is silent), so we use 'an'."
    },
    {
        id: "a1-22",
        type: "GapFill",
        question: "This is ___ book I told you about.",
        correctAnswer: "the",
        explanation: "We use 'the' when referring to a specific thing already mentioned."
    },
    {
        id: "a1-23",
        type: "MCQ",
        question: "I want ___ orange.",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 1,
        explanation: "'Orange' starts with a vowel sound, so we use 'an'."
    },
    {
        id: "a1-24",
        type: "GapFill",
        question: "She plays ___ piano.",
        correctAnswer: "the",
        explanation: "We use 'the' with musical instruments."
    },
    {
        id: "a1-25",
        type: "MCQ",
        question: "I saw ___ elephant at the zoo.",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 1,
        explanation: "'Elephant' starts with a vowel sound, so we use 'an'."
    },
    {
        id: "a1-26",
        type: "GapFill",
        question: "Can you close ___ door, please?",
        correctAnswer: "the",
        explanation: "We use 'the' when both speaker and listener know which door."
    },
    {
        id: "a1-27",
        type: "MCQ",
        question: "He is ___ university student.",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 0,
        explanation: "'University' starts with a consonant sound (/j/), so we use 'a'."
    },
    {
        id: "a1-28",
        type: "GapFill",
        question: "I live in ___ house near the park.",
        correctAnswer: "a",
        explanation: "First mention of a non-specific house, so we use 'a'."
    },
    {
        id: "a1-29",
        type: "MCQ",
        question: "She wants to be ___ actor.",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 1,
        explanation: "'Actor' starts with a vowel sound, so we use 'an'."
    },
    {
        id: "a1-30",
        type: "GapFill",
        question: "___ Earth is round.",
        correctAnswer: "The",
        explanation: "We use 'the' with unique celestial bodies."
    },

    // Plurals (15 exercises)
    {
        id: "a1-31",
        type: "MCQ",
        question: "What is the plural of 'book'?",
        options: ["books", "bookes", "book", "bookies"],
        correctAnswer: 0,
        explanation: "Most nouns form the plural by adding '-s'."
    },
    {
        id: "a1-32",
        type: "MCQ",
        question: "What is the plural of 'box'?",
        options: ["boxs", "boxes", "boxies", "box"],
        correctAnswer: 1,
        explanation: "Nouns ending in -x, -s, -sh, -ch add '-es'."
    },
    {
        id: "a1-33",
        type: "GapFill",
        question: "I have two ___. (cat)",
        correctAnswer: "cats",
        explanation: "Add '-s' to form the plural of 'cat'."
    },
    {
        id: "a1-34",
        type: "MCQ",
        question: "What is the plural of 'child'?",
        options: ["childs", "childes", "children", "childrens"],
        correctAnswer: 2,
        explanation: "'Child' is an irregular plural."
    },
    {
        id: "a1-35",
        type: "GapFill",
        question: "There are many ___ in the garden. (flower)",
        correctAnswer: "flowers",
        explanation: "Add '-s' to form the plural of 'flower'."
    },
    {
        id: "a1-36",
        type: "MCQ",
        question: "What is the plural of 'man'?",
        options: ["mans", "men", "manes", "mens"],
        correctAnswer: 1,
        explanation: "'Man' is an irregular plural."
    },
    {
        id: "a1-37",
        type: "GapFill",
        question: "I bought three ___. (apple)",
        correctAnswer: "apples",
        explanation: "Add '-s' to form the plural of 'apple'."
    },
    {
        id: "a1-38",
        type: "MCQ",
        question: "What is the plural of 'tooth'?",
        options: ["tooths", "teeths", "teeth", "toothes"],
        correctAnswer: 2,
        explanation: "'Tooth' is an irregular plural."
    },
    {
        id: "a1-39",
        type: "GapFill",
        question: "She has two ___. (dog)",
        correctAnswer: "dogs",
        explanation: "Add '-s' to form the plural of 'dog'."
    },
    {
        id: "a1-40",
        type: "MCQ",
        question: "What is the plural of 'foot'?",
        options: ["foots", "feets", "feet", "footes"],
        correctAnswer: 2,
        explanation: "'Foot' is an irregular plural."
    },
    {
        id: "a1-41",
        type: "GapFill",
        question: "There are five ___ on the shelf. (book)",
        correctAnswer: "books",
        explanation: "Add '-s' to form the plural of 'book'."
    },
    {
        id: "a1-42",
        type: "MCQ",
        question: "What is the plural of 'mouse'?",
        options: ["mouses", "mice", "mices", "mouse"],
        correctAnswer: 1,
        explanation: "'Mouse' is an irregular plural."
    },
    {
        id: "a1-43",
        type: "GapFill",
        question: "I see three ___ in the sky. (bird)",
        correctAnswer: "birds",
        explanation: "Add '-s' to form the plural of 'bird'."
    },
    {
        id: "a1-44",
        type: "MCQ",
        question: "What is the plural of 'woman'?",
        options: ["womans", "women", "womens", "womanes"],
        correctAnswer: 1,
        explanation: "'Woman' is an irregular plural."
    },
    {
        id: "a1-45",
        type: "GapFill",
        question: "We have four ___ in our house. (room)",
        correctAnswer: "rooms",
        explanation: "Add '-s' to form the plural of 'room'."
    },

    // Present Simple (20 exercises)
    {
        id: "a1-46",
        type: "MCQ",
        question: "She ___ to school every day.",
        options: ["go", "goes", "going", "went"],
        correctAnswer: 1,
        explanation: "Third person singular (she/he/it) takes '-s' or '-es' in present simple."
    },
    {
        id: "a1-47",
        type: "GapFill",
        question: "I ___ coffee every morning. (drink)",
        correctAnswer: "drink",
        explanation: "With 'I/you/we/they', we use the base form of the verb."
    },
    {
        id: "a1-48",
        type: "MCQ",
        question: "They ___ football on Sundays.",
        options: ["play", "plays", "playing", "played"],
        correctAnswer: 0,
        explanation: "With 'they', we use the base form of the verb."
    },
    {
        id: "a1-49",
        type: "GapFill",
        question: "He ___ TV in the evening. (watch)",
        correctAnswer: "watches",
        explanation: "Verbs ending in -ch, -sh, -s, -x, -o add '-es' for third person singular."
    },
    {
        id: "a1-50",
        type: "MCQ",
        question: "We ___ English at school.",
        options: ["learn", "learns", "learning", "learned"],
        correctAnswer: 0,
        explanation: "With 'we', we use the base form of the verb."
    },
    {
        id: "a1-51",
        type: "GapFill",
        question: "She ___ her homework after dinner. (do)",
        correctAnswer: "does",
        explanation: "'Do' becomes 'does' for third person singular."
    },
    {
        id: "a1-52",
        type: "MCQ",
        question: "I ___ my teeth twice a day.",
        options: ["brush", "brushes", "brushing", "brushed"],
        correctAnswer: 0,
        explanation: "With 'I', we use the base form of the verb."
    },
    {
        id: "a1-53",
        type: "GapFill",
        question: "The sun ___ in the east. (rise)",
        correctAnswer: "rises",
        explanation: "Third person singular adds '-s'."
    },
    {
        id: "a1-54",
        type: "MCQ",
        question: "You ___ very well.",
        options: ["sing", "sings", "singing", "sang"],
        correctAnswer: 0,
        explanation: "With 'you', we use the base form of the verb."
    },
    {
        id: "a1-55",
        type: "GapFill",
        question: "My cat ___ milk. (like)",
        correctAnswer: "likes",
        explanation: "Third person singular adds '-s'."
    },
    {
        id: "a1-56",
        type: "MCQ",
        question: "We ___ to the gym twice a week.",
        options: ["go", "goes", "going", "went"],
        correctAnswer: 0,
        explanation: "With 'we', we use the base form of the verb."
    },
    {
        id: "a1-57",
        type: "GapFill",
        question: "He ___ his car every Saturday. (wash)",
        correctAnswer: "washes",
        explanation: "Verbs ending in -sh add '-es' for third person singular."
    },
    {
        id: "a1-58",
        type: "MCQ",
        question: "They ___ in a big house.",
        options: ["live", "lives", "living", "lived"],
        correctAnswer: 0,
        explanation: "With 'they', we use the base form of the verb."
    },
    {
        id: "a1-59",
        type: "GapFill",
        question: "She ___ to work by bus. (go)",
        correctAnswer: "goes",
        explanation: "'Go' becomes 'goes' for third person singular."
    },
    {
        id: "a1-60",
        type: "MCQ",
        question: "I ___ my parents every weekend.",
        options: ["visit", "visits", "visiting", "visited"],
        correctAnswer: 0,
        explanation: "With 'I', we use the base form of the verb."
    },
    {
        id: "a1-61",
        type: "GapFill",
        question: "The train ___ at 8 AM. (leave)",
        correctAnswer: "leaves",
        explanation: "Third person singular adds '-s'."
    },
    {
        id: "a1-62",
        type: "MCQ",
        question: "You ___ a lot of books.",
        options: ["read", "reads", "reading", "readed"],
        correctAnswer: 0,
        explanation: "With 'you', we use the base form of the verb."
    },
    {
        id: "a1-63",
        type: "GapFill",
        question: "It ___ a lot in winter. (rain)",
        correctAnswer: "rains",
        explanation: "Third person singular adds '-s'."
    },
    {
        id: "a1-64",
        type: "MCQ",
        question: "We ___ pizza on Fridays.",
        options: ["eat", "eats", "eating", "ate"],
        correctAnswer: 0,
        explanation: "With 'we', we use the base form of the verb."
    },
    {
        id: "a1-65",
        type: "GapFill",
        question: "My sister ___ the piano. (play)",
        correctAnswer: "plays",
        explanation: "Third person singular adds '-s'."
    },

    // Possessives & Pronouns (15 exercises)
    {
        id: "a1-66",
        type: "MCQ",
        question: "This is ___ book.",
        options: ["I", "me", "my", "mine"],
        correctAnswer: 2,
        explanation: "We use 'my' before a noun to show possession."
    },
    {
        id: "a1-67",
        type: "GapFill",
        question: "That car is ___. (belong to him)",
        correctAnswer: "his",
        explanation: "'His' shows possession and can stand alone."
    },
    {
        id: "a1-68",
        type: "MCQ",
        question: "___ name is Sarah.",
        options: ["She", "Her", "Hers", "She's"],
        correctAnswer: 1,
        explanation: "We use 'her' before a noun to show possession."
    },
    {
        id: "a1-69",
        type: "GapFill",
        question: "Is this pen ___? (belong to you)",
        correctAnswer: "yours",
        explanation: "'Yours' shows possession and stands alone."
    },
    {
        id: "a1-70",
        type: "MCQ",
        question: "The dog wagged ___ tail.",
        options: ["it", "its", "it's", "its'"],
        correctAnswer: 1,
        explanation: "'Its' (without apostrophe) shows possession."
    },
    {
        id: "a1-71",
        type: "GapFill",
        question: "These books are ___. (belong to us)",
        correctAnswer: "ours",
        explanation: "'Ours' shows possession and stands alone."
    },
    {
        id: "a1-72",
        type: "MCQ",
        question: "___ house is very big.",
        options: ["They", "Them", "Their", "Theirs"],
        correctAnswer: 2,
        explanation: "We use 'their' before a noun to show possession."
    },
    {
        id: "a1-73",
        type: "GapFill",
        question: "The red bike is ___. (belong to me)",
        correctAnswer: "mine",
        explanation: "'Mine' shows possession and stands alone."
    },
    {
        id: "a1-74",
        type: "MCQ",
        question: "I like ___ new shoes.",
        options: ["you", "your", "yours", "you're"],
        correctAnswer: 1,
        explanation: "We use 'your' before a noun to show possession."
    },
    {
        id: "a1-75",
        type: "GapFill",
        question: "This is ___ classroom. (belong to we)",
        correctAnswer: "our",
        explanation: "'Our' shows possession before a noun."
    },
    {
        id: "a1-76",
        type: "MCQ",
        question: "The cat licked ___ paws.",
        options: ["it", "its", "it's", "its'"],
        correctAnswer: 1,
        explanation: "'Its' (without apostrophe) shows possession."
    },
    {
        id: "a1-77",
        type: "GapFill",
        question: "Is that jacket ___? (belong to her)",
        correctAnswer: "hers",
        explanation: "'Hers' shows possession and stands alone."
    },
    {
        id: "a1-78",
        type: "MCQ",
        question: "Where is ___ phone?",
        options: ["he", "him", "his", "he's"],
        correctAnswer: 2,
        explanation: "We use 'his' before a noun to show possession."
    },
    {
        id: "a1-79",
        type: "GapFill",
        question: "Those toys are ___. (belong to them)",
        correctAnswer: "theirs",
        explanation: "'Theirs' shows possession and stands alone."
    },
    {
        id: "a1-80",
        type: "MCQ",
        question: "I can't find ___ keys.",
        options: ["I", "me", "my", "mine"],
        correctAnswer: 2,
        explanation: "We use 'my' before a noun to show possession."
    },

    // Prepositions of place (10 exercises)
    {
        id: "a1-81",
        type: "MCQ",
        question: "The book is ___ the table.",
        options: ["in", "on", "at", "under"],
        correctAnswer: 1,
        explanation: "We use 'on' for surfaces."
    },
    {
        id: "a1-82",
        type: "GapFill",
        question: "The cat is ___ the box. (inside)",
        correctAnswer: "in",
        explanation: "'In' means inside an enclosed space."
    },
    {
        id: "a1-83",
        type: "MCQ",
        question: "She is waiting ___ the bus stop.",
        options: ["in", "on", "at", "under"],
        correctAnswer: 2,
        explanation: "We use 'at' for specific points or locations."
    },
    {
        id: "a1-84",
        type: "GapFill",
        question: "The dog is ___ the table. (below)",
        correctAnswer: "under",
        explanation: "'Under' means below or beneath something."
    },
    {
        id: "a1-85",
        type: "MCQ",
        question: "The picture is ___ the wall.",
        options: ["in", "on", "at", "between"],
        correctAnswer: 1,
        explanation: "We use 'on' for things attached to walls."
    },
    {
        id: "a1-86",
        type: "GapFill",
        question: "The bank is ___ the post office and the library.",
        correctAnswer: "between",
        explanation: "'Between' is used for position in the middle of two things."
    },
    {
        id: "a1-87",
        type: "MCQ",
        question: "I live ___ Paris.",
        options: ["in", "on", "at", "to"],
        correctAnswer: 0,
        explanation: "We use 'in' for cities and countries."
    },
    {
        id: "a1-88",
        type: "GapFill",
        question: "The keys are ___ the drawer.",
        correctAnswer: "in",
        explanation: "'In' means inside an enclosed space."
    },
    {
        id: "a1-89",
        type: "MCQ",
        question: "She sits ___ me in class.",
        options: ["next to", "in", "on", "at"],
        correctAnswer: 0,
        explanation: "'Next to' means beside or at the side of."
    },
    {
        id: "a1-90",
        type: "GapFill",
        question: "The lamp is ___ the desk.",
        correctAnswer: "on",
        explanation: "'On' is used for surfaces."
    },

    // Simple Questions (10 exercises)
    {
        id: "a1-91",
        type: "MCQ",
        question: "___ is your name?",
        options: ["Who", "What", "Where", "When"],
        correctAnswer: 1,
        explanation: "We use 'What' to ask about names."
    },
    {
        id: "a1-92",
        type: "GapFill",
        question: "___ are you from?",
        correctAnswer: "Where",
        explanation: "'Where' is used to ask about places."
    },
    {
        id: "a1-93",
        type: "MCQ",
        question: "___ old are you?",
        options: ["What", "How", "When", "Where"],
        correctAnswer: 1,
        explanation: "We use 'How' with adjectives to ask about degree or extent."
    },
    {
        id: "a1-94",
        type: "GapFill",
        question: "___ is your birthday?",
        correctAnswer: "When",
        explanation: "'When' is used to ask about time."
    },
    {
        id: "a1-95",
        type: "MCQ",
        question: "___ is that man?",
        options: ["Who", "What", "Where", "How"],
        correctAnswer: 0,
        explanation: "'Who' is used to ask about people."
    },
    {
        id: "a1-96",
        type: "GapFill",
        question: "___ do you live?",
        correctAnswer: "Where",
        explanation: "'Where' is used to ask about places."
    },
    {
        id: "a1-97",
        type: "MCQ",
        question: "___ is your favorite color?",
        options: ["Who", "What", "Where", "When"],
        correctAnswer: 1,
        explanation: "'What' is used to ask about things."
    },
    {
        id: "a1-98",
        type: "GapFill",
        question: "___ are you?",
        correctAnswer: "How",
        explanation: "'How are you?' is a common greeting."
    },
    {
        id: "a1-99",
        type: "MCQ",
        question: "___ time is it?",
        options: ["Who", "What", "Where", "How"],
        correctAnswer: 1,
        explanation: "'What time' is used to ask about the time."
    },
    {
        id: "a1-100",
        type: "GapFill",
        question: "___ is your phone number?",
        correctAnswer: "What",
        explanation: "'What' is used to ask about things and information."
    }
];

// Note: A2, B1, B2 levels will be generated similarly with 100+ exercises each
// This file will be extended in the next step

export const exercicesA2: Question[] = [
    // Will be populated with 100+ A2 level exercises
];

export const exercicesB1: Question[] = [
    // Will be populated with 100+ B1 level exercises
];

export const exercicesB2: Question[] = [
    // Will be populated with 100+ B2 level exercises
];

export const allExercises = {
    A1: exercicesA1,
    A2: exercicesA2,
    B1: exercicesB1,
    B2: exercicesB2
};
