import json

def update_content():
    with open('c:/Users/user/Desktop/malik/ielts apps/data/courseContent.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Find Unit 1
    for unit in data:
        if unit['id'] == 'unit-1':
            unit['title'] = "Unit 1: Getting ready to listen"
            unit['pageRange'] = "13"
            unit['objectives'] = [
                "Understanding the context",
                "Using the correct spelling",
                "Writing numbers"
            ]
            unit['lessons'] = [
                {
                    "title": "1. Understanding the context",
                    "content": [
                        {
                            "type": "text",
                            "text": "In the Listening paper, you will hear each recording once only. It is very important to use the time you are given to look at the questions and think about the context (who is speaking, where they are, and why they are speaking)."
                        },
                        {
                            "type": "tip",
                            "text": "In Section 1 of the Listening paper, you will hear a conversation between two people. You will need to listen for specific information like names, dates, and numbers."
                        }
                    ]
                }
            ]
            unit['exercises']['listening'] = {
                "transcript": "",
                "questions": [
                    {
                        "id": "u1-1.1-a",
                        "type": "MCQ",
                        "question": "Photo A: What is the context for this conversation?",
                        "options": ["A health club", "A library", "A language school", "A university office"],
                        "correctAnswer": 0,
                        "explanation": "Photo A shows people exercising in a gym (A health club)."
                    },
                    {
                        "id": "u1-1.1-b",
                        "type": "MCQ",
                        "question": "Photo B: What is the context for this conversation?",
                        "options": ["A health club", "A library", "A language school", "A university office"],
                        "correctAnswer": 1,
                        "explanation": "Photo B shows students in a library with books."
                    },
                    {
                        "id": "u1-1.1-c",
                        "type": "MCQ",
                        "question": "Photo C: What is the context for this conversation?",
                        "options": ["A health club", "A library", "A language school", "A university office"],
                        "correctAnswer": 3,
                        "explanation": "Photo C shows a student talking to an administrator in a university office."
                    },
                    {
                        "id": "u1-1.1-d",
                        "type": "MCQ",
                        "question": "Photo D: What is the context for this conversation?",
                        "options": ["A health club", "A library", "A language school", "A university office"],
                        "correctAnswer": 2,
                        "explanation": "Photo D shows students in a language school classroom environment."
                    }
                ]
            }
            break

    with open('c:/Users/user/Desktop/malik/ielts apps/data/courseContent.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    update_content()
