import React from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import mapMarkerImg from "../assets/logo-icon.svg";

import "../styles/components/sidebar.css";

// import { Container } from './styles';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowDownLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
