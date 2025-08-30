import re
from collections import Counter

def mock_sarvam_ai_summary(text: str) -> str:
    """
    Temporary AI summary mock.
    Replace with real Sarvam API call when credentials are ready.
    """
    if not text:
        return "No content found in document."
    # Just take first 30 words as a 'summary'
    words = text.split()
    return " ".join(words[:30]) + "..."

def get_fallback_summary(text: str) -> str:
    words = re.findall(r'\w+', text.lower())
    common = Counter(words).most_common(5)
    return ", ".join([word for word, _ in common])
