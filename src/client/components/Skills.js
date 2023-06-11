import React from 'react';
import ActiveRecord from '../assets/icons/ActiveRecord';
import Bootstrap from '../assets/icons/Bootstrap';
import Css from '../assets/icons/Css';
import Enzyme from '../assets/icons/Enzyme';
import Express from '../assets/icons/Express';
import Foundation from '../assets/icons/Foundation';
import Git from '../assets/icons/Git';
import GraphQL from '../assets/icons/GraphQL';
import Html from '../assets/icons/Html';
import Jasmine from '../assets/icons/Jasmine';
import Javascript from '../assets/icons/Javascript';
import Jquery from '../assets/icons/Jquery';
import Material from '../assets/icons/Material';
import MongoDb from '../assets/icons/MongoDb';
import Nextjs from '../assets/icons/Nextjs';
import Node from '../assets/icons/Node';
import Oauth from '../assets/icons/Oauth';
import Postgres from '../assets/icons/Postgres';
import Rails from '../assets/icons/Rails';
import ReAct from '../assets/icons/ReAct';
import ReactRouter from '../assets/icons/ReactRouter';
import Redux from '../assets/icons/Redux';
import ReduxSaga from '../assets/icons/ReduxSaga';
import Rspec from '../assets/icons/Rspec';
import Ruby from '../assets/icons/Ruby';
import Tailwind from '../assets/icons/Tailwind';
import Webpack from '../assets/icons/Webpack';
import Yarn from '../assets/icons/Yarn';

const Skills = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="card-group w-100 mx-1">
            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">Languages</h4>
              <div className="card-body container p-0">
                <div className="container skills">
                  <div className="row h-100 justify-content-around align-items-center">
                    <div className="col-6 col-lg-3 text-center">
                      <Javascript />
                    </div>
                    <div className="col-6 col-lg-3 text-center">
                      <Ruby />
                    </div>
                    <div className="w-100" />
                    <div className="col-6 col-lg-3 text-center">
                      <Html />
                    </div>
                    <div className="col-6 col-lg-3 text-center">
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
              <div className="card-body p-0">
                <div className="container">
                  <div className="row h-100 justify-content-around align-items-center">
                    <div className="col-6 col-xl-3 text-center">
                      <Rails />
                    </div>
                    <div className="col-6 col-xl-3 text-center">
                      <ReAct />
                    </div>
                    <div className="col-6 col-xl-3 text-center">
                      <Node />
                    </div>
                    <div className="w-100 mb-2" />
                    <div className="col-6 col-xl-3 text-center">
                      <Redux />
                    </div>
                    <div className="col-6 col-xl-3 text-center">
                      <Nextjs />
                    </div>
                    <div className="col-6 col-xl-3 text-center">
                      <Express />
                    </div>
                    <div className="col-6 col-xl-3 text-center">
                      <Jquery />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">
                Repsonsive UI Design
              </h4>
              <div className="card-body p-0">
                <div className="container">
                  <div className="row h-100 justify-content-around align-items-center">
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
                    <div className="col text-center">
                      <Tailwind />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-group w-100 mx-1">
            <div className="card border-primary bg-dark">
              <h4 className="card-header text-center">Testing</h4>
              <div className="card-body py-1">
                <div className="container">
                  <div className="row h-100 justify-content-around align-items-center">
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
              <h4 className="card-header text-center">
                Database & Utilities
              </h4>
              <div className="card-body p-0">
                <div className="container">
                  <div className="row h-100 justify-content-around align-items-center">
                    <div className="col text-center">
                      <Postgres />
                    </div>
                    <div className="col align-center text-center">
                      <MongoDb />
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
              <h4 className="card-header text-center">
                Middleware & API's
              </h4>
              <div className="card-body p-0">
                <div className="container">
                  <div className="row h-100 justify-content-around align-items-center">
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
                    <div className="col text-center">
                      <GraphQL />
                    </div>
                    <div className="col text-center">
                      <Oauth />
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
