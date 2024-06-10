import React from "react";
import logo from "../assets/StudyEasy.png"; // Asegúrate de que esta ruta sea correcta
import Waves from "./Waves";

const Footer = () => {
  return (
    <footer className="text-white relative ">
      <div className="flex space-x-24 translate-y-24">
        <div className="flex space-x-24">
          <div className="flex flex-col translate-x-10 translate-y-3">
            <img src={logo} alt="StudyEasy" className="w-16 h-16" />
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold"> Algunas cositas mas</h4>
            <a href="#" className="text-gray-200">
              Sobre nosotros
            </a>

            <a href="#" className="text-gray-200">
              Contacto
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <br></br>

            <a href="#" className="text-gray-200">
              Soporte
            </a>

            <a href="#" className="text-gray-200">
              Preguntas frecuentes
            </a>
          </div>
        </div>
      </div>
      <div>
        <Waves />
      </div>
    </footer>
  );
};

export default Footer;
