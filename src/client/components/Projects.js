import React from "react";
import { Link } from "react-router-dom";
import moviesScene from "../assets/Movies-Scene.png";
import cricket from "../assets/Cricket.png";
import tvReviews from "../assets/Tv-Reviews.png";

const Projects = () => {
  const movieSite = `http://movies-scene.herokuapp.com`;
  const cricketSite = `http://crickety.herokuapp.com/`;
  const tvSite = `http://tv-reviews.herokuapp.com/`;
  return (
    <div
      className="container-fluid mt-5 carousel slide"
      id="carouselIndicators"
      data-ride="carousel"
      data-interval="false"
    >
      <div className="row">
        <div className="carousel-inner border border-primary bg-dark">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-8">
                <img
                  src={moviesScene}
                  className="d-block w-100"
                  alt="project Movies-Scene"
                />
              </div>
              <div className="col-4 mt-3">
                <h5>Site:</h5>
                <Link to={movieSite}>
                  <p className="sm-font">{movieSite}</p>
                </Link>
                <h5>Description:</h5>
                <p className="sm-font">
                  Relying on the MovieDB API for general movie info and images,
                  I created my own movie site with an emphasis on rating movies
                  quickly and categorizing them through any number of freely
                  created watchlists, persisting user specific data to my own
                  database. The third movie in the picture shows a movie when
                  hovering the mouse over it.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-8">
                <img
                  src={cricket}
                  className="d-block w-100"
                  alt="project Cricket"
                />
              </div>
              <div className="col-4 mt-3">
                <h5>Site:</h5>
                <Link to={cricketSite}>
                  <p className="sm-font">{cricketSite}</p>
                </Link>
                <h5>Description:</h5>
                <p className="sm-font">
                  A scoring app for the dart game Cricket that allows players to
                  record their play. In the spirit of competitiveness, players
                  can track matches across time, who played whom, and even pause
                  play to resume matches at a later date.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-8">
                <img
                  src={tvReviews}
                  className="d-block w-100"
                  alt="project Tv-Reviews"
                />
              </div>
              <div className="col-4 mt-3">
                <h5>Site:</h5>
                <Link to={tvSite}>
                  <p className="sm-font">{tvSite}</p>
                </Link>
                <h5>Description:</h5>
                <p className="sm-font">
                  As a member of a team of four at Launch Academy tasked with
                  building an app in a production environment, I contrbuted to
                  the design, development and final deployment of TV a la Carte.
                  Guided by Agile methodology, and ensuring best practices such
                  as adhereance to TDD, almost all of the code was
                  collobratively written through peer programing. The site
                  caters to sharing TV reviews in an open forum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
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
              <span
                className="carousel-control-next-icon pointer"
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
