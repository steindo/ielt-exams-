import { Question } from "@/components/ExerciseEngine";

export interface CourseUnit {
    id: string;
    number: number;
    title: string; // e.g. "The Man-Made Environment"
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
    };
}

// Initial Skeleton based on standard IELTS Course books (Topics usually cover Environment, Tech, Education, etc.)
// We will ask the user to rename them.
export const courseUnits: CourseUnit[] = [
    {
        id: "unit-1",
        number: 1,
        title: "Unit 1: The Man-Made Environment", // Placeholder likely to be correct or close
        description: "Focus: Tourism, Architecture, and Civil Engineering.",
        topics: {
            grammar: "Present Perfect vs Past Simple",
            vocabulary: "Tourism & Travel keywords",
            skills: ["Reading: Skimming & Scanning", "Listening: Form completion"]
        },
        exercises: {
            grammar: [
                {
                    id: "u1-g-1",
                    type: "MCQ",
                    question: "How long ___ here?",
                    options: ["have you lived", "did you live", "do you live", "are you living"],
                    correctAnswer: 0,
                    explanation: "Present perfect for unfinished time/states starting in the past."
                },
                {
                    id: "u1-g-2",
                    type: "GapFill",
                    question: "I ___ (never/visit) Paris before last year.",
                    correctAnswer: "had never visited",
                    explanation: "Past perfect describing an action before another past time."
                }
            ],
            vocabulary: [
                {
                    id: "u1-v-1",
                    type: "MCQ",
                    question: "The city's ___ is famous for its gothic style.",
                    options: ["architecture", "archaeology", "archive", "agriculture"],
                    correctAnswer: 0,
                    explanation: "Architecture refers to the style and design of buildings."
                }
            ],
            reading: {
                passage: `## Tourism in the 21st Century\n\nTourism has evolved from a luxury for the few to a mass phenomenon. This shift has brought economic benefits but also environmental challenges...`,
                questions: [
                    {
                        id: "u1-r-1",
                        type: "MCQ",
                        question: "According to the text, what is a negative impact of mass tourism?",
                        options: ["Economic growth", "Environmental challenges", "Cultural exchange", "Technological advancement"],
                        correctAnswer: 1,
                        explanation: "The text explicitly mentions 'environmental challenges'."
                    }
                ]
            }
        }
    },
    {
        id: "unit-2",
        number: 2,
        title: "Unit 2: Education & Employment",
        description: "Focus: University life, Job market trends.",
        topics: {
            grammar: "Future forms (will, going to, present continuous)",
            vocabulary: "Academic subjects, Employment status",
            skills: ["Writing: Task 1 (Bar Charts)", "Speaking: Part 2"]
        },
        exercises: {
            grammar: [], vocabulary: []
        }
    },
    {
        id: "unit-3",
        number: 3,
        title: "Unit 3: Health & Lifestyle",
        description: "Focus: Diet, Exercise, and Medical advances.",
        topics: {
            grammar: "Modals of obligation and advice",
            vocabulary: "Medical terms, Healthy living",
            skills: ["Reading: True/False/Not Given"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-4",
        number: 4,
        title: "Unit 4: Art & Culture",
        description: "Focus: Museums, Music, and Artistic expression.",
        topics: {
            grammar: "Passive Voice",
            vocabulary: "Artistic adjectives, Genres",
            skills: ["Listening: Multiple matching"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-5",
        number: 5,
        title: "Unit 5: Technology & Science",
        description: "Focus: AI, Space exploration, Digital revolution.",
        topics: {
            grammar: "Conditionals (1st & 2nd)",
            vocabulary: "Technological verbs, Noun phrases",
            skills: ["Writing: Task 2 (Opinion Essay)"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-6",
        number: 6,
        title: "Unit 6: Animals & Nature",
        description: "Focus: Conservation, Wildlife, Climate change.",
        topics: {
            grammar: "Articles (a, an, the)",
            vocabulary: "Environment collocations",
            skills: ["Reading: Matching headings"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-7",
        number: 7,
        title: "Unit 7: Globalization",
        description: "Focus: International trade, Cultural integration.",
        topics: {
            grammar: "Relative Clauses",
            vocabulary: "Business terms, Global issues",
            skills: ["Speaking: Part 3"]
        },
        exercises: { grammar: [], vocabulary: [] }
    },
    {
        id: "unit-8",
        number: 8,
        title: "Unit 8: Crime & The Law",
        description: "Focus: Legal systems, Crime prevention.",
        topics: {
            grammar: "Reported Speech",
            vocabulary: "Legal terminology",
            skills: ["Listening: Map labelling"]
        },
        exercises: { grammar: [], vocabulary: [] }
    }
];
