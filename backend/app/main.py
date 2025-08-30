from fastapi import FastAPI
from app.routers import upload, insights
from app.database import Base, engine

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Document Insight Tool")

# Register routers
app.include_router(upload.router, prefix="/upload-resume", tags=["Upload"])
app.include_router(insights.router, prefix="/insights", tags=["Insights"])

@app.get("/")
def root():
    return {"message": "AI Document Insight Tool Backend is running 🚀"}
