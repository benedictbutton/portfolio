import React from "react";
import BankofAmerica from "../assets/icons/BankofAmerica";
import Symetra from "../assets/icons/Symetra";
import launchLogo from "../assets/launchLogo.png";

const Work = () => {
  return (
    <div className="accordion mt-5" id="accordionOne">
      <div className="card border-primary bg-dark">
        <div className="card-header m-0 p-0" id="headingOne">
          <h4 className="mb-0">
            <button
              className="btn btn-link text-white"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <Symetra />
            </button>
          </h4>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionOne"
        >
          <div className="card-body">
            <h5 className="card-title">Contract Worker</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Nov 2017 - Aug 2018
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">Waltham MA</h6>
            <ul className="md list-group list-group-flush">
              <li className="list-group-item bg-dark shadow-lg">
                Coordinated document procurement between medical underwriters,
                group underwriters, case managers, and various contracted third
                parties
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                On request, voluntarily extended temporary assignment with
                company by eight months to support the completion of their pilot
                project
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card border-primary bg-dark">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed text-white"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <img src={launchLogo} />
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionOne"
        >
          <div className="card-body">
            <h5 className="card-title">Jr. Full Stack Web Developer</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Mar 2017 - May 2017
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">Boston MA</h6>
            <ul className="list-unstyled md">
              <li className="list-group-item bg-dark shadow-lg">
                Developed critical, applicable programming skills in building
                full scale web applications
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                Worked extensively with Ruby on Rails and Reactjs in coupling a
                RESTful API with an interactive and responsive frontend
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                Learned the importance of Test Driven Development with exposure
                to Rspec, Capybara, Jasmine, Enzyme, and Sinon
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                In a collaborative team setting, utilized pair-programming,
                Agile methodology, and Git for our version control system
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                Mapped databases using ER diagrams and various UML visuals for
                modeling relationships
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                Styled responsive webpages with CSS and Sass, leveraging
                Foundation's rich library of UI components and following design
                best practices such as mobile-first
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card border-primary bg-dark">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <BankofAmerica />
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionOne"
        >
          <div className="card-body">
            <h5 className="card-title">Sales & Service Specialist</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Mar 2010 - April 2016
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">Boston MA</h6>
            <ul className="list-unstyled md">
              <li className="list-group-item bg-dark shadow-lg">
                Resolved account service issues for clients, ensuring follow
                through on commitments to outstanding problems
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                Main contact at branch to the project team piloting the
                automation of banking centers company wide.
              </li>{" "}
              <li className="list-group-item bg-dark shadow-lg">
                Coordinated on exposed policy issues and customer concerns
                related to the new technology
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                Coordinated referral of client needs to various consumer and
                small banking specialists
              </li>
              <li className="list-group-item bg-dark shadow-lg">
                Assisted international clients by offering guidance on
                navigating issues specific to the United States financial system
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
