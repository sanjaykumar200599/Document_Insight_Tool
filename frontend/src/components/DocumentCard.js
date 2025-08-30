import React from "react";

function DocumentCard({ doc }) {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h3 className="font-semibold">{doc.filename}</h3>
      <p className="text-sm text-gray-500">Uploaded at: {new Date(doc.uploaded_at).toLocaleString()}</p>
      {doc.summary ? (
        <p className="mt-2"><b>AI Summary:</b> {doc.summary}</p>
      ) : (
        <p className="mt-2"><b>Fallback Words:</b> {doc.fallback_words}</p>
      )}
    </div>
  );
}

export default DocumentCard;
