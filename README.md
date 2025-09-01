# 📑 AI-Powered Document Insight Tool

An **AI-powered document insight tool** built with **FastAPI (backend), React (frontend), and SQLite (database)**.  
This project allows users to **upload PDF resumes**, generate **AI-based summaries (via Sarvam AI)**, and view a **history of past uploads**.  
If the AI service is unavailable, the system gracefully falls back to the **top 5 most frequent words** in the document.  

---

## 🚀 Features

- 📤 Upload PDF resumes from the frontend  
- 🤖 AI-powered summarization using **Sarvam AI**  
- 📝 Fallback: Extracts top 5 frequent words if AI is unavailable  
- 📜 History feature to view all previously uploaded documents + insights  
- 💾 Data persistence using **SQLite database**  
- 🖥️ Full-stack app: **FastAPI backend** + **React frontend**  

---

## 🛠️ Tech Stack

- **Backend**: FastAPI, SQLAlchemy, SQLite, pdfplumber, Requests  
- **Frontend**: React, Axios, React Router  
- **AI Integration**: Sarvam AI (summarization API)  
- **Other Tools**: Python-dotenv (for secrets)  


---

## Images

<img width="1870" height="883" alt="Image" src="https://github.com/user-attachments/assets/0cbcb01d-8f4b-4365-8fd1-f9493aa9d18d" />


<img width="1788" height="883" alt="Image" src="https://github.com/user-attachments/assets/0e62bde8-a45e-46aa-a4c8-238d550fe759" />

---


## ⚙️ Setup Instructions

### 🔹 Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
Start backend:

bash
Copy code
uvicorn app.main:app --reload
Backend runs at: http://127.0.0.1:8000

Endpoints:

Upload: POST /upload-resume/

Get all insights: GET /insights/

Get by ID: GET /insights/{id}

🔹 Frontend (React)
bash
Copy code
cd frontend
npm install
npm start
Frontend runs at: http://localhost:3000

🔑 Environment Variables
Create a .env file inside backend/:

ini
Copy code
SARVAM_API_KEY=your_api_key_here
If SARVAM_API_KEY is missing or AI fails → fallback (top 5 words) will be used.

📊 Example Workflow
Go to Upload Page → Select a PDF → Click Upload

Backend extracts text → AI summary (or fallback) is generated

Summary is displayed instantly

Go to History Page → See all past uploads with insights

✨ Future Improvements
Switch from SQLite → PostgreSQL for production

Deploy backend (Render/Heroku) + frontend (Vercel/Netlify)

Add authentication for multi-user history

Improve AI summarization with more advanced models
```


