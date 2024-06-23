import React from "react";
import Footer from "../components/Footer";
import "../styles/Class.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClassDetail } from "../api/django.api";
import FormattedContent from "../components/FormattedContent";

export function Class() {
  const { id } = useParams();
  const [clase, setClase] = useState(null);

  const transformLinkToEmbed = (link) => {
    const videoId = link.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    return ampersandPosition !== -1
      ? `https://www.youtube.com/embed/${videoId.substring(
          0,
          ampersandPosition
        )}`
      : `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    async function loadClassDetail() {
      const response = await getClassDetail(id);
      setClase(response.data);
    }
    loadClassDetail();
  }, [id]);

  return (
    <div className="kodchasan">
      {clase && (
        <div className="content justify-center flex-col align-middle">
          <div className="header">
            <div className="images">
              <img src={clase.img} alt="Icono" className="image" />
            </div>
            {/* Bolitas decorativas */}
            <div className="decorative-balls-class">
              <div className="ball ball-blue-class"></div>
              <div className="ball ball-orange-class"></div>
              <div className="ball ball-blue-small-class"></div>
              <div className="ball ball-orange-small-class"></div>
            </div>
            <div className="titles justify-start -translate-x-80 whitespace-nowrap">
              <h1>Lección {clase.class_number}:</h1>
              <h2>{clase.title}</h2>
            </div>
          </div>
          <div className="-translate-y-30">
            <h3 className="subtitle">{clase.title}</h3>
            <FormattedContent content={clase.content} />
          </div>

          <br></br>
          <br></br>
          <div className="align-middle justify-center flex">
            <iframe
              width="560"
              height="315"
              src={transformLinkToEmbed(clase.link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg bg-slate-300 video"
            ></iframe>
          </div>
          <div className="video-label">
            <p>{clase.title}</p>
          </div>
          <div className="footer">
            <p className="congratulations">¡Felicidades!</p>
            <p>
              Terminaste la lección. Cuando estes listo, presiona el botón para
              realizar el cuestionario.
            </p>
            <br></br>
            <button className="ready-button">¡Estoy listo!</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
