from sqlalchemy.orm import Session
from app import models, schemas

def create_document(db: Session, doc: schemas.DocumentCreate):
    db_doc = models.Document(
        filename=doc.filename,
        summary=doc.summary,
        fallback_words=doc.fallback_words
    )
    db.add(db_doc)
    db.commit()
    db.refresh(db_doc)
    return db_doc

def get_document(db: Session, doc_id: int):
    return db.query(models.Document).filter(models.Document.id == doc_id).first()

def get_all_documents(db: Session):
    return db.query(models.Document).all()
