import React, { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/upload-resume/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
      alert("Error uploading file!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl text-center">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Upload & Summarize Your Resume
        </h1>
        <p className="text-gray-500 mb-8">
          Drop your PDF/DOCX resume here and get instant AI-powered insights.
        </p>

        {/* File Upload Section */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition mb-6">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileUpload"
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer flex flex-col items-center"
          >
            <span className="text-lg text-gray-600">
              {file ? file.name : "Click to choose a file or drag & drop here"}
            </span>
          </label>
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition w-full"
        >
          {loading ? "Uploading..." : "Upload & Summarize"}
        </button>

        {/* Summary Result */}
        {summary && (
          <div className="mt-8 text-left bg-gray-100 rounded-lg p-5 shadow-inner">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Summary
            </h2>
            <p className="text-gray-600 leading-relaxed">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadPage;
