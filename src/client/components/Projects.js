import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActiveRecord from "../assets/icons/ActiveRecord";
import Enzyme from "../assets/icons/Enzyme";
import Foundation from "../assets/icons/Foundation";
import Jasmine from "../assets/icons/Jasmine";
import Material from "../assets/icons/Material";
import Oauth from "../assets/icons/Oauth";
import Postgres from "../assets/icons/Postgres";
import Rails from "../assets/icons/Rails";
import ReAct from "../assets/icons/ReAct";
import ReactRouter from "../assets/icons/ReactRouter";
import Redux from "../assets/icons/Redux";
import ReduxForms from "../assets/icons/ReduxForms";
import ReduxSaga from "../assets/icons/ReduxSaga";
import Rspec from "../assets/icons/Rspec";
import Technologies from "./Technologies";
import Webpack from "../assets/icons/Webpack";
import Yarn from "../assets/icons/Yarn";
import moviesScene from "../assets/Movies-Scene.png";
import cricket from "../assets/Cricket.png";
import tvReviews from "../assets/Tv-Reviews.png";

const Projects = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(0);
  };

  const movieSite = `http://movies-scene.herokuapp.com`;
  const cricketSite = `http://crickety.herokuapp.com/`;
  const tvSite = `http://tv-reviews.herokuapp.com/`;

  const movieTools = [
    <Rails />,
    <ReAct />,
    <Redux />,
    <Material />,
    <ReactRouter />,
    <Postgres />,
    <ActiveRecord />,
    <ReduxSaga />,
    <ReduxForms />
  ];
  const cricketTools = [
    <Rails />,
    <ReAct />,
    <Foundation />,
    <ReactRouter />,
    <ActiveRecord />,
    <Rspec />,
    <Enzyme />,
    <Oauth />
  ];

  const tvTools = [
    <Rails />,
    <ReAct />,
    <Foundation />,
    <ReactRouter />,
    <ActiveRecord />,
    <Rspec />,
    <Enzyme />,
    <Jasmine />
  ];

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
              <div className="col-12 col-lg-8">
                <img
                  src={moviesScene}
                  className="d-block w-100 img-fluid prj-images"
                  alt="project Movies-Scene"
                />
              </div>
              <div className="col-12 col-lg-3 mt-2 ml-1">
                <h5>Site:</h5>
                <a href={movieSite} alt="link to project">
                  <p className="sm-font">{movieSite}</p>
                </a>
                <h5>Description:</h5>
                <p className="sm-font text-justify text-wrap">
                  Relying on the MovieDB API for general movie info and images,
                  I created my own movie site with an emphasis on rating movies
                  quickly and categorizing them through any number of freely
                  created watchlists, persisting user specific data to my own
                  database. The third movie in the picture shows a movie being
                  rated and added to the user's active playlist.
                </p>
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  data-toggle="modal"
                  data-target="#modalCenter"
                  onClick={() => setCount(1)}
                >
                  View Toolbox
                </button>
                {count === 1 && (
                  <Technologies tools={movieTools} handleCount={handleCount} />
                )}
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-12 col-lg-8">
                <img
                  src={cricket}
                  className="d-block w-100 img-fluid prj-images"
                  alt="project Cricket"
                />
              </div>
              <div className="col-12 col-lg-3 mt-2 ml-1">
                <h5>Site:</h5>
                <a href={cricketSite} alt="link to project">
                  <p className="sm-font">{cricketSite}</p>
                </a>
                <h5>Description:</h5>
                <p className="sm-font text-justify pr-3">
                  A scoring app for the dart game Cricket that allows players to
                  record their play. In the spirit of competitiveness, players
                  can track matches across time, who played whom, and even pause
                  play to resume matches at a later date.
                </p>
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  data-toggle="modal"
                  data-target="#modalCenter"
                  onClick={() => setCount(2)}
                >
                  View Toolbox
                </button>
                {count === 2 && (
                  <Technologies
                    tools={cricketTools}
                    handleCount={handleCount}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-12 col-lg-8">
                <img
                  src={tvReviews}
                  className="d-block w-100 img-fluid prj-images"
                  alt="project Tv-Reviews"
                />
              </div>
              <div className="col-12 col-lg-3 mt-2 ml-1">
                <h5>Site:</h5>
                <a href={tvSite} alt="link to project">
                  <p className="sm-font">{tvSite}</p>
                </a>
                <h5>Description:</h5>
                <p className="sm-font text-justify pr-3">
                  As a member of a team of four at Launch Academy tasked with
                  building an app in a production environment, I contrbuted to
                  the design, development and final deployment of TV a la Carte.
                  Guided by Agile methodology, and ensuring best practices such
                  as adhereance to TDD, almost all of the code was
                  collobratively written through peer programing. The site
                  caters to sharing TV reviews in an open forum.
                </p>
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  data-toggle="modal"
                  data-target="#modalCenter"
                  onClick={() => setCount(3)}
                >
                  View Toolbox
                </button>
                {count === 3 && (
                  <Technologies tools={tvTools} handleCount={handleCount} />
                )}
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
                onClick={() => setCount(0)}
              />
              <li
                data-target="#carouselIndicators"
                data-slide-to="1"
                onClick={() => setCount(0)}
              />
              <li
                data-target="#carouselIndicators"
                data-slide-to="2"
                onClick={() => setCount(0)}
              />
            </ol>
            <a
              className="carousel-control-prev"
              href="#carouselIndicators"
              role="button"
              data-slide="prev"
              onClick={() => setCount(0)}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselIndicators"
              role="button"
              data-slide="next"
              onClick={() => setCount(0)}
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
