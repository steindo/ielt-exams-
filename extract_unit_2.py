from docx import Document
import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

def extract_unit_content(unit_number):
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    content = []
    found_unit = False
    
    # We look for "2 Following a conversation"
    for para in doc.paragraphs:
        text = para.text.strip().replace("[TEXT FROM IMAGE]:", "").strip()
        if not text: continue
        
        # Detect Unit start: E.g. "2  Following a conversation"
        unit_match = re.match(fr'^{unit_number}\s+([A-Z].*)', text)
        if unit_match and len(text) < 60:
            found_unit = True
            print(f"Found Unit {unit_number}: {text}")
            continue
            
        # If we found the unit, and we hit another number at the start, check if it's the next unit
        if found_unit:
            next_unit_match = re.match(fr'^{unit_number + 1}\s+([A-Z].*)', text)
            if next_unit_match and len(text) < 60:
                break
            content.append(text)

    return content

data = extract_unit_content(2)
with open('unit_2_content_raw.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(data)} paragraphs for Unit 2.")
