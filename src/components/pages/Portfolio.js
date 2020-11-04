import React from "react";
import Project from "../project/Project";
import birdtrackerImg from "../../assets/birdtracker.png";
import notetakerImg from "../../assets/notetaker.jpg";
import workdayImg from "../../assets/workday_scheduler.jpg";
import weatherImg from "../../assets/weather.jpg";
import empDirectoryImg from "../../assets/Employee-Directory.jpg";
import burgerImg from "../../assets/Burger-Tracker.jpg";
import artviamusicImg from "../../assets/ArtViaMusic-thumbnail.jpg";
import edhImg from "../../assets/EDH.png"

import "./portfolio.css";

function Portfolio() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Portfolio:</h1>
        <div className="row">
          <Project
            key="1"
            name="Bird Tracker"
            github="https://github.com/gsteinseroussi/Bird-Tracker"
            deployed="https://birdtracker.herokuapp.com/"
            description="A page that allows users to share birds they've spotted and
        view what species' other people have seen."
            image={birdtrackerImg}
          />
          <Project
            key="2"
            name="Educational Data Stream"
            github="https://github.com/gsteinseroussi/Educational-Data-Hub"
            deployed="https://educational-data-stream.herokuapp.com/"
            description="The goal of the Educational Data Stream is to allow a third party data analyst to view educational research, transform that into usable classroom materials, and directly share those with educators."
            image={edhImg}
          />
          <Project
            key="3"
            name="Hourly Workday Scheduler"
            github="https://github.com/gsteinseroussi/Workday-Scheduler"
            deployed="https://github.com/gsteinseroussi/Workday-Scheduler"
            description="A page that allows you to schedule items in an hourly calendar and updates in real time."
            image={workdayImg}
          />
          <Project
            key="4"
            name="Weather App"
            github="https://github.com/gsteinseroussi/Weather-App"
            deployed="https://gsteinseroussi.github.io/Weather-App/"
            description="This page allows a user to look up the forecast in their
            area. They can also save multiple locations to their
            dashboard."
            image={weatherImg}
          />
        </div>
        <div className="row">
          <Project
            key="5"
            name="Art Via Music"
            github="https://github.com/gsteinseroussi/ArtViaMusic"
            deployed="https://s-suresh-kumar.github.io/ArtViaMusic/"
            description="This page explores keyword creation by having the user input
            a song title with the artist's name, extracts keywords, then
            provides a piece of art using those keywords."
            image={artviamusicImg}
          />
          <Project
            key="6"
            name="Employee Directory"
            github="https://github.com/gsteinseroussi/Employee-Directory"
            deployed="https://github.com/gsteinseroussi/Employee-Directory"
            description="Pulling from a random user API, this app compiles a group of 'employees' that can be sorted in alphabetical order, reverse alphabetical order, or can be searched by last name."
            image={empDirectoryImg}
          />
          <Project
            key="7"
            name="Note Taker"
            github="https://github.com/gsteinseroussi/Note-Taker"
            deployed="https://arcane-dawn-08999.herokuapp.com/notes"
            description="A basic note taker app that saves notes to local storage and
          then allows a user to edit or delete them upon completion."
            image={notetakerImg}
          />
          <Project
            key="8"
            name="Menu App"
            github="https://github.com/gsteinseroussi/Burger-Tracker"
            deployed="https://obscure-dusk-37913.herokuapp.com/"
            description="Provides a base level menu app where a user can input the
            name of a burger, then mark if it has been eaten."
            image={burgerImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
