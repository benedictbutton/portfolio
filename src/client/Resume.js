import React from "react";

const Resume = () => {
  const handleDownload = () => {
    async function fetchDocument() {
      try {
        let response = await fetch(
          `http://localhost:8080/api/documentDownload`,
          {
            credentials: "same-origin",
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        let responseJson = await response.json();
        if (response.ok) return responseJson;
      } catch (err) {
        return error;
      }
    }
  };
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
