import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import { halalAuth } from "../../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const logout = () => {
    signOut(halalAuth);
    Swal.fire({
      title: "Success!",
      text: "Logout successful.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  const [user] = useAuthState(halalAuth);

  return (
    <div>
      <nav className="navbar flex">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/jobs"}>Jobs</NavLink>
        <NavLink to={"/favourites"}>Favourites</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>

        {user ? (
          <NavLink to={"/addjobs"}>Add Jobs</NavLink>
        ) : (
          <NavLink to={"/signup"}>Sign Up</NavLink>
        )}
        {user ? (
          <NavLink onClick={logout}>Logout</NavLink>
        ) : (
          <NavLink to={"/login"}>Log In</NavLink>
        )}
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            <img
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src={
                user.photoURL ? user.photoURL : "https://picsum.photos/300/200"
              }
              alt=""
            />
          </div>
        ) : (
          <NavLink className={"flex ai-c"}>
            <BsBoxArrowInRight /> Guest
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
