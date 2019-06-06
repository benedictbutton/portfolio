import React from "react";

const Resume = () => {
  return (
    <div className="container">
      <h2>Resume</h2>
      <div className="embed-responsive embed-responsive-4by3">
        <object data="./src/client/OnlineResume.pdf" type="application/pdf" />
      </div>
    </div>
  );
};

export default Resume;
