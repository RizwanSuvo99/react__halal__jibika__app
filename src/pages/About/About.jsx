// AboutPage.js
import "./About.css";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about__text">
        <div className="company-info">
          <h1>Welcome to HALAL JIBIKA</h1>
          <p>
            “HALAL JIBIKA" is more than just a job portal; it's a platform
            designed to simplify the job application process and empower
            individuals in their career pursuits.
          </p>
          <p>
            Whether you're a seasoned professional or just starting your career
            journey, HALAL JIBIKA offers a diverse range of job opportunities to
            explore.
          </p>
          <p>
            Our vision is rooted in the belief that success comes to those who
            persevere. "Keep hardworking, practice patience, and stay prepared
            for opportunities."
          </p>
        </div>
        <div className="additional-details">
          <h1>Why Choose HALAL JIBIKA?</h1>
          <ul>
            <li>Wide Range of Job Opportunities</li>
            <li>Simple and Efficient Application Process</li>
            <li>Empowering Individuals for Career Growth</li>
            <li>User-Friendly Registration and Login System</li>
          </ul>
        </div>
      </div>
      <div className="about__img">
        <img
          src="https://img.freepik.com/free-photo/customer-service-cute-brunette-guy-suit-with-laptop-happy-touching-chin_140725-164987.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutPage;
