import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"./jobs"}>Jobs</NavLink>
        <NavLink to={"/favourites"}>Favourites</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/login"}>Log In</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
