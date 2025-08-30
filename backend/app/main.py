from fastapi import FastAPI
from app.routers import upload, insights
from app.database import Base, engine
from fastapi.middleware.cors import CORSMiddleware

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Document Insight Tool")

# Register routers
app.include_router(upload.router, prefix="/upload-resume", tags=["Upload"])
app.include_router(insights.router, prefix="/insights", tags=["Insights"])

# ✅ Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(upload.router, prefix="/upload-resume", tags=["Upload"])
app.include_router(insights.router, prefix="/insights", tags=["Insights"])

@app.get("/")
def root():
    return {"message": "AI Document Insight Tool Backend is running 🚀"}
