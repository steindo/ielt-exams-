from docx import Document
import sys
import json
import re

# Force UTF-8 for stdout
sys.stdout.reconfigure(encoding='utf-8')

def get_full_extraction():
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    units = []
    current_unit = None
    collecting = False
    
    # We'll skip the intro pages and start from the first unit we find
    
    for para in doc.paragraphs:
        text = para.text.strip()
        if not text: continue
        
        # Remove [TEXT FROM IMAGE]: prefix if present
        text = text.replace("[TEXT FROM IMAGE]:", "").strip()
        
        # Unit detection
        # Pattern: "Unit 1" or "1  Getting ready to listen"
        unit_match = re.match(r'^Unit\s+(\d+)[:\s]+(.*)', text, re.IGNORECASE)
        # Alternate pattern for the section start: "1  Getting ready to listen" or "2  Following a conversation"
        alt_unit_match = re.match(r'^(\d+)\s{2,}(.*)', text)
        
        if unit_match or (alt_unit_match and int(alt_unit_match.group(1)) < 30): # Safety limit
            if current_unit:
                units.append(current_unit)
            
            num = int(unit_match.group(1)) if unit_match else int(alt_unit_match.group(1))
            title = unit_match.group(2) if unit_match else alt_unit_match.group(2)
            
            current_unit = {
                "id": f"unit-{num}",
                "number": num,
                "title": title.title(),
                "lessons": [],
                "exercises": {
                    "grammar": [],
                    "vocabulary": [],
                    "reading": None,
                    "listening": None
                }
            }
            collecting = True
            continue
            
        if current_unit and collecting:
            # Detect lesson/section headers
            # Pattern: "1 Identifying the speakers", "2  Using the correct spelling"
            section_match = re.match(r'^(\d+)\s+([A-Z].*)', text)
            if section_match:
                current_unit["lessons"].append({
                    "title": section_match.group(2).strip(),
                    "content": []
                })
            elif current_unit["lessons"]:
                # Filter out page numbers and website watermarks
                if not re.match(r'^\d+$', text) and "WWW.IELTSPOP.COM" not in text:
                    current_unit["lessons"][-1]["content"].append(text)
            else:
                # Top level intro text for unit
                if not re.match(r'^\d+$', text) and "WWW.IELTSPOP.COM" not in text:
                    if not any(l["title"] == "Introduction" for l in current_unit["lessons"]):
                        current_unit["lessons"].append({"title": "Introduction", "content": []})
                    current_unit["lessons"][0]["content"].append(text)

    if current_unit:
        units.append(current_unit)
        
    return units

extracted = get_full_extraction()

# Group units by Skill based on the TOC we saw earlier
# units 1-8: Listening
# units 9-16 (approx): Reading? 
# We'll just list them all for now.

print(f"Extracted {len(extracted)} units.")
for u in extracted:
    print(f"[{u['number']}] {u['title']} - {len(u['lessons'])} lesson parts.")

with open('unit_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(extracted, f, ensure_ascii=False, indent=2)
