/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import "./Favourite.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Favourites = () => {
  const jobs = useLoaderData();
  const filteredData = jobs.filter((job) => job.isFavourite);
  const [apiData,setApiData] = useState(filteredData);
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/jobs/${id}`);
  };

  const handleApplyNow = () => {
    navigate("/applied");
  };

  const handleFavorite = (job) => {
    console.log(job);
    const status = job.isFavourite === "undefined" ? false : !job.isFavourite;
    axios.put(`http://localhost:9000/jobs/${job.id}`, {
      ...job,
      isFavourite: status,
    });
    setApiData(
      apiData.filter((data) => {
        return data.id !== job.id;
      })
    );
  };

  return (
    <div className="favourites">
      {apiData.map((job) => (
        <div className="job-card" key={job.id}>
          <img src={job.logo} alt={job.companyName} className="company-logo" />
          <div className="job-details">
            <h2>{job.title}</h2>
            <p>{job.companyName}</p>
            <p>{job.position}</p>
            <p>{job.description}</p>
          </div>
          <div className="job-actions flex jc-sb">
            <div>
              <button onClick={() => handleFavorite(job)}>
                <FaHeart className={job.isFavourite && "heart"} />
              </button>
            </div>
            <div>
              <button onClick={() => handleDetails(job.id)}>Details</button>
              <button onClick={handleApplyNow}>Apply Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
