from docx import Document
import json
import re

def extract_full_book():
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    units = []
    current_unit = None
    collecting_content = False
    
    # Simple state machine to group text by suspected units
    for para in doc.paragraphs:
        text = para.text.strip()
        if not text: continue
        
        # Detect Unit Headers (e.g., "Unit 1", "Unit 2")
        unit_match = re.match(r'^Unit\s+(\d+)[:\s]+(.*)', text, re.IGNORECASE)
        if unit_match:
            if current_unit:
                units.append(current_unit)
            
            current_unit = {
                "number": int(unit_match.group(1)),
                "title": unit_match.group(2),
                "sections": []
            }
            continue
        
        if current_unit:
            # Detect Section Headers (e.g., "Grammar", "Vocabulary", "Lesson")
            if len(text) < 50 and any(kw in text.lower() for kw in ["grammar", "vocabulary", "lesson", "exercise", "practice", "task", "skills"]):
                current_unit["sections"].append({"title": text, "content": []})
            elif current_unit["sections"]:
                current_unit["sections"][-1]["content"].append(text)
            else:
                # Content before any section header
                current_unit["sections"].append({"title": "Introduction", "content": [text]})

    if current_unit:
        units.append(current_unit)
        
    return units

data = extract_full_book()

# Output a summary and the first few units to see depth
print(f"Total Units Extracted: {len(data)}")
for u in data[:5]:
    print(f"\nUNIT {u['number']}: {u['title']}")
    for s in u['sections']:
        content_snippet = " ".join(s['content'])[:100] + "..."
        print(f"  - {s['title']} ({len(s['content'])} paragraphs): {content_snippet}")

with open('full_textbook_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
