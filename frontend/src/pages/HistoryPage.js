import React, { useEffect, useState } from "react";
import axios from "axios";
import DocumentCard from "../components/DocumentCard";

const API_BASE = "http://127.0.0.1:8000";

function HistoryPage() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/insights/`)
      .then((res) => setDocuments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl">
        {/* Page Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          📂 Document History
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Review all your previously uploaded resumes and AI summaries.
        </p>

        {/* Document List */}
        {documents.length === 0 ? (
          <div className="text-center bg-gray-50 p-10 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-600 text-lg">No documents uploaded yet.</p>
            <p className="text-gray-400 text-sm">
              Upload a resume to see it appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow-md p-5 border border-gray-200"
              >
                <DocumentCard doc={doc} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HistoryPage;
