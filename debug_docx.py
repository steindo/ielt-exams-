from docx import Document

doc = Document(r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx')
print("--- PREVIEW OF FIRST 100 PARAGRAPHS ---")
for i, para in enumerate(doc.paragraphs[:100]):
    if para.text.strip():
        print(f"[{i}] {para.text[:100]}")
