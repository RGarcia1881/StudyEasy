import React from "react";
import logo from "../assets/StudyEasy.png"; // Asegúrate de que esta ruta sea correcta
import "../styles/Register.css";
import "boxicons/css/boxicons.min.css";

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-white">
      {/* Rectangles for the background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="lightorange absolute transform"></div>
        <div className="orange absolute transform "></div>
      </div>
      {/* Card for the login form */}
      <div className="absolute z-10 flex flex-col items-center p-8 bg-white cardregister">
        {/* Contenido */}
        {/* Logo */}
        <img src={logo} alt="StudyEasy" className="logoformregister mb-4" />
        {/* Titulo */}
        <h1 className="text-5xl orangetext mb-8 kodchasan">
          ¡Bienvenido al equipo!
        </h1>
        <br></br>
        {/* Formulario */}
        <div className="w-full mb-6 justify-center items-center">
          <div className="w-full mb-4 justify-center items-center px-20">
            <label className="flex items-center border rounded-full p-2">
              <i class="bx bx-user bx-sm text-gray-500 ml-2 mr-3"></i>
              <input
                type="text"
                placeholder="Nombre"
                className="flex-1 border-none outline-none h-8 w-9"
              />
            </label>
          </div>
          <br></br>
          <div className="w-full mb-4 justify-center items-center px-20">
            <label className="flex items-center border rounded-full p-2">
              <i class="bx bx-phone bx-sm text-gray-500 ml-2 mr-3"></i>
              <input
                type="text"
                placeholder="Teléfono"
                className="flex-1 border-none outline-none h-8 w-9"
              />
            </label>
          </div>
          <br></br>
          <div className="w-full mb-6 justify-center items-center px-20">
            <label className="flex border rounded-full p-2">
              <i class="bx bx-lock-alt bx-sm text-gray-500 ml-2 mr-3"></i>
              <input
                type="password"
                placeholder="Contraseña"
                className="flex-1 border-none outline-none h-8 w-9"
              />
            </label>
          </div>
        </div>

        <button className="w-1/4 orangebg text-white rounded-xl py-3 mb-4 h-2/4">
          ¡Anotáme!
        </button>
      </div>
      <div className="absolute bottom-20 right-80 flex items-center space-x-2">
        <button className="light-orange-button text-white text-3xl kodchasan rounded-full px-4 py-2 flex items-center">
          <i className="fas fa-arrow-left mr-2"></i>
          Ya tengo cuenta
        </button>
      </div>
    </div>
  );
};
