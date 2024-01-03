/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import "./Home.css";
import heroImg from "../../assets/img/hero__img.png";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();
  jobs.length = 4;
  return (
    <>
      <div className="home flex">
        <div className="home__text flex">
          <h1>Empower & Elevate</h1>
          <h1>Explore Jobs with Halal Jibika</h1>
          <p>Unlocking Doors to Exciting Opportunities and Growth</p>
        </div>
        <div className="home__img">
          <img src={heroImg} alt="hero-bg" />
        </div>
      </div>
      <div className="hero__bottom">
        {jobs.map((job) => (
          <div className="user__card" key={job.id}>
            <div className="job-card">
              <img
                src={job.logo}
                alt={job.companyName}
                className="company-logo"
              />
              <div className="job-details">
                <h2>{job.title}</h2>
                <p>{job.companyName}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="user__btn">
          <Link className="btn" to="/jobs">
            Explore All Jobs
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
