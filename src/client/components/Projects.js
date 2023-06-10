import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Technologies from './Technologies';
import { projectData } from '../Data/projectData';

const Projects = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(0);
  };

  return (
    <div
      className="container-fluid mt-5 carousel slide"
      id="carouselIndicators"
      data-ride="carousel"
      data-interval="false"
    >
      <div className="row">
        <div className="carousel-inner border border-primary bg-dark">
          {projectData.map((project, idx) => {
            const { id, image, site, description, tools, video } =
              project;
            return (
              <div
                className={`${
                  idx === 0 ? 'active' : ''
                } carousel-item container-fluid`}
                key={idx}
              >
                <div className="row">
                  {image && (
                    <div className="col-12 col-lg-8 pl-0">
                      <img
                        src={image}
                        className="d-block w-100 img-fluid prj-images"
                        alt=""
                      />
                    </div>
                  )}
                  {video && (
                    <div
                      className="col-12 col-lg-8 text-center"
                      style={{ backgroundColor: 'black' }}
                    >
                      <video
                        controls
                        autoPlay
                        muted
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <source src={video}></source>
                      </video>
                    </div>
                  )}
                  <div
                    className={`col-12 col-lg-4 mt-2 ${
                      video ? 'pl-3' : 'pl-1'
                    } pr-3`}
                  >
                    <h5>Site:</h5>
                    <p className="sm-font">
                      <a
                        href={site}
                        alt="link to project"
                        className="text-white"
                        style={{
                          textDecoration:
                            id !== 4 && 'solid underline #007bff 3px',
                          textUnderlineOffset: '5px',
                        }}
                      >
                        {site}
                      </a>
                    </p>
                    <h5>Description:</h5>
                    <p className="sm-font text-justify text-wrap">
                      {description}
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary mb-2"
                      data-toggle="modal"
                      data-target="#modalCenter"
                      onClick={() => setCount(id)}
                    >
                      View Toolbox
                    </button>
                    {count === id && (
                      <Technologies
                        tools={tools}
                        handleCount={handleCount}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
              <li
                data-target="#carouselIndicators"
                data-slide-to="3"
                onClick={() => setCount(0)}
              />
              <li
                data-target="#carouselIndicators"
                data-slide-to="4"
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
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselIndicators"
              role="button"
              data-slide="next"
              onClick={() => setCount(0)}
            >
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
