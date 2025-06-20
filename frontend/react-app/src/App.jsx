import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import GetUser from "./components/GetUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* User operations */}
        <Route path="/getuser" element={<GetUser />} />
        <Route path="/updateuser" element={<UpdateUser />} />

        {/* Optional: Catch-all for undefined routes */}
        <Route path="*" element={<div className="text-center p-10">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
