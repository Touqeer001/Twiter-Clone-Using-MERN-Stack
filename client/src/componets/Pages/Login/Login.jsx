import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// imoprt twiterImage from '../Image/twiterImage.jpg';
import twiterImage from "../Image/twitter.jpeg";
import auth from "../../../firebase.init";
import TwitterIcon from "@mui/icons-material/Twitter";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(email, password)}
  
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.log(user);
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
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  return (
    <>
      <div className="login-container">
        <div image-container>
          <img className="image" src={twiterImage} alt="Twiter Iamge"></img>
        </div>
        <div className="form-container">
          <div className="form-box">
            <TwitterIcon></TwitterIcon>

            <h2 className="heading">Happening Now</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="email"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Pasword"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="btn-login">
                <button className="bt-submit" type="submit">
                  Log in
                </button>
              </div>
            </form>
            <hr></hr>
          </div>
          <div> Goole Button</div>
          <div>
            Dont Have Account
            <Link to="/signup">Sign Up</Link>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
