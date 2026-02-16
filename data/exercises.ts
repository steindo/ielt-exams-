import { Question } from "@/components/ExerciseEngine";

// A1 Level Exercises - Beginner
export const exercicesA1: Question[] = [
    {
        id: "a1-1",
        type: "MCQ",
        question: "Choose the correct greeting: 'Good morning! How ___ you?'",
        options: ["is", "are", "am", "be"],
        correctAnswer: 1,
        explanation: "We use 'are' with 'you' in English. 'How are you?' is the correct form."
    },
    {
        id: "a1-2",
        type: "GapFill",
        question: "Complete: 'My name ___ Sarah.' (Use the verb 'to be')",
        correctAnswer: "is",
        explanation: "With 'my name' (third person singular), we use 'is'."
    },
    {
        id: "a1-3",
        type: "MCQ",
        question: "What is the plural of 'book'?",
        options: ["books", "bookes", "book", "bookies"],
        correctAnswer: 0,
        explanation: "Most English nouns form the plural by adding '-s'."
    },
    {
        id: "a1-4",
        type: "GapFill",
        question: "I ___ a student. (Complete with the correct form of 'to be')",
        correctAnswer: "am",
        explanation: "With 'I', we always use 'am'."
    },
    {
        id: "a1-5",
        type: "MCQ",
        question: "Choose the correct article: '___ apple a day keeps the doctor away.'",
        options: ["A", "An", "The", "No article"],
        correctAnswer: 1,
        explanation: "We use 'an' before words that start with a vowel sound."
    }
];

// A2 Level Exercises - Elementary
export const exercicesA2: Question[] = [
    {
        id: "a2-1",
        type: "MCQ",
        question: "I ___ to the cinema last night.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2,
        explanation: "'Went' is the past simple form of 'go'. We use it for completed actions in the past."
    },
    {
        id: "a2-2",
        type: "GapFill",
        question: "She ___ her homework every day. (Use the present simple of 'do')",
        correctAnswer: "does",
        explanation: "In present simple, third person singular (she/he/it) takes '-s' or '-es'."
    },
    {
        id: "a2-3",
        type: "MCQ",
        question: "There ___ many people at the party yesterday.",
        options: ["is", "are", "was", "were"],
        correctAnswer: 3,
        explanation: "'Were' is the past form of 'are', used with plural subjects."
    },
    {
        id: "a2-4",
        type: "GapFill",
        question: "I am ___ than my brother. (Complete with the comparative form of 'tall')",
        correctAnswer: "taller",
        explanation: "For short adjectives, we add '-er' to form the comparative."
    },
    {
        id: "a2-5",
        type: "MCQ",
        question: "We ___ to Paris next summer.",
        options: ["go", "are going", "went", "have gone"],
        correctAnswer: 1,
        explanation: "We use 'be going to' or present continuous for planned future actions."
    },
    {
        id: "a2-6",
        type: "GapFill",
        question: "How ___ sugar do you need? (Use 'much' or 'many')",
        correctAnswer: "much",
        explanation: "We use 'much' with uncountable nouns like 'sugar'."
    }
];

// B1 Level Exercises - Intermediate
export const exercicesB1: Question[] = [
    {
        id: "b1-1",
        type: "MCQ",
        question: "If I ___ more time, I would learn a new language.",
        options: ["have", "had", "will have", "would have"],
        correctAnswer: 1,
        explanation: "This is a second conditional sentence. We use 'if + past simple' in the condition clause."
    },
    {
        id: "b1-2",
        type: "GapFill",
        question: "The report must ___ by Friday. (Use the passive voice with 'finish')",
        correctAnswer: "be finished",
        explanation: "Passive voice with modal verbs: modal + be + past participle."
    },
    {
        id: "b1-3",
        type: "MCQ",
        question: "She has been working here ___ 2015.",
        options: ["for", "since", "from", "during"],
        correctAnswer: 1,
        explanation: "We use 'since' with a specific point in time (year, date, etc.)."
    },
    {
        id: "b1-4",
        type: "GapFill",
        question: "I wish I ___ speak French fluently. (Use the correct form of 'can')",
        correctAnswer: "could",
        explanation: "'I wish' is followed by a past tense verb to express an unreal present situation."
    },
    {
        id: "b1-5",
        type: "MCQ",
        question: "The movie was ___ boring that I fell asleep.",
        options: ["so", "such", "very", "too"],
        correctAnswer: 0,
        explanation: "We use 'so + adjective + that' to show result or consequence."
    },
    {
        id: "b1-6",
        type: "GapFill",
        question: "By the time you arrive, I ___ dinner. (Use future perfect of 'finish')",
        correctAnswer: "will have finished",
        explanation: "Future perfect (will have + past participle) describes an action that will be completed before a future time."
    },
    {
        id: "b1-7",
        type: "MCQ",
        question: "I'd rather you ___ smoke in here.",
        options: ["don't", "didn't", "won't", "wouldn't"],
        correctAnswer: 1,
        explanation: "'Would rather' is followed by past simple when referring to another person's actions."
    }
];

// B2 Level Exercises - Upper Intermediate
export const exercicesB2: Question[] = [
    {
        id: "b2-1",
        type: "MCQ",
        question: "Had I known about the traffic, I ___ earlier.",
        options: ["left", "would leave", "would have left", "will leave"],
        correctAnswer: 2,
        explanation: "This is an inverted third conditional. 'Had I known' = 'If I had known', so we use 'would have + past participle'."
    },
    {
        id: "b2-2",
        type: "GapFill",
        question: "The committee is ___ of ten members. (Use a word meaning 'made up')",
        correctAnswer: "composed",
        explanation: "'Be composed of' means 'to be made up of' or 'to consist of'."
    },
    {
        id: "b2-3",
        type: "MCQ",
        question: "Scarcely ___ the door when the phone rang.",
        options: ["I had opened", "had I opened", "I opened", "did I open"],
        correctAnswer: 1,
        explanation: "After negative adverbs like 'scarcely', we use inversion (auxiliary + subject)."
    },
    {
        id: "b2-4",
        type: "GapFill",
        question: "The proposal was met with ___ opposition. (Use a word meaning 'strong' or 'fierce')",
        correctAnswer: "fierce",
        explanation: "'Fierce opposition' is a common collocation meaning very strong resistance."
    },
    {
        id: "b2-5",
        type: "MCQ",
        question: "Not only ___ the exam, but she also got the highest score.",
        options: ["she passed", "did she pass", "she did pass", "passed she"],
        correctAnswer: 1,
        explanation: "After 'not only' at the beginning of a sentence, we use inversion."
    },
    {
        id: "b2-6",
        type: "GapFill",
        question: "The government is being ___ for its handling of the crisis. (Use a word meaning 'criticized')",
        correctAnswer: "criticized",
        explanation: "In passive voice: 'be being + past participle' for present continuous passive."
    },
    {
        id: "b2-7",
        type: "MCQ",
        question: "The research findings ___ that climate change is accelerating.",
        options: ["suggest", "suggests", "is suggesting", "are suggesting"],
        correctAnswer: 0,
        explanation: "'Findings' is plural, so we use the plural verb form 'suggest'."
    },
    {
        id: "b2-8",
        type: "GapFill",
        question: "She is ___ to have left the country. (Use a word meaning 'believed' or 'thought')",
        correctAnswer: "believed",
        explanation: "'Be believed to + infinitive' is a passive reporting structure."
    }
];

// Export all exercises by level
export const allExercises = {
    A1: exercicesA1,
    A2: exercicesA2,
    B1: exercicesB1,
    B2: exercicesB2
};
