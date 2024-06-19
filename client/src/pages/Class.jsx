import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import icon from "../assets/wato.jpg";
import "../styles/Class.css";

export function Class() {
  return (
    <div className="class-container">
      <Navbar />
      <div className="content">
        <div className="header">
          <div className="images">
            <img src={icon} alt="Icono" className="image" />
          </div>
          <div className="titles">
            <h1>Clase 1</h1>
            <h2>Vocales y Abecedario</h2>
            {/* Bolitas decorativas */}
            <div className="decorative-balls-class ">
              <div className="ball ball-blue-class"></div>
              <div className="ball ball-orange-class"></div>
              <div className="ball ball-blue-small-class"></div>
              <div className="ball ball-orange-small-class"></div>
            </div>
          </div>
        </div>
        <h3 className="subtitle">Título</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="video">
          <br></br>
        </div>
        <div className="video-label">
          <p>Verbos conjugados</p>
        </div>
        <div className="footer">
          <p className="congratulations">¡Felicidades!</p>
          <p>
            Terminaste la lección. Cuando estes listo, presiona el botón para
            realizar el cuestionario.
          </p>
          <button className="ready-button">¡Estoy listo!</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
