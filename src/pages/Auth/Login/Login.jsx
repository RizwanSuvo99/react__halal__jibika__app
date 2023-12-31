import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { RiSendBackward } from "react-icons/ri";
import Swal from "sweetalert2";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { halalAuth } from "../../../firebase/firebase.config";
import Loading from "../../Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(halalAuth);
  const [signInWithGoogle, googleLoading, googleError] =
    useSignInWithGoogle(halalAuth);
  const [signInWithGithub, gitHubLoading, gitHubError] =
    useSignInWithGithub(halalAuth);

  const handleBack = () => {
    navigate(-1);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleLogin = async () => {
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
    await signInWithEmailAndPassword(email, password);
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        title: "Success!",
        text: "Sign up successful. You are now logged in.",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "This email address is already in use.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleSignInWithGithub = async () => {
    try {
      await signInWithGithub();
      Swal.fire({
        title: "Success!",
        text: "Sign up successful. You are now logged in.",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading || googleLoading || gitHubLoading) {
    return <Loading />;
  }
  
  if (error || googleError || gitHubError) {
    console.log(error || googleError || gitHubError);
  }

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
            <button
              onClick={handleSignInWithGoogle}
              className="social-btn google-btn btn"
            >
              <FaGoogle className="icon" /> Google Login
            </button>
            <button
              onClick={handleSignInWithGithub}
              className="social-btn github-btn btn"
            >
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
