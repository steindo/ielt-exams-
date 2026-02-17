from docx import Document
import sys
import re

# Force UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

try:
    doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
    
    print("--- EXTRACTING ALL UNITS ---")
    
    current_unit = None
    units = []

    # Regex to find "Unit X" or similar headers
    # The user mentioned "Unit 1", "Unit 2"... let's look for that pattern specifically or "Listening skills" sections
    
    for i, para in enumerate(doc.paragraphs):
        text = para.text.strip()
        
        # Heuristic for Unit headers based on previous output: 
        # "1 Getting ready to listen", "2 Following a conversation"
        # They seem to be numbered chapters in the "Listening skills" section.
        
        # Let's look for lines starting with a number followed by text, or specific headers
        if re.match(r'^\d+\s+[A-Z]', text) and len(text) < 60:
             # Check context - is it a unit title? 
             # Previous output showed: "1 Getting ready to listen", "2 Following a conversation"
             print(f"POSSIBLE UNIT: {text}")
             units.append(text)
             
    print(f"\nTotal potential units found: {len(units)}")
    print(units)

except Exception as e:
    print(f"Error: {e}")
