import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backpackImage from "../assets/Backpack.png";
import "../styles/Home.css";

export function Home() {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <h1 className="text-blue-800">Home</h1>
      <p>Welcome to the home page!</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
=======

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

      {/* Classes Section */}
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

>>>>>>> 5153a3fe10ea8c17aa5f13a4de2f5e5b8834f9db
      <Footer />
    </div>
  );
}
