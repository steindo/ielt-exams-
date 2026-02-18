from docx import Document
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

def extract_intro_pages():
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    intro_paragraphs = []
    
    # We look for markers like "Introduction", "The IELTS Test", etc.
    # Unit 1 starts at around paragraph 146 based on previous output.
    
    for i, para in enumerate(doc.paragraphs[:150]):
        text = para.text.strip().replace("[TEXT FROM IMAGE]:", "").strip()
        if text and len(text) > 5:
            intro_paragraphs.append({"para_index": i, "text": text})

    return intro_paragraphs

data = extract_intro_pages()
with open('intro_content.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(data)} paragraphs for intro.")
