import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backpackImage from "../assets/Backpack.png";
import "../styles/Home.css";

export function Home() {
  return (
    <div>
      <Navbar />

      <div className="home-container kodchasan">
        {/* Welcome section */}
        <div className="welcome-section flex justify-start items-center p-0 -translate-y-20">
          <div className="text-section pl-64 text-right">
            <h1 className="text-6xl">
              Bienvenido <span className="text-blue-600">Juan</span>
            </h1>
            <p className="text-2xl text-gray-600">¿Qué vamos a estudiar hoy?</p>
          </div>
          <div className="image-section p-0">
            <img
              src={backpackImage}
              alt="Study materials"
              className="backpack"
            />
          </div>
        </div>
      </div>

      {/* Study Section */}
      <div className="study-section kodchasan m-11 -translate-y-56">
        <h2 className="text-9xl">Te quedaste en...</h2>
        <br></br>
        <div className="study-cards flex justify-between mb-4">
          <div>
            <div className="study-card w-96 h-36"></div>
            <br></br>
            <p className="subject-title">Español</p>
            <p className="subject-description">Vocales y Abecedario</p>
          </div>

          <div>
            <div className="study-card w-96 h-36"></div>
            <br></br>
            <p className="subject-title">Español</p>
            <p className="subject-description">Vocales y Abecedario</p>
          </div>

          <div>
            <div className="study-card w-96 h-36"></div>
            <br></br>
            <p className="subject-title">Español</p>
            <p className="subject-description">Vocales y Abecedario</p>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="subjects-section kodchasan m-11 -translate-y-56">
        <h2 className="text-2xl mb-6">Materias</h2>
        <div className="subjects-cards flex justify-between m-24">
          <div className="subject-card spanish">
            <div className="subject-icon">
              <i class="bx bxs-book-open bx-lg text-white ml-2 mr-3"></i>
            </div>
          </div>
          <p className="subject-name">Español</p>
          <div className="subject-card math">
            <div className="subject-icon">
              <i class="bx bx-phone bx-sm text-white ml-2 mr-3"></i>
            </div>
            <p className="subject-name">Matemáticas</p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
