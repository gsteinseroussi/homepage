import React from "react";
import "../header/header.css"
import { NavLink } from "react-router-dom";
import Resume from "../../assets/Resume.pdf"

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light "><span>
      <NavLink to="/" className="title">Garrett Stein-Seroussi</NavLink></span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink className="pageLink" to="/Portfolio">Portfolio</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="pageLink" to="/Contact">Contact</NavLink>
      </li>
      <li>
      <NavLink className="pageLink" to={props.href} download="Stein-Seroussi Resume" target="_blank">Download Resume</NavLink>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Header;
