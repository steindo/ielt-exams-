from docx import Document
import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

def extract_advanced():
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    units = []
    current_unit = None
    
    # Key markers for sections
    # Unit Start: "Listening skills", "Reading skills" etc followed by "X  Title"
    # Sections: "1 Identifying the speakers", "2 Using the correct spelling"
    
    for i, para in enumerate(doc.paragraphs):
        text = para.text.strip().replace("[TEXT FROM IMAGE]:", "").strip()
        if not text: continue
        
        # Detect Unit start: E.g. "1  Getting ready to listen" or "2  Following a conversation"
        # Often preceded by "Listening skills"
        unit_match = re.match(r'^(\d+)\s{1,}(.*)', text)
        if unit_match and "p" not in text.lower() and len(text) < 60:
            num = int(unit_match.group(1))
            # Heuristic: Units are usually sequential and < 30
            if (not current_unit or num == current_unit["number"] + 1) and num < 30:
                if current_unit: units.append(current_unit)
                current_unit = {
                    "number": num,
                    "title": unit_match.group(2).strip(),
                    "lessons": [],
                    "exercises": []
                }
                continue

        if current_unit:
            # Detect lesson headers: "1 Identifying the speakers"
            lesson_match = re.match(r'^(\d+)\s+([A-Z].*)', text)
            if lesson_match and len(text) < 100:
                current_unit["lessons"].append({
                    "title": lesson_match.group(2).strip(),
                    "content": []
                })
            elif current_unit["lessons"]:
                # Basic cleanup
                if "WWW.IELTSPOP.COM" not in text and not re.match(r'^\d+$', text):
                    current_unit["lessons"][-1]["content"].append(text)
    
    if current_unit: units.append(current_unit)
    return units

data = extract_advanced()
print(f"Extracted {len(data)} units.")
with open('rich_content.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
