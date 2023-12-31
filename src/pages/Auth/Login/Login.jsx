import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
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

          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <Link to="/" className="btn">
              Go to Home
            </Link>
            <Link to="/lastPage" className="btn">
              Go to Last Page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
