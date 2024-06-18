import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Class } from "./pages/Class";
import { Subject } from "./pages/Subject";
import { SubjectM } from "./pages/SubjectM";
import { Forgot } from "./pages/Forgot";
import { Profile } from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/class" element={<Class />} />
        <Route path="/esp" element={<Subject />} />
        <Route path="/math" element={<SubjectM />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
