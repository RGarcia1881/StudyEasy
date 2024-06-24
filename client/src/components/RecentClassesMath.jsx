import React, { useEffect, useState } from "react";
import "../styles/Subject.css";
import { useNavigate } from "react-router-dom";

const RecentClassesMath = () => {
  const [recentClasses, setRecentClasses] = useState([]);
  const Navigate = useNavigate();

  const getSubject = (ns) => {
    return ns === 2 ? "Matemáticas" : "Español";
  };

  useEffect(() => {
    const loadClasses = () => {
      const storedClasses =
        JSON.parse(localStorage.getItem("recentClasses")) || [];
      // Filtrar clases para mostrar solo aquellas cuyo subject es igual a 2
      const filteredClasses = storedClasses.filter(
        (clase) => clase.subject === 2
      );
      setRecentClasses(filteredClasses.slice(0, 4));
    };
    loadClasses();
  }, []);

  const handleCardClick = (clase) => {
    Navigate(`/class/${clase.id}`);
    let recentClasses = JSON.parse(localStorage.getItem("recentClasses")) || [];
    recentClasses = recentClasses.filter((c) => c.id !== clase.id); // Evita duplicados
    recentClasses.unshift(clase); // Agrega la clase al principio del array
    if (recentClasses.length > 5) {
      recentClasses.pop(); // Mantiene solo las 5 clases más recientes
    }
    localStorage.setItem("recentClasses", JSON.stringify(recentClasses));
  };

  return (
    <div className="study-section kodchasan m-11">
      <p className="graytxt">Te quedaste en...</p>
      <br />

      <div className="study-cards flex justify-between mb-4 pr-28">
        {recentClasses.map((clase) => (
          <div
            className="study-card-container w-64"
            onClick={() => handleCardClick(clase)}
            style={{ cursor: "pointer" }}
            key={clase.id}
          >
            <div className="study-card bg-transparent h-48 flex overflow-hidden justify-center items-center">
              <img src={clase.img} alt={clase.title} className="object-cover" />
            </div>
            <p className="subject-title">{getSubject(clase.subject)}</p>
            <p className="subject-description">{clase.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentClassesMath;
