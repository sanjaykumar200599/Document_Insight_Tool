import os
import requests
from dotenv import load_dotenv
import re
from collections import Counter

load_dotenv()

SARVAM_API_KEY = os.getenv("SARVAM_API_KEY")
SARVAM_API_URL = "https://api.sarvam.ai/summarize"   # (Assumed, adjust based on docs)

def sarvam_ai_summary(text: str) -> str:
    """
    Call Sarvam AI summarization API.
    """
    if not SARVAM_API_KEY:
        raise Exception("Sarvam API key not set")

    payload = {"text": text, "max_length": 100}
    headers = {"Authorization": f"Bearer {SARVAM_API_KEY}"}

    response = requests.post(SARVAM_API_URL, json=payload, headers=headers, timeout=30)

    if response.status_code == 200:
        data = response.json()
        return data.get("summary", "No summary returned from AI.")
    else:
        raise Exception(f"Sarvam API error: {response.text}")

def get_fallback_summary(text: str) -> str:
    """
    Fallback: return top 5 most frequent words.
    """
    words = re.findall(r'\w+', text.lower())
    common = Counter(words).most_common(5)
    return ", ".join([word for word, _ in common])
