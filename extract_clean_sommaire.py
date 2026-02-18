from docx import Document
import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

def extract_clean_sommaire():
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    sommaire = []
    current_skill = None
    
    # We'll use a set to track already found units to avoid duplicates from images/footers
    seen_units = set()

    for para in doc.paragraphs:
        text = para.text.strip().replace("[TEXT FROM IMAGE]:", "").strip()
        if not text: continue
        
        # Detect Skill Sections
        if any(skill in text for skill in ["Listening skills", "Reading skills", "Writing skills", "Speaking skills"]):
            if len(text) < 30: # Correct skill titles are short
                skill_name = text.split(" ")[0]
                if not sommaire or sommaire[-1]["name"] != skill_name:
                    sommaire.append({"name": skill_name, "units": []})
                    current_skill = skill_name
        
        # Detect Unit Headers: "1 Getting ready to listen"
        # Look for "Number + Space + Title" where title is fairly long
        unit_match = re.match(r'^(\d+)\s{1,}(.*)', text)
        if unit_match and current_skill:
            num = unit_match.group(1)
            title = unit_match.group(2).strip()
            # Heuristics for a real unit title
            if len(title) > 10 and len(title) < 70 and "." not in num and "WWW" not in title:
                unit_key = f"{current_skill}_{num}_{title}"
                if unit_key not in seen_units:
                    sommaire[-1]["units"].append({"number": num, "title": title})
                    seen_units.add(unit_key)

    return sommaire

sommaire = extract_clean_sommaire()
with open('clean_sommaire.json', 'w', encoding='utf-8') as f:
    json.dump(sommaire, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(sommaire)} skills sections.")
for s in sommaire:
    print(f"{s['name']}: {len(s['units'])} units")
