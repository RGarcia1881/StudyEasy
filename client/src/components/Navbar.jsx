import React from "react";
import logo from "../assets/StudyEasy.png"; // Logo
import "boxicons/css/boxicons.min.css"; // Importa los estilos de Boxicons
import "../styles/Navbar.css"; // Importa los estilos de Navbar
import { useState, useEffect } from "react"; // Importa useState y useEffect

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <nav className="flex items-center justify-between alignright py-5 bg-white ">
      <div className="flex items-center">
        <img src={logo} alt="StudyEasy" className="logonav mr-10" />

        <ul className="flex space-x-10">
          <li className="navlink active">Inicio</li>
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
          {user && (
            <img
              src={user.pic}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          )}

          {user && (
            <span className="text-black whitespace-nowrap kodchasan">
              {user.name}
            </span>
          )}

          <i className="bx bx-chevron-down text-gray-500"></i>
        </div>
        <div className="pl-4 border-l border-gray-300">
          <button className="buttonnav text-white px-4 py-2 rounded-full flex items-center whitespace-nowrap">
            Crear foro <i className="bx bx-plus text-xl ml-1"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
