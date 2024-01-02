/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { RiSendBackward } from "react-icons/ri";
import Swal from "sweetalert2";
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

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formInputs, setFormInputs] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const { username, email, password, confirmPassword } = formInputs;

  const inputChanges = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await createUserWithEmailAndPassword(email, password);
        navigate("/");
      } catch (error) {
        // Check if the error is due to the email already existing
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            title: "Error!",
            text: "This email address is already in use.",
            icon: "error",
            confirmButtonText: "OK",
          });
        } else {
          console.error(error);
        }
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

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
          <div className="error">{formErrors.username}</div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={inputChanges}
          />
          <div className="error">{formErrors.email}</div>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={inputChanges}
          />
          <div className="error">{formErrors.password}</div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={inputChanges}
          />
          <div className="error">{formErrors.confirmPassword}</div>

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
