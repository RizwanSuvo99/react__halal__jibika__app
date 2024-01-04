import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.css";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const handleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div className="header flex ai-c jc-sb">
      <div className="header__logo">
        <Link to="/">
          <h2>Halal Jibika</h2>
        </Link>
      </div>
      <Navbar />
      <div>
        <Navbar />
      </div>
      <button className="navbar__btn" onClick={handleMenu}>
        <MdOutlineMenu />
      </button>
    </div>
  );
};

export default Header;
