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
  useSignOut,
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(halalAuth);
  const [signOut] = useSignOut();
  const [signInWithGoogle, googleLoading, googleError] =
    useSignInWithGoogle(halalAuth);
  const [signInWithGithub, gitHubLoading, gitHubError] =
    useSignInWithGithub(halalAuth);

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
        Swal.fire({
          title: "Success!",
          text: "Sign up successful. You are now logged in.",
          icon: "success",
          confirmButtonText: "OK",
        });

        navigate("/");
      } catch (error) {
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

  const handleLogout = async () => {
    try {
      await signOut();
      Swal.fire({
        title: "Success!",
        text: "Logout successful.",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
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
  };

  if (loading || googleLoading || gitHubLoading) {
    return <Loading />;
  }

  if(error || googleError || gitHubError){
    console.log(error || googleError || gitHubError);
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

        <div className="navigation-buttons">
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
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
