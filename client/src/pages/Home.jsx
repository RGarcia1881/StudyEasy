import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backpackImage from "../assets/Backpack.png";
import "../styles/Home.css";

export function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container kodchasan overflow-hidden">
        {/* Welcome section */}
        <div className="welcome-section flex justify-start items-center py-10 -mb-32 -mt-32 translate-x-24 overflow-hidden">
          <div className="text-section text-right pl-64">
            <h1 className="text-6xl">
              Bienvenido <span className="text-blue-600">Juan</span>
            </h1>
            <p className="text-2xl text-gray-600">¿Qué vamos a estudiar hoy?</p>
          </div>
          <div className="image-section">
            <img
              src={backpackImage}
              alt="Study materials"
              className="backpack"
            />
          </div>

          {/* Bolitas decorativas */}
          <div className="decorative-balls ">
            <div className="ball ball-blue"></div>
            <div className="ball ball-orange"></div>
            <div className="ball ball-blue-small"></div>
            <div className="ball ball-orange-small"></div>
          </div>
        </div>
      </div>

      {/* Study Section */}
      <div className="study-section kodchasan m-11">
        <p className="graytxt">Te quedaste en...</p>
        <br />
        <div className="study-cards flex justify-between mb-4">
          <div>
            <div className="study-card w-96 h-36"></div>
            <br />
            <p className="subject-title">Español</p>
            <p className="subject-description">Vocales y Abecedario</p>
          </div>

          <div>
            <div className="study-card w-96 h-36"></div>
            <br />
            <p className="subject-title">Español</p>
            <p className="subject-description">Vocales y Abecedario</p>
          </div>

          <div>
            <div className="study-card w-96 h-36"></div>
            <br />
            <p className="subject-title">Español</p>
            <p className="subject-description">Vocales y Abecedario</p>
          </div>

          <div>
            <div className="study-card w-96 h-36"></div>
            <br />
            <p className="subject-title">Español</p>
            <p className="subject-description">Vocales y Abecedario</p>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="subjects-section kodchasan m-11">
        <br />
        <h2 className="graytxt">Materias</h2>
        <br />
        <div className="subjects-cards flex justify-between mx-48">
          <div className="subject-card bg spanish">
            <i className="bx bxs-book-open bx-lg icon text-white ml-2 mr-3"></i>
          </div>

          <div className="subject-card bg math">
            <div className="subject-icon">
              <i className="bx bx-math bx-lg text-white ml-2 mr-3"></i>
            </div>
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

      <Footer />
    </div>
  );
}
