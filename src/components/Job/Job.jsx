/* eslint-disable react/prop-types */
import { FaEdit, FaTrash, FaHeart } from "react-icons/fa";
import "./Job.css"; 
import { useNavigate } from "react-router-dom";

const Job = ({
  job: { id, logo, companyName, position, title, description },
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    console.log(`Edit job with id ${id}`);
  };

  const handleDelete = () => {
    console.log(`Delete job with id ${id}`);
  };

  const handleFavorite = () => {
    console.log(`Toggle favorite for job with id ${id}`);
  };

  const handleDetails = () => {
    console.log(`View details for job with id ${id}`);
  };

  const handleApplyNow = () => {
    navigate("/applied");
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
      <div className="job-actions flex jc-sb">
        <div>
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
        <div>
          <button onClick={handleDetails}>Details</button>
          <button onClick={handleApplyNow}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
