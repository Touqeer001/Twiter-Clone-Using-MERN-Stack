import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

// imoprt twiterImage from '../Image/twiterImage.jpg';
import twiterImage from "../Image/twitter.jpeg";
import auth from "../../../firebase.init";
import TwitterIcon from "@mui/icons-material/Twitter";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [ setError] = useState("");
  // const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const handleLogin = () => {
    // e.preventDefault();

    signInWithGoogle();
  };

  const [signInWithGoogle, gooleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.log(user);
  console.log(gooleUser);
  if (error || googleError) {
    console.log("googleErro");
    console.log("googleErro");
  }
  if (loading || googleLoading) {
    return <p>Loading...</p>;
  }
  if (user || gooleUser) {
    console.log("gooleUser");
    navigate("/");
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
            <form onSubmit={handleSubmit}>
              <input
                className="email"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="email"
                type="password"
                placeholder="Pasword"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="btn-login">
                <button className="btn" type="submit">
                  Log in
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
            Dont Have Account
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "var(--twitter-color)",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
