import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";

const Home = () => {
  const subTitle = "{ Jr Full Stack Software Developer }";
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 header">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="title text-center">Benedict Daly</h1>
                </div>
                <div className="col-sm-12">
                  <h3 className="subtitle text-center">{subTitle}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 sub-header">
            <div className="container">
              <div className="row mt-2 justify-content-around">
                <div className="col-4">
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    size="2x"
                    color="#0077b5"
                  />
                </div>
                <div className="col-4">
                  <a href="https://github.com/benedictbutton">
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-12 pt-2">
                  <p className="small">benedictdaly@outlook.com</p>
                </div>
                <div className="col-12">
                  <p className="small">(781) 801-6384</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 flex-grow-1 align-items-stretch">
        <nav className="navbar flex-column navbar-light bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <a className="nav-link" href="#Skills">
                <FontAwesomeIcon icon={["fas", "hammer"]} color="white" />
                <h4 className="text-white">Skills</h4>
              </a>
            </li>
            <li id="navbar-item2" className="nav-item text-center">
              <a className="nav-link" href="#Projects">
                <FontAwesomeIcon icon={["fas", "tools"]} color="white" />
                <h4 className="text-white">Projects</h4>
              </a>
            </li>
            <li id="navbar-item2" className="nav-item text-center">
              <Link to="/resume">
                <FontAwesomeIcon icon={["far", "file-alt"]} color="white" />
                <h4 className="text-white">Resume</h4>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12">
              <Skills />
            </div>

            <div className="col-12">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// <div className="d-flex w-100 flex-column flex-grow-1 align-items-stretch justify-content-center">
export default Home;
