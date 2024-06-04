import React from "react";
import logo from "../assets/StudyEasy.png"; // Logo
import "boxicons/css/boxicons.min.css"; // Importa los estilos de Boxicons
import "../styles/Navbar.css"; // Importa los estilos de Navbar

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between alignright py-5 bg-white">
      <div className="flex items-center">
        <img src={logo} alt="StudyEasy" className="logonav mr-10" />

        <ul className="flex space-x-10">
          <li className="navlink">Inicio</li>
          <li className="navlink">Materias</li>
          <li className="navlink">Mis clases</li>
          <li className="navlink">Biblioteca</li>
        </ul>
      </div>

      {/* Parte derecha */}
      <div className="flex items-center space-x-6 ">
        <div className="flex items-center space-x-2 border-r border-gray-300 pr-4">
          <i className="bx bxs-chat bx-tada-hover text-gray-500 text-2xl"></i>
        </div>
        <div className="flex items-center space-x-2 border-r border-gray-300 pr-4">
          <i className="bx bxs-bell bx-tada-hover text-gray-500 text-2xl"></i>
        </div>

        <div className="flex items-center space-x-2 pr-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-500 whitespace-nowrap">Juan Pérez</span>
          <i className="bx bx-chevron-down text-gray-500"></i>
        </div>
        <div className="pl-4 border-l border-gray-300">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center whitespace-nowrap">
            Crear foro <i className="bx bx-plus text-xl ml-1"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
