import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backpackImage from "../assets/Utiles.png";
import bg from "../assets/ManchaM.png";
import "../styles/Subject.css";

export function SubjectM() {
  return (
    <div>
      <Navbar />

      <div className="home-container kodchasan overflow-hidden">
        {/* Welcome section */}
        <div className="welcome-section flex justify-start items-center py-10 -mb-32 -mt-32 translate-x-24 overflow-hidden">
          <div className="image-section">
            <img
              src={backpackImage}
              alt="Study materials"
              className="backpack"
            />
          </div>
          <div className="text-section text-center pl-32">
            <img src={bg} className="bgtxt" />
            <i className="bx bx-math bx-lg icon text-white ml-2 mr-3"></i>
            <h1 className="text-6xl text-white">Matemáticas</h1>
            <h5 className="text-2xl text-white">¿Qué tal algo de numeros?</h5>
          </div>

          {/* Bolitas decorativas */}
          <div className="decorative-balls">
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

      {/* Classes Section */}
      <div className="study-section kodchasan m-11">
        <p className="graytxt">Lista de clases</p>
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

      <Footer />
    </div>
  );
}
