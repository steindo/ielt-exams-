import json

def update_unit_2():
    path = 'c:/Users/user/Desktop/malik/ielts apps/data/courseContent.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Unit 2: Following a conversation
    unit_2_data = {
        "id": "unit-2",
        "number": 2,
        "title": "Following a conversation",
        "description": "Identifying speakers and their functions in conversations.",
        "category": "listening",
        "pageRange": "18-19",
        "objectives": [
            "Identifying the speakers",
            "Matching items",
            "Identifying function",
            "Completing notes",
            "Understanding categories",
            "Completing a table"
        ],
        "topics": {
            "grammar": "Identifying function",
            "vocabulary": "Conversation contexts"
        },
        "lessons": [
            {
                "title": "1. Identifying the speakers",
                "content": [
                    {
                        "type": "text",
                        "text": "For Sections 1 and 3, each speaker will have a different voice to help you tell them apart (e.g. male/female; younger/older). Both speakers will talk equally, and you will hear answers from both speakers."
                    },
                    {
                        "type": "text",
                        "text": "For Section 1, there is normally one person who has to find out information from the other."
                    },
                    {
                        "type": "header",
                        "text": "Exercise 1.1"
                    },
                    {
                        "type": "text",
                        "text": "You will hear three short extracts from Listening Section 1. Listen and identify what makes each speaker different, and what information they want to find out."
                    },
                    {
                        "type": "image",
                        "text": "/images/course/official_IELTS-1WWW.IELTSPOP.COM_-2_img_1_2.jpg"
                    },
                    {
                        "type": "tip",
                        "text": "Test Tip: In the IELTS Listening paper, Sections 1 and 3 are conversations between two or three people. Sections 2 and 4 are monologues with only one main speaker."
                    },
                    {
                        "type": "header",
                        "text": "Exercise 1.2"
                    },
                    {
                        "type": "text",
                        "text": "You need to listen to both speakers carefully. Listen to the rest of the conversations from 1.1 and answer the questions below."
                    }
                ]
            },
            {
                "title": "2. Identifying function",
                "content": [
                    {
                        "type": "text",
                        "text": "Each speaker has a specific purpose in mind when they talk. We say their language has a function. We use different language for different functions."
                    },
                    {
                        "type": "header",
                        "text": "Exercise 2.1"
                    },
                    {
                        "type": "text",
                        "text": "Listen to seven short extracts from different conversations. Complete extracts 1-7."
                    }
                ]
            }
        ],
        "exercises": {
            "listening": {
                "transcript": "",
                "questions": [
                    {
                        "id": "u2-1.2-1",
                        "type": "MCQ",
                        "question": "How many nights will the man stay?",
                        "options": ["one night", "two nights", "three nights"],
                        "correctAnswer": 1,
                        "explanation": "Extracted from audio 9."
                    },
                    {
                        "id": "u2-1.2-2",
                        "type": "MCQ",
                        "question": "Which of the following is on the 10th floor?",
                        "options": ["the gym", "the business centre", "the restaurant"],
                        "correctAnswer": 2,
                        "explanation": "Extracted from audio 9."
                    }
                ]
            }
        }
    }

    # Find and Replace Unit 2
    for i, unit in enumerate(data):
        if unit['id'] == 'unit-2':
            data[i] = unit_2_data
            break

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    update_unit_2()
