import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import icon from "../assets/wato.jpg";
import "../styles/Profile.css";

export function Profile() {
  // Variable para cachar el valor de las progress bar
  const [progressData, setProgressData] = useState({ spanish: 50, math: 70 });

  // Función para jalar los valores, no se como le hagas Raúl xd
  useEffect(() => {
    // Simulación de llamada al backend
    fetch("/api/user/progress")
      .then((response) => response.json())
      .then((data) => setProgressData(data))
      .catch((error) => console.error("Error fetching progress data:", error));
  }, []);

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        <div className="profile-text-section pl-24">
          <h1 className="text-3xl flex items-center">
            <img src={icon} alt="User Icon" className="user-icon mr-4" />
            ¡Hola, <span className="text-blue-600"> Juan</span>!
          </h1>
          <p>Estos son tus datos</p>
          <div className="data-box-container mt-1">
            <div className="data-box bg-gray-200 p-4 mt-4">
              <p>
                <span className="text-blue-600">Nombre: </span> Juan
              </p>
              <p>
                <span className="text-blue-600">Teléfono: </span> 55 9876 1245
              </p>
              <p>
                <span className="text-blue-600">Contraseña: </span>******
              </p>
              <div className="button-container">
                <button className="edit-button mt-4">Editar</button>
              </div>
            </div>
            <div>
              <img src={icon} alt="Icono" className="image-profile" />
              <div className="decorative-balls-profile "></div>
              <div className="ball ball-blue-profile"></div>
              <div className="ball ball-orange-profile"></div>
              <div className="ball ball-blue-small-profile"></div>
              <div className="ball ball-orange-small-profile"></div>
            </div>
          </div>

          <div className="subjects-section kodchasan m-11">
            <br />
            <h2 className="graytxt">Y este es tu camino recorrido</h2>
            <br />
            <div className="subjects-cards-profile flex justify-between mx-48">
              <div
                className="subject-card-profile spanish"
                style={{ "--progress-height": `${progressData.spanish}%` }}
              >
                <div className="progress-bar"></div>
                <i className="bx bxs-book-open bx-lg icon text-white ml-2 mr-3"></i>
              </div>

              <div
                className="subject-card-profile math"
                style={{ "--progress-height": `${progressData.math}%` }}
              >
                <div className="progress-bar"></div>
                <i className="bx bx-math bx-lg icon text-white ml-2 mr-3"></i>
              </div>
            </div>

            <div className="subjects-text flex justify-between items-center mx-48 mt-4">
              <p className="text-lg text-center textspanish w-2/5 text-gray-600">
                Español
              </p>
              <p className="text-lg text-center textmath w-2/5 text-gray-600">
                Matemáticas
              </p>
            </div>
          </div>

          <div className="modifiable-section">
            <p>Algunas cositas que puedes modificar...</p>
            <div className="cositas-modificables">
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
