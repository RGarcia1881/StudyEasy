import React, { useEffect, useState } from "react";
import "../styles/Subject.css";
import { getClasses } from "../api/django.api";
import { useNavigate } from "react-router-dom";

const ClassListEsp = () => {
  const [clases, setClases] = useState([]);
  const Navigate = useNavigate();

  const getSubject = (ns) => {
    try {
      if ((ns = 1)) {
        return "Matemáticas";
      } else {
        return "Español";
      }
    } catch (err) {
      return null;
    }
  };

  useEffect(() => {
    async function loadClasses() {
      const response = await getClasses();
      // Filtrar clases para mostrar solo aquellas cuyo subject es igual a 1
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

  const handleCardClick = (id) => {
    Navigate(`/class/${id}`);
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
              onClick={() => handleCardClick(clase.id)}
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

export default ClassListEsp;
