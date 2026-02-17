import { Question } from "@/components/ExerciseEngine";

export interface CourseUnit {
    id: string;
    number: number;
    title: string;
    description: string;
    topics: {
        grammar: string;
        vocabulary: string;
        skills: string[];
    };
    exercises: {
        grammar: Question[];
        vocabulary: Question[];
        reading?: { passage: string; questions: Question[] };
        listening?: { transcript: string; questions: Question[] };
    };
}

// Data extracted from 'output_formatted.docx' - Listening Skills Section
export const courseUnits: CourseUnit[] = [
    {
        id: "unit-1",
        number: 1,
        title: "Unit 1: Getting Ready to Listen",
        description: "Focus: Understanding context, correct spelling, and numbers.",
        topics: {
            grammar: "N/A (Focus on Spelling/Numbers)",
            vocabulary: "Contextual Keywords (Party, Project, Assignment)",
            skills: ["Understanding Context", "Correct Spelling", "Writing Numbers"]
        },
        exercises: {
            grammar: [],
            vocabulary: [
                {
                    id: "u1-spell-1",
                    type: "GapFill",
                    question: "Listen and spell the name: Mr. Andrew ___.",
                    correctAnswer: "Peterson",
                    explanation: "Review the alphabet sounds: P-E-T-E-R-S-O-N."
                },
                {
                    id: "u1-num-1",
                    type: "MCQ",
                    question: "Choose the correct number you hear.",
                    options: ["15", "50", "52", "62"],
                    correctAnswer: 0,
                    explanation: "Distinguish between '-teen' (15) and '-ty' (50) stress patterns."
                }
            ],
            listening: {
                transcript: "In Section 1, you might hear a name being spelt out. For example: 'My name is Andrew Peterson. P-E-T-E-R-S-O-N.' You might also hear numbers like phone numbers or prices: 'It costs $15.50'.",
                questions: [
                    {
                        id: "u1-l-1",
                        type: "GapFill",
                        question: "Complete the notes: Name: Mr Andrew ___",
                        correctAnswer: "Peterson",
                        explanation: "The speaker spells out P-E-T-E-R-S-O-N."
                    },
                    {
                        id: "u1-l-2",
                        type: "MCQ",
                        question: "What is the price mentioned?",
                        options: ["$15.50", "$50.50", "$5.15", "$15.15"],
                        correctAnswer: 0,
                        explanation: "The speaker clearly says 'Fifteen dollars and fifty cents'."
                    }
                ]
            }
        }
    },
    {
        id: "unit-2",
        number: 2,
        title: "Unit 2: Following a Conversation",
        description: "Focus: Identifying speakers, function, and matching items.",
        topics: {
            grammar: "Questions & Responses",
            vocabulary: "Opinion adjectives, Functional language",
            skills: ["Identifying Speakers", "Matching Items", "Completing Notes"]
        },
        exercises: {
            grammar: [],
            vocabulary: [],
            listening: {
                transcript: "Speaker A: 'Hi, I'd like to ask about the language course.' Speaker B: 'Certainly. We have classes for all levels. Are you a beginner?' Speaker A: 'No, I have studied for 3 years.'",
                questions: [
                    {
                        id: "u2-l-1",
                        type: "MCQ",
                        question: "Who is Speaker A?",
                        options: ["Student", "Teacher", "Receptionist", "Cleaner"],
                        correctAnswer: 0,
                        explanation: "The speaker is asking for information about a course."
                    },
                    {
                        id: "u2-l-2",
                        type: "MCQ",
                        question: "How long has Speaker A studied?",
                        options: ["1 year", "2 years", "3 years", "4 years"],
                        correctAnswer: 2,
                        explanation: "Speaker A clearly states 'I have studied for 3 years'."
                    }
                ]
            }
        }
    },
    {
        id: "unit-3",
        number: 3,
        title: "Unit 3: Recognising Paraphrase",
        description: "Focus: Identifying distractors and selecting from a list.",
        topics: {
            grammar: "Synonyms & Paraphrasing",
            vocabulary: "Academic synonyms",
            skills: ["Identifying Distractors", "Selecting from a list"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-4",
        number: 4,
        title: "Unit 4: Places and Directions",
        description: "Focus: Describing places, following directions, labelling maps.",
        topics: {
            grammar: "Prepositions of Place",
            vocabulary: "Directional verbs (Turn left, Opposite...)",
            skills: ["Labelling a Map", "Following Directions"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-5",
        number: 5,
        title: "Unit 5: Listening for Actions",
        description: "Focus: Mechanical parts, processes, and descriptions.",
        topics: {
            grammar: "Present Passive (is made, is moved)",
            vocabulary: "Process verbs (rotate, lift, push)",
            skills: ["Describing a process", "Flow-charts"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-6",
        number: 6,
        title: "Unit 6: Attitude and Opinion",
        description: "Focus: Identifying attitudes, persuading, reaching decisions.",
        topics: {
            grammar: "Modals of attitude (might, should, must)",
            vocabulary: "Opinion verbs (agree, doubt, suggest)",
            skills: ["Identifying Opinions", "Persuading"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-7",
        number: 7,
        title: "Unit 7: Following a Lecture",
        description: "Focus: Main ideas, connected ideas, explanations.",
        topics: {
            grammar: "Discourse Markers (However, Consequently)",
            vocabulary: "Academic lecture terms",
            skills: ["Signposting words", "Understanding explanations"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-8",
        number: 8,
        title: "Unit 8: Contrasting Ideas",
        description: "Focus: Signposting words, comparing, using notes.",
        topics: {
            grammar: "Comparative structures",
            vocabulary: "Contrast linkers (Unlike, Whereas)",
            skills: ["Comparing/Contrasting", "Note-taking"]
        },
        exercises: { grammar: [], vocabulary: [] }
    }
];
