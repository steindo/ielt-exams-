from docx import Document
import json
import re

def extract_sommaire():
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    sommaire = []
    
    # We look for the main section headers: Listening, Reading, Writing, Speaking
    # And then the units under each.
    
    current_section = None
    
    for para in doc.paragraphs:
        text = para.text.strip().replace("[TEXT FROM IMAGE]:", "").strip()
        if not text: continue
        
        # Section Headers
        if "Listening skills" in text:
            current_section = {"section": "Listening", "units": []}
            sommaire.append(current_section)
        elif "Reading skills" in text:
            current_section = {"section": "Reading", "units": []}
            sommaire.append(current_section)
        elif "Writing skills" in text:
            current_section = {"section": "Writing", "units": []}
            sommaire.append(current_section)
        elif "Speaking skills" in text:
            current_section = {"section": "Speaking", "units": []}
            sommaire.append(current_section)
        
        # Unit Headers: "1 Getting ready to listen", "9 Reading strategies" etc.
        unit_match = re.match(r'^(\d+)\s{1,}(.*)', text)
        if unit_match and len(text) < 60 and current_section:
            unit_num = unit_match.group(1)
            unit_title = unit_match.group(2).strip()
            # Avoid picking up page numbers or small snippets
            if len(unit_title) > 5 and "p." not in unit_title.lower():
                current_section["units"].append({
                    "number": unit_num,
                    "title": unit_title
                })

    return sommaire

data = extract_sommaire()
with open('sommaire.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Extracted {sum(len(s['units']) for s in data)} units across {len(data)} sections.")
