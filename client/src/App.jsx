import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Class } from "./pages/Class";
import { ClassEsp } from "./pages/ClassEsp";
import { Subject } from "./pages/Subject";
import { SubjectM } from "./pages/SubjectM";
import { Forgot } from "./pages/Forgot";
import { Profile } from "./pages/Profile";
import { ForgotC } from "./pages/ForgotC";
import { ForgotE } from "./pages/ForgotE";

import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Guardar el usuario en el almacenamiento local
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Eliminar el usuario del almacenamiento local
  };

  const handlePhoneSubmitted = (phone, email) => {
    setPhone(phone);
    setEmail(email);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register onLogin={handleLogin} />}
          />
          <Route path="/class/:id" element={<Class />} />
          <Route path="/classEsp/:id" element={<ClassEsp />} />
          <Route path="/esp" element={<Subject />} />
          <Route path="/math" element={<SubjectM />} />
          <Route
            path="/forgot"
            element={<Forgot onPhoneSubmitted={handlePhoneSubmitted} />}
          />
          <Route path="/forgotC" element={<ForgotC />} />
          <Route
            path="/forgotE"
            element={<ForgotE phone={phone} defaultEmail={email} />}
          />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route
            path="/"
            element={<Navigate to={user ? "/home" : "/splash"} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
