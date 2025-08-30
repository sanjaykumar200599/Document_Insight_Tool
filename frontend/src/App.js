import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-600">Upload</Link>
          <Link to="/history" className="text-blue-600">History</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
