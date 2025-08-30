import React, { useState } from "react";
import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");
    setLoading(true);
    setInsight(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${API_BASE}/upload-resume/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setInsight(res.data.document);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {insight && (
        <div className="mt-6 p-4 border rounded">
          <h3 className="font-semibold">{insight.filename}</h3>
          {insight.summary ? (
            <p className="mt-2"><b>AI Summary:</b> {insight.summary}</p>
          ) : (
            <p className="mt-2"><b>Fallback Words:</b> {insight.fallback_words}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default UploadPage;
