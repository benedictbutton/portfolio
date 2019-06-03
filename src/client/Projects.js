import React from "react";
import moviesScene from "./assets/Movies-Scene.png";
import cricket from "./assets/Cricket.png";
import tvReviews from "./assets/Tv-Reviews.png";

const Projects = () => {
  return (
    <div
      className="container m-5 carousel slide"
      data-spy="scroll"
      data-target="#navbar-item2"
      data-offset="0"
      id="carouselIndicators"
      data-ride="carousel"
    >
      <div id="Projects" className="row">
        <div className="col-8">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={moviesScene}
                className="d-block w-100"
                alt="project Movies-Scene"
              />
            </div>
            <div className="carousel-item">
              <img
                src={cricket}
                className="d-block w-100"
                alt="project Cricket"
              />
            </div>
            <div className="carousel-item">
              <img
                src={tvReviews}
                className="d-block w-100"
                alt="project Tv-Reviews"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <div className="carousel-outer mt-5">
            <ol className="carousel-indicators">
              <li
                data-target="#carouselIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselIndicators" data-slide-to="1" />
              <li data-target="#carouselIndicators" data-slide-to="2" />
            </ol>
            <a
              className="carousel-control-prev"
              href="#carouselIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
