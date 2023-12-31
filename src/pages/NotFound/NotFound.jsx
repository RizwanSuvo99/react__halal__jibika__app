import { Link } from "react-router-dom";
import "./NotFound.css";
import notFoundImg from "../../assets/img/404-page-animation-example.gif";

const NotFound = () => {
  return (
    <div className="not__found">
      <img src={notFoundImg} alt="" />
      <p>The page is not Found!</p>
      <div>
        <Link to="/">
          <button>Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
