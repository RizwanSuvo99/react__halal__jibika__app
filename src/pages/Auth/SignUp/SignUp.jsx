import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import the SignUp styles
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { RiSendBackward } from "react-icons/ri";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    if (password === confirmPassword) {
      alert("Sign Up successful!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <form className="signup-form">
          <h1>Sign Up</h1>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="button"
            className="signup-button btn"
            onClick={handleSignUp}
          >
            Sign Up
          </button>

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

export default SignUp;
