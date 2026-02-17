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
        writing?: { task: string; modelAnswer: string };
        speaking?: { part1: string[]; part2: string; part3: string[]; audioModel?: string };
    };
}

// FULL BOOK STRUCTURE SIMULATION based on "OutputFormatted" docx
// Listening: Units 1-8
// Reading: Units 9-16
// Writing: Units 17-24 (Estimated)
// Speaking: Units 25+

export const courseUnits: CourseUnit[] = [
    // --- LISTENING SECTION (Units 1-8) ---
    {
        id: "unit-1",
        number: 1,
        title: "Unit 1: Getting Ready to Listen",
        description: "Focus: Understanding context, correct spelling, and numbers.",
        topics: {
            grammar: "N/A",
            vocabulary: "Contextual Keywords",
            skills: ["Understanding Context", "Correct Spelling", "Writing Numbers"]
        },
        exercises: {
            grammar: [],
            vocabulary: [
                {
                    id: "u1-v1",
                    type: "GapFill",
                    question: "Listen and spell: P-E-T-E-R-___-O-N",
                    correctAnswer: "S",
                    explanation: "S is the missing letter."
                }
            ],
            listening: {
                transcript: "In Section 1, names are often spelt out. 'My name is Andrew Peterson. P-E-T-E-R-S-O-N.' Numbers are also common: 'The price is $15.50'.",
                questions: [
                    {
                        id: "u1-l1",
                        type: "GapFill",
                        question: "Name: Mr Andrew ___",
                        correctAnswer: "Peterson",
                        explanation: "Spelt P-E-T-E-R-S-O-N."
                    }
                ]
            }
        }
    },
    {
        id: "unit-2",
        number: 2,
        title: "Unit 2: Following a Conversation",
        description: "Focus: Identifying speakers and function.",
        topics: {
            grammar: "Interrogative forms",
            vocabulary: "Functional language",
            skills: ["Identifying Speakers", "Matching Items"]
        },
        exercises: {
            grammar: [],
            vocabulary: [],
            listening: {
                transcript: "Speaker A: 'I'd like to ask about the course.' Speaker B: 'Certainly. Do you have any experience?' Speaker A: 'Yes, 3 years.'",
                questions: [
                    {
                        id: "u2-l1",
                        type: "MCQ",
                        question: "Who is asking for information?",
                        options: ["Speaker A", "Speaker B", "Both", "Reference"],
                        correctAnswer: 0,
                        explanation: "Speaker A starts with 'I'd like to ask...'."
                    }
                ]
            }
        }
    },
    { id: "unit-3", number: 3, title: "Unit 3: Recognising Paraphrase", description: "Focus: Distractors and Paraphrasing.", topics: { grammar: "Synonyms", vocabulary: "Academic", skills: ["Distractors"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-4", number: 4, title: "Unit 4: Places and Directions", description: "Focus: Maps and Directions.", topics: { grammar: "Prepositions", vocabulary: "Directions", skills: ["Labelling Maps"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-5", number: 5, title: "Unit 5: Actions and Processes", description: "Focus: Flow-charts and Processes.", topics: { grammar: "Passive Voice", vocabulary: "Verbs of motion", skills: ["Flow-charts"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-6", number: 6, title: "Unit 6: Attitude and Opinion", description: "Focus: Identifying opinions.", topics: { grammar: "Modals", vocabulary: "Opinion verbs", skills: ["Attitude"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-7", number: 7, title: "Unit 7: Following a Lecture", description: "Focus: Academic lectures.", topics: { grammar: "Discourse Markers", vocabulary: "Academic", skills: ["Signposting"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-8", number: 8, title: "Unit 8: Contrasting Ideas", description: "Focus: Comparing and contrasting.", topics: { grammar: "Comparatives", vocabulary: "Linkers", skills: ["Contrast"] }, exercises: { grammar: [], vocabulary: [] } },

    // --- READING SECTION (Units 9-16) ---
    {
        id: "unit-9",
        number: 9,
        title: "Unit 9: Reading Strategies",
        description: "Focus: Skimming and Scanning.",
        topics: {
            grammar: "N/A",
            vocabulary: "Topic sentences",
            skills: ["Skimming", "Scanning"]
        },
        exercises: {
            grammar: [],
            vocabulary: [],
            reading: {
                passage: "## Speed Reading\n\nTo succeed in IELTS, you must master skimming (reading for gist) and scanning (reading for detail). Do not read every word.",
                questions: [
                    {
                        id: "u9-r1",
                        type: "MCQ",
                        question: "What is skimming?",
                        options: ["Reading for detail", "Reading for gist", "Reading slowly", "Memorizing text"],
                        correctAnswer: 1,
                        explanation: "Skimming involves reading quickly to get the main idea."
                    }
                ]
            }
        }
    },
    { id: "unit-10", number: 10, title: "Unit 10: Descriptive Passages", description: "Focus: Description.", topics: { grammar: "Adjectives", vocabulary: "Descriptive", skills: ["Detail"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-11", number: 11, title: "Unit 11: Understanding Main Ideas", description: "Focus: Paragraph headings.", topics: { grammar: "Nuns", vocabulary: "Headings", skills: ["Matching Headings"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-12", number: 12, title: "Unit 12: Locating Information", description: "Focus: Finding details.", topics: { grammar: "Scanning", vocabulary: "Synonyms", skills: ["Locating Info"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-13", number: 13, title: "Unit 13: Discursive Passages", description: "Focus: Arguments.", topics: { grammar: "Linkers", vocabulary: "Argument", skills: ["Yes/No/NG"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-14", number: 14, title: "Unit 14: Multiple Choice", description: "Focus: MCQ strategies.", topics: { grammar: "N/A", vocabulary: "N/A", skills: ["MCQ"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-15", number: 15, title: "Unit 15: Opinions and Attitudes", description: "Focus: Writer's view.", topics: { grammar: "Modals", vocabulary: "Opinion", skills: ["Writer's View"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-16", number: 16, title: "Unit 16: General Training Reading", description: "Focus: General Training specifics.", topics: { grammar: "N/A", vocabulary: "Workplace", skills: ["GT Reading"] }, exercises: { grammar: [], vocabulary: [] } },

    // --- WRITING SECTION (Units 17-20) ---
    {
        id: "unit-17",
        number: 17,
        title: "Unit 17: Academic Task 1 - Charts",
        description: "Focus: Describing charts and graphs.",
        topics: {
            grammar: "Comparatives/Superlatives",
            vocabulary: "Trends (increase, decrease)",
            skills: ["Task 1 Analysis"]
        },
        exercises: {
            grammar: [],
            vocabulary: [],
            writing: {
                task: "The chart below shows the number of visitors to the museum. Write a report for a university lecturer describing the information.",
                modelAnswer: "The line graph illustrates the number of visitors... Overall, there was an upward trend..."
            }
        }
    },
    { id: "unit-18", number: 18, title: "Unit 18: Task 1 - Comparing Data", description: "Focus: Comparisons.", topics: { grammar: "Contrast", vocabulary: "Comparison", skills: ["Complex Charts"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-19", number: 19, title: "Unit 19: Task 1 - Diagrams & Maps", description: "Focus: Process and Maps.", topics: { grammar: "Passive/Prepositions", vocabulary: "Process verbs", skills: ["Diagrams"] }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-20", number: 20, title: "Unit 20: Task 2 - Essay Structure", description: "Focus: Opinion Essays.", topics: { grammar: "Paragraphing", vocabulary: "Cohesion", skills: ["Essay Planning"] }, exercises: { grammar: [], vocabulary: [] } }
];
