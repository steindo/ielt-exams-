from docx import Document
import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

def extract_all_headers():
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    headers = []
    current_skill = None
    
    for i, para in enumerate(doc.paragraphs):
        text = para.text.strip().replace("[TEXT FROM IMAGE]:", "").strip()
        if not text: continue
        
        # Skill Headers
        if any(skill in text for skill in ["Listening skills", "Reading skills", "Writing skills", "Speaking skills"]):
            # Check if it's the start of a main skill section
            if len(text) < 40:
                current_skill = text.replace("skills", "").strip()
                headers.append({"type": "skill", "title": text, "units": []})
        
        # Unit Headers: "1 Getting ready to listen"
        unit_match = re.match(r'^(\d+)\s{1,}([A-Z].*)', text)
        if unit_match and len(text) < 60 and current_skill:
            # Avoid picking up lesson headers like "1.1" or "2.1"
            if "." not in unit_match.group(1):
                headers[-1]["units"].append({
                    "number": unit_match.group(1),
                    "title": unit_match.group(2).strip(),
                    "lessons": []
                })
        
        # Lesson/Section Headers: "1 Identifying the speakers"
        elif current_skill and headers and headers[-1]["units"]:
            lesson_match = re.match(r'^(\d+)\s+([A-Z].*)', text)
            if lesson_match and len(text) < 100:
                # Check for "Test Tip" or "Study Tip" to exclude them as unit headers
                if "Test Tip" not in text and "Study Tip" not in text:
                    headers[-1]["units"][-1]["lessons"].append(text)

    return headers

all_headers = extract_all_headers()
with open('full_book_structure.json', 'w', encoding='utf-8') as f:
    json.dump(all_headers, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(all_headers)} skill sections.")
