import sys

def check_and_extract(pdf_path):
    try:
        import pypdf
        print("Using pypdf")
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        print("=== TEXT START ===")
        print(text)
        print("=== TEXT END ===")
        return
    except ImportError:
        pass

    try:
        import fitz  # PyMuPDF
        import os
        print("Using pymupdf")
        doc = fitz.open(pdf_path)
        text = ""
        img_dir = "public/images/course"
        os.makedirs(img_dir, exist_ok=True)
        img_count = 0
        
        for i, page in enumerate(doc):
            text += page.get_text() + "\n"
            # Extract images
            image_list = page.get_images(full=True)
            for img_index, img in enumerate(image_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                image_filename = f"pdf_1_img_{i}_{img_index}.{image_ext}"
                with open(os.path.join(img_dir, image_filename), "wb") as f:
                    f.write(image_bytes)
                print(f"Extracted image: {image_filename}")
                img_count += 1
        
        print(f"Total images extracted: {img_count}")
        print("=== TEXT START ===")
        print(text)
        print("=== TEXT END ===")
        return
    except ImportError:
        pass

    try:
        from pdfminer.high_level import extract_text
        print("Using pdfminer")
        text = extract_text(pdf_path)
        print("=== TEXT START ===")
        print(text)
        print("=== TEXT END ===")
        return
    except ImportError:
        pass

    print("No PDF libraries found")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf.py <path_to_pdf>")
    else:
        check_and_extract(sys.argv[1])
