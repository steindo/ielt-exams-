
import docx

def search_text(file_path, search_str):
    doc = docx.Document(file_path)
    for i, para in enumerate(doc.paragraphs):
        text = para.text.strip().replace("[TEXT FROM IMAGE]:", "").strip()
        if search_str.lower() in text.lower():
            print(f"Match found at para {i}: '{text}'")

file_path = r'c:\Users\user\Desktop\malik\ielts apps\output_formatted.docx'
search_text(file_path, "Getting ready to listen")
