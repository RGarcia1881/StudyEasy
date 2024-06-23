import React from "react";
import "../styles/Content.css"; // Asegúrate de crear un archivo CSS con los estilos necesarios

const FormattedContent = ({ content }) => {
  const lines = content.split("\n");
  return (
    <div className="formatted-content">
      {lines.map((line, index) => (
        <p key={index} className="formatted-line">
          {line.split(" ").map((word, i) => (
            <span key={i} className="hover-word">
              {word + " "}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default FormattedContent;
