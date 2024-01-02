import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { RiSendBackward } from "react-icons/ri";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    // Basic form validation
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email.trim() || !password.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Email and password are required.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Add your login logic here

    // Example SweetAlert for successful login
    Swal.fire({
      title: "Success!",
      text: "Login successful.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button
            type="button"
            className="login-button btn"
            onClick={handleLogin}
          >
            Log In
          </button>
          <p>
            Haven't account? <Link to={"/signup"}>Create New Account</Link>
          </p>

          {/* Icons for Google and GitHub login */}
          <div className="social-buttons">
            <button className="social-btn google-btn btn">
              <FaGoogle className="icon" /> Google Login
            </button>
            <button className="social-btn github-btn btn">
              <FaGithub className="icon" /> GitHub Login
            </button>
          </div>

          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <Link onClick={handleBackToHome} className="btn">
              <IoHome />
            </Link>
            <Link onClick={handleBack} className="btn">
              <RiSendBackward />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
