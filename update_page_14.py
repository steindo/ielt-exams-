import json

def update_content():
    path = 'c:/Users/user/Desktop/malik/ielts apps/data/courseContent.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Find Unit 1
    for unit in data:
        if unit['id'] == 'unit-1':
            unit['pageRange'] = "13-14"
            
            # Exercise 1.2 Lesson
            exercise_1_2 = {
                "title": "1.2 Following a Conversation",
                "content": [
                    {
                        "type": "text",
                        "text": "Listen to four short conversations. Which context (A-D) from Exercise 1.1 are the people in?"
                    },
                    {
                        "type": "audio_script",
                        "text": "Conversation 1: Can I help you? / Yes, I'm looking for a book on modern architecture. / Conversation 2: How long are you planning to stay in the UK? / For six months. I'm here to improve my English. / Conversation 3: I'd like to join, please. / Of course, we have a special rate for students. / Conversation 4: When is the deadline for the essay? / It's next Friday, at 4 PM."
                    }
                ]
            }
            
            # Exercise 1.3 Lesson
            exercise_1_3 = {
                "title": "1.3 Predicting Information",
                "content": [
                    {
                        "type": "text",
                        "text": "Look at the questions for Conversation 1 in Exercise 1.2. What kind of information do you need to listen for?"
                    },
                    {
                        "type": "bullet",
                        "text": "Example: Question: What is the woman's name? -> Answer: A name or proper noun."
                    },
                    {
                        "type": "tip",
                        "text": "In the IELTS test, you are often given time to read the questions before you listen. Use this time to predict what kind of information you need to write (a name, a number, a date, etc.)."
                    }
                ]
            }
            
            # Append to lessons
            unit['lessons'].append(exercise_1_2)
            unit['lessons'].append(exercise_1_3)
            
            # Update exercises
            # We already have questions in 'listening' from Page 13.
            # I'll add the Page 14 Exercise 1.2 questions to the existing ones or create a structured array.
            # The current ExerciseEngine takes a flat array. I'll merge them.
            
            p14_questions = [
                {
                    "id": "u1-1.2-1",
                    "type": "MCQ",
                    "question": "Conversation 1: Which context is this?",
                    "options": ["A health club", "A library", "A language school", "A university office"],
                    "correctAnswer": 1,
                    "explanation": "Reference to 'book on architecture' indicates a library."
                },
                {
                    "id": "u1-1.2-2",
                    "type": "MCQ",
                    "question": "Conversation 2: Which context is this?",
                    "options": ["A health club", "A library", "A language school", "A university office"],
                    "correctAnswer": 2,
                    "explanation": "Improving English indicates a language school."
                },
                {
                    "id": "u1-1.2-3",
                    "type": "MCQ",
                    "question": "Conversation 3: Which context is this?",
                    "options": ["A health club", "A library", "A language school", "A university office"],
                    "correctAnswer": 0,
                    "explanation": "Joining and student rates for fitness indicate a health club."
                },
                {
                    "id": "u1-1.2-4",
                    "type": "MCQ",
                    "question": "Conversation 4: Which context is this?",
                    "options": ["A health club", "A library", "A language school", "A university office"],
                    "correctAnswer": 3,
                    "explanation": "Essay deadlines and administrator interactions indicate a university office."
                }
            ]
            
            unit['exercises']['listening']['questions'].extend(p14_questions)
            break

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    update_content()
