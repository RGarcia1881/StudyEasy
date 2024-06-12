import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Subject } from "./pages/Subject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subject" element={<Subject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
