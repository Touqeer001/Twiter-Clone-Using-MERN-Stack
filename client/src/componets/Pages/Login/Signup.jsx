import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

// imoprt twiterImage from '../Image/twiterImage.jpg';
import twiterImage from "../Image/twitter.jpeg";
import auth from "../../../firebase.init";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import "./style.css";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState();
  const [name, setName] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithGoogle, gooleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, name, email, password);
    createUserWithEmailAndPassword(email, password);

    const user = {
      username: username,
      name: name,
      email: email,
    };
    const data = axios.post("http://localhost:5000/register", user);
    console.log(data);
  };

  const handleLogin = () => {
    signInWithGoogle();
  };

  //  const [signInWithEmailAndPassword, user, loading, error] =
  //     useSignInWithEmailAndPassword(auth);
  //   console.log(user);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }

  return (
    <>
      <div className="login-container">
        <div className="image-container">
          <img className="image" src={twiterImage} alt="Twiter Iamge"></img>
        </div>
        <div className="form-container">
          <div className="form-box">
            <TwitterIcon className="Twitter-img"></TwitterIcon>

            <h1 className="heading-1">Happening Now</h1>
            <div class="d-flex align-items-sm-center">
              <h3 className="heading">Join twitter today </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="display-name"
                type="text"
                placeholder="@username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                className="display-name"
                type="text"
                placeholder="Enter full Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                className="display-name"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="display-name"
                type="password"
                placeholder="Pasword"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="btn-login">
                <button className="btn" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
            <hr></hr>
          </div>
          <div>
            {" "}
            <GoogleButton
              className="g-btn"
              type="light"
              onClick={handleLogin}
            ></GoogleButton>
          </div>
          <div className="signUpText">
            ALready Have an Account
            <Link
              to="/Login"
              style={{
                textDecoration: "none",
                color: "var(--twitter-color)",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
