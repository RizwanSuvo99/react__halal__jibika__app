import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa"; // Import Google and GitHub icons
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
    // Add your login logic here
    alert("Login button clicked!");
  };

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

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
              <FaGoogle className="icon" /> Login with Google
            </button>
            <button className="social-btn github-btn btn">
              <FaGithub className="icon" /> Login with GitHub
            </button>
          </div>

          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <Link onClick={handleBackToHome} className="btn">
              Go to Home
            </Link>
            <Link onClick={handleBack} className="btn">
              Go to Last Page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
