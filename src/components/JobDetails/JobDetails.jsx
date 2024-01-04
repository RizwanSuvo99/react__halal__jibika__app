
import "./JobDetails.css";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, logo, companyName, position, description } = useLoaderData();

  const handleEdit = () => {
    // Add your edit logic here
    console.log("Edit button clicked");
  };

  return (
    <div className="jobDetails">
      <div className="job-details-container">
        <img src={logo} alt={companyName} className="company-logo" />
        <div className="job-details">
          <h2>{title}</h2>
          <p>{companyName}</p>
          <p>{position}</p>
          <p>{description}</p>
        </div>
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
