import React from "react";
import Logo from "../../Assets/Images/Logo.png";
import "../Navbar/style.css";

export default function Navbar() {
  return (
    <div className="app">
      <div className="nav-bar">
        <nav>
          <img className="nav-logo" src={Logo} />

          <div className="fast-search">
            <label>Pesquisa Rápida: </label>
            <input placeholder="Pesquisar"></input>
          </div>
        </nav>
      </div>
    </div>
  );
}
