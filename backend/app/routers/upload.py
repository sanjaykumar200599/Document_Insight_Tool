import os
from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import schemas, crud
from app.services.insights import process_document

UPLOAD_DIR = "uploaded_files"
os.makedirs(UPLOAD_DIR, exist_ok=True)

router = APIRouter()

@router.post("/")
async def upload_resume(file: UploadFile = File(...), db: Session = Depends(get_db)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    # Save file locally
    with open(file_path, "wb") as f:
        f.write(await file.read())

    # Process document
    insights = process_document(file_path)

    # Save to DB
    doc_data = schemas.DocumentCreate(
        filename=file.filename,
        summary=insights["summary"],
        fallback_words=insights["fallback"]
    )
    doc = crud.create_document(db, doc_data)

    # ✅ Return JSON response with proper fields
    return {
        "id": doc.id,
        "filename": doc.filename,
        "summary": doc.summary,
        "fallback_words": doc.fallback_words,
        "uploaded_at": doc.uploaded_at.isoformat()
    }
