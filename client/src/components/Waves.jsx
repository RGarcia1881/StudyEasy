import React from "react";
import "../styles/Waves.css";

const Waves = () => {
  return (
    <div className="wave-container fixed ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="fixed"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#1380E4", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#58B6FD", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
        <path
          fill="url(#waveGradient)"
          fill-opacity="1"
          d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,106.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Waves;
