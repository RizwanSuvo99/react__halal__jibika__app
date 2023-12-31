import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.css"

const Header = () => {
  return (
    <div className="header flex ai-c jc-sb">
      <div className="header__logo">
        <Link to="/">
          <h2>Halal Jibika</h2>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
