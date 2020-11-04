/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function ProjectCard(props) {
  return (
    <div id="portfolioCard" className="card">
      <a href={props.deployed} target="_blank">
        <img src={props.image} className="card-img-top" alt={props.name} />
      </a>
      <div class="card-body">
        <h3>{props.name}</h3>
        <p class="card-text" id="portfolioCardText">
          {props.description}
        </p>
        <a href={props.github} target="_blank">
          Github Link
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
