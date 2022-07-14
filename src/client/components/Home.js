import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Work from "./Work";

const Home = () => {
  const subTitle = "{ Software Engineer }";
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
              <div className="row mt-2 justify-content-center">
                <div className="col-4">
                  <a href="https://www.linkedin.com/in/benedictdaly/">
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      size="2x"
                      color="#0077b5"
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a href="https://github.com/benedictbutton">
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-12 pt-2">
                  <p className="small text-center">benedictdaly@outlook.com</p>
                </div>
                <div className="col-12">
                  <p className="small text-center mt-0">(781) 801-6384</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="navbar-tracker"
        className="d-flex w-100 flex-grow-1 align-items-stretch"
      >
        <nav className="navbar navbar-light p-0 flex-column">
          <ul className="nav nav-pills flex-column p-0 sticky-top">
            <li className="nav-item text-center mt-4 mb-4">
              <a className="nav-link active p-0" href="#skills">
                <FontAwesomeIcon icon={["fas", "hammer"]} color="white" />
                <h5 className="text-white">Skills</h5>
              </a>
            </li>
            <li className="nav-item text-center mb-4">
              <a className="nav-link p-0" href="#projects">
                <FontAwesomeIcon icon={["fas", "tools"]} color="white" />
                <h5 className="text-white">Projects</h5>
              </a>
            </li>
            <li className="nav-item text-center mb-4">
              <a className="nav-link p-0" href="#work">
                <FontAwesomeIcon icon={["fas", "briefcase"]} color="white" />
                <h5 className="text-white">Work Experience</h5>
              </a>
            </li>
            <li className="nav-item text-center mb-4">
              <a className="nav-link p-0" href="#education">
                <FontAwesomeIcon
                  icon={["fas", "graduation-cap"]}
                  color="white"
                />
                <h5 className="text-white">Education</h5>
              </a>
            </li>
            <li className="nav-item text-center mb-4">
              <a className="nav-link p-0" href="#contact">
                <FontAwesomeIcon icon={["far", "envelope"]} color="white" />
                <h5 className="text-white">Contact</h5>
              </a>
            </li>
            <li className="nav-item text-center">
              <Link to="/resume">
                <FontAwesomeIcon icon={["far", "file-alt"]} color="white" />
                <h5 className="text-white">Resume</h5>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container-fluid mt-5 tracker">
          <div className="row">
            <div id="skills" className="col-12">
              <Skills />
            </div>

            <div id="projects" className="col-12">
              <Projects />
            </div>

            <div id="work" className="col-12">
              <Work />
            </div>

            <div id="education" className="col-12">
              <Education />
            </div>

            <div id="contact" className="col-12">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// <div className="d-flex w-100 flex-column flex-grow-1 align-items-stretch justify-content-center">
export default Home;
