/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaTrash, FaHeart } from "react-icons/fa";
import "./Job.css";
import { useNavigate } from "react-router-dom";

const Job = ({ job, handleDelete, handleFavorite }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/jobs/${job.id}`);
  };

  const handleApplyNow = () => {
    navigate("/applied");
  };

  return (
    <div className="job-card">
      <img src={job.logo} alt={job.companyName} className="company-logo" />
      <div className="job-details">
        <h2>{job.title}</h2>
        <p>{job.companyName}</p>
        <p>{job.position}</p>
        <p>{job.description}</p>
      </div>
      <div className="job-actions flex jc-sb">
        <div>
          <button onClick={() => handleDelete(job.id)}>
            <FaTrash />
          </button>
          <button onClick={() => handleFavorite(job)}>
            <FaHeart className={job.isFavourite && "heart"} />
          </button>
        </div>
        <div>
          <button onClick={handleDetails}>Details</button>
          <button onClick={handleApplyNow}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
