import React from "react";
import logo from "../assets/StudyEasy.png"; // Asegúrate de que esta ruta sea correcta
import "../styles/Forgot.css"; // Asegúrate de importar los estilos
import { useNavigate } from "react-router-dom";

export function ForgotC() {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };

  return (
    <div className="forgot-container h-screen w-full top-24 kodchasan">
      <div className="flex justify-start">
        <div className="flex-col pl-10"></div>
        <div className="flex-col spacex">
          <img src={logo} alt="StudyEasy" className="forgot-logo" />
        </div>
      </div>

      <div className="forgot-main pt-32">
        <div className="forgot-circle translate-y-12"></div>
        <div className="forgot-circle-bottom"></div>
        <div className="items-center align-middle flex flex-col pt-20">
          <h1 className="forgot-title">¡No te preocupes, a todos nos pasa!</h1>
          <p className="forgot-subtitle">
            Hemos enviado tu contraseña a tu correo.
          </p>

          <button className="forgot-button" onClick={Login}>
            Ir a Login
          </button>
        </div>
      </div>
    </div>
  );
}
