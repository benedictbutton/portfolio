import React from "react";
import ActiveRecord from "./assets/icons/ActiveRecord";
import Bootstrap from "./assets/icons/Bootstrap";
import Css from "./assets/icons/Css";
import Enzyme from "./assets/icons/Enzyme";
import Foundation from "./assets/icons/Foundation";
import Git from "./assets/icons/Git";
import Html from "./assets/icons/Html";
import Jasmine from "./assets/icons/Jasmine";
import Javascript from "./assets/icons/Javascript";
import Jquery from "./assets/icons/Jquery";
import Material from "./assets/icons/Material";
import Postgres from "./assets/icons/Postgres";
import Node from "./assets/icons/Node";
import Rails from "./assets/icons/Rails";
import ReAct from "./assets/icons/ReAct";
import ReactRouter from "./assets/icons/ReactRouter";
import Redux from "./assets/icons/Redux";
import ReduxSaga from "./assets/icons/ReduxSaga";
import Rspec from "./assets/icons/Rspec";
import Ruby from "./assets/icons/Ruby";
import Webpack from "./assets/icons/Webpack";
import Yarn from "./assets/icons/Yarn";

const Skills = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-group">
            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">Languages</h4>
              <div className="card-body">
                <div className="container">
                  <div className="row justify-content-around align-items-center">
                    <div className="col text-center">
                      <Javascript />
                    </div>
                    <div className="col text-center">
                      <Ruby />
                    </div>
                    <div className="w-100" />
                    <div className="col text-center">
                      <Html />
                    </div>
                    <div className="col text-center">
                      <Css />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">
                Frameworks & Libraries
              </h4>
              <div className="card-body">
                <div className="container">
                  <div className="row justify-content-around align-items-center">
                    <div className="col text-center">
                      <Rails />
                    </div>
                    <div className="col text-center">
                      <ReAct />
                    </div>
                    <div className="w-100" />
                    <div className="col text-center">
                      <Node />
                    </div>
                    <div className="col text-center">
                      <Redux />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">Repsonsive UI Design</h4>
              <div className="card-body">
                <div className="container">
                  <div className="row justify-content-around align-items-center">
                    <div className="col text-center">
                      <Bootstrap />
                    </div>
                    <div className="col text-center">
                      <Foundation />
                    </div>
                    <div className="w-100" />
                    <div className="col text-center">
                      <Material />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-group">
            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">Testing</h4>
              <div className="card-body pt-1">
                <div className="container">
                  <div className="row justify-content-around align-items-center">
                    <div className="col text-center">
                      <Rspec />
                    </div>
                    <div className="col text-center">
                      <p className="text-info m-3">Capybara</p>
                    </div>
                    <div className="w-100" />
                    <div className="col text-center">
                      <Enzyme />
                    </div>
                    <div className="col text-center">
                      <Jasmine />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">Database & Utilities</h4>
              <div className="card-body">
                <div className="container">
                  <div className="row justify-content-around align-items-center">
                    <div className="col text-center">
                      <Postgres />
                    </div>
                    <div className="col text-center">
                      <Webpack />
                    </div>
                    <div className="w-100" />
                    <div className="col text-center">
                      <Yarn />
                    </div>
                    <div className="col text-center">
                      <Git />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">Middleware & API's</h4>
              <div className="card-body">
                <div className="container">
                  <div className="row justify-content-around align-items-center">
                    <div className="col text-center">
                      <ReactRouter />
                    </div>
                    <div className="col text-center">
                      <ReduxSaga />
                    </div>
                    <div className="w-100" />
                    <div className="col text-center">
                      <ActiveRecord />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
