import { Question } from "@/components/ExerciseEngine";

export interface LessonParagraph {
    type: 'text' | 'bullet' | 'tip' | 'header';
    text: string;
}

export interface LessonPart {
    title: string;
    content: LessonParagraph[];
}

export type UnitCategory = 'intro' | 'listening' | 'reading' | 'writing' | 'speaking' | 'test';

export interface CourseUnit {
    id: string;
    number: number | string; // Using string for intro/tests if needed, or keeping it flexible
    title: string;
    description: string;
    category: UnitCategory;
    pageRange?: string;
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

export const courseUnits: CourseUnit[] = [
    // --- 1. INTRODUCTION & IELTS SUMMARY (Pages 5-12) ---
    {
        id: "intro-summary",
        number: "5-12",
        title: "Introduction & IELTS Summary",
        description: "Official guide to the IELTS test structure and how to use this book.",
        category: "intro",
        pageRange: "5-12",
        topics: {
            grammar: "Test Overview",
            vocabulary: "IELTS Terminology"
        },
        lessons: [
            {
                title: "Introduction",
                content: [
                    { type: 'header', text: "Who is this book aimed at?" },
                    { type: 'text', text: "This book is designed for candidates of any level hoping to take the IELTS test. It is suitable for students working alone or in a classroom situation. The materials can be used for self-study, or can be integrated into an IELTS preparation course. The book is also a valuable resource for teachers who are preparing IELTS candidates." },
                    { type: 'header', text: "How can students of different levels use this book?" },
                    { type: 'text', text: "Each Academic Module candidate will take the same test, no matter what his or her English level is. Similarly, each General Training candidate will take the same General Training test. So, the information in this book is useful and important to students of every level." },
                    { type: 'text', text: "Lower-level language students generally need more guided practice. More advanced students need frequent opportunities for self-expression, but they also need to become more self-critical and aware of their own common mistakes." }
                ]
            },
            {
                title: "How is the book organised?",
                content: [
                    { type: 'text', text: "At the beginning of the book, there is a summary of each IELTS paper. Then, there are four sections dealing with the four skills covered in IELTS: Listening, Reading, Writing and Speaking." },
                    { type: 'text', text: "These are divided into units, which focus on key areas aiming to build your abilities and confidence, and provide authentic test practice." },
                    { type: 'tip', text: "For the skills sections, it is best to work through each unit in order. This is because the tasks and information are graded, developing your skills as the units progress." }
                ]
            },
            {
                title: "What is 'paraphrase'?",
                content: [
                    { type: 'text', text: "Paraphrase is the use of different words to express the same idea. In order to test whether you have understood the Reading and Listening texts, the questions in IELTS will paraphrase the words used in the texts." },
                    { type: 'tip', text: "In the Writing and Speaking sections, being able to use paraphrase, instead of simply repeating and copying the words in the question, will show that you have a wide vocabulary and help you to achieve a higher score." }
                ]
            }
        ],
        exercises: {
            grammar: [],
            vocabulary: []
        }
    },

    // --- 2. LISTENING SKILLS (8 Units) ---
    {
        id: "unit-1",
        number: 1,
        title: "Unit 1: Getting Ready to Listen",
        description: "Focus: Understanding context, correct spelling, and numbers.",
        category: "listening",
        pageRange: "15-17",
        topics: {
            grammar: "Subject-Verb Agreement",
            vocabulary: "Contextual Keywords"
        },
        lessons: [
            {
                title: "1 Understanding the context",
                content: [
                    { type: 'text', text: "In the introduction to the Listening section, you will be told who the speakers are, where they are and why they are talking. This is called the context. It helps you understand the topic. It is not written on the question paper." },
                    { type: 'tip', text: "Before you do each section, you will be given 30—45 seconds to look at the questions. Use this time to Study the questions and try to predict what you might hear." },
                    { type: 'text', text: "Studying the questions before you listen can help you predict what the speakers will talk about." }
                ]
            },
            {
                title: "2 Using the correct spelling",
                content: [
                    { type: 'text', text: "In Listening Section I, you may need to listen for the name of a person or a place. Often, the names will be spelt out for you. You need to recognise the letters of the English alphabet well, so that you can write the letters you hear quickly." },
                    { type: 'bullet', text: "You will only hear the spelling once." },
                    { type: 'bullet', text: "Any spellings that you hear will be in the context of a normal conversation, so you need to be able to hear the difference between letters and words." },
                    { type: 'tip', text: "Always check your spelling. If you make a spelling mistake in the IELTS Listening paper, your answer will be marked wrong." },
                    { type: 'text', text: "There are several ways to help you spell a word. Listen carefully, as there are several ways of helping people to spell a word without simply spelling it out." }
                ]
            },
            {
                title: "3 Writing numbers",
                content: [
                    { type: 'text', text: "In Section I of the Listening paper, you need to listen for specific details. This often involves writing down numbers like dates, prices, or times." },
                    { type: 'bullet', text: "Listen for the difference between 'teen' and 'ty' numbers (e.g. 17 vs 70)." },
                    { type: 'bullet', text: "Be careful with currency symbols and decimals ($10.50)." },
                    { type: 'tip', text: "If you need to write something that is not a name (e.g. the registration number of a car), you may hear a combination of numbers and letters." }
                ]
            }
        ],
        exercises: {
            grammar: [],
            vocabulary: [],
            listening: {
                transcript: "Context 1: Organizing a party. Susie will organize invitations and food. Context 2: Andrew Peterson spelling his name: P-E-T-E-R-S-O-N. Context 3: Car registration HLP 528.",
                questions: [
                    {
                        id: "u1-q1",
                        type: "GapFill",
                        question: "Name: Mr Andrew ___",
                        correctAnswer: "Peterson",
                        explanation: "Spelt P-E-T-E-R-S-O-N."
                    },
                    {
                        id: "u1-q2",
                        type: "GapFill",
                        question: "Registration number: ___",
                        correctAnswer: "HLP 528",
                        explanation: "As heard in the recording."
                    }
                ]
            }
        }
    },
    {
        id: "unit-2",
        number: 2,
        title: "Unit 2: Following a Conversation",
        description: "Focus: Steps of a process and Understanding distractors.",
        category: "listening",
        pageRange: "18-21",
        topics: {
            grammar: "Sequencers (First, Next, Finally)",
            vocabulary: "Party planning, Travel, Reservations",
        },
        lessons: [
            {
                title: "1 Identifying the steps of a process",
                content: [
                    { type: 'text', text: "In this section, you will learn to identify the order of events in a conversation or monologue. Look for signposting words that indicate a sequence." },
                    { type: 'bullet', text: "First / First of all" },
                    { type: 'bullet', text: "Then / Next / After that" },
                    { type: 'bullet', text: "Finally / The last thing is" },
                    { type: 'tip', text: "Before you listen, look at the steps and try to imagine the logical order. This will help you follow the talk more easily." }
                ]
            },
            {
                title: "2 Understanding distractors",
                content: [
                    { type: 'text', text: "Distractors are the incorrect answers to a question. They are designed to test if you are following the details of the conversation." },
                    { type: 'text', text: "A common type of distractor is when a speaker corrects themselves or changes their mind." },
                    { type: 'tip', text: "Listen for words like 'actually', 'no, wait', 'sorry', or 'instead'. These often signal a correction or a change in the information provided." }
                ]
            }
        ],
        exercises: {
            grammar: [],
            vocabulary: [],
            listening: {
                transcript: "Speaker A: 'Let's order pizza.' Speaker B: 'We always do that. How about a barbecue?' Speaker A: 'Too much effort. Let's stick with pizza.'",
                questions: [
                    {
                        id: "u2-distractor-1",
                        type: "MCQ",
                        question: "What did they finally decide to eat?",
                        options: ["Pizza", "Barbecue", "Nothing"],
                        correctAnswer: 0,
                        explanation: "Although a barbecue was suggested, they decided to 'stick with pizza'."
                    }
                ]
            }
        }
    },
    {
        id: "unit-3",
        number: 3,
        title: "Unit 3: Getting to Know the Test",
        description: "Focus: Section 2 Monologues - Places and directions, Labelling a map.",
        category: "listening",
        pageRange: "23-26",
        topics: {
            grammar: "Prepositions of place, Directions",
            vocabulary: "Landmarks, Maps, Orientation",
        },
        lessons: [
            {
                title: "1 Labelling a map",
                content: [
                    { type: 'text', text: "In Section 2 of the Listening test, you often hear a monologue about a place. You need to identify locations using landmarks and directions." },
                    { type: 'tip', text: "Look for the entrance and existing landmarks to orient yourself." }
                ]
            }
        ],
        exercises: {
            grammar: [],
            vocabulary: [],
            listening: {
                transcript: "",
                questions: []
            }
        }
    },
    {
        id: "unit-4",
        number: 4,
        title: "Unit 4: Getting to Know the Test (Section 3)",
        description: "Focus: Section 3 - Multiple choice (Complex) and Identifying attitudes/opinions.",
        category: "listening",
        pageRange: "27-30",
        topics: {
            grammar: "Agreement & Disagreement expressions",
            vocabulary: "Academic discussion, Synonyms, Paraphrase",
        },
        lessons: [
            {
                title: "1 Multiple choice (Complex)",
                content: [
                    { type: 'text', text: "In Section 3, multiple-choice questions are more complex. You often hear speakers agreeing, disagreeing, or changing their minds." },
                    { type: 'tip', text: "Listen for the final decision. Distractors often involve options that are mentioned but eventually rejected." }
                ]
            },
            {
                title: "2 Identifying opinions",
                content: [
                    { type: 'text', text: "You need to identify whether speakers agree or disagree on certain points." },
                    { type: 'bullet', text: "Agreeing: 'Exactly', 'I agree up to a point', 'That would be better'." },
                    { type: 'bullet', text: "Disagreeing/Doubt: 'I'm not so sure', 'Hmm, that's a bit...', 'I have to admit I don't like...'" }
                ]
            }
        ],
        exercises: {
            grammar: [],
            vocabulary: [],
            listening: {
                transcript: "",
                questions: []
            }
        }
    },
    {
        id: "unit-5",
        number: 5,
        title: "Unit 5: Getting to Know the Test (Section 4)",
        description: "Focus: Section 4 - Identifying main ideas and Note-taking in academic monologues.",
        category: "listening",
        pageRange: "31-34",
        topics: {
            grammar: "Passive voice, Signaling transitions",
            vocabulary: "Academic terminology, Research, Evidence",
        },
        lessons: [
            {
                title: "1 Identifying main ideas",
                content: [
                    { type: 'text', text: "Section 4 is a long monologue on an academic subject. You must follow the overall argument by identifying the main ideas." },
                    { type: 'tip', text: "Listen for 'Signpost words' that signal a change in topic (e.g., 'Moving on to...', 'Now, let's look at...')." }
                ]
            },
            {
                title: "2 Note-taking",
                content: [
                    { type: 'text', text: "Notes are often structured with headings and bullet points. They summarize the speaker's main points." },
                    { type: 'tip', text: "Use the headings in the notes to predict what the speaker will say next." }
                ]
            }
        ],
        exercises: {
            grammar: [],
            vocabulary: [],
            listening: {
                transcript: "",
                questions: []
            }
        }
    },
    {
        id: "unit-6",
        number: 6,
        title: "Unit 6: Attitude and Opinion",
        description: "Focus: Identifying attitudes, opinions, persuading, and suggesting.",
        category: "listening",
        pageRange: "35-38",
        topics: {
            grammar: "Sentence structures for proposing ideas",
            vocabulary: "Emotion synonyms (worried, enthusiastic, etc.)",
        },
        lessons: [
            {
                title: "1 Identifying attitudes and opinions",
                content: [
                    { type: 'text', text: "In Listening Sections 1 and 3, speakers often try to reach an agreement. You must identify their level of agreement or disagreement." },
                    { type: 'bullet', text: "Strong agreement: 'Exactly', 'I couldn't agree more'." },
                    { type: 'bullet', text: "Partial agreement/Hesitation: 'I agree up to a point', 'I suppose so'." },
                    { type: 'bullet', text: "Disagreement: 'I\'m not so sure', 'Actually, I don\'t like that idea'." }
                ]
            },
            {
                title: "2 Persuading and suggesting",
                content: [
                    { type: 'text', text: "Speakers use specific structures to propose ideas and try to convince others." },
                    { type: 'bullet', text: "Structures: 'Why don't we...', 'How about...', 'Maybe we should...'." }
                ]
            }
        ],
        exercises: {
            grammar: [],
            vocabulary: [],
            listening: {
                transcript: "",
                questions: []
            }
        }
    },
    { id: "unit-7", number: 7, title: "Unit-7: Following a Lecture", description: "Focus: Academic lectures.", category: "listening", pageRange: "36-38", topics: { grammar: "Discourse Markers", vocabulary: "Academic" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-8", number: 8, title: "Unit-8: Contrasting Ideas", description: "Focus: Comparing and contrasting.", category: "listening", pageRange: "39-41", topics: { grammar: "Comparatives", vocabulary: "Linkers" }, exercises: { grammar: [], vocabulary: [] } },

    // --- 3. READING SKILLS (8 Units) ---
    {
        id: "unit-9",
        number: 9,
        title: "Unit 9: Reading Strategies",
        description: "Focus: Skimming and Scanning.",
        category: "reading",
        pageRange: "44-47",
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
    { id: "unit-10", number: 10, title: "Unit 10: Descriptive Passages", description: "Focus: Description.", category: "reading", pageRange: "48-54", topics: { grammar: "Adjectives", vocabulary: "Descriptive" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-11", number: 11, title: "Unit 11: Understanding Main Ideas", description: "Focus: Paragraph headings.", category: "reading", pageRange: "55-58", topics: { grammar: "Nouns", vocabulary: "Headings" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-12", number: 12, title: "Unit 12: Locating Information", description: "Focus: Finding details.", category: "reading", pageRange: "59-63", topics: { grammar: "Scanning", vocabulary: "Synonyms" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-13", number: 13, title: "Unit 13: Discursive Passages", description: "Focus: Arguments.", category: "reading", pageRange: "64-69", topics: { grammar: "Linkers", vocabulary: "Argument" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-14", number: 14, title: "Unit 14: Multiple Choice", description: "Focus: MCQ strategies.", category: "reading", pageRange: "70-72", topics: { grammar: "N/A", vocabulary: "N/A" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-15", number: 15, title: "Unit 15: Opinions and Attitudes", description: "Focus: Writer's view.", category: "reading", pageRange: "73-77", topics: { grammar: "Modals", vocabulary: "Opinion" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-16", number: 16, title: "Unit 16: General Training Reading", description: "Focus: General Training specifics.", category: "reading", pageRange: "78-84", topics: { grammar: "N/A", vocabulary: "Workplace" }, exercises: { grammar: [], vocabulary: [] } },

    // --- 4. WRITING SKILLS (8 Units) ---
    {
        id: "unit-17",
        number: 17,
        title: "Unit 17: Academic Task 1 - Charts",
        description: "Focus: Describing charts and graphs.",
        category: "writing",
        pageRange: "93-99",
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
    { id: "unit-18", number: 18, title: "Unit 18: Task 1 - Comparing Data", description: "Focus: Comparisons.", category: "writing", pageRange: "100-105", topics: { grammar: "Contrast", vocabulary: "Comparison" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-19", number: 19, title: "Unit 19: Task 1 - Diagrams & Maps", description: "Focus: Process and Maps.", category: "writing", pageRange: "106-112", topics: { grammar: "Passive/Prepositions", vocabulary: "Process verbs" }, exercises: { grammar: [], vocabulary: [] } },
    { id: "unit-20", number: 20, title: "Unit 20: Task 2 - Essay Structure", description: "Focus: Opinion Essays.", category: "writing", pageRange: "113-118", topics: { grammar: "Paragraphing", vocabulary: "Cohesion" }, exercises: { grammar: [], vocabulary: [] } }
];
