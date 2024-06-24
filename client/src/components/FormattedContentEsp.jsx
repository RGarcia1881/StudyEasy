import React from "react";
import "../styles/ContentEsp.css"; // Asegúrate de crear un archivo CSS con los estilos necesarios

const FormattedContentEsp = ({ content }) => {
  const lines = content.split("\n");
  return (
    <div className="formatted-content">
      {lines.map((line, index) => (
        <p key={index} className="formatted-line">
          {line.split(" ").map((word, i) => (
            <span key={i} className="hover-word-esp">
              {word + " "}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default FormattedContentEsp;
