import React, { useEffect, useState } from "react";
import "../styles/Subject.css";
import { getClasses } from "../api/django.api";
import { useNavigate } from "react-router-dom";

const ClassListMath = () => {
  const [clases, setClases] = useState([]);
  const Navigate = useNavigate();

  const getSubject = (ns) => {
    return ns === 2 ? "Matemáticas" : "Español";
  };

  useEffect(() => {
    async function loadClasses() {
      const response = await getClasses();
      // Filtrar clases para mostrar solo aquellas cuyo subject es igual a 2
      const filteredClasses = response.data.filter(
        (clase) => clase.subject === 2
      );
      setClases(filteredClasses);
    }
    loadClasses();
  }, []);

  const rows = [];
  for (let i = 0; i < clases.length; i += 4) {
    rows.push(clases.slice(i, i + 4));
  }

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
      <p className="graytxt">Lista de clases</p>
      <br />

      {rows.map((row, rowIndex) => (
        <div
          className="study-cards flex justify-between mb-4 pr-28"
          key={rowIndex}
        >
          {row.map((clase) => (
            <div
              className="study-card-container w-64"
              onClick={() => handleCardClick(clase)}
              style={{ cursor: "pointer" }}
              key={clase.id}
            >
              <div className="study-card bg-transparent h-48 flex overflow-hidden justify-center items-center">
                <img
                  src={clase.img}
                  alt={clase.title}
                  className="object-cover"
                />
              </div>
              <p className="subject-title">{getSubject(clase.subject)}</p>
              <p className="subject-description">{clase.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ClassListMath;
