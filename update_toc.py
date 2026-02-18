import json

def update_toc():
    path = 'c:/Users/user/Desktop/malik/ielts apps/data/courseContent.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Unit 0: Introduction & Roadmap
    roadmap_unit = {
        "id": "intro-roadmap",
        "number": "0",
        "title": "Introduction & Course Roadmap",
        "description": "Full structure of The Official Cambridge Guide to IELTS.",
        "category": "intro",
        "pageRange": "1-12",
        "objectives": [
            "Understand the book structure",
            "Identify key skill areas",
            "Locate practice tests"
        ],
        "topics": {
            "grammar": "N/A",
            "vocabulary": "Test Terminology"
        },
        "lessons": [
            {
                "title": "Welcome to the Course",
                "content": [
                    {
                        "type": "image",
                        "text": "/images/course/pdf_1_img_0_0.jpg"
                    },
                    {
                        "type": "header",
                        "text": "The Official Cambridge Guide to IELTS"
                    },
                    {
                        "type": "text",
                        "text": "This book is jointly managed by the British Council, IDP: IELTS Australia and Cambridge English Language Assessment. It provides a comprehensive guide for Academic & General Training candidates."
                    }
                ]
            },
            {
                "title": "Full Table of Contents",
                "content": [
                    {
                        "type": "header",
                        "text": "Skill Sections"
                    },
                    {
                        "type": "bullet",
                        "text": "IELTS Listening Skills (Units 1-8, p13-41)"
                    },
                    {
                        "type": "bullet",
                        "text": "IELTS Reading Skills (Units 1-8, p42-90)"
                    },
                    {
                        "type": "bullet",
                        "text": "IELTS Writing Skills (Units 1-8, p91-133)"
                    },
                    {
                        "type": "bullet",
                        "text": "IELTS Speaking Skills (Units 1-4, p134-153)"
                    },
                    {
                        "type": "header",
                        "text": "Practice Tests"
                    },
                    {
                        "type": "bullet",
                        "text": "Practice Test 1-8 (p154-318)"
                    }
                ]
            }
        ],
        "exercises": {
            "grammar": [],
            "vocabulary": []
        }
    }

    # Insert at the beginning
    data.insert(0, roadmap_unit)

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    update_toc()
