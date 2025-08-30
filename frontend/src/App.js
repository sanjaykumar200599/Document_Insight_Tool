import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Navbar */}
        <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo / Title */}
            <h1 className="text-xl font-extrabold text-white tracking-wide">
              🚀 Document Insight Tool
            </h1>

            {/* Links */}
            <div className="flex gap-6">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                      : "text-gray-300 hover:text-blue-300"
                  }`
                }
              >
                Upload
              </NavLink>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                      : "text-gray-300 hover:text-blue-300"
                  }`
                }
              >
                History
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
