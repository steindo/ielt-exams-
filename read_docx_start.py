from docx import Document
import sys

sys.stdout.reconfigure(encoding='utf-8')

doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
for i, para in enumerate(doc.paragraphs[:1000]):
    text = para.text.strip()
    if text:
        print(f"{i}: {text}")
