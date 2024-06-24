import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import backpackImage from "../assets/Backpack.png";
import "../styles/Home.css";
import RecentClassesHome from "../components/RecentClassesHome";

export function Home() {
  const [user, setUser] = useState(null);

  const Navigate = useNavigate();

  const espNavigation = () => {
    Navigate("/esp");
  };

  const mathNavigation = () => {
    Navigate("/math");
  };

  useEffect(() => {
    console.log(localStorage.getItem("user"));
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div>
      <div className="home-container kodchasan overflow-hidden">
        {/* Welcome section */}
        <div className="welcome-section flex justify-start items-center py-10 -mb-32 -mt-32 translate-x-24 overflow-hidden">
          {user && (
            <div className="text-section text-right pl-64">
              <h1 className="text-6xl">
                Bienvenido <span className="text-blue-600">{user.name}</span>
              </h1>
              <p className="text-2xl text-gray-600">
                ¿Qué vamos a estudiar hoy?
              </p>
            </div>
          )}

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
      <RecentClassesHome />

      {/* Subjects Section */}
      <div id="Materias" className="subjects-section kodchasan m-11">
        <br />
        <h2 className="graytxt">Materias</h2>
        <br />
        <div className="subjects-cards flex justify-between mx-48">
          <div
            onClick={espNavigation}
            href="/esp"
            className="subject-card bg spanish"
          >
            <i className="bx bxs-book-open bx-lg icon text-white ml-2 mr-3"></i>
          </div>

          <div onClick={mathNavigation} className="subject-card bg math">
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
