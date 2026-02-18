import os
from PIL import Image

def convert_images(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".jpx") or filename.endswith(".jpeg"):
            basename = os.path.splitext(filename)[0]
            new_filename = f"{basename}.jpg"
            img_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_filename)
            
            try:
                with Image.open(img_path) as img:
                    img.convert("RGB").save(new_path, "JPEG")
                print(f"Converted {filename} to {new_filename}")
                # Remove old file to save space
                os.remove(img_path)
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    convert_images("public/images/course")
