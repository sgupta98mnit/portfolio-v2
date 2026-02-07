import pypdf
import os

pdf_files = ["Resume_Sumit_Gupta.pdf", "Resume_Sumit_Gupta___IAM.pdf"]
output_file = "resumes.txt"

with open(output_file, "w", encoding="utf-8") as out:
    for pdf_file in pdf_files:
        if os.path.exists(pdf_file):
            out.write(f"--- START {pdf_file} ---\n")
            try:
                reader = pypdf.PdfReader(pdf_file)
                for page in reader.pages:
                    out.write(page.extract_text())
                    out.write("\n")
            except Exception as e:
                out.write(f"Error reading {pdf_file}: {e}\n")
            out.write(f"--- END {pdf_file} ---\n\n")
        else:
            out.write(f"File not found: {pdf_file}\n")

print(f"Extraction complete. Check {output_file}")
