import React, { useEffect, useState } from "react";
import axios from "axios";
import DocumentCard from "../components/DocumentCard";

const API_BASE = "http://127.0.0.1:8000";

function HistoryPage() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/insights/`)
      .then(res => setDocuments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">History</h2>
      {documents.length === 0 ? (
        <p>No documents uploaded yet.</p>
      ) : (
        <div className="space-y-4">
          {documents.map(doc => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryPage;
