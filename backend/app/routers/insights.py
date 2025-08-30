from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import crud

router = APIRouter()

@router.get("/{doc_id}")
def get_insight(doc_id: int, db: Session = Depends(get_db)):
    doc = crud.get_document(db, doc_id)
    if not doc:
        return {"error": "Document not found"}
    return doc

@router.get("/")
def get_all_insights(db: Session = Depends(get_db)):
    docs = crud.get_all_documents(db)
    return docs
