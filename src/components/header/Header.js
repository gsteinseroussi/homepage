import React from "react";
import "../header/header.css"
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light "><span>
      <NavLink to="/">Garrett Stein-Seroussi</NavLink></span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item"><span>
      <NavLink to="/Portfolio">Portfolio</NavLink></span>
      </li>
      <li className="nav-item">
        <span>
      <NavLink to="/Contact">Contact</NavLink>
      </span>
      </li>
      <li>
      <NavLink to={props.href} download="Stein-Seroussi Resume" target="_blank">Download Resume</NavLink>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Header;
