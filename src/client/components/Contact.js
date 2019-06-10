import React, { useState } from "react";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    event.preventDefault();
    try {
      let response = await fetch(`/api/send/`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(values)
      });
      let responseJson = await response.json();
      console.log(responseJson);
      if (response.ok) showMessage();
    } catch (error) {
      showAlert();
    }
  };

  const showAlert = () => {
    // setValues({
    //   ...values,
    //   colorCode: "bg-alert",
    //   notification: "Sorry, looks like something went wrong."
    // });
    // $("#mytoast").toast("show");
    console.log("Sorry, there was an error.");
  };

  const showMessage = () => {
    setValues({
      name: "",
      email: "",
      message: ""
    });
    $("#mytoast").toast("show");
  };

  return (
    <div className="toaster">
      <div className="container align-self-center w-75 border border-primary mb-5 p-3">
        <form id="myform" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="formControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="formControlInput1"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label for="formControlInput2">Email address</label>
            <input
              type="email"
              className="form-control"
              id="formControlInput2"
              placeholder="name@example.com"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label for="formControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="formControlTextarea1"
              rows="3"
              name="message"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div
        id="mytoast"
        className="toast bg-primary mb-5"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-autohide="false"
      >
        <div className="toast-header">
          <strong className="mr-auto">Message Notification</strong>
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body text-white">Message successfully sent!</div>
      </div>
    </div>
  );
};

export default Contact;
