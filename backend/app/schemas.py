from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class DocumentBase(BaseModel):
    filename: str

class DocumentCreate(DocumentBase):
    summary: Optional[str] = None
    fallback_words: Optional[str] = None

class DocumentResponse(DocumentBase):
    id: int
    summary: Optional[str] = None
    fallback_words: Optional[str] = None
    uploaded_at: datetime

    class Config:
        orm_mode = True
