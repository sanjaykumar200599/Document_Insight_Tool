from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, nullable=False)
    summary = Column(String, nullable=True)
    fallback_words = Column(String, nullable=True)  # Store as comma-separated
    uploaded_at = Column(DateTime(timezone=True), server_default=func.now())
