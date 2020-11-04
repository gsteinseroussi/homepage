import React from "react";
import "../footer/footer.css";

function Footer(props) {
  return (
    <nav className="navbar bottom navbar-light">
      <a
        className="nav-link"
        href={props.href}
        download="Stein-Seroussi Resume"
        target="_blank"
      >
        Download Resume
      </a>
    </nav>
  );
}

export default Footer;
