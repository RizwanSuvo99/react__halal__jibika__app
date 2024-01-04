import { useLoaderData } from "react-router-dom";
import Job from "../../components/Job/Job";
import "./Jobs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Jobs = () => {
  const [apiData, setApiData] = useState(useLoaderData());

  const handleDelete = async (id) => {
    const filteredData = apiData.filter((data) => data.id !== id);
    setApiData(filteredData);
    try {
      await axios.delete(`http://localhost:9000/jobs/${id}`);
      Swal.fire({
        title: "Success!",
        text: "Deleted successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error(`Error deleting job with id ${id}:`, error);
    }
  };

  const handleFavorite = (job) => {
      const status = job.isFavourite === "undefined" ? false : !job.isFavourite;
      axios.put(`http://localhost:9000/jobs/${job.id}`, {
        ...job,
        isFavourite: status,
      });
  };

  return (
    <div className="jobs">
      <div className="jobs__heading">
        <h1>Total available Jobs: {apiData.length}</h1>
      </div>
      <div className="jobs__cards">
        {apiData.map((job) => (
          <Job
            key={job.id}
            job={job}
            handleDelete={handleDelete}
            handleFavorite={handleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
