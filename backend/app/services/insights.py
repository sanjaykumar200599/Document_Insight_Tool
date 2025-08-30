from app.services.pdf_parser import extract_text_from_pdf
from app.services.ai_service import sarvam_ai_summary, get_fallback_summary

def process_document(file_path: str, use_ai: bool = True):
    text = extract_text_from_pdf(file_path)

    if use_ai:
        try:
            summary = sarvam_ai_summary(text)
            return {"summary": summary, "fallback": None}
        except Exception as e:
            print("AI failed, falling back:", e)

    # Fallback
    fallback = get_fallback_summary(text)
    return {"summary": None, "fallback": fallback}
