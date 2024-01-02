import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name.trim()) {
      setErrors({ ...errors, name: "Name is required" });
      return;
    }

    if (!formData.email.trim()) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }

    if (!formData.message.trim()) {
      setErrors({ ...errors, message: "Message is required" });
      return;
    }

    // Example SweetAlert for form submission
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Clear form data and errors after submission
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <div className="error">{errors.name}</div>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="error">{errors.email}</div>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <div className="error">{errors.message}</div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
