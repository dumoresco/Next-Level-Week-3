import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "../styles/pages/orphanage-map.css";

import logoIcon from "../assets/logo-icon.svg";

import { FiPlus } from "react-icons/fi";

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={logoIcon} alt="Icone logo" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>

      <Map
        center={[-30.1106448, -51.231772]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
