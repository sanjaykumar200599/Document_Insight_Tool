import React from "react";

function DocumentCard({ doc }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition hover:shadow-xl">
      {/* File Name */}
      <h3 className="text-lg font-bold text-blue-600 truncate">
        📄 {doc.filename}
      </h3>

      {/* Upload Time */}
      <p className="text-sm text-gray-500 mt-1">
        Uploaded on:{" "}
        <span className="font-medium">
          {new Date(doc.uploaded_at).toLocaleString()}
        </span>
      </p>

      {/* AI Summary or Fallback */}
      {doc.summary ? (
        <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-700">AI Summary: </span>
            {doc.summary}
          </p>
        </div>
      ) : (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-700">Fallback Words: </span>
            {doc.fallback_words}
          </p>
        </div>
      )}
    </div>
  );
}

export default DocumentCard;
