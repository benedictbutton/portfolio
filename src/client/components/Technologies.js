import React from 'react';

const Technologies = ({ tools }) => {
  let toolItems = tools.map((tool, index) => {
    return (
      <div className="col text-center" key={index}>
        {tool}
      </div>
    );
  });
  return (
    <div
      className="modal fade"
      id="modalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title" id="modalCenterTitle">
              Technologies
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row justify-content-around align-items-center">
              {toolItems}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
