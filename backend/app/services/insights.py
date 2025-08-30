from app.services.pdf_parser import extract_text_from_pdf
from app.services.ai_service import mock_sarvam_ai_summary, get_fallback_summary

def process_document(file_path: str, use_ai: bool = True):
    text = extract_text_from_pdf(file_path)
    if use_ai:
        try:
            summary = mock_sarvam_ai_summary(text)  # Replace with real AI later
            return {"summary": summary, "fallback": None}
        except Exception:
            pass
    # Fallback
    fallback = get_fallback_summary(text)
    return {"summary": None, "fallback": fallback}
