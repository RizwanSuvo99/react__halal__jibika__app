import { useLoaderData } from "react-router-dom";
import Job from "../../components/Job/Job";
import "./Jobs.css";

const Jobs = () => {
  const jobs = useLoaderData();

  return (
    <div className="jobs">
      <div className="jobs__heading">
        <h1>Total available Jobs: {jobs.length}</h1>
      </div>
      <div className="jobs__cards">
        {jobs.map((job) => (
          <Job key={job.id} job={job}/>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
