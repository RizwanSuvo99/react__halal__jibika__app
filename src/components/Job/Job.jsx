/* eslint-disable react/prop-types */
// Job.js
import { FaEdit, FaTrash, FaHeart } from "react-icons/fa";
import "./Job.css"; // Create a new CSS file for styling if needed

const Job = ({
  job: { id, logo, companyName, position, title, description },
}) => {
  const handleEdit = () => {
    // Add logic for edit action
    console.log(`Edit job with id ${id}`);
  };

  const handleDelete = () => {
    // Add logic for delete action
    console.log(`Delete job with id ${id}`);
  };

  const handleFavorite = () => {
    // Add logic for favorite action
    console.log(`Toggle favorite for job with id ${id}`);
  };

  return (
    <div className="job-card">
      <img src={logo} alt={companyName} className="company-logo" />
      <div className="job-details">
        <h2>{title}</h2>
        <p>{companyName}</p>
        <p>{position}</p>
        <p>{description}</p>
      </div>
      <div className="job-actions">
        <button onClick={handleEdit}>
          <FaEdit />
        </button>
        <button onClick={handleDelete}>
          <FaTrash />
        </button>
        <button onClick={handleFavorite}>
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default Job;
