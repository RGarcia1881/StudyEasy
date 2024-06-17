import React from "react";
import logo from "../assets/StudyEasy.png"; // Asegúrate de que esta ruta sea correcta
import "../styles/Forgot.css"; // Asegúrate de importar los estilos

export function Forgot() {
  return (
    <div className="forgot-container h-screen w-full top-24 kodchasan">
      <div className="flex justify-start">
        <div className="flex-col pl-10">
          <a href="/login" className="forgot-link whitespace-nowrap">
            &lt; ¡Ya lo recuerdo!
          </a>
        </div>
        <div className="flex-col spacex">
          <img src={logo} alt="StudyEasy" className="forgot-logo" />
        </div>
      </div>

      <div className="forgot-main pt-32">
        <div className="forgot-circle translate-y-12"></div>
        <div className="forgot-circle-bottom"></div>
        <div className="items-center align-middle flex flex-col pt-20">
          <h1 className="forgot-title">¡No te preocupes, a todos nos pasa!</h1>
          <p className="forgot-subtitle">Ingresa tu número de teléfono.</p>
          <div className="forgot-input-container">
            <i className="bx bx-phone"></i>
            <input
              type="text"
              placeholder="Teléfono"
              className="forgot-input"
            />
          </div>
          <button className="forgot-button">Confirmar</button>
        </div>
      </div>
    </div>
  );
}
