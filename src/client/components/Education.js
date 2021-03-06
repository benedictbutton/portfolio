import React from "react";
import GtownName from "../assets/icons/GtownName";
import GtownSeal from "../assets/icons/GtownSeal";

const Education = () => {
  return (
    <div className="card border-primary bg-dark my-5">
      <div className="card-header">
        <div className="row">
          <div className="col-12 col-md-8">
            <GtownSeal />
            <GtownName />
          </div>
          <div className="col-12 col-md-4 align-self-center text-right">
            <h4>Washington D.C.</h4>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-9 md-font">
            <em>B.A., English</em>
            <div className="w-100" />
            <em>Minor in Philosophy</em>
          </div>
          <div className="col-3 md-font text-right">May 2007</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
