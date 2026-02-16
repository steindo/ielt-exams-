// OpenAI Exercise Generator Configuration
export const EXERCISE_GENERATOR_CONFIG = {
    apiEndpoint: "/api/generate-exercises",
    batchSize: 50, // Generate 50 exercises at a time
    cacheEnabled: true,
    levels: {
        A1: {
            topics: [
                "Verb to be",
                "Articles (a/an/the)",
                "Plurals",
                "Present Simple",
                "Possessives",
                "Prepositions of place",
                "Basic questions",
                "Numbers and time",
                "Family vocabulary",
                "Daily routines"
            ],
            targetCount: 1000
        },
        A2: {
            topics: [
                "Past Simple",
                "Present Continuous",
                "Comparatives and Superlatives",
                "Much/Many/A lot of",
                "Future with going to",
                "Can/Could for ability",
                "Prepositions of time",
                "There is/There are",
                "Countable/Uncountable nouns",
                "Adverbs of frequency"
            ],
            targetCount: 1000
        },
        B1: {
            topics: [
                "Present Perfect",
                "Past Continuous",
                "Second Conditional",
                "Passive Voice",
                "Modal verbs (must/should/might)",
                "Relative clauses",
                "Reported speech",
                "Used to",
                "Phrasal verbs",
                "Linking words"
            ],
            targetCount: 1000
        },
        B2: {
            topics: [
                "Third Conditional",
                "Mixed Conditionals",
                "Inversion",
                "Advanced passive structures",
                "Subjunctive mood",
                "Cleft sentences",
                "Advanced collocations",
                "Idiomatic expressions",
                "Formal vs informal language",
                "Complex sentence structures"
            ],
            targetCount: 1000
        }
    }
};

// Prompt template for OpenAI
export const EXERCISE_GENERATION_PROMPT = (level: string, topic: string, count: number) => `
Generate ${count} English grammar exercises for CEFR level ${level} focusing on "${topic}".

Requirements:
1. Each exercise must be either Multiple Choice (MCQ) or Gap-fill type
2. MCQ exercises must have exactly 4 options with one correct answer
3. Each exercise must include a clear explanation
4. Exercises should be varied and progressively challenging
5. Use realistic, practical examples

Return the exercises in this exact JSON format:
[
  {
    "id": "${level.toLowerCase()}-${topic.toLowerCase().replace(/\s+/g, '-')}-1",
    "type": "MCQ" or "GapFill",
    "question": "The question text",
    "options": ["option1", "option2", "option3", "option4"], // Only for MCQ
    "correctAnswer": 0 (for MCQ, index of correct option) or "answer text" (for GapFill),
    "explanation": "Detailed explanation of the correct answer"
  }
]

Generate exactly ${count} exercises following this format.
`;
