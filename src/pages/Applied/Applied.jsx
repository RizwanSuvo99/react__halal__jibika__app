import { useState } from "react";
import Swal from "sweetalert2";
import "./Applied.css"; 

const Applied = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    link: "",
    link2: "",
    text: "",
    longDescriptionLink: "",
  });

  const changingValue = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleInput = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!inputs.name.trim() || !inputs.email.trim() || !inputs.link.trim() || !inputs.link2.trim() || !inputs.text.trim()) {

      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Success!",
      text: "Application submitted successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Reset form inputs after submission
    setInputs({
      name: "",
      email: "",
      link: "",
      link2: "",
      text: "",
      longDescriptionLink: "",
    });
  };

  return (
    <div className="applyContainer">
      <div className="formBox">
        <form onSubmit={handleInput}>
          <div className="inputField">
            <div className="inputBorder">
              <h1 className="contactHeading">Apply Form</h1>
              <input
                name="name"
                value={inputs.name}
                onChange={changingValue}
                type="text"
                placeholder="Full Name"
              />{" "}
              <br />
              <input
                name="email"
                value={inputs.email}
                onChange={changingValue}
                type="text"
                placeholder="Email"
              />{" "}
              <br />
              <input
                name="link"
                value={inputs.link}
                onChange={changingValue}
                type="text"
                placeholder="Portfolio Link"
              />{" "}
              <br />
              <input
                name="link2"
                value={inputs.link2}
                onChange={changingValue}
                type="text"
                placeholder="CV Drive Link"
              />{" "}
              <br />
              <input
                name="text"
                value={inputs.text}
                onChange={changingValue}
                type="text"
                placeholder="Job Position"
              />{" "}
              <br />
              <input
                name="longDescriptionLink"
                value={inputs.longDescriptionLink}
                onChange={changingValue}
                type="text"
                placeholder="Long Description Doc Link"
              />{" "}
              <br />
              <button className="submitBtn">Apply</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Applied;
