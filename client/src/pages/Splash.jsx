import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Splash.css";
import logo from "../assets/StudyEasy.png";

export const Splash = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      navigate("/login"); // Cambia '/nextPage' por la ruta de tu próxima página
    }, 3000); // Duración de la animación en milisegundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen absolute">
      <img
        src={logo}
        alt="StudyEasy"
        className={`w-1/3 md:w-1/4 lg:w-1/6 fill-animation`}
      />
    </div>
  );
};
