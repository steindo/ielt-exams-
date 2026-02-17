import { Question } from "@/components/ExerciseEngine";

export interface OfficialTest {
    id: string;
    title: string;
    description: string;
    modules: {
        listening: Question[];
        reading: {
            passage: string;
            questions: Question[];
        }[];
        writing: {
            task1: string; // Graph/Chart/Letter prompt
            task2: string; // Essay prompt
        };
        speaking: {
            part1: string[];
            part2: string; // Cue card
            part3: string[];
        };
    };
}

export const officialTests: OfficialTest[] = [
    {
        id: "test-1",
        title: "Official Practice Test 1",
        description: "Full simulation of the IELTS Academic exam. Strict timing recommended.",
        modules: {
            listening: [
                {
                    id: "ielts-L1-Q1",
                    type: "GapFill",
                    question: "The customer wants to book a table for ___ (number) people.",
                    correctAnswer: "12",
                    explanation: "Audio transcript: 'I'd like to reserve a table for a dozen of us.'"
                },
                {
                    id: "ielts-L1-Q2",
                    type: "MCQ",
                    question: "What time does the event start?",
                    options: ["7:00 PM", "7:30 PM", "8:00 PM", "8:15 PM"],
                    correctAnswer: 1,
                    explanation: "Audio transcript: 'Doors open at 7, but the ceremony begins at half past.'"
                }
                // ... more placeholder listening questions
            ],
            reading: [
                {
                    passage: `
            ## The Evolution of Urban Planning
            
            Urban planning historically has been a top-down discipline, imposing structure on chaos. 
            However, the 21st century has seen a shift towards 'emergent urbanism', where city 
            structures evolve organically from the needs of their inhabitants.
            
            In ancient Mesopotamia, cities were designed around the temple, the ziggurat serving 
            as both spiritual and administrative center. This centralized model persisted through 
            the Roman era, with the Forum at the heart of civic life.
            
            Contrast this with the modern megacity. Tokyo, for instance, is often described as a 
            collection of villages that grew together. Its lack of a single center makes it 
            resilient but confusing to the outsider.
          `,
                    questions: [
                        {
                            id: "ielts-R1-Q1",
                            type: "MCQ",
                            question: "According to the passage, how has urban planning changed in the 21st century?",
                            options: [
                                "It has become more religious.",
                                "It has shifted from top-down to organic evolution.",
                                "It completely ignores ancient models.",
                                "It focuses solely on Roman architecture."
                            ],
                            correctAnswer: 1,
                            explanation: "The text states there is a 'shift towards emergent urbanism' where structures evolve organically."
                        },
                        {
                            id: "ielts-R1-Q2",
                            type: "GapFill",
                            question: "In ancient Mesopotamia, the ___ served as the center of the city.",
                            correctAnswer: "ziggurat",
                            explanation: "The text mentions 'the ziggurat serving as both spiritual and administrative center'."
                        }
                    ]
                },
                // ... more reading sections
            ],
            writing: {
                task1: "The chart below shows the percentage of households in two European countries with internet access between 2010 and 2025. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
                task2: "Some people believe that university education should be free for everyone. Others think that students should pay for their education. Discuss both views and give your own opinion."
            },
            speaking: {
                part1: [
                    "Do you work or are you a student?",
                    "What do you like most about your hometown?",
                    "Do you prefer reading books or watching movies?"
                ],
                part2: "Describe a time you helped someone.\n\nYou should say:\n- Who you helped\n- Why they needed help\n- How you helped them\n- And explain how you felt about it.",
                part3: [
                    "Do you think people today are as helpful as in the past?",
                    "Should the government be responsible for helping citizens in need?",
                    "How can we encourage children to be more helpful?"
                ]
            }
        }
    },
    {
        id: "test-2",
        title: "Official Practice Test 2",
        description: "Focus on Global Warming and Economic Policy readings.",
        modules: {
            listening: [], // Placeholders
            reading: [],
            writing: { task1: "Placeholder Task 1", task2: "Placeholder Task 2" },
            speaking: { part1: [], part2: "Placeholder Cue Card", part3: [] }
        }
    }
];
