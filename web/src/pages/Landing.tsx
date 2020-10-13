import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/landing.css";

import logo from "../assets/logo.svg";

import { FiArrowRight } from "react-icons/fi";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="Logo happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
        <div className="location">
          <strong>Porto Alegre</strong>
          <span>Rio Grande do sul</span>
        </div>

        <Link to="/orphanages-map" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
