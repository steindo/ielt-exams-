import json

def generate_json():
    course_units = [
        {
            "id": "intro-summary",
            "number": "5-12",
            "title": "Introduction & IELTS Summary",
            "description": "Official guide to the IELTS test structure and how to use this book.",
            "category": "intro",
            "pageRange": "5-12",
            "topics": {
                "grammar": "Test Overview",
                "vocabulary": "IELTS Terminology"
            },
            "lessons": [
                {
                    "title": "Introduction",
                    "content": [
                        { "type": "header", "text": "Who is this book aimed at?" },
                        { "type": "text", "text": "This book is designed for candidates of any level hoping to take the IELTS test. It is suitable for students working alone or in a classroom situation. The materials can be used for self-study, or can be integrated into an IELTS preparation course. The book is also a valuable resource for teachers who are preparing IELTS candidates." },
                        { "type": "header", "text": "How can students of different levels use this book?" },
                        { "type": "text", "text": "Each Academic Module candidate will take the same test, no matter what his or her English level is. Similarly, each General Training candidate will take the same General Training test. So, the information in this book is useful and important to students of every level." },
                        { "type": "text", "text": "Lower-level language students generally need more guided practice. More advanced students need frequent opportunities for self-expression, but they also need to become more self-critical and aware of their own common mistakes." }
                    ]
                },
                {
                    "title": "How is the book organised?",
                    "content": [
                        { "type": "text", "text": "At the beginning of the book, there is a summary of each IELTS paper. Then, there are four sections dealing with the four skills covered in IELTS: Listening, Reading, Writing and Speaking." },
                        { "type": "text", "text": "These are divided into units, which focus on key areas aiming to build your abilities and confidence, and provide authentic test practice." },
                        { "type": "tip", "text": "For the skills sections, it is best to work through each unit in order. This is because the tasks and information are graded, developing your skills as the units progress." }
                    ]
                },
                {
                    "title": "What is 'paraphrase'?",
                    "content": [
                        { "type": "text", "text": "Paraphrase is the use of different words to express the same idea. In order to test whether you have understood the Reading and Listening texts, the questions in IELTS will paraphrase the words used in the texts." },
                        { "type": "tip", "text": "In the Writing and Speaking sections, being able to use paraphrase, instead of simply repeating and copying the words in the question, will show that you have a wide vocabulary and help you to achieve a higher score." }
                    ]
                }
            ],
            "exercises": {
                "grammar": [],
                "vocabulary": []
            }
        },
        {
            "id": "unit-1",
            "number": 1,
            "title": "Unit 1: Getting Ready to Listen",
            "description": "Focus: Understanding context, correct spelling, and numbers.",
            "category": "listening",
            "pageRange": "15-17",
            "topics": {
                "grammar": "Subject-Verb Agreement",
                "vocabulary": "Contextual Keywords"
            },
            "lessons": [
                {
                    "title": "1 Understanding the context",
                    "content": [
                        { "type": "text", "text": "In the introduction to the Listening section, you will be told who the speakers are, where they are and why they are talking. This is called the context. It helps you understand the topic. It is not written on the question paper." },
                        { "type": "tip", "text": "Before you do each section, you will be given 30—45 seconds to look at the questions. Use this time to Study the questions and try to predict what you might hear." },
                        { "type": "text", "text": "Studying the questions before you listen can help you predict what the speakers will talk about." }
                    ]
                }
            ],
            "exercises": {
                "grammar": [],
                "vocabulary": [],
                "listening": {
                    "transcript": "Context 1: Andrew Peterson spelling his name: P-E-T-E-R-S-O-N.",
                    "questions": [
                        { "id": "u1-q1", "type": "GapFill", "question": "Name: Mr Andrew ___", "correctAnswer": "Peterson" }
                    ]
                }
            }
        },
        {
            "id": "unit-2",
            "number": 2,
            "title": "Unit 2: Following a Conversation",
            "description": "Focus: Steps of a process and distractors.",
            "category": "listening",
            "pageRange": "18-21",
            "topics": { "grammar": "Sequencers", "vocabulary": "Travel" },
            "lessons": [
                {
                    "title": "1 Steps of a process",
                    "content": [
                        { "type": "text", "text": "Identify the order of events." }
                    ]
                }
            ],
            "exercises": { "grammar": [], "vocabulary": [], "listening": { "transcript": "...", "questions": [] } }
        },
        {
            "id": "unit-3",
            "number": 3,
            "title": "Unit 3: Getting to Know the Test",
            "description": "Focus: Section 2 Monologues.",
            "category": "listening",
            "pageRange": "23-26",
            "topics": { "grammar": "Prepositions", "vocabulary": "Maps" },
            "lessons": [],
            "exercises": { "grammar": [], "vocabulary": [], "listening": { "transcript": "", "questions": [] } }
        },
        {
            "id": "unit-4",
            "number": 4,
            "title": "Unit 4: Getting to Know the Test (Section 3)",
            "description": "Focus: Section 3 - Multiple choice.",
            "category": "listening",
            "pageRange": "27-30",
            "topics": { "grammar": "Agreement", "vocabulary": "Discussion" },
            "lessons": [],
            "exercises": { "grammar": [], "vocabulary": [], "listening": { "transcript": "", "questions": [] } }
        },
        {
            "id": "unit-5",
            "number": 5,
            "title": "Unit 5: Getting to Know the Test (Section 4)",
            "description": "Focus: Section 4 - Main ideas.",
            "category": "listening",
            "pageRange": "31-34",
            "topics": { "grammar": "Transitions", "vocabulary": "Academic" },
            "lessons": [],
            "exercises": { "grammar": [], "vocabulary": [], "listening": { "transcript": "", "questions": [] } }
        },
        {
            "id": "unit-6",
            "number": 6,
            "title": "Unit 6: Attitude and Opinion",
            "description": "Focus: Attitudes & Opinions.",
            "category": "listening",
            "pageRange": "35-38",
            "topics": { "grammar": "Proposals", "vocabulary": "Emotions" },
            "lessons": [
                {
                    "title": "1 Identifying attitudes",
                    "content": [
                        { "type": "text", "text": "Recognize speaker sentiment." },
                        { "type": "audio_script", "text": "Extract 1: I agree up to a point. Extract 2: That would be better." }
                    ]
                },
                {
                    "title": "2 Persuading and suggesting",
                    "content": [
                        { "type": "table", "headers": ["Strategy", "Example"], "rows": [["Persuading", "You should..."], ["Suggesting", "What about..."]] }
                    ]
                }
            ],
            "exercises": { "grammar": [], "vocabulary": [], "listening": { "transcript": "", "questions": [] } }
        },
        {
            "id": "unit-9",
            "number": 9,
            "title": "Unit 9: Reading Strategies",
            "description": "Focus: Skimming and Scanning.",
            "category": "reading",
            "pageRange": "44-47",
            "topics": { "grammar": "N/A", "vocabulary": "Topic sentences" },
            "exercises": { "grammar": [], "vocabulary": [], "reading": { "passage": "Skimming and scanning are key.", "questions": [] } }
        }
    ]
    with open('c:/Users/user/Desktop/malik/ielts apps/data/courseContent.json', 'w', encoding='utf-8') as f:
        json.dump(course_units, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    generate_json()
