import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
<<<<<<< HEAD
import {Class} from "./pages/Class";

=======
import { Subject } from "./pages/Subject";
>>>>>>> 5153a3fe10ea8c17aa5f13a4de2f5e5b8834f9db

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/class" element={<Class />} />
=======
        <Route path="/subject" element={<Subject />} />
>>>>>>> 5153a3fe10ea8c17aa5f13a4de2f5e5b8834f9db
      </Routes>
    </BrowserRouter>
  );
}

export default App;
