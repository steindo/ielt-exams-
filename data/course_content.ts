import { Question } from "@/components/ExerciseEngine";

export interface LessonParagraph {
    type: 'text' | 'bullet' | 'tip' | 'header';
    text: string;
}

export interface LessonPart {
    title: string;
    content: LessonParagraph[];
}

export interface CourseUnit {
    id: string;
    number: number;
    title: string;
    description: string;
    topics: {
        grammar: string;
        vocabulary: string;
    };
    lessons?: LessonPart[];
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
            grammar: "Subject-Verb Agreement",
            vocabulary: "Contextual Keywords"
        },
        lessons: [
            {
                title: "Understanding the Context",
                content: [
                    { type: 'text', text: "In the introduction to the Listening section, you will be told who the speakers are, where they are and why they are talking. This is called the context. It helps you understand the topic." },
                    { type: 'tip', text: "Before you do each section, you will be given 30–45 seconds to look at the questions. Use this time to study the questions and try to predict what you might hear." },
                    { type: 'text', text: "Studying the questions before you listen can help you predict what the speakers will talk about." }
                ]
            },
            {
                title: "Using Correct Spelling",
                content: [
                    { type: 'text', text: "In Listening Section 1, you may need to listen for the name of a person or a place. Often, the names will be spelt out for you. You need to recognise the letters of the English alphabet well, so that you can write the letters you hear quickly." },
                    { type: 'bullet', text: "You will only hear the spelling once." },
                    { type: 'bullet', text: "Any spellings that you hear will be in the context of a normal conversation." },
                    { type: 'tip', text: "Always check your spelling. If you make a spelling mistake in the IELTS Listening paper, your answer will be marked wrong." }
                ]
            },
            {
                title: "Writing Numbers",
                content: [
                    { type: 'text', text: "In Section 1 of the Listening paper, you need to listen for specific details such as dates, prices, and times." },
                    { type: 'bullet', text: "Practice saying numbers clearly to help you recognize them when you hear them." }
                ]
            }
        ],
        exercises: {
            grammar: [],
            vocabulary: [
                {
                    id: "u1-v1",
                    type: "GapFill",
                    question: "Listen and spell the name: P-E-T-E-R-___-O-N",
                    correctAnswer: "S",
                    explanation: "S is the missing letter."
                }
            ],
            listening: {
                transcript: "In Section 1, names are often spelt out. 'My name is Andrew Peterson. P-E-T-E-R-S-O-N.'",
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
        description: "Focus: Identifying speakers, function, and spelling names.",
        topics: {
            grammar: "Present Simple & Continuous",
            vocabulary: "Personal Information, Occupations, Family",
        },
        lessons: [
            {
                title: "Identifying the Speakers",
                content: [
                    { type: 'text', text: "In Section 1 of the Listening paper, you will hear a conversation between two people. One of them usually wants to find out information from the other." },
                    { type: 'bullet', text: "One speaker is often trying to make a booking (e.g., at a hotel or restaurant)." },
                    { type: 'bullet', text: "The other speaker is typically a receptionist or employee providing information." },
                    { type: 'tip', text: "Pay attention to the relationship between the speakers. This often helps you predict the kind of information that will be exchanged." }
                ]
            },
            {
                title: "Understanding the Function",
                content: [
                    { type: 'text', text: "Speakers in IELTS Listening often have specific intentions, such as agreeing, disagreeing, or asking for clarification." },
                    { type: 'bullet', text: "Listen for key phrases like 'I'd like to...', 'Could you tell me...', or 'That's right'." }
                ]
            }
        ],
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
    { id: "unit-3", number: 3, title: "Unit 3: Recognising Paraphrase", description: "Focus: Distractors and Paraphrasing.", topics: { grammar: "Synonyms", vocabulary: "Academic" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-4", number: 4, title: "Unit 4: Places and Directions", description: "Focus: Maps and Directions.", topics: { grammar: "Prepositions", vocabulary: "Directions" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-5", number: 5, title: "Unit 5: Actions and Processes", description: "Focus: Flow-charts and Processes.", topics: { grammar: "Passive Voice", vocabulary: "Verbs of motion" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-6", number: 6, title: "Unit 6: Attitude and Opinion", description: "Focus: Identifying opinions.", topics: { grammar: "Modals", vocabulary: "Opinion verbs" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-7", number: 7, title: "Unit-7: Following a Lecture", description: "Focus: Academic lectures.", topics: { grammar: "Discourse Markers", vocabulary: "Academic" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-8", number: 8, title: "Unit-8: Contrasting Ideas", description: "Focus: Comparing and contrasting.", topics: { grammar: "Comparatives", vocabulary: "Linkers" }, exercises: { grammar: [], vocabulary: [] } },

    // --- READING SECTION (Units 9-16) ---
    {
        id: "unit-9",
        number: 9,
        title: "Unit 9: Reading Strategies",
        description: "Focus: Skimming and Scanning.",
        topics: {
            grammar: "N/A",
            vocabulary: "Topic sentences",
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
    { id: "unit-10", number: 10, title: "Unit 10: Descriptive Passages", description: "Focus: Description.", topics: { grammar: "Adjectives", vocabulary: "Descriptive" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-11", number: 11, title: "Unit 11: Understanding Main Ideas", description: "Focus: Paragraph headings.", topics: { grammar: "Nuns", vocabulary: "Headings" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-12", number: 12, title: "Unit 12: Locating Information", description: "Focus: Finding details.", topics: { grammar: "Scanning", vocabulary: "Synonyms" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-13", number: 13, title: "Unit 13: Discursive Passages", description: "Focus: Arguments.", topics: { grammar: "Linkers", vocabulary: "Argument" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-14", number: 14, title: "Unit 14: Multiple Choice", description: "Focus: MCQ strategies.", topics: { grammar: "N/A", vocabulary: "N/A" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-15", number: 15, title: "Unit 15: Opinions and Attitudes", description: "Focus: Writer's view.", topics: { grammar: "Modals", vocabulary: "Opinion" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-16", number: 16, title: "Unit 16: General Training Reading", description: "Focus: General Training specifics.", topics: { grammar: "N/A", vocabulary: "Workplace" }, exercises: { grammar: [], vocabulary: [] } },

    // --- WRITING SECTION (Units 17-20) ---
    {
        id: "unit-17",
        number: 17,
        title: "Unit 17: Academic Task 1 - Charts",
        description: "Focus: Describing charts and graphs.",
        topics: {
            grammar: "Comparatives/Superlatives",
            vocabulary: "Trends (increase, decrease)",
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
    { id: "unit-18", number: 18, title: "Unit 18: Task 1 - Comparing Data", description: "Focus: Comparisons.", topics: { grammar: "Contrast", vocabulary: "Comparison" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-19", number: 19, title: "Unit 19: Task 1 - Diagrams & Maps", description: "Focus: Process and Maps.", topics: { grammar: "Passive/Prepositions", vocabulary: "Process verbs" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-20", number: 20, title: "Unit 20: Task 2 - Essay Structure", description: "Focus: Opinion Essays.", topics: { grammar: "Paragraphing", vocabulary: "Cohesion" }, exercises: { grammar: [], vocabulary: [] } }
];
