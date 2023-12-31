import "./Home.css";
import heroImg from "../../assets/img/hero__img.png";

const Home = () => {
  return (
    <>
      <div className="home flex">
        <div className="home__text flex">
          <h1>Empower & Elevate</h1>
          <h1>Explore Jobs with Halal Jibika</h1>
          <p>Unlocking Doors to Exciting Opportunities and Growth</p>
          <div>
            <button className="btn">Explore All Jobs</button>
          </div>
        </div>
        <div className="home__img">
          <img src={heroImg} alt="hero-bg" />
        </div>
      </div>
      <div className="hero__bottom">
        <div className="user__card"></div>
        <div className="user__card"></div>
        <div className="user__card"></div>
        <div className="user__card"></div>
      </div>
    </>
  );
};

export default Home;
