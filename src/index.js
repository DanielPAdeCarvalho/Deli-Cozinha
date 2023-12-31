import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes and Route
import { AuthProvider } from "./AuthContext";
import App from "./App";
import Cozinha from "./pages/Cozinha";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cozinha" element={<Cozinha />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
