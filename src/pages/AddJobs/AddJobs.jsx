import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./AddJobs.css"; // Add your CSS file for styling

const AddJobs = () => {
  const [formData, setFormData] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.title || !formData.companyName || !formData.position || !formData.logo || !formData.description) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      // Make a POST request to your server using Axios
      const response = await axios.post("http://localhost:9000/jobs", formData);

      // Check if the request was successful
      if (response.status === 201) {
        // Show success toast message
        Swal.fire({
          title: "Success!",
          text: "Job added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset the form after successful submission
        setFormData({
          title: "",
          logo: "",
          companyName: "",
          position: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error adding job:", error);
      // Show error toast message
      Swal.fire({
        title: "Error!",
        text: "An error occurred while adding the job. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="add-jobs">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="logo">Logo URL *</label>
        <input
          type="text"
          id="logo"
          name="logo"
          value={formData.logo}
          onChange={handleChange}
        />

        <label htmlFor="companyName">Company Name *</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />

        <label htmlFor="position">Position *</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />

        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJobs;
