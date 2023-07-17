import React from "react";
import Main from "./components/Main";
import Login from "./components/admin_components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/admin_components/AdminDashboard";
import PrivateElement from "./components/admin_components/PrivateElement";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/admin-dashboard"
            element={<PrivateElement element={<AdminDashboard />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
