import "./Home.css";
import heroImg from "../../assets/img/hero__img.png";

const Home = () => {
  return (
    <div className="home flex">
      <div className="home__text">
        <h1>Empower & Elevate</h1>
        <h1>Explore Jobs with Halal Jibika</h1>
        <p>Unlocking Doors to Exciting Opportunities and Growth</p>
      </div>
      <div className="home__img">
        <img src={heroImg} alt="hero-bg" />
      </div>
    </div>
  );
};

export default Home;
