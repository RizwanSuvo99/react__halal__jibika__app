/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import the SignUp styles
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { RiSendBackward } from "react-icons/ri";
import { halalAuth } from "../../../firebase/firebase.config";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(halalAuth);

  const handleBack = () => {
    navigate(-1);
  };
  const handleBackToHome = () => {
    navigate("/");
  };

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formInputs, setFormInputs] = useState(initialState);

  const { username, email, password, confirmPassword } = formInputs;

  const inputChanges = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return <Loading />;
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      alert("Passwords do not match!");
    }
    navigate("/")
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignUp}>
          <h1>Sign Up</h1>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={inputChanges}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={inputChanges}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={inputChanges}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={inputChanges}
          />

          <button className="signup-button btn">Sign Up</button>
        </form>
        <div className="social-buttons">
          <button className="social-btn google-btn btn">
            <FaGoogle className="icon" /> Google Login
          </button>
          <button className="social-btn github-btn btn">
            <FaGithub className="icon" /> GitHub Login
          </button>
        </div>

        <div className="navigation-buttons">
          <Link onClick={handleBackToHome} className="btn">
            <IoHome />
          </Link>
          <Link onClick={handleBack} className="btn">
            <RiSendBackward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
