import React from "react";
import resume from "../Resume.pdf";

const Resume = () => {
  return (
    <div className="container">
      <h2>Resume</h2>
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          className="embed-responsive-item"
          src={resume}
          type="application/pdf"
        />
      </div>
    </div>
  );
};

export default Resume;
