import React from "react";
import logo from "../assets/StudyEasy.png"; // Asegúrate de que esta ruta sea correcta
import "../styles/Login.css";
import "boxicons/css/boxicons.min.css";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-white">
      {/* Rectangles for the background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="lightblue absolute transform"></div>
        <div className="blue absolute transform "></div>
      </div>

      {/* Card for the login form */}
      <div className="absolute z-10 flex flex-col items-center p-8 bg-white card">
        {/* Contenido */}
        {/* Logo */}
        <img src={logo} alt="StudyEasy" className="logoform mb-4" />
        {/* Titulo */}
        <h1 className="text-6xl bluetext mb-8 kodchasan">¡Hola de nuevo!</h1>
        <br></br>
        {/* Formulario */}
        <div className="w-full mb-6 justify-center items-center">
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

        <button className="w-1/4 bluebg text-white rounded-xl py-3 mb-4 h-2/4">
          ¡Vamos allá!
        </button>

        <br></br>
        <div className="flex justify-end w-full text-sm ">
          <a href="#" className="hover:underline bluetext kodchasan">
            Lo olvidé...
          </a>
        </div>
        <br></br>
        <div className="flex justify-end w-full text-sm ">
          <a href="#" className="hover:underline kodchasan">
            Solo vengo de paso
          </a>
        </div>

        {/* <div className="absolute bottom-8 left-8 flex items-center space-x-2">
          <button className="bg-blue-300 text-white rounded-full px-4 py-2 flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>
            No tengo cuenta
          </button>
        </div> */}
      </div>
    </div>
  );
};
