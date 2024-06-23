import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropdownMenu = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login"); // Redirigir a la página de inicio de sesión después de cerrar sesión
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center space-x-2 pr-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        {user && (
          <>
            <img
              src={user.pic}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-black whitespace-nowrap kodchasan">
              {user.name}
            </span>
            <i className="bx bx-chevron-down text-gray-500"></i>
          </>
        )}
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
              role="menuitem"
            >
              Ver perfil
            </a>
            <a
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
              role="menuitem"
            >
              Cerrar sesión
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
