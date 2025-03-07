import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <AuthProvider>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </AuthProvider>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
