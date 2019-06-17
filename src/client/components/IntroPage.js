import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../assets/profile-pic.jpeg";

const IntroPage = () => {
  return (
    <div className="home d-flex flex-grow-1">
      <div className="d-flex flex-grow-1 flex-column align-items-center titles">
        <div className="img-responsive">
          <img
            src={image}
            className="img-circle border border-primary border-3"
          />
        </div>
        <h1 className="title text-center">Benedict Daly</h1>
        <h3 className="subtitle text-center">
          Jr Full Stack Software Developer
        </h3>
        <div>
          <Link to="/home">
            <FontAwesomeIcon
              className="icon"
              icon={["far", "arrow-alt-circle-right"]}
              size="2x"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
