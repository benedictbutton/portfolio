import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/arrows.svg";

const IntroPage = () => {
  return (
    <div className="home d-flex flex-grow-1">
      <div className="d-flex flex-grow-1 flex-column align-items-center titles">
        <h1 className="title text-center">Benedict Daly</h1>
        <h3 className="subtitle text-center">
          Jr Full Stack Software Developer
        </h3>
        <div>
          <Link to="/home">
            <img
              src={image}
              alt="start"
              height="70%"
              width="70%"
              className="icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
