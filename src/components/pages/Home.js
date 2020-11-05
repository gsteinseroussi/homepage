import React from "react";
import ProfilePic from "../../assets/profile.jpg";
import "./home.css";

function Home() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Garrett Stein-Seroussi</h1>
        <div className="container px-lg-5">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={ProfilePic}
                  className="card-img"
                  alt="Garrett Stein-Seroussi"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text" id="homeText">
                    I am an enthusiastic full-stack web developer eager to
                    contribute to team success through hard work, attention to
                    detail, and excellent organizational skills. I have a clear
                    understanding of front and back end development and training
                    in Javascript, HTML, CSS, Node JS, Express, Sequelize, and
                    more. Having spent many years working in various different
                    fields, I am now motivated to learn, grow, and excel in a
                    long term career in computer coding.
                  </p>
                  <br></br>
                  <p className="card-text" id="homeText">
                    I currently live in Hillsborough, NC with my wife and two
                    dogs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
